import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
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
        className="relative h-auto w-auto max-h-full max-w-full rounded-md shadow-lift ring-1 ring-line
                   transition-transform duration-500 ease-out group-hover:-translate-y-2 group-hover:scale-[1.015]"
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

        <span
          aria-hidden="true"
          className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full
                     bg-surface text-ink shadow-soft opacity-0 translate-y-1 transition duration-300 ease-out
                     group-hover:opacity-100 group-hover:translate-y-0 group-focus-visible:opacity-100"
        >
          <ArrowUpRight size={20} strokeWidth={1.75} />
        </span>
      </div>

      <div className="mt-5 px-1">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h3 className="text-lg md:text-xl font-bold leading-snug tracking-[-0.01em] text-ink transition-colors group-hover:text-accent">
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
 * Image only, for the homepage, and no canvas: the cover is the tile. The
 * tile takes the cover's own aspect ratio, so nothing is cropped; the row
 * around it (SelectedWorkSection) gives every tile in a row one height.
 *
 * "See more" has three carriers: the custom cursor turns into a labelled
 * bubble over the tile (data-cursor-label); without that cursor, or on
 * keyboard focus, a pill rises in the middle; on touch screens, which have
 * no hover, a small pill stays in the corner. The title is the link's
 * accessible name.
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
    <Link
      href={study.href}
      aria-label={`${study.title}, see more`}
      title={study.title}
      data-cursor-label="See more"
      style={{ aspectRatio: `${study.coverWidth} / ${study.coverHeight}` }}
      className="work-tile group relative block w-full overflow-hidden rounded-md bg-surface-alt no-underline"
    >
      <Image
        src={study.cover}
        alt={study.coverAlt ?? ""}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] group-focus-visible:scale-[1.04]"
      />

      {/* Hairline edge, so a cover with a white border (BSI) still reads as a tile on the white page. */}
      <span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-md ring-1 ring-inset ring-line" />

      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(18,21,28,0.35)] via-transparent to-transparent
                   opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100 group-focus-visible:opacity-100"
      />

      <span
        aria-hidden="true"
        className="tile-pill pointer-events-none absolute inset-0 flex items-center justify-center [@media(hover:none)]:hidden"
      >
        <span
          className="inline-flex translate-y-2 items-center gap-3 min-h-12 pl-6 pr-1.5 rounded-full bg-surface
                     text-[15px] font-semibold text-ink shadow-lift opacity-0 transition duration-300 ease-out
                     group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100"
        >
          See more
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-on-accent">
            <ArrowRight size={16} strokeWidth={2} />
          </span>
        </span>
      </span>

      <span
        aria-hidden="true"
        className="absolute bottom-4 right-4 hidden items-center gap-1.5 rounded-full bg-surface px-3.5 py-2 text-sm font-semibold
                   text-ink shadow-soft [@media(hover:none)]:inline-flex"
      >
        See more
        <ArrowRight size={14} strokeWidth={2} />
      </span>
    </Link>
  );
}

/** Studies with no screen to show. Stated plainly, never faked with a stock image. */
export function NoteCard({ study }: { study: CaseStudy }) {
  return (
    <Link
      href={study.href}
      className={`group flex h-full flex-col justify-between gap-10 rounded-lg p-7 md:p-9 no-underline
                  transition-transform duration-300 ease-out hover:-translate-y-1 ${CANVAS_BG}`}
    >
      <div className="flex items-start justify-between gap-6">
        <span className="text-sm text-ink-2">{study.eyebrow}</span>
        <span
          aria-hidden="true"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-surface text-ink
                     shadow-soft transition-colors duration-300 group-hover:bg-accent group-hover:text-on-accent"
        >
          <ArrowUpRight size={20} strokeWidth={1.75} />
        </span>
      </div>
      <div>
        <h3 className="text-xl md:text-2xl font-bold leading-snug tracking-[-0.01em] text-ink">
          {study.title}
        </h3>
        <p className="mt-3 max-w-[52ch] text-[15px] leading-relaxed text-ink-2">{study.summary}</p>
        {study.coverNote && <p className="mt-4 text-sm text-ink-3">{study.coverNote}</p>}
      </div>
    </Link>
  );
}
