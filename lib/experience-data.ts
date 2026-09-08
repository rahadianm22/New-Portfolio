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
  products: Product[];
}

export const experiences: ExperienceEntry[] = [
  {
    docId: "DOC.01",
    role: "Senior Product Designer",
    company: "Bank Rakyat Indonesia (BRI)",
    period: "Dec 2023 – Jul 2026",
    duration: "2.5+ yr",
    tags: ["Internal Tools", "Design System", "Multi-role Workflow", "Data Dashboard", "Mobile Banking", "Credit & Lending"],
    products: [
      {
        tabLabel: "BRISPOT",
        name: "BRISPOT: Internal Lending Platform",
        category: "BRIGUNA & KPR",
        status: "Live · On Deployment & Active Development",
        statusLive: true,
        description:
          "BRI's internal lending platform for Briguna (personal loan) and KPR (mortgage) applications, covering the approval workflow end to end plus Whitelist management, credit administration, and digital agreement signing.",
        scope: "scope: B2B internal, for Initiators, Decision Makers, ADK Officers, and Sales Officers",
        contributions: [
          "The loan approval process had too many disconnected hand-offs between roles, stretching timelines to around 3 weeks. I redesigned the workflow across Initiator, Approver, and Credit Admin Officer (plus the ARCI risk-evaluation engine and Early Warning System logic feeding into it), bringing that down to 3-5 days.",
          "Designed the Whitelist and cross-bank Open Flagging modules so credit ops could pre-qualify leads without manually cross-checking eligibility against multiple bank records.",
          "Worked closely with engineering through the legacy-to-React migration of the Checker & Signer disbursement modules, the priority was keeping the interface stable for daily users while access moved onto a single sign-on gateway.",
          "Helped scale BRI's enterprise design system with variable tokens, which took a lot of the guesswork out of design-to-dev handoff for the front-end teams building against it.",
          "Later extended into KPR Digital, designing the notary order workflow and an RBAC-based system for managing national quota allocations.",
        ],
        tech: "Figma, FigJam, Design Variable Tokens, Auto Layout, Jira, Confluence, Notion",
      },
      {
        tabLabel: "BRImo & QITA",
        name: "BRImo (Super App) & QITA: Credit Card, Lifestyle, Biller",
        category: "CONSUMER-FACING · SUPER APP",
        status: "Live · On Deployment & Active Development",
        statusLive: true,
        description:
          "Consumer-facing modules across the BRImo and QITA super apps: Credit Card and Installment Conversion, the physical debit card issuance journey, Biller payments, and Lifestyle features.",
        scope: "Consumer-facing: Credit Card, Lifestyle, and Biller modules",
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
        name: "BUMDes BRI: Digital Platform",
        category: "INTERNAL PLATFORM",
        status: "Completed · Transitioned to Agen BRILink",
        statusLive: false,
        description:
          "A digital platform for BUMDes operational workflows, financial reporting, and educational resources, built before the team shifted focus to the BRILink Agent segment.",
        scope: "Internal: end-to-end design from discovery to MVP roll-out",
        contributions: [
          "Reworked the dashboard, educational content, and financial report pages around a flatter navigation hierarchy, cutting how many clicks it took to reach anything. Most of the people using it were in rural areas and not used to software like this.",
          "Built and maintained the design system behind it: color and number tokens (spacing, layout grids, corner radii) plus the reusable components (modals, forms, charts, navigation) the developers built against.",
        ],
      },
    ],
  },
  {
    docId: "DOC.02",
    role: "Product Designer",
    company: "Bank Syariah Indonesia (BSI)",
    period: "Aug 2022 – Jul 2023",
    duration: "1 yr",
    tags: ["Mobile Banking", "Design System", "User Research"],
    products: [
      {
        tabLabel: "BYOND",
        name: "BYOND by BSI: Mobile Banking App",
        category: "MOBILE BANKING · POST-MERGER REBRAND",
        status: "Live · Released on Google Play & App Store",
        statusLive: true,
        description:
          "BSI's mobile banking app after the three-bank merger: consolidating the design system and rebuilding the enterprise component library around the new brand.",
        scope: "B2C mobile banking: retail customers and general public",
        contributions: [
          "Took over the enterprise design system after the merger and rebuilt the parts of the component library that had drifted out of sync with the new brand.",
          "Ran usability testing on core banking flows and used what came out of it to shape what actually made it into the post-rebrand roadmap, rather than working off assumptions.",
          "Reorganized the Figma files around product epics instead of loose screens, which made it noticeably easier for new designers joining mid-project to find their footing.",
        ],
        tech: "Figma, Auto Layout, FigJam, Design System Library",
      },
    ],
  },
  {
    docId: "DOC.03",
    role: "UI/UX Designer",
    company: "Infosys Solusi Terpadu",
    period: "Mar 2021 – May 2022",
    description:
      "Merancang sistem desain untuk BTN Conventional & Syariah, serta dashboard analitik multi-dimensi untuk sistem manajemen ATM CIMB.",
    duration: "1+ yr",
    tags: ["Banking", "Dashboard", "3D Illustration", "Mobile App Design", "Design System"],
    products: [
      {
        tabLabel: "btn-conventional",
        name: "BTN Conventional (bale by BTN)",
        category: "DIGITAL BANKING · RETAIL SERVICES",
        status: "Live · Released on Google Play & App Store",
        statusLive: true,
        description:
          "BTN's retail banking app across mobile and web, covering daily transactions, account management, and the rest of the core banking services.",
        scope: "B2C mobile banking: retail customers and general public",
        contributions: [
          "Built the design system in Figma for both the mobile and web products, so the same components carried across instead of each platform drifting on its own.",
          "Wrote the documentation alongside it, so engineers and BAs had one place to check how a component behaved instead of asking a designer every time.",
          "Turned the banking requirements, which arrived dense and highly technical, into user flows and wireframes the team could actually build from.",
          "Built clickable prototypes for client presentations, which settled disagreements faster than static mockups did.",
        ],
      },
      {
        tabLabel: "btn-syariah",
        name: "BTN Syariah",
        category: "MOBILE BANKING · SHARIA SERVICES",
        status: "Unreleased Concept",
        statusLive: false,
        description:
          "A concept for adapting BTN's core banking services to BTN Syariah's own brand and Sharia-compliant requirements.",
        scope: "B2C mobile banking: Syariah retail customers",
        contributions: [
          "Migrated the core design system over from BTN Conventional and reworked it to fit BTN Syariah's brand.",
          "Designed the highest-traffic screens: Home, Payment, Confirmation, MPIN, and Receipt.",
          "Made the custom 3D icons and visual assets in Blender, sized down to stay legible at mobile icon scale.",
          "Worked with the business analysts, product managers, and engineers through build to keep what shipped close to what was designed.",
        ],
      },
      {
        tabLabel: "cimb-atm",
        name: "CIMB ATM",
        category: "INTERNAL PLATFORM · WEB DASHBOARD",
        status: "Live · Deployed Internally",
        statusLive: true,
        description:
          "CIMB's internal web dashboard for monitoring the ATM network: operations, system maintenance, and transaction analytics.",
        scope: "Internal: operations and system maintenance teams",
        contributions: [
          "Mapped the user flows, sitemap, and prototypes for the dashboard, which had a long list of administrative operations to account for.",
          "Designed the table-heavy screens so the operations team could scan a large dataset without losing their place in it.",
          "Designed the core screens for Dashboard, Financial Transactions, and System Maintenance.",
          "Ran competitor analysis and design alignment sessions before presenting mockups to the client's stakeholders.",
        ],
      },
    ],
  },
  {
    docId: "DOC.04",
    role: "Co-Founder & UI/UX Designer",
    company: "Malline Indonesia",
    period: "Sep 2019 – Feb 2021",
    duration: "1.5+ yr",
    tags: ["E-commerce", "End-to-end", "Wireframing", "Design"],
    products: [
      {
        tabLabel: "Malline",
        name: "Website E-commerce Malline",
        category: "E-COMMERCE PLATFORM · B2C",
        status: "No Longer Available",
        statusLive: false,
        description:
          "I founded a startup with my small team from campus, focused on e-commerce. I created the UI design concept for the home, category, product, cart, and order pages. I also assisted the front-end team in developing the website.",
        scope: "B2C E-Commerce Platform",
        contributions: [
          "Designed the shopping experience end to end (home, category, product, cart, checkout) plus the admin dashboard, then worked with our front-end team to get it live on WordPress.",
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

export const profileSummary =
  "Senior Product Designer with 5+ years in regulated, high-stakes financial products: consumer banking apps on one side, internal lending operations tools on the other. Most of what I do well is untangling requirements that arrive fragmented and highly technical, then turning them into product logic that both end users and back-office operators can actually work with: multi-role approval flows, dense operational dashboards, processes with more edge cases than happy paths. That's been the throughline across BRI's national lending platform, BSI's post-merger design system, and a couple of internal banking tools before that.";

export const keyAchievements: string[] = [
  "Redesigned BRISPOT's multi-role approval workflow, cutting loan approval time from ~3 weeks to 3-5 days, and it's still what credit ops uses to process applications at national scale today.",
  "Reworking the card issuance and installment conversion journeys on BRImo/QITA brought drop-off down enough that the flow became a reference point for other lifestyle features on the app.",
  "Helped move BRI's design system from scattered one-off styles to a token-based system now shared across multiple product squads.",
  "Led the UI side of moving disbursement verification (Checker & Signer) off legacy infrastructure onto React, without disrupting access for the ops teams who depend on it daily.",
];

export interface SkillGroup {
  label: string;
  items: string;
}

export const skillGroups: SkillGroup[] = [
  {
    label: "Systems & platform design",
    items: "multi-role/back-office workflows, data-heavy dashboards, design token architecture, edge-case mapping",
  },
  {
    label: "Design systems & tools",
    items: "Figma, FigJam, Variable Tokens, Auto Layout, component architecture",
  },
  { label: "Process", items: "user research, usability testing, rapid prototyping, design QA" },
  {
    label: "Working with others",
    items: "partnering with PMs, engineers, data scientists, and ops teams inside regulated environments (Jira, Confluence, Notion)",
  },
  {
    label: "Also picking up",
    items: "AI-assisted design-to-code workflows (Claude Code), enough front-end coding to prototype interactions myself",
  },
  { label: "Languages", items: "Indonesian (native), English (intermediate)" },
];
