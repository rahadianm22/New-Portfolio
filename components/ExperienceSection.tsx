"use client";

import { useState } from "react";
import Link from "next/link";
import { experiences } from "@/lib/experience-data";

export function SectionLabel({ label, meta }: { label: string; meta?: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "#2B4EFF" }} />
      <span
        className="text-xs tracking-widest uppercase whitespace-nowrap"
        style={{ fontFamily: "'Urbanist', sans-serif", color: "#2B4EFF", letterSpacing: "0.15em" }}
      >
        {label}
      </span>
      <div className="h-px flex-1" style={{ backgroundColor: "rgba(43, 78, 255, 0.2)" }} />
      {meta && (
        <span
          className="text-xs whitespace-nowrap"
          style={{ fontFamily: "'Urbanist', sans-serif", color: "#2B4EFF" }}
        >
          {meta}
        </span>
      )}
    </div>
  );
}

export function ExperienceSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="experience"
      className="py-24 md:py-32"
      style={{ backgroundColor: "#EDEFF5" }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <SectionLabel label="// Experience" />

        <div className="mt-6 mb-12">
          <h2
            className="text-3xl md:text-4xl mb-10"
            style={{
              fontFamily: "'Urbanist', sans-serif",
              fontWeight: 700,
              color: "#12151C",
              letterSpacing: "-0.02em",
            }}
          >
            Featured works and digital products.
          </h2>
        </div>

        {/* Column headers (desktop only) */}
        <div
          className="hidden md:grid px-6 pb-3"
          style={{
            gridTemplateColumns: "180px 1fr 1fr 120px",
            borderBottom: "1px solid rgba(18, 21, 28, 0.1)",
          }}
        >
          <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "'Urbanist', sans-serif", color: "#9CA3AF" }}>
            Period
          </span>
          <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "'Urbanist', sans-serif", color: "#9CA3AF" }}>
            Company
          </span>
          <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "'Urbanist', sans-serif", color: "#9CA3AF" }}>
            Role
          </span>
          <span />
        </div>

        {/* Rows */}
        <div>
          {experiences.map((entry, i) => {
            const isHovered = hovered === i;
            const accent = "#2B4EFF";

            return (
              <Link
                key={entry.docId}
                href={`/experience#${entry.docId}`}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className="grid md:grid-cols-[180px_1fr_1fr_120px] items-center gap-2 md:gap-4 px-6 py-5 transition-all duration-200"
                style={{
                  borderBottom: "1px solid rgba(18, 21, 28, 0.08)",
                  borderLeft: isHovered ? "3px solid #2B4EFF" : "3px solid transparent",
                  backgroundColor: isHovered ? "#FFFFFF" : "transparent",
                  textDecoration: "none",
                }}
              >
                {/* Period */}
                <span
                  className="text-sm tracking-wide transition-colors duration-200"
                  style={{ fontFamily: "'Urbanist', sans-serif", color: accent, fontWeight: 600 }}
                >
                  {entry.period}
                </span>

                {/* Company + duration badge */}
                <div className="flex items-center gap-2 flex-wrap">
                  <span
                    className="text-base md:text-lg"
                    style={{ fontFamily: "'Urbanist', sans-serif", fontWeight: 700, color: "#12151C" }}
                  >
                    {entry.company}
                  </span>
                  {isHovered && (
                    <span
                      className="text-[10px] px-2 py-0.5"
                      style={{
                        fontFamily: "'Urbanist', sans-serif",
                        color: "#2B4EFF",
                        backgroundColor: "rgba(43, 78, 255, 0.1)",
                        border: "1px solid rgba(43, 78, 255, 0.2)",
                      }}
                    >
                      {entry.duration}
                    </span>
                  )}
                </div>

                {/* Role */}
                <span className="text-sm" style={{ fontFamily: "'Inter', sans-serif", color: "#3D4557" }}>
                  {entry.role}
                </span>

                {/* Detail button */}
                <span
                  className="justify-self-start md:justify-self-end flex items-center gap-1.5 px-3 py-1.5 text-xs transition-colors duration-200"
                  style={{
                    fontFamily: "'Urbanist', sans-serif",
                    fontWeight: 600,
                    letterSpacing: "0.05em",
                    color: accent,
                    border: `1px solid ${accent}`,
                    backgroundColor: isHovered ? "rgba(43, 78, 255, 0.08)" : "transparent",
                  }}
                >
                  DETAIL
                  <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
                    <path
                      d="M2 8L8 2M8 2H3M8 2V7"
                      stroke={accent}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            );
          })}
        </div>

        {/* Entry point to the full detail page */}
        {/* <div className="flex justify-center mt-10">
          <Link
            href="/experience"
            className="text-xs tracking-wider uppercase"
            style={{ fontFamily: "'Urbanist', sans-serif", color: "#2B4EFF", textDecoration: "underline" }}
          >
            Lihat semua pengalaman kerja →
          </Link>
        </div> */}
      </div>
    </section>
  );
}