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
  ScreenFlow,
  Figure,
  Reflection,
  NextCase,
  type ProcessStep,
} from "@/components/case-study/Kit";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "BSI: QRIS Domestik Payment Flow · Rahadian Maulana",
  description:
    "Mapping two QRIS payment paths (Open Amount and Closed Amount) into one flow, with PIN confirmation, tip handling, and every failure state a scan can hit.",
  path: "/case-studies/qris-domestik",
});

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

const PROCESS: ProcessStep[] = [
  {
    phase: "Split",
    title: "Separating the two amount types before the first screen",
    body: "Open Amount and Closed Amount diverge as early as the confirmation step: one needs a numeric input for the nominal, the other only needs a confirm. Mapping both as parallel tracks from the scan screen, rather than one flow with a conditional branch buried in the middle, kept each path readable on its own.",
    output: "Two parallel tracks from the same scanner",
    href: "#flow",
  },
  {
    phase: "Fail first",
    title: "Designing for the failure before the success",
    body: "QR tidak dikenali, kode kadaluarsa, saldo tidak mencukupi, merchant yang belum bekerja sama, limit transaksi dan limit harian: each of these needed to be a real screen with a real way forward, not a generic error toast. Every one became the same bottom sheet, so the user learns the pattern once.",
    output: "One bottom sheet for every failure, worded per cause",
    href: "#failure-states",
  },
  {
    phase: "Branch",
    title: "Tip as an optional branch, not a forced step",
    body: "Tip only appears where it makes sense for the transaction type, and skipping it doesn't reset progress or send the user back a screen. Optional steps that don't feel optional are one of the more common ways a payment flow loses people right before the confirmation step.",
    output: "A tip step that can be skipped without losing progress",
    href: "#flow",
  },
  {
    phase: "Close the loop",
    title: "Closing the loop after Konfirmasi PIN",
    body: "Success and failure after PIN confirmation split into their own branches: one leading to a receipt with share/download actions and an email confirmation, the other back to a clear retry point. Neither branch leaves the user looking at a spinner with no sense of what happens next.",
    output: "A receipt on success, a retry point on failure",
    href: "#flow",
  },
];

const DECISIONS = [
  {
    title: "Two amount types, one component set",
    body: "Rather than building Open and Closed Amount as separate features, they share the same confirmation card, PIN screen, and receipt layout; only the input step differs. That kept the two paths consistent, and meant a fix to one benefited both.",
  },
  {
    title: "One failure sheet, specific words",
    body: "Every failure uses the same bottom sheet: an illustration, a title that names what happened, one sentence with the exact number when there is one (a Rp10.000.000 transaction limit, Rp250.000 left today), and a single Kembali action. The shape is shared; the sentence never is.",
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

const SCREEN = { width: 372, height: 817 };
const shot = (file: string, alt: string) => ({ src: `/case-studies/qris-domestik/screens/${file}.png`, alt, ...SCREEN });

const HAPPY_PATH = [
  { image: shot("01-dashboard", "BYOND by BSI home: Easy Wadiah balance, shortcuts for Transfer, Bayar & Beli, QRIS and Ziswaf, linked e-wallets and favourites"), label: "Start", note: "QRIS sits in the first row of shortcuts." },
  { image: shot("02-scan", "QRIS scanner over a merchant's printed QR code, with a shortcut to show your own QR to pay"), label: "Scan", note: "One camera for every QRIS code." },
  { image: shot("03-amount", "Pembayaran QR: merchant Narcos Amigos, amount Rp 20.000, an optional Rp 1.000 tip, paid from a savings account"), label: "Amount and tip", note: "Open Amount asks for the nominal; tip stays optional." },
  { image: shot("04-confirm", "Konfirmasi Transaksi sheet listing acquirer, MPAN, terminal ID, source account, the Rp 1.000 tip and a Rp 21.000 total"), label: "Confirm", note: "Every number the bank will charge, before the PIN." },
  { image: shot("05-pin", "Konfirmasi PIN with six empty dots and a neutral number pad"), label: "PIN", note: "The single gate every path passes through." },
  { image: shot("07-success", "Success screen: an illustrated confirmation that the QRIS payment went through, with amount, merchant and MPAN"), label: "Paid", note: "The amount and merchant first, the detail folded." },
  { image: shot("08-receipt", "The same receipt with Detail Transaksi expanded: acquirer, terminal ID, CPAN and RRN"), label: "Receipt", note: "Share or download; an email copy follows." },
];

const err = (file: string, h: number, alt: string) => ({ src: `/case-studies/qris-domestik/screens/${file}.png`, alt, width: 372, height: h });

const FAILURES = [
  { image: err("err-qr-unrecognised", 798, "Bottom sheet over the camera: the QR code scanned isn't recognised, with a note to make sure it is a QRIS payment code"), label: "QR not recognised", note: "Shown over the camera, so the next scan is one tap away." },
  { image: err("err-balance", 467, "Bottom sheet: your balance is not enough, top up and make sure your savings cover this transaction"), label: "Balance too low", note: "Says what to do, not just what failed." },
  { image: err("err-merchant", 443, "Bottom sheet: transaction not completed, you can't pay a merchant that doesn't work with BSI yet"), label: "Merchant not partnered", note: "Blames the cause, not the customer." },
  { image: err("err-limit", 472, "Bottom sheet: transaction failed because it exceeds your Rp 10.000.000 transaction limit"), label: "Over the transaction limit", note: "Names the exact limit." },
  { image: err("err-daily-limit", 472, "Bottom sheet: transaction failed because it exceeds your daily limit, Rp 250.000 remaining today"), label: "Over the daily limit", note: "Names what is left today." },
];

export default function QrisDomestikCaseStudy() {
  return (
    <main>
      <Navbar />

      <CaseHero
        title="BSI: QRIS Domestik Payment Flow."
        intro={
          <>
            One scanner, two payment shapes. I mapped BSI Mobile&apos;s QRIS Domestik flow across Open
            Amount and Closed Amount transactions: scan, confirm, PIN, and every failure state in between,
            as one connected system instead of two separate features.
          </>
        }
        facts={QUICK_FACTS}
        chapters={["Context", "The problem", "Process", "Failure states", "The flow", "Key decisions"]}
        cover={
          <ScreenFlow
            label="QRIS Domestik, the path a successful payment takes"
            screens={HAPPY_PATH}
            minWidth={170}
            priority
            caption="The Open Amount path as designed, scan to receipt. Every screen opens full size."
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
        <div className="mt-10">
          <Figure
            image={{
              src: "/case-studies/qris-domestik/bsi-mobile-qris-merchants.jpg",
              alt: "BSI Mobile open on its QRIS scanner, surrounded by merchant QRIS codes for a coffee shop, bike store, petrol station, minimarket and gadget store",
              width: 1600,
              height: 1500,
            }}
            canvasClassName="md:px-24 lg:px-48"
            caption="The feature as BSI announced it: one scanner for every merchant, from the coffee shop to the petrol station."
          />
        </div>
      </CaseSection>

      <CaseSection label="The problem" title="The camera looks the same. What comes next doesn't." tone="alt">
        <ProblemGrid items={PROBLEMS} />
      </CaseSection>

      <CaseSection label="Process" title="Failure paths first, happy path second.">
        <ProcessSteps items={PROCESS} />
      </CaseSection>

      <CaseSection label="Failure states" title="Every way a scan can fail, each with a way back." tone="alt">
        <Body>
          A payment that fails has to say why in words a customer can act on. Five of the failure screens,
          all built from one bottom sheet: the illustration and the Kembali action stay put, the title and
          the sentence change to name the exact cause.
        </Body>
        <div className="mt-10">
          <ScreenFlow
            label="QRIS Domestik failure states"
            screens={FAILURES}
            numbered={false}
            minWidth={200}
          />
        </div>
      </CaseSection>

      <CaseSection label="The flow" title="Two tracks, one shape, every branch mapped.">
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

      <CaseSection label="Key decisions" title="Four calls that shaped the flow." tone="alt">
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
