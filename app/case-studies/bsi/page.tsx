import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  CaseHero,
  CaseSection,
  Lead,
  Body,
  ProblemGrid,
  ProcessSteps,
  Figure,
  StatGrid,
  Reflection,
  NextCase,
} from "@/components/case-study/Kit";

export const metadata = {
  title: "BSI: PIN Confirmation Security · Rahadian Maulana",
  description:
    "Catching a tap-feedback pattern that leaked a customer's PIN through color alone, validating it with internal BSI users, and redesigning the confirmation screen so the number pad gives away nothing.",
};

const QUICK_FACTS = [
  { label: "Role", value: "Product Designer" },
  { label: "Company", value: "Bank Syariah Indonesia" },
  { label: "Platform", value: "BSI Mobile Banking App" },
  { label: "Timeline", value: "Aug 2022 - Jul 2023" },
];

const PROBLEMS = [
  {
    label: "The pattern",
    body: "BSI's number pad used the app's standard tap-feedback: press a digit, it fills solid teal; release, it goes back to white. Consistent with every other button in the app, which is exactly why nobody had questioned it on this screen.",
  },
  {
    label: "The risk",
    body: "On a PIN confirmation screen, that color change maps one-to-one to the digit being entered. Anyone glancing at the phone, over a shoulder or on a photo taken after the fact, could read the PIN off the flashing buttons without ever reading a number.",
  },
];

const PROCESS = [
  {
    title: "A pattern that looked right everywhere else",
    body: "Noticed it during routine design QA on the confirmation flow: the same tap-feedback used app-wide, applied without a second thought to a screen where it wasn't just cosmetic.",
  },
  {
    title: "Testing the concern before pitching a fix",
    body: "Ran A/B testing on the PIN screen with internal BSI users before proposing anything. The shoulder-surfing worry came up unprompted, in their own words: public places, PIN entry, someone standing close.",
  },
  {
    title: "Bringing data to my lead, not just an instinct",
    body: "Took the test results to my lead along with a proposal: strip color feedback off the number pad entirely, and move all visible state to the dot row above it.",
  },
];

const BEFORE = {
  src: "/case-studies/bsi/pin-color-change-mockup.png",
  alt: "PIN Confirmation comparison: the resting state next to the digit '1' turning solid teal the instant it's pressed",
  width: 624,
  height: 490,
};

const AFTER = {
  src: "/case-studies/bsi/pin-solution-progression.png",
  alt: "The shipped PIN Confirmation screen at three points during entry: the dots above the keypad filling in, while the number pad itself never changes color",
  width: 2442,
  height: 1400,
};

function Cover() {
  return (
    <div className="relative h-[440px] overflow-hidden rounded-lg bg-tint-blue sm:h-[520px] md:h-[600px]">
      <span className="absolute left-5 top-5 z-[2] rounded-full bg-status-warn-bg px-3.5 py-1.5 text-sm font-semibold text-status-warn md:left-8 md:top-8">
        Before: the PIN leaks through color
      </span>

      <div className="absolute left-[5%] top-20 w-[70%] -rotate-2 overflow-hidden rounded-md bg-surface shadow-lift ring-1 ring-line md:left-[7%] md:top-24 md:w-[40%]">
        <Image src={BEFORE.src} alt={BEFORE.alt} width={BEFORE.width} height={BEFORE.height} priority sizes="(max-width: 768px) 70vw, 470px" className="h-auto w-full" />
      </div>

      <span
        aria-hidden="true"
        className="absolute left-[47%] top-1/2 z-[2] hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-surface text-accent shadow-lift md:flex"
      >
        <ArrowRight size={24} strokeWidth={2} />
      </span>

      <div className="absolute -right-[10%] bottom-6 w-[78%] rotate-1 overflow-hidden rounded-md bg-surface shadow-lift ring-1 ring-line md:bottom-auto md:right-[4%] md:top-32 md:w-[44%]">
        <Image src={AFTER.src} alt={AFTER.alt} width={AFTER.width} height={AFTER.height} priority sizes="(max-width: 768px) 80vw, 520px" className="h-auto w-full" />
      </div>

      <span className="absolute bottom-5 right-5 z-[2] rounded-full bg-accent px-3.5 py-1.5 text-sm font-semibold text-on-accent md:bottom-8 md:right-8">
        After: only the dots move
      </span>
    </div>
  );
}

export default function BsiCaseStudy() {
  return (
    <main>
      <Navbar />

      <CaseHero
        eyebrow="BSI · PIN Confirmation Security"
        title="BSI: PIN Confirmation Security."
        intro={
          <>
            Every digit on BSI&apos;s PIN confirmation screen lit up teal the moment it was pressed:
            standard tap-feedback, used everywhere in the app. On this one screen, it also meant the PIN
            was readable off the colors alone. I proposed removing it entirely.
          </>
        }
        facts={QUICK_FACTS}
        cover={<Cover />}
      />

      <CaseSection label="Context" title="One screen, at the end of every transaction.">
        <Lead>
          I joined BSI right after its three-bank merger, taking over a component library that had
          drifted out of sync with the new brand. Most of the work was systems-level: rebuilding shared
          components, running usability tests on core banking flows. This case study is about one screen
          that came out of that work: PIN Confirmation, the last step of every transaction in the app.
        </Lead>
      </CaseSection>

      <CaseSection label="The problem" title="Feedback that told everyone which digit you pressed." tone="alt">
        <ProblemGrid items={PROBLEMS} />
        <div className="mt-6">
          <Figure
            image={BEFORE}
            canvasClassName="md:px-24 lg:px-48"
            caption="Resting vs. pressed. That teal fill was the entire problem. It told you which number had just been tapped."
          />
        </div>
      </CaseSection>

      <CaseSection label="Process" title="Validated before it was pitched.">
        <ProcessSteps items={PROCESS} />
      </CaseSection>

      <CaseSection label="The solution" title="A keypad that gives nothing away." tone="alt">
        <Body>
          The number pad now stays completely neutral, pressed or not: no fill, no color, nothing that
          changes with which digit was tapped. All the feedback moved to the six dots above it: they fill
          in one at a time as the PIN is entered, and that&apos;s the only thing on screen that changes
          state.
        </Body>
        <div className="mt-10">
          <Figure
            image={AFTER}
            caption="Same screen, mid-entry, from the shipped app. The dots move. The keypad doesn't, by design."
          />
        </div>
      </CaseSection>

      <CaseSection label="Outcome" title="A side-channel closed, with users' own words behind it.">
        <StatGrid
          stats={[
            {
              value: "Teal on press → no color at all",
              label: "the only change made to the number pad, everything else on the screen stayed the same",
            },
            {
              value: "Validated first, shipped second",
              label: "internal BSI users flagged the same shoulder-surfing risk unprompted, before the fix was ever proposed",
            },
          ]}
        />
        <div className="mt-8">
          <Body>
            I don&apos;t have a dashboard number for this one. It&apos;s not the kind of fix that moves a
            chart. What it did was close a side-channel that had no reason to exist on a transaction PIN
            screen, using feedback from the same users it was protecting.
          </Body>
        </div>
      </CaseSection>

      <Reflection>
        The most dangerous feedback is the kind that feels right. That teal flash matched every other
        button in the app, which is exactly why nobody had questioned it. Security work isn&apos;t always
        about adding a warning; sometimes it&apos;s noticing which pattern doesn&apos;t belong on this one
        screen.
      </Reflection>

      <NextCase currentId="bsi" />
      <Footer />
    </main>
  );
}
