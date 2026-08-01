export interface Product {
  tabLabel: string;
  name: string;
  category: string;
  status: string;
  statusLive: boolean;
  description: string;
  scope: string;
  contributions: string[];
  tech?: string;
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
    tags: ["Internal Tools", "Design System", "Multi-role Workflow", "Data Dashboard", "Mobile Banking", "Credit & Lending"],
    highlights: [
      "Merancang ulang alur approval multi-role (Initiator, Approver, Credit Admin Officer) untuk BRISPOT, termasuk ARCI risk-evaluation engine dan logika Early Warning System.",
      "Memimpin sisi UI migrasi legacy-to-React modul disbursement Checker & Signer, menjaga stabilitas antarmuka bagi pengguna harian saat akses dipindah ke single sign-on gateway.",
      "Membantu men-scale design system enterprise BRI dengan variable tokens, mempercepat design-to-dev handoff, serta menyederhanakan alur Credit Card Installment Conversion dan kartu debit di BRImo/QITA.",
    ],
    products: [
      {
        tabLabel: "BRISPOT",
        name: "BRISPOT — Internal Lending Platform",
        category: "BRIGUNA & KPR",
        status: "Live — On Deployment & Active Development",
        statusLive: true,
        description:
          "Comprehensive internal lending platform for processing BRI personal loan (Briguna) and mortgage (KPR) applications, streamlining end-to-end approval workflows and optimizing Whitelist management, credit administration, and digital agreement signing across both products.",
        scope: "scope: B2B Internal — Initiators, Decision Makers, ADK Officers, & Sales Officers",
        contributions: [
          "The loan approval process had too many disconnected hand-offs between roles, so I redesigned the workflow across Initiator, Approver, and Credit Admin Officer, along with the ARCI risk-evaluation engine and Early Warning System logic that feed into it.",
          "Designed the Whitelist and cross-bank Open Flagging modules so credit ops could pre-qualify leads without manually cross-checking eligibility against multiple bank records.",
          "Worked closely with engineering through the legacy-to-React migration of the Checker & Signer disbursement modules, the priority was keeping the interface stable for daily users while access moved onto a single sign-on gateway.",
          "Helped scale BRI's enterprise design system with variable tokens, which took a lot of the guesswork out of design-to-dev handoff for the front-end teams building against it.",
          "Later extended into KPR Digital, designing the notary order workflow and an RBAC-based system for managing national quota allocations.",
        ],
        tech: "Figma, FigJam, Design Variable Tokens, Auto Layout, Jira, Confluence, Notion",
      },
      {
        tabLabel: "BRImo & QITA",
        name: "BRImo (Super App) & QITA — Credit Card, Lifestyle, Biller",
        category: "CONSUMER-FACING — SUPER APP",
        status: "Live — On Deployment & Active Development",
        statusLive: true,
        description:
          "Consumer-facing modules across BRImo and QITA super apps, covering Credit Card & Installment Conversion, physical debit card issuance journey, Biller payments, and Lifestyle features, optimized for seamless end-to-end user experience.",
          scope: "Consumer-facing — Credit Card, Lifestyle, and Biller modules",
          contributions: [
          "Simplified the Credit Card Installment Conversion journey, fewer steps, clearer copy at each edge case, to bring down where people were dropping off mid-flow.",
          "Benchmarked competitor debit card journeys before rebuilding BRI's own request-to-activation flow, including live shipment tracking, return handling, and the in-app notifications around it.",
          "Standardized the biller payment components in the design system so the flow felt consistent across billers instead of each one following its own pattern.",
          "Sat in on design QA regularly with engineering to catch implementation drift before release, which mattered more here than on most products given the transaction risk involved.",
        ],
        tech: "Figma, FigJam, Design Variable Tokens, Notion",
      },
      {
        tabLabel: "BUMDes BRI",
        name: "BUMDes BRI — Digital Platform",
        category: "INTERNAL PLATFORM",
        status: "Completed — Transition to Agen BRILink",
        statusLive: false,
        description:
          "A digital platform designed to modernize BUMDes operational workflows, financial reporting, and educational resources, built before transitioning focus to the BRILink Agent segment.",
        scope: "Internal — end-to-end design from discovery to MVP roll-out",
        contributions: [
          "Enhanced the core UI/UX across dashboard, educational content, and financial report pages by optimizing navigation hierarchy and reducing user click depth, ensuring a seamless experience for non-tech-savvy users in rural areas.",
          "Built and maintained a comprehensive design system, establishing foundational design tokens for color styles and number systems (spacing, layout grids, corner radii) alongside reusable UI components (modals, forms, charts, and navigation) to streamline designer-developer handoff.",
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
    tags: ["Banking", "Dashboard", "3D Illustration", "Mobile App Design", "Design System"],
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
        tabLabel: "Malline",
        name: "Website E-commerce Malline",
        category: "E-COMMERCE PLATFORM — B2C",
        status: "No Longer Available",
        statusLive: false,
        description:
          "I founded a startup with my small team from campus, focused on e-commerce. I created the UI design concept for the home, category, product, cart, and order pages. I also assisted the front-end team in developing the website.",
        scope: "B2C E-Commerce Platform",
        contributions: [
          "Designed the shopping experience end to end — home, category, product, cart, checkout — and the admin dashboard, then worked with our front-end team to get it live on WordPress.",
          "Ran surveys and usability tests throughout, which is where most of our early product decisions came from before we had any real usage data to go on.",
        ],
        tech: "E-commerce, WordPress, Adobe XD",
      },
    ],
  },
];


export function getExperienceByDocId(docId: string): ExperienceEntry | undefined {
  return experiences.find((e) => e.docId.toLowerCase() === docId.toLowerCase());
}