"use client";
import { useEffect, useState } from "react";
import { s } from "../lib/style";
import Hover from "./Hover";
import { MapPinIcon } from "./icons";

const SESSION_KEY = "css_maps_consent";

// DSGVO-konformes "Zwei-Klick"-Kartenfeld: Google Maps wird erst nach
// ausdrücklicher Zustimmung geladen (kein automatischer Datenabfluss an
// Google beim Seitenaufruf). Die Zustimmung gilt nur für die aktuelle
// Sitzung (sessionStorage), nicht dauerhaft.
export default function ConsentMap({ query, city }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (window.sessionStorage.getItem(SESSION_KEY) === "1") setLoaded(true);
  }, []);

  const load = () => {
    setLoaded(true);
    window.sessionStorage.setItem(SESSION_KEY, "1");
  };

  if (loaded) {
    return (
      <div style={s("position:relative; height:150px; background:#0a1826;")}>
        <iframe
          title={`Karte – ${city}`}
          src={`https://maps.google.com/maps?q=${query}&z=15&output=embed`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          style={{
            width: "100%",
            height: "100%",
            border: 0,
            display: "block",
            filter: "invert(0.92) hue-rotate(180deg) brightness(0.95) contrast(0.9)",
          }}
        />
      </div>
    );
  }

  return (
    <div
      style={s(
        "height:150px; background:#0a1826; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:10px; padding:16px 18px; text-align:center;",
      )}
    >
      <MapPinIcon />
      <p style={s("margin:0; font-size:11.5px; line-height:1.5; color:#8AA0B6; max-width:280px;")}>
        Zum Schutz Ihrer Daten wird die Karte erst nach Ihrer Zustimmung geladen. Dabei werden Daten an Google übertragen.
      </p>
      <Hover
        as="button"
        type="button"
        onClick={load}
        base="padding:9px 18px; border-radius:11px; border:1px solid rgba(159,201,197,0.35); background:rgba(46,143,138,0.22); color:#fff; font-size:12.5px; font-weight:700; cursor:pointer; transition:background .15s ease;"
        hover="background:rgba(46,143,138,0.36);"
      >
        Karte laden
      </Hover>
    </div>
  );
}
