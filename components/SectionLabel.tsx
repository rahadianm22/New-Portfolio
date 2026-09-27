"use client";

import { useState, useEffect, useRef } from "react";

/**
 * The page's identity motif: a measure line that draws itself as each
 * section is reached. It is the only thing that moves on entrance, so
 * arriving at a section registers without the content performing.
 *
 * Carried over from the blueprint version deliberately. See DESIGN.md.
 */
export function SectionLabel({
  label,
  meta,
  tone = "light",
}: {
  label: string;
  meta?: string;
  tone?: "light" | "dark";
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

  const isDark = tone === "dark";

  return (
    <div ref={ref} className="flex items-center gap-4">
      <span
        className={`text-sm font-semibold whitespace-nowrap ${isDark ? "text-surface" : "text-ink"}`}
      >
        {label}
      </span>
      <div
        className={`h-px flex-1 ${isDark ? "bg-line-on-dark" : "bg-line-strong"}`}
        style={{
          transform: drawn ? "scaleX(1)" : "scaleX(0)",
          transformOrigin: "left center",
          transition: "transform 900ms cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      />
      {meta && (
        <span
          className={`text-sm whitespace-nowrap ${isDark ? "text-ink-on-dark" : "text-ink-3"}`}
        >
          {meta}
        </span>
      )}
    </div>
  );
}
