"use client";

import { useState } from "react";
import { Pause, Play } from "lucide-react";

/**
 * A visible pause for the logo marquee. Hover and focus already pause it,
 * but anything that keeps moving needs a control a visitor can see and
 * leave paused (WCAG 2.2.2). Hidden when the visitor prefers no motion,
 * because the marquee is then a still row.
 */
export function MarqueeToggle({ target }: { target: string }) {
  const [paused, setPaused] = useState(false);

  function toggle() {
    const next = !paused;
    document.getElementById(target)?.toggleAttribute("data-paused", next);
    setPaused(next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-controls={target}
      aria-pressed={paused}
      className="marquee-toggle inline-flex h-11 items-center gap-1.5 rounded-full px-4 text-sm font-medium text-ink-2
                 ring-1 ring-line transition-colors duration-300 ease-out hover:bg-surface-alt hover:text-ink"
    >
      {paused ? <Play size={14} strokeWidth={2} aria-hidden="true" /> : <Pause size={14} strokeWidth={2} aria-hidden="true" />}
      {paused ? "Play" : "Pause"}
    </button>
  );
}
