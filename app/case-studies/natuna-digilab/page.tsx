import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  CaseHero,
  CaseSection,
  Lead,
  Body,
  ProblemGrid,
  ProcessSteps,
  DecisionGrid,
  Figure,
  StatGrid,
  Reflection,
  NextCase,
} from "@/components/case-study/Kit";

export const metadata = {
  title: "Building an Unbranded Design System From the Cracks Four Banks Left Behind · Natuna Digilab · Rahadian Maulana",
  description:
    "A token-first, unbranded design system built from the recurring weak points found across four banking teams. 1,600+ components, five token categories, v1.0 and still building.",
};

const FIGMA_URL = "https://www.figma.com/community/file/1660946308636540525";

const QUICK_FACTS = [
  { label: "Role", value: "Creator & Maintainer" },
  { label: "Status", value: "v1.0, still building" },
  { label: "Scale", value: "1,600+ components" },
  { label: "Distribution", value: "Figma Community" },
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
    body: "Built from five token categories before any component existed: Color (--color-*), Typography (--text-*), Effect (--shadow-*), Number (--spacing-*), and Icons (on Phosphor as a neutral base). Rebrand the foundation, and only the token values change, not every component.",
  },
  {
    title: "Unbranded by design, not by default",
    body: "A deliberate choice, not a limitation. Neutral on purpose, so it works as a starting point for anyone instead of one brand identity. Most public design systems do the opposite: double as a showcase for their creator's brand.",
  },
  {
    title: "Dev Mode annotations & clean token exports",
    body: "Both prove the foundation isn't just built to look good in Figma: there's real attention to how a developer consumes it at handoff.",
  },
  {
    title: "Trial and error, before it was a system",
    body: "The earliest version was trial and error. There was a pull to copy proven systems (Wise, Gojek's Asphalt/Aloha), but Natuna stayed anchored to its own principle: unbranded, ours. Every component went through repeated iteration before being called “done.”",
  },
];

const COMPONENTS = [
  {
    title: "Button",
    body: "Full property set: Shape, Type, State, Size (sm to 2xl), swappable icons, editable label. Dozens of variant combinations, all from one component definition instead of duplicated one-offs.",
  },
  {
    title: "Input Field",
    body: "Type, optional attached button, toggleable label, description, helper and character count, nested instances instead of flattened layers. Only this configurable because every state pulls from the same tokens.",
  },
];

const SHOWCASE = {
  src: "/case-studies/natuna-digilab/button-input-field-showcase.png",
  alt: "Natuna Digilab Button and Input Field components: variant grid and full property panels from Figma",
  width: 2315,
  height: 872,
};

export default function NatunaDigilabCaseStudy() {
  return (
    <main>
      <Navbar />

      <CaseHero
        eyebrow="Design System · Personal Project"
        title="An unbranded design system, built from the cracks four banks left behind."
        intro={
          <>
            Every bank I worked with had its own design system, and every time, I started from zero.
            Natuna Digilab fixes that: a foundation that doesn&apos;t belong to any one brand, so it moves
            with me, only the tokens changing underneath.
          </>
        }
        facts={QUICK_FACTS}
        actions={
          <a
            href={FIGMA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 min-h-14 pl-7 pr-2 rounded-full text-[15px] font-semibold
                       bg-accent text-on-accent no-underline transition duration-300 ease-out hover:bg-accent-hover active:scale-[0.98]"
          >
            Open on Figma Community
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <ArrowUpRight size={18} strokeWidth={2} />
            </span>
          </a>
        }
        cover={<Figure image={SHOWCASE} priority />}
      />

      <CaseSection label="Context" title="The same weak point, at every team.">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-8">
            <Lead>
              Right after leaving BSI in 2023, I looked back at every team I&apos;d worked with and found
              the same weak point: the design system. Not the visual polish: the discipline behind it,
              the thing meant to hold a product together, kept breaking down in practice. So I built
              Natuna Digilab as my own initiative: a foundation I could trust instead of rebuilding one
              from scratch every time.
            </Lead>
          </div>
          <div className="lg:col-span-4">
            <div className="rounded-lg bg-tint-blue p-8">
              <Image
                src="/case-studies/natuna-digilab/natuna-digilab-logo.png"
                alt="Natuna Digilab logo"
                width={2911}
                height={1392}
                sizes="320px"
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </CaseSection>

      <CaseSection label="The problem" title="One button, rebuilt five different ways." tone="alt">
        <ProblemGrid items={PROBLEMS} />
        <div className="mt-6">
          <Figure
            image={{
              src: "/case-studies/natuna-digilab/button-inconsistency-across-banks.png",
              alt: "The same Button component built independently across five banking design systems (BRISPOT, BRIMKS, BTN Syariah, BTN, and BSI), each with different shapes, colors, and conventions",
              width: 4574,
              height: 3650,
            }}
            caption="The same “Button” rebuilt from scratch across BRISPOT, BRIMKS, BTN Syariah, BTN, and BSI. No shared shape, color logic, or naming. That drift is what Natuna Digilab was built to stop."
          />
        </div>
      </CaseSection>

      <CaseSection label="Process" title="Architecture decisions, in order.">
        <ProcessSteps items={PROCESS} />
      </CaseSection>

      <CaseSection label="The solution" title="Two components that prove the depth." tone="alt">
        <Body>
          Natuna Digilab is at v1.0 and still building. 1,600+ components, full variable support across
          five token categories, distributed on Figma Community so others can use it too.
        </Body>
        <div className="mt-10">
          <DecisionGrid items={COMPONENTS} />
        </div>
        <div className="mt-6">
          <Figure
            image={SHOWCASE}
            caption="Button and Input Field variant grids with their full property panels, straight from Figma."
          />
        </div>
      </CaseSection>

      <CaseSection label="Outcome" title="Ideas that flow both ways.">
        <StatGrid
          stats={[
            { value: "5 users", label: "on Figma Community, organic and with no promotion yet" },
            { value: "Two-way", label: "relationship with BRISPOT's design system: ideas flow in both directions" },
          ]}
        />
        <div className="mt-8">
          <Body>
            Ideas from Natuna Digilab shaped BRISPOT&apos;s token architecture, and patterns that proved
            out there folded back into Natuna Digilab. No big external number yet, but it speeds up how I
            work on every new project.
          </Body>
        </div>
        <div className="mt-10">
          <a href={FIGMA_URL} target="_blank" rel="noopener noreferrer" className="group block no-underline">
            <div className="rounded-lg bg-tint-blue p-3 sm:p-6 md:p-10">
              <div className="overflow-hidden rounded-md bg-surface shadow-lift ring-1 ring-line transition-transform duration-500 ease-out group-hover:-translate-y-1.5">
                <Image
                  src="/case-studies/natuna-digilab/figma-community-listing.png"
                  alt="Natuna Digilab: Foundation Design System listing on Figma Community, showing 5 users and the Open in Figma button"
                  width={2146}
                  height={1654}
                  sizes="(max-width: 768px) 100vw, 1100px"
                  className="h-auto w-full"
                />
              </div>
            </div>
            <span className="mt-4 inline-flex items-center gap-1.5 px-1 text-sm font-semibold text-accent">
              Live listing on Figma Community
              <ArrowUpRight size={16} strokeWidth={2} className="transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </a>
        </div>
      </CaseSection>

      <Reflection>
        If the other case studies show the result of a solid design system, Natuna Digilab shows how I
        build that foundation in the first place. From zero, not just inheriting whatever a company hands
        me.
      </Reflection>

      <NextCase currentId="natuna-digilab" />
      <Footer />
    </main>
  );
}
