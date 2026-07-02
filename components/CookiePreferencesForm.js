"use client";
import { s } from "../lib/style";
import Hover from "./Hover";
import CookieToggle from "./CookieToggle";
import { COOKIE_CATEGORIES } from "../lib/consent";

// Shared category list + toggle used both inline in the cookie banner
// ("Auswahl verwalten") and on the standalone /cookie-einstellungen page.
export default function CookiePreferencesForm({
  prefs,
  onToggle,
  onAcceptAll,
  onRejectAll,
  onSave,
  compact = false,
}) {
  return (
    <div style={s("display:flex; flex-direction:column; gap:12px;")}>
      {COOKIE_CATEGORIES.map((cat) => (
        <div
          key={cat.key}
          style={s(
            `background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.08); border-radius:14px; padding:${
              compact ? "12px 13px" : "15px 16px"
            }; display:flex; gap:13px; align-items:flex-start; justify-content:space-between;`,
          )}
        >
          <div>
            <div style={s("font-weight:700; font-size:14px; color:#fff;")}>
              {cat.label}
              {cat.locked && (
                <span
                  style={s(
                    "margin-left:8px; font-size:10px; font-weight:700; letter-spacing:0.06em; text-transform:uppercase; color:#7FCDC6;",
                  )}
                >
                  Immer aktiv
                </span>
              )}
            </div>
            <div style={s("font-size:12.5px; line-height:1.55; color:#A9BED2; margin-top:4px;")}>
              {cat.description}
            </div>
          </div>
          <CookieToggle
            checked={cat.locked ? true : !!prefs[cat.key]}
            disabled={cat.locked}
            onChange={(val) => onToggle(cat.key, val)}
            label={cat.label}
          />
        </div>
      ))}

      <div style={s("display:flex; flex-wrap:wrap; gap:9px; margin-top:4px;")}>
        <Hover
          as="button"
          type="button"
          onClick={onRejectAll}
          base="flex:1; min-width:140px; padding:12px; border-radius:13px; border:1px solid rgba(255,255,255,0.16); background:rgba(255,255,255,0.05); color:#E6EEF5; font-size:13.5px; font-weight:700; cursor:pointer; transition:background .15s ease;"
          hover="background:rgba(255,255,255,0.11);"
        >
          Nur notwendige
        </Hover>
        <Hover
          as="button"
          type="button"
          onClick={onSave}
          base="flex:1; min-width:140px; padding:12px; border-radius:13px; border:1px solid rgba(159,201,197,0.35); background:rgba(46,143,138,0.18); color:#fff; font-size:13.5px; font-weight:700; cursor:pointer; transition:background .15s ease;"
          hover="background:rgba(46,143,138,0.3);"
        >
          Auswahl speichern
        </Hover>
        <Hover
          as="button"
          type="button"
          onClick={onAcceptAll}
          base="flex:1; min-width:140px; padding:12px; border-radius:13px; border:none; background:linear-gradient(180deg,#22996A 0%,#1E8A5F 100%); color:#fff; font-size:13.5px; font-weight:700; cursor:pointer; transition:filter .15s ease;"
          hover="filter:brightness(1.08);"
        >
          Alle akzeptieren
        </Hover>
      </div>
    </div>
  );
}
