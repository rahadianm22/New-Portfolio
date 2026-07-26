import { SectionLabel } from "./ExperienceSection";

const tags = ["Shared DS", "Token-first", "Unbranded"];

const colorSwatches = ["#2B4EFF", "#DBEAFE", "#DE4D34", "#FCE4E0", "#12151C", "#3D4557", "#8A93A6", "#D9DDE8"];

const stats = [
  { label: "Components", value: "1600+" },
  { label: "Variable Support", value: "Full" },
  { label: "Token Categories", value: "5" },
];

export function SideProjectSection() {
  return (
    <section
      id="side-project"
      className="py-24 md:py-32"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section label */}
        <SectionLabel label="// Design System" />

        <div className="mt-6 mb-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-3 flex-wrap">
            <h2
              className="text-3xl md:text-4xl"
              style={{
                fontFamily: "'Urbanist', sans-serif",
                fontWeight: 700,
                color: "#12151C",
                letterSpacing: "-0.02em",
              }}
            >
              Natuna Digilab Library System.
            </h2>
          </div>

          <div className="flex items-center gap-4 flex-shrink-0">
            <span
              className="text-xs"
              style={{ fontFamily: "'Urbanist', sans-serif", color: "#6B7280" }}
            >
              {tags.join(" · ")}
            </span>
            <span
              className="flex items-center gap-1.5 text-xs px-2.5 py-1"
              style={{
                fontFamily: "'Urbanist', sans-serif",
                color: "#B45309",
                backgroundColor: "#FFF7ED",
                border: "1px solid rgba(245, 116, 11, 0.2)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#f5740b" }} />
              v1.0 — building
            </span>
          </div>
        </div>

        {/* Foundation card */}
        <div
          className="relative p-6 md:p-8"
          style={{ border: "1.5px dashed rgba(43, 78, 255, 0.3)", backgroundColor: "#F5F6FA" }}
        >
          <span className="absolute -top-px -left-px w-3 h-3 border-t-2 border-l-2" style={{ borderColor: "#2B4EFF" }} />
          <span className="absolute -top-px -right-px w-3 h-3 border-t-2 border-r-2" style={{ borderColor: "#2B4EFF" }} />
          <span className="absolute -bottom-px -left-px w-3 h-3 border-b-2 border-l-2" style={{ borderColor: "#2B4EFF" }} />
          <span className="absolute -bottom-px -right-px w-3 h-3 border-b-2 border-r-2" style={{ borderColor: "#2B4EFF" }} />

          {/* Card header */}
          <div
            className="flex items-center justify-between mb-6 pb-4 flex-wrap gap-3"
            style={{ borderBottom: "1px solid rgba(43, 78, 255, 0.12)" }}
          >
            <div className="flex items-center gap-2">
              <span
                className="text-xs tracking-widest uppercase"
                style={{ fontFamily: "'Urbanist', sans-serif", color: "#2B4EFF", letterSpacing: "0.15em" }}
              >
                Foundation
              </span>
              <span style={{ color: "#6B7280", fontSize: "10px", fontFamily: "'Urbanist', sans-serif" }}>
                · Natuna Digilab
              </span>
            </div>

            <div className="flex items-center gap-5">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-baseline gap-1.5">
                  <span
                    style={{ fontFamily: "'Urbanist', sans-serif", fontWeight: 700, color: "#12151C", fontSize: "15px" }}
                  >
                    {stat.value}
                  </span>
                  <span
                    style={{ fontFamily: "'Urbanist', sans-serif", color: "#6B7280", fontSize: "10px", letterSpacing: "0.04em" }}
                  >
                    {stat.label.toUpperCase()}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Token category grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {/* Color */}
            <div>
              <p className="text-sm mb-1" style={{ fontFamily: "'Urbanist', sans-serif", fontWeight: 700, color: "#12151C" }}>
                Color
              </p>
              <p className="text-[10px] mb-3" style={{ fontFamily: "'Urbanist', sans-serif", color: "#8A93A6" }}>
                --color-*
              </p>
              <div className="flex flex-wrap gap-1.5">
                {colorSwatches.map((c) => (
                  <span key={c} className="w-4 h-4" style={{ backgroundColor: c }} />
                ))}
              </div>
            </div>

            {/* Typography */}
            <div>
              <p className="text-sm mb-1" style={{ fontFamily: "'Urbanist', sans-serif", fontWeight: 700, color: "#12151C" }}>
                Typography
              </p>
              <p className="text-[10px] mb-3" style={{ fontFamily: "'Urbanist', sans-serif", color: "#8A93A6" }}>
                --text-*
              </p>
              <div className="flex flex-col gap-0.5">
                <span style={{ fontFamily: "'Urbanist', sans-serif", fontWeight: 700, color: "#12151C", fontSize: "20px" }}>Aa</span>
                <span style={{ fontFamily: "'Urbanist', sans-serif", fontWeight: 500, color: "#3D4557", fontSize: "15px" }}>Aa</span>
                <span style={{ fontFamily: "'Urbanist', sans-serif", fontWeight: 400, color: "#8A93A6", fontSize: "12px" }}>Aa</span>
              </div>
            </div>

            {/* Effect */}
            <div>
              <p className="text-sm mb-1" style={{ fontFamily: "'Urbanist', sans-serif", fontWeight: 700, color: "#12151C" }}>
                Effect
              </p>
              <p className="text-[10px] mb-3" style={{ fontFamily: "'Urbanist', sans-serif", color: "#8A93A6" }}>
                --shadow-*
              </p>
              <div className="flex items-end gap-2">
                <span className="w-4 h-4 bg-white" style={{ boxShadow: "0 1px 2px rgba(18,21,28,0.15)" }} />
                <span className="w-5 h-5 bg-white" style={{ boxShadow: "0 3px 6px rgba(18,21,28,0.18)" }} />
                <span className="w-6 h-6 bg-white" style={{ boxShadow: "0 6px 14px rgba(18,21,28,0.22)" }} />
              </div>
            </div>

            {/* Number */}
            <div>
              <p className="text-sm mb-1" style={{ fontFamily: "'Urbanist', sans-serif", fontWeight: 700, color: "#12151C" }}>
                Number
              </p>
              <p className="text-[10px] mb-3" style={{ fontFamily: "'Urbanist', sans-serif", color: "#8A93A6" }}>
                --spacing-*
              </p>
              <div className="flex items-end gap-1">
                {[6, 10, 14, 18, 22].map((h, i) => (
                  <span key={i} style={{ width: "4px", height: `${h}px`, backgroundColor: "#2B4EFF", opacity: 0.4 + i * 0.15 }} />
                ))}
              </div>
            </div>

            {/* Icons */}
            <div>
              <p className="text-sm mb-1" style={{ fontFamily: "'Urbanist', sans-serif", fontWeight: 700, color: "#12151C" }}>
                Icons
              </p>
              <p className="text-[10px] mb-3" style={{ fontFamily: "'Urbanist', sans-serif", color: "#8A93A6" }}>
                Phosphor
              </p>
              <div className="flex flex-wrap gap-2" style={{ color: "#3D4557" }}>
                <span style={{ fontSize: "14px" }}>◈</span>
                <span style={{ fontSize: "14px" }}>✚</span>
                <span style={{ fontSize: "14px" }}>◎</span>
                <span style={{ fontSize: "14px" }}>☰</span>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div
            className="mt-6 pt-4 flex items-center justify-between flex-wrap gap-3"
            style={{ borderTop: "1px solid rgba(43, 78, 255, 0.12)" }}
          >
            <span style={{ fontFamily: "'Urbanist', sans-serif", color: "rgba(43, 78, 255, 0.5)", fontSize: "10px" }}>
              token: --natuna-foundation-v1 · figma variables: full
            </span>

            <a
              href="https://www.figma.com/community/file/1660946308636540525"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 transition-colors duration-150 hover:opacity-90"
              style={{
                fontFamily: "'Urbanist', sans-serif",
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.04em",
                color: "#FFFFFF",
                backgroundColor: "#2B4EFF",
                textDecoration: "none",
              }}
            >
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                <path
                  d="M7 1V9M7 9L4 6M7 9L10 6M2 11H12"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Figma Community ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}