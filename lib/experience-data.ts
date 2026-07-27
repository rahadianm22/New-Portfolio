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
  description?: string;
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
      "En",
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
          "Design System Scaling: Collaborated on scaling the internal enterprise design system by implementing robust design variable tokens to guarantee visual consistency, streamline design-to-development handovers for front-end teams, and ensure rapid component scalability across all BRISPOT modules.",
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
        name: "BYOND by BSI",
        category: "MOBILE BANKING — SHARIA SUPER APP",
        status: "Live — Released on Google Play & App Store",
        statusLive: true,
        description:
          "Contributed to the digital transformation of Bank Syariah Indonesia (BSI) by designing core mobile banking features and scaling the enterprise design system. Focused on establishing advanced Figma workflows, component libraries, and Auto Layout architecture to drive UI consistency and accelerate cross-functional production.",
        scope: "B2C Mobile Banking — Retail Customers & General Public",
        contributions: [
          "Streamlined and maintained the enterprise design system library to accelerate design-to-development handoffs and ensure component scalability across platforms.",
          "Architected intuitive user flows and wireframes for upcoming products, ensuring seamless integration and alignment with Bank BSI's core application ecosystem and user behaviors.",
          "Fostered cross-functional collaboration with Product Owners, Business Analysts, stakeholders, and end-users to successfully translate complex business requirements into user-centered design solutions.",
          "Conducted comprehensive user research and usability testing to gather actionable insights and evaluate the long-term impact of new features on the Bank BSI application's user experience.",
          "Optimized design workflow and file architecture by structuring Figma files around specific epics, significantly improving team collaboration efficiency and project organization.",
        ],
      },
    ],
  },
  {
    docId: "DOC.03",
    role: "UI/UX Designer",
    company: "Infosys Solusi Terpadu",
    period: "Mar 2021 — Mei 2022",
    description:
      "Merancang sistem desain untuk BTN Conventional & Syariah, serta dashboard analitik multi-dimensi untuk sistem manajemen ATM CIMB.",
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
        name: "BTN Conventional (bale by BTN)",
        category: "DIGITAL BANKING — RETAIL SERVICES",
        status: "Live — Released on Google Play & App Store",
        statusLive: true,
        description:
          "A comprehensive multi-platform digital banking application designed for BTN retail customers. Built to simplify daily financial transactions, account management, and banking services through a seamless mobile and web user experience.",
        scope: "B2C Mobile Banking — Retail Customers & General Public",
        contributions: [
          "Built and scaled a multi-platform design system in Figma, standardizing UI components to ensure design consistency across mobile and web banking products.",
          "Developed structured design documentation to establish a single source of truth, accelerating cross-functional production workflows and team alignment.",
          "Architected user flows and wireframes by translating complex banking requirements into intuitive, user-centric mobile application layouts.",
          "Created rapid, high-fidelity interactive prototypes to demonstrate product concepts and secure stakeholder alignment during client presentations.",
        ],
      },
      {
        tabLabel: "btn-syariah",
        name: "BTN Syariah",
        category: "MOBILE BANKING — SHARIA SERVICES",
        status: "Unreleased Concept",
        statusLive: false,
        description:
          "A dedicated mobile banking application concept designed to adapt BTN's core digital banking services into BTN Syariah's distinct brand identity and Sharia-compliant user experience.",
        scope: "B2C Mobile Banking — Syariah Retail Customers",
        contributions: [
          "Led the migration and adaptation of the core design system from BTN Conventional to align seamlessly with BTN Syariah’s distinct brand identity.",
          "Designed critical, high-traffic mobile app screens, including Home, Payment, Confirmation, MPIN, and Receipt modules to ensure an optimal user experience.",
          "Crafted custom 3D visual assets and icons optimized for mobile device interfaces, elevating the app’s overall visual appeal and engagement.",
          "Fostered cross-functional collaboration with business analysts, product managers, and engineering teams to ensure accurate design execution and brand compliance.",
        ],
      },
      {
        tabLabel: "cimb-atm",
        name: "CIMB ATM",
        category: "INTERNAL PLATFORM — WEB DASHBOARD",
        status: "Live — Deployed Internally",
        statusLive: true,
        description:
          "An internal web dashboard management system designed for CIMB to monitor, manage, and streamline ATM network operations, system maintenance, and financial transaction analytics.",
        scope: "Internal Operations — Operations & System Maintenance Team",
        contributions: [
          "Structured intuitive user flows, sitemaps, and interactive prototypes for the web dashboard platform to streamline complex administrative operations.",
          "Transformed complex raw data and heavy data tables into clean, visually digestible, and functional dashboard user interfaces.",
          "Designed core mobile application screens focusing on Dashboard, Financial Transactions, and System Maintenance modules.",
          "Conducted competitor analysis and design alignment sessions to benchmark UI/UX standards and effectively present mockups to corporate client stakeholders.",
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
    tags: ["E-commerce", "End-to-end", "Wireframing","Design"],
    products: [
      {
        tabLabel: "BRISPOT",
        name: "Website E-commerce Malline",
        category: "INTERNAL PLATFORM — LENDING",
        status: "No Longer Available",
        statusLive: false,
        description:
          "I founded a startup with my small team from campus, focused on e-commerce. I created the UI design concept for the home, category, product, cart, and order pages. I also assisted the front-end team in developing the website.",
        scope: "B2C E-Commerce Platform",
        contributions: [
          "Designed and implemented an admin dashboard from initial wireframing and high-fidelity mockups through to successful WordPress integration.",
          "Conducted end-to-end user research, utilizing surveys, data analysis, and usability testing to gather actionable user insights and inform design decisions.",
          "Established cohesive user interfaces by unifying visual design systems, including color palettes, typography, imagery guidelines, and micro-animations for an enhanced user experience.",
        ],
      },
    ],
  },
];


export function getExperienceByDocId(docId: string): ExperienceEntry | undefined {
  return experiences.find((e) => e.docId.toLowerCase() === docId.toLowerCase());
}