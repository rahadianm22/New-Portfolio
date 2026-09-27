/**
 * Single source of truth for case studies, shared by the homepage
 * Selected Work section and the /case-studies index.
 *
 * `cover` is only set where a real screen exists in /public. Studies
 * without one carry `coverNote` instead, so nothing is faked (R-38).
 */
export type CaseStudy = {
  id: string;
  eyebrow: string;
  title: string;
  summary: string;
  tags: string[];
  href: string;
  /** Real image from /public. Omitted when no screen can be shown. */
  cover?: string;
  coverAlt?: string;
  coverWidth?: number;
  coverHeight?: number;
  /** Shown in place of a cover, explaining honestly why there is none. */
  coverNote?: string;
  /** One measured result, quoted from the case study page. Omit rather than invent one. */
  outcome?: { value: string; label: string };
  /** Surfaced on the homepage Selected Work grid. */
  featured?: boolean;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "brispot",
    eyebrow: "BRI · Internal Lending Platform",
    title: "BRISPOT: Internal Lending Platform",
    summary:
      "Redesigning BRISPOT's Briguna approval workflow to close the hand-off gaps between Initiator, Approver, and Credit Admin Officer, for a workflow now handling 1,000 to 3,000 applications a day per branch.",
    tags: ["Workflow Design", "Multi-role Systems", "Fintech Ops"],
    href: "/case-studies/brispot",
    cover: "/case-studies/brispot/brispot-web-login.png",
    coverAlt: "The BRISPOT Web login screen, welcoming staff to sign in with their Personal Number and password",
    coverWidth: 649,
    coverHeight: 712,
    outcome: { value: "~3 weeks → 3-5 days", label: "loan approval time" },
    featured: true,
  },
  {
    id: "qris-domestik",
    eyebrow: "Bank Syariah Indonesia",
    title: "BSI: QRIS Domestik Payment Flow",
    summary:
      "Mapping two QRIS payment paths (Open Amount and Closed Amount) into one connected flow, with PIN confirmation, optional tipping, and every failure state a scan can hit.",
    tags: ["Payment Flow", "Edge-case Design", "Mobile Banking"],
    href: "/case-studies/qris-domestik",
    cover: "/case-studies/qris-domestik/bsi-mobile-qris-merchants.jpg",
    coverAlt: "BSI Mobile open on its QRIS scanner, surrounded by merchant QRIS codes for a coffee shop, bike store, petrol station, minimarket and gadget store",
    coverWidth: 1600,
    coverHeight: 1500,
    featured: true,
  },
  {
    id: "bsi",
    eyebrow: "Bank Syariah Indonesia",
    title: "BSI: PIN Confirmation Security",
    summary:
      "Catching a tap-feedback pattern that leaked a customer's PIN through color alone, validating the risk with internal BSI users, and redesigning the confirmation screen so the number pad gives away nothing.",
    tags: ["Security UX", "Usability Testing", "Mobile Banking"],
    href: "/case-studies/bsi",
    cover: "/case-studies/bsi/bsi-pin-confirmation.jpg",
    coverAlt:
      "Two BSI Konfirmasi PIN screens side by side: the empty six-digit entry, and the entry filled with the number pad in use",
    coverWidth: 1800,
    coverHeight: 986,
    outcome: { value: "Teal on press → no color at all", label: "PIN pad feedback" },
    featured: true,
  },
  {
    id: "natuna-digilab",
    eyebrow: "Design System · Personal",
    title: "Natuna Digilab: Unbranded Design System",
    summary:
      "A token-first, unbranded design system built from the recurring weak points I kept hitting across four banking teams. 1,600+ components, five token categories, built on its own terms.",
    tags: ["Design Tokens", "Figma Variables", "Component Architecture"],
    href: "/case-studies/natuna-digilab",
    cover: "/case-studies/natuna-digilab/figma-community-listing.png",
    coverAlt: "The Natuna Digilab design system published on the Figma Community",
    coverWidth: 2146,
    coverHeight: 1654,
    featured: true,
  },
  {
    id: "youtube-download",
    eyebrow: "YouTube · Personal Project",
    title: "YouTube: Redesigning the Download Feature",
    summary:
      "An independent case study on YouTube's offline download feature: validating commuter frustrations through interviews, then cutting deletion and reordering down from double-digit taps to a few.",
    tags: ["Personal Project", "Mobile UX", "User Research"],
    href: "/case-studies/youtube-download",
    coverNote: "Screens live inside the case study.",
  },
  {
    id: "card-delivery-status",
    eyebrow: "Digital Banking · Under NDA",
    title: "Card Delivery Status: Closing a Visibility Gap",
    summary:
      "Benchmarking three banks that already shipped card delivery tracking, then designing the state most of them still handle badly: the delivery that fails.",
    tags: ["Benchmarking", "Edge-case Design", "Mobile Banking"],
    href: "/case-studies/card-delivery-status",
    coverNote: "Client and screens withheld until launch.",
  },
];

export const FEATURED_CASE_STUDIES = CASE_STUDIES.filter((s) => s.featured);
