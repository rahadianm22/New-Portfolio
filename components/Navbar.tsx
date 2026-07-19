
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
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
              fontFamily: "'JetBrains Mono', monospace",
              color: "#12151C",
              letterSpacing: "0.02em",
            }}
          >
            Rahadianm22
          </span>
        </a>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "Experience", href: "#experience" },
            { label: "Systems", href: "#systems" },
            { label: "Side Project", href: "#side-project" },
            { label: "Contact", href: "#contact" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs tracking-widest uppercase transition-colors duration-150 hover:opacity-60"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                color: "#12151C",
                textDecoration: "none",
                letterSpacing: "0.1em",
              }}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="mailto:rahadianm22@gmail.com"
          className="text-xs px-4 py-2 transition-all duration-150 hover:opacity-80"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            backgroundColor: "#2B4EFF",
            color: "#FFFFFF",
            textDecoration: "none",
            letterSpacing: "0.08em",
          }}
        >
          Let's talk
        </a>
      </div>
    </nav>
  );
}
