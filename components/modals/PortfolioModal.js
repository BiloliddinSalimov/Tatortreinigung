"use client";
import { memo, useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { s } from "../../lib/style";
import Hover from "../Hover";
import {
  CloseIcon,
  PhoneIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDownIcon,
} from "../icons";
import { portfolioData } from "../../data/portfolio";
import { PHONE } from "../../lib/siteConfig";

// Reels-style portfolio: each project is a full-height slide in a vertical
// snap feed (scroll down = next project, like Instagram Reels). Inside a
// slide the project's photos swipe horizontally like a carousel post.

// One project slide: horizontal photo carousel + caption overlay.
// memo(): the feed's onScroll updates the parent's `index` state mid-swipe;
// without memo every index change re-renders all slides (and their images)
// exactly during the snap animation, which makes the scroll stutter.
const ProjectSlide = memo(function ProjectSlide({ item, priority, index, registerTrack }) {
  const [imgIndex, setImgIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const trackEl = useRef(null);
  const imgCount = item.images.length;

  const attachTrack = (el) => {
    trackEl.current = el;
    registerTrack(index, el);
  };

  const goTo = (i) => {
    const el = trackEl.current;
    if (!el) return;
    const c = Math.max(0, Math.min(imgCount - 1, i));
    el.scrollTo({ left: c * el.clientWidth, behavior: "smooth" });
  };

  const onTrackScroll = () => {
    const el = trackEl.current;
    if (!el) return;
    const i = Math.round(el.scrollLeft / el.clientWidth);
    setImgIndex((p) => (p === i ? p : i));
  };

  const longText = item.description.length > 110;

  return (
    <div style={s("position:relative; background:#04090f; overflow:hidden;")}>
      {/* horizontal photo carousel */}
      <div
        ref={attachTrack}
        onScroll={onTrackScroll}
        className="dc-carousel"
        style={{ width: "100%", height: "100%" }}
      >
        {item.images.map((src, i) => (
          <div key={src} style={s("position:relative; width:100%; height:100%;")}>
            <Image
              src={src}
              alt={`${item.name} – Foto ${i + 1}`}
              fill
              sizes="(max-width:600px) 100vw, 440px"
              draggable="false"
              priority={priority && i === 0}
              style={{ objectFit: "contain" }}
            />
          </div>
        ))}
      </div>

      {/* image counter */}
      {imgCount > 1 && (
        <div style={s("position:absolute; top:12px; right:12px; z-index:4; font-size:12px; font-weight:700; color:#fff; background:rgba(4,12,20,0.55); backdrop-filter:blur(6px); -webkit-backdrop-filter:blur(6px); padding:5px 11px; border-radius:99px; letter-spacing:0.02em;")}>
          {imgIndex + 1} / {imgCount}
        </div>
      )}

      {/* horizontal arrows */}
      {imgCount > 1 && (
        <>
          <Hover
            as="button"
            type="button"
            onClick={() => goTo(imgIndex - 1)}
            aria-label="Vorheriges Foto"
            disabled={imgIndex === 0}
            base={`position:absolute; left:10px; top:50%; transform:translateY(-50%); z-index:4; width:38px; height:38px; border:none; border-radius:50%; background:rgba(4,12,20,0.5); backdrop-filter:blur(6px); -webkit-backdrop-filter:blur(6px); display:flex; align-items:center; justify-content:center; cursor:pointer; opacity:${imgIndex === 0 ? 0.3 : 1}; transition:background .15s ease;`}
            hover="background:rgba(4,12,20,0.8);"
          >
            <ChevronLeftIcon w={19} />
          </Hover>
          <Hover
            as="button"
            type="button"
            onClick={() => goTo(imgIndex + 1)}
            aria-label="Nächstes Foto"
            disabled={imgIndex === imgCount - 1}
            base={`position:absolute; right:10px; top:50%; transform:translateY(-50%); z-index:4; width:38px; height:38px; border:none; border-radius:50%; background:rgba(4,12,20,0.5); backdrop-filter:blur(6px); -webkit-backdrop-filter:blur(6px); display:flex; align-items:center; justify-content:center; cursor:pointer; opacity:${imgIndex === imgCount - 1 ? 0.3 : 1}; transition:background .15s ease;`}
            hover="background:rgba(4,12,20,0.8);"
          >
            <ChevronRightIcon w={19} />
          </Hover>
        </>
      )}

      {/* caption overlay — clicks pass through to the carousel except the
          "mehr" toggle, so horizontal swipes still work over the text */}
      <div style={s("position:absolute; left:0; right:0; bottom:0; z-index:3; pointer-events:none; padding:56px 18px 14px; background:linear-gradient(180deg, rgba(4,9,15,0) 0%, rgba(4,9,15,0.72) 42%, rgba(4,9,15,0.92) 100%);")}>
        {/* image dots */}
        {imgCount > 1 && (
          <div style={s("display:flex; align-items:center; justify-content:center; gap:6px; margin-bottom:10px;")}>
            {item.images.map((_, i) => (
              <span
                key={i}
                style={{
                  width: i === imgIndex ? 8 : 6,
                  height: i === imgIndex ? 8 : 6,
                  borderRadius: "50%",
                  background: i === imgIndex ? "#3FBF8F" : "rgba(255,255,255,0.5)",
                  transition: "all .2s ease",
                }}
              />
            ))}
          </div>
        )}

        <div style={s("font-weight:700; font-size:15.5px; color:#fff; line-height:1.3;")}>
          {item.name}
        </div>
        <p
          style={{
            margin: "6px 0 0",
            fontSize: "13px",
            lineHeight: 1.5,
            color: "#C7D6E4",
            ...(expanded
              ? { maxHeight: "22vh", overflowY: "auto", pointerEvents: "auto" }
              : {
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }),
          }}
        >
          {item.description}
        </p>
        {longText && (
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            style={s("pointer-events:auto; margin-top:4px; padding:0; border:none; background:none; color:#7FCDC6; font-size:12.5px; font-weight:700; cursor:pointer;")}
          >
            {expanded ? "weniger" : "mehr"}
          </button>
        )}
      </div>
    </div>
  );
});

export default function PortfolioModal({ onClose }) {
  const panelRef = useRef(null);
  const feedRef = useRef(null);
  const trackRefs = useRef([]);
  const [index, setIndex] = useState(0);
  const count = portfolioData.length;

  // Stable identity so memo(ProjectSlide) actually skips re-renders.
  const registerTrack = useCallback((i, el) => {
    trackRefs.current[i] = el;
  }, []);

  const goToProject = (i) => {
    const el = feedRef.current;
    if (!el) return;
    const c = Math.max(0, Math.min(count - 1, i));
    el.scrollTo({ top: c * el.clientHeight, behavior: "smooth" });
  };

  const currentProject = () => {
    const el = feedRef.current;
    if (!el) return 0;
    return Math.round(el.scrollTop / el.clientHeight);
  };

  const onFeedScroll = () => {
    const i = currentProject();
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
      if (e.key === "ArrowDown") {
        e.preventDefault();
        goToProject(currentProject() + 1);
        return;
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        goToProject(currentProject() - 1);
        return;
      }
      if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
        const track = trackRefs.current[currentProject()];
        if (!track) return;
        const dir = e.key === "ArrowRight" ? 1 : -1;
        const i = Math.round(track.scrollLeft / track.clientWidth);
        track.scrollTo({ left: (i + dir) * track.clientWidth, behavior: "smooth" });
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
          "position:relative; overflow:hidden; display:flex; flex-direction:column; background:linear-gradient(180deg, rgba(20,44,67,0.96) 0%, rgba(8,21,34,0.98) 100%); color:#fff; animation:modalpop 0.42s cubic-bezier(0.22,1,0.36,1) both;",
        )}
      >
        {/* header */}
        <div style={s("flex-shrink:0; padding:18px 20px 15px; border-bottom:1px solid rgba(255,255,255,0.09);")}>
          <div style={s("display:flex; align-items:flex-start; justify-content:space-between; gap:14px;")}>
            <div>
              <div style={s("display:inline-flex; align-items:center; gap:7px; font-size:10px; font-weight:700; letter-spacing:0.14em; text-transform:uppercase; color:#7FCDC6; margin-bottom:6px;")}>
                <span style={s("width:6px; height:6px; border-radius:50%; background:#3FBF8F;")} />
                Portfolio · {index + 1}/{count}
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

        {/* vertical Reels feed: one project per full-height slide */}
        {/* min-block-size gives the feed a real height on desktop where the
            panel is height:auto; on mobile flex:1 fills the screen */}
        <div style={s("position:relative; flex:1; min-height:0; min-block-size:min(58vh, 560px);")}>
          <div
            ref={feedRef}
            onScroll={onFeedScroll}
            className="dc-reels"
            style={{ position: "absolute", inset: 0 }}
          >
            {portfolioData.map((item, i) => (
              <ProjectSlide
                key={item.id}
                item={item}
                priority={i === 0}
                index={i}
                registerTrack={registerTrack}
              />
            ))}
          </div>

          {/* scroll-down hint, only on the first project */}
          {index === 0 && count > 1 && (
            <div style={s("position:absolute; left:50%; transform:translateX(-50%); top:12px; z-index:4; pointer-events:none; display:flex; align-items:center; gap:6px; white-space:nowrap; font-size:11.5px; font-weight:600; color:#fff; background:rgba(4,12,20,0.55); backdrop-filter:blur(6px); -webkit-backdrop-filter:blur(6px); padding:5px 12px; border-radius:99px;")}>
              <span style={{ display: "flex", animation: "reelhint 1.6s ease-in-out infinite" }}>
                <ChevronDownIcon w={14} />
              </span>
              Weiter scrollen
            </div>
          )}
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
