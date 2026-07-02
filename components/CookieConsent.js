"use client";
import { useEffect, useState } from "react";
import { s } from "../lib/style";
import Hover from "./Hover";
import CookiePreferencesForm from "./CookiePreferencesForm";
import { DEFAULT_PREFERENCES, loadConsent, saveConsent, onConsentChange } from "../lib/consent";

// First-visit banner: Accept all / Reject all / Manage, with statistics and
// marketing OFF by default (opt-in only). Mounted once in app/layout.js so it
// appears above every route, including the legal pages themselves.
export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [prefs, setPrefs] = useState(DEFAULT_PREFERENCES);

  useEffect(() => {
    setVisible(loadConsent() === null);
    const unsubscribe = onConsentChange((value) => {
      setVisible(value === null);
      if (value === null) setExpanded(false);
    });
    return unsubscribe;
  }, []);

  if (!visible) return null;

  const accept = (overrides) => {
    saveConsent({ ...DEFAULT_PREFERENCES, ...overrides });
  };

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Cookie-Einstellungen"
      className="dc-cookie-banner"
      style={s(
        "position:fixed; left:0; right:0; bottom:0; z-index:60; margin:0 auto; max-height:82vh; overflow-y:auto; background:linear-gradient(180deg, rgba(20,44,67,0.97) 0%, rgba(8,21,34,0.99) 100%); backdrop-filter:blur(24px); -webkit-backdrop-filter:blur(24px); box-shadow:0 -20px 50px rgba(0,0,0,0.5); color:#fff; padding:20px 20px calc(18px + env(safe-area-inset-bottom));",
      )}
    >
      <div style={s("max-width:520px; margin:0 auto; display:flex; flex-direction:column; gap:14px;")}>
        <div>
          <div style={s("font-weight:700; font-size:15px; margin-bottom:5px;")}>
            Ihre Privatsphäre ist uns wichtig
          </div>
          <p style={s("margin:0; font-size:13px; line-height:1.55; color:#A9BED2;")}>
            Wir verwenden nur technisch notwendige Speichertechnologien. Optionale
            Statistik- und Marketing-Cookies werden ausschließlich nach Ihrer
            Einwilligung aktiviert. Details in unserer{" "}
            <a href="/datenschutz" style={s("color:#7FCDC6; font-weight:600;")}>
              Datenschutzerklärung
            </a>
            .
          </p>
        </div>

        {expanded ? (
          <CookiePreferencesForm
            prefs={prefs}
            onToggle={(key, val) => setPrefs((p) => ({ ...p, [key]: val }))}
            onRejectAll={() => accept({ statistics: false, marketing: false })}
            onAcceptAll={() => accept({ statistics: true, marketing: true })}
            onSave={() => accept(prefs)}
            compact
          />
        ) : (
          <div style={s("display:flex; flex-wrap:wrap; gap:9px;")}>
            <Hover
              as="button"
              type="button"
              onClick={() => setExpanded(true)}
              base="flex:1; min-width:120px; padding:12px; border-radius:13px; border:1px solid rgba(255,255,255,0.16); background:rgba(255,255,255,0.05); color:#E6EEF5; font-size:13.5px; font-weight:700; cursor:pointer; transition:background .15s ease;"
              hover="background:rgba(255,255,255,0.11);"
            >
              Einstellungen
            </Hover>
            <Hover
              as="button"
              type="button"
              onClick={() => accept({ statistics: false, marketing: false })}
              base="flex:1; min-width:120px; padding:12px; border-radius:13px; border:1px solid rgba(255,255,255,0.16); background:rgba(255,255,255,0.05); color:#E6EEF5; font-size:13.5px; font-weight:700; cursor:pointer; transition:background .15s ease;"
              hover="background:rgba(255,255,255,0.11);"
            >
              Alle ablehnen
            </Hover>
            <Hover
              as="button"
              type="button"
              onClick={() => accept({ statistics: true, marketing: true })}
              base="flex:1; min-width:120px; padding:12px; border-radius:13px; border:none; background:linear-gradient(180deg,#22996A 0%,#1E8A5F 100%); color:#fff; font-size:13.5px; font-weight:700; cursor:pointer; transition:filter .15s ease;"
              hover="filter:brightness(1.08);"
            >
              Alle akzeptieren
            </Hover>
          </div>
        )}
      </div>
    </div>
  );
}
