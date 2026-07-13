import { ArrowDown, ArrowUpRight } from "lucide-react";
import CornerMarks from "./CornerMarks";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line px-6 py-24 md:px-16 md:py-32">
      <CornerMarks />

      {/* faint blueprint grid, contained to the hero only */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-grid bg-grid opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent)]"
      />

      <div className="relative mx-auto max-w-4xl animate-fade-up">
        <div className="mb-10 flex items-center justify-between font-mono text-xs uppercase tracking-widest text-muted">
          <span>Rahadian — Portfolio</span>
          <span>Jakarta, ID</span>
        </div>

        {/* dashed measurement guide wraps the headline, like an inspector overlay */}
        <div className="relative inline-block border border-dashed border-blueprint/50 px-5 py-4 md:px-8 md:py-6">
          <span className="absolute -top-6 left-0 font-mono text-[10px] tracking-wider text-blueprint">
            width: auto
          </span>
          <span className="absolute -bottom-6 right-0 font-mono text-[10px] tracking-wider text-blueprint">
            line-height: 1.05
          </span>

          <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink md:text-6xl">
            Product design,
            <br />
            built like a spec.
          </h1>
        </div>

        <p className="mt-10 max-w-xl text-base leading-relaxed text-ink/80 md:text-lg">
          I design fintech &amp; banking products where every state, edge
          case, and pixel has a reason — from tenor selectors to lending
          flows used by millions of people.
        </p>

        <div className="mt-4 font-mono text-xs uppercase tracking-widest text-redline">
          Senior Product Designer — Fintech &amp; Banking, 4+ yrs
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-4">
          <a
            href="#work"
            className="inline-flex items-center gap-2 bg-ink px-6 py-3 font-mono text-sm text-paper transition-colors hover:bg-blueprint"
          >
            View Work
            <ArrowDown className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-ink px-6 py-3 font-mono text-sm text-ink transition-colors hover:border-blueprint hover:text-blueprint"
          >
            Get in Touch
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
