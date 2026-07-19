"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      {/* Blueprint grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(43, 78, 255, 0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(43, 78, 255, 0.06) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)",
        }}
      />

      {/* Registration marks at corners */}
      <CornerMark position="top-left" />
      <CornerMark position="top-right" />
      <CornerMark position="bottom-left" />
      <CornerMark position="bottom-right" />

      <div className="relative z-10 max-w-6xl mx-auto w-full px-6 md:px-12 py-24">
        {/* Top meta row */}
        <div className="flex items-center justify-between mb-16">
          <span
            className="text-xs tracking-widest uppercase"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              color: "#6B7280",
            }}
          >
            Product Designer
          </span>
          <span
            className="text-xs tracking-widest uppercase"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              color: "#6B7280",
            }}
          >
            Tangerang / Jakarta, ID
          </span>
        </div>

        {/* Two-column layout: text left, photo right */}
        <div className="grid md:grid-cols-[1.15fr_0.85fr] gap-12 md:gap-10 items-center">
          {/* Left column: role tag, headline, sub-headline, CTAs */}
          <div>
            {/* Role tag */}
            {/* <div className="mb-8">
              <span
                className="inline-flex items-center gap-2 px-3 py-1.5 text-xs tracking-widest uppercase"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  color: "#FF4B33",
                  backgroundColor: "rgba(255, 75, 51, 0.08)",
                  border: "1px solid rgba(255, 75, 51, 0.2)",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: "#FF4B33" }}
                />
                Senior Product Designer — Platform & Internal Systems
              </span>
            </div> */}

            {/* Headline with dashed border */}
            <div className="relative mb-10">
              <div
                className="relative inline-block"
                style={{
                  border: "1.5px dashed rgba(43, 78, 255, 0.35)",
                  padding: "24px 28px",
                }}
              >
                <span className="absolute -top-px -left-px w-3 h-3 border-t-2 border-l-2" style={{ borderColor: "#2B4EFF" }} />
                <span className="absolute -top-px -right-px w-3 h-3 border-t-2 border-r-2" style={{ borderColor: "#2B4EFF" }} />
                <span className="absolute -bottom-px -left-px w-3 h-3 border-b-2 border-l-2" style={{ borderColor: "#2B4EFF" }} />
                <span className="absolute -bottom-px -right-px w-3 h-3 border-b-2 border-r-2" style={{ borderColor: "#2B4EFF" }} />

                <span
                  className="absolute -top-5 left-0 text-xs"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    color: "#2B4EFF",
                    fontSize: "10px",
                  }}
                >
                  width: auto
                </span>
                <span
                  className="absolute -bottom-5 right-0 text-xs"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    color: "#2B4EFF",
                    fontSize: "10px",
                  }}
                >
                  token: --heading-xl
                </span>

                <h1
                  className="text-4xl md:text-6xl leading-[1.05]"
                  style={{
                    fontFamily: "'Urbanist', sans-serif",
                    fontWeight: 700,
                    color: "#12151C",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Rahadian Maulana
                  <br />
                </h1>
              </div>
            </div>

            {/* Sub-headline */}
            <p
              className="text-lg md:text-xl max-w-xl mb-12 leading-relaxed"
              style={{
                fontFamily: "'Urb', sans-serif",
                color: "#3D4557",
                fontWeight: 400,
              }}
            >
              5+ years optimizing complex financial products and workflows to drive business impact
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#experience"
                className="inline-flex items-center gap-2 px-6 py-3 transition-all duration-200 hover:opacity-80"
                style={{
                  fontFamily: "'Urb', sans-serif",
                  fontWeight: 600,
                  backgroundColor: "#12151C",
                  color: "#FFFFFF",
                  fontSize: "15px",
                }}
              >
                View Experience
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              {/* <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 transition-all duration-200 hover:opacity-70"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  backgroundColor: "transparent",
                  color: "#12151C",
                  border: "1.5px solid #12151C",
                  fontSize: "15px",
                }}
              >
                Get in Touch
              </a> */}
            </div>
          </div>

          {/* Right column: framed photo */}
          <div className="relative mx-auto md:mx-0 w-full max-w-sm">
            <div
              className="relative"
              style={{
                border: "1.5px dashed rgba(43, 78, 255, 0.35)",
                padding: "14px",
              }}
            >
              <span className="absolute -top-px -left-px w-3 h-3 border-t-2 border-l-2" style={{ borderColor: "#2B4EFF" }} />
              <span className="absolute -top-px -right-px w-3 h-3 border-t-2 border-r-2" style={{ borderColor: "#2B4EFF" }} />
              <span className="absolute -bottom-px -left-px w-3 h-3 border-b-2 border-l-2" style={{ borderColor: "#2B4EFF" }} />
              <span className="absolute -bottom-px -right-px w-3 h-3 border-b-2 border-r-2" style={{ borderColor: "#2B4EFF" }} />

              {/* Top-left annotation */}
              <span
                className="absolute -top-5 left-0 text-xs"
                style={{ fontFamily: "'JetBrains Mono', monospace", color: "#2B4EFF", fontSize: "10px" }}
              >
                img: rahadian.jpg
              </span>
              {/* Bottom-right annotation */}
              <span
                className="absolute -bottom-5 right-0 text-xs"
                style={{ fontFamily: "'JetBrains Mono', monospace", color: "#2B4EFF", fontSize: "10px" }}
              >
                ratio: 4:5
              </span>

              <div className="relative w-full" style={{ aspectRatio: "4 / 5" }}>
                <Image
                  src="/poto baru.png"
                  alt="Rahadian Maulana"
                  fill
                  sizes="(max-width: 768px) 90vw, 400px"
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom annotation */}
        <div className="mt-20 flex items-center gap-3">
          <div className="h-px flex-1" style={{ backgroundColor: "rgba(43, 78, 255, 0.15)" }} />
          <span
            className="text-xs tracking-widest uppercase"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              color: "rgba(43, 78, 255, 0.4)",
              fontSize: "10px",
            }}
          >
            scroll to explore — DOC.00
          </span>
          <div className="h-px flex-1" style={{ backgroundColor: "rgba(43, 78, 255, 0.15)" }} />
        </div>
      </div>
    </section>
  );
}

function CornerMark({ position }: { position: "top-left" | "top-right" | "bottom-left" | "bottom-right" }) {
  const baseClass = "absolute w-5 h-5";
  const positionClass = {
    "top-left": "top-6 left-6",
    "top-right": "top-6 right-6",
    "bottom-left": "bottom-6 left-6",
    "bottom-right": "bottom-6 right-6",
  }[position];

  const borderStyle = {
    "top-left": { borderTop: "2px solid rgba(43,78,255,0.3)", borderLeft: "2px solid rgba(43,78,255,0.3)" },
    "top-right": { borderTop: "2px solid rgba(43,78,255,0.3)", borderRight: "2px solid rgba(43,78,255,0.3)" },
    "bottom-left": { borderBottom: "2px solid rgba(43,78,255,0.3)", borderLeft: "2px solid rgba(43,78,255,0.3)" },
    "bottom-right": { borderBottom: "2px solid rgba(43,78,255,0.3)", borderRight: "2px solid rgba(43,78,255,0.3)" },
  }[position];

  return <span className={`${baseClass} ${positionClass}`} style={borderStyle} />;
}
