import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { CaseStudy } from "@/lib/case-studies";

/** One canvas colour for every study, so the grid reads as a single set. */
const CANVAS_BG = "bg-tint-blue";

/**
 * The cover floats whole on the canvas instead of being cropped to fill it,
 * so a portrait login screen, a square campaign crop and a wide two-phone
 * shot all read correctly in the same grid. A soft white glow sits behind
 * it; hover lifts it.
 */
function FloatingCover({
  study,
  priority,
  sizes,
}: {
  study: CaseStudy;
  priority: boolean;
  sizes: string;
}) {
  if (!study.cover || !study.coverWidth || !study.coverHeight) return null;

  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_65%_60%_at_50%_50%,rgba(255,255,255,0.85),transparent_70%)]"
      />
      <Image
        src={study.cover}
        alt={study.coverAlt ?? ""}
        width={study.coverWidth}
        height={study.coverHeight}
        sizes={sizes}
        priority={priority}
        className="relative h-auto w-auto max-h-full max-w-full rounded-md shadow-lift ring-1 ring-line"
      />
    </>
  );
}

function OutcomeChip({ study, onCanvas = false }: { study: CaseStudy; onCanvas?: boolean }) {
  if (!study.outcome) return null;
  return (
    <p
      className={`inline-flex flex-wrap items-baseline gap-x-2 rounded-full px-3.5 py-1.5 text-sm
                  ${onCanvas ? "bg-surface" : "bg-surface-alt"}`}
    >
      <span className="font-bold text-ink">{study.outcome.value}</span>
      <span className="text-ink-3">{study.outcome.label}</span>
    </p>
  );
}

/**
 * A case study presented the way a shot is: the real work floating on a
 * tinted canvas, with the words underneath rather than on top of it.
 */
export function ShotCard({
  study,
  canvasClassName = "h-[300px] md:h-[420px]",
  priority = false,
  sizes = "(max-width: 768px) 100vw, 640px",
  showSummary = true,
}: {
  study: CaseStudy;
  canvasClassName?: string;
  priority?: boolean;
  sizes?: string;
  showSummary?: boolean;
}) {
  return (
    <Link href={study.href} className="group block no-underline">
      <div
        className={`relative flex items-center justify-center overflow-hidden rounded-lg p-6 md:p-10 ${CANVAS_BG} ${canvasClassName}`}
      >
        <FloatingCover study={study} priority={priority} sizes={sizes} />
      </div>

      <div className="mt-5 px-1">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h3 className="text-lg md:text-xl font-bold leading-snug tracking-[-0.01em] text-ink transition-colors duration-300 group-hover:text-accent">
            {study.title}
          </h3>
          <span className="text-sm text-ink-3">{study.eyebrow}</span>
        </div>
        {showSummary && (
          <p className="mt-2 max-w-[60ch] text-[15px] leading-relaxed text-ink-2 line-clamp-2">
            {study.summary}
          </p>
        )}
        {study.outcome && (
          <div className="mt-3">
            <OutcomeChip study={study} />
          </div>
        )}
      </div>
    </Link>
  );
}

/**
 * For the homepage: the cover at its own aspect ratio, nothing cropped, with
 * the title and the measured outcome underneath, so a reader scanning the
 * grid knows what each piece is without hovering. The row around it
 * (SelectedWorkSection) gives every cover in a row one height.
 *
 * Hover has one signal: the title takes the accent. The custom cursor still
 * turns into a "See more" bubble over the tile (data-cursor-label).
 */
export function WorkTile({
  study,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 660px",
}: {
  study: CaseStudy;
  priority?: boolean;
  sizes?: string;
}) {
  if (!study.cover || !study.coverWidth || !study.coverHeight) return null;

  return (
    <Link href={study.href} data-cursor-label="See more" className="work-tile group block no-underline">
      <div
        style={{ aspectRatio: `${study.coverWidth} / ${study.coverHeight}` }}
        className="relative w-full overflow-hidden rounded-md bg-surface-alt"
      >
        <Image src={study.cover} alt={study.coverAlt ?? ""} fill sizes={sizes} priority={priority} className="object-cover" />
        {/* Hairline edge, so a cover with a white border (BSI) still reads as a tile on the white page. */}
        <span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-md ring-1 ring-inset ring-line" />
      </div>

      <div className="mt-4 px-1">
        <h3 className="text-lg md:text-xl font-bold leading-snug tracking-[-0.01em] text-ink transition-colors duration-300 group-hover:text-accent">
          {study.title}
        </h3>
        <p className="mt-1 text-sm text-ink-3">{study.eyebrow}</p>
        {study.outcome && (
          <div className="mt-3">
            <OutcomeChip study={study} />
          </div>
        )}
      </div>
    </Link>
  );
}

/** Studies with no screen to show. Stated plainly, never faked with a stock image. */
export function NoteCard({ study }: { study: CaseStudy }) {
  return (
    <Link
      href={study.href}
      className={`group flex h-full flex-col justify-between gap-10 rounded-lg p-7 md:p-9 no-underline ${CANVAS_BG}`}
    >
      <span
        aria-hidden="true"
        className="flex h-11 w-11 shrink-0 items-center justify-center self-end rounded-full bg-surface text-ink
                   shadow-soft transition-colors duration-300 group-hover:bg-accent group-hover:text-on-accent"
      >
        <ArrowUpRight size={20} strokeWidth={1.75} />
      </span>
      <div>
        <h3 className="text-xl md:text-2xl font-bold leading-snug tracking-[-0.01em] text-ink">
          {study.title}
        </h3>
        <p className="mt-1 text-sm text-ink-3">{study.eyebrow}</p>
        <p className="mt-3 max-w-[52ch] text-[15px] leading-relaxed text-ink-2">{study.summary}</p>
        {study.coverNote && <p className="mt-4 text-sm text-ink-3">{study.coverNote}</p>}
      </div>
    </Link>
  );
}
