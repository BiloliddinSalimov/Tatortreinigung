import Link from "next/link";
import { s } from "../lib/style";
import { ChevronLeftIcon } from "./icons";
import Footer from "./Footer";

// Gemeinsamer Rahmen für /impressum, /datenschutz und /cookie-einstellungen.
// Anders als die Modals ist dies eine echte, eigenständig aufrufbare Seite
// (wichtig für §5 ECG: das Impressum muss per direktem Link erreichbar sein) —
// mobile-first, bequeme Lesebreite, gleiche Farbwelt wie der Rest der App.
export default function LegalPageShell({ eyebrowText, title, intro, children }) {
  return (
    <div
      style={s(
        "min-height:100dvh; display:flex; flex-direction:column; background:linear-gradient(180deg, #14385E 0%, #0a1c2e 42%, #050f19 100%); color:#fff; font-family:var(--font-sans),system-ui,sans-serif;",
      )}
    >
      <div
        style={s(
          "flex-shrink:0; padding:16px 20px; border-bottom:1px solid rgba(255,255,255,0.09); position:sticky; top:0; z-index:5; background:rgba(5,15,25,0.72); backdrop-filter:blur(16px); -webkit-backdrop-filter:blur(16px);",
        )}
      >
        <div style={s("max-width:680px; margin:0 auto;")}>
          <Link
            href="/"
            style={s(
              "display:inline-flex; align-items:center; gap:6px; text-decoration:none; color:#7FCDC6; font-size:13.5px; font-weight:700;",
            )}
          >
            <ChevronLeftIcon w={18} />
            Zurück
          </Link>
        </div>
      </div>

      <div style={s("flex:1; padding:34px 20px 60px;")}>
        <div style={s("max-width:680px; margin:0 auto;")}>
          <div
            style={s(
              "display:inline-flex; align-items:center; gap:7px; font-size:10px; font-weight:700; letter-spacing:0.16em; text-transform:uppercase; color:#7FCDC6; margin-bottom:10px;",
            )}
          >
            <span style={s("width:6px; height:6px; border-radius:50%; background:#3FBF8F;")} />
            {eyebrowText}
          </div>
          <h1
            style={s(
              "font-family:var(--font-serif),Georgia,serif; font-weight:300; font-size:clamp(28px,7vw,38px); line-height:1.08; margin:0 0 14px; letter-spacing:-0.015em;",
            )}
          >
            {title}
          </h1>
          {intro && (
            <p style={s("margin:0 0 30px; font-size:14.5px; line-height:1.7; color:#A9BED2;")}>
              {intro}
            </p>
          )}
          <div style={s("display:flex; flex-direction:column; gap:30px;")}>{children}</div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
