"use client";

import { useState } from "react";
import { SectionLabel } from "./ExperienceSection";

interface ContactLink {
  label: string;
  value: string;
  href: string;
  annotation: string;
}

const links: ContactLink[] = [
  {
    label: "Email",
    value: "Rahadianm22@gmail.com",
    href: "mailto:rahadianm22@gmail.com",
    annotation: "channel: direct",
  },
  /*{
    label: "Portfolio",
    value: "Rahadianm22",
    href: "https://rahadianm22.vercel.app/",
    annotation: "type: showcase",
  },*/
  {
    label: "LinkedIn",
    value: "Rahadianm22",
    href: "https://www.linkedin.com/in/rahadianm22/",
    annotation: "network: professional",
  },
  {
    label: "Dribbble",
    value: "Rahadianm22",
    href: "https://dribbble.com/rahadianm22",
    annotation: "type: visual",
  },
];

export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-24 md:py-32"
      style={{ backgroundColor: "#EDEFF5" }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <SectionLabel label="// Contact" />

        <div className="mt-6 mb-16">
          <h2
            className="text-4xl md:text-5xl mb-4"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              color: "#12151C",
              letterSpacing: "-0.02em",
            }}
          >
            Let's design the next system.
          </h2>
          <p
            className="text-base max-w-lg"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "#6B7280",
              lineHeight: 1.7,
            }}
          >
            Open for project collaborations, full-time roles, and design system consulting di bidang produk finansial dan platform internal.
          </p>
        </div>

        {/* Contact links */}
        <div className="max-w-2xl">
          {links.map((link, i) => (
            <ContactRow key={link.label} link={link} isLast={i === links.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactRow({ link, isLast }: { link: ContactLink; isLast: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={link.href}
      target={link.href.startsWith("mailto") ? undefined : "_blank"}
      rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
      className="flex items-center justify-between gap-4 py-4 px-5 transition-all duration-150 group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderTop: "1px solid rgba(18, 21, 28, 0.1)",
        borderBottom: isLast ? "1px solid rgba(18, 21, 28, 0.1)" : "none",
        backgroundColor: hovered ? "#12151C" : "transparent",
        transition: "background-color 0.15s ease",
        textDecoration: "none",
      }}
    >
      <div className="flex items-center gap-4">
        <span
          className="text-xs tracking-widest uppercase w-20 flex-shrink-0"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            color: hovered ? "rgba(255,255,255,0.5)" : "#6B7280",
            fontSize: "10px",
            letterSpacing: "0.12em",
            transition: "color 0.15s ease",
          }}
        >
          {link.label}
        </span>
        <span
          className="text-sm"
          style={{
            fontFamily: "'Inter', sans-serif",
            color: hovered ? "#FFFFFF" : "#12151C",
            fontWeight: 500,
            transition: "color 0.15s ease",
          }}
        >
          {link.value}
        </span>
      </div>

      <div className="flex items-center gap-3">
        <span
          className="text-xs hidden md:block"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            color: hovered ? "rgba(43,78,255,0.6)" : "rgba(43, 78, 255, 0.35)",
            fontSize: "10px",
            transition: "color 0.15s ease",
          }}
        >
          {link.annotation}
        </span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          style={{
            color: hovered ? "#FFFFFF" : "#6B7280",
            transition: "color 0.15s ease, transform 0.15s ease",
            transform: hovered ? "translate(2px, -2px)" : "none",
          }}
        >
          <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </a>
  );
}
