import { SectionLabel } from "./ExperienceSection";

const tools = ["Figma", "FigJam", "Design Tokens", "Auto Layout", "Jira", "Confluence"];

export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <SectionLabel label="// About" />

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
            Precision is the whole job.
          </h2>
        </div>

        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr]">
          <div>
            <p
              className="text-base md:text-lg leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif", color: "#3D4557" }}
            >
              I&apos;m a Senior Product Designer with 5+ years shipping regulated fintech
              and banking products — from internal lending platforms handling multi-role
              approval workflows to consumer-facing credit card experiences used by
              millions. Most of my work at Bank Rakyat Indonesia, Bank Syariah Indonesia,
              and Infosys Solusi Terpadu has centered on making complex, high-stakes
              systems (credit risk, disbursement, compliance) feel simple without cutting
              corners on the rules they have to follow.
            </p>
            <p
              className="mt-4 text-base md:text-lg leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif", color: "#3D4557" }}
            >
              I care most about design systems — building the tokens, components, and
              governance that let a product scale without every screen becoming a
              one-off. Based in Tangerang/Jakarta, Indonesia, and open to remote
              opportunities.
            </p>
          </div>

          <div
            className="relative p-6"
            style={{ border: "1.5px dashed rgba(43, 78, 255, 0.3)", backgroundColor: "#F5F6FA" }}
          >
            <span className="absolute -top-px -left-px w-3 h-3 border-t-2 border-l-2" style={{ borderColor: "#2B4EFF" }} />
            <span className="absolute -top-px -right-px w-3 h-3 border-t-2 border-r-2" style={{ borderColor: "#2B4EFF" }} />
            <span className="absolute -bottom-px -left-px w-3 h-3 border-b-2 border-l-2" style={{ borderColor: "#2B4EFF" }} />
            <span className="absolute -bottom-px -right-px w-3 h-3 border-b-2 border-r-2" style={{ borderColor: "#2B4EFF" }} />

            <span
              className="text-xs tracking-widest uppercase block mb-4"
              style={{ fontFamily: "'Urbanist', sans-serif", color: "#9AA1B1", fontSize: "10px", letterSpacing: "0.12em" }}
            >
              Toolkit
            </span>
            <ul className="space-y-3">
              {tools.map((tool) => (
                <li
                  key={tool}
                  className="flex items-center justify-between pb-3"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: "#12151C",
                    fontSize: "14px",
                    fontWeight: 500,
                    borderBottom: "1px solid rgba(18, 21, 28, 0.08)",
                  }}
                >
                  {tool}
                  <span style={{ color: "#9CA3AF", fontSize: "12px" }}>/ tool</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
