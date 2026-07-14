"use client";

import { useState } from "react";

interface ExperienceEntry {
  docId: string;
  role: string;
  company: string;
  period: string;
  duration: string;
  highlights: string[];
  tags: string[];
}

const experiences: ExperienceEntry[] = [
  {
    docId: "DOC.01",
    role: "Senior Product Designer",
    company: "Bank Rakyat Indonesia (BRI)",
    period: "Des 2023 — Sekarang",
    duration: "1.5+ yr",
    highlights: [
      "Memimpin desain BRISPOT, platform lending internal untuk alur approval multi-role: Pemrakarsa, Pemutus, dan ADK — termasuk state management proses multi-step yang kompleks.",
      "Mendigitalisasi sistem KPR end-to-end, dari form pengajuan hingga status tracking nasabah.",
      "Membangun dashboard analitik finansial dengan tabel data-heavy dan visualisasi metrik lending real-time.",
      "Memimpin scaling design system berbasis variable tokens, mendefinisikan arsitektur komponen untuk tim 10+ designer.",
      "Menangani modul Kartu Kredit & fitur Ubah Cicilan di BRImo/QITA (consumer-facing, jutaan pengguna aktif).",
    ],
    tags: ["Internal Tools", "Design System", "Multi-role Workflow", "Data Dashboard"],
  },
  {
    docId: "DOC.02",
    role: "Product Designer",
    company: "Bank Syariah Indonesia (BSI)",
    period: "Agu 2022 — Jul 2023",
    duration: "11 mo",
    highlights: [
      "Membangun dan mendokumentasikan design system BSI Mobile Banking dari nol — komponen library, token warna, dan panduan tipografi.",
      "Melakukan user research & usability testing untuk fitur-fitur kritis: transfer, QRIS, dan tabungan.",
      "Mempresentasikan design rationale dan iterasi desain langsung ke stakeholder senior dan product manager.",
    ],
    tags: ["Mobile Banking", "Design System", "User Research"],
  },
  {
    docId: "DOC.03",
    role: "UI/UX Designer",
    company: "Infosys Solusi Terpadu",
    period: "Mar 2021 — Mei 2022",
    duration: "14 mo",
    highlights: [
      "Merancang sistem desain untuk BTN Conventional & Syariah: komponen form kompleks, alur pengajuan KPR, dan onboarding nasabah.",
      "Mendesain dashboard table-heavy untuk sistem manajemen ATM CIMB — termasuk filter multi-dimensi dan export report.",
      "Membuat custom 3D icon set di Blender untuk memperkaya visual identity aplikasi.",
    ],
    tags: ["Banking", "Dashboard", "3D Illustration"],
  },
  {
    docId: "DOC.04",
    role: "UI/UX Designer",
    company: "Malline Indonesia",
    period: "Sep 2019 — Feb 2021",
    duration: "17 mo",
    highlights: [
      "Merancang platform e-commerce end-to-end dari tahap riset & wireframing hingga desain hi-fi dan implementasi WordPress.",
      "Berkolaborasi langsung dengan developer untuk memastikan fidelitas desain dalam implementasi.",
      "Melakukan iterasi cepat berdasarkan feedback pengguna dan A/B testing.",
    ],
    tags: ["E-commerce", "End-to-end", "Wireframing"],
  },
];

export function ExperienceSection() {
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
            Five documents from the archive.
          </h2>
        </div>

        {/* Experience list */}
        <div className="space-y-0">
          {experiences.map((entry, i) => (
            <ExperienceCard key={entry.docId} entry={entry} isLast={i === experiences.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({ entry, isLast }: { entry: ExperienceEntry; isLast: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative group cursor-default transition-all duration-200"
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
        <div className="flex flex-col md:flex-row md:items-start gap-6">
          {/* Left: doc ID + duration badge */}
          <div className="flex-shrink-0 flex md:flex-col gap-3 md:gap-2 md:w-28">
            <span
              className="text-sm tracking-widest"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                color: hovered ? "#FF4B33" : "#2B4EFF",
                fontWeight: 600,
                transition: "color 0.2s ease",
              }}
            >
              {entry.docId}
            </span>
            {hovered && (
              <span
                className="text-xs px-2 py-0.5 self-start"
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
            )}
          </div>

          {/* Center: company + role + period */}
          <div className="flex-1">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
              <div>
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
                  className="text-sm"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: "#6B7280",
                    fontWeight: 500,
                  }}
                >
                  {entry.role}
                </p>
              </div>
              <span
                className="text-xs tracking-wider flex-shrink-0"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  color: "#6B7280",
                }}
              >
                {entry.period}
              </span>
            </div>

            {/* Highlights */}
            <ul className="space-y-2">
              {entry.highlights.map((highlight, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm leading-relaxed"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: "#3D4557",
                  }}
                >
                  <span
                    className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0"
                    style={{ backgroundColor: hovered ? "#FF4B33" : "#2B4EFF", transition: "background-color 0.2s ease" }}
                  />
                  {highlight}
                </li>
              ))}
            </ul>

            {/* Tags */}
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
