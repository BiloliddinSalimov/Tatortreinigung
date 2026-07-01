/**
 * Ruhige Triage-Logik für den KI-Assistenten.
 * Wird als Offline-Fallback genutzt, wenn kein API-Key gesetzt ist oder die
 * KI-Modelle gerade nicht antworten. Serverseitig, stateless, kein Logging.
 *
 * Konservativ: erklärt nie eine Lage für sicher, verweist immer auf den
 * 24h-Anruf.
 */
import { PHONE_DISPLAY } from "./siteConfig";

export function triage(text) {
  const t = (text || "").toLowerCase();
  const has = (arr) => arr.some((w) => t.includes(w));

  if (
    has([
      "tod",
      "verstorb",
      "leiche",
      "tatort",
      "blut",
      "suizid",
      "selbstmord",
      "gestorben",
      "fundort",
    ])
  ) {
    return `Mein aufrichtiges Beileid – das ist eine Ausnahmesituation, und es ist gut, dass Sie sich melden.\n• Betreten Sie betroffene Räume vorerst nicht ohne Schutz und lüften Sie wenn möglich.\n• Lassen Sie alles unverändert, bis wir da sind.\nBitte rufen Sie uns jetzt an – wir sind rund um die Uhr erreichbar und kommen diskret. ${PHONE_DISPLAY}`;
  }
  if (has(["geruch", "gestank", "riecht", "verwesung", "ozon"])) {
    return `Intensive Gerüche nach einem Vorfall lassen sich fachgerecht neutralisieren, nicht nur überdecken.\n• Halten Sie betroffene Räume möglichst geschlossen.\n• Verzichten Sie auf eigene Duftsprays – das erschwert die spätere Behandlung.\nRufen Sie uns an, dann schätzen wir den Umfang gemeinsam ein. ${PHONE_DISPLAY}`;
  }
  if (has(["schädling", "insekt", "fliegen", "maden", "ungeziefer", "käfer"])) {
    return `Das gehen wir gezielt und hygienisch an – gut, dass Sie sich melden.\n• Halten Sie die betroffenen Räume möglichst geschlossen.\n• Bitte keine eigenen Mittel großflächig versprühen.\nRufen Sie uns an – wir stoppen die Ausbreitung und beseitigen die Ursache. ${PHONE_DISPLAY}`;
  }
  if (has(["desinfekt", "hygiene", "keim", "viren", "bakterien"])) {
    return `Eine fachgerechte Desinfektion sorgt dafür, dass der Bereich wieder sicher nutzbar ist.\n• Betreten Sie kontaminierte Flächen möglichst nicht.\n• Berühren Sie keine Oberflächen ohne Schutz.\nRufen Sie uns an – wir besprechen die nächsten Schritte und kommen kurzfristig vorbei. ${PHONE_DISPLAY}`;
  }
  return `Danke für Ihre Nachricht. Damit ich die richtigen nächsten Schritte nennen kann, beschreiben Sie bitte kurz, worum es geht (z. B. Todesfall, Blut- oder Sekretbeseitigung, Geruch, Schädlinge oder Desinfektion).\nWenn es dringend ist, rufen Sie uns bitte direkt an – wir sind rund um die Uhr erreichbar. ${PHONE_DISPLAY}`;
}
