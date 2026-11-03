"use client";

import { useState } from "react";
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

type Stage = { icon: LucideIcon; label: string; detail: string };

const STAGES: Stage[] = [
  { icon: Package, label: "Card being prepared", detail: "Request confirmed, card queued for production" },
  { icon: Printer, label: "Card being printed", detail: "Physical card produced at the bank" },
  { icon: Handshake, label: "Handed to courier", detail: "Waiting for pickup" },
  { icon: Truck, label: "In transit", detail: "Courier and tracking number surfaced in-app" },
];

export type Outcome = "delivered" | "failed";

/**
 * The state sequence redrawn as an unbranded tracker. It shows the
 * structure the case study describes, not the client's actual screens.
 * `reached` counts the stages arrived at, the current one included; one
 * past the last stage means the delivery has ended, one way or the other.
 */
export function Tracker({ outcome, reached = STAGES.length + 1 }: { outcome: Outcome; reached?: number }) {
  const failed = outcome === "failed";
  const ended = reached > STAGES.length;
  return (
    <div className="rounded-[2.4rem] bg-ink p-2 shadow-lift">
      <div className="rounded-[1.9rem] bg-surface px-5 pb-6 pt-8">
        <p className="text-center text-sm font-semibold text-ink">Card delivery</p>

        <ol className="mt-6">
          {STAGES.map(({ icon: Icon, label, detail }, i) => {
            const done = i < reached;
            const current = !ended && i === reached - 1;
            return (
              <li key={label} className="flex gap-3">
                <div className="flex flex-col items-center">
                  <span
                    className={`flex h-8 w-8 items-center justify-center rounded-full transition-colors duration-300 ${
                      current ? "bg-accent text-on-accent" : done ? "bg-tint-blue text-accent" : "bg-surface-alt text-ink-3"
                    }`}
                  >
                    <Icon size={15} strokeWidth={2} />
                  </span>
                  <span className={`my-1 w-px flex-1 ${done ? "bg-accent" : "bg-line-strong"}`} />
                </div>
                <div className="pb-4">
                  <p className={`text-[13px] font-semibold leading-tight ${done ? "text-ink" : "text-ink-3"}`}>
                    {label}
                    {current && <span className="ml-2 text-xs font-medium text-accent">Now</span>}
                  </p>
                  <p className="mt-0.5 text-xs leading-snug text-ink-3">{detail}</p>
                </div>
              </li>
            );
          })}
          <li className="flex gap-3">
            <span
              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                !ended ? "bg-surface-alt text-ink-3" : failed ? "bg-status-warn-bg text-status-warn" : "bg-accent text-on-accent"
              }`}
            >
              {failed && ended ? <CircleX size={16} strokeWidth={2} /> : <CircleCheck size={16} strokeWidth={2} />}
            </span>
            <div>
              <p
                className={`text-[13px] font-semibold leading-tight ${
                  !ended ? "text-ink-3" : failed ? "text-status-warn" : "text-ink"
                }`}
              >
                {ended && failed ? "Delivery failed" : "Delivered"}
              </p>
              <p className="mt-0.5 text-xs leading-snug text-ink-3">
                {!ended
                  ? "Not yet"
                  : failed
                    ? "Card returned to the bank. Your old card is deactivated for security."
                    : "Card received, ready to activate"}
              </p>
            </div>
          </li>
        </ol>

        {ended && (
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
        )}
      </div>
    </div>
  );
}

const STEPS: { key: string; label: string; reached: number; outcome: Outcome; note: string }[] = [
  { key: "prepared", label: "Prepared", reached: 1, outcome: "delivered", note: "The request is confirmed. Showing it at once tells the customer the order went through, which is the first worry after tapping order." },
  { key: "printed", label: "Printed", reached: 2, outcome: "delivered", note: "Printing sits between prepared and handed to courier, because in the benchmarking that gap was where people lost confidence the card was moving at all." },
  { key: "courier", label: "With courier", reached: 3, outcome: "delivered", note: "Handed over and waiting for pickup: the card has left the bank, even if it has not moved yet." },
  { key: "transit", label: "In transit", reached: 4, outcome: "delivered", note: "On the road. The courier and tracking number appear here, so the customer can follow it without calling anyone." },
  { key: "delivered", label: "Delivered", reached: 5, outcome: "delivered", note: "The plain ending most cards reach, with the next step, activation, right under it." },
  { key: "failed", label: "Failed", reached: 5, outcome: "failed", note: "The ending most banks leave silent. It says what happened, that the old card is deactivated for security, and puts the free reorder in the same view instead of sending people to support." },
];

/** Step through every state of the tracker, including the failed ending. */
export function DeliveryExplorer() {
  const [active, setActive] = useState(STEPS.length - 1);
  const step = STEPS[active];

  return (
    <figure>
      <div className="rounded-lg bg-tint-blue px-4 py-8 md:px-10 md:py-12">
        <div role="tablist" aria-label="Delivery states" className="flex flex-wrap gap-2">
          {STEPS.map((s, i) => (
            <button
              key={s.key}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-controls="delivery-state"
              onClick={() => setActive(i)}
              className={`min-h-11 rounded-full px-4 text-sm font-semibold transition-colors duration-200 ${
                i === active
                  ? s.outcome === "failed"
                    ? "bg-status-warn text-on-accent"
                    : "bg-ink text-surface"
                  : "bg-surface text-ink-2 ring-1 ring-line hover:text-ink"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        <div id="delivery-state" role="tabpanel" className="mt-8 grid items-center gap-8 md:grid-cols-12">
          <div className="mx-auto w-full max-w-[300px] md:col-span-5">
            <Tracker outcome={step.outcome} reached={step.reached} />
          </div>
          <div className="md:col-span-7">
            <p className="text-sm text-ink-3">
              State {active + 1} of {STEPS.length}
            </p>
            <p className="mt-2 text-2xl md:text-3xl font-bold leading-tight tracking-[-0.02em] text-ink">{step.label}</p>
            <p className="mt-4 max-w-[52ch] text-base leading-relaxed text-ink-2">{step.note}</p>
          </div>
        </div>
      </div>
      <figcaption className="mt-4 max-w-[70ch] px-1 text-sm leading-relaxed text-ink-3">
        Every state of the tracker, redrawn without client branding. Pick one to see what the customer sees.
      </figcaption>
    </figure>
  );
}
