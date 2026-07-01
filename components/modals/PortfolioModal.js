"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { s } from "../../lib/style";
import Hover from "../Hover";
import {
  CloseIcon,
  PhoneIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "../icons";
import { tagStyle } from "../../lib/uiStyles";
import { PORTFOLIO } from "../../data/content";
import { PHONE } from "../../lib/siteConfig";

// One continuous Instagram-style carousel: swiping changes the image on top
// AND the caption below. No grid — the Portfolio button opens this directly.
export default function PortfolioModal({ onClose }) {
  const panelRef = useRef(null);
  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);
  const count = PORTFOLIO.length;
  const active = PORTFOLIO[Math.min(index, count - 1)];

  const goTo = (i) => {
    const el = trackRef.current;
    if (!el) return;
    const c = Math.max(0, Math.min(count - 1, i));
    el.scrollTo({ left: c * el.clientWidth, behavior: "smooth" });
  };

  const currentIndex = () => {
    const el = trackRef.current;
    if (!el) return 0;
    return Math.round(el.scrollLeft / el.clientWidth);
  };

  const onScroll = () => {
    const i = currentIndex();
    setIndex((p) => (p === i ? p : i));
  };

  useEffect(() => {
    const previouslyFocused = document.activeElement;
    document.body.style.overflow = "hidden";

    const focusable = () =>
      Array.from(
        panelRef.current?.querySelectorAll(
          'a[href], button:not([disabled]), input, [tabindex]:not([tabindex="-1"])'
        ) || []
      );

    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key === "ArrowRight") {
        goTo(currentIndex() + 1);
        return;
      }
      if (e.key === "ArrowLeft") {
        goTo(currentIndex() - 1);
        return;
      }
      if (e.key === "Tab") {
        const items = focusable();
        if (items.length === 0) return;
        const first = items[0];
        const last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);
    focusable()[0]?.focus();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
      if (previouslyFocused && previouslyFocused.focus) previouslyFocused.focus();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onClose]);

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 21,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        onClick={onClose}
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(3,9,16,0.62)",
          backdropFilter: "blur(6px)",
          WebkitBackdropFilter: "blur(6px)",
          animation: "modalfade 0.28s ease both",
        }}
      />

      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Portfolio"
        className="dc-modal-panel"
        style={s(
          "position:relative; overflow:hidden; display:flex; flex-direction:column; background:linear-gradient(180deg, rgba(20,44,67,0.92) 0%, rgba(8,21,34,0.96) 100%); backdrop-filter:blur(34px) saturate(1.4); -webkit-backdrop-filter:blur(34px) saturate(1.4); color:#fff; animation:modalpop 0.42s cubic-bezier(0.22,1,0.36,1) both;",
        )}
      >
        {/* header */}
        <div style={s("flex-shrink:0; padding:18px 20px 15px; border-bottom:1px solid rgba(255,255,255,0.09);")}>
          <div style={s("display:flex; align-items:flex-start; justify-content:space-between; gap:14px;")}>
            <div>
              <div style={s("display:inline-flex; align-items:center; gap:7px; font-size:10px; font-weight:700; letter-spacing:0.14em; text-transform:uppercase; color:#7FCDC6; margin-bottom:6px;")}>
                <span style={s("width:6px; height:6px; border-radius:50%; background:#3FBF8F;")} />
                Portfolio
              </div>
              <h2 style={s("font-family:var(--font-serif),Georgia,serif; font-weight:300; font-size:25px; line-height:1.08; margin:0; letter-spacing:-0.015em;")}>
                Unsere Einsätze
              </h2>
            </div>
            <Hover
              as="button"
              type="button"
              onClick={onClose}
              aria-label="Schließen"
              base="flex-shrink:0; width:38px; height:38px; border:1px solid rgba(255,255,255,0.14); border-radius:12px; background:rgba(255,255,255,0.06); display:flex; align-items:center; justify-content:center; cursor:pointer; transition:background .15s ease;"
              hover="background:rgba(255,255,255,0.14);"
            >
              <CloseIcon />
            </Hover>
          </div>
        </div>

        {/* scrollable middle: image carousel on top, caption below */}
        <div
          className="dc-modal-scroll"
          style={{
            flex: 1,
            minHeight: 0,
            overflowY: "auto",
            scrollbarWidth: "thin",
            scrollbarColor: "rgba(255,255,255,0.16) transparent",
          }}
        >
          {/* image carousel (fixed square frame → reliable height) */}
          <div style={s("position:relative; background:#04090f;")}>
            <div
              ref={trackRef}
              onScroll={onScroll}
              className="dc-carousel"
              style={{ width: "100%", aspectRatio: "1 / 1" }}
            >
              {PORTFOLIO.map((item, i) => (
                <div key={i} style={s("position:relative; width:100%; height:100%;")}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width:600px) 100vw, 440px"
                    draggable="false"
                    priority={i === 0}
                    style={{ objectFit: "contain" }}
                  />
                </div>
              ))}
            </div>

            {/* counter */}
            {count > 1 && (
              <div style={s("position:absolute; top:12px; left:12px; z-index:4; font-size:12px; font-weight:700; color:#fff; background:rgba(4,12,20,0.55); backdrop-filter:blur(6px); -webkit-backdrop-filter:blur(6px); padding:5px 11px; border-radius:99px; letter-spacing:0.02em;")}>
                {index + 1} / {count}
              </div>
            )}

            {/* arrows */}
            {count > 1 && (
              <>
                <Hover
                  as="button"
                  type="button"
                  onClick={() => goTo(index - 1)}
                  aria-label="Vorheriges Bild"
                  disabled={index === 0}
                  base={`position:absolute; left:10px; top:50%; transform:translateY(-50%); z-index:4; width:40px; height:40px; border:none; border-radius:50%; background:rgba(4,12,20,0.5); backdrop-filter:blur(6px); -webkit-backdrop-filter:blur(6px); display:flex; align-items:center; justify-content:center; cursor:pointer; opacity:${index === 0 ? 0.3 : 1}; transition:background .15s ease;`}
                  hover="background:rgba(4,12,20,0.8);"
                >
                  <ChevronLeftIcon w={20} />
                </Hover>
                <Hover
                  as="button"
                  type="button"
                  onClick={() => goTo(index + 1)}
                  aria-label="Nächstes Bild"
                  disabled={index === count - 1}
                  base={`position:absolute; right:10px; top:50%; transform:translateY(-50%); z-index:4; width:40px; height:40px; border:none; border-radius:50%; background:rgba(4,12,20,0.5); backdrop-filter:blur(6px); -webkit-backdrop-filter:blur(6px); display:flex; align-items:center; justify-content:center; cursor:pointer; opacity:${index === count - 1 ? 0.3 : 1}; transition:background .15s ease;`}
                  hover="background:rgba(4,12,20,0.8);"
                >
                  <ChevronRightIcon w={20} />
                </Hover>
              </>
            )}

            {/* dots */}
            {count > 1 && (
              <div style={s("position:absolute; left:0; right:0; bottom:12px; z-index:4; display:flex; align-items:center; justify-content:center; gap:6px; pointer-events:none;")}>
                {PORTFOLIO.map((_, i) => (
                  <span
                    key={i}
                    style={{
                      width: i === index ? 8 : 6,
                      height: i === index ? 8 : 6,
                      borderRadius: "50%",
                      background: i === index ? "#3FBF8F" : "rgba(255,255,255,0.5)",
                      transition: "all .2s ease",
                    }}
                  />
                ))}
              </div>
            )}
          </div>

          {/* caption — changes with the active slide */}
          <div style={s("padding:15px 20px 18px;")}>
            <div key={index} style={{ animation: "risein 0.32s ease both" }}>
              <div style={s("font-weight:700; font-size:16px; color:#fff;")}>
                {active.title}
              </div>
              <div style={s("font-size:12.5px; color:#A9BED2; margin-top:3px;")}>
                {active.loc}
              </div>
              <p style={s("margin:9px 0 0; font-size:13.5px; line-height:1.55; color:#A9BED2;")}>
                {active.desc}
              </p>
              <div style={s("display:flex; flex-wrap:wrap; gap:6px; margin-top:11px;")}>
                {active.tags.map((t) => (
                  <span key={t} style={s(tagStyle)}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* footer CTA */}
        <div style={s("flex-shrink:0; padding:14px 20px calc(16px + env(safe-area-inset-bottom)); border-top:1px solid rgba(255,255,255,0.09); background:rgba(8,21,34,0.6);")}>
          <Hover
            as="a"
            href={"tel:" + PHONE}
            base="display:flex; align-items:center; justify-content:center; gap:9px; text-decoration:none; padding:15px; border-radius:15px; background:linear-gradient(180deg,#22996A 0%,#1E8A5F 100%); box-shadow:0 10px 24px rgba(30,138,95,0.4); color:#fff; font-size:15px; font-weight:700; transition:filter .16s ease;"
            hover="filter:brightness(1.08);"
          >
            <PhoneIcon w={19} />
            Kostenlose Besichtigung anfragen
          </Hover>
        </div>
      </div>
    </div>
  );
}
