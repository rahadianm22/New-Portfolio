"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

/**
 * Keeps the studies without a cover out of the first read of Selected Work.
 * The cards are server-rendered children; this only toggles them. Closed
 * uses `hidden`, so their links leave the tab order too (DESIGN.md rule 3).
 */
export function MoreWork({ count, children }: { count: number; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div id="more-work" hidden={!open} className="mt-14">
        {children}
      </div>

      <div className="mt-block flex justify-center">
        <button
          type="button"
          aria-expanded={open}
          aria-controls="more-work"
          onClick={() => setOpen((prev) => !prev)}
          className="group inline-flex items-center gap-3 min-h-12 pl-6 pr-2 rounded-full text-[15px] font-semibold
                     text-ink ring-1 ring-line-strong transition duration-300 ease-out
                     hover:bg-surface-alt active:scale-[0.98]"
        >
          {open ? "Show less" : `See ${count} more case studies`}
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-surface-alt text-ink transition-colors duration-300 group-hover:bg-surface">
            <ChevronDown
              size={16}
              strokeWidth={2}
              className={`transition-transform duration-300 ease-out ${open ? "rotate-180" : ""}`}
            />
          </span>
        </button>
      </div>
    </>
  );
}
