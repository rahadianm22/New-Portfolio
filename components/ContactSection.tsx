import { ArrowUpRight } from "lucide-react";

const primaryEmail = "rahadianm22@gmail.com";

/**
 * The closing call to action: one tinted card, a question instead of a
 * slogan, one accent button, and the reply time. Availability is stated in
 * the hero and the footer, not again here. Channels live in the footer, so
 * the card asks for exactly one action.
 */
export function ContactSection() {
  return (
    <section id="contact" className="bg-surface pb-section">
      <div className="max-w-page mx-auto px-3 md:px-6">
        <div className="rounded-lg bg-tint-blue px-6 py-14 md:px-14 md:py-20">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-6xl font-bold leading-[1.05] tracking-[-0.035em] text-ink [text-wrap:balance]">
              Have a banking product with more edge cases than happy paths?
            </h2>

            <a
              href={`mailto:${primaryEmail}`}
              className="group mt-10 inline-flex items-center gap-3 min-h-14 pl-7 pr-2 rounded-full text-[15px] font-semibold
                         bg-accent text-on-accent no-underline shadow-accent
                         transition duration-300 ease-out hover:bg-accent-hover active:scale-[0.98]"
            >
              Email me
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight size={18} strokeWidth={2} />
              </span>
            </a>

            <p className="mt-8 text-sm font-medium text-ink-2">I usually reply within a day.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
