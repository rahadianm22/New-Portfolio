import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/ExperienceSection";

export const metadata = {
  title: "BRISPOT: Internal Lending Platform · Rahadian Maulana",
  description:
    "Cutting Briguna loan approval from ~3 weeks to 3–5 days by redesigning the hand-offs between Initiator, Approver, and Credit Admin Officer at Bank Rakyat Indonesia.",
};

const QUICK_FACTS = [
  { label: "Role", value: "Senior Product Designer" },
  { label: "Company", value: "Bank Rakyat Indonesia" },
  { label: "Platform", value: "BRISPOT" },
  { label: "Timeline", value: "Dec 2025 – early 2026" },
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

export default function BrispotCaseStudy() {
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
            // BRI · Internal Lending Platform
          </span>
          <h1
            className="text-4xl md:text-6xl mb-6"
            style={{ fontFamily: "'Urbanist', sans-serif", fontWeight: 700, color: "#12151C", letterSpacing: "-0.02em" }}
          >
            BRISPOT: Internal Lending Platform.
          </h1>
          <p
            className="text-lg md:text-xl max-w-2xl leading-relaxed mb-10"
            style={{ fontFamily: "'Inter', sans-serif", color: "#3D4557" }}
          >
            A Briguna loan applicant waited around three weeks for an answer, and the credit decision
            itself wasn&apos;t the slow part. The request kept getting handed off between people who each
            had to rediscover the context first. I redesigned BRISPOT&apos;s approval workflow to close
            that gap.
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
      <Reveal variant="up" duration={800}>
        <section className="py-16 px-6 md:px-12" style={{ backgroundColor: "#FFFFFF" }}>
          <div className="max-w-4xl mx-auto">
            <SectionLabel label="// Context" />
            <p
              className="mt-6 text-base md:text-lg leading-relaxed max-w-3xl"
              style={{ fontFamily: "'Inter', sans-serif", color: "#3D4557" }}
            >
              BRISPOT is BRI&apos;s national internal lending platform: credit ops use it to move a
              Briguna (personal loan) application from submission to disbursement. Not consumer-facing,
              but every friction point inside it delays a real person waiting on money. This case study
              covers the Briguna approval workflow only; KPR (mortgage) is a separate product.
            </p>
          </div>
        </section>
      </Reveal>

      {/* Problem */}
      <Reveal variant="up" duration={800}>
        <section className="py-16 px-6 md:px-12" style={{ backgroundColor: "#EDEFF5" }}>
          <div className="max-w-4xl mx-auto">
            <SectionLabel label="// The Problem" />
            <div className="mt-8 grid md:grid-cols-2 gap-4">
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

            {/* Visual proof: the old Analisa Kredit flow across mobile tabs plus the desktop Biaya-biaya screen */}
            <div className="mt-6 p-3" style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(18, 21, 28, 0.1)" }}>
              <Image
                src="/case-studies/brispot/analisa-kredit-form-flow.png"
                alt="Old BRISPOT Analisa Kredit flow: Non Finansial, Data Kredit, Data Prescoring, and Asuransi tabs on mobile, plus the Biaya-biaya screen on desktop, each packed with fields to fill in"
                width={4632}
                height={3702}
                className="w-full h-auto"
                sizes="(min-width: 768px) 896px, 100vw"
              />
              <p className="pt-3 px-1 text-xs" style={{ fontFamily: "'Urbanist', sans-serif", color: "#6B7280" }}>
                The old Analisa Kredit flow: four tabs on mobile (Non Finansial, Data Kredit, Data Prescoring, Asuransi), plus the Biaya-biaya screen on desktop. This is what &ldquo;too long to fill in&rdquo; looked like, screen after screen.
              </p>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Process */}
      <Reveal variant="up" duration={800}>
        <section className="py-16 px-6 md:px-12" style={{ backgroundColor: "#FFFFFF" }}>
          <div className="max-w-4xl mx-auto">
            <SectionLabel label="// Process" />
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
      </Reveal>

      {/* The Solution */}
      <Reveal variant="up" duration={800}>
        <section className="py-16 px-6 md:px-12" style={{ backgroundColor: "#EDEFF5" }}>
          <div className="max-w-4xl mx-auto">
            <SectionLabel label="// The Solution" />
            <p className="mt-6 text-base leading-relaxed max-w-3xl" style={{ fontFamily: "'Inter', sans-serif", color: "#3D4557" }}>
              Redesigned the workflow so each role saw only what needed their judgment, cutting the
              re-reading-context tax at every hand-off. The same thinking extended into the{" "}
              <strong>Whitelist and cross-bank Open Flagging modules</strong>, turning a manual eligibility
              lookup into something the system surfaced automatically. The interface got a fresh, consistent
              skin over the same logic, replacing the old, cluttered UI staff had grown used to. The
              platform later extended into KPR Digital&apos;s notary workflow and an RBAC system for
              national quota allocation: platform context, not the focus here.
            </p>

            {/* Before / after: one screen, same fee data, two different flows */}
            <p className="mt-10 text-xs tracking-widest uppercase mb-4" style={{ fontFamily: "'Urbanist', sans-serif", color: "#6B7280", letterSpacing: "0.1em" }}>
              One screen, before and after
            </p>
            <div className="grid sm:grid-cols-2 gap-4 items-end">
              <div className="p-4 flex flex-col items-center" style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(18, 21, 28, 0.1)" }}>
                <span
                  className="self-start text-xs tracking-widest uppercase mb-4 px-2 py-1"
                  style={{
                    fontFamily: "'Urbanist', sans-serif",
                    color: "#FF4B33",
                    backgroundColor: "rgba(255, 75, 51, 0.08)",
                    border: "1px solid rgba(255, 75, 51, 0.2)",
                    letterSpacing: "0.08em",
                  }}
                >
                  Before
                </span>
                <Image
                  src="/case-studies/brispot/biaya-biaya-before.png"
                  alt="Old Biaya-biaya screen on desktop: every fee field open and editable at once, stacked into one long scroll with no clear finish line"
                  width={2076}
                  height={2908}
                  className="w-auto object-contain"
                  style={{ height: "420px", maxWidth: "100%" }}
                />
                <p className="mt-4 text-xs leading-relaxed text-center" style={{ fontFamily: "'Inter', sans-serif", color: "#6B7280" }}>
                  Biaya-biaya on the old desktop flow. Every fee sat open and editable, stacked into one
                  long scroll the Credit Admin Officer had to fill in by hand.
                </p>
              </div>

              <div className="p-4 flex flex-col items-center" style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(18, 21, 28, 0.1)" }}>
                <span
                  className="self-start text-xs tracking-widest uppercase mb-4 px-2 py-1"
                  style={{
                    fontFamily: "'Urbanist', sans-serif",
                    color: "#16A34A",
                    backgroundColor: "rgba(22, 163, 74, 0.08)",
                    border: "1px solid rgba(22, 163, 74, 0.2)",
                    letterSpacing: "0.08em",
                  }}
                >
                  After
                </span>
                <Image
                  src="/case-studies/brispot/biaya-biaya-after.png"
                  alt="Redesigned Verifikasi Biaya-biaya tab on mobile: the same fees grouped into read-only cards the Credit Admin Officer confirms instead of re-entering"
                  width={265}
                  height={497}
                  className="w-auto object-contain"
                  style={{ height: "420px", maxWidth: "100%" }}
                />
                <p className="mt-4 text-xs leading-relaxed text-center" style={{ fontFamily: "'Inter', sans-serif", color: "#6B7280" }}>
                  Verifikasi Biaya-biaya in the redesign. Same fees, grouped into cards to confirm instead
                  of re-enter, one tab in a set of nine, not one screen holding everything at once.
                </p>
              </div>
            </div>

            <p className="mt-6 text-sm leading-relaxed max-w-3xl" style={{ fontFamily: "'Inter', sans-serif", color: "#3D4557" }}>
              That shift, from a field to fill in to a fact to confirm, is what drove every tab in the
              redesign below.
            </p>

            {/* Redesigned flows: RM, Putusan Kredit, Analisa Data Kredit, top to bottom */}
            <div className="mt-6 p-3" style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(18, 21, 28, 0.1)" }}>
              <Image
                src="/case-studies/brispot/redesign-flows-overview.png"
                alt="The redesigned BRISPOT flows, top to bottom: RM (Relationship Manager submission), Putusan Kredit (credit decision), and Analisa Data Kredit (Credit Admin Officer's analysis, broken into nine focused tabs)"
                width={2600}
                height={1902}
                className="w-full h-auto"
                sizes="(min-width: 768px) 896px, 100vw"
              />
              <p className="pt-3 px-1 text-xs" style={{ fontFamily: "'Urbanist', sans-serif", color: "#6B7280" }}>
                Top to bottom: <strong>RM</strong>, the submission flow shortened to only what a
                Relationship Manager needs to enter. <strong>Putusan Kredit</strong>, the Approver&apos;s
                decision flow, surfacing what needs judgment instead of a wall of fields.{" "}
                <strong>Analisa Data Kredit</strong>, the Credit Admin Officer&apos;s full analysis, with
                the Biaya-biaya tab above as one example of what changed across all nine.
              </p>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Outcome */}
      <Reveal variant="up" duration={800}>
        <section className="py-16 px-6 md:px-12" style={{ backgroundColor: "#FFFFFF" }}>
          <div className="max-w-4xl mx-auto">
            <SectionLabel label="// Outcome" />
            <div className="mt-8 grid sm:grid-cols-2 gap-6 mb-4">
              <div>
                <span
                  className="block text-3xl md:text-4xl mb-1"
                  style={{ fontFamily: "'Urbanist', sans-serif", fontWeight: 700, color: "#12151C" }}
                >
                  ~3 weeks → 3–5 days
                </span>
                <span className="text-sm" style={{ fontFamily: "'Inter', sans-serif", color: "#6B7280" }}>
                  approval time, still what credit ops uses to process applications at national scale today
                </span>
              </div>
              <div>
                <span
                  className="block text-3xl md:text-4xl mb-1"
                  style={{ fontFamily: "'Urbanist', sans-serif", fontWeight: 700, color: "#12151C" }}
                >
                  1,000–3,000
                </span>
                <span className="text-sm" style={{ fontFamily: "'Inter', sans-serif", color: "#6B7280" }}>
                  Briguna applications processed per day, per branch, the real scale this workflow runs at
                </span>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed max-w-2xl" style={{ fontFamily: "'Inter', sans-serif", color: "#3D4557" }}>
              That number didn&apos;t come from a dashboard. It came from repeatedly asking the product
              owner and business analysts what actually moved through the system. At that scale, a
              consistent interface wasn&apos;t cosmetic; it was the difference between a workflow that
              scales and one that quietly slows everyone down. Approvers and Credit Admin Officers also
              said the workflow felt lighter: less time figuring out what needed attention, more time
              deciding.
            </p>
          </div>
        </section>
      </Reveal>

      {/* Reflection */}
      <Reveal variant="up" duration={800}>
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
              On a platform this high-stakes, I default to what&apos;s already in the design system
              rather than improvising. UI stability matters more here than anywhere else. When thousands
              of applications move through it daily, consistency isn&apos;t a nice-to-have; it&apos;s
              what keeps people running it fast.
            </p>
          </div>
        </section>
      </Reveal>

      {/* CTA back to case studies */}
      <section className="py-16 px-6 md:px-12" style={{ backgroundColor: "#EDEFF5" }}>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6 p-8" style={{ border: "1.5px dashed rgba(43, 78, 255, 0.3)", backgroundColor: "#F5F6FA" }}>
          <div>
            <h3 className="text-xl mb-1" style={{ fontFamily: "'Urbanist', sans-serif", fontWeight: 700, color: "#12151C" }}>
              More case studies.
            </h3>
            <p className="text-sm" style={{ fontFamily: "'Inter', sans-serif", color: "#6B7280" }}>
              See the rest of the portfolio: design systems, dashboards, and everything in between.
            </p>
          </div>
          <Link
            href="/case-studies"
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
            Back to Case Studies →
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
