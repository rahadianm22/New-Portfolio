"use client";

import { useEffect, useRef, useState } from "react";

const FIRST = "RAHADIAN";
const LAST = "MAULANA";

/** Total time the intro is on screen, in ms. */
const HOLD = 2200;
/** Curtain wipe duration, in ms. */
const WIPE = 800;
/** Extra delay before scene fully frees, so the transition feels seamless. */
const FINAL = 400;

export function Preloader() {
  const [phase, setPhase] = useState<"idle" | "running" | "wiping" | "done">(
    "idle"
  );
  const counterRef = useRef<HTMLSpanElement | null>(null);
  const barRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const finish = () => {
      (window as unknown as { __introDone?: boolean }).__introDone = true;
      window.dispatchEvent(new Event("intro:done"));
      document.documentElement.removeAttribute("data-intro");
      document.body.style.overflow = "";
    };

    let seen = false;
    try {
      seen = sessionStorage.getItem("intro-seen") === "1";
    } catch {
      seen = false;
    }

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (seen || prefersReduced) {
      setPhase("done");
      finish();
      return;
    }

    try {
      sessionStorage.setItem("intro-seen", "1");
    } catch {
      /* private mode */
    }

    document.documentElement.setAttribute("data-intro", "running");
    document.body.style.overflow = "hidden";
    setPhase("running");

    // Count 000 → 100
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / HOLD);
      const eased = 1 - Math.pow(1 - t, 3);
      if (counterRef.current) {
        counterRef.current.textContent = String(
          Math.round(eased * 100)
        ).padStart(3, "0");
      }
      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${eased})`;
      }
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const t1 = window.setTimeout(() => setPhase("wiping"), HOLD);
    const t2 = window.setTimeout(() => {
      setPhase("done");
      finish();
    }, HOLD + WIPE + FINAL);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(t1);
      clearTimeout(t2);
      document.body.style.overflow = "";
    };
  }, []);

  if (phase === "done") return null;

  let letterIndex = 0;
  const renderWord = (word: string, colorClass: string) =>
    word.split("").map((char) => {
      const delay = 0.35 + letterIndex * 0.06;
      letterIndex += 1;
      return (
        <span key={`${char}-${letterIndex}`} className="intro-letter">
          <span
            className={`intro-letter-inner ${colorClass}`}
            style={{ animationDelay: `${delay}s` }}
          >
            {char}
          </span>
        </span>
      );
    });

  return (
    <div
      className="intro"
      data-phase={phase}
      role="presentation"
      aria-hidden="true"
    >
      {/* Subtle noise texture */}
      <div className="intro-noise" />

      {/* Central glow behind the name */}
      <div className="intro-glow" />

      {/* Corner accents */}
      <span className="intro-mark intro-mark-tl" />
      <span className="intro-mark intro-mark-tr" />
      <span className="intro-mark intro-mark-bl" />
      <span className="intro-mark intro-mark-br" />

      <div className="intro-inner">
        {/* Tiny label */}
        <div className="intro-meta">
          <span>✦ Portfolio</span>
          <span>Jakarta, ID</span>
        </div>

        {/* Name — main event */}
        <div className="intro-name">
          <div className="intro-word">{renderWord(FIRST, "text-white")}</div>
          <div className="intro-word">{renderWord(LAST, "text-accent")}</div>
        </div>

        {/* Footer: role + counter */}
        <div className="intro-foot">
          <span className="intro-role">Senior Product Designer</span>
          <span className="intro-count">
            <span ref={counterRef}>000</span>
          </span>
        </div>

        {/* Progress bar */}
        <div className="intro-track">
          <span ref={barRef} className="intro-bar" />
        </div>
      </div>

      <noscript>
        <style>{`.intro{display:none}`}</style>
      </noscript>
    </div>
  );
}

export default Preloader;