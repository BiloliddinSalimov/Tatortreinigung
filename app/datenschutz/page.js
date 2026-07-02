import { s } from "@/lib/style";
import LegalPageShell from "@/components/LegalPageShell";
import { DATENSCHUTZ_SECTIONS } from "@/data/legalContent";

export const metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung gemäß DSGVO.",
  alternates: { canonical: "/datenschutz" },
  robots: { index: true, follow: true },
};

export default function DatenschutzPage() {
  return (
    <LegalPageShell
      eyebrowText="Rechtliches"
      title="Datenschutzerklärung"
      intro="Stand: Juli 2026. Diese Erklärung gilt für die Nutzung dieser Website inklusive unseres KI-Assistenten."
    >
      {DATENSCHUTZ_SECTIONS.map((sec) => (
        <section key={sec.title}>
          <h2
            style={s(
              "font-family:var(--font-serif),Georgia,serif; font-weight:400; font-size:19px; line-height:1.25; color:#fff; margin:0 0 10px;",
            )}
          >
            {sec.title}
          </h2>
          <div style={s("display:flex; flex-direction:column; gap:10px;")}>
            {sec.paragraphs.map((p, i) => (
              <p
                key={i}
                style={s(
                  "margin:0; font-size:14.5px; line-height:1.7; color:#B9CBDC; white-space:pre-line;",
                )}
              >
                {p}
              </p>
            ))}
            {sec.list && (
              <ul style={s("margin:2px 0 0; padding-left:20px; display:flex; flex-direction:column; gap:7px;")}>
                {sec.list.map((item, i) => (
                  <li key={i} style={s("font-size:14.5px; line-height:1.6; color:#B9CBDC;")}>
                    {item}
                  </li>
                ))}
              </ul>
            )}
            {sec.paragraphsAfterList &&
              sec.paragraphsAfterList.map((p, i) => (
                <p
                  key={`after-${i}`}
                  style={s("margin:0; font-size:14.5px; line-height:1.7; color:#B9CBDC;")}
                >
                  {p}
                </p>
              ))}
          </div>
        </section>
      ))}
    </LegalPageShell>
  );
}
