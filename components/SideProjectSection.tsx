import { ArrowUpRight, Diamond, Plus, CircleDot, Menu } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const colorSwatches = ["#2B4EFF", "#DBEAFE", "#DE4D34", "#FCE4E0", "#12151C", "#3D4557", "#8A93A6", "#D9DDE8"];

const stats = [
  { label: "Components", value: "1,600+" },
  { label: "Token categories", value: "5" },
];

export function SideProjectSection() {
  return (
    <section id="side-project" className="bg-surface pb-section">
      <div className="max-w-page mx-auto px-6 md:px-12">
        <SectionHeading title="Natuna Digilab" meta="Token-first, unbranded design system" />

        {/* Text only: the numbers and the token families carry the section. */}
        <div className="rounded-lg bg-tint-blue p-2.5 ring-1 ring-line">
          <div className="grid gap-10 rounded-[calc(var(--radius-lg)-10px)] bg-surface p-7 md:p-12 lg:grid-cols-12 lg:gap-16">
            <div className="flex flex-col lg:col-span-6">
              <p className="max-w-[30ch] text-2xl md:text-3xl font-semibold leading-snug tracking-[-0.02em] text-ink [text-wrap:balance]">
                Built from the weak points I kept hitting across four banking teams, and published for
                anyone to use.
              </p>

              <div className="mt-10 lg:mt-auto lg:pt-12">
                <a
                  href="https://www.figma.com/community/file/1660946308636540525"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 min-h-14 pl-7 pr-2 rounded-full text-[15px] font-semibold
                             bg-accent text-on-accent no-underline transition duration-300 ease-out
                             hover:bg-accent-hover active:scale-[0.98]"
                >
                  Open on Figma Community
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <ArrowUpRight size={18} strokeWidth={2} />
                  </span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <dl className="grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-md bg-surface-alt p-6">
                    <dd className="text-5xl font-bold tracking-[-0.04em] text-ink tabular-nums">{stat.value}</dd>
                    <dt className="mt-2 text-sm text-ink-3">{stat.label}</dt>
                  </div>
                ))}
              </dl>

              <div className="mt-8 grid grid-cols-3 gap-x-4 gap-y-6 sm:grid-cols-5">
                <TokenGroup title="Color">
                  <div className="grid grid-cols-4 gap-1 w-fit">
                    {colorSwatches.map((c) => (
                      <span key={c} className="h-4 w-4 rounded-full ring-1 ring-line" style={{ backgroundColor: c }} />
                    ))}
                  </div>
                </TokenGroup>

                <TokenGroup title="Type">
                  <div className="flex items-baseline gap-1 text-ink">
                    <span className="text-2xl font-bold leading-none">Aa</span>
                    <span className="text-base font-medium text-ink-2">Aa</span>
                    <span className="text-xs text-ink-3">Aa</span>
                  </div>
                </TokenGroup>

                <TokenGroup title="Effect">
                  <div className="flex items-end gap-1.5">
                    <span className="h-4 w-4 rounded bg-surface" style={{ boxShadow: "0 1px 2px rgba(18,21,28,0.18)" }} />
                    <span className="h-5 w-5 rounded bg-surface" style={{ boxShadow: "0 3px 6px rgba(18,21,28,0.2)" }} />
                    <span className="h-6 w-6 rounded bg-surface" style={{ boxShadow: "0 6px 14px rgba(18,21,28,0.24)" }} />
                  </div>
                </TokenGroup>

                <TokenGroup title="Spacing">
                  <div className="flex items-end gap-1">
                    {[6, 10, 14, 18, 22].map((h) => (
                      <span key={h} className="w-1 rounded-full bg-ink-3" style={{ height: `${h}px` }} />
                    ))}
                  </div>
                </TokenGroup>

                <TokenGroup title="Icons">
                  <div className="flex gap-1.5 text-ink-2">
                    <Diamond size={16} strokeWidth={1.75} />
                    <Plus size={16} strokeWidth={1.75} />
                    <CircleDot size={16} strokeWidth={1.75} />
                    <Menu size={16} strokeWidth={1.75} />
                  </div>
                </TokenGroup>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TokenGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="mb-2.5 text-sm font-semibold text-ink">{title}</h3>
      {children}
    </div>
  );
}
