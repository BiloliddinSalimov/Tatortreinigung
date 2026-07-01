"use client";
import { useEffect, useRef } from "react";
import { s } from "../../lib/style";
import Hover from "../Hover";
import { CloseIcon, SendIcon, SparkleIcon } from "../icons";

export default function ChatModal({ messages, sending, draft, setDraft, onSend, onClose }) {
  const scrollRef = useRef(null);
  const inputRef = useRef(null);

  // Accessibility: lock body scroll, close on Escape, focus the input.
  useEffect(() => {
    document.body.style.overflow = "hidden";
    inputRef.current?.focus();
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  // Keep the conversation pinned to the latest message.
  useEffect(() => {
    requestAnimationFrame(() => {
      if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    });
  }, [messages, sending]);

  return (
    <div style={{ position: "absolute", inset: 0, zIndex: 23, display: "flex", alignItems: "center", justifyContent: "center" }}>
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
        role="dialog"
        aria-modal="true"
        aria-label="KI-Assistent Chat"
        className="dc-modal-panel"
        style={s("position:relative; overflow:hidden; display:flex; flex-direction:column; background:linear-gradient(180deg, rgba(20,44,67,0.92) 0%, rgba(8,21,34,0.96) 100%); backdrop-filter:blur(34px) saturate(1.4); -webkit-backdrop-filter:blur(34px) saturate(1.4); color:#fff; animation:modalpop 0.42s cubic-bezier(0.22,1,0.36,1) both;")}
      >
        <div style={s("flex-shrink:0; padding:16px 18px 14px; border-bottom:1px solid rgba(255,255,255,0.09); display:flex; align-items:center; justify-content:space-between; gap:12px;")}>
          <div style={s("display:flex; align-items:center; gap:11px;")}>
            <div style={s("width:40px; height:40px; border-radius:12px; background:rgba(46,143,138,0.25); border:1px solid rgba(159,201,197,0.35); display:flex; align-items:center; justify-content:center;")}>
              <SparkleIcon w={20} />
            </div>
            <div>
              <div style={s("font-weight:700; font-size:15px; color:#fff; line-height:1.1;")}>KI-Assistent</div>
              <div style={s("display:inline-flex; align-items:center; gap:6px; font-size:11px; color:#9FC9C5; margin-top:3px;")}>
                <span style={s("width:6px; height:6px; border-radius:50%; background:#3FBF8F;")} />
                Antwortet sofort · 24/7
              </div>
            </div>
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

        <div
          ref={scrollRef}
          className="dc-modal-scroll"
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "18px 16px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            scrollbarWidth: "thin",
            scrollbarColor: "rgba(255,255,255,0.16) transparent",
          }}
        >
          {messages.map((m, i) => {
            const isUser = m.role === "user";
            return (
              <div key={i} style={{ display: "flex", justifyContent: isUser ? "flex-end" : "flex-start" }}>
                <div
                  style={{
                    maxWidth: "82%",
                    fontSize: "14px",
                    lineHeight: 1.55,
                    padding: "11px 14px",
                    borderRadius: isUser ? "16px 16px 4px 16px" : "16px 16px 16px 4px",
                    background: isUser ? "rgba(46,143,138,0.9)" : "rgba(255,255,255,0.06)",
                    border: "1px solid " + (isUser ? "rgba(127,205,198,0.5)" : "rgba(255,255,255,0.1)"),
                    color: isUser ? "#fff" : "#E6EEF5",
                    whiteSpace: "pre-wrap",
                    overflowWrap: "anywhere",
                  }}
                >
                  {m.text}
                </div>
              </div>
            );
          })}
          {sending && (
            <div style={s("display:flex; justify-content:flex-start;")}>
              <div style={s("display:flex; align-items:center; gap:5px; padding:13px 15px; border-radius:16px 16px 16px 4px; background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.1);")}>
                <span style={s("width:6px; height:6px; border-radius:50%; background:#7FCDC6; animation:dotpulse 1.2s ease-in-out infinite;")} />
                <span style={s("width:6px; height:6px; border-radius:50%; background:#7FCDC6; animation:dotpulse 1.2s ease-in-out 0.2s infinite;")} />
                <span style={s("width:6px; height:6px; border-radius:50%; background:#7FCDC6; animation:dotpulse 1.2s ease-in-out 0.4s infinite;")} />
              </div>
            </div>
          )}
        </div>

        <div style={s("flex-shrink:0; padding:12px 14px calc(14px + env(safe-area-inset-bottom)); border-top:1px solid rgba(255,255,255,0.09); background:rgba(8,21,34,0.6);")}>
          <div style={s("display:flex; align-items:center; gap:9px; background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.13); border-radius:16px; padding:6px 7px 6px 14px;")}>
            <input
              ref={inputRef}
              type="text"
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  onSend();
                }
              }}
              placeholder="Nachricht schreiben…"
              aria-label="Nachricht schreiben"
              style={s("flex:1; border:none; outline:none; background:transparent; font-family:var(--font-sans),sans-serif; font-size:14px; color:#fff; min-width:0;")}
            />
            <Hover
              as="button"
              type="button"
              onClick={onSend}
              aria-label="Senden"
              base="width:40px; height:40px; border:none; border-radius:12px; background:#2E8F8A; display:flex; align-items:center; justify-content:center; cursor:pointer; flex-shrink:0; transition:background .16s ease;"
              hover="background:#247873;"
            >
              <SendIcon />
            </Hover>
          </div>
        </div>
      </div>
    </div>
  );
}
