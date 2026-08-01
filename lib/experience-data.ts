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
    tags: ["Internal Tools", "Design System", "Multi-role Workflow", "Data Dashboard", "Mobile Banking", "Credit & Lending"],
    highlights: [
      "En",
    ],
    products: [
      {
        tabLabel: "BRISPOT",
        name: "BRISPOT - BRIGUNA Internal Lending Platform",
        category: "INTERNAL PLATFORM — LENDING",
        status: "Live — On Deployment & Active Development",
        statusLive: true,
        description:
          "Internal BRI lending platform for processing Briguna personal loan applications, streamlining end-to-end approval workflows, and optimizing Whitelist management, credit administration, and digital agreement signing.",
        scope: "scope: B2B Internal — Initiators, Decision Makers, ADK Officers, & Sales Officers",
        contributions: [
          "Approval Workflows & Risk Analysis: Redesigned the ARCI risk evaluation engine, multi-role approval flows (Initiator > Approver > ADK Officer), along with Early Warning System (EWS) and Taspen pre-retirement modules.",
          "Whitelist & Open Flagging Management: Designed request, decision, and tracking modules for Briguna Whitelist data alongside cross-bank Open Flagging workflows to accelerate market acquisition.",
          "Credit Administration & Digital Signing: Architected credit agreement flows, SPAJK insurance handling, and Digital Sign integration to digitize contract execution and administrative tasks.",
          "Monitoring & Analytics Dashboards: Built comprehensive dashboards tracking loan funneling, disbursement status, gimmick promotion quotas, partner collaborations, and Sales Officer activity logs.",
          "Digital Collection & Portfolio Tracking: Designed customer-level Digital Collection views and existing loan portfolio monitoring to enhance debt recovery tracking and asset supervision.",
          "Web Migration & UI Modernization: Led UI revamp efforts during the legacy to React web migration, ensuring design system compliance, optimized performance, and scalable component architecture.",
          "Design System Scaling: Collaborated on scaling the internal enterprise design system by implementing robust design variable tokens to guarantee visual consistency, streamline design to development handovers for front-end teams, and ensure rapid component scalability across all BRISPOT modules.",
        ],
      },
      {
        tabLabel: "KPR Digital",
        name: "BRISPOT - KPR Digital (Internal Mortgage Application Platform)",
        category: "INTERNAL PLATFORM — LENDING",
        status: "Live — On Deployment & Active Development",
        statusLive: true,
        description:
          "Digital mortgage application platform by BRISPOT enabling customers to apply for BRI home loans, while streamlining internal workflows between initiators, decision-makers, and Notaries, optimized for web and tablet.",
        scope: "scope: Internal — discovery to initial implementation phase",
        contributions: [
          "Notary Order & Accessory Agreements: Designed flexible notary data entry workflows (single/multi-entry) with automated fee mapping and collateral document verification.",
          "Leads Monitoring & Customer Visits: Created field activity reporting modules, financial analysis (P&L preview), and tracking for credit decision history.",
          "Admin & Quota Management System: Architected a Role-Based Access Control (RBAC) system and a centralized dashboard for managing consumer gimmick and national quota allocations.",
        ],
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
          "Redesigned the Credit Card & Installment Conversion flow by streamlining multi-step journeys into a frictionless experience, optimizing microcopy and edge-case feedback to minimize drop-offs and drive higher conversion rates.",
          "Conducted competitive benchmarking and redesigned the end-to-end physical debit card journey covering request, live shipment tracking, activation, return handling, and in-app notifications streamlining screen flows to deliver a faster, more competitive user experience.",
          "Collaborated with Product Owners and engineers to align design decisions with technical feasibility, while conducting rigorous Design QA to ensure visual accuracy and flawless UI implementation across BRImo and Qita features.",
          "Standardized biller UI components using the design system while optimizing the payment flow hierarchy to enhance clarity, reduce user friction, and prevent transaction errors."
        ],
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
        tabLabel: "BRISPOT",
        name: "Website E-commerce Malline",
        category: "E-COMMERCE PLATFORM — B2C",
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