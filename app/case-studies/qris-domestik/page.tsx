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
  Reflection,
  NextCase,
} from "@/components/case-study/Kit";

export const metadata = {
  title: "BSI: QRIS Domestik Payment Flow · Rahadian Maulana",
  description:
    "Mapping two QRIS payment paths (Open Amount and Closed Amount) into one flow, with PIN confirmation, tip handling, and every failure state a scan can hit.",
};

const QUICK_FACTS = [
  { label: "Role", value: "Product Designer" },
  { label: "Company", value: "Bank Syariah Indonesia" },
  { label: "Platform", value: "BSI Mobile Banking App" },
  { label: "Scope", value: "Open & Closed Amount" },
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
    body: "QR tidak dikenali, kode kadaluarsa, saldo tidak mencukupi, transaksi gagal di sisi sistem, PIN salah: each of these needed to be a real screen with a real way forward, not a generic error toast. Error and info cards use a consistent color code (yellow for a recoverable notice, red for a hard failure) so the user can read severity before reading the text.",
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

const DECISIONS = [
  {
    title: "Two amount types, one component set",
    body: "Rather than building Open and Closed Amount as separate features, they share the same confirmation card, PIN screen, and receipt layout; only the input step differs. That kept the two paths consistent, and meant a fix to one benefited both.",
  },
  {
    title: "A color code for severity",
    body: "Yellow notice cards for recoverable states and red cards for hard failures (insufficient balance, a failed transaction) let the user read urgency before reading the copy, a pattern reused across the error states rather than invented per screen.",
  },
  {
    title: "PIN as the single gate",
    body: "Every path (Open or Closed Amount, with or without tip) converges on the same PIN confirmation step before a transaction can process. One checkpoint meant fewer places for a user to get stuck, and fewer surfaces to keep in sync.",
  },
  {
    title: "Closing the loop past the app",
    body: "A successful transaction doesn't end at the in-app receipt. It's followed by an email confirmation with the same details. For a payment flow, that second, durable record matters as much as the on-screen one.",
  },
];

const FLOW = {
  src: "/case-studies/qris-domestik/qris1-full-flow.png",
  alt: "Full QRIS Domestik flow: Open Amount and Closed Amount tracks, each moving from Dashboard through Camera, QR confirmation, PIN confirmation, success and failure branches, and email feedback",
  width: 9263,
  height: 9518,
};

export default function QrisDomestikCaseStudy() {
  return (
    <main>
      <Navbar />

      <CaseHero
        eyebrow="BSI · QRIS Domestik Payment Flow"
        title="BSI: QRIS Domestik Payment Flow."
        intro={
          <>
            One scanner, two payment shapes. I mapped BSI Mobile&apos;s QRIS Domestik flow across Open
            Amount and Closed Amount transactions: scan, confirm, PIN, and every failure state in between,
            as one connected system instead of two separate features.
          </>
        }
        facts={QUICK_FACTS}
        cover={
          <Figure
            image={FLOW}
            crop="h-[340px] sm:h-[440px] md:h-[520px]"
            cropZoom={3}
            priority
            caption="A slice of the full map, shown at a readable size. Use zoom to pan across every branch."
          />
        }
      />

      <CaseSection label="Context" title="Indonesia's national QR standard, through BSI's own camera.">
        <Lead>
          QRIS Domestik is BSI Mobile&apos;s scan-to-pay feature: the same code format used across banks
          and e-wallets, read through BSI&apos;s own camera and confirmed with BSI&apos;s own PIN. The flow
          splits into Closed Amount, where the nominal is already fixed, and Open Amount, where the
          customer enters it. This case study covers both paths end to end, from opening the camera to
          the confirmation email that closes the loop.
        </Lead>
      </CaseSection>

      <CaseSection label="The problem" title="The camera looks the same. What comes next doesn't." tone="alt">
        <ProblemGrid items={PROBLEMS} />
      </CaseSection>

      <CaseSection label="Process" title="Failure paths first, happy path second.">
        <ProcessSteps items={PROCESS} />
      </CaseSection>

      <CaseSection label="The flow" title="Two tracks, one shape, every branch mapped." tone="alt">
        <Body>
          Both transaction types run through the same shape (Dashboard, Camera, Konfirmasi QR, Konfirmasi
          PIN) but branch at nearly every step. Closed Amount skips straight to confirming a fixed
          nominal; Open Amount adds a numeric input first. Both carry the same failure states, and success
          on either ends at a receipt with share and download actions, followed by an email confirmation.
        </Body>
        <div className="mt-10">
          <Figure
            image={FLOW}
            crop="h-[420px] md:h-[680px]"
            cropZoom={2}
            caption="Open Amount (top) and Closed Amount (bottom), with every error and success branch between them. Open it full size to follow a single path."
          />
        </div>
      </CaseSection>

      <CaseSection label="Key decisions" title="Four calls that shaped the flow.">
        <DecisionGrid items={DECISIONS} />
      </CaseSection>

      <Reflection>
        A payment flow is mostly the paths that don&apos;t succeed. The scan-and-confirm part is maybe a
        third of this map. Designing the other half with the same care is what determines whether people
        trust the feature the second time they use it.
      </Reflection>

      <NextCase currentId="qris-domestik" />
      <Footer />
    </main>
  );
}
