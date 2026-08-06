"use client";

import { useEffect, useRef, useState } from "react";

type Variant = "up" | "fade" | "left" | "right" | "scale" | "blur";

interface RevealProps {
  children: React.ReactNode;
  /** Motion style for the entrance. */
  variant?: Variant;
  /** Delay in ms before the entrance starts. */
  delay?: number;
  /** Duration in ms of the entrance. */
  duration?: number;
  /** Fraction of the element that must be visible before it animates in. */
  threshold?: number;
  /** Replay the animation every time the element re-enters the viewport. */
  once?: boolean;
  className?: string;
  as?: "div" | "section" | "span" | "li";
  id?: string;
}

const initialTransform: Record<Variant, string> = {
  up: "translate3d(0, 32px, 0)",
  fade: "translate3d(0, 0, 0)",
  left: "translate3d(-32px, 0, 0)",
  right: "translate3d(32px, 0, 0)",
  scale: "scale(0.96)",
  blur: "translate3d(0, 18px, 0)",
};

export function Reveal({
  children,
  variant = "up",
  delay = 0,
  duration = 800,
  threshold = 0.15,
  once = true,
  className = "",
  as = "div",
  id,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Respect reduced-motion: show immediately, no transition.
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, once]);

  const Tag = as as React.ElementType;

  return (
    <Tag
      ref={ref as never}
      id={id}
      className={className}
      data-revealed={visible ? "true" : "false"}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : initialTransform[variant],
        filter: variant === "blur" && !visible ? "blur(8px)" : "blur(0px)",
        transition: `opacity ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, filter ${duration}ms ease ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </Tag>
  );
}

export default Reveal;
