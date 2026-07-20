import { SectionLabel } from "./ExperienceSection";

const categories = [
  { name: "Color", icon: "●" },
  { name: "Effect", icon: "◐" },
  { name: "Number", icon: "∞" },
  { name: "Typography", icon: "Aa" },
  { name: "Phosphor Icon", icon: "◈" },
];

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
        <SectionLabel label="// Side Project" />

        <div className="mt-6 mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <h2
            className="text-4xl md:text-5xl"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              color: "#12151C",
              letterSpacing: "-0.02em",
            }}
          >
            Building a system of our own.
          </h2>
          <span
            className="flex-shrink-0 flex items-center gap-1.5 text-xs"
            style={{ fontFamily: "'JetBrains Mono', monospace", color: "#B45309" }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#f5740b" }} />
            v1.0 — In Progress
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Left: description */}
          <div className="flex flex-col gap-6">
            <p
              className="text-base leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif", color: "#3D4557", lineHeight: 1.75 }}
            >
              <span style={{ color: "#12151C", fontWeight: 600 }}>Natuna Digilab Foundation</span>{" "}
               is a shared design system engineered by our team outside of daily work exploring token architecture from scratch without corporate brand limitations. The objective was straightforward: to build a highly scalable foundation, spanning color to typography, designed for instant adoption across any project.
            </p>
            <p
              className="text-base leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif", color: "#3D4557", lineHeight: 1.75 }}
            >
              Leveraging the full power of{" "}
              <span style={{ color: "#12151C", fontWeight: 600 }}>Figma Variables</span>, all tokens color, number, effect, and typography are seamlessly linked. A single change at the foundation level instantly cascades down to all components, allowing teams to start working immediately with zero setup friction.
            </p>

            <div className="flex flex-wrap gap-3 mt-2">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="px-4 py-3"
                  style={{ border: "1px solid rgba(18, 21, 28, 0.1)", backgroundColor: "#F5F6FA" }}
                >
                  <span
                    className="block text-lg"
                    style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: "#12151C" }}
                  >
                    {stat.value}
                  </span>
                  <span
                    className="block text-xs mt-0.5"
                    style={{ fontFamily: "'JetBrains Mono', monospace", color: "#6B7280", letterSpacing: "0.04em" }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Foundation cover card */}
          <div className="relative">
            <div
              className="relative p-6"
              style={{ border: "1.5px dashed rgba(43, 78, 255, 0.3)", backgroundColor: "#F5F6FA" }}
            >
              <span className="absolute -top-px -left-px w-3 h-3 border-t-2 border-l-2" style={{ borderColor: "#2B4EFF" }} />
              <span className="absolute -top-px -right-px w-3 h-3 border-t-2 border-r-2" style={{ borderColor: "#2B4EFF" }} />
              <span className="absolute -bottom-px -left-px w-3 h-3 border-b-2 border-l-2" style={{ borderColor: "#2B4EFF" }} />
              <span className="absolute -bottom-px -right-px w-3 h-3 border-b-2 border-r-2" style={{ borderColor: "#2B4EFF" }} />

              <div className="flex items-center gap-2 mb-6 pb-4" style={{ borderBottom: "1px solid rgba(43, 78, 255, 0.12)" }}>
                <span
                  className="text-xs tracking-widest uppercase"
                  style={{ fontFamily: "'JetBrains Mono', monospace", color: "#2B4EFF", letterSpacing: "0.15em" }}
                >
                  Foundation
                </span>
                <span className="text-xs" style={{ fontFamily: "'JetBrains Mono', monospace", color: "#6B7280", fontSize: "10px" }}>
                  Natuna Digilab
                </span>
              </div>

              <h3
                className="text-2xl mb-1"
                style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: "#12151C" }}
              >
                Design System
              </h3>
              <p className="text-sm mb-6" style={{ fontFamily: "'Inter', sans-serif", color: "#6B7280" }}>
                Version 1.0
              </p>

              <div className="space-y-2">
                {categories.map((cat) => (
                  <div
                    key={cat.name}
                    className="flex items-center gap-3 px-3 py-2"
                    style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(18, 21, 28, 0.08)" }}
                  >
                    <span
                      className="flex items-center justify-center flex-shrink-0"
                      style={{
                        width: "22px",
                        height: "22px",
                        backgroundColor: "rgba(43, 78, 255, 0.08)",
                        color: "#2B4EFF",
                        fontSize: "11px",
                        fontFamily: "'JetBrains Mono', monospace",
                      }}
                    >
                      {cat.icon}
                    </span>
                    <span
                      className="text-sm"
                      style={{ fontFamily: "'Inter', sans-serif", color: "#12151C", fontWeight: 500 }}
                    >
                      {cat.name}
                    </span>
                  </div>
                ))}
              </div>

              <div
                className="mt-6 pt-4 flex items-center justify-between"
                style={{ borderTop: "1px solid rgba(43, 78, 255, 0.12)" }}
              >
                <span style={{ fontFamily: "'JetBrains Mono', monospace", color: "rgba(43, 78, 255, 0.5)", fontSize: "10px" }}>
                  token: --natuna-foundation-v1
                </span>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", color: "rgba(43, 78, 255, 0.5)", fontSize: "10px" }}>
                  status: building
                </span>
              </div>
            </div>

            {/* Download button */}
            <a
              href="https://www.figma.com/community/file/1660946308636540525"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-2 w-full py-3 transition-colors duration-150 hover:opacity-90"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "0.04em",
                color: "#FFFFFF",
                backgroundColor: "#2B4EFF",
                textDecoration: "none",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M7 1V9M7 9L4 6M7 9L10 6M2 11H12"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Download Foundation (.zip)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
