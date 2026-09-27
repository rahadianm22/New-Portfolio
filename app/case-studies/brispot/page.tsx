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
  PhoneFrame,
  BeforeAfter,
  StatGrid,
  Reflection,
  NextCase,
} from "@/components/case-study/Kit";

export const metadata = {
  title: "BRISPOT: Internal Lending Platform · Rahadian Maulana",
  description:
    "Cutting Briguna loan approval from ~3 weeks to 3-5 days by redesigning the hand-offs between Initiator, Approver, and Credit Admin Officer at Bank Rakyat Indonesia.",
};

const QUICK_FACTS = [
  { label: "Role", value: "Senior Product Designer" },
  { label: "Company", value: "Bank Rakyat Indonesia" },
  { label: "Platform", value: "BRISPOT" },
  { label: "Timeline", value: "Dec 2025 - early 2026" },
];

const PROBLEMS = [
  {
    label: "Business problem",
    body: "A Briguna application crossed three disconnected hand-offs (Initiator → Approver → Credit Admin Officer) with ARCI and the Early Warning System sitting awkwardly in between. Each hand-off meant re-reading context from scratch, stretching a minutes-long decision into a 3-week wait.",
  },
  {
    label: "User problem",
    body: "User interviews with internal staff surfaced the same complaint every time: the form took too long. Screens like Biaya-biaya, Analisa Agunan Tambahan, and Data Prescoring were packed with fields RMs re-entered every time. That set the real objective: cut the form down, not just restyle it.",
  },
];

const PROCESS = [
  {
    title: "A full redesign from day one, not a patch",
    body: "The brief from day one: rebuild the old, cluttered BRISPOT interface into something fast enough to speed up how Briguna applications moved. No scope pivot, the direction stayed the same from kickoff to ship.",
  },
  {
    title: "Mapping judgment vs. administration",
    body: "Mapped the full workflow across all three roles plus the two automated systems feeding into it (ARCI, Early Warning System), separating hand-offs that were purely administrative from ones that needed a human decision. Every screen was designed around that split.",
  },
  {
    title: "Shipping through a live infrastructure migration",
    body: "This ran on infrastructure mid-migration: Checker & Signer were moving from legacy to React, access was moving onto SSO. Worked closely with engineering so design decisions never conflicted with what was actually shippable.",
  },
  {
    title: "Grounded in real numbers from the people who'd know",
    body: "Kept asking the product owner and business analysts one question: how many applications move through this every day? The answer, 1,000 to 3,000 per branch, kept the redesign honest. Not a workflow to redesign on instinct alone.",
  },
];

const BEFORE = {
  src: "/case-studies/brispot/biaya-biaya-before.png",
  alt: "Old Biaya-biaya screen on desktop: every fee field open and editable at once, stacked into one long scroll with no clear finish line",
  width: 2076,
  height: 2908,
};

const AFTER = {
  src: "/case-studies/brispot/biaya-biaya-after.png",
  alt: "Redesigned Verifikasi Biaya-biaya tab on mobile: the same fees grouped into read-only cards the Credit Admin Officer confirms instead of re-entering",
  width: 265,
  height: 497,
};

/** Hero cover: the same screen before and after, readable at a glance. */
function Cover() {
  return (
    <div className="relative h-[420px] overflow-hidden rounded-lg bg-tint-blue sm:h-[500px] md:h-[600px]">
      <span className="absolute left-5 top-5 z-[2] rounded-full bg-status-warn-bg px-3.5 py-1.5 text-sm font-semibold text-status-warn md:left-8 md:top-8">
        Before
      </span>
      <span className="absolute right-5 top-5 z-[2] rounded-full bg-accent px-3.5 py-1.5 text-sm font-semibold text-on-accent md:right-8 md:top-8">
        After
      </span>

      <div className="absolute left-[6%] top-20 w-[58%] -rotate-2 overflow-hidden rounded-md bg-surface shadow-lift ring-1 ring-line sm:w-[48%] md:left-[10%] md:top-24 md:w-[38%]">
        <Image src={BEFORE.src} alt={BEFORE.alt} width={BEFORE.width} height={BEFORE.height} priority sizes="(max-width: 768px) 60vw, 440px" className="h-auto w-full" />
      </div>

      <span
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 z-[2] hidden h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-surface text-accent shadow-lift md:flex"
      >
        <ArrowRight size={24} strokeWidth={2} />
      </span>

      <div className="absolute right-[6%] top-24 w-[42%] max-w-[280px] sm:w-[34%] md:right-[12%] md:top-20 md:w-[24%]">
        <PhoneFrame image={AFTER} priority />
      </div>
    </div>
  );
}

export default function BrispotCaseStudy() {
  return (
    <main>
      <Navbar />

      <CaseHero
        eyebrow="BRI · Internal Lending Platform"
        title="BRISPOT: Internal Lending Platform."
        intro={
          <>
            A Briguna loan applicant waited around three weeks for an answer, and the credit decision
            itself wasn&apos;t the slow part. The request kept getting handed off between people who each
            had to rediscover the context first. I redesigned BRISPOT&apos;s approval workflow to close
            that gap.
          </>
        }
        facts={QUICK_FACTS}
        cover={<Cover />}
      />

      <CaseSection label="Context" title="An internal tool with a real person waiting on the other end.">
        <Lead>
          BRISPOT is BRI&apos;s national internal lending platform: credit ops use it to move a Briguna
          (personal loan) application from submission to disbursement. Not consumer-facing, but every
          friction point inside it delays a real person waiting on money. This case study covers the
          Briguna approval workflow only; KPR (mortgage) is a separate product.
        </Lead>
      </CaseSection>

      <CaseSection label="The problem" title="Three hand-offs, and context lost at every one." tone="alt">
        <ProblemGrid items={PROBLEMS} />
        <div className="mt-6">
          <Figure
            image={{
              src: "/case-studies/brispot/analisa-kredit-form-flow.png",
              alt: "Old BRISPOT Analisa Kredit flow: Non Finansial, Data Kredit, Data Prescoring, and Asuransi tabs on mobile, plus the Biaya-biaya screen on desktop, each packed with fields to fill in",
              width: 4632,
              height: 3702,
            }}
            caption={
              <>
                The old Analisa Kredit flow: four tabs on mobile (Non Finansial, Data Kredit, Data
                Prescoring, Asuransi), plus the Biaya-biaya screen on desktop. This is what &ldquo;too
                long to fill in&rdquo; looked like, screen after screen.
              </>
            }
          />
        </div>
      </CaseSection>

      <CaseSection label="Process" title="How the redesign was scoped.">
        <ProcessSteps items={PROCESS} />
      </CaseSection>

      <CaseSection label="The solution" title="From a field to fill in, to a fact to confirm." tone="alt">
        <Body>
          Redesigned the workflow so each role saw only what needed their judgment, cutting the
          re-reading-context tax at every hand-off. The same thinking extended into the{" "}
          <strong className="font-semibold text-ink">Whitelist and cross-bank Open Flagging modules</strong>,
          turning a manual eligibility lookup into something the system surfaced automatically. The
          platform later extended into KPR Digital&apos;s notary workflow and an RBAC system for
          national quota allocation: platform context, not the focus here.
        </Body>

        <div className="mt-10">
          <BeforeAfter
            before={BEFORE}
            after={AFTER}
            afterIsPhone
            beforeCaption="Biaya-biaya on the old desktop flow. Every fee sat open and editable, stacked into one long scroll the Credit Admin Officer had to fill in by hand."
            afterCaption="Verifikasi Biaya-biaya in the redesign. Same fees, grouped into cards to confirm instead of re-enter, one tab in a set of nine."
          />
        </div>

        <div className="mt-6">
          <Figure
            image={{
              src: "/case-studies/brispot/redesign-flows-overview.png",
              alt: "The redesigned BRISPOT flows, top to bottom: RM (Relationship Manager submission), Putusan Kredit (credit decision), and Analisa Data Kredit (Credit Admin Officer's analysis, broken into nine focused tabs)",
              width: 2600,
              height: 1902,
            }}
            caption={
              <>
                Top to bottom: <strong className="font-semibold text-ink-2">RM</strong>, the submission
                flow shortened to only what a Relationship Manager needs to enter.{" "}
                <strong className="font-semibold text-ink-2">Putusan Kredit</strong>, the Approver&apos;s
                decision flow. <strong className="font-semibold text-ink-2">Analisa Data Kredit</strong>,
                the Credit Admin Officer&apos;s analysis across nine tabs. Use zoom to read each screen.
              </>
            }
          />
        </div>
      </CaseSection>

      <CaseSection label="Outcome" title="Weeks down to days, at national scale.">
        <StatGrid
          stats={[
            {
              value: "~3 weeks → 3-5 days",
              label: "approval time, still what credit ops uses to process applications at national scale today",
            },
            {
              value: "1,000-3,000",
              label: "Briguna applications processed per day, per branch, the real scale this workflow runs at",
            },
          ]}
        />
        <div className="mt-8">
          <Body>
            That number didn&apos;t come from a dashboard. It came from repeatedly asking the product
            owner and business analysts what actually moved through the system. Approvers and Credit
            Admin Officers also said the workflow felt lighter: less time figuring out what needed
            attention, more time deciding.
          </Body>
        </div>
      </CaseSection>

      <Reflection>
        On a platform this high-stakes, I default to what&apos;s already in the design system rather
        than improvising. When thousands of applications move through it daily, consistency isn&apos;t
        a nice-to-have; it&apos;s what keeps people running it fast.
      </Reflection>

      <NextCase currentId="brispot" />
      <Footer />
    </main>
  );
}
