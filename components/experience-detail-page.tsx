"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { experiences, getExperienceByDocId } from "@/lib/experience-data";

// generateStaticParams optional (kalau mau pre-render semua halaman detail saat build):
export function generateStaticParams() {
  return experiences.map((e) => ({ docId: e.docId }));
}

export default function ExperienceDetailPage() {
  const params = useParams<{ docId: string }>();
  const entry = getExperienceByDocId(params.docId);
  const [activeProduct, setActiveProduct] = useState(0);

  if (!entry) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-24 text-center">
        <p style={{ fontFamily: "'Inter', sans-serif" }}>Experience tidak ditemukan.</p>
        <Link href="/#experience" style={{ color: "#2B4EFF" }}>
          ← Kembali
        </Link>
      </div>
    );
  }

  const products = entry.products;
  const product = products?.[activeProduct];

  return (
    <div className="min-h-screen py-16 md:py-24" style={{ backgroundColor: "#EDEFF5" }}>
      <div className="max-w-3xl mx-auto px-6 md:px-10">
        <Link
          href="/#experience"
          className="inline-flex items-center gap-2 mb-8 text-xs"
          style={{ fontFamily: "'JetBrains Mono', monospace", color: "#2B4EFF", fontWeight: 600 }}
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M8 2L2 8M2 8H7M2 8V3" stroke="#2B4EFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back to Experience
        </Link>

        <div
          className="relative"
          style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(18, 21, 28, 0.15)" }}
        >
          <span className="absolute -top-px -left-px w-3 h-3 border-t-2 border-l-2 pointer-events-none" style={{ borderColor: "#2B4EFF" }} />
          <span className="absolute -top-px -right-px w-3 h-3 border-t-2 border-r-2 pointer-events-none" style={{ borderColor: "#2B4EFF" }} />
          <span className="absolute -bottom-px -left-px w-3 h-3 border-b-2 border-l-2 pointer-events-none" style={{ borderColor: "#2B4EFF" }} />
          <span className="absolute -bottom-px -right-px w-3 h-3 border-b-2 border-r-2 pointer-events-none" style={{ borderColor: "#2B4EFF" }} />

          {/* Header */}
          <div className="px-6 md:px-10 pt-8 pb-4" style={{ borderBottom: "1px solid rgba(18, 21, 28, 0.1)" }}>
            <span
              className="text-xs tracking-widest"
              style={{ fontFamily: "'JetBrains Mono', monospace", color: "#2B4EFF", fontWeight: 600 }}
            >
              {entry.docId} <span style={{ color: "#6B7280", fontWeight: 400 }}>· PRODUCT ARCHIVE</span>
            </span>
            <h1
              className="text-2xl md:text-3xl mt-2 mb-1"
              style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: "#12151C", letterSpacing: "-0.01em" }}
            >
              {entry.company}
            </h1>
            <p className="text-sm" style={{ fontFamily: "'Inter', sans-serif", color: "#6B7280", fontWeight: 500 }}>
              {entry.role} · {entry.period}
            </p>
          </div>

          {/* Tabs (kalau ada beberapa product) */}
          {products && (
            <div className="flex flex-wrap gap-2 px-6 md:px-10 py-4" style={{ borderBottom: "1px solid rgba(18, 21, 28, 0.1)" }}>
              {products.map((p, i) => (
                <button
                  key={p.tabLabel}
                  onClick={() => setActiveProduct(i)}
                  className="text-xs px-3 py-1.5"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontWeight: 600,
                    color: activeProduct === i ? "#FFFFFF" : "#3D4557",
                    backgroundColor: activeProduct === i ? "#2B4EFF" : "rgba(18, 21, 28, 0.05)",
                  }}
                >
                  {p.tabLabel}
                </button>
              ))}
            </div>
          )}

          {/* Body */}
          <div className="px-6 md:px-10 py-8">
            {products && product ? (
              <>
                <div className="flex items-center gap-3 mb-3">
                  <h2 className="text-lg" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: "#12151C" }}>
                    {product.name}
                  </h2>
                  <span
                    className="text-xs px-2 py-0.5 flex items-center gap-1.5"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      color: product.statusLive ? "#16A34A" : "#6B7280",
                      backgroundColor: product.statusLive ? "rgba(22, 163, 74, 0.08)" : "rgba(107, 114, 128, 0.08)",
                      border: `1px solid ${product.statusLive ? "rgba(22, 163, 74, 0.25)" : "rgba(107, 114, 128, 0.25)"}`,
                      fontSize: "10px",
                    }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: product.statusLive ? "#16A34A" : "#9CA3AF" }} />
                    {product.status}
                  </span>
                </div>

                <span
                  className="block text-xs tracking-wider mb-3"
                  style={{ fontFamily: "'JetBrains Mono', monospace", color: "#2B4EFF" }}
                >
                  {product.category}
                </span>

                <p className="text-sm leading-relaxed mb-4" style={{ fontFamily: "'Inter', sans-serif", color: "#3D4557" }}>
                  {product.description}
                </p>

                <div style={{ borderTop: "1px solid rgba(18, 21, 28, 0.1)", paddingTop: "12px" }}>
                  <span className="text-xs" style={{ fontFamily: "'JetBrains Mono', monospace", color: "#6B7280" }}>
                    {product.scope}
                  </span>
                </div>

                <div className="flex items-center gap-2 mt-8 mb-4">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#f5740b" }} />
                  <span
                    className="text-xs tracking-widest uppercase"
                    style={{ fontFamily: "'JetBrains Mono', monospace", color: "#f5740b", letterSpacing: "0.1em" }}
                  >
                    Contributions
                  </span>
                </div>

                <ul className="space-y-4">
                  {product.contributions.map((c, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span
                        className="flex-shrink-0 flex items-center justify-center text-xs mt-0.5"
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          color: "#2B4EFF",
                          backgroundColor: "rgba(43, 78, 255, 0.08)",
                          border: "1px solid rgba(43, 78, 255, 0.2)",
                          width: "22px",
                          height: "22px",
                        }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm leading-relaxed" style={{ fontFamily: "'Inter', sans-serif", color: "#3D4557" }}>
                        {c}
                      </span>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <>
                <ul className="space-y-2">
                  {entry.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm leading-relaxed"
                      style={{ fontFamily: "'Inter', sans-serif", color: "#3D4557" }}
                    >
                      <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: "#2B4EFF" }} />
                      {highlight}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  {entry.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 tracking-wide uppercase"
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        color: "#6B7280",
                        backgroundColor: "rgba(107, 114, 128, 0.08)",
                        border: "1px solid rgba(107, 114, 128, 0.2)",
                        fontSize: "10px",
                        letterSpacing: "0.08em",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>

          {products && product && (
            <div className="flex items-center justify-between px-6 md:px-10 py-4" style={{ borderTop: "1px solid rgba(18, 21, 28, 0.1)" }}>
              <span className="text-xs" style={{ fontFamily: "'JetBrains Mono', monospace", color: "#9CA3AF" }}>
                {activeProduct + 1} / {products.length} — {product.tabLabel}
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => setActiveProduct((p) => Math.max(0, p - 1))}
                  disabled={activeProduct === 0}
                  aria-label="Sebelumnya"
                  className="flex items-center justify-center"
                  style={{ width: "30px", height: "30px", border: "1px solid rgba(18, 21, 28, 0.15)", color: activeProduct === 0 ? "#D1D5DB" : "#12151C" }}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M7.5 2L3.5 6L7.5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button
                  onClick={() => setActiveProduct((p) => Math.min(products.length - 1, p + 1))}
                  disabled={activeProduct === products.length - 1}
                  aria-label="Selanjutnya"
                  className="flex items-center justify-center"
                  style={{ width: "30px", height: "30px", border: "1px solid rgba(18, 21, 28, 0.15)", color: activeProduct === products.length - 1 ? "#D1D5DB" : "#12151C" }}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M4.5 2L8.5 6L4.5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
