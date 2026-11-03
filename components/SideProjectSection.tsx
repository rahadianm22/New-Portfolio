import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const SITE_URL = "https://natunadigilab.vercel.app/";
const FIGMA_URL = "https://www.figma.com/community/file/1660946308636540525/natuna-digilab-foundation-design-system";

// Every figure below is published on natunadigilab.vercel.app (home and /foundation).
const stats = [
  { label: "Components", value: "46" },
  { label: "Color ramps", value: "8" },
  { label: "Device frames", value: "4" },
];

// Step 600 of each ramp.
const ramps = [
  { name: "Azure Blue", hex: "#0274E0" },
  { name: "Sky Blue", hex: "#129DF3" },
  { name: "Jade Green", hex: "#54A522" },
  { name: "Amber Yellow", hex: "#E0A200" },
  { name: "Tomato Red", hex: "#E04B33" },
  { name: "Imperial Red", hex: "#D64748" },
  { name: "Amethyst Purple", hex: "#8941E8" },
  { name: "Slate Gray", hex: "#4B5565" },
];

const foundation = [
  { label: "Typography", value: "Urbanist, in header, body and caption scales" },
  { label: "Number", value: "Spacing from 0 to 160 px, radius from 4 to 48 px plus full" },
  { label: "Effect", value: "4 shadows and 4 background blurs" },
  { label: "Device", value: "440 to 1440 px frames" },
];

export function SideProjectSection() {
  return (
    <section id="side-project" className="bg-surface pb-section">
      <div className="max-w-page mx-auto px-6 md:px-12">
        <SectionHeading title="Natuna Digilab" meta="Open design system" />

        {/* Text only, per DESIGN.md: the spec sheet carries the section. */}
        <div className="rounded-lg bg-tint-blue p-2.5 ring-1 ring-line">
          <div className="grid gap-12 rounded-[calc(var(--radius-lg)-10px)] bg-surface p-7 md:p-12 lg:grid-cols-12 lg:gap-16">
            <div className="flex flex-col lg:col-span-5">
              <div className="flex flex-wrap gap-2">
                <Chip>Foundation v1.1</Chip>
                <Chip>Site in beta</Chip>
              </div>

              <p className="mt-6 max-w-[24ch] text-2xl md:text-3xl font-semibold leading-snug tracking-[-0.02em] text-ink [text-wrap:balance]">
                Built from the weak points I kept hitting across four banking teams.
              </p>

              <p className="mt-5 max-w-[46ch] text-base leading-relaxed text-ink-2">
                Tokens, components, and usage rules for digital products, from banking and payments to
                everyday consumer apps. Figma is the source of truth, and React code follows component by
                component.
              </p>

              <div className="mt-10 flex flex-col items-start gap-3 lg:mt-auto lg:pt-12">
                <a
                  href={SITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 min-h-14 pl-7 pr-2 rounded-full text-[15px] font-semibold
                             bg-accent text-on-accent no-underline transition duration-300 ease-out
                             hover:bg-accent-hover active:scale-[0.98]"
                >
                  Visit Natuna Digilab
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <ArrowUpRight size={18} strokeWidth={2} />
                  </span>
                </a>
                <a
                  href={FIGMA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 min-h-11 px-1 text-sm font-semibold text-ink-2
                             no-underline underline-offset-4 transition-colors duration-300 ease-out
                             hover:text-ink hover:underline"
                >
                  Also on Figma Community
                  <ArrowUpRight size={16} strokeWidth={2} />
                </a>
              </div>
            </div>

            <div className="lg:col-span-7">
              <dl className="grid grid-cols-3 divide-x divide-line border-y border-line">
                {stats.map((stat) => (
                  <div key={stat.label} className="flex flex-col-reverse justify-end py-6 pl-3 first:pl-0 sm:pl-5">
                    <dt className="mt-1 text-sm text-ink-3">{stat.label}</dt>
                    <dd className="text-4xl md:text-5xl font-bold tracking-[-0.04em] text-ink tabular-nums">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-8">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-sm font-semibold text-ink">Color</h3>
                  <span className="text-sm text-ink-3">AA and AAA text-safe steps per ramp</span>
                </div>
                <ul className="mt-3 grid grid-cols-8 gap-1 overflow-hidden rounded-sm" aria-label="Color ramps">
                  {ramps.map((ramp) => (
                    <li key={ramp.name} title={ramp.name} className="h-10" style={{ backgroundColor: ramp.hex }}>
                      <span className="sr-only">{ramp.name}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <dl className="mt-8 divide-y divide-line border-y border-line">
                {foundation.map((row) => (
                  <div key={row.label} className="grid grid-cols-[6rem_1fr] gap-4 py-3.5 sm:grid-cols-[9rem_1fr]">
                    <dt className="text-sm font-semibold text-ink">{row.label}</dt>
                    <dd className="text-sm text-ink-2">{row.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold text-ink-2 ring-1 ring-line-strong">
      {children}
    </span>
  );
}
