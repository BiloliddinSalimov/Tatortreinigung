"use client";
import { s } from "../../lib/style";
import ModalShell from "../ModalShell";
import Footer from "../Footer";
import ConsentMap from "../ConsentMap";
import { CheckIcon, handIcons } from "../icons";
import { eyebrow, sectionH3 } from "../../lib/uiStyles";
import { ABOUT_SECTIONS, STEPS, HAND_SERVICES } from "../../data/content";
import { LOCATIONS } from "../../lib/siteConfig";

export default function AboutModal({ onClose }) {
  return (
    <ModalShell
      eyebrowText="Über uns"
      title="Unsere Leistungen"
      zIndex={20}
      onClose={onClose}
      ctaLabel="Jetzt kostenlos anrufen"
      gap="22px"
    >
      <div
        style={s(
          "height:1px; background:rgba(255,255,255,0.09); margin:2px 0;",
        )}
      />

      <section>
        <div style={s(eyebrow)}>In vier ruhigen Schritten</div>
        <h3 style={s(sectionH3)}>So begleiten wir Sie</h3>
        <div style={s("display:flex; flex-direction:column; gap:16px;")}>
          {STEPS.map((st, i) => (
            <div
              key={i}
              style={s("display:flex; gap:14px; align-items:flex-start;")}
            >
              {st.check ? (
                <div
                  style={s(
                    "width:40px; height:40px; border-radius:999px; background:#2E8F8A; color:#fff; display:flex; align-items:center; justify-content:center; flex-shrink:0;",
                  )}
                >
                  <CheckIcon />
                </div>
              ) : (
                <div
                  style={s(
                    "width:40px; height:40px; border-radius:999px; background:rgba(20,56,94,0.7); border:1px solid rgba(159,201,197,0.25); color:#fff; display:flex; align-items:center; justify-content:center; font-family:var(--font-serif),serif; font-size:16px; flex-shrink:0;",
                  )}
                >
                  {st.n}
                </div>
              )}
              <div>
                <div style={s("font-weight:700; font-size:15px; color:#fff;")}>
                  {st.h}
                </div>
                <div
                  style={s(
                    "font-size:13px; line-height:1.5; color:#A9BED2; margin-top:2px;",
                  )}
                >
                  {st.d}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div style={s(eyebrow)}>Unsere Leistungen</div>
        <h3 style={s(sectionH3)}>Alles aus einer Hand</h3>
        <div style={s("display:flex; flex-direction:column; gap:11px;")}>
          {HAND_SERVICES.map((sv, i) => (
            <div
              key={i}
              style={s(
                "background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.08); border-radius:15px; padding:14px 15px; display:flex; gap:13px; align-items:flex-start;",
              )}
            >
              <div
                style={s(
                  "width:42px; height:42px; border-radius:11px; background:rgba(46,143,138,0.22); display:flex; align-items:center; justify-content:center; flex-shrink:0;",
                )}
              >
                {handIcons[i]}
              </div>
              <div>
                <div
                  style={s("font-weight:700; font-size:14.5px; color:#fff;")}
                >
                  {sv.h}
                </div>
                <div
                  style={s(
                    "font-size:13px; line-height:1.5; color:#A9BED2; margin-top:2px;",
                  )}
                >
                  {sv.d}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {ABOUT_SECTIONS.map((sec) => (
        <section key={sec.n}>
          <div
            style={s(
              "display:flex; align-items:center; gap:9px; margin-bottom:13px;",
            )}
          >
            <span
              style={s(
                "width:26px; height:26px; flex-shrink:0; border-radius:8px; background:rgba(46,143,138,0.28); border:1px solid rgba(159,201,197,0.35); display:flex; align-items:center; justify-content:center; font-size:12px; font-weight:700; color:#BFE0DC;",
              )}
            >
              {sec.n}
            </span>
            <h3
              style={s(
                "font-size:13px; font-weight:700; letter-spacing:0.04em; text-transform:uppercase; color:#9FC9C5; margin:0;",
              )}
            >
              {sec.title}
            </h3>
          </div>
          <div style={s("display:flex; flex-direction:column; gap:11px;")}>
            {sec.items.map((it, i) => (
              <div
                key={i}
                style={s(
                  "background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.08); border-radius:15px; padding:14px 15px;",
                )}
              >
                <div
                  style={s(
                    "font-size:15px; font-weight:700; margin-bottom:4px;",
                  )}
                >
                  {it.h}
                </div>
                <div
                  style={s("font-size:13px; line-height:1.5; color:#A9BED2;")}
                >
                  {it.d}
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      <section>
        <div style={s(eyebrow)}>Salzburg &amp; Bayern</div>
        <h3 style={s(sectionH3)}>Nah bei Ihnen</h3>
        <div style={s("display:flex; flex-direction:column; gap:13px;")}>
          {LOCATIONS.map((loc, i) => {
            const country = loc.addressCountry === "AT" ? "Österreich" : "Deutschland";
            const query = encodeURIComponent(
              `${loc.street}, ${loc.postalCode} ${loc.city}, ${country}`,
            );
            return (
              <div
                key={i}
                style={s(
                  "border:1px solid rgba(255,255,255,0.08); border-radius:15px; overflow:hidden; background:rgba(255,255,255,0.04);",
                )}
              >
                {/* DSGVO: Karte lädt erst nach Zustimmung, siehe ConsentMap. */}
                <ConsentMap query={query} city={loc.city} />
                <div style={s("padding:15px;")}>
                  <div style={s("font-weight:700; font-size:15px; color:#fff;")}>
                    {loc.city}
                  </div>
                  <div
                    style={s(
                      "font-size:13px; color:#A9BED2; margin-top:5px; line-height:1.5;",
                    )}
                  >
                    {loc.lines[0]}
                    <br />
                    {loc.lines[1]}
                  </div>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${query}`}
                    target="_blank"
                    rel="noopener"
                    style={s(
                      "display:inline-flex; align-items:center; gap:6px; margin-top:10px; font-size:12.5px; font-weight:700; color:#7FCDC6; text-decoration:none;",
                    )}
                  >
                    In Google Maps öffnen →
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <Footer inModal />
    </ModalShell>
  );
}
