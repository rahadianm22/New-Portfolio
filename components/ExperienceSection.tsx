import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { experiences } from "@/lib/experience-data";
import { SectionHeading } from "./SectionHeading";

/**
 * An editorial index rather than a stack of cards: one ruled row per role,
 * the company set large as the thing a recruiter scans for, dates in a
 * narrow left column, the products shipped there underneath. Hover lifts
 * the row onto white and turns the cursor into a "See role" bubble, the
 * same gesture the work tiles use.
 */
export function ExperienceSection() {
  return (
    <section id="experience" className="bg-surface-alt py-section">
      <div className="max-w-page mx-auto px-6 md:px-12">
        <SectionHeading title="Experience" meta="2019 to present" />

        <ol className="divide-y divide-line border-y border-line">
          {experiences.map((entry) => (
            <li key={entry.docId}>
              <Link
                href={`/experience#${entry.docId}`}
                data-cursor-label="See role"
                className="group -mx-4 grid grid-cols-[1fr_auto] items-start gap-x-6 gap-y-4 rounded-md px-4 py-7 no-underline
                           transition-colors duration-300 ease-out hover:bg-surface
                           md:-mx-6 md:grid-cols-[200px_1fr_auto] md:gap-x-10 md:px-6 md:py-9"
              >
                {/* Top-aligned with the company name, as an index reads. */}
                <div className="order-1 md:pt-2.5">
                  <p className="text-sm font-semibold text-ink tabular-nums">{entry.period}</p>
                  <p className="mt-0.5 text-sm text-ink-3">{entry.duration}</p>
                </div>

                <div className="order-3 col-span-2 md:order-2 md:col-span-1">
                  <h3
                    className="text-2xl md:text-[2rem] font-bold leading-tight tracking-[-0.025em] text-ink
                               transition-transform duration-500 ease-out group-hover:translate-x-1.5"
                  >
                    {entry.company}
                  </h3>
                  <p className="mt-1 text-[15px] text-ink-2">{entry.role}</p>

                  <ul className="mt-4 flex flex-wrap gap-2" aria-label="Products">
                    {entry.products.map((product) => (
                      <li
                        key={product.tabLabel}
                        className="rounded-full px-3.5 py-1.5 text-sm font-medium text-ink-2 ring-1 ring-line-strong
                                   transition-colors duration-300 group-hover:ring-line"
                      >
                        {product.tabLabel}
                      </li>
                    ))}
                  </ul>
                </div>

                <span
                  aria-hidden="true"
                  className="order-2 flex h-12 w-12 shrink-0 items-center justify-center rounded-full ring-1 ring-line-strong text-ink
                             transition duration-300 ease-out md:order-3 md:h-14 md:w-14
                             group-hover:rotate-45 group-hover:bg-accent group-hover:text-on-accent group-hover:ring-accent"
                >
                  <ArrowUpRight size={20} strokeWidth={1.75} />
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
