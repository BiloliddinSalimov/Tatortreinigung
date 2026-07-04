"use client";
import { memo, useEffect, useRef, useState } from "react";
import { s } from "../lib/style";

// Ambient background: still image + looping video + gradient/glow/noise layers.
// Full-bleed inside the app shell so it fills the whole viewport on desktop.
// memo(): re-renders only when `paused` flips (modal open/close).
// paused: freezes the video + glow while a modal covers the background — a
// moving backdrop under blur/overlay layers forces the GPU to recomposite
// every frame and makes modal scrolling stutter.
function BackgroundLayers({ paused = false }) {
  const videoRef = useRef(null);
  const [videoLive, setVideoLive] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (paused) {
      v.pause();
    } else {
      v.muted = true;
      const p = v.play();
      if (p && p.catch) p.catch(() => {});
    }
  }, [paused]);

  return (
    <>
      {/* Still fallback while the video starts (or if autoplay is blocked).
          Unmounted once frames render — the video is opaque and covers it, so
          keeping the infinite zoom animation alive would only waste GPU time. */}
      {!videoLive && (
        <div style={{ ...s("position:absolute; inset:0; background:url('/mond-hero.jpg') center 38% / cover no-repeat; transform-origin:62% 44%; animation:slowzoom 38s ease-in-out infinite alternate; filter:saturate(1.05) contrast(1.04);"), animationPlayState: paused ? "paused" : "running" }} />
      )}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/mond-hero.jpg"
        aria-hidden="true"
        onPlaying={() => setVideoLive(true)}
        style={s("position:absolute; inset:0; width:100%; height:100%; object-fit:cover; filter:saturate(1.05) contrast(1.04);")}
      >
        <source src="/bg-video.mp4" type="video/mp4" />
      </video>
      <div style={s("position:absolute; inset:0; pointer-events:none; background:linear-gradient(165deg, rgba(5,15,25,0.55) 0%, rgba(5,15,25,0.18) 30%, rgba(8,22,36,0.50) 66%, rgba(5,15,25,0.92) 100%);")} />
      <div style={{ ...s("position:absolute; inset:0; pointer-events:none; background:radial-gradient(44% 50% at 62% 40%, rgba(159,201,197,0.22) 0%, rgba(159,201,197,0) 60%); animation:glowpulse 8s ease-in-out infinite alternate;"), animationPlayState: paused ? "paused" : "running" }} />
      <div style={s("position:absolute; inset:0; pointer-events:none; background:radial-gradient(120% 90% at 50% 42%, rgba(0,0,0,0) 52%, rgba(0,0,0,0.45) 100%);")} />
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          opacity: 0.05,
          mixBlendMode: "overlay",
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </>
  );
}

export default memo(BackgroundLayers);
