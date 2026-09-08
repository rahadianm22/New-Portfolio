import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/ExperienceSection";

export const metadata = {
  title: "Card Delivery Status: Closing a Visibility Gap · Rahadian Maulana",
  description:
    "Benchmarking how digital banks communicate physical card delivery, then designing the status tracking, including what happens when the delivery fails. Client and product details withheld under NDA.",
};

const QUICK_FACTS = [
  { label: "Role", value: "Senior Product Designer" },
  { label: "Scope", value: "Delivery status tracking" },
  { label: "Team", value: "Designed with a product design team" },
  { label: "Status", value: "Designed, not yet released" },
];

const PROBLEMS = [
  {
    label: "The gap",
    body: "The bank had no delivery tracking for physical debit cards at all. You requested one, then waited without knowing anything. Competitors had shipped this years earlier, so we weren't solving a novel problem. We were closing a gap that had stayed open too long.",
  },
  {
    label: "The part nobody designs",
    body: "Tracking the happy path is easy. What kept coming up in my benchmarking was the failed delivery: card undeliverable, returned to the bank, and how little most apps say when it happens. That silence is exactly when a customer starts to panic about where their card ended up.",
  },
];

const PROCESS = [
  {
    title: "Benchmarking three banks that already had it",
    body: "I studied how Jago, blu by BCA Digital, and Mandiri each handled card delivery, focused on three questions: how many stages they expose, how they notify at each one, and what they do when delivery fails. All three answered differently, and that's what made the trade-offs visible instead of guessed at.",
  },
  {
    title: "Deriving the stages instead of inheriting them",
    body: "The status stages weren't handed to me. I built the sequence from the benchmarking, aiming for enough steps that the wait feels accounted for and few enough that it doesn't read as noise. Then I checked each one against a state the backend could actually report.",
  },
  {
    title: "Designing the failure state as a real state",
    body: "When delivery fails, the backend returns the card to the bank and deactivates it. I designed that as a first-class state, not an error message: say plainly what happened, say the old card is deactivated for security, and put the free reorder directly in that same view.",
  },
];

const STAGES = [
  { label: "Card being prepared", detail: "Request confirmed, card queued for production" },
  { label: "Card being printed", detail: "Physical card produced at the bank" },
  { label: "Handed to courier", detail: "Waiting for pickup" },
  { label: "In transit", detail: "Courier and tracking number surfaced in-app" },
];

const OUTCOMES = [
  { label: "Delivered", detail: "Card received, ready to activate", tone: "success" },
  { label: "Delivery failed", detail: "Card returned to the bank, old one deactivated, reorder free", tone: "fail" },
];

export default function CardDeliveryStatusCaseStudy() {
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
            // Digital Banking · Under NDA
          </span>
          <h1
            className="text-4xl md:text-6xl mb-6"
            style={{ fontFamily: "'Urbanist', sans-serif", fontWeight: 700, color: "#12151C", letterSpacing: "-0.02em" }}
          >
            Card Delivery Status: Closing a Visibility Gap.
          </h1>
          <p
            className="text-lg md:text-xl max-w-2xl leading-relaxed mb-10"
            style={{ fontFamily: "'Inter', sans-serif", color: "#3D4557" }}
          >
            A bank shipping physical debit cards to customers&apos; homes, with no way for them to see
            where the card was. I owned the delivery status tracking. I benchmarked three banks that
            already had it, then designed the part most of them still handle badly: what the customer
            sees when the card never arrives.
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

      {/* NDA note */}
      <Reveal variant="up" duration={800}>
        <section className="py-10 px-6 md:px-12" style={{ backgroundColor: "#FFFFFF" }}>
          <div className="max-w-4xl mx-auto">
            <div
              className="flex gap-4 p-5"
              style={{ backgroundColor: "#F5F6FA", border: "1.5px dashed rgba(43, 78, 255, 0.3)" }}
            >
              <span
                className="flex-shrink-0 text-xs tracking-widest uppercase pt-0.5"
                style={{ fontFamily: "'Urbanist', sans-serif", color: "#2B4EFF", letterSpacing: "0.1em" }}
              >
                NDA
              </span>
              <p className="text-sm leading-relaxed" style={{ fontFamily: "'Inter', sans-serif", color: "#3D4557" }}>
                This feature hasn&apos;t launched publicly, so the client, product name, and interface
                are withheld. No screens here, by choice. What follows is the reasoning and the
                structure I arrived at, and I&apos;m happy to walk through the actual work in an interview.
              </p>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Context */}
      <Reveal variant="up" duration={800}>
        <section className="pb-16 px-6 md:px-12" style={{ backgroundColor: "#FFFFFF" }}>
          <div className="max-w-4xl mx-auto">
            <SectionLabel label="// Context" />
            <p
              className="mt-6 text-base md:text-lg leading-relaxed max-w-3xl"
              style={{ fontFamily: "'Inter', sans-serif", color: "#3D4557" }}
            >
              The full card issuance journey (request, address, PIN, activation) was built by a
              product design team. My piece was the delivery status: the screen a customer opens after
              ordering the card to find out where it is. This case study covers that piece only.
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
            <SectionLabel label="// The Structure" />
            <p className="mt-6 text-base leading-relaxed max-w-3xl" style={{ fontFamily: "'Inter', sans-serif", color: "#3D4557" }}>
              Five states, not four. Printing sits between prepared and handed to courier, because
              in the benchmarking that gap was exactly where people lost confidence the card was even
              moving. From there the path forks. Most cards resolve into a plain &ldquo;delivered,&rdquo;
              ready to activate. When one doesn&apos;t, that fork is a real state too: a failed delivery
              is stated plainly, paired with why the old card is now deactivated, with the free reorder
              sitting right there instead of sending anyone to call support.
            </p>

            {/* Structural diagram, not the interface, the state sequence behind it */}
            <div className="mt-6 p-6 md:p-8" style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(18, 21, 28, 0.1)" }}>
              <div className="space-y-0">
                {STAGES.map((stage) => (
                  <div key={stage.label} className="flex gap-4">
                    {/* rail */}
                    <div className="flex flex-col items-center flex-shrink-0">
                      <span className="w-3 h-3 rounded-full mt-1.5" style={{ backgroundColor: "#2B4EFF" }} />
                      <span className="w-px flex-1 my-1" style={{ backgroundColor: "rgba(18, 21, 28, 0.15)" }} />
                    </div>
                    <div className="pb-7">
                      <p
                        className="text-sm mb-1"
                        style={{ fontFamily: "'Urbanist', sans-serif", fontWeight: 700, color: "#12151C" }}
                      >
                        {stage.label}
                      </p>
                      <p className="text-xs leading-relaxed" style={{ fontFamily: "'Inter', sans-serif", color: "#6B7280" }}>
                        {stage.detail}
                      </p>
                    </div>
                  </div>
                ))}

                {/* fork label */}
                <div className="flex gap-4">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <span className="w-3 h-3 rounded-full mt-1.5" style={{ backgroundColor: "rgba(18, 21, 28, 0.3)" }} />
                  </div>
                  <p
                    className="text-xs tracking-wider uppercase pt-2"
                    style={{ fontFamily: "'Urbanist', sans-serif", color: "#6B7280", letterSpacing: "0.08em" }}
                  >
                    Then one of two outcomes
                  </p>
                </div>
              </div>

              {/* branch: two possible endings */}
              <div className="mt-4 pl-7 grid sm:grid-cols-2 gap-3">
                {OUTCOMES.map((outcome) => {
                  const isFail = outcome.tone === "fail";
                  const accent = isFail ? "#FF4B33" : "#16A34A";
                  return (
                    <div
                      key={outcome.label}
                      className="p-4"
                      style={{ backgroundColor: isFail ? "rgba(255, 75, 51, 0.05)" : "rgba(22, 163, 74, 0.05)", borderLeft: `3px solid ${accent}` }}
                    >
                      <p
                        className="text-sm mb-1"
                        style={{ fontFamily: "'Urbanist', sans-serif", fontWeight: 700, color: isFail ? "#FF4B33" : "#12151C" }}
                      >
                        {outcome.label}
                      </p>
                      <p className="text-xs leading-relaxed" style={{ fontFamily: "'Inter', sans-serif", color: "#6B7280" }}>
                        {outcome.detail}
                      </p>
                    </div>
                  );
                })}
              </div>

              <p className="pt-6 text-xs" style={{ fontFamily: "'Urbanist', sans-serif", color: "#6B7280" }}>
                The state sequence, not the interface. Redrawn here since the screens stay private
                until launch.
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
            <p className="mt-6 text-sm leading-relaxed max-w-2xl" style={{ fontFamily: "'Inter', sans-serif", color: "#3D4557" }}>
              This one is designed and handed off, still waiting on a launch date, so there&apos;s no
              adoption number to report and I&apos;m not going to make one up. What I can point to is the
              process: the stage sequence came from comparing three banks instead of one team&apos;s
              assumption, and the failed-delivery state went from an unspecced gap to an actual part of
              the flow.
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
              Arriving late to a feature everyone else already has sounds like a disadvantage. It
              isn&apos;t. You get to see where the existing versions go quiet. Every bank I studied
              tracked a successful delivery well; the one that fails is where the design work actually
              was.
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
