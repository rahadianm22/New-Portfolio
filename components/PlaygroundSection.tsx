import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { HOME_PLAYGROUND, type PlaygroundItem } from "@/lib/playground";

/** The live site in a plain browser frame: a top bar with its domain, then the screen. */
function BrowserFrame({ item, sizes, priority }: { item: PlaygroundItem; sizes: string; priority?: boolean }) {
  return (
    <div className="overflow-hidden rounded-md bg-surface shadow-lift ring-1 ring-line">
      <div className="flex h-8 items-center gap-3 border-b border-line bg-surface px-3 md:h-9">
        <span aria-hidden="true" className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-line-strong" />
          <span className="h-2 w-2 rounded-full bg-line-strong" />
          <span className="h-2 w-2 rounded-full bg-line-strong" />
        </span>
        <span className="min-w-0 flex-1 truncate rounded-full bg-surface-alt px-3 py-0.5 text-center text-xs text-ink-3">
          {item.domain}
        </span>
      </div>
      <Image
        src={item.image}
        alt={item.imageAlt}
        width={1440}
        height={900}
        sizes={sizes}
        priority={priority}
        className="aspect-[16/10] h-auto w-full object-cover object-top"
      />
    </div>
  );
}

function Tags({ tags }: { tags: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <li key={tag} className="rounded-full bg-surface-alt px-3 py-1 text-sm text-ink-2">
          {tag}
        </li>
      ))}
    </ul>
  );
}

/** One project tile: three across on the homepage, two across on /playground. */
export function FeaturedTile({
  item,
  priority,
  sizes = "(max-width: 768px) 100vw, 620px",
  compact = false,
}: {
  item: PlaygroundItem;
  priority?: boolean;
  sizes?: string;
  /** Tighter padding for the three-column row. */
  compact?: boolean;
}) {
  return (
    <a href={item.url} target="_blank" rel="noopener noreferrer" className="group block no-underline">
      <div className={`rounded-lg bg-tint-blue p-4 sm:p-6 ${compact ? "md:p-8 lg:p-5 xl:p-6" : "md:p-8"}`}>
        <div className="transition-transform duration-500 ease-out group-hover:-translate-y-1">
          <BrowserFrame item={item} sizes={sizes} priority={priority} />
        </div>
      </div>
      <div className="mt-5 px-1">
        <h3 className="flex items-center gap-2 text-2xl font-bold leading-tight tracking-[-0.02em] text-ink transition-colors group-hover:text-accent">
          {item.title}
          <ArrowUpRight
            size={20}
            strokeWidth={2}
            aria-hidden="true"
            className="transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </h3>
        <p className="mt-2 max-w-[52ch] text-base leading-relaxed text-ink-2">{item.description}</p>
        <div className="mt-4">
          <Tags tags={item.tags} />
        </div>
      </div>
      <span className="sr-only"> (opens {item.domain} in a new tab)</span>
    </a>
  );
}

/**
 * Side projects vibe-coded end to end, all live, in one row of three:
 * stacked on phones and tablets, three across from lg. Projects marked
 * hideOnHome only appear on /playground.
 */
export function PlaygroundSection() {
  return (
    <section id="playground" className="bg-surface py-section">
      <div className="max-w-page mx-auto px-6 md:px-12">
        <SectionHeading
          title="Playground"
          action={
            <Link
              href="/playground"
              className="group inline-flex shrink-0 items-center gap-3 min-h-12 pl-6 pr-2 rounded-full text-[15px] font-semibold
                         text-ink ring-1 ring-line-strong no-underline transition duration-300 ease-out
                         hover:bg-surface-alt active:scale-[0.98]"
            >
              See all projects
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-surface transition-transform duration-300 ease-out group-hover:translate-x-0.5">
                <ArrowRight size={16} strokeWidth={2} />
              </span>
            </Link>
          }
        />

        <p className="-mt-4 mb-12 max-w-4xl text-lg md:text-xl leading-relaxed text-ink-2 [text-wrap:pretty] md:-mt-6">
          Side projects I vibe-coded on my own. I design each one, build it with AI coding tools like Claude
          Code, and ship it myself, from the first idea to the live URL. It&apos;s where I try ideas faster
          than client work allows, and every one of them is live, so open them and click around.
        </p>

        <div className="grid gap-12 lg:grid-cols-3 lg:gap-6">
          {HOME_PLAYGROUND.map((item) => (
            <FeaturedTile
              key={item.id}
              item={item}
              compact
              sizes="(max-width: 1024px) 100vw, 400px"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
