"use client";

import { useEffect, useRef } from "react";

interface ParticleFieldProps {
  /** Base dot color (soft blueprint blue by default). */
  color?: string;
  /** Secondary accent color, used on a few dots for subtle variation. */
  accent?: string;
  /** Dots per 100,000 px² of canvas — keeps density stable across screens. */
  density?: number;
  /** Max distance in px for two dots to be linked by a line. */
  linkDistance?: number;
  className?: string;
}

interface Dot {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  alpha: number;
  accent: boolean;
  /** phase for the slow opacity breathing */
  phase: number;
}

export function ParticleField({
  color = "43, 78, 255",
  accent = "255, 75, 51",
  density = 5,
  linkDistance = 130,
  className = "",
}: ParticleFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const dotsRef = useRef<Dot[]>([]);
  const pointerRef = useRef({ x: -9999, y: -9999, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const makeDots = () => {
      const area = (width * height) / 100000;
      const count = Math.max(18, Math.min(90, Math.round(area * density)));
      dotsRef.current = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        r: Math.random() * 1.8 + 1,
        alpha: Math.random() * 0.35 + 0.2,
        accent: Math.random() < 0.12,
        phase: Math.random() * Math.PI * 2,
      }));
    };

    const resize = () => {
      const parent = canvas.parentElement;
      width = parent ? parent.clientWidth : window.innerWidth;
      height = parent ? parent.clientHeight : window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      makeDots();
    };

    resize();

    const onPointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointerRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true,
      };
    };
    const onPointerLeave = () => {
      pointerRef.current = { x: -9999, y: -9999, active: false };
    };

    let t = 0;

    const draw = () => {
      t += 0.006;
      ctx.clearRect(0, 0, width, height);

      const dots = dotsRef.current;
      const pointer = pointerRef.current;

      // Connecting lines — drawn first so dots sit on top.
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const dist = Math.hypot(dx, dy);
          if (dist < linkDistance) {
            const o = (1 - dist / linkDistance) * 0.13;
            ctx.strokeStyle = `rgba(${color}, ${o})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.stroke();
          }
        }
      }

      for (const d of dots) {
        if (!prefersReduced) {
          d.x += d.vx;
          d.y += d.vy;

          // Gentle repulsion so the field feels alive under the cursor.
          if (pointer.active) {
            const dx = d.x - pointer.x;
            const dy = d.y - pointer.y;
            const dist = Math.hypot(dx, dy);
            const radius = 120;
            if (dist < radius && dist > 0.01) {
              const push = ((radius - dist) / radius) * 0.6;
              d.x += (dx / dist) * push;
              d.y += (dy / dist) * push;
            }
          }

          // Wrap around the edges.
          if (d.x < -20) d.x = width + 20;
          if (d.x > width + 20) d.x = -20;
          if (d.y < -20) d.y = height + 20;
          if (d.y > height + 20) d.y = -20;
        }

        const breathe = 0.65 + 0.35 * Math.sin(t * 2 + d.phase);
        const rgb = d.accent ? accent : color;
        ctx.fillStyle = `rgba(${rgb}, ${d.alpha * breathe})`;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fill();

        // Soft halo for a hint of glow.
        ctx.fillStyle = `rgba(${rgb}, ${d.alpha * breathe * 0.12})`;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r * 4, 0, Math.PI * 2);
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    draw();

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerleave", onPointerLeave);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
    };
  }, [color, accent, density, linkDistance]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`absolute inset-0 pointer-events-none ${className}`}
    />
  );
}

export default ParticleField;
