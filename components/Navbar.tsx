"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, FileText } from "lucide-react";

/** Labels match the heading of the section each one lands on. */
const NAV_LINKS = [
  { label: "Case Studies", id: "work" },
  { label: "Experience", id: "experience" },
  { label: "Expertise", id: "systems" },
  { label: "Design System", id: "side-project" },
  { label: "Contact", id: "contact" },
];

/**
 * Which homepage section is under the middle of the viewport. An observer,
 * not a scroll listener: it only fires when a section crosses that band.
 */
function useActiveSection(enabled: boolean) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (!enabled) {
      setActive(null);
      return;
    }
    const sections = NAV_LINKS.map((l) => document.getElementById(l.id)).filter(
      (el): el is HTMLElement => el !== null
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [enabled]);

  return active;
}

/**
 * A floating island rather than a bar glued to the top edge. It is always
 * frosted, so it needs no scroll listener to decide when to become visible.
 * Section links sit in the middle; Resume is a page, not a section, so it
 * lives with the actions on the right.
 */
export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const onHome = pathname === "/";
  const onResume = pathname === "/resume";
  const activeSection = useActiveSection(onHome);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1280px)");
    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) setMobileOpen(false);
    };
    desktop.addEventListener("change", onChange);
    return () => desktop.removeEventListener("change", onChange);
  }, []);

  // Escape closes the menu, per R-32.
  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  return (
    <nav className="fixed inset-x-0 top-3 md:top-4 z-50 px-3 md:px-6">
      <div
        className="max-w-page mx-auto flex h-16 items-center justify-between gap-4 rounded-full pl-3 pr-2
                   bg-white/80 backdrop-blur-xl ring-1 ring-line shadow-soft"
      >
        <a
          href="/"
          className="flex items-center gap-2.5 min-h-11 rounded-full pl-1 pr-3 no-underline transition-opacity hover:opacity-70"
        >
          <Image
            src="/android-chrome-512x512.png"
            alt=""
            aria-hidden="true"
            width={32}
            height={32}
            priority
            className="rounded-full"
          />
          <span className="text-[15px] font-semibold text-ink">Rahadian Maulana</span>
        </a>

        <div className="hidden xl:flex items-center gap-1">
          {NAV_LINKS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`/#${item.id}`}
                aria-current={isActive ? "location" : undefined}
                className={`inline-flex items-center min-h-10 px-3.5 rounded-full text-sm font-medium no-underline
                            transition-colors duration-200 hover:bg-surface-alt hover:text-ink
                            ${isActive ? "bg-surface-alt text-ink" : "text-ink-2"}`}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-1.5">
          <Link
            href="/resume"
            aria-current={onResume ? "page" : undefined}
            className={`hidden sm:inline-flex items-center gap-2 min-h-12 px-5 rounded-full text-sm font-semibold no-underline
                        ring-1 transition duration-300 ease-out active:scale-[0.98]
                        ${onResume ? "bg-ink text-surface ring-ink" : "text-ink ring-line-strong hover:bg-surface-alt"}`}
          >
            <FileText size={16} strokeWidth={1.75} />
            Resume
          </Link>

          <a
            href="mailto:rahadianm22@gmail.com"
            className="group hidden sm:inline-flex items-center gap-2 min-h-12 pl-5 pr-1.5 rounded-full text-sm font-semibold
                       bg-accent text-on-accent no-underline transition duration-300 ease-out
                       hover:bg-accent-hover active:scale-[0.98]"
          >
            Email me
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-px">
              <ArrowUpRight size={16} strokeWidth={2} />
            </span>
          </a>

          {/* 48x48 so the only way into navigation on a phone is actually tappable. */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="xl:hidden relative flex items-center justify-center w-12 h-12 rounded-full transition-colors hover:bg-surface-alt"
          >
            <span
              className="absolute block w-5 h-[1.5px] bg-ink transition-transform duration-300 ease-out"
              style={{ transform: mobileOpen ? "rotate(45deg)" : "translateY(-4px)" }}
            />
            <span
              className="absolute block w-5 h-[1.5px] bg-ink transition-transform duration-300 ease-out"
              style={{ transform: mobileOpen ? "rotate(-45deg)" : "translateY(4px)" }}
            />
          </button>
        </div>
      </div>

      {/* `hidden` (not max-height:0) so the menu links leave the tab order
          and the accessibility tree entirely while the menu is closed. */}
      <div
        id="mobile-menu"
        hidden={!mobileOpen}
        className="xl:hidden max-w-page mx-auto mt-2 rounded-lg bg-white/95 backdrop-blur-xl ring-1 ring-line shadow-lift"
      >
        <div className="flex flex-col p-3">
          {NAV_LINKS.map((item) => (
            <a
              key={item.id}
              href={`/#${item.id}`}
              onClick={() => setMobileOpen(false)}
              aria-current={activeSection === item.id ? "location" : undefined}
              className={`flex items-center min-h-12 px-4 rounded-md text-lg font-semibold text-ink no-underline
                          transition-colors hover:bg-surface-alt ${activeSection === item.id ? "bg-surface-alt" : ""}`}
            >
              {item.label}
            </a>
          ))}
          <div className="sm:hidden mt-2 grid grid-cols-2 gap-2">
            <Link
              href="/resume"
              onClick={() => setMobileOpen(false)}
              aria-current={onResume ? "page" : undefined}
              className="flex items-center justify-center gap-2 min-h-12 rounded-full ring-1 ring-line-strong
                         text-ink text-[15px] font-semibold no-underline"
            >
              <FileText size={16} strokeWidth={1.75} />
              Resume
            </Link>
            <a
              href="mailto:rahadianm22@gmail.com"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 min-h-12 rounded-full
                         bg-accent text-on-accent text-[15px] font-semibold no-underline"
            >
              Email me
              <ArrowUpRight size={16} strokeWidth={2} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
