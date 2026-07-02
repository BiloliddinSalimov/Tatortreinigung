// Cookie-Einwilligung: nur Local Storage, keine Server-Persistenz.
// Diese Datei ist die einzige Quelle der Wahrheit für den Zustimmungsstatus —
// von der Startseite (Banner) und der /cookie-einstellungen-Seite genutzt.

const STORAGE_KEY = "css_cookie_consent_v1";
const CHANGE_EVENT = "css-cookie-consent-change";

// Notwendig ist immer an und nicht abwählbar. Statistik/Marketing sind erst
// aktiv, sobald der Nutzer ausdrücklich zustimmt (Opt-in, nicht Opt-out).
export const COOKIE_CATEGORIES = [
  {
    key: "necessary",
    label: "Notwendig",
    locked: true,
    description:
      "Für den Betrieb der Website unbedingt erforderlich — z. B. um Ihre Cookie-Auswahl selbst zu speichern. Kann nicht deaktiviert werden.",
  },
  {
    key: "statistics",
    label: "Statistik & Analyse",
    locked: false,
    description:
      "Würden uns helfen zu verstehen, wie die Website genutzt wird. Aktuell setzen wir keine Statistik-Tools ein — die Einstellung greift automatisch, sobald sich das ändert.",
  },
  {
    key: "marketing",
    label: "Marketing",
    locked: false,
    description:
      "Würden für personalisierte Werbung oder Kampagnenmessung genutzt. Aktuell setzen wir keine Marketing-Cookies ein.",
  },
];

export const DEFAULT_PREFERENCES = { necessary: true, statistics: false, marketing: false };

export function loadConsent() {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return {
      necessary: true,
      statistics: !!parsed.statistics,
      marketing: !!parsed.marketing,
      decidedAt: parsed.decidedAt || null,
    };
  } catch {
    return null;
  }
}

export function saveConsent(prefs) {
  if (typeof window === "undefined") return;
  const value = {
    necessary: true,
    statistics: !!prefs.statistics,
    marketing: !!prefs.marketing,
    decidedAt: new Date().toISOString(),
  };
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
  window.dispatchEvent(new CustomEvent(CHANGE_EVENT, { detail: value }));
  return value;
}

// "Einwilligung widerrufen": löscht die Entscheidung vollständig, sodass der
// Banner beim nächsten Laden erneut erscheint.
export function clearConsent() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(STORAGE_KEY);
  window.dispatchEvent(new CustomEvent(CHANGE_EVENT, { detail: null }));
}

export function onConsentChange(handler) {
  if (typeof window === "undefined") return () => {};
  const listener = (e) => handler(e.detail);
  window.addEventListener(CHANGE_EVENT, listener);
  return () => window.removeEventListener(CHANGE_EVENT, listener);
}
