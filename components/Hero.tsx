"use client";

import { useState, useEffect } from "react";

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

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

      <div
        className="relative z-10 max-w-6xl mx-auto w-full px-6 md:px-12 py-24 hero-stagger"
        data-mounted={mounted ? "true" : "false"}
      >
        {/* Top meta row */}
        <div className="flex flex-col gap-1.5 sm:flex-row sm:items-center sm:justify-between mb-16">
          <span
            className="text-xs tracking-widest uppercase"
            style={{
              fontFamily: "'Urbanist', sans-serif",
              color: "#6B7280",
            }}
          >
            Product Designer
          </span>
          <span
            className="flex items-center gap-2 text-xs tracking-widest uppercase"
            style={{
              fontFamily: "'Urbanist', sans-serif",
              color: "#6B7280",
            }}
          >
            <span className="inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
            Open to remote roles · Jakarta (GMT+7)
          </span>
        </div>

        {/* Single centered column layout */}
        <div className="flex flex-col items-center text-center">
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

              <h1
                className="text-4xl md:text-6xl leading-[1.05]"
                style={{
                  fontFamily: "'Urbanist', sans-serif",
                  fontWeight: 700,
                  color: "#12151C",
                  letterSpacing: "-0.02em",
                }}
              >
                Designing <span className="bg-[#2B4EFF] text-white px-2 py-0.5 rounded">
    Fintech
  </span> Products Across Lending and Digital Banking
              </h1>
            </div>
          </div>

          {/* Sub-headline */}
          <p
            className="text-lg md:text-xl max-w-xl mb-12 leading-relaxed"
            style={{
              fontFamily: "'Urbanist', sans-serif",
              color: "#3D4557",
              fontWeight: 400,
            }}
          >
           5+ years designing regulated <span className="text-lg md:text-xl leading-relaxed" style={{ fontFamily: "'Urbanist', sans-serif",
              color: "#2B4EFF",
              fontWeight: 400, }}>fintech & banking products</span>, from internal lending tools to consumer credit card experiences, for Indonesia's largest banks.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/case-studies"
              className="group press inline-flex items-center gap-2 px-6 py-3 rounded-md hover:bg-[#1937B3]"
              style={{
                fontFamily: "'Urbanist', sans-serif",
                fontWeight: 600,
                backgroundColor: "#2B4EFF",
                color: "#FFFFFF",
                fontSize: "15px",
              }}
            >
              View Case Studies{" "}
              <span className="text-white transition-colors duration-200 group-hover:text-[#D6DFFF]">
                →
              </span>
            </a>

            <a
              href="mailto:rahadianm22@gmail.com"
              className="press inline-flex items-center gap-2 px-6 py-3 rounded-md hover:bg-[#EAEFFF]"
              style={{
                fontFamily: "'Urbanist', sans-serif",
                fontWeight: 600,
                backgroundColor: "transparent",
                border: "1px solid #2B4EFF",
                color: "#2B4EFF",
                fontSize: "15px",
              }}
            >
              Let&apos;s talk
            </a>
          </div>
        </div>

        {/* Bottom annotation */}
        <div className="mt-20 flex items-center gap-3">
          <div className="h-px flex-1" style={{ backgroundColor: "rgba(43, 78, 255, 0.15)" }} />
          <span
            className="text-xs tracking-widest uppercase"
            style={{
              fontFamily: "'Urbanist', sans-serif",
              color: "#6B7280",
              fontSize: "10px",
            }}
          >
            DOC.00
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