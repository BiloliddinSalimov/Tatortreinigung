"use client";
import { useEffect, useRef } from "react";
import { s } from "../lib/style";
import Hover from "./Hover";
import { CloseIcon, PhoneIcon } from "./icons";
import { PHONE } from "../lib/siteConfig";

// Shared frame for the Über uns / Portfolio / FAQ modals.
// Adds accessibility on top of the prototype look: role="dialog", Escape to
// close, body scroll-lock, and a focus trap that restores focus on close.
export default function ModalShell({
  eyebrowText,
  title,
  zIndex,
  onClose,
  ctaLabel,
  gap,
  children,
}) {
  const panelRef = useRef(null);

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
  }, [onClose]);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex,
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
        aria-label={title}
        className="dc-modal-panel"
        style={s(
          "position:relative; overflow:hidden; display:flex; flex-direction:column; background:linear-gradient(180deg, rgba(20,44,67,0.92) 0%, rgba(8,21,34,0.96) 100%); backdrop-filter:blur(34px) saturate(1.4); -webkit-backdrop-filter:blur(34px) saturate(1.4); color:#fff; animation:modalpop 0.42s cubic-bezier(0.22,1,0.36,1) both;",
        )}
      >
        <div style={s("flex-shrink:0; padding:18px 20px 15px; border-bottom:1px solid rgba(255,255,255,0.09);")}>
          <div style={s("display:flex; align-items:flex-start; justify-content:space-between; gap:14px;")}>
            <div>
              <div style={s("display:inline-flex; align-items:center; gap:7px; font-size:10px; font-weight:700; letter-spacing:0.14em; text-transform:uppercase; color:#7FCDC6; margin-bottom:6px;")}>
                <span style={s("width:6px; height:6px; border-radius:50%; background:#3FBF8F;")} />
                {eyebrowText}
              </div>
              <h2 style={s("font-family:var(--font-serif),Georgia,serif; font-weight:300; font-size:25px; line-height:1.08; margin:0; letter-spacing:-0.015em;")}>
                {title}
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

        <div
          className="dc-modal-scroll"
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "20px 20px 26px",
            display: "flex",
            flexDirection: "column",
            gap,
            scrollbarWidth: "thin",
            scrollbarColor: "rgba(255,255,255,0.16) transparent",
          }}
        >
          {children}
        </div>

        <div style={s("flex-shrink:0; padding:14px 20px calc(16px + env(safe-area-inset-bottom)); border-top:1px solid rgba(255,255,255,0.09); background:rgba(8,21,34,0.6);")}>
          <Hover
            as="a"
            href={"tel:" + PHONE}
            base="display:flex; align-items:center; justify-content:center; gap:9px; text-decoration:none; padding:15px; border-radius:15px; background:linear-gradient(180deg,#22996A 0%,#1E8A5F 100%); box-shadow:0 10px 24px rgba(30,138,95,0.4); color:#fff; font-size:15px; font-weight:700; transition:filter .16s ease;"
            hover="filter:brightness(1.08);"
          >
            <PhoneIcon w={19} />
            {ctaLabel}
          </Hover>
        </div>
      </div>
    </div>
  );
}
