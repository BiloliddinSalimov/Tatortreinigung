import Link from "next/link";
import { s } from "@/lib/style";
import Hover from "./Hover";
import { LEGAL } from "@/lib/siteConfig";

const LEGAL_LINKS = [
  { href: "/impressum", label: "Impressum" },
  { href: "/datenschutz", label: "Datenschutz" },
  { href: "/cookie-einstellungen", label: "Cookie-Einstellungen" },
];

// "Rechtliches" Links + Firmenblock + Copyright. Wird am Ende der
// "Über uns"-Modal (inModal — keine eigene Seitenpolsterung/Hintergrund, der
// Rahmen kommt von ModalShell) sowie am Ende jeder Rechtsseite gerendert, so
// dass die drei Pflichtseiten von überall aus erreichbar sind.
export default function Footer({ inModal = false }) {
  const year = new Date().getFullYear();
  return (
    <footer
      style={s(
        inModal
          ? "border-top:1px solid rgba(255,255,255,0.09); padding-top:20px;"
          : "flex-shrink:0; border-top:1px solid rgba(255,255,255,0.09); background:rgba(5,15,25,0.55); padding:26px 20px calc(22px + env(safe-area-inset-bottom));",
      )}
    >
      <div
        style={s(
          inModal
            ? "display:flex; flex-direction:column; gap:18px;"
            : "max-width:680px; margin:0 auto; display:flex; flex-direction:column; gap:18px;",
        )}
      >
        <div>
          <div
            style={s(
              "font-size:10px; font-weight:700; letter-spacing:0.16em; text-transform:uppercase; color:#7FCDC6; margin-bottom:10px;",
            )}
          >
            Rechtliches
          </div>
          <div style={s("display:flex; flex-wrap:wrap; gap:8px 18px;")}>
            {LEGAL_LINKS.map((l) => (
              <Hover
                key={l.href}
                as={Link}
                href={l.href}
                base="font-size:13px; font-weight:600; color:#A9BED2; text-decoration:none;"
                hover="color:#7FCDC6;"
              >
                {l.label}
              </Hover>
            ))}
          </div>
        </div>

        <div
          style={s(
            "font-size:12.5px; line-height:1.65; color:#7E93A8; padding-top:14px; border-top:1px solid rgba(255,255,255,0.07);",
          )}
        >
          <div style={s("font-weight:700; color:#B9CBDC;")}>{LEGAL.name}</div>
          <div>
            {LEGAL.street}, {LEGAL.postalCode} {LEGAL.city}
          </div>
          <div>
            <a href={`tel:${LEGAL.phoneTel}`} style={s("color:inherit; text-decoration:none;")}>
              {LEGAL.phoneDisplay}
            </a>
            {" · "}
            <a href={`tel:${LEGAL.mobileTel}`} style={s("color:inherit; text-decoration:none;")}>
              {LEGAL.mobileDisplay}
            </a>
          </div>
          <div>
            <a
              href={`mailto:${LEGAL.email}`}
              style={s("color:inherit; text-decoration:none;")}
            >
              {LEGAL.email}
            </a>
          </div>
        </div>

        <div style={s("font-size:11.5px; color:#5D7387;")}>
          © {year} {LEGAL.name}. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
}
