import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const primaryEmail = "rahadianm22@gmail.com";
const whatsappUrl = "https://api.whatsapp.com/send/?phone=6285782760827&text&type=phone_number&app_absent=0";

/**
 * The closing call to action, headed like every other section: one tinted
 * card, a question instead of a slogan, and two ways to reach out: email
 * (the accent button) and WhatsApp. The reply
 * time sits in the heading's meta slot. Availability is stated in the hero
 * and the footer, not again here.
 */
export function ContactSection() {
  return (
    <section id="contact" className="bg-surface pb-section">
      <div className="max-w-page mx-auto px-6 md:px-12">
        <SectionHeading title="Contact" meta="Usually replies within a day" />

        <div className="rounded-lg bg-tint-blue px-6 py-14 md:px-14 md:py-20">
          <div>
            <h2 className="max-w-[20ch] sm:max-w-[26ch] lg:max-w-[30ch] text-[2rem] sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-[-0.035em] text-ink [text-wrap:balance]">
              Have a product with more edge cases than happy paths?
            </h2>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${primaryEmail}`}
                className="group inline-flex items-center gap-3 min-h-16 pl-7 pr-2 rounded-full text-[15px] font-semibold
                           bg-accent text-on-accent no-underline shadow-accent
                           transition duration-300 ease-out hover:bg-accent-hover active:scale-[0.98]"
              >
                <span className="flex flex-col items-start leading-tight">
                  <span className="text-xs font-medium opacity-75">Email me</span>
                  {primaryEmail}
                </span>
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight size={18} strokeWidth={2} />
                </span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 min-h-16 pl-7 pr-2 rounded-full text-[15px] font-semibold
                           bg-surface text-ink ring-1 ring-line-strong no-underline
                           transition duration-300 ease-out hover:bg-surface-alt active:scale-[0.98]"
              >
                <span className="flex flex-col items-start leading-tight">
                  <span className="text-xs font-medium text-ink-3">Chat me</span>
                  WhatsApp
                </span>
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ink text-surface transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight size={18} strokeWidth={2} />
                </span>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
