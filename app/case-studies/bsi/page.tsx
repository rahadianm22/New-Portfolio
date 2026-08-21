import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/ExperienceSection";

export const metadata = {
  title: "BSI — PIN Confirmation Security — Rahadian Maulana",
  description:
    "Catching a tap-feedback pattern that leaked a customer's PIN through color alone, validating it with internal BSI users, and redesigning the confirmation screen so the number pad gives away nothing.",
};

const QUICK_FACTS = [
  { label: "Role", value: "Product Designer" },
  { label: "Company", value: "Bank Syariah Indonesia" },
  { label: "Platform", value: "BSI Mobile Banking App" },
  { label: "Timeline", value: "Aug 2022 – Jul 2023" },
];

const PROBLEMS = [
  {
    label: "The pattern",
    body: "BSI's number pad used the app's standard tap-feedback: press a digit, it fills solid teal; release, it goes back to white. Consistent with every other button in the app — which is exactly why nobody had questioned it on this screen.",
  },
  {
    label: "The risk",
    body: "On a PIN confirmation screen, that color change maps one-to-one to the digit being entered. Anyone glancing at the phone — over a shoulder, or on a photo taken after the fact — could read the PIN off the flashing buttons without ever reading a number.",
  },
];

const PROCESS = [
  {
    title: "A pattern that looked right everywhere else",
    body: "Noticed it during routine design QA on the confirmation flow — the same tap-feedback used app-wide, applied without a second thought to a screen where it wasn't just cosmetic.",
  },
  {
    title: "Testing the concern before pitching a fix",
    body: "Ran A/B testing on the PIN screen with internal BSI users before proposing anything. The shoulder-surfing worry came up unprompted, in their own words — public places, PIN entry, someone standing close.",
  },
  {
    title: "Bringing data to my lead, not just an instinct",
    body: "Took the test results to my lead along with a proposal: strip color feedback off the number pad entirely, and move all visible state to the dot row above it.",
  },
];

export default function BsiCaseStudy() {
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
            // BSI · PIN Confirmation Security
          </span>
          <h1
            className="text-4xl md:text-6xl mb-6"
            style={{ fontFamily: "'Urbanist', sans-serif", fontWeight: 700, color: "#12151C", letterSpacing: "-0.02em" }}
          >
            BSI — PIN Confirmation Security.
          </h1>
          <p
            className="text-lg md:text-xl max-w-2xl leading-relaxed mb-10"
            style={{ fontFamily: "'Inter', sans-serif", color: "#3D4557" }}
          >
            Every digit on BSI&apos;s PIN confirmation screen lit up teal the moment it was pressed —
            standard tap-feedback, used everywhere in the app. On this one screen, it also meant the
            PIN was readable off the colors alone. I proposed removing it entirely.
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
                  style={{ fontFamily: "'Urbanist', sans-serif", color: "#9CA3AF", letterSpacing: "0.1em" }}
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
              I joined BSI — Bank Syariah Indonesia, formed from the merger of three state-owned Islamic
              banks and now one of the largest Islamic banks in Southeast Asia — right after that merger,
              taking over a component library that had drifted out of sync with the new brand. Most of
              the work was systems-level — rebuilding shared components, running usability tests on core
              banking flows. This case study is about one screen that came out of that work: PIN
              Confirmation, the last step of every transaction in the app.
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

            {/* Visual proof — the digit lighting up solid teal on press */}
            <div className="mt-6 p-3" style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(18, 21, 28, 0.1)" }}>
              <Image
                src="/case-studies/bsi/pin-color-change-mockup.png"
                alt="PIN Confirmation comparison — the resting state next to the digit '1' turning solid teal the instant it's pressed"
                width={624}
                height={490}
                className="w-full h-auto max-w-lg mx-auto"
                sizes="(min-width: 768px) 512px, 100vw"
              />
              <p className="pt-3 px-1 text-xs text-center" style={{ fontFamily: "'Urbanist', sans-serif", color: "#9CA3AF" }}>
                Resting vs. pressed. That teal fill was the entire problem — it told you which number
                had just been tapped.
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
              The number pad now stays completely neutral, pressed or not — no fill, no color, nothing
              that changes with which digit was tapped. All the feedback moved to the six dots above it:
              they fill in one at a time as the PIN is entered, and that&apos;s the only thing on screen
              that changes state.
            </p>

            <p className="mt-6 text-base leading-relaxed max-w-3xl" style={{ fontFamily: "'Inter', sans-serif", color: "#3D4557" }}>
              Before settling on moving all feedback to the dot row, I sketched two other directions.
              Randomizing the number pad layout on each entry would have defeated shoulder-surfing on its
              own, but it breaks the muscle memory people build for a screen they use several times a
              day — trading one risk for a worse everyday cost. Haptic-only feedback, dropping visual
              confirmation entirely, felt safer on paper but left no visible cue that a tap had
              registered — exactly the kind of ambiguity you don&apos;t want on a PIN screen. Keeping the
              dots as the only visible state change closed the leak without asking anyone to unlearn how
              they already used the pad.
            </p>

            {/* Shipped screen — dots progressing while the number pad stays neutral throughout */}
            <div className="mt-6 p-3" style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(18, 21, 28, 0.1)" }}>
              <Image
                src="/case-studies/bsi/pin-solution-progression.png"
                alt="The shipped PIN Confirmation screen at three points during entry — the dots above the keypad filling in from zero to five, while the number pad itself never changes color"
                width={2442}
                height={1400}
                className="w-full h-auto"
                sizes="(min-width: 768px) 896px, 100vw"
              />
              <p className="pt-3 px-1 text-xs" style={{ fontFamily: "'Urbanist', sans-serif", color: "#9CA3AF" }}>
                Same screen, mid-entry, from the shipped app. The dots move. The keypad doesn&apos;t —
                by design.
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
                  Teal on press → No color at all
                </span>
                <span className="text-sm" style={{ fontFamily: "'Inter', sans-serif", color: "#6B7280" }}>
                  the only change made to the number pad — everything else on the screen stayed the same
                </span>
              </div>
              <div>
                <span
                  className="block text-3xl md:text-4xl mb-1"
                  style={{ fontFamily: "'Urbanist', sans-serif", fontWeight: 700, color: "#12151C" }}
                >
                  Validated first, shipped second
                </span>
                <span className="text-sm" style={{ fontFamily: "'Inter', sans-serif", color: "#6B7280" }}>
                  internal BSI users flagged the same shoulder-surfing risk unprompted, before the fix was ever proposed
                </span>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed max-w-2xl" style={{ fontFamily: "'Inter', sans-serif", color: "#3D4557" }}>
              I don&apos;t have a dashboard number for this one — it&apos;s not the kind of fix that
              moves a chart. What it did was close a side-channel that had no reason to exist on a
              transaction PIN screen, using feedback from the same users it was protecting.
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
              The most dangerous feedback is the kind that feels right. That teal flash matched every
              other button in the app — consistent, expected, and exactly why nobody had questioned it.
              Security work isn&apos;t always about adding a warning; sometimes it&apos;s noticing which
              pattern doesn&apos;t belong on this one screen. What I&apos;d do differently: I fixed the
              instance but didn&apos;t push to turn it into a system-wide guideline before I left — flag
              every screen where a &ldquo;consistent&rdquo; pattern might carry unintended meaning
              elsewhere in the app, so the next designer doesn&apos;t have to notice it by accident the
              way I did.
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
              See the rest of the portfolio — design systems, dashboards, and everything in between.
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