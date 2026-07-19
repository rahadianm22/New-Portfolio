import { SectionLabel } from "./ExperienceSection";

interface PartCategory {
  category: string;
  items: string[];
}

const partsList: PartCategory[] = [
  {
    category: "Design Tools",
    items: ["Figma", "FigJam"],
  },
  {
    category: "Systems",
    items: ["Variable Design Tokens", "Auto Layout", "Component Architecture", "Design System Docs"],
  },
  {
    category: "Process",
    items: ["User Research", "Usability Testing", "Rapid Prototyping", "Design Rationale"],
  },
  {
    category: "Collaboration",
    items: ["Jira", "Confluence", "Notion", "Figma Dev Mode"],
  },
];

export function SystemsSection() {
  return (
    <section
      id="systems"
      className="py-24 md:py-32"
      style={{ backgroundColor: "#F5F6FA" }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section label */}
        <SectionLabel label="// Systems" />

        <div className="mt-6 mb-16">
          <h2
            className="text-4xl md:text-5xl"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              color: "#12151C",
              letterSpacing: "-0.02em",
            }}
          >
            Built for precision.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Left: Bio */}
          <div className="flex flex-col gap-6">
            <p
              className="text-base leading-relaxed"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "#3D4557",
                lineHeight: 1.75,
              }}
            >
              Specializing in complex product ecosystems: multi-role approval workflows, data-heavy dashboards with dense data tables, and multi-step state management for operational users. It’s not just about the visuals—it’s about building the underlying logic.


            </p>
            <p
              className="text-base leading-relaxed"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "#3D4557",
                lineHeight: 1.75,
              }}
            >
              A design token architecture approach ensures every component remains{" "}
              <span style={{ color: "#12151C", fontWeight: 600 }}>scalable and consistent</span>{" "}
              across the entire platform. Currently exploring AI-assisted design-to-code workflows with{" "}
              <span style={{ color: "#12151C", fontWeight: 600 }}>Claude Code</span>{" "}
              to accelerate the design-to-production pipeline.
            </p>

            {/* Expertise chips */}
            <div className="flex flex-wrap gap-2 mt-2">
              {[
                "Multi-role Workflows",
                "Data-heavy Dashboards",
                "Design Token Architecture",
                "Financial Products",
                "Internal Tools",
                "Consumer Banking",
              ].map((chip) => (
                <span
                  key={chip}
                  className="text-xs px-3 py-1.5 tracking-wide"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    color: "#2B4EFF",
                    backgroundColor: "rgba(43, 78, 255, 0.06)",
                    border: "1px dashed rgba(43, 78, 255, 0.3)",
                    fontSize: "11px",
                  }}
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Parts List */}
          <div className="relative">
            {/* Dashed border box */}
            <div
              className="relative p-6"
              style={{
                border: "1.5px dashed rgba(43, 78, 255, 0.3)",
                backgroundColor: "#FFFFFF",
              }}
            >
              {/* Corner marks */}
              <span className="absolute -top-px -left-px w-3 h-3 border-t-2 border-l-2" style={{ borderColor: "#2B4EFF" }} />
              <span className="absolute -top-px -right-px w-3 h-3 border-t-2 border-r-2" style={{ borderColor: "#2B4EFF" }} />
              <span className="absolute -bottom-px -left-px w-3 h-3 border-b-2 border-l-2" style={{ borderColor: "#2B4EFF" }} />
              <span className="absolute -bottom-px -right-px w-3 h-3 border-b-2 border-r-2" style={{ borderColor: "#2B4EFF" }} />

              {/* Parts list label */}
              <div className="flex items-center gap-2 mb-6 pb-4" style={{ borderBottom: "1px solid rgba(43, 78, 255, 0.12)" }}>
                <span
                  className="text-xs tracking-widest uppercase"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    color: "#2B4EFF",
                    letterSpacing: "0.15em",
                  }}
                >
                  Parts List
                </span>
                <span
                  className="text-xs"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    color: "#6B7280",
                    fontSize: "10px",
                  }}
                >
                  v2.5 — {new Date().getFullYear()}
                </span>
              </div>

              <div className="space-y-5">
                {partsList.map((part) => (
                  <div key={part.category}>
                    <span
                      className="text-xs tracking-wider uppercase block mb-2"
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        color: "#6B7280",
                        fontSize: "10px",
                        letterSpacing: "0.12em",
                      }}
                    >
                      {part.category}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {part.items.map((item) => (
                        <span
                          key={item}
                          className="text-sm px-2 py-0.5"
                          style={{
                            fontFamily: "'Inter', sans-serif",
                            color: "#12151C",
                            backgroundColor: "rgba(18, 21, 28, 0.04)",
                            border: "1px solid rgba(18, 21, 28, 0.08)",
                            fontWeight: 500,
                          }}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom annotation */}
              <div
                className="mt-6 pt-4 flex items-center justify-between"
                style={{ borderTop: "1px solid rgba(43, 78, 255, 0.12)" }}
              >
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    color: "rgba(43, 78, 255, 0.5)",
                    fontSize: "10px",
                  }}
                >
                  token: --parts-list-v2
                </span>
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    color: "rgba(43, 78, 255, 0.5)",
                    fontSize: "10px",
                  }}
                >
                  items: {partsList.reduce((acc, p) => acc + p.items.length, 0)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
