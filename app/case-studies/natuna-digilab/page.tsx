import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionLabel } from "@/components/ExperienceSection";

export const metadata = {
  title: "Building an Unbranded Design System From the Cracks Four Banks Left Behind · Natuna Digilab · Rahadian Maulana",
  description:
    "A token-first, unbranded design system built from the recurring weak points found across four banking teams. 1,600+ components, five token categories, v1.0 and still building.",
};

const QUICK_FACTS = [
  { label: "Role", value: "Creator & Maintainer" },
  { label: "Status", value: "v1.0 (building)" },
  { label: "Scale", value: "1,600+ components" },
  { label: "Distribution", value: "Figma Community" },
  { label: "Started", value: "2023, right after BSI" },
];

const PROBLEMS = [
  {
    label: "As a designer moving between companies",
    body: "Every new design system meant relearning someone else's conventions, disciplined or not. I had no portable foundation of my own to start from.",
  },
  {
    label: "As someone handing off to engineering",
    body: "Developers kept asking the same specific questions: “why is this hex different here,” “why does this stroke width change for no reason.” The things supposed to be consistent by definition, weren't.",
  },
  {
    label: "For the wider design community",
    body: "Most design systems on Figma Community are heavily branded (colors, logos, identity baked in), so people have to “un-brand” them before they're useful as a starting point.",
  },
];

const PROCESS = [
  {
    title: "Token-first, not component-first",
    body: "Built from five token categories before any component existed: Color (--color-*), Typography (--text-*), Effect (--shadow-*), Number (--spacing-*), and Icons (on Phosphor as a neutral base). Components just consume these tokens: rebrand the foundation, and only the token values change, not every component.",
  },
  {
    title: "Unbranded by design, not by default",
    body: "A deliberate choice, not a limitation. Neutral on purpose, so it works as a starting point for anyone instead of one brand identity. Most public design systems do the opposite: double as a showcase for their creator's brand.",
  },
  {
    title: "Dev Mode annotations & clean token exports",
    body: "Both prove the foundation isn't just built to look good in Figma: there's real attention to how a developer consumes it at handoff, same discipline as the rest of the portfolio.",
  },
  {
    title: "Trial and error, before it was a system",
    body: "The earliest version was trial and error: color usage that didn't match any real standard was a recurring issue across teams. There was a pull to just copy proven systems (Wise, Gojek's Asphalt/Aloha), but Natuna stayed anchored to its own principle: unbranded, ours. Every component went through repeated iteration before being called “done.”",
  },
];

const COMPONENTS = [
  {
    name: "Button",
    detail:
      "Full property set: Shape, Type, State, Size (sm–2xl), swappable icons, editable label. Dozens of variant combinations, all from one component definition instead of duplicated one-offs.",
  },
  {
    name: "Input Field",
    detail:
      "Matches Button in depth: Type, optional attached button, toggleable label/description/helper/character-count, nested instances not flattened layers. Proves the token-first claim: this configurable, and only consistent because every state pulls from the same tokens.",
  },
];

export default function NatunaDigilabCaseStudy() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 md:px-12" style={{ backgroundColor: "#EDEFF5" }}>
        <div className="max-w-4xl mx-auto">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-xs tracking-wider uppercase mb-8"
            style={{ fontFamily: "'Urbanist', sans-serif", color: "#2B4EFF", textDecoration: "none" }}
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M8 2L2 8M2 8H7M2 8V3" stroke="#2B4EFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to Case Studies
          </Link>

          <span
            className="block text-xs tracking-widest uppercase mb-3"
            style={{ fontFamily: "'Urbanist', sans-serif", color: "#2B4EFF", letterSpacing: "0.15em" }}
          >
            // Design System · Personal Project
          </span>
          <h1
            className="text-4xl md:text-5xl mb-6"
            style={{ fontFamily: "'Urbanist', sans-serif", fontWeight: 700, color: "#12151C", letterSpacing: "-0.02em" }}
          >
            Building an Unbranded Design System From the Cracks Four Banks Left Behind.
          </h1>
          <p
            className="text-lg md:text-xl max-w-2xl leading-relaxed mb-10"
            style={{ fontFamily: "'Inter', sans-serif", color: "#3D4557" }}
          >
            Every bank I worked with had its own design system, and every time, I started from zero.
            Natuna Digilab fixes that: a foundation that doesn&apos;t belong to any one brand, so it
            moves with me, only the tokens changing underneath.
          </p>

          {/* Quick facts */}
          <div
            className="flex flex-wrap gap-x-8 gap-y-4 p-6"
            style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(18, 21, 28, 0.1)" }}
          >
            {QUICK_FACTS.map((fact) => (
              <div key={fact.label}>
                <span
                  className="block text-[10px] tracking-widest uppercase mb-1"
                  style={{ fontFamily: "'Urbanist', sans-serif", color: "#6B7280", letterSpacing: "0.1em" }}
                >
                  {fact.label}
                </span>
                <span
                  className="text-sm"
                  style={{ fontFamily: "'Urbanist', sans-serif", fontWeight: 600, color: "#12151C" }}
                >
                  {fact.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Context */}
        <section className="py-16 px-6 md:px-12" style={{ backgroundColor: "#FFFFFF" }}>
          <div className="max-w-4xl mx-auto">
            <SectionLabel label="// Context" />
            <p
              className="mt-6 text-base md:text-lg leading-relaxed max-w-3xl"
              style={{ fontFamily: "'Inter', sans-serif", color: "#3D4557" }}
            >
              Right after leaving BSI in 2023, I looked back at every team I&apos;d worked with and found
              the same weak point: the design system. Not the visual polish: the discipline behind it,
              the thing meant to hold a product together, kept breaking down in practice. So I built
              Natuna Digilab as my own initiative: a foundation I could trust instead of rebuilding one
              from scratch every time.
            </p>

            <div className="mt-10 max-w-xs">
              <Image
                src="/case-studies/natuna-digilab/natuna-digilab-logo.png"
                alt="Natuna Digilab logo"
                width={2911}
                height={1392}
                className="w-full h-auto"
                sizes="320px"
              />
            </div>
          </div>
        </section>

      {/* Problem */}
        <section className="py-16 px-6 md:px-12" style={{ backgroundColor: "#EDEFF5" }}>
          <div className="max-w-4xl mx-auto">
            <SectionLabel label="// The Problem" />
            <div className="mt-8 grid md:grid-cols-3 gap-4">
              {PROBLEMS.map((p) => (
                <div key={p.label} className="p-6" style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(18, 21, 28, 0.1)" }}>
                  <p
                    className="text-xs tracking-wider uppercase mb-3"
                    style={{ fontFamily: "'Urbanist', sans-serif", color: "#FF4B33", letterSpacing: "0.06em" }}
                  >
                    {p.label}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ fontFamily: "'Inter', sans-serif", color: "#3D4557" }}>
                    {p.body}
                  </p>
                </div>
              ))}
            </div>

            {/* Visual proof: the same "Button" component across five banking design systems, none consistent with each other */}
            <div className="mt-6 p-3" style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(18, 21, 28, 0.1)" }}>
              <Image
                src="/case-studies/natuna-digilab/button-inconsistency-across-banks.png"
                alt="The same Button component built independently across five banking design systems (BRISPOT, BRIMKS, BTN Syariah, BTN, and BSI), each with different shapes, colors, and conventions"
                width={4574}
                height={3650}
                className="w-full h-auto"
                sizes="(min-width: 768px) 896px, 100vw"
              />
              <p className="pt-3 px-1 text-xs" style={{ fontFamily: "'Urbanist', sans-serif", color: "#6B7280" }}>
                The same “Button” rebuilt from scratch across five banking systems: BRISPOT, BRIMKS, BTN Syariah, BTN, and BSI. No shared shape, color logic, or naming. That is the exact drift Natuna Digilab was built to stop.
              </p>
            </div>
          </div>
        </section>

      {/* Process & Architecture */}
        <section className="py-16 px-6 md:px-12" style={{ backgroundColor: "#FFFFFF" }}>
          <div className="max-w-4xl mx-auto">
            <SectionLabel label="// Process & Architecture Decisions" />
            <div className="mt-8 space-y-8">
              {PROCESS.map((item, i) => (
                <div key={item.title} className="flex gap-5">
                  <span
                    className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-xs"
                    style={{
                      fontFamily: "'Urbanist', sans-serif",
                      fontWeight: 700,
                      color: "#2B4EFF",
                      border: "1.5px solid rgba(43, 78, 255, 0.3)",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3
                      className="text-lg mb-2"
                      style={{ fontFamily: "'Urbanist', sans-serif", fontWeight: 700, color: "#12151C" }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed max-w-2xl" style={{ fontFamily: "'Inter', sans-serif", color: "#3D4557" }}>
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      {/* The Solution: token grid, echoing the homepage foundation card */}
        <section className="py-16 px-6 md:px-12" style={{ backgroundColor: "#EDEFF5" }}>
          <div className="max-w-4xl mx-auto">
            <SectionLabel label="// The Solution" />
            <p className="mt-6 text-base leading-relaxed max-w-3xl mb-8" style={{ fontFamily: "'Inter', sans-serif", color: "#3D4557" }}>
              Natuna Digilab is at v1.0 and still &ldquo;building,&rdquo; an honest status, not a weakness.
              1,600+ components, full variable support across five token categories, distributed on
              Figma Community so others can use it too.
            </p>

            <p
              className="text-xs tracking-widest uppercase mb-4"
              style={{ fontFamily: "'Urbanist', sans-serif", color: "#2B4EFF", letterSpacing: "0.1em" }}
            >
              Two components that prove the depth
            </p>
            <div className="grid md:grid-cols-2 gap-5">
              {COMPONENTS.map((c) => (
                <div key={c.name} className="p-6" style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(18, 21, 28, 0.1)" }}>
                  <h3 className="text-lg mb-2" style={{ fontFamily: "'Urbanist', sans-serif", fontWeight: 700, color: "#12151C" }}>
                    {c.name}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ fontFamily: "'Inter', sans-serif", color: "#3D4557" }}>
                    {c.detail}
                  </p>
                </div>
              ))}
            </div>

            {/* Live component showcase: Button & Input Field variant grids, straight from Figma */}
            <div className="mt-6 p-3" style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(18, 21, 28, 0.1)" }}>
              <Image
                src="/case-studies/natuna-digilab/button-input-field-showcase.png"
                alt="Natuna Digilab Button and Input Field components: variant grid and full property panels from Figma"
                width={2315}
                height={872}
                className="w-full h-auto"
                sizes="(min-width: 768px) 896px, 100vw"
              />
            </div>

            <p className="mt-6 text-sm leading-relaxed max-w-2xl" style={{ fontFamily: "'Inter', sans-serif", color: "#6B7280" }}>
              Both were built from a wide survey of design systems across the banks I&apos;ve worked in,
              pulling together the variant patterns that kept recurring, not copying any one system
              wholesale.
            </p>
          </div>
        </section>

      {/* Outcome */}
        <section className="py-16 px-6 md:px-12" style={{ backgroundColor: "#FFFFFF" }}>
          <div className="max-w-4xl mx-auto">
            <SectionLabel label="// Outcome" />
            <div className="mt-8 grid sm:grid-cols-2 gap-6 mb-8">
              <div>
                <span
                  className="block text-4xl md:text-5xl mb-1"
                  style={{ fontFamily: "'Urbanist', sans-serif", fontWeight: 700, color: "#12151C" }}
                >
                  5
                </span>
                <span className="text-sm" style={{ fontFamily: "'Inter', sans-serif", color: "#6B7280" }}>
                  users on Figma Community, organic and with no promotion yet
                </span>
              </div>
              <div>
                <span
                  className="block text-4xl md:text-5xl mb-1"
                  style={{ fontFamily: "'Urbanist', sans-serif", fontWeight: 700, color: "#12151C" }}
                >
                  ↔
                </span>
                <span className="text-sm" style={{ fontFamily: "'Inter', sans-serif", color: "#6B7280" }}>
                  two-way relationship with BRISPOT&apos;s design system, ideas flow both directions
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-2xl mb-8" style={{ fontFamily: "'Inter', sans-serif", color: "#3D4557" }}>
              Ideas from Natuna Digilab shaped BRISPOT&apos;s token architecture, and patterns that
              proved out there (validated by a real team under real constraints) folded back into
              Natuna Digilab. No big external number yet, but the value holds: it speeds up how I work
              on every new project. No more starting from zero each time I change companies.
            </p>

            {/* Live Figma Community listing */}
            <a
              href="https://www.figma.com/community/file/1660946308636540525"
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-3 transition-colors duration-150"
              style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(18, 21, 28, 0.1)" }}
            >
              <div className="relative">
                <Image
                  src="/case-studies/natuna-digilab/figma-community-listing.png"
                  alt="Natuna Digilab: Foundation Design System listing on Figma Community, showing 5 users and the Open in Figma button"
                  width={2146}
                  height={1654}
                  className="w-full h-auto"
                  sizes="(min-width: 768px) 896px, 100vw"
                />
              </div>
              <div className="flex items-center justify-between pt-3 px-1">
                <span className="text-xs" style={{ fontFamily: "'Urbanist', sans-serif", color: "#6B7280" }}>
                  Live listing on Figma Community
                </span>
                <span
                  className="text-xs tracking-wide uppercase transition-transform duration-150 group-hover:translate-x-1"
                  style={{ fontFamily: "'Urbanist', sans-serif", color: "#2B4EFF", letterSpacing: "0.06em" }}
                >
                  Open in Figma ↗
                </span>
              </div>
            </a>
          </div>
        </section>

      {/* Reflection */}
        <section className="py-20 px-6 md:px-12" style={{ backgroundColor: "#12151C" }}>
          <div className="max-w-3xl mx-auto text-center">
            <span
              className="block text-xs tracking-widest uppercase mb-6"
              style={{ fontFamily: "'Urbanist', sans-serif", color: "#2B4EFF", letterSpacing: "0.15em" }}
            >
              // Reflection
            </span>
            <p
              className="text-xl md:text-2xl leading-relaxed"
              style={{ fontFamily: "'Urbanist', sans-serif", fontWeight: 500, color: "#FFFFFF" }}
            >
              If the other case studies show the <em>result</em> of a solid design system: a workflow
              that stays consistent, hand-offs that don&apos;t drift, Natuna Digilab shows{" "}
              <em>how</em> I build that foundation in the first place. From zero, not just inheriting
              whatever a company hands me.
            </p>
          </div>
        </section>

      {/* CTA */}
      <section className="py-16 px-6 md:px-12" style={{ backgroundColor: "#EDEFF5" }}>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6 p-8" style={{ border: "1.5px dashed rgba(43, 78, 255, 0.3)", backgroundColor: "#F5F6FA" }}>
          <div>
            <h3 className="text-xl mb-1" style={{ fontFamily: "'Urbanist', sans-serif", fontWeight: 700, color: "#12151C" }}>
              See the tokens for yourself.
            </h3>
            <p className="text-sm" style={{ fontFamily: "'Inter', sans-serif", color: "#6B7280" }}>
              Open the live file on Figma Community: full variables, no screenshots on faith.
            </p>
          </div>
          <a
            href="https://www.figma.com/community/file/1660946308636540525"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 flex items-center gap-2 px-6 py-3 transition-colors duration-150 hover:opacity-90"
            style={{
              fontFamily: "'Urbanist', sans-serif",
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "0.04em",
              color: "#FFFFFF",
              backgroundColor: "#2B4EFF",
              textDecoration: "none",
            }}
          >
            Open in Figma Community ↗
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
