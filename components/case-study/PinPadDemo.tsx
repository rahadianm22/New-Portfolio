"use client";

import { useEffect, useRef, useState } from "react";
import { KeyRound, Delete, Play } from "lucide-react";

/*
 * A working recreation of BSI's Konfirmasi PIN screen, before and after,
 * so the leak can be felt rather than described. The colours are BSI's,
 * scoped to this component; they are the client's UI, not the site's palette.
 */
const BSI = {
  "--bsi-teal": "#00b4ab",
  "--bsi-key": "#eef7f6",
  "--bsi-dot": "#d9dde3",
  "--bsi-orange": "#e3962b",
} as React.CSSProperties;

const KEYS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "", "0", "del"];
const SAMPLE = ["4", "7", "1", "9", "0", "3"];

type Variant = "before" | "after";

function Phone({
  variant,
  entered,
  pressed,
  onKey,
}: {
  variant: Variant;
  entered: number;
  pressed: string | null;
  onKey: (key: string) => void;
}) {
  const leaks = variant === "before";
  return (
    <div className="mx-auto w-full max-w-[290px] rounded-[2.2rem] bg-ink p-2 shadow-lift">
      <div className="rounded-[1.8rem] bg-surface px-5 pb-6 pt-8">
        <div className="flex flex-col items-center text-center">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--bsi-teal)] text-white">
            <KeyRound size={20} strokeWidth={2} aria-hidden="true" />
          </span>
          <p className="mt-4 text-[15px] font-bold text-ink">Konfirmasi PIN</p>
          <p className="mt-1 text-xs text-ink-3">Masukkan 6-digit PIN Transaksi kamu</p>

          <div className="mt-6 flex gap-2.5" aria-label={`${entered} of 6 digits entered`}>
            {Array.from({ length: 6 }, (_, i) => (
              <span
                key={i}
                className={`h-2.5 w-2.5 rounded-full transition-colors duration-150 ${
                  i < entered ? "bg-[var(--bsi-teal)]" : "bg-[var(--bsi-dot)]"
                }`}
              />
            ))}
          </div>
          <p className="mt-5 text-xs font-semibold text-[var(--bsi-orange)]">Lupa PIN?</p>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-x-4 gap-y-3">
          {KEYS.map((key, i) =>
            key === "" ? (
              <span key={i} />
            ) : (
              <button
                key={i}
                type="button"
                onClick={() => onKey(key)}
                aria-label={key === "del" ? "Delete digit" : `Digit ${key}`}
                className={`mx-auto flex h-12 w-12 items-center justify-center rounded-full text-base font-semibold
                            transition-colors duration-100 ${
                              leaks && pressed === key
                                ? "bg-[var(--bsi-teal)] text-white"
                                : "bg-[var(--bsi-key)] text-ink"
                            }`}
              >
                {key === "del" ? <Delete size={18} strokeWidth={1.75} aria-hidden="true" /> : key}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
}

function usePad() {
  const [entered, setEntered] = useState(0);
  const [pressed, setPressed] = useState<string | null>(null);
  const [seen, setSeen] = useState<string[]>([]);
  const timers = useRef<number[]>([]);

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  // A full PIN clears itself shortly after, ready for another go.
  useEffect(() => {
    if (entered < 6) return;
    const id = window.setTimeout(() => {
      setEntered(0);
      setSeen([]);
    }, 1600);
    return () => clearTimeout(id);
  }, [entered]);

  function key(k: string) {
    setPressed(k);
    timers.current.push(window.setTimeout(() => setPressed(null), 220));
    if (k === "del") {
      setEntered((n) => Math.max(0, n - 1));
      setSeen((s) => s.slice(0, -1));
      return;
    }
    setEntered((n) => Math.min(6, n + 1));
    setSeen((s) => (s.length < 6 ? [...s, k] : s));
  }

  function reset() {
    setEntered(0);
    setSeen([]);
    setPressed(null);
  }

  return { entered, pressed, seen, key, reset };
}

export function PinPadDemo() {
  const before = usePad();
  const after = usePad();
  const [playing, setPlaying] = useState(false);
  const timers = useRef<number[]>([]);

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  function playSample() {
    before.reset();
    after.reset();
    setPlaying(true);
    SAMPLE.forEach((digit, i) => {
      timers.current.push(
        window.setTimeout(() => {
          before.key(digit);
          after.key(digit);
          if (i === SAMPLE.length - 1) setPlaying(false);
        }, 450 + i * 650)
      );
    });
  }

  const columns: { variant: Variant; pad: ReturnType<typeof usePad>; title: string }[] = [
    { variant: "before", pad: before, title: "Before: each key lights up" },
    { variant: "after", pad: after, title: "After: only the dots move" },
  ];

  return (
    <figure style={BSI}>
      <div className="rounded-lg bg-tint-blue px-4 py-8 md:px-10 md:py-12">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="max-w-[46ch] text-[15px] leading-relaxed text-ink-2">
            Tap the keys on either phone, or play a sample PIN on both at once. Watch what someone standing
            behind you would see.
          </p>
          <button
            type="button"
            onClick={playSample}
            disabled={playing}
            className="inline-flex min-h-12 items-center gap-2 rounded-full bg-ink px-5 text-[15px] font-semibold text-surface
                       transition-opacity duration-200 hover:opacity-85 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
          >
            <Play size={16} strokeWidth={2} aria-hidden="true" />
            {playing ? "Typing…" : "Play a sample PIN"}
          </button>
        </div>

        <div className="mt-8 grid gap-10 md:grid-cols-2">
          {columns.map(({ variant, pad, title }) => (
            <div key={variant}>
              <p
                className={`mb-5 text-center text-sm font-semibold ${
                  variant === "before" ? "text-status-warn" : "text-ink"
                }`}
              >
                {title}
              </p>
              <Phone variant={variant} entered={pad.entered} pressed={pad.pressed} onKey={pad.key} />
              <div className="mx-auto mt-5 max-w-[290px] rounded-md bg-surface px-4 py-3 ring-1 ring-line" aria-live="polite">
                <p className="text-xs text-ink-3">Seen from over your shoulder</p>
                <p className="mt-1 min-h-6 text-base font-semibold tabular-nums tracking-[0.2em] text-ink">
                  {variant === "before"
                    ? pad.seen.join(" ") || <span className="tracking-normal text-ink-3">nothing yet</span>
                    : pad.entered > 0
                      ? <span className="tracking-normal">{pad.entered} digits, which ones unknown</span>
                      : <span className="tracking-normal text-ink-3">nothing yet</span>}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <figcaption className="mt-4 max-w-[70ch] px-1 text-sm leading-relaxed text-ink-3">
        A working recreation of the Konfirmasi PIN screen in BSI&apos;s own colours, built for this page. The
        sample PIN is made up.
      </figcaption>
    </figure>
  );
}
