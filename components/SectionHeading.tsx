"use client";

import { useEffect, useRef, useState } from "react";

/**
 * One header per section: the title, the measure line that draws itself
 * when the section is reached (the page's motif, DESIGN.md), and either a
 * short fact or an action on the right. Replaces the older label-plus-
 * headline pair, which said the same thing twice in every section.
 */
export function SectionHeading({
  title,
  meta,
  action,
}: {
  title: string;
  meta?: string;
  action?: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDrawn(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDrawn(true);
          observer.disconnect();
        }
      },
      { threshold: 0.6 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="mb-block flex flex-wrap items-center gap-x-6 gap-y-4">
      <h2
        className="text-3xl md:text-4xl font-bold leading-tight tracking-[-0.025em] text-ink"
        style={{
          opacity: drawn ? 1 : 0,
          transform: drawn ? "none" : "translate3d(0, 10px, 0)",
          transition:
            "opacity 420ms cubic-bezier(0.22, 1, 0.36, 1) 120ms, transform 420ms cubic-bezier(0.22, 1, 0.36, 1) 120ms",
        }}
      >
        {title}
      </h2>

      <div
        aria-hidden="true"
        className="hidden h-px min-w-12 flex-1 bg-line-strong sm:block"
        style={{
          transform: drawn ? "scaleX(1)" : "scaleX(0)",
          transformOrigin: "left center",
          transition: "transform 900ms cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      />

      {meta && <span className="text-sm text-ink-3 whitespace-nowrap">{meta}</span>}
      {action}
    </div>
  );
}
