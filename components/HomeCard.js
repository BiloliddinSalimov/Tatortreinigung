"use client";
import { s } from "../lib/style";
import Hover from "./Hover";
import {
  ShieldIcon,
  SparkleIcon,
  SendIcon,
  InfoIcon,
  GridIcon,
  FaqIcon,
  WhatsAppIcon,
  MailIcon,
} from "./icons";
import { WHATSAPP, EMAIL, COMPANY } from "../lib/siteConfig";

// The centered glass card: logo, headline, WhatsApp/E-Mail, AI bar and nav.
export default function HomeCard({
  aiDraft,
  setAiDraft,
  onSendAi,
  onOpenAbout,
  onOpenPortfolio,
  onOpenFaq,
}) {
  return (
    <div
      style={s(
        "width:100%; max-width:400px; border-radius:30px; padding:50px 19px 50px 26px ; background:linear-gradient(168deg, rgba(18,40,62,0.62) 0%, rgba(10,25,40,0.58) 100%); backdrop-filter:blur(30px) saturate(1.4); -webkit-backdrop-filter:blur(30px) saturate(1.4); border:1px solid rgba(255,255,255,0.13); box-shadow:0 40px 90px rgba(0,0,0,0.62), inset 0 1px 0 rgba(255,255,255,0.14); display:flex; flex-direction:column; gap:17px; color:#fff; animation:cardin 0.75s cubic-bezier(0.22,1,0.36,1) both",
      )}
    >
      {/* logo + live status */}
      <div
        style={s(
          "display:flex; align-items:center; justify-content:space-between; animation:risein 0.6s ease 0.05s both;",
        )}
      >
        <div style={s("display:flex; align-items:center; gap:10px;")}>
          <div
            style={s(
              "width:38px; height:38px; border-radius:11px; background:rgba(46,143,138,0.25); border:1px solid rgba(159,201,197,0.4); display:flex; align-items:center; justify-content:center;",
            )}
          >
            <ShieldIcon />
          </div>
        </div>
        <div
          style={s(
            "display:inline-flex; align-items:center; gap:7px; font-size:10.5px; font-weight:700; letter-spacing:0.12em; text-transform:uppercase; color:#9FC9C5;",
          )}
        >
          <span
            style={s(
              "width:7px; height:7px; border-radius:50%; background:rgb(63, 191, 143); animation:2.4s ease-out 0s infinite normal none running dotpulse;",
            )}
          />
          24/7
        </div>
      </div>

      {/* headline */}
      <div style={s("margin-top:4px; animation:risein 0.6s ease 0.12s both;")}>
        <h1
          style={s(
            "font-family:var(--font-serif),Georgia,serif; font-weight:300; font-size:34px; line-height:1.05; color:#fff; margin:0; letter-spacing:-0.015em;",
          )}
        >
          Tatortreinigung
        </h1>
        <p
          style={s(
            "margin:7px 0 0; font-family:var(--font-sans),sans-serif; font-size:14px; font-weight:500; line-height:1.35; color:#9FB6CC; letter-spacing:0.01em;",
          )}
        >
          {COMPANY.tagline}
        </p>
      </div>

      {/* WhatsApp + Email */}
      <div
        style={s(
          "display:grid; grid-template-columns:1fr 1fr; gap:11px; animation:risein 0.6s ease 0.28s both;",
        )}
      >
        <Hover
          as="a"
          href={WHATSAPP}
          target="_blank"
          rel="noopener"
          base="display:flex; flex-direction:column; gap:11px; text-decoration:none; background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.15); border-radius:17px; padding:15px 15px; color:#fff; transition:background .16s ease, border-color .16s ease;"
          hover="background:rgba(63,191,143,0.14); border-color:rgba(63,191,143,0.55);"
        >
          <span
            style={s(
              "width:42px; height:42px; border-radius:12px; background:rgba(63,191,143,0.2); display:flex; align-items:center; justify-content:center;",
            )}
          >
            <WhatsAppIcon />
          </span>
          <span style={s("line-height:1.2;")}>
            <span style={s("display:block; font-size:15px; font-weight:700;")}>
              WhatsApp
            </span>
            <span
              style={s(
                "display:block; font-size:12px; color:#9FB6CC; margin-top:2px;",
              )}
            >
              Direkt schreiben
            </span>
          </span>
        </Hover>
        <Hover
          as="a"
          href={"mailto:" + EMAIL}
          base="display:flex; flex-direction:column; gap:11px; text-decoration:none; background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.15); border-radius:17px; padding:15px 15px; color:#fff; transition:background .16s ease, border-color .16s ease;"
          hover="background:rgba(46,143,138,0.16); border-color:rgba(127,182,176,0.55);"
        >
          <span
            style={s(
              "width:42px; height:42px; border-radius:12px; background:rgba(46,143,138,0.24); display:flex; align-items:center; justify-content:center;",
            )}
          >
            <MailIcon />
          </span>
          <span style={s("line-height:1.2;")}>
            <span style={s("display:block; font-size:15px; font-weight:700;")}>
              E-Mail
            </span>
            <span
              style={s(
                "display:block; font-size:12px; color:#9FB6CC; margin-top:2px;",
              )}
            >
              Anfrage senden
            </span>
          </span>
        </Hover>
      </div>

      {/* AI bar */}
      <div
        style={s(
          "display:flex; align-items:center; gap:9px; background:rgba(46,143,138,0.10); border-radius:16px; padding:7px 8px 7px 14px; min-height:54px; animation:aiglow 3.2s ease-in-out infinite alternate;",
        )}
      >
        <SparkleIcon w={19} />
        <input
          type="text"
          value={aiDraft}
          onChange={(e) => setAiDraft(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              onSendAi();
            }
          }}
          placeholder="Frage an den KI-Assistenten…"
          aria-label="Frage an den KI-Assistenten"
          style={s(
            "flex:1; border:none; outline:none; background:transparent; font-family:var(--font-sans),sans-serif; font-size:14px; color:#fff; min-width:0;",
          )}
        />
        <Hover
          as="button"
          type="button"
          onClick={onSendAi}
          aria-label="Frage senden"
          base="width:40px; height:40px; border:none; border-radius:12px; background:#2E8F8A; display:flex; align-items:center; justify-content:center; cursor:pointer; flex-shrink:0; transition:background .16s ease;"
          hover="background:#247873;"
        >
          <SendIcon />
        </Hover>
      </div>

      {/* nav */}
      <div
        style={s(
          "display:grid; grid-template-columns:repeat(3,1fr); gap:7px; margin-top:5px; animation:risein 0.6s ease 0.36s both;",
        )}
      >
        <NavButton label="Über uns" onClick={onOpenAbout} icon={<InfoIcon />} />
        <NavButton
          label="Portfolio"
          onClick={onOpenPortfolio}
          icon={<GridIcon />}
        />
        <NavButton label="FAQ" onClick={onOpenFaq} icon={<FaqIcon />} />
      </div>
    </div>
  );
}

function NavButton({ label, onClick, icon }) {
  return (
    <Hover
      as="button"
      type="button"
      onClick={onClick}
      base="display:flex; flex-direction:column; align-items:center; gap:5px; padding:11px 0; border-radius:13px; background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.08); color:#A9BED2; cursor:pointer; transition:background .15s ease, color .15s ease;"
      hover="background:rgba(255,255,255,0.1); color:#fff;"
    >
      {icon}
      <span style={s("font-size:11px; font-weight:600;")}>{label}</span>
    </Hover>
  );
}
