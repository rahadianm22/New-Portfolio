import { ArrowRight, ArrowUpRight } from "lucide-react";

/**
 * Centred, type-led hero. No image: a soft wash of the canvas tint sits
 * behind the headline so the first screen has depth without a picture,
 * and one marker highlight points at the domain the whole page is about.
 */
export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-surface pt-32 pb-16 md:pt-36 md:pb-20">
      {/* Background wash: one tint, radial, fading to the page white. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[720px]
                   bg-[radial-gradient(ellipse_60%_55%_at_50%_0%,var(--tint-blue),transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-24 -z-10 h-72 w-[42rem] max-w-[90vw] -translate-x-1/2
                   rounded-full bg-[radial-gradient(closest-side,rgba(43,78,255,0.10),transparent)] blur-2xl"
      />

      <div
        className="max-w-page mx-auto w-full px-6 md:px-12 flex flex-col items-center text-center hero-stagger"
      >
        {/* Availability is real state, so it earns the one dot on the page's first screen. */}
        <span className="inline-flex items-center gap-2 min-h-9 pl-3 pr-4 rounded-full bg-white/70 backdrop-blur ring-1 ring-line shadow-soft text-sm font-medium text-ink-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-status-live opacity-50 motion-safe:animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-status-live" />
          </span>
          Product Designer, open to remote roles
        </span>

        {/* Sized so the headline sets in two lines on desktop (taste-skill hero rule). */}
        <h1 className="mt-8 max-w-[32ch] text-[2.5rem] sm:text-5xl lg:text-[3.5rem] xl:text-[3.75rem] font-bold leading-[1.05] tracking-[-0.045em] text-ink [text-wrap:balance]">
          Designing{" "}
          <span className="relative whitespace-nowrap">
            <span
              aria-hidden="true"
              className="absolute inset-x-[-0.08em] bottom-[0.08em] -z-10 h-[0.34em] rounded-full bg-[#d3dcff]"
            />
            fintech products
          </span>{" "}
          across lending and digital banking
        </h1>

        <p className="mt-8 max-w-[36rem] text-lg md:text-xl leading-relaxed text-ink-2 [text-wrap:balance]">
          5+ years designing regulated fintech products, from internal lending tools to consumer
          credit cards, for Indonesia&apos;s largest banks.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="/#work"
            className="group inline-flex items-center gap-3 min-h-14 pl-7 pr-2 rounded-full text-[15px] font-semibold
                       bg-accent text-on-accent no-underline shadow-[0_12px_28px_-12px_rgba(43,78,255,0.7)]
                       transition duration-300 ease-out hover:bg-accent-hover active:scale-[0.98]"
          >
            View case studies
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 ease-out group-hover:translate-y-0.5">
              <ArrowRight size={18} strokeWidth={2} className="rotate-90" />
            </span>
          </a>

          <a
            href="mailto:rahadianm22@gmail.com"
            className="group inline-flex items-center gap-2 min-h-14 px-7 rounded-full text-[15px] font-semibold
                       text-ink bg-white/70 backdrop-blur ring-1 ring-line-strong no-underline transition duration-300 ease-out
                       hover:bg-surface active:scale-[0.98]"
          >
            Email me
            <ArrowUpRight
              size={16}
              strokeWidth={2}
              className="transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
