import { ArrowUpRight } from "lucide-react";
import SpecTag from "./SpecTag";

type Project = {
  dwg: string;
  title: string;
  description: string;
  tags: string[];
};

// Placeholder projects — swap these for your own case studies.
const projects: Project[] = [
  {
    dwg: "DWG.01",
    title: "Installment Conversion Flow",
    description:
      "Redesigning credit card tenor selection for a super app used by millions of customers.",
    tags: ["Fintech", "Mobile"],
  },
  {
    dwg: "DWG.02",
    title: "Loyalty Program Redesign",
    description:
      "Turning a points system into a single source of truth for validity and redemption rules.",
    tags: ["Web", "Content System"],
  },
  {
    dwg: "DWG.03",
    title: "Consumer Lending Onboarding",
    description:
      "Simplifying home and multipurpose loan applications end-to-end, inside a regulated flow.",
    tags: ["Fintech", "Design System"],
  },
];

export default function WorkSection() {
  return (
    <section id="work" className="border-b border-line px-6 py-24 md:px-16">
      <div className="mx-auto max-w-4xl">
        <SpecTag>Selected Work</SpecTag>
        <h2 className="mt-4 font-display text-3xl font-bold text-ink md:text-4xl">
          Three drawings from the archive.
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.dwg}
              className="group relative border border-line bg-surface p-6 transition-colors hover:border-redline"
            >
              {/* inspector-style dimension label, shown on hover */}
              <span className="pointer-events-none absolute -top-3 right-4 whitespace-nowrap bg-paper px-1 font-mono text-[10px] text-redline opacity-0 transition-opacity group-hover:opacity-100">
                w: 320 · h: 400
              </span>

              <div className="flex items-center justify-between font-mono text-xs tracking-widest text-muted">
                <span>{project.dwg}</span>
                <ArrowUpRight className="h-4 w-4 text-muted transition-colors group-hover:text-redline" />
              </div>

              <h3 className="mt-6 font-display text-xl font-bold text-ink">
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-line px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
