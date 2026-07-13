import SpecTag from "./SpecTag";

const tools = [
  "Figma",
  "FigJam",
  "Design Tokens",
  "Auto Layout",
  "Jira",
  "Confluence",
];

export default function AboutSection() {
  return (
    <section id="about" className="border-b border-line px-6 py-24 md:px-16">
      <div className="mx-auto grid max-w-4xl gap-12 md:grid-cols-[1.3fr_1fr]">
        <div>
          <SpecTag>About</SpecTag>
          <h2 className="mt-4 font-display text-3xl font-bold text-ink md:text-4xl">
            Precision is the whole job.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-ink/70">
            I&apos;m a product designer with 4+ years shipping regulated,
            high-stakes financial products — from super apps to lending
            platforms. I care about design systems, precise interaction
            states, and copy that earns trust, not just clicks.
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink/70">
            Replace this paragraph with your own story — what you design,
            who it&apos;s for, and what you&apos;re optimizing for right now.
          </p>
        </div>

        <div className="border border-dashed border-line p-6">
          <span className="font-mono text-xs uppercase tracking-widest text-muted">
            Parts list
          </span>
          <ul className="mt-4 space-y-3">
            {tools.map((tool) => (
              <li
                key={tool}
                className="flex items-center justify-between border-b border-line/70 pb-3 font-mono text-sm text-ink/80 last:border-b-0"
              >
                {tool}
                <span className="text-muted">/ tool</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
