import { s } from "@/lib/style";
import LegalPageShell from "@/components/LegalPageShell";
import { IMPRESSUM_FIELDS } from "@/data/legalContent";

export const metadata = {
  title: "Impressum",
  description: "Impressum gemäß §5 ECG und §25 Mediengesetz.",
  alternates: { canonical: "/impressum" },
  robots: { index: true, follow: true },
};

export default function ImpressumPage() {
  return (
    <LegalPageShell
      eyebrowText="Rechtliches"
      title="Impressum"
      intro="Informationspflicht laut §5 ECG sowie Offenlegung laut §25 Mediengesetz."
    >
      <div style={s("display:flex; flex-direction:column; gap:18px;")}>
        {IMPRESSUM_FIELDS.map((f) => (
          <div key={f.label}>
            <div
              style={s(
                "font-size:11px; font-weight:700; letter-spacing:0.08em; text-transform:uppercase; color:#7FCDC6; margin-bottom:4px;",
              )}
            >
              {f.label}
            </div>
            {f.href ? (
              <a
                href={f.href}
                target={f.href.startsWith("http") ? "_blank" : undefined}
                rel={f.href.startsWith("http") ? "noopener" : undefined}
                style={s(
                  "font-size:15.5px; line-height:1.6; color:#7FCDC6; font-weight:600; text-decoration:none;",
                )}
              >
                {f.value}
              </a>
            ) : (
              <div style={s("font-size:15.5px; line-height:1.6; color:#E6EEF5;")}>
                {f.value}
              </div>
            )}
          </div>
        ))}
      </div>
    </LegalPageShell>
  );
}
