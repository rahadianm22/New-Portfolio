"use client";

import { useRef } from "react";
import Image from "next/image";
import { Maximize2, X } from "lucide-react";

/**
 * Wraps a framed screen so a reviewer can open it at full resolution.
 * Large flow maps are unreadable at page width; this is the answer to
 * "the flow is too big to see" without cropping the evidence away.
 * Uses the native <dialog>, so Escape and focus trapping come for free.
 */
export function Zoomable({
  src,
  alt,
  width,
  height,
  children,
  className = "",
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  children: React.ReactNode;
  className?: string;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  // Wide diagrams open larger than the viewport so they can be panned;
  // small screens open at their own size instead of being blown up.
  const displayWidth = Math.min(width, 2400);

  return (
    <>
      <button
        type="button"
        onClick={() => dialogRef.current?.showModal()}
        aria-label={`Open full size: ${alt}`}
        className={`group relative block w-full cursor-zoom-in text-left ${className}`}
      >
        {children}
        <span
          aria-hidden="true"
          className="absolute bottom-4 right-4 flex h-11 items-center gap-2 rounded-full bg-white/90 pl-3.5 pr-4 text-sm font-semibold text-ink
                     shadow-soft ring-1 ring-line backdrop-blur transition duration-300 ease-out group-hover:-translate-y-0.5"
        >
          <Maximize2 size={15} strokeWidth={2} />
          Zoom
        </span>
      </button>

      <dialog
        ref={dialogRef}
        onClick={(e) => {
          if (e.target === dialogRef.current) dialogRef.current?.close();
        }}
        className="m-0 h-[100dvh] max-h-none w-screen max-w-none bg-transparent p-0 backdrop:bg-[#12151c]/85 backdrop:backdrop-blur-sm"
      >
        <div
          className="flex h-full w-full items-start justify-center overflow-auto p-4 pt-20 md:p-10 md:pt-20"
          onClick={(e) => {
            if (e.target === e.currentTarget) dialogRef.current?.close();
          }}
        >
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            sizes={`${displayWidth}px`}
            style={{ width: `${displayWidth}px`, maxWidth: displayWidth < 1200 ? "100%" : "none", height: "auto" }}
            className="rounded-md bg-surface shadow-lift"
          />
        </div>
        <button
          type="button"
          onClick={() => dialogRef.current?.close()}
          aria-label="Close full size view"
          className="fixed right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-surface text-ink shadow-lift
                     transition-transform hover:scale-105 active:scale-95"
        >
          <X size={20} strokeWidth={2} />
        </button>
      </dialog>
    </>
  );
}
