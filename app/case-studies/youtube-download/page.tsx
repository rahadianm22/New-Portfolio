import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionLabel } from "@/components/ExperienceSection";

export const metadata = {
  title: "YouTube: Redesigning the Download Feature · Rahadian Maulana",
  description:
    "An independent case study on YouTube's offline download feature: validating commuter frustrations through interviews, then redesigning deletion and reordering to cut the steps down.",
};

const QUICK_FACTS = [
  { label: "Role", value: "UX/UI Designer" },
  { label: "Type", value: "Independent Case Study" },
  { label: "Platform", value: "YouTube: Download Feature" },
  { label: "Timeline", value: "2023" },
];

const PROBLEMS = [
  {
    label: "What kept happening",
    body: "Downloaded videos couldn't be saved to local device storage, and disappeared on their own if left unwatched too long. On a route with patchy signal, losing a video I'd deliberately downloaded defeated the point of downloading it.",
  },
  {
    label: "What made it worse",
    body: "Deleting was one video at a time, no batch option. Resolution couldn't be changed after downloading. Reordering a queue of a few videos took 10 taps across 11 screens, more effort than just rewatching whatever was already first in line.",
  },
];

const PROCESS = [
  {
    title: "Checking it wasn't just me",
    body: "Before designing anything, I ran interviews and a survey with other people who download YouTube videos for offline viewing. The same five complaints came up independently. This wasn't one commuter's pet peeve.",
  },
  {
    title: "Mapping the real cost in steps",
    body: "Traced the existing flows screen by screen instead of going on feel: deleting a video took 3 taps across 4 screens, reordering took 10 taps across 11. That gap between what it should take and what it actually took became the design target.",
  },
  {
    title: "Designing around Haikal",
    body: "Built the redesign around Haikal, a 27-year-old commuter persona pulled from the interviews: an hour each way, tutorial and gaming content, wants videos ready to go without fighting the app to manage them.",
  },
];

const TAP_COMPARISON = [
  { task: "Delete a video", before: 3, beforeLabel: "3 taps · 4 screens", after: 2, afterLabel: "2 taps · 1 screen (swipe)" },
  { task: "Reorder the queue", before: 10, beforeLabel: "10 taps · 11 screens", after: 4, afterLabel: "4 taps · 3 screens" },
];

export default function YoutubeDownloadCaseStudy() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 md:px-12" style={{ backgroundColor: "#EDEFF5" }}>
        <div className="max-w-4xl mx-auto">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-xs tracking-wider uppercase mb-8"
            style={{ fontFamily: "'Urbanist', sans-serif", color: "#2B4EFF", textDecoration: "none" }}
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M8 2L2 8M2 8H7M2 8V3" stroke="#2B4EFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to Case Studies
          </Link>

          <span
            className="block text-xs tracking-widest uppercase mb-3"
            style={{ fontFamily: "'Urbanist', sans-serif", color: "#2B4EFF", letterSpacing: "0.15em" }}
          >
            // Personal Project · Mobile UX
          </span>
          <h1
            className="text-4xl md:text-6xl mb-6"
            style={{ fontFamily: "'Urbanist', sans-serif", fontWeight: 700, color: "#12151C", letterSpacing: "-0.02em" }}
          >
            YouTube: Redesigning the Download Feature.
          </h1>
          <p
            className="text-lg md:text-xl max-w-2xl leading-relaxed mb-10"
            style={{ fontFamily: "'Inter', sans-serif", color: "#3D4557" }}
          >
            I commute an hour each way and rely on YouTube&apos;s offline downloads to get through it.
            Videos vanishing on their own and deleting them one at a time kept bothering me enough that
            I turned it into a full case study: interviews, a redesigned deletion flow, a faster way to
            reorder.
          </p>

          {/* Quick facts */}
          <div
            className="flex flex-wrap gap-x-8 gap-y-4 p-6"
            style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(18, 21, 28, 0.1)" }}
          >
            {QUICK_FACTS.map((fact) => (
              <div key={fact.label}>
                <span
                  className="block text-[10px] tracking-widest uppercase mb-1"
                  style={{ fontFamily: "'Urbanist', sans-serif", color: "#6B7280", letterSpacing: "0.1em" }}
                >
                  {fact.label}
                </span>
                <span
                  className="text-sm"
                  style={{ fontFamily: "'Urbanist', sans-serif", fontWeight: 600, color: "#12151C" }}
                >
                  {fact.value}
                </span>
              </div>
            ))}
          </div>

          {/* Link to original Medium write-up */}
          <a
            href="https://medium.com/@Rahadianm22/case-study-redesigning-feature-of-youtube-download-3f4d7e63a8e0"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 transition-all duration-150 hover:bg-[#1937B3]"
            style={{
              fontFamily: "'Urbanist', sans-serif",
              fontWeight: 600,
              fontSize: "13px",
              backgroundColor: "#2B4EFF",
              border: "1px solid #2B4EFF",
              color: "#FFFFFF",
              textDecoration: "none",
              letterSpacing: "0.02em",
            }}
          >
            Read the original write-up on Medium
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
              <path d="M2 9L9 2M9 2H3.5M9 2V7.5" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </section>

      {/* Context */}
        <section className="py-16 px-6 md:px-12" style={{ backgroundColor: "#FFFFFF" }}>
          <div className="max-w-4xl mx-auto">
            <SectionLabel label="// Context" />
            <p
              className="mt-6 text-base md:text-lg leading-relaxed max-w-3xl"
              style={{ fontFamily: "'Inter', sans-serif", color: "#3D4557" }}
            >
              This wasn&apos;t a client brief. It&apos;s an independent case study I ran on a feature I
              use almost daily. I interviewed and surveyed other commuters who download YouTube videos
              for offline viewing, then designed and prototyped a fix in Figma.
            </p>
          </div>
        </section>

      {/* Problem */}
        <section className="py-16 px-6 md:px-12" style={{ backgroundColor: "#EDEFF5" }}>
          <div className="max-w-4xl mx-auto">
            <SectionLabel label="// The Problem" />
            <div className="mt-8 grid md:grid-cols-2 gap-4">
              {PROBLEMS.map((p) => (
                <div key={p.label} className="p-6" style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(18, 21, 28, 0.1)" }}>
                  <p
                    className="text-xs tracking-wider uppercase mb-3"
                    style={{ fontFamily: "'Urbanist', sans-serif", color: "#FF4B33", letterSpacing: "0.06em" }}
                  >
                    {p.label}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ fontFamily: "'Inter', sans-serif", color: "#3D4557" }}>
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

      {/* Process */}
        <section className="py-16 px-6 md:px-12" style={{ backgroundColor: "#FFFFFF" }}>
          <div className="max-w-4xl mx-auto">
            <SectionLabel label="// Process" />
            <div className="mt-8 space-y-8">
              {PROCESS.map((item, i) => (
                <div key={item.title} className="flex gap-5">
                  <span
                    className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-xs"
                    style={{
                      fontFamily: "'Urbanist', sans-serif",
                      fontWeight: 700,
                      color: "#2B4EFF",
                      border: "1.5px solid rgba(43, 78, 255, 0.3)",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3
                      className="text-lg mb-2"
                      style={{ fontFamily: "'Urbanist', sans-serif", fontWeight: 700, color: "#12151C" }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed max-w-2xl" style={{ fontFamily: "'Inter', sans-serif", color: "#3D4557" }}>
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      {/* The Solution */}
        <section className="py-16 px-6 md:px-12" style={{ backgroundColor: "#EDEFF5" }}>
          <div className="max-w-4xl mx-auto">
            <SectionLabel label="// The Solution" />
            <p className="mt-6 text-base leading-relaxed max-w-3xl" style={{ fontFamily: "'Inter', sans-serif", color: "#3D4557" }}>
              Two ways to delete, depending on the situation: swipe a single video away in place, or
              switch to multi-select to clear several at once instead of repeating the same flow one
              video at a time. Reordering became drag-and-drop directly in the list, instead of routing
              through a separate screen for every move.
            </p>

            {/* Honest before/after: step counts pulled straight from the flow mapping, not a mockup screenshot */}
            <div className="mt-6 p-6 md:p-8" style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(18, 21, 28, 0.1)" }}>
              <div className="space-y-8">
                {TAP_COMPARISON.map((row) => (
                  <div key={row.task}>
                    <p
                      className="text-xs tracking-wider uppercase mb-3"
                      style={{ fontFamily: "'Urbanist', sans-serif", color: "#6B7280", letterSpacing: "0.08em" }}
                    >
                      {row.task}
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <span className="w-14 flex-shrink-0 text-xs" style={{ fontFamily: "'Urbanist', sans-serif", color: "#6B7280" }}>
                          Before
                        </span>
                        <div className="flex-1 h-6" style={{ backgroundColor: "rgba(18, 21, 28, 0.06)" }}>
                          <div
                            className="h-full flex items-center"
                            style={{ width: `${(row.before / 10) * 100}%`, backgroundColor: "rgba(255, 75, 51, 0.65)" }}
                          />
                        </div>
                        <span className="w-40 flex-shrink-0 text-xs" style={{ fontFamily: "'Inter', sans-serif", color: "#3D4557" }}>
                          {row.beforeLabel}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="w-14 flex-shrink-0 text-xs" style={{ fontFamily: "'Urbanist', sans-serif", color: "#6B7280" }}>
                          After
                        </span>
                        <div className="flex-1 h-6" style={{ backgroundColor: "rgba(18, 21, 28, 0.06)" }}>
                          <div
                            className="h-full flex items-center"
                            style={{ width: `${(row.after / 10) * 100}%`, backgroundColor: "#2B4EFF" }}
                          />
                        </div>
                        <span className="w-40 flex-shrink-0 text-xs" style={{ fontFamily: "'Inter', sans-serif", color: "#3D4557" }}>
                          {row.afterLabel}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="pt-6 text-xs" style={{ fontFamily: "'Urbanist', sans-serif", color: "#6B7280" }}>
                Step counts mapped directly from the existing flow vs. the redesigned one, not
                estimates.
              </p>
            </div>
          </div>
        </section>

      {/* Outcome */}
        <section className="py-16 px-6 md:px-12" style={{ backgroundColor: "#FFFFFF" }}>
          <div className="max-w-4xl mx-auto">
            <SectionLabel label="// Outcome" />
            <p className="mt-6 text-sm leading-relaxed max-w-2xl" style={{ fontFamily: "'Inter', sans-serif", color: "#3D4557" }}>
              This was a proposal, not a shipped feature. YouTube doesn&apos;t take outside redesigns,
              and I don&apos;t have adoption numbers to report. What it did do: turn a recurring commute
              annoyance into a fully scoped problem with real numbers behind it, and confirm through
              other commuters that the friction wasn&apos;t just in my head.
            </p>
          </div>
        </section>

      {/* Reflection */}
        <section className="py-20 px-6 md:px-12" style={{ backgroundColor: "#12151C" }}>
          <div className="max-w-3xl mx-auto text-center">
            <span
              className="block text-xs tracking-widest uppercase mb-6"
              style={{ fontFamily: "'Urbanist', sans-serif", color: "#2B4EFF", letterSpacing: "0.15em" }}
            >
              // Reflection
            </span>
            <p
              className="text-xl md:text-2xl leading-relaxed"
              style={{ fontFamily: "'Urbanist', sans-serif", fontWeight: 500, color: "#FFFFFF" }}
            >
              Not every case study starts with a client brief. This one started with being annoyed on
              the same train ride for months. Treating my own friction as a real research question,
              checking it against other people instead of assuming they felt it too, is what turned a
              complaint into something worth showing.
            </p>
          </div>
        </section>

      {/* CTA back to case studies */}
      <section className="py-16 px-6 md:px-12" style={{ backgroundColor: "#EDEFF5" }}>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6 p-8" style={{ border: "1.5px dashed rgba(43, 78, 255, 0.3)", backgroundColor: "#F5F6FA" }}>
          <div>
            <h3 className="text-xl mb-1" style={{ fontFamily: "'Urbanist', sans-serif", fontWeight: 700, color: "#12151C" }}>
              More case studies.
            </h3>
            <p className="text-sm" style={{ fontFamily: "'Inter', sans-serif", color: "#6B7280" }}>
              See the rest of the portfolio: design systems, dashboards, and everything in between.
            </p>
          </div>
          <Link
            href="/case-studies"
            className="flex-shrink-0 flex items-center gap-2 px-6 py-3 transition-colors duration-150 hover:opacity-90"
            style={{
              fontFamily: "'Urbanist', sans-serif",
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "0.04em",
              color: "#FFFFFF",
              backgroundColor: "#2B4EFF",
              textDecoration: "none",
            }}
          >
            Back to Case Studies →
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
