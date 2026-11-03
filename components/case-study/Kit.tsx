import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowDown, TriangleAlert, Check, Quote, Lock } from "lucide-react";
import { ShotCard, NoteCard } from "@/components/ShotCard";
import { CASE_STUDIES } from "@/lib/case-studies";
import { Zoomable } from "./Zoomable";

/*
 * Shared building blocks for every case study page, in the same visual
 * language as the homepage: tinted canvases, framed real screens, pill
 * controls, one accent. Pages compose these instead of repeating markup.
 */

type Img = { src: string; alt: string; width: number; height: number };

/** The anchor a section is reachable at: "The problem" becomes #problem. */
export const chapterId = (label: string) =>
  label
    .toLowerCase()
    .replace(/^the /, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

/* ------------------------------------------------------------------ */
/* Hero                                                                 */
/* ------------------------------------------------------------------ */

export function CaseHero({
  title,
  intro,
  facts,
  actions,
  cover,
  chapters,
}: {
  title: string;
  intro: React.ReactNode;
  facts: { label: string; value: string }[];
  actions?: React.ReactNode;
  cover?: React.ReactNode;
  /** Section labels in page order, shown as the route the story takes. */
  chapters?: string[];
}) {
  return (
    <section className="relative isolate overflow-hidden bg-surface pt-28 md:pt-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[640px]
                   bg-[radial-gradient(ellipse_70%_60%_at_30%_0%,var(--tint-blue),transparent_70%)]"
      />

      <div className="max-w-page mx-auto px-6 md:px-12">
        <Link
          href="/case-studies"
          className="group inline-flex items-center gap-2 min-h-11 pl-3 pr-4 rounded-full text-sm font-medium text-ink-2
                     bg-white/70 backdrop-blur ring-1 ring-line no-underline transition-colors hover:bg-surface hover:text-ink"
        >
          <ArrowLeft size={16} strokeWidth={1.75} className="transition-transform duration-300 ease-out group-hover:-translate-x-0.5" />
          All case studies
        </Link>

        <h1 className="mt-10 max-w-[20ch] text-[2.5rem] sm:text-5xl lg:text-[4rem] font-bold leading-[1.02] tracking-[-0.04em] text-ink [text-wrap:balance]">
          {title}
        </h1>
        <p className="mt-6 max-w-[60ch] text-lg md:text-xl leading-relaxed text-ink-2">{intro}</p>

        {actions && <div className="mt-8 flex flex-wrap gap-3">{actions}</div>}

        <dl className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
          {facts.map((fact) => (
            <div key={fact.label} className="rounded-md bg-white/80 p-4 md:p-5 ring-1 ring-line backdrop-blur">
              <dt className="text-sm text-ink-3">{fact.label}</dt>
              <dd className="mt-1 text-[15px] font-semibold leading-snug text-ink">{fact.value}</dd>
            </div>
          ))}
        </dl>

        {chapters && <Chapters items={chapters} />}
      </div>

      {cover && <div className="max-w-page mx-auto mt-12 px-3 md:mt-16 md:px-6">{cover}</div>}
      <div className={cover ? "h-16 md:h-24" : "h-12 md:h-16"} />
    </section>
  );
}

/** The case study's route, in order, each stop a link to its section. */
function Chapters({ items }: { items: string[] }) {
  return (
    <nav aria-label="On this page" className="mt-8">
      <ol className="flex flex-wrap items-center gap-x-1 gap-y-2">
        {items.map((label, i) => (
          <li key={label} className="flex items-center gap-1">
            <a
              href={`#${chapterId(label)}`}
              className="inline-flex min-h-11 items-center gap-2 rounded-full pl-1.5 pr-3.5 text-sm font-medium text-ink-2
                         no-underline transition-colors hover:bg-surface-alt hover:text-ink"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-surface-alt text-xs font-bold tabular-nums text-ink">
                {i + 1}
              </span>
              {label.replace(/^The (.)/, (_, c: string) => c.toUpperCase())}
            </a>
            {i < items.length - 1 && <ArrowRight size={14} strokeWidth={1.75} aria-hidden="true" className="text-ink-3" />}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/* ------------------------------------------------------------------ */
/* Section scaffolding                                                  */
/* ------------------------------------------------------------------ */

/**
 * `label` names the section ("Process", "Outcome"). When the section has its
 * own title, the label is not printed above it (that would be an eyebrow);
 * it names the section for assistive tech instead, and the title stands on
 * a ruled line. Without a title, the label is the heading. The label also
 * gives the section its anchor, so chapters and process steps can link to it.
 */
export function CaseSection({
  label,
  title,
  tone = "plain",
  children,
}: {
  label: string;
  title?: string;
  tone?: "plain" | "alt";
  children: React.ReactNode;
}) {
  return (
    <section
      id={chapterId(label)}
      aria-label={title ? label : undefined}
      className={`${tone === "alt" ? "bg-surface-alt" : "bg-surface"} scroll-mt-20 py-section`}
    >
      <div className="max-w-page mx-auto px-6 md:px-12">
        <div aria-hidden="true" className="h-px bg-line-strong" />
        <h2 className="mt-tight max-w-[22ch] text-3xl md:text-[2.75rem] font-bold leading-[1.08] tracking-[-0.03em] text-ink [text-wrap:balance]">
          {title ?? label}
        </h2>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

export function Lead({ children }: { children: React.ReactNode }) {
  return <p className="max-w-[62ch] text-lg md:text-xl leading-relaxed text-ink-2">{children}</p>;
}

export function Body({ children }: { children: React.ReactNode }) {
  return <p className="max-w-[62ch] text-base md:text-[17px] leading-relaxed text-ink-2">{children}</p>;
}

/* ------------------------------------------------------------------ */
/* Problem and process                                                  */
/* ------------------------------------------------------------------ */

export function ProblemGrid({ items }: { items: { label: string; body: string }[] }) {
  const cols = items.length === 3 ? "lg:grid-cols-3" : "md:grid-cols-2";
  return (
    <div className={`grid gap-4 ${cols}`}>
      {items.map((p) => (
        <article key={p.label} className="flex flex-col rounded-lg bg-tint-blue p-7 md:p-9">
          <span className="flex h-11 w-11 items-center justify-center rounded-md bg-surface text-status-warn shadow-soft">
            <TriangleAlert size={20} strokeWidth={1.75} />
          </span>
          <h3 className="mt-6 text-xl font-bold leading-snug tracking-[-0.01em] text-ink">{p.label}</h3>
          <p className="mt-3 text-[15px] leading-relaxed text-ink-2">{p.body}</p>
        </article>
      ))}
    </div>
  );
}

export type ProcessStep = {
  /** One or two words for the phase, shown in the overview strip. */
  phase: string;
  title: string;
  body: string;
  /** What the step produced, in a line. */
  output?: string;
  /** Where on the page that output can be seen, e.g. "#solution". */
  href?: string;
};

/**
 * The work in the order it happened: an overview strip of phases, then a
 * timeline where every step names what it produced and links to it.
 */
export function ProcessSteps({ items }: { items: ProcessStep[] }) {
  const last = items.length - 1;
  return (
    <div>
      <ol aria-label="Phases" className="flex flex-wrap items-center gap-x-2 gap-y-3">
        {items.map((item, i) => (
          <li key={item.phase} className="flex items-center gap-2">
            <span className="inline-flex min-h-10 items-center gap-2 rounded-full bg-tint-blue pl-1.5 pr-4 text-sm font-semibold text-ink">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent text-xs font-bold tabular-nums text-on-accent">
                {i + 1}
              </span>
              {item.phase}
            </span>
            {i < last && <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" className="text-ink-3" />}
          </li>
        ))}
      </ol>

      <ol className="mt-12">
        {items.map((item, i) => (
          <li key={item.title} className="grid grid-cols-[2.25rem_1fr] gap-x-5 md:grid-cols-[2.75rem_1fr] md:gap-x-8">
            <div className="flex flex-col items-center">
              <span
                aria-hidden="true"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold tabular-nums text-on-accent md:h-11 md:w-11 md:text-base"
              >
                {i + 1}
              </span>
              {i < last && <span aria-hidden="true" className="my-2 w-px flex-1 bg-line-strong" />}
            </div>
            <div className={i < last ? "pb-12 md:pb-14" : ""}>
              <h3 className="pt-1 text-xl md:pt-1.5 md:text-2xl font-bold leading-snug tracking-[-0.01em] text-ink">
                <span className="sr-only">{`Step ${i + 1}, ${item.phase}: `}</span>
                {item.title}
              </h3>
              <p className="mt-3 max-w-[62ch] text-base md:text-[17px] leading-relaxed text-ink-2">{item.body}</p>
              {item.output && (
                <div className="mt-5 flex max-w-[62ch] flex-wrap items-center gap-x-4 gap-y-1 rounded-md bg-surface-alt px-4 py-2.5 ring-1 ring-line md:px-5">
                  <p className="py-1 text-[15px] leading-snug text-ink">
                    <span className="text-ink-3">Output: </span>
                    <span className="font-semibold">{item.output}</span>
                  </p>
                  {item.href && (
                    <a
                      href={item.href}
                      className="ml-auto inline-flex min-h-10 items-center gap-1.5 text-sm font-semibold text-accent no-underline hover:underline"
                    >
                      See it
                      <ArrowDown size={15} strokeWidth={2} aria-hidden="true" />
                    </a>
                  )}
                </div>
              )}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function DecisionGrid({ items }: { items: { title: string; body: string }[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map((d) => (
        <article key={d.title} className="rounded-lg bg-surface p-7 md:p-9 ring-1 ring-line shadow-soft">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent text-on-accent">
            <Check size={20} strokeWidth={2} />
          </span>
          <h3 className="mt-6 text-xl font-bold leading-snug tracking-[-0.01em] text-ink">{d.title}</h3>
          <p className="mt-3 text-[15px] leading-relaxed text-ink-2">{d.body}</p>
        </article>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Visuals                                                              */
/* ------------------------------------------------------------------ */

/**
 * A real screen framed on the canvas tint, zoomable to full resolution.
 * `crop` gives the frame a fixed height and anchors the image top-left,
 * so a huge flow map shows a readable slice instead of a grey postage stamp.
 */
export function Figure({
  image,
  caption,
  crop,
  cropZoom = 1,
  priority = false,
  canvasClassName = "",
}: {
  image: Img;
  caption?: React.ReactNode;
  /** Height classes for a fixed-height frame showing the top-left slice. */
  crop?: string;
  /** How many frame-widths wide the image renders inside a crop. 3 = a third of the map, three times larger. */
  cropZoom?: number;
  priority?: boolean;
  canvasClassName?: string;
}) {
  const frame = crop ? (
    <div className={`relative w-full overflow-hidden rounded-md bg-surface shadow-lift ring-1 ring-line ${crop}`}>
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        priority={priority}
        sizes={`(max-width: 768px) ${Math.round(100 * cropZoom)}vw, ${Math.round(1200 * cropZoom)}px`}
        style={{ width: `${cropZoom * 100}%`, maxWidth: "none", height: "auto" }}
        className="absolute left-0 top-0"
      />
    </div>
  ) : (
    <div className="overflow-hidden rounded-md bg-surface shadow-lift ring-1 ring-line">
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        priority={priority}
        sizes="(max-width: 768px) 100vw, 1200px"
        className="h-auto w-full"
      />
    </div>
  );

  return (
    <figure>
      <div className={`rounded-lg bg-tint-blue p-3 sm:p-6 md:p-10 ${canvasClassName}`}>
        <Zoomable {...image}>{frame}</Zoomable>
      </div>
      {caption && (
        <figcaption className="mt-4 max-w-[70ch] px-1 text-sm leading-relaxed text-ink-3">{caption}</figcaption>
      )}
    </figure>
  );
}

/** A real mobile screenshot inside a phone bezel. The bezel is chrome, the screen is the shipped UI. */
export function PhoneFrame({
  image,
  className = "",
  priority = false,
}: {
  image: Img;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className={`rounded-[2.4rem] bg-ink p-2 shadow-lift ring-1 ring-black/10 ${className}`}>
      <div className="relative overflow-hidden rounded-[1.9rem] bg-surface">
        <span aria-hidden="true" className="absolute left-1/2 top-2 z-[1] h-4 w-16 -translate-x-1/2 rounded-full bg-ink" />
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          priority={priority}
          sizes="320px"
          className="h-auto w-full"
        />
      </div>
    </div>
  );
}

/** A desktop screenshot in a plain window: a hairline edge, no drawn browser chrome. */
export function DesktopFrame({ image, priority = false, sizes = "340px" }: { image: Img; priority?: boolean; sizes?: string }) {
  return (
    <div className="overflow-hidden rounded-md bg-surface shadow-lift ring-1 ring-line">
      <Image src={image.src} alt={image.alt} width={image.width} height={image.height} priority={priority} sizes={sizes} className="h-auto w-full" />
    </div>
  );
}

export type Screen = { image: Img; label: string; note?: string };

/**
 * Final screens in the order a person meets them, each one big enough to
 * read and zoomable to full size. A few screens fill the width; a longer
 * flow scrolls sideways (snap on touch, arrow keys once focused).
 */
export function ScreenFlow({
  screens,
  caption,
  label,
  numbered = true,
  minWidth = 190,
  maxWidth,
  priority = false,
}: {
  screens: Screen[];
  caption?: React.ReactNode;
  /** Names the scrolling region for assistive tech. */
  label: string;
  numbered?: boolean;
  /** Narrowest a screen may get before the row scrolls instead of shrinking. */
  minWidth?: number;
  /** Widest a screen may get, for very long screens that would otherwise run a page tall. */
  maxWidth?: number;
  priority?: boolean;
}) {
  return (
    <figure>
      <div className="rounded-lg bg-tint-blue py-6 md:py-10">
        <ol
          tabIndex={0}
          aria-label={label}
          style={{
            gridAutoColumns: `minmax(${minWidth}px, ${maxWidth ? `${maxWidth}px` : "1fr"})`,
            justifyContent: maxWidth ? "center" : undefined,
          }}
          className="grid snap-x snap-mandatory scroll-px-4 grid-flow-col gap-4 overflow-x-auto px-4 pb-2 outline-none
                     focus-visible:ring-2 focus-visible:ring-accent md:scroll-px-10 md:gap-6 md:px-10"
        >
          {screens.map((s, i) => (
            <li key={s.image.src} className="flex snap-start flex-col">
              <Zoomable {...s.image} badge="icon">
                <div className="overflow-hidden rounded-[1.4rem] bg-surface shadow-lift ring-1 ring-line">
                  <Image
                    src={s.image.src}
                    alt={s.image.alt}
                    width={s.image.width}
                    height={s.image.height}
                    priority={priority && i < 3}
                    sizes={`${Math.max(minWidth, 260)}px`}
                    className="h-auto w-full"
                  />
                </div>
              </Zoomable>
              <div className="mt-4 flex gap-2.5 px-1">
                {numbered && (
                  <span className="flex h-6 min-w-6 shrink-0 items-center justify-center rounded-full bg-surface px-1.5 text-xs font-bold text-ink tabular-nums">
                    {i + 1}
                  </span>
                )}
                <div>
                  <p className="text-[15px] font-semibold leading-snug text-ink">{s.label}</p>
                  {s.note && <p className="mt-1 text-sm leading-relaxed text-ink-2">{s.note}</p>}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
      {caption && <figcaption className="mt-4 max-w-[70ch] px-1 text-sm leading-relaxed text-ink-3">{caption}</figcaption>}
    </figure>
  );
}

/**
 * Several wide figures stacked under one heading, each with its own short
 * caption. For flows that were drawn as one board per path.
 */
export function FigureStack({ items }: { items: { image: Img; caption: React.ReactNode }[] }) {
  return (
    <div className="grid gap-10">
      {items.map((item) => (
        <Figure key={item.image.src} image={item.image} caption={item.caption} canvasClassName="md:p-8" />
      ))}
    </div>
  );
}

/** Before and after side by side, each on its own canvas, each zoomable. */
export function BeforeAfter({
  before,
  after,
  beforeCaption,
  afterCaption,
  afterIsPhone = false,
}: {
  before: Img;
  after: Img;
  beforeCaption: React.ReactNode;
  afterCaption: React.ReactNode;
  afterIsPhone?: boolean;
}) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <figure className="flex flex-col">
        <div className="relative flex flex-1 items-center justify-center rounded-lg bg-surface-alt p-6 pt-16 md:p-10 md:pt-20 ring-1 ring-line">
          <span className="absolute left-5 top-5 rounded-full bg-status-warn-bg px-3.5 py-1.5 text-sm font-semibold text-status-warn">
            Before
          </span>
          <Zoomable {...before} className="max-w-[340px]">
            <div className="overflow-hidden rounded-md bg-surface shadow-lift ring-1 ring-line">
              <Image src={before.src} alt={before.alt} width={before.width} height={before.height} sizes="340px" className="h-auto w-full" />
            </div>
          </Zoomable>
        </div>
        <figcaption className="mt-4 px-1 text-sm leading-relaxed text-ink-3">{beforeCaption}</figcaption>
      </figure>

      <figure className="flex flex-col">
        <div className="relative flex flex-1 items-center justify-center rounded-lg bg-tint-blue p-6 pt-16 md:p-10 md:pt-20">
          <span className="absolute left-5 top-5 rounded-full bg-accent px-3.5 py-1.5 text-sm font-semibold text-on-accent">
            After
          </span>
          <Zoomable {...after} className={afterIsPhone ? "max-w-[260px]" : "max-w-[340px]"}>
            {afterIsPhone ? <PhoneFrame image={after} /> : <DesktopFrame image={after} />}
          </Zoomable>
        </div>
        <figcaption className="mt-4 px-1 text-sm leading-relaxed text-ink-3">{afterCaption}</figcaption>
      </figure>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Outcome, reflection, next                                            */
/* ------------------------------------------------------------------ */

export function StatGrid({ stats }: { stats: { value: string; label: string }[] }) {
  return (
    <dl className={`grid gap-4 ${stats.length > 1 ? "md:grid-cols-2" : ""}`}>
      {stats.map((s, i) => (
        <div
          key={s.label}
          className={`on-accent rounded-lg p-7 md:p-10 ${i === 0 ? "bg-accent text-on-accent" : "bg-tint-blue text-ink"}`}
        >
          <dd className="text-4xl md:text-5xl font-bold leading-[1.05] tracking-[-0.035em] [text-wrap:balance]">{s.value}</dd>
          <dt className={`mt-4 max-w-[40ch] text-[15px] leading-relaxed ${i === 0 ? "text-white/85" : "text-ink-2"}`}>{s.label}</dt>
        </div>
      ))}
    </dl>
  );
}

/** Before/after as numbers, for studies where the change is measured in steps. */
export function Comparison({
  rows,
  note,
}: {
  rows: { task: string; before: string; beforeDetail: string; after: string; afterDetail: string }[];
  note?: string;
}) {
  return (
    <div>
      <div className="grid gap-4 md:grid-cols-2">
        {rows.map((r) => (
          <article key={r.task} className="rounded-lg bg-tint-blue p-7 md:p-9">
            <h3 className="text-lg font-bold text-ink">{r.task}</h3>
            <div className="mt-6 flex items-center gap-4 md:gap-6">
              <div>
                <p className="text-5xl md:text-6xl font-bold tracking-[-0.04em] text-ink-3 line-through decoration-2">{r.before}</p>
                <p className="mt-2 text-sm text-ink-3">{r.beforeDetail}</p>
              </div>
              <ArrowRight size={28} strokeWidth={1.75} className="shrink-0 text-ink-3" />
              <div>
                <p className="text-5xl md:text-6xl font-bold tracking-[-0.04em] text-accent">{r.after}</p>
                <p className="mt-2 text-sm font-medium text-ink-2">{r.afterDetail}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
      {note && <p className="mt-4 px-1 text-sm text-ink-3">{note}</p>}
    </div>
  );
}

export function Callout({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <aside className="flex gap-4 rounded-lg bg-tint-blue p-6 md:p-8">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-surface text-accent shadow-soft">
        <Lock size={18} strokeWidth={1.75} />
      </span>
      <div>
        <h2 className="text-base font-bold text-ink">{title}</h2>
        <p className="mt-1.5 max-w-[70ch] text-[15px] leading-relaxed text-ink-2">{children}</p>
      </div>
    </aside>
  );
}

export function Reflection({ children }: { children: React.ReactNode }) {
  return (
    <section className="bg-surface pb-section">
      <div className="max-w-page mx-auto px-3 md:px-6">
        <div className="on-accent relative overflow-hidden rounded-lg bg-accent px-6 py-14 md:px-16 md:py-20">
          <div className="relative max-w-4xl">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-on-accent ring-1 ring-white/25">
              <Quote size={20} strokeWidth={1.75} />
            </span>
            <p className="mt-4 text-sm font-semibold text-white/85">Reflection</p>
            <p className="mt-4 text-2xl md:text-[2.1rem] font-semibold leading-[1.3] tracking-[-0.02em] text-on-accent [text-wrap:pretty]">
              {children}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function NextCase({ currentId }: { currentId: string }) {
  const i = CASE_STUDIES.findIndex((s) => s.id === currentId);
  const next = CASE_STUDIES[(i + 1) % CASE_STUDIES.length];

  return (
    <section className="bg-surface pb-section">
      <div className="max-w-page mx-auto px-6 md:px-12">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-3xl md:text-[2.75rem] font-bold tracking-[-0.03em] text-ink">Next case study</h2>
          <Link
            href="/case-studies"
            className="group inline-flex items-center gap-2 min-h-11 px-4 rounded-full text-sm font-medium text-ink-2 ring-1 ring-line
                       no-underline transition-colors hover:bg-surface-alt hover:text-ink"
          >
            All case studies
            <ArrowRight size={16} strokeWidth={1.75} className="transition-transform duration-300 ease-out group-hover:translate-x-0.5" />
          </Link>
        </div>
        <div className="mt-8">
          {next.cover ? (
            <ShotCard study={next} canvasClassName="h-[300px] md:h-[460px]" sizes="(max-width: 768px) 100vw, 1150px" />
          ) : (
            <NoteCard study={next} />
          )}
        </div>
      </div>
    </section>
  );
}
