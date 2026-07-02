"use client";
import { useState } from "react";
import { s } from "../../lib/style";
import ModalShell from "../ModalShell";
import { PlusIcon, MinusIcon } from "../icons";
import { FAQS } from "../../data/content";

export default function FaqModal({ onClose }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <ModalShell
      eyebrowText="FAQ"
      title="Häufige Fragen"
      zIndex={22}
      onClose={onClose}
      ctaLabel="Frage stellen – jetzt anrufen"
      gap="11px"
    >
      <p style={s("margin:0 0 4px; font-size:13.5px; line-height:1.55; color:#A9BED2;")}>
        Antworten auf die Fragen, die uns am häufigsten gestellt werden. Sie
        finden keine Antwort? Rufen Sie uns an.
      </p>
      {FAQS.map((f, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i} style={s("background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.08); border-radius:14px;")}>
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex((cur) => (cur === i ? null : i))}
              style={s("width:100%; text-align:left; border:none; background:transparent; display:flex; justify-content:space-between; align-items:center; gap:13px; padding:16px 16px; cursor:pointer;")}
            >
              <span style={s("font-weight:600; font-size:14.5px; line-height:1.35; color:#fff;")}>
                {f.q}
              </span>
              <span style={s("flex-shrink:0; width:26px; height:26px; border-radius:8px; background:rgba(46,143,138,0.2); display:flex; align-items:center; justify-content:center;")}>
                {isOpen ? <MinusIcon /> : <PlusIcon />}
              </span>
            </button>
            {isOpen && (
              <p style={s("margin:0; font-size:13.5px; line-height:1.6; color:#A9BED2; padding:0 16px 16px;")}>
                {f.a}
              </p>
            )}
          </div>
        );
      })}
    </ModalShell>
  );
}
