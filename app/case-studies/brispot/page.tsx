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
  DesktopFrame,
  BeforeAfter,
  ScreenFlow,
  FigureStack,
  StatGrid,
  Reflection,
  NextCase,
  type ProcessStep,
} from "@/components/case-study/Kit";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "BRISPOT: Internal Lending Platform · Rahadian Maulana",
  description:
    "Cutting Briguna loan approval from ~3 weeks to 3-5 days by redesigning the hand-offs between Initiator, Approver, and Credit Admin Officer at Bank Rakyat Indonesia.",
  path: "/case-studies/brispot",
});

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

const PROCESS: ProcessStep[] = [
  {
    phase: "Scope",
    title: "A full redesign from day one, not a patch",
    body: "The brief from day one: rebuild the old, cluttered BRISPOT interface into something fast enough to speed up how Briguna applications moved. No scope pivot, the direction stayed the same from kickoff to ship.",
    output: "A brief for a rebuild, not a reskin",
  },
  {
    phase: "Map",
    title: "Mapping judgment vs. administration",
    body: "Mapped the full workflow across all three roles plus the two automated systems feeding into it (ARCI, Early Warning System), separating hand-offs that were purely administrative from ones that needed a human decision. Every screen was designed around that split.",
    output: "A role-by-role map of every hand-off",
    href: "#problem",
  },
  {
    phase: "Size",
    title: "Grounded in real numbers from the people who'd know",
    body: "Kept asking the product owner and business analysts one question: how many applications move through this every day? The answer, 1,000 to 3,000 per branch, kept the redesign honest. Not a workflow to redesign on instinct alone.",
    output: "A volume target: 1,000 to 3,000 applications a day per branch",
  },
  {
    phase: "Ship",
    title: "Shipping through a live infrastructure migration",
    body: "This ran on infrastructure mid-migration: Checker & Signer were moving from legacy to React, access was moving onto SSO. Worked closely with engineering so design decisions never conflicted with what was actually shippable.",
    output: "Analisa Data Kredit, rebuilt as nine tabs in the order the work is done",
    href: "#solution",
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
  alt: "Redesigned Verifikasi Biaya-biaya tab on BRISPOT web: the same fees grouped into read-only cards the Credit Admin Officer confirms instead of re-entering",
  width: 265,
  height: 497,
};

const OLD_TAB = { width: 718 };
const oldTab = (file: string, height: number, alt: string) => ({
  src: `/case-studies/brispot/screens/${file}.png`,
  alt,
  height,
  ...OLD_TAB,
});

/** Three tabs of the old mobile Analisa Kredit, at full length: the length is the finding. */
const OLD_MOBILE = [
  {
    image: oldTab("old-data-kredit", 2559, "Old Analisa Kredit, Data Kredit tab: loan data, the active loan portfolio, and a column of credit fields to fill in"),
    label: "Data Kredit",
    note: "Loan, portfolio and credit fields, all typed in.",
  },
  {
    image: oldTab("old-data-prescoring", 3539, "Old Analisa Kredit, Data Prescoring tab: pension date, income, plafond, rates and exposure fields, then a declaration and an analysis note"),
    label: "Data Prescoring",
    note: "The longest tab: sixteen fields, a declaration, a free-text analysis.",
  },
  {
    image: oldTab("old-asuransi", 2432, "Old Analisa Kredit, Asuransi tab: life and credit insurance, each with its own Cek Premi button, then the digital-sign contract details"),
    label: "Asuransi",
    note: "Two insurance checks and the contract, before Selanjutnya.",
  },
];

const cao = (file: string, width: number, height: number, alt: string) => ({
  src: `/case-studies/brispot/screens/${file}.png`,
  alt,
  width,
  height,
});

const CAO_PANELS = [
  {
    image: cao("cao-prescoring", 2074, 1048, "Data Prescoring on desktop: twenty values from pension date to credit due date, laid out in three columns"),
    caption: "Data Prescoring on the Credit Admin Officer's desktop: twenty values to read before a decision.",
  },
  {
    image: cao("cao-portfolio", 2074, 850, "Portofolio Pinjaman Aktif: a table of active Briguna loans with account number, product, outstanding, realisation date and a note on which ones the RM chose to settle"),
    caption: "The applicant's active loans, with the RM's note on which ones get settled by the new loan.",
  },
  {
    image: cao("cao-agunan", 2074, 846, "Analisa Agunan Tambahan: collateral type, certificate number, owner, building type, location and the NJOP check"),
    caption: "Additional collateral: the certificate, the owner, the location and the tax-value check.",
  },
];

/** The nine tabs the Credit Admin Officer's analysis was split into, read off the redesign board. */
const CAO_TABS = [
  "Informasi Rekening",
  "Detail Data Pribadi",
  "Pengajuan & Prescreening",
  "Analisa Kredit",
  "Verifikasi Biaya-biaya",
  "Dokumen Kredit",
  "Analisa & Catatan",
  "Dokumen Akad",
  "Data Pencairan",
];

function TabMap() {
  return (
    <figure>
      <div className="rounded-lg bg-tint-blue p-5 md:p-10">
        <ol className="grid gap-2 sm:grid-cols-3">
          {CAO_TABS.map((tab, i) => (
            <li
              key={tab}
              className={`flex items-center gap-3 rounded-md px-4 py-3.5 text-[15px] font-semibold ${
                tab === "Verifikasi Biaya-biaya" ? "bg-accent text-on-accent" : "bg-surface text-ink ring-1 ring-line"
              }`}
            >
              <span
                className={`flex h-6 min-w-6 items-center justify-center rounded-full px-1.5 text-xs font-bold tabular-nums ${
                  tab === "Verifikasi Biaya-biaya" ? "bg-white/20" : "bg-surface-alt text-ink-2"
                }`}
              >
                {i + 1}
              </span>
              {tab}
            </li>
          ))}
        </ol>
      </div>
      <figcaption className="mt-4 max-w-[70ch] px-1 text-sm leading-relaxed text-ink-3">
        Analisa Data Kredit, the Credit Admin Officer&apos;s analysis, split into nine tabs in the order the
        work is done. Verifikasi Biaya-biaya, highlighted, is the screen in the before and after above.
      </figcaption>
    </figure>
  );
}

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

      <div className="absolute right-[6%] top-24 w-[36%] max-w-[265px] rotate-1 sm:w-[30%] md:right-[12%] md:top-24 md:w-[24%]">
        <DesktopFrame image={AFTER} priority sizes="265px" />
      </div>
    </div>
  );
}

export default function BrispotCaseStudy() {
  return (
    <main>
      <Navbar />

      <CaseHero
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
        chapters={["Context", "The problem", "Process", "The solution", "Outcome"]}
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
        <div className="mt-10">
          <ScreenFlow
            label="Old BRISPOT Analisa Kredit tabs on mobile"
            screens={OLD_MOBILE}
            minWidth={200}
            maxWidth={250}
            caption="Three of the old mobile Analisa Kredit tabs, at their real length. Open any of them full size and scroll."
          />
        </div>
        <div className="mt-10">
          <FigureStack items={CAO_PANELS} />
        </div>
        <div className="mt-10">
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
            beforeCaption="Biaya-biaya on the old desktop flow. Every fee sat open and editable, stacked into one long scroll the Credit Admin Officer had to fill in by hand."
            afterCaption="Verifikasi Biaya-biaya in the redesign, on BRISPOT web. Same fees, grouped into cards to confirm instead of re-enter, one tab in a set of nine."
          />
        </div>

        <div className="mt-10">
          <TabMap />
        </div>

        <div className="mt-10">
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
