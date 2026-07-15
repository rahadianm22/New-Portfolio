"use client";

import { useState, useEffect } from "react";

interface SubProject {
  title: string;
  bullets: string[];
  tech: string[];
}

interface ExperienceEntry {
  docId: string;
  role: string;
  company: string;
  period: string;
  duration: string;
  tags: string[];
  // Simple entries just use `highlights`. Roles with multiple concurrent
  // projects (like BRI) use `subProjects` instead — the modal renders
  // each as its own block, matching how it's laid out on the CV.
  highlights?: string[];
  subProjects?: SubProject[];
}

const experiences: ExperienceEntry[] = [
  {
    docId: "EXP.01",
    role: "Senior Product Designer",
    company: "Bank Rakyat Indonesia (BRI)",
    period: "Dec 2023 – Present",
    duration: "2.5+ yr",
    highlights: [
      "End-to-end loan endorsement & administration: Architected user flows and interfaces across web and mobile for three internal role groups — initiators (Pemrakarsa), approvers (Pemutus: CBM, PCP, Pinca, RCBH), and admin officers (Petugas ADK) — covering loan portfolio management, disbursement status tracking (Status 105), and Early Warning System (EWS) states.",
      "Briguna digital lending core: Led UX research and interface design for cross-bank installment autofill (Crystal feature), customer whitelist management, national quota administration (Maker/Signer roles), and external institution flagging workflows (e.g. Taspen).",
      "Advanced financial analytics tools: Designed complex data-visualisation dashboards and customer visit reporting tools with download/upload pipelines for balance sheet and profit-and-loss data, supporting credit analysis and RIPLAY summary previews for approvers on web and tablet.",
      "Funnel monitoring & marketing tools: Optimised real-time application funnel monitoring dashboards (process and detail views) and promotional parameter management panels (Admin Gimmick Maker/Signer) to improve field-sales conversion and efficiency.",
      "Design system scaling: Spearheaded scaling of the enterprise design system using variable design tokens, standardising design-to-development handover across all BRISPOT modules.",
    ],
    tags: ["Figma", "Design System", "FigJam", "Design Variable Tokens", "Notion", "Auto Layout"],
  },
  {
    docId: "EXP.02",
    role: "Product Designer",
    company: "Bank Syariah Indonesia (BSI)",
    period: "Agu 2022 — Jul 2023",
    duration: "1 yr",
    highlights: [
      "Organised the design system library by epic in Figma, and built/documented reusable components (buttons, input fields, navigation) using Auto Layout to speed up design-to-development handoff.",
      "Designed user flows for new mobile banking features, aligning with existing app behaviour and running user research to validate feature impact before build.",
      "Maintained design consistency in line with BSI's UI/UX standards across product features, and presented design rationale and prototypes to internal stakeholders.",
      "Prototyped and pitched new product concepts in ideation sessions with product owners and business analysts, iterating based on stakeholder feedback."
    ],
    tags: ["Mobile Banking", "Design System", "User Research"],
  },
  {
    docId: "EXP.03",
    role: "UI/UX Designer",
    company: "Infosys Solusi Terpadu",
    period: "Mar 2021 — Mei 2022",
    duration: "1+ yr",
    highlights: [
      "Built the design system and documentation for BTN's mobile and website platforms, benchmarking against competitor mobile banking UX patterns.",
      "Designed a table-heavy dashboard UI for CIMB's ATM management system, covering financial and maintenance modules end-to-end.",
      "Created custom 3D icons (Blender) and adapted the BTN design system for BTN Syariah's distinct branding and key app screens.",
      "Managed the shared Figma Team Library across projects, and built interactive prototypes for client and stakeholder walkthroughs."
    ],
    tags: ["Banking", "Dashboard", "3D Illustration"],
  },
  {
    docId: "EXP.04",
    role: "UI/UX Designer",
    company: "Malline Indonesia",
    period: "Sep 2019 — Feb 2021",
    duration: "2 yr",
    highlights: [
      "Designed UI concepts for Home, Category, Product, Cart, and Order pages, plus the admin dashboard from wireframe through WordPress implementation.",
      "Conducted user research, surveys, and usability testing to inform iteration; built a consistent visual system across the platform.",
    ],
    tags: ["E-commerce", "Wordpress", "Wireframing"],
  },
];
export function ExperienceSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="experience"
      className="py-24 md:py-32"
      style={{ backgroundColor: "#EDEFF5" }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section label */}
        <SectionLabel label="// Experience" />

        <div className="mt-6 mb-16">
          <h2
            className="text-4xl md:text-5xl"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              color: "#12151C",
              letterSpacing: "-0.02em",
            }}
          >
            Selected works & experiences.
          </h2>
        </div>

        {/* Experience list */}
        <div className="space-y-0">
          {experiences.map((entry, i) => (
            <ExperienceRow
              key={entry.docId}
              entry={entry}
              isLast={i === experiences.length - 1}
              onOpen={() => setOpenIndex(i)}
            />
          ))}
        </div>
      </div>

      {/* Detail modal */}
      {openIndex !== null && (
        <ExperienceModal entry={experiences[openIndex]} onClose={() => setOpenIndex(null)} />
      )}
    </section>
  );
}

function ExperienceRow({
  entry,
  isLast,
  onOpen,
}: {
  entry: ExperienceEntry;
  isLast: boolean;
  onOpen: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderTop: "1px solid rgba(18, 21, 28, 0.1)",
        borderBottom: isLast ? "1px solid rgba(18, 21, 28, 0.1)" : "none",
        borderLeft: hovered ? "3px solid #FF4B33" : "3px solid transparent",
        backgroundColor: hovered ? "rgba(255,255,255,0.7)" : "transparent",
        transition: "border-color 0.2s ease, background-color 0.2s ease",
      }}
    >
      <div className="py-8 px-6 md:px-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          {/* Left: doc ID + company + role + period */}
          <div>
            <span
              className="block text-sm tracking-widest mb-3"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                color: "#2B4EFF",
                fontWeight: 600,
              }}
            >
              {entry.docId}
            </span>
            <h3
              className="text-xl mb-0.5"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                color: "#12151C",
                letterSpacing: "-0.01em",
              }}
            >
              {entry.company}
            </h3>
            <p
              className="text-sm mb-1"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "#6B7280",
                fontWeight: 500,
              }}
            >
              {entry.role}
            </p>
            <span
              className="text-xs tracking-wider"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                color: "#6B7280",
              }}
            >
              {entry.period}
            </span>

            <div className="flex flex-wrap items-center gap-2 mt-4">
              <span
                className="text-xs px-2 py-0.5"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  color: "#FF4B33",
                  backgroundColor: "rgba(255, 75, 51, 0.1)",
                  border: "1px solid rgba(255, 75, 51, 0.2)",
                  fontSize: "10px",
                }}
              >
                {entry.duration}
              </span>
              {entry.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 tracking-wide uppercase"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    color: "#6B7280",
                    backgroundColor: "rgba(107, 114, 128, 0.08)",
                    border: "1px solid rgba(107, 114, 128, 0.2)",
                    fontSize: "10px",
                    letterSpacing: "0.08em",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SectionLabel({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3">
      <span
        className="w-1.5 h-1.5 rounded-full"
        style={{ backgroundColor: "#2B4EFF" }}
      />
      <span
        className="text-xs tracking-widest uppercase"
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          color: "#2B4EFF",
          letterSpacing: "0.15em",
        }}
      >
        {label}
      </span>
      <div className="h-px flex-1 max-w-24" style={{ backgroundColor: "rgba(43, 78, 255, 0.2)" }} />
    </div>
  );
}