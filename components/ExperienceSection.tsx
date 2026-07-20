"use client";

import { useState, useEffect } from "react";

interface Product {
  tabLabel: string;
  name: string;
  category: string;
  status: string;
  statusLive: boolean;
  description: string;
  scope: string;
  contributions: string[];
}

interface ExperienceEntry {
  docId: string;
  role: string;
  company: string;
  period: string;
  duration: string;
  tags: string[];
  highlights: string[];
  // Entries with multiple concurrent products (like BRI) get a tabbed
  // product breakdown in the modal. Entries without this just show
  // `highlights` in a simple modal instead.
  products?: Product[];
}

const experiences: ExperienceEntry[] = [
  {
    docId: "DOC.01",
    role: "Senior Product Designer",
    company: "Bank Rakyat Indonesia (BRI)",
    period: "Des 2023 — Sekarang",
    duration: "2.5+ yr",
    tags: ["Internal Tools", "Design System", "Multi-role Workflow", "Data Dashboard"],
    highlights: [
      "End-to-end loan endorsement & administration: Architected user flows and interfaces across web and mobile for three internal role groups — initiators (Pemrakarsa), approvers (Pemutus: CBM, PCP, Pinca, RCBH), and admin officers (Petugas ADK) — covering loan portfolio management, disbursement status tracking (Status 105), and Early Warning System (EWS) states.",
      "Briguna digital lending core: Led UX research and interface design for cross-bank installment autofill (Crystal feature), customer whitelist management, national quota administration (Maker/Signer roles), and external institution flagging workflows (e.g. Taspen).",
      "Membangun dashboard analitik finansial dengan tabel data-heavy dan visualisasi metrik lending.",
      "Memimpin scaling design system berbasis variable tokens, mendefinisikan arsitektur komponen lintas modul BRISPOT.",
      "Menangani modul Kartu Kredit & fitur Ubah Cicilan di BRImo/QITA (consumer-facing).",
    ],
    products: [
      {
        tabLabel: "BRISPOT",
        name: "BRISPOT",
        category: "INTERNAL PLATFORM — LENDING",
        status: "Live — Aktif dikembangkan",
        statusLive: true,
        description:
          "Platform operasional lending internal BRI, dipakai oleh agen dan analis kredit di seluruh cabang. Sistem multi-role dengan alur approval bertingkat sesuai regulasi.",
        scope: "scope: B2B Internal — tim Pemrakarsa, Pemutus (CBM/PCP/Pinca/RCBH), dan Petugas ADK",
        contributions: [
          "Merancang alur approval multi-role (Pemrakarsa → Pemutus → ADK) dengan state disbursement dan Early Warning System (EWS) yang kompleks.",
          "Memimpin UX research dan desain untuk cross-bank installment autofill (fitur Crystal), whitelist nasabah, dan administrasi kuota nasional (peran Maker/Signer).",
          "Membangun komponen dashboard analitik finansial dan reporting kunjungan nasabah dengan pipeline download/upload data neraca dan laba-rugi.",
          "Membangun UI digital signing (Digital Sign) dan pengajuan asuransi jiwa kredit (SPAJK), termasuk fallback handling untuk status pengajuan yang macet.",
          "Memimpin migrasi legacy web view dari CodeIgniter ke React untuk modul verifikasi Checker & Signer.",
        ],
      },
      {
        tabLabel: "KPR Digital",
        name: "KPR (Mortgage) Digital",
        category: "INTERNAL PLATFORM — LENDING",
        status: "Live — Aktif dikembangkan",
        statusLive: true,
        description:
          "Digitalisasi alur pengelolaan KPR, dari mapping komite kredit hingga tracking lead konsumen, dioptimasi untuk penggunaan tablet oleh tim lapangan.",
        scope: "scope: B2B Internal — tim pemutus KPR & tenaga pemasaran lapangan",
        contributions: [
          "Mendigitalisasi workflow pengelolaan KPR, termasuk mapping komite KPP dan proses pengambilan keputusan kredit.",
          "Mendesain tracking lead konsumen (Leads Internal Konsumer KPR) yang dioptimasi untuk tablet.",
          "Merancang alur mitigasi penolakan (PTK Tolak) beserta riwayat keputusan untuk transparansi proses.",
        ],
      },
      {
        tabLabel: "BRImo & QITA",
        name: "BRImo (Super App) & QITA — Credit Card, Lifestyle, Biller",
        category: "CONSUMER-FACING — SUPER APP",
        status: "Live — Aktif dikembangkan",
        statusLive: true,
        description:
          "Modul consumer-facing di super app BRImo dan QITA, mencakup Kartu Kredit, Lifestyle, dan Biller — termasuk fitur Ubah Cicilan (installment conversion).",
        scope: "scope: Consumer-facing — modul Kartu Kredit, Lifestyle, dan Biller",
        contributions: [
          "Mendesain flow Ubah Cicilan: pemilihan tenor, detail transaksi, konfirmasi, hingga status/result, termasuk copy dan handling untuk edge case.",
          "Menerapkan design system variable-token yang sama dari BRISPOT untuk menjaga konsistensi lintas squad.",
          "Berkolaborasi dengan Product Owner dan engineer untuk menyelaraskan keputusan desain dengan kebutuhan teknis, serta menjalankan design QA terhadap hasil development.",
        ],
      },
      {
        tabLabel: "BUM Desa",
        name: "BUM Desa — Digital Platform",
        category: "INTERNAL PLATFORM — 0→1",
        status: "Completed — Transisi ke BRImo/QITA",
        statusLive: false,
        description:
          "Platform digital baru yang dibangun dari nol (0→1), sebelum tim bertransisi fokus ke segmen BRImo/QITA.",
        scope: "scope: Internal — fase discovery hingga implementasi awal",
        contributions: [
          "Memimpin arsitektur UX/UI platform baru dari tahap discovery hingga implementasi.",
          "Melakukan stakeholder interview untuk mendefinisikan core journey pengguna.",
        ],
      },
      {
        tabLabel: "BRI Design System",
        name: "BRI Enterprise Design System",
        category: "DESIGN SYSTEM — CROSS-PLATFORM",
        status: "Live — Aktif dikembangkan",
        statusLive: true,
        description:
          "Design system berskala enterprise dengan variable design tokens, dipakai lintas modul BRISPOT dan BRImo/QITA untuk menjaga konsistensi dan mempercepat handover.",
        scope: "scope: Cross-squad — dipakai di BRISPOT dan BRImo/QITA",
        contributions: [
          "Memimpin scaling design system menggunakan variable design tokens.",
          "Menstandardisasi proses design-to-development handover di seluruh modul BRISPOT.",
          "Menerapkan token system yang sama ke modul BRImo/QITA untuk konsistensi lintas squad.",
        ],
      },
    ],
  },
  {
    docId: "DOC.02",
    role: "Product Designer",
    company: "Bank Syariah Indonesia (BSI)",
    period: "Agu 2022 — Jul 2023",
    duration: "1 yr",
    highlights: [
      "Membangun dan mendokumentasikan design system BSI Mobile Banking dari nol — komponen library, token warna, dan panduan tipografi.",
      "Melakukan user research & usability testing untuk fitur-fitur kritis: transfer, QRIS, dan tabungan.",
      "Mempresentasikan design rationale dan iterasi desain langsung ke stakeholder senior dan product manager.",
    ],
    tags: ["Mobile Banking", "Design System", "User Research"],
    products: [
      {
        tabLabel: "BRISPOT",
        name: "BRISPOT",
        category: "INTERNAL PLATFORM — LENDING",
        status: "Live — Aktif dikembangkan",
        statusLive: true,
        description:
          "Platform operasional lending internal BRI, dipakai oleh agen dan analis kredit di seluruh cabang. Sistem multi-role dengan alur approval bertingkat sesuai regulasi.",
        scope: "scope: B2B Internal — tim Pemrakarsa, Pemutus (CBM/PCP/Pinca/RCBH), dan Petugas ADK",
        contributions: [
          "Merancang alur approval multi-role (Pemrakarsa → Pemutus → ADK) dengan state disbursement dan Early Warning System (EWS) yang kompleks.",
          "Memimpin UX research dan desain untuk cross-bank installment autofill (fitur Crystal), whitelist nasabah, dan administrasi kuota nasional (peran Maker/Signer).",
          "Membangun komponen dashboard analitik finansial dan reporting kunjungan nasabah dengan pipeline download/upload data neraca dan laba-rugi.",
          "Membangun UI digital signing (Digital Sign) dan pengajuan asuransi jiwa kredit (SPAJK), termasuk fallback handling untuk status pengajuan yang macet.",
          "Memimpin migrasi legacy web view dari CodeIgniter ke React untuk modul verifikasi Checker & Signer.",
        ],
      },
      {
        tabLabel: "KPR Digital",
        name: "KPR (Mortgage) Digital",
        category: "INTERNAL PLATFORM — LENDING",
        status: "Live — Aktif dikembangkan",
        statusLive: true,
        description:
          "Digitalisasi alur pengelolaan KPR, dari mapping komite kredit hingga tracking lead konsumen, dioptimasi untuk penggunaan tablet oleh tim lapangan.",
        scope: "scope: B2B Internal — tim pemutus KPR & tenaga pemasaran lapangan",
        contributions: [
          "Mendigitalisasi workflow pengelolaan KPR, termasuk mapping komite KPP dan proses pengambilan keputusan kredit.",
          "Mendesain tracking lead konsumen (Leads Internal Konsumer KPR) yang dioptimasi untuk tablet.",
          "Merancang alur mitigasi penolakan (PTK Tolak) beserta riwayat keputusan untuk transparansi proses.",
        ],
      },
      {
        tabLabel: "BRImo & QITA",
        name: "BRImo (Super App) & QITA — Credit Card, Lifestyle, Biller",
        category: "CONSUMER-FACING — SUPER APP",
        status: "Live — Aktif dikembangkan",
        statusLive: true,
        description:
          "Modul consumer-facing di super app BRImo dan QITA, mencakup Kartu Kredit, Lifestyle, dan Biller — termasuk fitur Ubah Cicilan (installment conversion).",
        scope: "scope: Consumer-facing — modul Kartu Kredit, Lifestyle, dan Biller",
        contributions: [
          "Mendesain flow Ubah Cicilan: pemilihan tenor, detail transaksi, konfirmasi, hingga status/result, termasuk copy dan handling untuk edge case.",
          "Menerapkan design system variable-token yang sama dari BRISPOT untuk menjaga konsistensi lintas squad.",
          "Berkolaborasi dengan Product Owner dan engineer untuk menyelaraskan keputusan desain dengan kebutuhan teknis, serta menjalankan design QA terhadap hasil development.",
        ],
      },
      {
        tabLabel: "BUM Desa",
        name: "BUM Desa — Digital Platform",
        category: "INTERNAL PLATFORM — 0→1",
        status: "Completed — Transisi ke BRImo/QITA",
        statusLive: false,
        description:
          "Platform digital baru yang dibangun dari nol (0→1), sebelum tim bertransisi fokus ke segmen BRImo/QITA.",
        scope: "scope: Internal — fase discovery hingga implementasi awal",
        contributions: [
          "Memimpin arsitektur UX/UI platform baru dari tahap discovery hingga implementasi.",
          "Melakukan stakeholder interview untuk mendefinisikan core journey pengguna.",
        ],
      },
      {
        tabLabel: "BRI Design System",
        name: "BRI Enterprise Design System",
        category: "DESIGN SYSTEM — CROSS-PLATFORM",
        status: "Live — Aktif dikembangkan",
        statusLive: true,
        description:
          "Design system berskala enterprise dengan variable design tokens, dipakai lintas modul BRISPOT dan BRImo/QITA untuk menjaga konsistensi dan mempercepat handover.",
        scope: "scope: Cross-squad — dipakai di BRISPOT dan BRImo/QITA",
        contributions: [
          "Memimpin scaling design system menggunakan variable design tokens.",
          "Menstandardisasi proses design-to-development handover di seluruh modul BRISPOT.",
          "Menerapkan token system yang sama ke modul BRImo/QITA untuk konsistensi lintas squad.",
        ],
      },
    ],
  },
  {
    docId: "DOC.03",
    role: "UI/UX Designer",
    company: "Infosys Solusi Terpadu",
    period: "Mar 2021 — Mei 2022",
    duration: "1+ yr",
    highlights: [
      "Merancang sistem desain untuk BTN Conventional & Syariah: komponen form kompleks, alur pengajuan KPR, dan onboarding nasabah.",
      "Mendesain dashboard table-heavy untuk sistem manajemen ATM CIMB — termasuk filter multi-dimensi dan export report.",
      "Membuat custom 3D icon set di Blender untuk memperkaya visual identity aplikasi.",
    ],
    tags: ["Banking", "Dashboard", "3D Illustration"],
    products: [
      {
        tabLabel: "BRISPOT",
        name: "BRISPOT",
        category: "INTERNAL PLATFORM — LENDING",
        status: "Live — Aktif dikembangkan",
        statusLive: true,
        description:
          "Platform operasional lending internal BRI, dipakai oleh agen dan analis kredit di seluruh cabang. Sistem multi-role dengan alur approval bertingkat sesuai regulasi.",
        scope: "scope: B2B Internal — tim Pemrakarsa, Pemutus (CBM/PCP/Pinca/RCBH), dan Petugas ADK",
        contributions: [
          "Merancang alur approval multi-role (Pemrakarsa → Pemutus → ADK) dengan state disbursement dan Early Warning System (EWS) yang kompleks.",
          "Memimpin UX research dan desain untuk cross-bank installment autofill (fitur Crystal), whitelist nasabah, dan administrasi kuota nasional (peran Maker/Signer).",
          "Membangun komponen dashboard analitik finansial dan reporting kunjungan nasabah dengan pipeline download/upload data neraca dan laba-rugi.",
          "Membangun UI digital signing (Digital Sign) dan pengajuan asuransi jiwa kredit (SPAJK), termasuk fallback handling untuk status pengajuan yang macet.",
          "Memimpin migrasi legacy web view dari CodeIgniter ke React untuk modul verifikasi Checker & Signer.",
        ],
      },
      {
        tabLabel: "KPR Digital",
        name: "KPR (Mortgage) Digital",
        category: "INTERNAL PLATFORM — LENDING",
        status: "Live — Aktif dikembangkan",
        statusLive: true,
        description:
          "Digitalisasi alur pengelolaan KPR, dari mapping komite kredit hingga tracking lead konsumen, dioptimasi untuk penggunaan tablet oleh tim lapangan.",
        scope: "scope: B2B Internal — tim pemutus KPR & tenaga pemasaran lapangan",
        contributions: [
          "Mendigitalisasi workflow pengelolaan KPR, termasuk mapping komite KPP dan proses pengambilan keputusan kredit.",
          "Mendesain tracking lead konsumen (Leads Internal Konsumer KPR) yang dioptimasi untuk tablet.",
          "Merancang alur mitigasi penolakan (PTK Tolak) beserta riwayat keputusan untuk transparansi proses.",
        ],
      },
      {
        tabLabel: "BRImo & QITA",
        name: "BRImo (Super App) & QITA — Credit Card, Lifestyle, Biller",
        category: "CONSUMER-FACING — SUPER APP",
        status: "Live — Aktif dikembangkan",
        statusLive: true,
        description:
          "Modul consumer-facing di super app BRImo dan QITA, mencakup Kartu Kredit, Lifestyle, dan Biller — termasuk fitur Ubah Cicilan (installment conversion).",
        scope: "scope: Consumer-facing — modul Kartu Kredit, Lifestyle, dan Biller",
        contributions: [
          "Mendesain flow Ubah Cicilan: pemilihan tenor, detail transaksi, konfirmasi, hingga status/result, termasuk copy dan handling untuk edge case.",
          "Menerapkan design system variable-token yang sama dari BRISPOT untuk menjaga konsistensi lintas squad.",
          "Berkolaborasi dengan Product Owner dan engineer untuk menyelaraskan keputusan desain dengan kebutuhan teknis, serta menjalankan design QA terhadap hasil development.",
        ],
      },
      {
        tabLabel: "BUM Desa",
        name: "BUM Desa — Digital Platform",
        category: "INTERNAL PLATFORM — 0→1",
        status: "Completed — Transisi ke BRImo/QITA",
        statusLive: false,
        description:
          "Platform digital baru yang dibangun dari nol (0→1), sebelum tim bertransisi fokus ke segmen BRImo/QITA.",
        scope: "scope: Internal — fase discovery hingga implementasi awal",
        contributions: [
          "Memimpin arsitektur UX/UI platform baru dari tahap discovery hingga implementasi.",
          "Melakukan stakeholder interview untuk mendefinisikan core journey pengguna.",
        ],
      },
      {
        tabLabel: "BRI Design System",
        name: "BRI Enterprise Design System",
        category: "DESIGN SYSTEM — CROSS-PLATFORM",
        status: "Live — Aktif dikembangkan",
        statusLive: true,
        description:
          "Design system berskala enterprise dengan variable design tokens, dipakai lintas modul BRISPOT dan BRImo/QITA untuk menjaga konsistensi dan mempercepat handover.",
        scope: "scope: Cross-squad — dipakai di BRISPOT dan BRImo/QITA",
        contributions: [
          "Memimpin scaling design system menggunakan variable design tokens.",
          "Menstandardisasi proses design-to-development handover di seluruh modul BRISPOT.",
          "Menerapkan token system yang sama ke modul BRImo/QITA untuk konsistensi lintas squad.",
        ],
      },
    ],
  },
  {
    docId: "DOC.04",
    role: "UI/UX Designer",
    company: "Malline Indonesia",
    period: "Sep 2019 — Feb 2021",
    duration: "1.5+ yr",
    highlights: [
      "Merancang platform e-commerce end-to-end dari tahap riset & wireframing hingga desain hi-fi dan implementasi WordPress.",
      "Berkolaborasi langsung dengan developer untuk memastikan fidelitas desain dalam implementasi.",
      "Melakukan iterasi cepat berdasarkan feedback pengguna dan A/B testing.",
    ],
    tags: ["E-commerce", "End-to-end", "Wireframing"],
    products: [
      {
        tabLabel: "BRISPOT",
        name: "BRISPOT",
        category: "INTERNAL PLATFORM — LENDING",
        status: "Live — Aktif dikembangkan",
        statusLive: true,
        description:
          "Platform operasional lending internal BRI, dipakai oleh agen dan analis kredit di seluruh cabang. Sistem multi-role dengan alur approval bertingkat sesuai regulasi.",
        scope: "scope: B2B Internal — tim Pemrakarsa, Pemutus (CBM/PCP/Pinca/RCBH), dan Petugas ADK",
        contributions: [
          "Merancang alur approval multi-role (Pemrakarsa → Pemutus → ADK) dengan state disbursement dan Early Warning System (EWS) yang kompleks.",
          "Memimpin UX research dan desain untuk cross-bank installment autofill (fitur Crystal), whitelist nasabah, dan administrasi kuota nasional (peran Maker/Signer).",
          "Membangun komponen dashboard analitik finansial dan reporting kunjungan nasabah dengan pipeline download/upload data neraca dan laba-rugi.",
          "Membangun UI digital signing (Digital Sign) dan pengajuan asuransi jiwa kredit (SPAJK), termasuk fallback handling untuk status pengajuan yang macet.",
          "Memimpin migrasi legacy web view dari CodeIgniter ke React untuk modul verifikasi Checker & Signer.",
        ],
      },
      {
        tabLabel: "KPR Digital",
        name: "KPR (Mortgage) Digital",
        category: "INTERNAL PLATFORM — LENDING",
        status: "Live — Aktif dikembangkan",
        statusLive: true,
        description:
          "Digitalisasi alur pengelolaan KPR, dari mapping komite kredit hingga tracking lead konsumen, dioptimasi untuk penggunaan tablet oleh tim lapangan.",
        scope: "scope: B2B Internal — tim pemutus KPR & tenaga pemasaran lapangan",
        contributions: [
          "Mendigitalisasi workflow pengelolaan KPR, termasuk mapping komite KPP dan proses pengambilan keputusan kredit.",
          "Mendesain tracking lead konsumen (Leads Internal Konsumer KPR) yang dioptimasi untuk tablet.",
          "Merancang alur mitigasi penolakan (PTK Tolak) beserta riwayat keputusan untuk transparansi proses.",
        ],
      },
      {
        tabLabel: "BRImo & QITA",
        name: "BRImo (Super App) & QITA — Credit Card, Lifestyle, Biller",
        category: "CONSUMER-FACING — SUPER APP",
        status: "Live — Aktif dikembangkan",
        statusLive: true,
        description:
          "Modul consumer-facing di super app BRImo dan QITA, mencakup Kartu Kredit, Lifestyle, dan Biller — termasuk fitur Ubah Cicilan (installment conversion).",
        scope: "scope: Consumer-facing — modul Kartu Kredit, Lifestyle, dan Biller",
        contributions: [
          "Mendesain flow Ubah Cicilan: pemilihan tenor, detail transaksi, konfirmasi, hingga status/result, termasuk copy dan handling untuk edge case.",
          "Menerapkan design system variable-token yang sama dari BRISPOT untuk menjaga konsistensi lintas squad.",
          "Berkolaborasi dengan Product Owner dan engineer untuk menyelaraskan keputusan desain dengan kebutuhan teknis, serta menjalankan design QA terhadap hasil development.",
        ],
      },
      {
        tabLabel: "BRI Design System",
        name: "BRI Enterprise Design System",
        category: "DESIGN SYSTEM — CROSS-PLATFORM",
        status: "Live — Aktif dikembangkan",
        statusLive: true,
        description:
          "Design system berskala enterprise dengan variable design tokens, dipakai lintas modul BRISPOT dan BRImo/QITA untuk menjaga konsistensi dan mempercepat handover.",
        scope: "scope: Cross-squad — dipakai di BRISPOT dan BRImo/QITA",
        contributions: [
          "Memimpin scaling design system menggunakan variable design tokens.",
          "Menstandardisasi proses design-to-development handover di seluruh modul BRISPOT.",
          "Menerapkan token system yang sama ke modul BRImo/QITA untuk konsistensi lintas squad.",
        ],
      },
    ],
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
            Designing at scale for complex ecosystems.
          </h2>
        </div>

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
  const productCount = entry.products?.length ?? 0;
  const [rowHovered, setRowHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setRowHovered(true)}
      onMouseLeave={() => setRowHovered(false)}
      style={{
        borderTop: "1px solid rgba(18, 21, 28, 0.1)",
        borderBottom: isLast ? "1px solid rgba(18, 21, 28, 0.1)" : "none",
        borderLeft: rowHovered ? "3px solid #2B4EFF" : "3px solid transparent",
        backgroundColor: rowHovered ? "#FFFFFF" : "transparent",
        transition: "border-color 0.2s ease, background-color 0.2s ease",
      }}
    >
      <div className="py-8 px-6 md:px-8">
        <div className="flex items-center gap-3 mb-3">
          <span
            className="text-sm tracking-widest"
            style={{ fontFamily: "'JetBrains Mono', monospace", color: "#2B4EFF", fontWeight: 600 }}
          >
            {entry.docId}
          </span>
          <span
            className="text-xs px-2 py-0.5"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              color: "#f5740b",
              backgroundColor: "rgba(255, 75, 51, 0.1)",
              border: "1px solid rgba(255, 75, 51, 0.2)",
              fontSize: "10px",
            }}
          >
            {entry.duration}
          </span>
        </div>

        <h3
          className="text-xl mb-0.5"
          style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: "#12151C", letterSpacing: "-0.01em" }}
        >
          {entry.company}
        </h3>
        <p className="text-sm mb-1" style={{ fontFamily: "'Inter', sans-serif", color: "#6B7280", fontWeight: 500 }}>
          {entry.role}
        </p>
        <span className="text-xs tracking-wider" style={{ fontFamily: "'JetBrains Mono', monospace", color: "#6B7280" }}>
          {entry.period}
        </span>

        <ul className="space-y-2 mt-4">
          {entry.highlights.map((highlight, i) => (
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

        <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
          <div className="flex flex-wrap gap-2">
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

          <button
            onClick={onOpen}
            className="flex-shrink-0 flex items-center gap-2"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.05em",
            }}
          >
            <span
              className="flex items-center gap-1.5 px-3 py-1.5"
              style={{ color: "#2B4EFF", backgroundColor: "rgba(51, 105, 255, 0.1)", border: "1px solid rgba(51, 82, 255, 0.25)" }}
            >
              See Detail
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M2 8L8 2M8 2H3M8 2V7" stroke="#2B4EFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

function ExperienceModal({ entry, onClose }: { entry: ExperienceEntry; onClose: () => void }) {
  const [activeProduct, setActiveProduct] = useState(0);

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

  const products = entry.products;
  const product = products?.[activeProduct];

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
        <span className="absolute -top-px -left-px w-3 h-3 border-t-2 border-l-2 pointer-events-none" style={{ borderColor: "#2B4EFF" }} />
        <span className="absolute -top-px -right-px w-3 h-3 border-t-2 border-r-2 pointer-events-none" style={{ borderColor: "#2B4EFF" }} />
        <span className="absolute -bottom-px -left-px w-3 h-3 border-b-2 border-l-2 pointer-events-none" style={{ borderColor: "#2B4EFF" }} />
        <span className="absolute -bottom-px -right-px w-3 h-3 border-b-2 border-r-2 pointer-events-none" style={{ borderColor: "#2B4EFF" }} />

        {/* Header */}
        <div className="flex items-start justify-between gap-4 px-6 md:px-10 pt-6" style={{ borderBottom: products ? "none" : "1px solid rgba(18, 21, 28, 0.1)" }}>
          <div className={products ? "pb-4" : "pb-6"}>
            <span
              className="text-xs tracking-widest"
              style={{ fontFamily: "'JetBrains Mono', monospace", color: "#2B4EFF", fontWeight: 600 }}
            >
              {entry.docId} <span style={{ color: "#6B7280", fontWeight: 400 }}>· PRODUCT ARCHIVE</span>
            </span>
            <h3
              className="text-2xl mt-2 mb-1"
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
            style={{ width: "32px", height: "32px", color: "#6B7280" }}
          >
            <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
              <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Tab bar (only for entries with a product breakdown) */}
        {products && (
          <div
            className="flex gap-6 px-6 md:px-10 overflow-x-auto"
            style={{ borderBottom: "1px solid rgba(18, 21, 28, 0.1)" }}
            role="tablist"
          >
            {products.map((p, i) => {
              const isActive = i === activeProduct;
              return (
                <button
                  key={p.tabLabel}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveProduct(i)}
                  className="flex-shrink-0 pb-3 text-sm"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontWeight: 600,
                    color: isActive ? "#2B4EFF" : "#9CA3AF",
                    borderBottom: isActive ? "2px solid #2B4EFF" : "2px solid transparent",
                  }}
                >
                  {p.tabLabel}
                </button>
              );
            })}
          </div>
        )}

        {/* Body */}
        <div className="px-6 md:px-10 py-8 max-h-[60vh] overflow-y-auto">
          {product ? (
            <>
              {/* Product summary card */}
              <div className="relative p-6" style={{ backgroundColor: "#EDEFF5", border: "1px dashed rgba(43, 78, 255, 0.4)" }}>
                <span className="absolute -top-px -left-px w-3 h-3 border-t-2 border-l-2 pointer-events-none" style={{ borderColor: "#2B4EFF" }} />
                <span className="absolute -top-px -right-px w-3 h-3 border-t-2 border-r-2 pointer-events-none" style={{ borderColor: "#2B4EFF" }} />
                <span className="absolute -bottom-px -left-px w-3 h-3 border-b-2 border-l-2 pointer-events-none" style={{ borderColor: "#2B4EFF" }} />
                <span className="absolute -bottom-px -right-px w-3 h-3 border-b-2 border-r-2 pointer-events-none" style={{ borderColor: "#2B4EFF" }} />

                <div className="flex items-start justify-between gap-4 mb-2">
                  <h4
                    className="text-xl"
                    style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: "#12151C" }}
                  >
                    {product.name}
                  </h4>
                  <span
                    className="flex-shrink-0 flex items-center gap-1.5 text-xs"
                    style={{ fontFamily: "'JetBrains Mono', monospace", color: product.statusLive ? "#16A34A" : "#6B7280" }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: product.statusLive ? "#16A34A" : "#9CA3AF" }}
                    />
                    {product.status}
                  </span>
                </div>

                <span
                  className="block text-xs tracking-wider mb-3"
                  style={{ fontFamily: "'JetBrains Mono', monospace", color: "#2B4EFF" }}
                >
                  {product.category}
                </span>

                <p className="text-sm leading-relaxed mb-4" style={{ fontFamily: "'Inter', sans-serif", color: "#3D4557" }}>
                  {product.description}
                </p>

                <div style={{ borderTop: "1px solid rgba(18, 21, 28, 0.1)", paddingTop: "12px" }}>
                  <span className="text-xs" style={{ fontFamily: "'JetBrains Mono', monospace", color: "#6B7280" }}>
                    {product.scope}
                  </span>
                </div>
              </div>

              {/* Contributions */}
              <div className="flex items-center gap-2 mt-8 mb-4">
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#f5740b" }} />
                <span
                  className="text-xs tracking-widest uppercase"
                  style={{ fontFamily: "'JetBrains Mono', monospace", color: "#f5740b", letterSpacing: "0.1em" }}
                >
                  Contributions
                </span>
              </div>

              <ul className="space-y-4">
                {product.contributions.map((c, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className="flex-shrink-0 flex items-center justify-center text-xs mt-0.5"
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        color: "#2B4EFF",
                        backgroundColor: "rgba(43, 78, 255, 0.08)",
                        border: "1px solid rgba(43, 78, 255, 0.2)",
                        width: "22px",
                        height: "22px",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm leading-relaxed" style={{ fontFamily: "'Inter', sans-serif", color: "#3D4557" }}>
                      {c}
                    </span>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <>
              <ul className="space-y-2">
                {entry.highlights.map((highlight, i) => (
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

        {/* Pagination footer (only for product entries) */}
        {products && product && (
          <div
            className="flex items-center justify-between px-6 md:px-10 py-4"
            style={{ borderTop: "1px solid rgba(18, 21, 28, 0.1)" }}
          >
            <span className="text-xs" style={{ fontFamily: "'JetBrains Mono', monospace", color: "#9CA3AF" }}>
              {activeProduct + 1} / {products.length} — {product.tabLabel}
            </span>
            <div className="flex gap-2">
              <button
                onClick={() => setActiveProduct((p) => Math.max(0, p - 1))}
                disabled={activeProduct === 0}
                aria-label="Sebelumnya"
                className="flex items-center justify-center"
                style={{
                  width: "30px",
                  height: "30px",
                  border: "1px solid rgba(18, 21, 28, 0.15)",
                  color: activeProduct === 0 ? "#D1D5DB" : "#12151C",
                }}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M7.5 2L3.5 6L7.5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                onClick={() => setActiveProduct((p) => Math.min(products.length - 1, p + 1))}
                disabled={activeProduct === products.length - 1}
                aria-label="Selanjutnya"
                className="flex items-center justify-center"
                style={{
                  width: "30px",
                  height: "30px",
                  border: "1px solid rgba(18, 21, 28, 0.15)",
                  color: activeProduct === products.length - 1 ? "#D1D5DB" : "#12151C",
                }}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M4.5 2L8.5 6L4.5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function SectionLabel({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#2B4EFF" }} />
      <span
        className="text-xs tracking-widest uppercase"
        style={{ fontFamily: "'JetBrains Mono', monospace", color: "#2B4EFF", letterSpacing: "0.15em" }}
      >
        {label}
      </span>
      <div className="h-px flex-1 max-w-24" style={{ backgroundColor: "rgba(43, 78, 255, 0.2)" }} />
    </div>
  );
}
