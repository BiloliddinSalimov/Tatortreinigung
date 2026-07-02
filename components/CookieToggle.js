"use client";
import { s } from "../lib/style";

// Accessible on/off switch used for cookie categories. `disabled` renders the
// "Notwendig" row as permanently on and non-interactive.
export default function CookieToggle({ checked, onChange, disabled, label }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      disabled={disabled}
      onClick={() => !disabled && onChange(!checked)}
      style={s(
        `position:relative; flex-shrink:0; width:46px; height:27px; border-radius:999px; border:1px solid ${
          checked ? "rgba(63,191,143,0.6)" : "rgba(255,255,255,0.18)"
        }; background:${
          checked ? "linear-gradient(135deg,#2E8F8A,#22996A)" : "rgba(255,255,255,0.08)"
        }; padding:0; cursor:${disabled ? "not-allowed" : "pointer"}; opacity:${
          disabled ? 0.6 : 1
        }; transition:background .18s ease, border-color .18s ease;`,
      )}
    >
      <span
        style={s(
          `display:block; width:21px; height:21px; border-radius:50%; background:#fff; box-shadow:0 2px 5px rgba(0,0,0,0.35); transform:translateX(${
            checked ? "20px" : "2px"
          }); transition:transform .18s cubic-bezier(0.22,1,0.36,1); margin-top:2px;`,
        )}
      />
    </button>
  );
}
