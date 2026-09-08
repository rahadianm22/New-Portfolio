import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/ExperienceSection";

export const metadata = {
  title: "BSI: QRIS Domestik Payment Flow · Rahadian Maulana",
  description:
    "Mapping two QRIS payment paths (Open Amount and Closed Amount) into one flow, with PIN confirmation, tip handling, and every failure state a scan can hit.",
};

const QUICK_FACTS = [
  { label: "Role", value: "Product Designer" },
  { label: "Company", value: "Bank Syariah Indonesia" },
  { label: "Platform", value: "BSI Mobile Banking App" },
  { label: "Scope", value: "QRIS Domestik: Open & Closed Amount" },
];

const PROBLEMS = [
  {
    label: "Two payment shapes, one scanner",
    body: "A QRIS code doesn't tell the user upfront whether the merchant fixed the amount or left it open. Closed Amount (a coffee shop with a set price) and Open Amount (a donation box, a street vendor) need different next steps right after the scan, but the entry point, the camera screen, looks identical either way.",
  },
  {
    label: "A transaction with no undo",
    body: "Every branch off the main path (expired QR, insufficient balance, a transaction that fails mid-process, a code the scanner can't read) needed its own screen and its own way back, because there's no forgiving retry on a payment flow the way there is on, say, a form.",
  },
];

const PROCESS = [
  {
    title: "Separating the two amount types before the first screen",
    body: "Open Amount and Closed Amount diverge as early as the confirmation step: one needs a numeric input for the nominal, the other only needs a confirm. Mapping both as parallel tracks from the scan screen, rather than one flow with a conditional branch buried in the middle, kept each path readable on its own.",
  },
  {
    title: "Designing for the failure before the success",
    body: "QR tidak dikenali, kode kadaluarsa, saldo tidak mencukupi, transaksi gagal di sisi sistem, PIN salah: each of these needed to be a real screen with a real way forward, not a generic error toast. The error and info cards use a consistent color code (yellow for a recoverable notice, red for a hard failure) so the user can read severity before reading the text.",
  },
  {
    title: "Tip as an optional branch, not a forced step",
    body: "Tip only appears where it makes sense for the transaction type, and skipping it doesn't reset progress or send the user back a screen. Optional steps that don't feel optional are one of the more common ways a payment flow loses people right before the confirmation step.",
  },
  {
    title: "Closing the loop after Konfirmasi PIN",
    body: "Success and failure after PIN confirmation split into their own branches: one leading to a receipt with share/download actions and an email confirmation, the other back to a clear retry point. Neither branch leaves the user looking at a spinner with no sense of what happens next.",
  },
];

export default function QrisDomestikCaseStudy() {
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
            // BSI · QRIS Domestik Payment Flow
          </span>
          <h1
            className="text-4xl md:text-6xl mb-6"
            style={{ fontFamily: "'Urbanist', sans-serif", fontWeight: 700, color: "#12151C", letterSpacing: "-0.02em" }}
          >
            BSI: QRIS Domestik Payment Flow.
          </h1>
          <p
            className="text-lg md:text-xl max-w-2xl leading-relaxed mb-10"
            style={{ fontFamily: "'Inter', sans-serif", color: "#3D4557" }}
          >
            One scanner, two payment shapes. I mapped BSI Mobile&apos;s QRIS Domestik flow across
            Open Amount and Closed Amount transactions: scan, confirm, PIN, and every failure state
            in between, as one connected system instead of two separate features.
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
              QRIS Domestik is BSI Mobile&apos;s scan-to-pay feature for Indonesia&apos;s national QR
              payment standard: the same code format used across banks and e-wallets, read through
              BSI&apos;s own camera and confirmed with BSI&apos;s own PIN. The flow splits into two
              transaction types depending on how the merchant generated the code: Closed Amount, where
              the nominal is already fixed, and Open Amount, where the customer enters it themselves.
              This case study covers both paths end to end, from opening the camera to the confirmation
              email that closes the loop.
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
            <div className="mt-8 flex flex-col gap-8">
              {PROCESS.map((item, i) => (
                <div key={item.title} className="flex gap-5">
                  <span
                    className="flex-shrink-0 flex items-center justify-center w-9 h-9 text-xs"
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

      {/* The Solution: full flow */}
      <Reveal variant="up" duration={800}>
        <section className="py-16 px-6 md:px-12" style={{ backgroundColor: "#EDEFF5" }}>
          <div className="max-w-4xl mx-auto">
            <SectionLabel label="// The Flow" />
            <p className="mt-6 text-base leading-relaxed max-w-3xl" style={{ fontFamily: "'Inter', sans-serif", color: "#3D4557" }}>
              Both transaction types run through the same shape (Dashboard, Camera, Konfirmasi QR,
              Konfirmasi PIN) but branch at nearly every step. Closed Amount skips straight to
              confirming a fixed nominal; Open Amount adds a numeric input first. From there, both
              paths carry the same set of failure states: QR not recognized, insufficient balance,
              a transaction that fails on the system side, an expired code. Success on either path ends
              at a receipt screen with share and download actions, followed by an email confirmation.
            </p>

            <div className="mt-6 p-3" style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(18, 21, 28, 0.1)" }}>
              <Image
                src="/case-studies/qris-domestik/qris1-full-flow.png"
                alt="Full QRIS Domestik flow diagram: Open Amount and Closed Amount tracks, each moving from Dashboard through Camera, QR confirmation, PIN confirmation, success/failure branches, and email feedback"
                width={2200}
                height={2895}
                className="w-full h-auto"
                sizes="(min-width: 768px) 896px, 100vw"
              />
              <p className="pt-3 px-1 text-xs" style={{ fontFamily: "'Urbanist', sans-serif", color: "#6B7280" }}>
                Full flow: both Open Amount (top) and Closed Amount (bottom) tracks, with every error
                and success branch mapped between them.
              </p>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Key decisions */}
      <Reveal variant="up" duration={800}>
        <section className="py-16 px-6 md:px-12" style={{ backgroundColor: "#FFFFFF" }}>
          <div className="max-w-4xl mx-auto">
            <SectionLabel label="// Key Decisions" />
            <div className="mt-8 grid md:grid-cols-2 gap-4">
              <div className="p-6" style={{ backgroundColor: "#F5F6FA", border: "1px solid rgba(18, 21, 28, 0.1)" }}>
                <p className="text-xs tracking-wider uppercase mb-3" style={{ fontFamily: "'Urbanist', sans-serif", color: "#2B4EFF", letterSpacing: "0.06em" }}>
                  Two amount types, one component set
                </p>
                <p className="text-sm leading-relaxed" style={{ fontFamily: "'Inter', sans-serif", color: "#3D4557" }}>
                  Rather than building Open and Closed Amount as separate features, they share the same
                  confirmation card, PIN screen, and receipt layout, only the input step differs. That
                  kept the two paths visually and behaviorally consistent, and meant a fix to one
                  benefited both.
                </p>
              </div>
              <div className="p-6" style={{ backgroundColor: "#F5F6FA", border: "1px solid rgba(18, 21, 28, 0.1)" }}>
                <p className="text-xs tracking-wider uppercase mb-3" style={{ fontFamily: "'Urbanist', sans-serif", color: "#2B4EFF", letterSpacing: "0.06em" }}>
                  A color code for severity
                </p>
                <p className="text-sm leading-relaxed" style={{ fontFamily: "'Inter', sans-serif", color: "#3D4557" }}>
                  Yellow notice cards for recoverable states (no tip selected, a QR the camera hasn&apos;t
                  focused on yet) and red cards for hard failures (insufficient balance, a failed
                  transaction) let the user read urgency before reading the copy, a pattern reused
                  across the error states rather than invented per screen.
                </p>
              </div>
              <div className="p-6" style={{ backgroundColor: "#F5F6FA", border: "1px solid rgba(18, 21, 28, 0.1)" }}>
                <p className="text-xs tracking-wider uppercase mb-3" style={{ fontFamily: "'Urbanist', sans-serif", color: "#2B4EFF", letterSpacing: "0.06em" }}>
                  PIN as the single gate
                </p>
                <p className="text-sm leading-relaxed" style={{ fontFamily: "'Inter', sans-serif", color: "#3D4557" }}>
                  Every path (Open or Closed Amount, with or without tip) converges on the same PIN
                  confirmation step before a transaction can process. One security checkpoint instead of
                  several meant fewer places for a user to get stuck, and fewer surfaces to keep in sync
                  if the PIN pattern itself changed.
                </p>
              </div>
              <div className="p-6" style={{ backgroundColor: "#F5F6FA", border: "1px solid rgba(18, 21, 28, 0.1)" }}>
                <p className="text-xs tracking-wider uppercase mb-3" style={{ fontFamily: "'Urbanist', sans-serif", color: "#2B4EFF", letterSpacing: "0.06em" }}>
                  Closing the loop past the app
                </p>
                <p className="text-sm leading-relaxed" style={{ fontFamily: "'Inter', sans-serif", color: "#3D4557" }}>
                  A successful transaction doesn&apos;t end at the in-app receipt. It&apos;s followed by
                  an email confirmation with the same details. For a payment flow, that second, durable
                  record matters as much as the on-screen one.
                </p>
              </div>
            </div>
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
              A payment flow is mostly the paths that don&apos;t succeed. The scan-and-confirm part is
              maybe a third of this map. The rest is what happens when the balance is short, the code
              is dead, or the transaction fails somewhere the user can&apos;t see. Designing that half
              properly, with the same care as the happy path, is what actually determines whether people
              trust the feature the second time they use it.
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
