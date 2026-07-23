import { SectionLabel } from "./ExperienceSection";

interface ServiceItem {
  code: string;
  status: "AVAILABLE" | "BOOKED" | "WAITLIST";
  title: string;
  description: string;
  deliverables: string[];
  tools: string[];
  scope: string;
}

const services: ServiceItem[] = [
  {
    code: "SVC.01",
    status: "AVAILABLE",
    title: "Design System Architecture",
    description: "Building scalable token-based design systems that align design and engineering, ensuring consistency and accelerating feature shipping.",
    deliverables: ["Design Tokens & Variables Structure", "Component Library", "Documentation & Usage Guidelines", "Governance & Version Control System"],
    tools: ["Figma", "Tokens Studio", "Confluence"],
    scope: "4–8 weeks",
  },
  {
    code: "SVC.02",
    status: "AVAILABLE",
    title: "Complex Systems & Dashboard Design",
    description: "Transforming complex multi-role workflows, approval chains, and data-dense dashboards into intuitive user experiences.",
    deliverables: ["UX Audits & User Flow Mapping", "Data-Dense Interactive Dashboards", "High-Fidelity Wireframes & Prototypes", "Usability Testing & Validation"],
    tools: ["FigJam", "Maze", "Jira"],
    scope: "2–6 weeks",
  },
  {
    code: "SVC.03",
    status: "AVAILABLE",
    title: "Design to Code Bridge",
    description: "Developer-friendly design handoffs that minimize friction, reduce implementation back-and-forth, and speed up UI production.",
    deliverables: ["Clean Variable Token Exports", "Dev Mode Annotations & Component Specs", "Interactive Edge-Case Documentation", "Design System QA & Code Audits"],
    tools: ["Figma Dev Mode", "Claude Code", "Storybook"],
    scope: "1–3 weeks",
  },
];

const statusColor: Record<ServiceItem["status"], string> = {
  AVAILABLE: "#22C55E",
  BOOKED: "#EF4444",
  WAITLIST: "#F59E0B",
};

export function SystemsSection() {
  return (
    <section
      id="systems"
      className="py-24 md:py-32"
      style={{ backgroundColor: "#F5F6FA" }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Header row */}
        <div className="mb-16">
          <SectionLabel label="// Technical Capabilities" />
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
              My Design Expertise.
            </h2>
          </div>
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
                key={service.code}
                className="p-6 md:p-8 flex flex-col"
                style={{
                  borderRight: i < services.length - 1 ? "1px dashed rgba(43, 78, 255, 0.2)" : undefined,
                }}
              >
                {/* Top meta row */}
                <div className="flex items-center justify-between mb-6">
                  <span
                    className="text-xs tracking-widest"
                    style={{ fontFamily: "'Urbanist', sans-serif", color: "#2B4EFF", opacity: 0.6, letterSpacing: "0.1em" }}
                  >
                    {service.code}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: statusColor[service.status] }}
                    />
                    <span
                      className="text-xs tracking-wider"
                      style={{ fontFamily: "'Urbanist', sans-serif", color: "#6B7280", fontSize: "10px" }}
                    >
                      {service.status}
                    </span>
                  </div>
                </div>

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
                    {service.deliverables.map((item, idx) => (
                      <li key={item} className="flex items-start gap-2">
                        <span
                          className="text-xs mt-0.5"
                          style={{ fontFamily: "'Urbanist', sans-serif", color: "#2B4EFF", fontSize: "10px", opacity: 0.7 }}
                        >
                          {String(idx + 1).padStart(2, "0")}
                        </span>
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

                  {/* Scope */}
                  {/* <div className="flex items-center justify-between pt-3" style={{ borderTop: "1px solid rgba(43, 78, 255, 0.12)" }}>
                    <span
                      className="text-xs tracking-widest uppercase"
                      style={{ fontFamily: "'Urbanist', sans-serif", color: "#9AA1B1", fontSize: "10px", letterSpacing: "0.1em" }}
                    >
                      Scope
                    </span>
                    <span
                      className="text-sm"
                      style={{ fontFamily: "'Urbanist', sans-serif", color: "#12151C", fontWeight: 700 }}
                    >
                      {service.scope}
                    </span>
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}