import {
  Package,
  Printer,
  Handshake,
  Truck,
  CircleCheck,
  CircleX,
  RotateCcw,
  type LucideIcon,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  CaseHero,
  CaseSection,
  Lead,
  Body,
  ProblemGrid,
  ProcessSteps,
  Callout,
  Reflection,
  NextCase,
} from "@/components/case-study/Kit";

export const metadata = {
  title: "Card Delivery Status: Closing a Visibility Gap · Rahadian Maulana",
  description:
    "Benchmarking how digital banks communicate physical card delivery, then designing the status tracking, including what happens when the delivery fails. Client and product details withheld under NDA.",
};

const QUICK_FACTS = [
  { label: "Role", value: "Senior Product Designer" },
  { label: "Scope", value: "Delivery status tracking" },
  { label: "Team", value: "Product design team" },
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

type Stage = { icon: LucideIcon; label: string; detail: string };

const STAGES: Stage[] = [
  { icon: Package, label: "Card being prepared", detail: "Request confirmed, card queued for production" },
  { icon: Printer, label: "Card being printed", detail: "Physical card produced at the bank" },
  { icon: Handshake, label: "Handed to courier", detail: "Waiting for pickup" },
  { icon: Truck, label: "In transit", detail: "Courier and tracking number surfaced in-app" },
];

/**
 * The state sequence redrawn as an unbranded tracker. It shows the
 * structure the case study describes, not the client's actual screens,
 * and the caption says so.
 */
function Tracker({ outcome }: { outcome: "delivered" | "failed" }) {
  const failed = outcome === "failed";
  return (
    <div className="rounded-[2.4rem] bg-ink p-2 shadow-lift">
      <div className="rounded-[1.9rem] bg-surface px-5 pb-6 pt-8">
        <p className="text-center text-sm font-semibold text-ink">Card delivery</p>

        <ol className="mt-6">
          {STAGES.map(({ icon: Icon, label, detail }) => (
            <li key={label} className="flex gap-3">
              <div className="flex flex-col items-center">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-tint-blue text-accent">
                  <Icon size={15} strokeWidth={2} />
                </span>
                <span className="my-1 w-px flex-1 bg-line-strong" />
              </div>
              <div className="pb-4">
                <p className="text-[13px] font-semibold leading-tight text-ink">{label}</p>
                <p className="mt-0.5 text-xs leading-snug text-ink-3">{detail}</p>
              </div>
            </li>
          ))}
          <li className="flex gap-3">
            <span
              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                failed ? "bg-status-warn-bg text-status-warn" : "bg-accent text-on-accent"
              }`}
            >
              {failed ? <CircleX size={16} strokeWidth={2} /> : <CircleCheck size={16} strokeWidth={2} />}
            </span>
            <div>
              <p className={`text-[13px] font-semibold leading-tight ${failed ? "text-status-warn" : "text-ink"}`}>
                {failed ? "Delivery failed" : "Delivered"}
              </p>
              <p className="mt-0.5 text-xs leading-snug text-ink-3">
                {failed
                  ? "Card returned to the bank. Your old card is deactivated for security."
                  : "Card received, ready to activate"}
              </p>
            </div>
          </li>
        </ol>

        <div
          className={`mt-6 flex h-11 items-center justify-center gap-2 rounded-full text-[13px] font-semibold ${
            failed ? "bg-accent text-on-accent" : "bg-surface-alt text-ink"
          }`}
        >
          {failed ? (
            <>
              <RotateCcw size={14} strokeWidth={2} />
              Reorder card, free
            </>
          ) : (
            "Activate card"
          )}
        </div>
      </div>
    </div>
  );
}

function Cover() {
  return (
    <figure>
      <div className="relative overflow-hidden rounded-lg bg-tint-blue px-6 py-12 md:px-12 md:py-16">
        <div className="mx-auto grid max-w-3xl gap-10 sm:grid-cols-2 sm:gap-8">
          <div>
            <span className="rounded-full bg-surface px-3.5 py-1.5 text-sm font-semibold text-ink shadow-soft">
              The path most cards take
            </span>
            <div className="mx-auto mt-6 max-w-[290px] sm:-rotate-2">
              <Tracker outcome="delivered" />
            </div>
          </div>
          <div>
            <span className="rounded-full bg-accent px-3.5 py-1.5 text-sm font-semibold text-on-accent">
              The state most banks skip
            </span>
            <div className="mx-auto mt-6 max-w-[290px] sm:rotate-2 sm:translate-y-6">
              <Tracker outcome="failed" />
            </div>
          </div>
        </div>
      </div>
      <figcaption className="mt-4 max-w-[70ch] px-1 text-sm leading-relaxed text-ink-3">
        The state sequence redrawn without client branding. The real screens stay private until launch;
        this shows the structure they are built on.
      </figcaption>
    </figure>
  );
}

export default function CardDeliveryStatusCaseStudy() {
  return (
    <main>
      <Navbar />

      <CaseHero
        eyebrow="Digital Banking · Under NDA"
        title="Card Delivery Status: Closing a Visibility Gap."
        intro={
          <>
            A bank shipping physical debit cards to customers&apos; homes, with no way for them to see
            where the card was. I owned the delivery status tracking: benchmarked three banks that
            already had it, then designed the part most of them still handle badly, what the customer
            sees when the card never arrives.
          </>
        }
        facts={QUICK_FACTS}
        cover={<Cover />}
      />

      <section className="bg-surface pb-section">
        <div className="max-w-page mx-auto px-6 md:px-12">
          <Callout title="Under NDA">
            This feature hasn&apos;t launched publicly, so the client, product name, and interface are
            withheld. The tracker above is a redrawn structure, not the shipped UI. I&apos;m happy to
            walk through the actual work in an interview.
          </Callout>
        </div>
      </section>

      <CaseSection label="Context" title="My piece: the screen you open after ordering the card.">
        <Lead>
          The full card issuance journey (request, address, PIN, activation) was built by a product
          design team. My piece was the delivery status: the screen a customer opens after ordering the
          card to find out where it is. This case study covers that piece only.
        </Lead>
      </CaseSection>

      <CaseSection label="The problem" title="Waiting, with no idea where the card is." tone="alt">
        <ProblemGrid items={PROBLEMS} />
      </CaseSection>

      <CaseSection label="Process" title="Three banks studied, one sequence derived.">
        <ProcessSteps items={PROCESS} />
      </CaseSection>

      <CaseSection label="The structure" title="Five states, then one of two endings." tone="alt">
        <Body>
          Printing sits between prepared and handed to courier, because in the benchmarking that gap was
          exactly where people lost confidence the card was even moving. From there the path forks. Most
          cards resolve into a plain &ldquo;delivered.&rdquo; When one doesn&apos;t, that fork is a real
          state too: the failed delivery is stated plainly, with why the old card is now deactivated and
          the free reorder right there instead of a call to support. Both endings are shown side by side
          at the top of this page.
        </Body>
      </CaseSection>

      <CaseSection label="Outcome" title="Designed, handed off, waiting on launch.">
        <Body>
          There&apos;s no adoption number to report yet, and I&apos;m not going to make one up. What I can
          point to is the process: the stage sequence came from comparing three banks instead of one
          team&apos;s assumption, and the failed-delivery state went from an unspecced gap to an actual
          part of the flow.
        </Body>
      </CaseSection>

      <Reflection>
        Arriving late to a feature everyone else already has sounds like a disadvantage. It isn&apos;t.
        You get to see where the existing versions go quiet. Every bank I studied tracked a successful
        delivery well; the one that fails is where the design work actually was.
      </Reflection>

      <NextCase currentId="card-delivery-status" />
      <Footer />
    </main>
  );
}
