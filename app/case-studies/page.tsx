import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionLabel } from "@/components/ExperienceSection";

export const metadata = {
  title: "Case Studies · Rahadian Maulana",
  description:
    "In-depth case studies from Rahadian Maulana: the problems, process, and outcomes behind fintech products and design systems.",
};

type CaseStudy = {
  id: string;
  eyebrow: string;
  title: string;
  summary: string;
  tags: string[];
  status: "live" | "soon";
  href: string;
};

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "brispot",
    eyebrow: "BRI · Internal Lending Platform",
    title: "BRISPOT: Internal Lending Platform",
    summary:
      "Redesigning BRISPOT's Briguna approval workflow to close the hand-off gaps between Initiator, Approver, and Credit Admin Officer, for a workflow now handling 1,000–3,000 applications a day per branch.",
    tags: ["Workflow Design", "Multi-role Systems", "Fintech Ops"],
    status: "live",
    href: "/case-studies/brispot",
  },
  {
    id: "bsi",
    eyebrow: "Bank Syariah Indonesia",
    title: "BSI: PIN Confirmation Security",
    summary:
      "Catching a tap-feedback pattern that leaked a customer's PIN through color alone, validating the risk with internal BSI users, and redesigning the confirmation screen so the number pad gives away nothing.",
    tags: ["Security UX", "Usability Testing", "Mobile Banking"],
    status: "live",
    href: "/case-studies/bsi",
  },
  {
    id: "qris-domestik",
    eyebrow: "Bank Syariah Indonesia",
    title: "BSI: QRIS Domestik Payment Flow",
    summary:
      "Mapping two QRIS payment paths (Open Amount and Closed Amount) into one connected flow, with PIN confirmation, optional tipping, and every failure state a scan can hit.",
    tags: ["Payment Flow", "Edge-case Design", "Mobile Banking"],
    status: "live",
    href: "/case-studies/qris-domestik",
  },
  {
    id: "youtube-download",
    eyebrow: "YouTube · Personal Project",
    title: "YouTube: Redesigning the Download Feature",
    summary:
      "An independent case study on YouTube's offline download feature: validating commuter frustrations through interviews, then cutting deletion and reordering down from double-digit taps to a few.",
    tags: ["Personal Project", "Mobile UX", "User Research"],
    status: "live",
    href: "/case-studies/youtube-download",
  },
  {
    id: "card-delivery-status",
    eyebrow: "Digital Banking · Under NDA",
    title: "Card Delivery Status: Closing a Visibility Gap",
    summary:
      "Benchmarking three banks that already shipped card delivery tracking, then designing the state most of them still handle badly: the delivery that fails. Client and screens withheld until launch.",
    tags: ["Benchmarking", "Edge-case Design", "Mobile Banking"],
    status: "live",
    href: "/case-studies/card-delivery-status",
  },
  {
    id: "natuna-digilab",
    eyebrow: "Design System · Personal",
    title: "Natuna Digilab: Unbranded Design System",
    summary:
      "A token-first, unbranded design system built from the recurring weak points I kept hitting across four banking teams. 1,600+ components, five token categories, built on its own terms.",
    tags: ["Design Tokens", "Figma Variables", "Component Architecture"],
    status: "live",
    href: "/case-studies/natuna-digilab",
  },
];

export default function CaseStudiesPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 md:px-12" style={{ backgroundColor: "#EDEFF5" }}>
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs tracking-wider uppercase mb-8"
            style={{ fontFamily: "'Urbanist', sans-serif", color: "#2B4EFF", textDecoration: "none" }}
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M8 2L2 8M2 8H7M2 8V3" stroke="#2B4EFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to Homepage
          </Link>

          <span
            className="block text-xs tracking-widest uppercase mb-3"
            style={{ fontFamily: "'Urbanist', sans-serif", color: "#2B4EFF", letterSpacing: "0.15em" }}
          >
            // Case Studies
          </span>
          <h1
            className="text-4xl md:text-5xl mb-5"
            style={{ fontFamily: "'Urbanist', sans-serif", fontWeight: 700, color: "#12151C", letterSpacing: "-0.02em" }}
          >
            The story behind the work.
          </h1>
          <p
            className="text-base md:text-lg max-w-2xl leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif", color: "#6B7280" }}
          >
            Not just before/after screens: the problem that started it, the constraints that shaped it,
            and what actually happened once it shipped. This is a separate space from the rest of the
            portfolio, built for the projects that deserve a full walkthrough instead of a summary.
          </p>
        </div>
      </section>

      {/* Case study list */}
      <section className="pb-24 px-6 md:px-12" style={{ backgroundColor: "#EDEFF5" }}>
        <div className="max-w-4xl mx-auto">
          <SectionLabel label="// Full Index" />

          <div className="mt-8 flex flex-col gap-5">
            {CASE_STUDIES.map((study) => (
              <CaseStudyCard key={study.id} study={study} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function CaseStudyCard({ study }: { study: CaseStudy }) {
  const isLive = study.status === "live";

  const Wrapper = isLive ? Link : "div";
  const wrapperProps = isLive ? { href: study.href } : {};

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Wrapper
      {...(wrapperProps as any)}
      className={`group block relative p-6 md:p-8 ${isLive ? "press case-study-card" : ""}`}
      style={{
        backgroundColor: "#FFFFFF",
        border: "1px solid rgba(18, 21, 28, 0.1)",
        textDecoration: "none",
        cursor: isLive ? "pointer" : "default",
      }}
    >
      <div className="flex items-start justify-between gap-4 flex-wrap mb-3">
        <span
          className="text-xs tracking-widest uppercase"
          style={{ fontFamily: "'Urbanist', sans-serif", color: "#2B4EFF", letterSpacing: "0.1em" }}
        >
          {study.eyebrow}
        </span>

        {isLive ? (
          <span
            className="flex items-center gap-1.5 text-xs px-2.5 py-1"
            style={{
              fontFamily: "'Urbanist', sans-serif",
              color: "#16A34A",
              backgroundColor: "rgba(22, 163, 74, 0.08)",
              border: "1px solid rgba(22, 163, 74, 0.2)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#16A34A" }} />
            Read case study
          </span>
        ) : (
          <span
            className="text-xs px-2.5 py-1"
            style={{
              fontFamily: "'Urbanist', sans-serif",
              color: "#6B7280",
              backgroundColor: "rgba(107, 114, 128, 0.08)",
              border: "1px solid rgba(107, 114, 128, 0.2)",
            }}
          >
            Coming soon
          </span>
        )}
      </div>

      <h2
        className="text-2xl md:text-3xl mb-3 transition-colors duration-150"
        style={{
          fontFamily: "'Urbanist', sans-serif",
          fontWeight: 700,
          color: "#12151C",
        }}
      >
        {study.title}
        {isLive && (
          <span
            className="inline-block ml-2 transition-transform duration-200 group-hover:translate-x-1"
            style={{ color: "#2B4EFF" }}
          >
            →
          </span>
        )}
      </h2>

      <p className="text-sm leading-relaxed mb-4 max-w-2xl" style={{ fontFamily: "'Inter', sans-serif", color: "#6B7280" }}>
        {study.summary}
      </p>

      <div className="flex flex-wrap gap-2">
        {study.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-1 tracking-wide uppercase"
            style={{
              fontFamily: "'Urbanist', sans-serif",
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
    </Wrapper>
  );
}