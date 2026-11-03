"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Second beat of a section entrance: SectionLabel's measure line draws, then the
 * title it belongs to settles in behind it. Deliberately short (10px, 420ms) and
 * deliberately prop-less, so arriving at a section registers without the section's
 * content performing, and so this cannot drift back into a blanket page-wide fade.
 */
export function HeadingRise({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [settled, setSettled] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    // Reduced motion needs no branch: globals.css cuts every transition to ~0ms.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSettled(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={settled ? "rise is-in" : "rise"}>
      {children}
    </div>
  );
}
