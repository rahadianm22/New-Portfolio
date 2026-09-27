"use client";

import { useEffect, useRef } from "react";

/**
 * A dot that sits exactly on the pointer and a soft ring that trails it,
 * growing over anything clickable. Mouse only: touch devices and anyone
 * with reduced motion keep the system cursor. Positions are written to the
 * DOM directly and the ring's rAF loop stops once it has caught up, so the
 * page does not re-render or spin a loop while the mouse is still.
 */
export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!finePointer || reduceMotion || !dot || !ring) return;

    const root = document.documentElement;
    root.classList.add("has-custom-cursor");

    let x = 0;
    let y = 0;
    let ringX = 0;
    let ringY = 0;
    let frame = 0;
    let visible = false;

    const place = (el: HTMLElement, px: number, py: number) => {
      el.style.transform = `translate3d(${px}px, ${py}px, 0) translate(-50%, -50%)`;
    };

    const follow = () => {
      ringX += (x - ringX) * 0.18;
      ringY += (y - ringY) * 0.18;
      place(ring, ringX, ringY);
      frame =
        Math.abs(x - ringX) > 0.1 || Math.abs(y - ringY) > 0.1 ? requestAnimationFrame(follow) : 0;
    };

    const setVisible = (value: boolean) => {
      visible = value;
      dot.dataset.visible = String(value);
      ring.dataset.visible = String(value);
    };

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      x = e.clientX;
      y = e.clientY;
      if (!visible) {
        ringX = x;
        ringY = y;
        setVisible(true);
      }
      place(dot, x, y);
      const target = e.target as Element | null;
      ring.dataset.hover = String(Boolean(target?.closest("a, button, [role='button'], summary, label")));

      // An element can ask the ring to become a labelled bubble, e.g. "See more" on work tiles.
      const label = target?.closest<HTMLElement>("[data-cursor-label]")?.dataset.cursorLabel ?? "";
      if (ring.textContent !== label) ring.textContent = label;
      ring.dataset.label = String(label !== "");
      dot.dataset.label = ring.dataset.label;
      if (!frame) frame = requestAnimationFrame(follow);
    };

    const onLeave = () => setVisible(false);
    const onDown = () => (ring.dataset.down = "true");
    const onUp = () => (ring.dataset.down = "false");

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);
    root.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      root.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(frame);
      root.classList.remove("has-custom-cursor");
    };
  }, []);

  return (
    <>
      <div ref={ringRef} aria-hidden="true" className="cursor-ring" />
      <div ref={dotRef} aria-hidden="true" className="cursor-dot" />
    </>
  );
}
