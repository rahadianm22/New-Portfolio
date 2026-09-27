import { ArrowUpRight } from "lucide-react";
import { SectionLabel } from "./SectionLabel";

const primaryEmail = "rahadianm22@gmail.com";

/**
 * The closing call to action: one tinted card, a question instead of a
 * slogan, one accent button, and the two facts a recruiter weighs before
 * writing (availability and reply time). Channels live in the footer, so
 * the card asks for exactly one action.
 */
export function ContactSection() {
  return (
    <section id="contact" className="bg-surface pb-section">
      <div className="max-w-page mx-auto px-3 md:px-6">
        <div className="rounded-lg bg-tint-blue px-6 py-14 md:px-14 md:py-20">
          <div className="max-w-3xl">
            <SectionLabel label="Get in touch" />

            <h2 className="mt-8 text-4xl md:text-6xl font-bold leading-[1.05] tracking-[-0.035em] text-ink [text-wrap:balance]">
              Have a banking product with{" "}
              <span className="relative whitespace-nowrap">
                <span
                  aria-hidden="true"
                  className="absolute inset-x-[-0.08em] bottom-[0.08em] h-[0.34em] rounded-full bg-surface"
                />
                <span className="relative">more edge cases</span>
              </span>{" "}
              than happy paths?
            </h2>

            <a
              href={`mailto:${primaryEmail}`}
              className="group mt-10 inline-flex items-center gap-3 min-h-14 pl-7 pr-2 rounded-full text-[15px] font-semibold
                         bg-accent text-on-accent no-underline shadow-[0_12px_28px_-12px_rgba(43,78,255,0.7)]
                         transition duration-300 ease-out hover:bg-accent-hover active:scale-[0.98]"
            >
              Email me
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight size={18} strokeWidth={2} />
              </span>
            </a>

            <ul className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-medium text-ink-2">
              <li className="inline-flex items-center gap-2">
                <span aria-hidden="true" className="h-2 w-2 rounded-full bg-status-live" />
                Open to remote roles
              </li>
              <li aria-hidden="true" className="h-4 w-px bg-line-strong" />
              <li>I usually reply within a day</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
