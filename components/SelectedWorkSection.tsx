import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { WorkTile, NoteCard } from "./ShotCard";
import { MoreWork } from "./MoreWork";
import { SectionHeading } from "./SectionHeading";
import { CASE_STUDIES, FEATURED_CASE_STUDIES, type CaseStudy } from "@/lib/case-studies";

const withoutCover = CASE_STUDIES.filter((s) => !s.cover);

const aspect = (s: CaseStudy) => (s.coverWidth ?? 1) / (s.coverHeight ?? 1);

/**
 * A justified gallery: studies sit in pairs, in their listed order, and each
 * tile grows in proportion to its cover's aspect ratio. Since every tile also
 * keeps that ratio, the two in a row come out the same height with nothing
 * cropped, whatever mix of portrait, square and wide covers they carry.
 */
function toRows(studies: CaseStudy[]) {
  const rows: CaseStudy[][] = [];
  for (let i = 0; i < studies.length; i += 2) rows.push(studies.slice(i, i + 2));
  return rows;
}

export function SelectedWorkSection() {
  const rows = toRows(FEATURED_CASE_STUDIES.filter((s) => s.cover));

  return (
    <section id="work" className="bg-surface py-section">
      <div className="max-w-page mx-auto px-6 md:px-12">
        <SectionHeading
          title="Selected work"
          action={
            <Link
              href="/case-studies"
              className="group inline-flex shrink-0 items-center gap-3 min-h-12 pl-6 pr-2 rounded-full text-[15px] font-semibold
                         text-ink ring-1 ring-line-strong no-underline transition duration-300 ease-out
                         hover:bg-surface-alt active:scale-[0.98]"
            >
              All {CASE_STUDIES.length} case studies
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-surface transition-transform duration-300 ease-out group-hover:translate-x-0.5">
                <ArrowRight size={16} strokeWidth={2} />
              </span>
            </Link>
          }
        />

        <div className="flex flex-col gap-4">
          {rows.map((row, r) => {
            const total = row.reduce((sum, s) => sum + aspect(s), 0);
            return (
              <div key={row[0].id} className="flex flex-col gap-4 md:flex-row">
                {row.map((study) => (
                  <div
                    key={study.id}
                    style={{ "--grow": aspect(study) } as React.CSSProperties}
                    className="md:[flex:var(--grow)_1_0%] md:min-w-0"
                  >
                    <WorkTile
                      study={study}
                      priority={r === 0}
                      sizes={`(max-width: 768px) 100vw, ${Math.round((aspect(study) / total) * 1100)}px`}
                    />
                  </div>
                ))}
              </div>
            );
          })}
        </div>

        {withoutCover.length > 0 && (
          <MoreWork count={withoutCover.length}>
            <div className="grid gap-6 md:grid-cols-2">
              {withoutCover.map((study) => (
                <NoteCard key={study.id} study={study} />
              ))}
            </div>
          </MoreWork>
        )}
      </div>
    </section>
  );
}
