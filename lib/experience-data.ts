export interface Product {
  tabLabel: string;
  name: string;
  category: string;
  status: string;
  statusLive: boolean;
  description: string;
  scope: string;
  contributions: string[];
}

export interface ExperienceEntry {
  docId: string;
  role: string;
  company: string;
  period: string;
  duration: string;
  tags: string[];
  highlights: string[];
  products?: Product[];
}

// Paste isi array `experiences` yang sudah ada di ExperienceSection.tsx lama
// ke sini apa adanya (baris 30–383 di file lama kamu).
export const experiences: ExperienceEntry[] = [
  {
    docId: "DOC.01",
    role: "Senior Product Designer",
    company: "Bank Rakyat Indonesia (BRI)",
    period: "Dec 2023 — Jul 2026",
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


export function getExperienceByDocId(docId: string): ExperienceEntry | undefined {
  return experiences.find((e) => e.docId.toLowerCase() === docId.toLowerCase());
}
