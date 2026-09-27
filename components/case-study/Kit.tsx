import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, TriangleAlert, Check, Quote, Lock } from "lucide-react";
import { SectionLabel } from "@/components/SectionLabel";
import { ShotCard, NoteCard } from "@/components/ShotCard";
import { CASE_STUDIES } from "@/lib/case-studies";
import { Zoomable } from "./Zoomable";

/*
 * Shared building blocks for every case study page, in the same visual
 * language as the homepage: tinted canvases, framed real screens, pill
 * controls, one accent. Pages compose these instead of repeating markup.
 */

type Img = { src: string; alt: string; width: number; height: number };

/* ------------------------------------------------------------------ */
/* Hero                                                                 */
/* ------------------------------------------------------------------ */

export function CaseHero({
  eyebrow,
  title,
  intro,
  facts,
  actions,
  cover,
}: {
  eyebrow: string;
  title: string;
  intro: React.ReactNode;
  facts: { label: string; value: string }[];
  actions?: React.ReactNode;
  cover?: React.ReactNode;
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

        <p className="mt-10 text-[15px] font-medium text-accent">{eyebrow}</p>
        <h1 className="mt-4 max-w-[20ch] text-[2.5rem] sm:text-5xl lg:text-[4rem] font-bold leading-[1.02] tracking-[-0.04em] text-ink [text-wrap:balance]">
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
      </div>

      {cover && <div className="max-w-page mx-auto mt-12 px-3 md:mt-16 md:px-6">{cover}</div>}
      <div className={cover ? "h-16 md:h-24" : "h-12 md:h-16"} />
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Section scaffolding                                                  */
/* ------------------------------------------------------------------ */

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
    <section className={`${tone === "alt" ? "bg-surface-alt" : "bg-surface"} py-section`}>
      <div className="max-w-page mx-auto px-6 md:px-12">
        <SectionLabel label={label} />
        {title && (
          <h2 className="mt-tight max-w-[22ch] text-3xl md:text-[2.75rem] font-bold leading-[1.08] tracking-[-0.03em] text-ink [text-wrap:balance]">
            {title}
          </h2>
        )}
        <div className={title ? "mt-10" : "mt-8"}>{children}</div>
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

export function ProcessSteps({ items }: { items: { title: string; body: string }[] }) {
  return (
    <ol className="grid gap-4 md:grid-cols-2">
      {items.map((item, i) => (
        <li
          key={item.title}
          className="group relative overflow-hidden rounded-lg bg-surface p-7 md:p-9 ring-1 ring-line shadow-soft
                     transition duration-300 ease-out hover:-translate-y-1"
        >
          <span
            aria-hidden="true"
            className="absolute -right-2 -top-6 text-[7rem] font-bold leading-none tracking-[-0.06em] text-tint-blue
                       transition-colors duration-300 group-hover:text-[#d3dcff]"
          >
            {i + 1}
          </span>
          <div className="relative">
            <span className="inline-flex h-9 min-w-9 items-center justify-center rounded-full bg-accent px-3 text-sm font-bold text-on-accent">
              {i + 1}
            </span>
            <h3 className="mt-6 max-w-[26ch] text-xl font-bold leading-snug tracking-[-0.01em] text-ink">{item.title}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-2">{item.body}</p>
          </div>
        </li>
      ))}
    </ol>
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
            {afterIsPhone ? (
              <PhoneFrame image={after} />
            ) : (
              <div className="overflow-hidden rounded-md bg-surface shadow-lift ring-1 ring-line">
                <Image src={after.src} alt={after.alt} width={after.width} height={after.height} sizes="340px" className="h-auto w-full" />
              </div>
            )}
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
          <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/15 blur-3xl" />
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-[#1e3acc]/60 blur-3xl" />
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
