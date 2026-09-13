import { SectionLabel } from "./ExperienceSection";
import { HeadingRise } from "./HeadingRise";

interface ServiceItem {
  title: string;
  description: string;
  deliverables: string[];
  tools: string[];
}

const services: ServiceItem[] = [
  {
    title: "Design System Architecture",
    description: "Token-based systems that align design and engineering.",
    deliverables: ["Design Tokens & Variables", "Component Library", "Governance & Version Control"],
    tools: ["Figma", "Tokens Studio", "Confluence"],
  },
  {
    title: "Complex Systems & Dashboard Design",
    description: "Turning dense, multi-role workflows into intuitive experiences.",
    deliverables: ["UX Audits & Flow Mapping", "Data-Dense Dashboards", "Usability Testing"],
    tools: ["FigJam", "Maze", "Jira"],
  },
  {
    title: "Design to Code Bridge",
    description: "Dev-friendly handoffs that cut implementation friction.",
    deliverables: ["Clean Token Exports", "Dev Mode Annotations", "Design System QA"],
    tools: ["Figma Dev Mode", "Claude Code", "Storybook"],
  },
];

export function SystemsSection() {
  return (
    <section
      id="systems"
      className="py-20 md:py-24"
      style={{ backgroundColor: "#F5F6FA" }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Header row */}
        <div className="mb-16">
          <SectionLabel label="// Technical Capabilities" />
          <HeadingRise>
            <div className="mt-6 mb-10">
              <h2
                className="text-3xl md:text-4xl"
                style={{
                  fontFamily: "'Urbanist', sans-serif",
                  fontWeight: 700,
                  color: "#12151C",
                  letterSpacing: "-0.02em",
                }}
              >
                Design Expertise.
              </h2>
            </div>
          </HeadingRise>
        </div>

        {/* Card container with corner marks + meta line */}
        <div className="relative">

          <div
            className="relative grid grid-cols-1 md:grid-cols-3"
            style={{ border: "1.5px dashed rgba(43, 78, 255, 0.3)", backgroundColor: "#FFFFFF" }}
          >
            {/* Corner marks */}
            <span className="absolute -top-px -left-px w-3 h-3 border-t-2 border-l-2" style={{ borderColor: "#2B4EFF" }} />
            <span className="absolute -top-px -right-px w-3 h-3 border-t-2 border-r-2" style={{ borderColor: "#2B4EFF" }} />
            <span className="absolute -bottom-px -left-px w-3 h-3 border-b-2 border-l-2" style={{ borderColor: "#2B4EFF" }} />
            <span className="absolute -bottom-px -right-px w-3 h-3 border-b-2 border-r-2" style={{ borderColor: "#2B4EFF" }} />

            {services.map((service, i) => (
              <div
                key={service.title}
                className="p-6 md:p-8 flex flex-col"
                style={{
                  borderRight: i < services.length - 1 ? "1px dashed rgba(43, 78, 255, 0.2)" : undefined,
                }}
              >
                {/* Title */}
                <h3
                  className="text-xl md:text-2xl mb-4"
                  style={{
                    fontFamily: "'Urbanist', sans-serif",
                    fontWeight: 700,
                    color: "#12151C",
                    letterSpacing: "-0.01em",
                    lineHeight: 1.25,
                  }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className="text-sm mb-6"
                  style={{ fontFamily: "'Inter', sans-serif", color: "#6B7280", lineHeight: 1.6 }}
                >
                  {service.description}
                </p>

                {/* Deliverables */}
                <div className="pt-4 mb-6" style={{ borderTop: "1px solid rgba(43, 78, 255, 0.12)" }}>
                  <span
                    className="text-xs tracking-widest uppercase block mb-3"
                    style={{ fontFamily: "'Urbanist', sans-serif", color: "#9AA1B1", fontSize: "10px", letterSpacing: "0.12em" }}
                  >
                    Deliverables
                  </span>
                  <ul className="space-y-2">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span
                          className="w-1 h-1 rounded-full mt-2 shrink-0"
                          style={{ backgroundColor: "#2B4EFF", opacity: 0.7 }}
                        />
                        <span
                          className="text-sm"
                          style={{ fontFamily: "'Inter', sans-serif", color: "#12151C", fontWeight: 500 }}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Push footer down */}
                <div className="mt-auto">
                  {/* Tools */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-xs px-2 py-1"
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          color: "#3D4557",
                          border: "1px solid rgba(18, 21, 28, 0.12)",
                          fontSize: "11px",
                        }}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}