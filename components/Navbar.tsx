"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Experience", href: "/#experience" },
  { label: "Skills", href: "/#systems" },
  { label: "Design Systems", href: "/#side-project" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Tutup menu mobile otomatis kalau layar di-resize ke desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(237, 239, 245, 0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(43, 78, 255, 0.1)" : "1px solid transparent",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 h-14 flex items-center justify-between">
        {/* Logo + Nama — Klikable ke Home */}
        <a
          href="/"
          className="flex items-center gap-2.5 transition-opacity duration-150 hover:opacity-70"
          style={{ textDecoration: "none" }}
        >
          <Image
            src="/android-chrome-512x512.png"
            alt="Rahadian Maulana"
            width={28}
            height={28}
            priority
          />
          <span
            className="text-sm font-semibold tracking-wide"
            style={{
              fontFamily: "'Urbanist', sans-serif",
              color: "#12151C",
              letterSpacing: "0.02em",
            }}
          >
            Rahadianm22
          </span>
        </a>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs tracking-widest uppercase transition-colors duration-150 hover:opacity-60"
              style={{
                fontFamily: "'Urbanist', sans-serif",
                color: "#12151C",
                textDecoration: "none",
                letterSpacing: "0.1em",
              }}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-3">
          <a
             href="https://mail.google.com/mail/?view=cm&fs=1&to=rahadianm22@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            className="text-xs px-4 py-2 rounded-md transition-all duration-150 hover:bg-[rgba(43,78,255,0.08)]"
            style={{
              fontFamily: "'Urbanist', sans-serif",
              backgroundColor: "transparent",
              border: "1px solid #2B4EFF",
              color: "#2B4EFF",
              textDecoration: "none",
              letterSpacing: "0.08em",
            }}
          >
            Let's talk
          </a>

          {/* Hamburger — hanya muncul di mobile */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="md:hidden flex flex-col items-center justify-center gap-[5px] w-8 h-8"
          >
            <span
              className="block w-5 h-[1.5px] transition-all duration-200"
              style={{
                backgroundColor: "#12151C",
                transform: mobileOpen ? "translateY(6.5px) rotate(45deg)" : "none",
              }}
            />
            <span
              className="block w-5 h-[1.5px] transition-all duration-200"
              style={{
                backgroundColor: "#12151C",
                opacity: mobileOpen ? 0 : 1,
              }}
            />
            <span
              className="block w-5 h-[1.5px] transition-all duration-200"
              style={{
                backgroundColor: "#12151C",
                transform: mobileOpen ? "translateY(-6.5px) rotate(-45deg)" : "none",
              }}
            />
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: mobileOpen ? "320px" : "0px",
          backgroundColor: "rgba(237, 239, 245, 0.98)",
          backdropFilter: "blur(12px)",
          borderBottom: mobileOpen ? "1px solid rgba(43, 78, 255, 0.1)" : "1px solid transparent",
        }}
      >
        <div className="flex flex-col px-6 py-4 gap-4">
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="text-xs tracking-widest uppercase transition-colors duration-150 hover:opacity-60"
              style={{
                fontFamily: "'Urbanist', sans-serif",
                color: "#12151C",
                textDecoration: "none",
                letterSpacing: "0.1em",
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}