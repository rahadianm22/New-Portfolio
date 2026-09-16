"use client";

import { useState } from "react";
import { SectionLabel } from "./ExperienceSection";
import { HeadingRise } from "./HeadingRise";

interface SecondaryLink {
  handle: string;
  label: string;
  href: string;
}

const primaryEmail = "rahadianm22@gmail.com";

const secondaryLinks: SecondaryLink[] = [
  {
    handle: "/rahadianm22",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rahadianm22/",
  },
  {
    handle: "/rahadianm22",
    label: "Dribbble",
    href: "https://dribbble.com/rahadianm22",
  },
  {
    handle: "/rahadianonly",
    label: "Instagram",
    href: "https://www.instagram.com/rahadianonly/",
  },
  {
    handle: "/@Rahadianm22",
    label: "Medium",
    href: "https://medium.com/@Rahadianm22",
  },
  {
    handle: "/case-studies",
    label: "Case Studies",
    href: "https://rahadianm22.my.id/case-studies",
  },
  {
    handle: "/resume",
    label: "Resume",
    href: "https://rahadianm22.my.id/resume",
  },
];

export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ backgroundColor: "#F5F6FA" }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative">
        {/* Top row: label + status */}
        <div className="flex items-center gap-3">
          <div className="flex-1">
            <SectionLabel label="// Contact" />
          </div>
          <div className="hidden md:flex items-center gap-2 flex-shrink-0">
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#22C55E" }} />
            <span
              className="text-xs tracking-wider whitespace-nowrap"
              style={{ fontFamily: "'Inter', sans-serif", color: "#3D4557", fontSize: "12px" }}
            >
              Open to remote roles
            </span>
          </div>
        </div>

        {/* Headline */}
        <HeadingRise>
          <div className="mt-6 mb-10">
            <h2
              className="text-3xl md:text-4xl"
              style={{
                fontFamily: "'Urbanist', sans-serif",
                fontWeight: 700,
                color: "#12151C",
                letterSpacing: "-0.02em",
              }}
            >
              Let&apos;s build something precise.
            </h2>
          </div>
        </HeadingRise>

        {/* Primary contact card */}
        <PrimaryContactCard email={primaryEmail} />

        {/* Secondary links grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mt-6">
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
      className="press relative block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ textDecoration: "none" }}
    >
      <div
        className="relative px-6 md:px-8 py-6 md:py-8"
        style={{
          border: "1.5px dashed rgba(18, 21, 28, 0.15)",
          backgroundColor: "#FFFFFF",
          transform: hovered ? "translateY(-2px)" : "none",
          boxShadow: hovered ? "0 10px 30px rgba(18, 21, 28, 0.08)" : "0 0 0 rgba(0,0,0,0)",
          transition: "border-color 0.2s cubic-bezier(0.22, 1, 0.36, 1), transform 0.3s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
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
          // Email
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
          I usually reply within a day.
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
      className="press px-6 py-5 flex flex-col gap-2"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        border: "1px solid rgba(18, 21, 28, 0.1)",
        borderColor: hovered ? "rgba(43, 78, 255, 0.35)" : "rgba(18, 21, 28, 0.1)",
        marginLeft: isLast ? undefined : "-1px",
        backgroundColor: hovered ? "#FAFBFF" : "#FFFFFF",
        position: "relative",
        zIndex: hovered ? 1 : 0,
        transition: "border-color 0.2s cubic-bezier(0.22, 1, 0.36, 1), background-color 0.2s cubic-bezier(0.22, 1, 0.36, 1)",
        textDecoration: "none",
      }}
    >
      <span
        className="text-xs"
        style={{
          fontFamily: "'Urbanist', sans-serif",
          color: hovered ? "#2B4EFF" : "#9AA1B1",
          fontSize: "10px",
          transition: "color 0.15s ease",
        }}
      >
        {link.handle}
      </span>
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