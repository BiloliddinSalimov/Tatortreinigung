"use client";
import { useEffect, useState } from "react";
import { s } from "../../lib/style";
import Hover from "../../components/Hover";
import CookiePreferencesForm from "../../components/CookiePreferencesForm";
import {
  DEFAULT_PREFERENCES,
  loadConsent,
  saveConsent,
  clearConsent,
} from "../../lib/consent";

export default function CookieSettingsClient() {
  const [prefs, setPrefs] = useState(DEFAULT_PREFERENCES);
  const [decidedAt, setDecidedAt] = useState(null);
  const [notice, setNotice] = useState("");

  useEffect(() => {
    const stored = loadConsent();
    if (stored) {
      setPrefs(stored);
      setDecidedAt(stored.decidedAt);
    }
  }, []);

  const persist = (next) => {
    const saved = saveConsent(next);
    setPrefs(saved);
    setDecidedAt(saved.decidedAt);
    setNotice("Ihre Auswahl wurde gespeichert.");
  };

  const revoke = () => {
    clearConsent();
    setPrefs(DEFAULT_PREFERENCES);
    setDecidedAt(null);
    setNotice(
      "Ihre Einwilligung wurde widerrufen. Beim nächsten Laden der Seite werden Sie erneut gefragt.",
    );
  };

  return (
    <div style={s("display:flex; flex-direction:column; gap:16px;")}>
      {decidedAt && (
        <p style={s("margin:0; font-size:12.5px; color:#7E93A8;")}>
          Zuletzt gespeichert am {new Date(decidedAt).toLocaleString("de-AT")}.
        </p>
      )}

      <CookiePreferencesForm
        prefs={prefs}
        onToggle={(key, val) => setPrefs((p) => ({ ...p, [key]: val }))}
        onRejectAll={() => persist({ statistics: false, marketing: false })}
        onAcceptAll={() => persist({ statistics: true, marketing: true })}
        onSave={() => persist(prefs)}
      />

      <div
        style={s(
          "border-top:1px solid rgba(255,255,255,0.09); padding-top:16px; display:flex; flex-direction:column; gap:8px;",
        )}
      >
        <Hover
          as="button"
          type="button"
          onClick={revoke}
          base="align-self:flex-start; padding:10px 16px; border-radius:12px; border:1px solid rgba(255,255,255,0.16); background:transparent; color:#E6899B; font-size:13px; font-weight:700; cursor:pointer; transition:background .15s ease;"
          hover="background:rgba(230,137,155,0.12);"
        >
          Einwilligung widerrufen
        </Hover>
        {notice && (
          <p style={s("margin:0; font-size:12.5px; color:#7FCDC6;")} role="status">
            {notice}
          </p>
        )}
      </div>
    </div>
  );
}
