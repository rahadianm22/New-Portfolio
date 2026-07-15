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

          {/* Right: open-modal button */}
          <button
            onClick={onOpen}
            className="flex-shrink-0 flex items-center gap-2 self-start md:self-auto transition-colors duration-150"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "13px",
              fontWeight: 600,
              color: "#FFFFFF",
              backgroundColor: "#2B4EFF",
              padding: "10px 18px",
            }}
          >
            See detail
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M3 9L9 3M9 3H4M9 3V8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

function ExperienceModal({ entry, onClose }: { entry: ExperienceEntry; onClose: () => void }) {
  // Close on Escape, lock body scroll while open
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-start md:items-center justify-center p-4 md:p-8 overflow-y-auto"
      style={{ backgroundColor: "rgba(18, 21, 28, 0.6)" }}
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl my-8 md:my-0"
        style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(18, 21, 28, 0.15)" }}
      >
        {/* Corner marks */}
        <span className="absolute -top-px -left-px w-3 h-3 border-t-2 border-l-2 pointer-events-none" style={{ borderColor: "#2B4EFF" }} />
        <span className="absolute -top-px -right-px w-3 h-3 border-t-2 border-r-2 pointer-events-none" style={{ borderColor: "#2B4EFF" }} />
        <span className="absolute -bottom-px -left-px w-3 h-3 border-b-2 border-l-2 pointer-events-none" style={{ borderColor: "#2B4EFF" }} />
        <span className="absolute -bottom-px -right-px w-3 h-3 border-b-2 border-r-2 pointer-events-none" style={{ borderColor: "#2B4EFF" }} />

        {/* Header */}
        <div
          className="flex items-start justify-between gap-4 px-6 md:px-10 py-6"
          style={{ borderBottom: "1px solid rgba(18, 21, 28, 0.1)" }}
        >
          <div>
            <span
              className="block text-xs tracking-widest mb-2"
              style={{ fontFamily: "'JetBrains Mono', monospace", color: "#2B4EFF", fontWeight: 600 }}
            >
              {entry.docId}
            </span>
            <h3
              className="text-2xl mb-1"
              style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: "#12151C", letterSpacing: "-0.01em" }}
            >
              {entry.company}
            </h3>
            <p className="text-sm" style={{ fontFamily: "'Inter', sans-serif", color: "#6B7280", fontWeight: 500 }}>
              {entry.role} · {entry.period}
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Tutup"
            className="flex-shrink-0 flex items-center justify-center"
            style={{ width: "32px", height: "32px", border: "1px solid rgba(18, 21, 28, 0.15)", color: "#6B7280" }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="px-6 md:px-10 py-8 max-h-[65vh] overflow-y-auto">
          {entry.subProjects ? (
            <div className="space-y-8">
              {entry.subProjects.map((project) => (
                <div key={project.title}>
                  <h4
                    className="text-base mb-3"
                    style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: "#12151C" }}
                  >
                    {project.title}
                  </h4>
                  <ul className="space-y-2">
                    {project.bullets.map((bullet, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm leading-relaxed"
                        style={{ fontFamily: "'Inter', sans-serif", color: "#3D4557" }}
                      >
                        <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: "#2B4EFF" }} />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
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
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <>
              <ul className="space-y-2">
                {entry.highlights?.map((highlight, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm leading-relaxed"
                    style={{ fontFamily: "'Inter', sans-serif", color: "#3D4557" }}
                  >
                    <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: "#2B4EFF" }} />
                    {highlight}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">
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
            </>
          )}
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