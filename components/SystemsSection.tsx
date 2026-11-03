import { Blocks, Workflow, CodeXml, Check, type LucideIcon } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

interface ServiceItem {
  title: string;
  description: string;
  deliverables: string[];
  tools: string[];
  icon: LucideIcon;
}

const services: ServiceItem[] = [
  {
    title: "Design System Architecture",
    description: "Variable-token systems for BRI, BSI and BTN that front-end teams build against directly.",
    deliverables: ["Design Tokens & Variables", "Component Library", "Governance & Version Control"],
    tools: ["Figma", "Variable Tokens", "Confluence"],
    icon: Blocks,
  },
  {
    title: "Complex Systems & Dashboard Design",
    description: "Multi-role approval flows and data-heavy dashboards, from BRISPOT lending to CIMB's ATM network.",
    deliverables: ["UX Audits & Flow Mapping", "Data-Dense Dashboards", "Usability Testing"],
    tools: ["FigJam", "Jira", "Notion"],
    icon: Workflow,
  },
  {
    title: "Design to Code Bridge",
    description: "Specs engineers can build from, and design QA that catches drift before release.",
    deliverables: ["Clean Token Exports", "Dev Mode Annotations", "Design System QA"],
    tools: ["Figma Dev Mode", "Claude Code"],
    icon: CodeXml,
  },
];

/**
 * Bento: the lead capability takes the tall accent cell, the other two
 * stack beside it on tinted surfaces. Three identical cards would present
 * three different-sized skills as the same weight.
 */
export function SystemsSection() {
  const [lead, ...supporting] = services;

  return (
    <section id="systems" className="bg-surface py-section">
      <div className="max-w-page mx-auto px-6 md:px-12">
        <SectionHeading title="Expertise" />

        <div className="grid gap-4 lg:grid-cols-12">
          <article
            className="on-accent relative overflow-hidden lg:col-span-5 lg:row-span-2 flex flex-col rounded-lg p-7 md:p-10
                       bg-accent text-on-accent"
          >
            <h3 className="relative text-3xl md:text-4xl font-bold leading-[1.1] tracking-[-0.02em]">
              {lead.title}
            </h3>
            <p className="relative mt-4 max-w-[36ch] text-lg leading-relaxed text-white/85">{lead.description}</p>

            <ul className="relative mt-8 space-y-3">
              {lead.deliverables.map((item) => (
                <li key={item} className="flex items-center gap-3 text-[15px] font-medium">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                    <Check size={14} strokeWidth={2.25} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="relative mt-auto pt-10 flex flex-wrap gap-2">
              {lead.tools.map((tool) => (
                <span key={tool} className="rounded-full bg-white/15 px-3.5 py-1.5 text-sm font-medium">
                  {tool}
                </span>
              ))}
            </div>
          </article>

          {supporting.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="lg:col-span-7 flex flex-col rounded-lg p-7 md:p-9 bg-tint-blue"
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <h3 className="text-2xl font-bold leading-snug tracking-[-0.015em] text-ink">{service.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-ink-2">{service.description}</p>
                  </div>
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-surface text-accent shadow-soft">
                    <Icon size={22} strokeWidth={1.75} />
                  </span>
                </div>

                <div className="mt-8 grid gap-6 sm:grid-cols-[1fr_auto] sm:items-end">
                  <ul className="space-y-2.5">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-[15px] font-medium text-ink">
                        <Check size={16} strokeWidth={2} className="shrink-0 text-ink-3" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 sm:justify-end">
                    {service.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full bg-surface px-3.5 py-1.5 text-sm font-medium text-ink-2 ring-1 ring-line"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
