import { triage } from "../../../lib/triage";
import { knowledge } from "../../../lib/knowledge";
import { COMPANY, PHONE_DISPLAY, EMAIL, LOCATIONS } from "../../../lib/siteConfig";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// --- Limits -----------------------------------------------------------------
const MAX_MESSAGES = 30; // conversation turns kept per request
const MAX_MSG_CHARS = 1000; // per message
const RATE_LIMIT = 20; // requests per window per IP
const RATE_WINDOW_MS = 5 * 60 * 1000; // 5 minutes

// In-memory sliding-window rate limiter. Good enough for a single instance;
// swap for Upstash/Redis if you deploy to multiple regions.
const hits = new Map();
function rateLimited(ip) {
  const now = Date.now();
  const arr = (hits.get(ip) || []).filter((t) => now - t < RATE_WINDOW_MS);
  arr.push(now);
  hits.set(ip, arr);
  if (hits.size > 5000) {
    for (const [k, v] of hits) {
      if (!v.some((t) => now - t < RATE_WINDOW_MS)) hits.delete(k);
    }
  }
  return arr.length > RATE_LIMIT;
}

function getIp(req) {
  const fwd = req.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();
  return req.headers.get("x-real-ip") || "unknown";
}

// System prompt wird dynamisch gebaut — aus lib/knowledge.js und
// lib/siteConfig.js. Nur diese Dateien pflegen; die AI antwortet dann
// automatisch mit den neuen Informationen. Kein Neu-Build nötig.
function buildSystemPrompt() {
  return [
    `Du bist der KI-Soforthilfe-Assistent von "${COMPANY.name}" – einem Spezialreinigungsdienst in Salzburg (Österreich) und Bayern (Deutschland).`,
    "",
    "ROLLE & TON:",
    "- Ruhig, einfühlsam, respektvoll. Die Person ist oft in einer Ausnahmesituation (Todesfall, Unglück, belastende Lage). Beginne bei belastenden Themen mit einem kurzen, echten Mitgefühl-Satz.",
    "- Antworte auf Deutsch, klar und konkret, in 3–6 kurzen Sätzen. Kein Smalltalk, keine leeren Floskeln, keine Wiederholungen.",
    "- Es werden keine persönlichen Daten gespeichert; bitte nicht nach persönlichen Daten fragen.",
    "",
    "SO ANTWORTEST DU INTELLIGENT:",
    "- Lies die Nachricht genau und beantworte JEDEN Teil der Frage. Wenn jemand zwei Dinge fragt (z. B. zwei Räume), geh auf beide ein.",
    "- Sei konkret und praktisch statt allgemein. Nenne den passenden nächsten Schritt für genau diese Situation, nicht nur Standardsätze.",
    "- Ordne die Situation einer unserer Leistungen zu und benenne sie (z. B. 'Das ist ein Fall für unsere Tatort- und Geruchsneutralisation').",
    "- Wenn wichtige Infos fehlen, stelle EINE gezielte Rückfrage – aber nur, wenn sie wirklich nötig ist.",
    "- Schließe mit einem klaren Hinweis auf den 24h-Notruf und der Telefonnummer.",
    "- Übernimm keine falschen Annahmen aus der Frage; wenn etwas unklar oder riskant ist, sag es ehrlich.",
    "",
    "UNSERE LEISTUNGEN (nur diese anbieten):",
    ...knowledge.leistungen.map((l) => `- ${l}`),
    "",
    `EINSATZGEBIET: ${knowledge.einsatzgebiet}`,
    "",
    "ZIELGRUPPEN (für wen wir arbeiten):",
    ...knowledge.zielgruppen.map((z) => `- ${z}`),
    "",
    "SOFORTHILFE-HINWEISE (bei akuten Fällen unbedingt mitgeben):",
    ...knowledge.soforthilfe.map((h) => `- ${h}`),
    "",
    `ABLAUF EINES AUFTRAGS: ${knowledge.ablauf}`,
    `KONTAKTWEGE: ${knowledge.kontakt}`,
    `VERFÜGBARKEIT: ${knowledge.verfuegbarkeit}`,
    `PREISE: ${knowledge.preise}`,
    `VERSICHERUNG: ${knowledge.versicherung}`,
    `DISKRETION: ${knowledge.diskretion}`,
    `QUALIFIKATION: ${knowledge.qualifikation}`,
    "",
    "KONTAKT (bei Bedarf nennen):",
    `- Telefon (24h): ${PHONE_DISPLAY}`,
    `- E-Mail: ${EMAIL}`,
    ...LOCATIONS.map(
      (l) => `- ${l.city}: ${l.street}, ${l.postalCode} ${l.city}`,
    ),
    "",
    "GRENZEN – HALTE DICH STRIKT DARAN:",
    ...knowledge.grenzen.map((g) => `- ${g}`),
    "- Erfinde niemals Informationen. Wenn du etwas nicht weißt, sage es und verweise auf den telefonischen Kontakt.",
    "",
    "HÄUFIGE FRAGEN (als Wissensbasis nutzen, frei formulieren):",
    ...knowledge.faq.map((f) => `F: ${f.frage}\nA: ${f.antwort}`),
  ].join("\n");
}

const SYSTEM_PROMPT = buildSystemPrompt();

// Nur Modelle im Gemini Free Tier, die "Thinking" unterstützen. Der Free Tier
// kann einzelne Modelle zeitweise mit 429/503 blocken → wir versuchen sie der
// Reihe nach: ist eines belegt, gehen wir zum nächsten.
const MODELS = [
  "gemini-2.5-flash", // klügste Antworten
  "gemini-2.5-flash-lite", // schneller, höheres Free-Kontingent
  "gemini-flash-latest", // zeigt stets auf das aktuelle Flash-Modell
];

export async function POST(req) {
  if (rateLimited(getIp(req))) {
    return Response.json(
      { text: `Bitte einen Moment – und rufen Sie im Notfall direkt an: ${PHONE_DISPLAY}.` },
      { status: 429 },
    );
  }

  const body = await req.json().catch(() => null);
  const raw = body && Array.isArray(body.messages) ? body.messages : null;
  if (!raw || raw.length === 0) {
    return Response.json({ text: triage("") }, { status: 200 });
  }

  // Validieren + zuschneiden: letzte MAX_MESSAGES behalten, Länge kappen, ins
  // Gemini-Format (role: "user" | "model") mappen.
  const contents = [];
  for (const m of raw.slice(-MAX_MESSAGES)) {
    const text =
      typeof m?.text === "string" ? m.text.trim().slice(0, MAX_MSG_CHARS) : "";
    if (!text) continue;
    contents.push({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text }],
    });
  }
  // Letzte Nutzer-Nachricht für den Offline-Fallback.
  const lastUser = [...contents].reverse().find((c) => c.role === "user");
  const lastUserText = lastUser?.parts?.[0]?.text || "";

  if (contents.length === 0) {
    return Response.json({ text: triage("") }, { status: 200 });
  }

  const key = process.env.GEMINI_API_KEY;

  if (key) {
    for (const model of MODELS) {
      try {
        const res = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${key}`,
          {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
              system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
              contents,
              generationConfig: {
                // Genug Platz für internes Denken + Antwort (sonst abgeschnitten)
                maxOutputTokens: 2048,
                temperature: 0.5,
                // -1 = dynamisches Denken: einfache Fragen schnell,
                // komplexe Fragen bekommen mehr Nachdenkzeit.
                thinkingConfig: { thinkingBudget: -1 },
              },
            }),
          },
        );
        if (res.ok) {
          const data = await res.json();
          const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
          if (reply) return Response.json({ text: reply }, { status: 200 });
          console.error(`[chat] ${model}: ok aber leer`, JSON.stringify(data).slice(0, 300));
        } else {
          console.error(`[chat] ${model}: ${res.status}`, (await res.text()).slice(0, 200));
        }
        // 429/503/5xx → nächstes Modell versuchen
      } catch (e) {
        console.error(`[chat] ${model}: fetch-Fehler`, String(e).slice(0, 200));
      }
    }
  }

  // Alle Modelle belegt oder kein Key → ruhiger Offline-Triage-Fallback.
  return Response.json({ text: triage(lastUserText) }, { status: 200 });
}
