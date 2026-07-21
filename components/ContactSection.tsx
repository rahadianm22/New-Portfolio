"use client";

import { useState } from "react";
import { SectionLabel } from "./ExperienceSection";

interface SecondaryLink {
  category: string;
  handle: string;
  label: string;
  href: string;
}

const primaryEmail = "rahadianm22@gmail.com";

const secondaryLinks: SecondaryLink[] = [
  {
    category: "Professional",
    handle: "/in/rahadianm22",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rahadianm22/",
  },
  {
    category: "Visual",
    handle: "/rahadianm22",
    label: "Dribbble",
    href: "https://dribbble.com/rahadianm22",
  },
  {
    category: "Showcase",
    handle: "own.page/rahadianm22",
    label: "Portfolio",
    href: "https://rahadianm22.vercel.app/",
  },
];

export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ backgroundColor: "#EDEFF5" }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative">
        {/* Top row: label + status */}
        <div className="flex items-center justify-between mb-16">
          <SectionLabel label="// Contact" />
          <div className="hidden md:flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#22C55E" }} />
            <span
              className="text-xs tracking-wider"
              style={{ fontFamily: "'Inter', sans-serif", color: "#3D4557", fontSize: "12px" }}
            >
              Open for projects
            </span>
          </div>
        </div>

        {/* Headline with left bracket accent */}
        <div className="mb-16">
          <h2
            className="text-4xl md:text-5xl"
            style={{
              fontFamily: "'Urbanist', sans-serif",
              fontWeight: 700,
              color: "#12151C",
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
            }}
          >
            Let's build something precise.
            <br />
            <br />
          </h2>
        </div>

        {/* Primary contact card */}
        <PrimaryContactCard email={primaryEmail} />

        {/* Secondary links grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 mt-6">
          {secondaryLinks.map((link, i) => (
            <SecondaryLinkCard key={link.label} link={link} isLast={i === secondaryLinks.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PrimaryContactCard({ email }: { email: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={`mailto:${email}`}
      className="relative block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ textDecoration: "none" }}
    >
      <div
        className="relative px-6 md:px-8 py-6 md:py-8"
        style={{
          border: "1.5px dashed rgba(18, 21, 28, 0.15)",
          backgroundColor: "#FFFFFF",
          transition: "border-color 0.15s ease",
          borderColor: hovered ? "rgba(43, 78, 255, 0.5)" : "rgba(18, 21, 28, 0.15)",
        }}
      >
        {/* Corner marks */}
        <span className="absolute -top-px -left-px w-3 h-3 border-t-2 border-l-2" style={{ borderColor: hovered ? "#2B4EFF" : "#12151C", transition: "border-color 0.15s ease" }} />
        <span className="absolute -top-px -right-px w-3 h-3 border-t-2 border-r-2" style={{ borderColor: hovered ? "#2B4EFF" : "#12151C", transition: "border-color 0.15s ease" }} />
        <span className="absolute -bottom-px -left-px w-3 h-3 border-b-2 border-l-2" style={{ borderColor: hovered ? "#2B4EFF" : "#12151C", transition: "border-color 0.15s ease" }} />
        <span className="absolute -bottom-px -right-px w-3 h-3 border-b-2 border-r-2" style={{ borderColor: hovered ? "#2B4EFF" : "#12151C", transition: "border-color 0.15s ease" }} />

        <span
          className="text-xs tracking-widest uppercase block mb-3"
          style={{ fontFamily: "'Urbanist', sans-serif", color: "#9AA1B1", fontSize: "10px", letterSpacing: "0.12em" }}
        >
          // Primary — Channel: Email
        </span>

        <div className="flex items-center justify-between gap-4">
          <span
            className="text-2xl md:text-4xl break-all"
            style={{
              fontFamily: "'Urbanist', sans-serif",
              fontWeight: 700,
              color: "#12151C",
              letterSpacing: "-0.01em",
            }}
          >
            {email}
          </span>
          <span
            className="flex-shrink-0 w-11 h-11 md:w-12 md:h-12 flex items-center justify-center"
            style={{
              backgroundColor: hovered ? "#2B4EFF" : "rgba(18, 21, 28, 0.06)",
              transition: "background-color 0.15s ease",
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 14 14"
              fill="none"
              style={{ color: hovered ? "#FFFFFF" : "#12151C", transition: "color 0.15s ease" }}
            >
              <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </div>

      {/* Bottom annotation */}
      <div className="flex items-center justify-between mt-2 px-1">
        <span
          className="text-xs"
          style={{ fontFamily: "'Urbanist', sans-serif", color: "#9AA1B1", fontSize: "10px" }}
        >
          response time: &lt; 24h — token: --contact-primary
        </span>
        <span
          className="text-xs hidden md:block"
          style={{ fontFamily: "'Urbanist', sans-serif", color: "#9AA1B1", fontSize: "10px" }}
        >
          click to open mail client
        </span>
      </div>
    </a>
  );
}

function SecondaryLinkCard({ link, isLast }: { link: SecondaryLink; isLast: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className="px-6 py-5 flex flex-col gap-2"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        border: "1px solid rgba(18, 21, 28, 0.1)",
        borderColor: hovered ? "rgba(43, 78, 255, 0.35)" : "rgba(18, 21, 28, 0.1)",
        marginLeft: isLast ? undefined : "-1px",
        backgroundColor: "#FFFFFF",
        transition: "border-color 0.15s ease",
        textDecoration: "none",
      }}
    >
      <div className="flex items-center justify-between">
        <span
          className="text-xs tracking-widest uppercase"
          style={{
            fontFamily: "'Urbanist', sans-serif",
            color: hovered ? "#2B4EFF" : "#9AA1B1",
            fontSize: "10px",
            letterSpacing: "0.1em",
            transition: "color 0.15s ease",
          }}
        >
          {link.category}
        </span>
        <span
          className="text-xs"
          style={{ fontFamily: "'Urbanist', sans-serif", color: "#9AA1B1", fontSize: "10px" }}
        >
          {link.handle}
        </span>
      </div>
      <div className="flex items-center justify-between">
        <span
          className="text-base"
          style={{
            fontFamily: "'Urbanist', sans-serif",
            fontWeight: 700,
            color: "#12151C",
          }}
        >
          {link.label}
        </span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          style={{
            color: hovered ? "#2B4EFF" : "#6B7280",
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