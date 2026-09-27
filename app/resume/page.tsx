import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { DownloadResumeButton } from "@/components/DownloadResumeButton";
import { experiences, profileSummary, keyAchievements, skillGroups } from "@/lib/experience-data";

export const metadata = {
  title: "Resume · Rahadian Maulana",
  description: "Resume summary and downloadable PDF for Rahadian Maulana, Senior Product Designer.",
};

/**
 * One sheet on the alternate surface. Each block is a row: its name in a
 * narrow left column, its content on the right, a hairline between rows.
 * Headings are ink, not accent; blue stays on the download button and links.
 */
function ResumeRow({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="grid gap-4 border-t border-line py-8 md:grid-cols-[160px_1fr] md:gap-10 print:py-5">
      <h2 className="text-sm font-semibold text-ink">{title}</h2>
      <div>{children}</div>
    </section>
  );
}

export default function ResumePage() {
  return (
    <main>
      <div className="no-print">
        <Navbar />
      </div>

      <div className="bg-surface-alt px-3 pt-28 pb-section md:px-6 md:pt-32 print:bg-surface print:p-0">
        <article
          id="resume-sheet"
          className="max-w-4xl mx-auto rounded-lg bg-surface p-7 ring-1 ring-line shadow-soft md:p-14
                     print:rounded-none print:shadow-none print:ring-0"
        >
          <header className="flex flex-col gap-8 pb-10 md:flex-row md:items-end md:justify-between print:pb-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-ink">
                Rahadian Maulana
              </h1>
              <p className="mt-3 text-lg text-ink-2">Senior Product Designer · Fintech &amp; Digital Banking</p>

              <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-1 text-[15px] text-ink-2">
                <li>
                  <a href="mailto:rahadianm22@gmail.com" className="text-ink-2 underline decoration-line-strong underline-offset-4 hover:text-accent">
                    rahadianm22@gmail.com
                  </a>
                </li>
                <li>
                  <a href="https://rahadianm22.my.id" className="text-ink-2 underline decoration-line-strong underline-offset-4 hover:text-accent">
                    rahadianm22.my.id
                  </a>
                </li>
                <li>Jakarta, Indonesia</li>
              </ul>
            </div>

            <div className="no-print flex flex-wrap gap-2 md:shrink-0 md:flex-nowrap">
              <DownloadResumeButton />
              <a
                href="mailto:rahadianm22@gmail.com"
                className="group inline-flex items-center gap-2 min-h-12 px-6 rounded-full text-[15px] font-semibold
                           text-ink ring-1 ring-line-strong no-underline transition duration-300 ease-out
                           hover:bg-surface-alt active:scale-[0.98]"
              >
                Email me
                <ArrowUpRight
                  size={16}
                  strokeWidth={2}
                  className="transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </header>

          <ResumeRow title="Profile">
            <p className="max-w-prose text-base leading-relaxed text-ink-2">{profileSummary}</p>
          </ResumeRow>

          {/* Condensed: the full case-by-case breakdown lives on /experience and in the PDF. */}
          <ResumeRow title="Experience">
            <ol className="space-y-5">
              {experiences.map((entry) => (
                <li key={entry.docId} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-0.5">
                  <div>
                    <p className="text-base font-semibold text-ink">{entry.role}</p>
                    <p className="text-[15px] text-ink-2">{entry.company}</p>
                  </div>
                  <p className="text-sm text-ink-3 tabular-nums">{entry.period}</p>
                </li>
              ))}
            </ol>
            <p className="no-print mt-6 text-sm text-ink-3">
              Full breakdown per product on the{" "}
              <Link href="/experience" className="text-accent underline underline-offset-4">
                Experience page
              </Link>
              , or in the PDF.
            </p>
          </ResumeRow>

          <ResumeRow title="Key achievements">
            <ul className="space-y-3">
              {keyAchievements.map((achievement) => (
                <li key={achievement} className="flex gap-3 text-base leading-relaxed text-ink-2">
                  <span aria-hidden="true" className="mt-[0.7em] h-1 w-3 shrink-0 rounded-full bg-line-strong" />
                  {achievement}
                </li>
              ))}
            </ul>
          </ResumeRow>

          <ResumeRow title="Skills">
            <dl className="space-y-4">
              {skillGroups.map((group) => (
                <div key={group.label}>
                  <dt className="text-base font-semibold text-ink">{group.label}</dt>
                  <dd className="mt-0.5 text-[15px] leading-relaxed text-ink-2">{group.items}</dd>
                </div>
              ))}
            </dl>
          </ResumeRow>
        </article>
      </div>

      <div className="no-print">
        <Footer />
      </div>
    </main>
  );
}
