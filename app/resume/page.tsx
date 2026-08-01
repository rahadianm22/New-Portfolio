import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { DownloadResumeButton } from "@/components/DownloadResumeButton";
import { experiences, profileSummary, keyAchievements, skillGroups } from "@/lib/experience-data";

export const metadata = {
  title: "Resume — Rahadian Maulana",
  description: "Resume summary and downloadable PDF for Rahadian Maulana, Senior Product Designer.",
};

const sectionLabelStyle = {
  fontFamily: "'Urbanist', sans-serif",
  color: "#2B4EFF",
  letterSpacing: "0.12em",
} as const;

export default function ResumePage() {
  return (
    <main>
      <div className="no-print">
        <Navbar />
      </div>

      <section className="pt-32 pb-24 px-6 md:px-12 print:pt-0 print:pb-0" style={{ backgroundColor: "#EDEFF5" }}>
        <div
          id="resume-sheet"
          className="max-w-3xl mx-auto p-8 md:p-12"
          style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(18, 21, 28, 0.1)" }}
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-4 flex-wrap mb-8 pb-8" style={{ borderBottom: "2px solid #12151C" }}>
            <div>
              <h1
                className="text-3xl md:text-4xl"
                style={{ fontFamily: "'Urbanist', sans-serif", fontWeight: 700, color: "#12151C", letterSpacing: "-0.02em" }}
              >
                Rahadian Maulana
              </h1>
              <p className="mt-2 text-base" style={{ fontFamily: "'Inter', sans-serif", color: "#3D4557" }}>
                Senior Product Designer — Fintech &amp; Digital Banking
              </p>
            </div>
            <DownloadResumeButton />
          </div>

          {/* Contact */}
          <div className="flex flex-wrap gap-x-6 gap-y-1 mb-10 text-sm" style={{ fontFamily: "'Inter', sans-serif", color: "#3D4557" }}>
            <span>rahadianm22@gmail.com</span>
            <span>rahadianm22.vercel.app</span>
            <span>Jakarta, Indonesia</span>
          </div>

          {/* Profile */}
          <div className="mb-10">
            <h2 className="text-xs tracking-widest uppercase mb-3" style={sectionLabelStyle}>
              Profile
            </h2>
            <p className="text-sm leading-relaxed" style={{ fontFamily: "'Inter', sans-serif", color: "#3D4557" }}>
              {profileSummary}
            </p>
          </div>

          {/* Experience — condensed timeline, full detail lives on /experience and the PDF */}
          <div className="mb-10">
            <h2 className="text-xs tracking-widest uppercase mb-4" style={sectionLabelStyle}>
              Experience
            </h2>
            <div className="space-y-3">
              {experiences.map((entry) => (
                <div key={entry.docId} className="flex items-baseline justify-between flex-wrap gap-x-4 gap-y-0.5">
                  <span className="text-sm font-semibold" style={{ fontFamily: "'Urbanist', sans-serif", color: "#12151C" }}>
                    {entry.role} · {entry.company}
                  </span>
                  <span className="text-xs" style={{ fontFamily: "'Urbanist', sans-serif", color: "#6B7280" }}>
                    {entry.period}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs" style={{ fontFamily: "'Inter', sans-serif", color: "#9AA1B1" }}>
              Full case-by-case breakdown on the{" "}
              <a href="/experience" style={{ color: "#2B4EFF", textDecoration: "underline" }}>
                Experience page
              </a>{" "}
              or in the downloadable PDF above.
            </p>
          </div>

          {/* Key Achievements */}
          <div className="mb-10">
            <h2 className="text-xs tracking-widest uppercase mb-4" style={sectionLabelStyle}>
              Key Achievements
            </h2>
            <ul className="space-y-1.5">
              {keyAchievements.map((achievement, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm leading-relaxed"
                  style={{ fontFamily: "'Inter', sans-serif", color: "#3D4557" }}
                >
                  <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: "#2B4EFF" }} />
                  {achievement}
                </li>
              ))}
            </ul>
          </div>

          {/* Skills */}
          <div>
            <h2 className="text-xs tracking-widest uppercase mb-3" style={sectionLabelStyle}>
              Skills
            </h2>
            <div className="space-y-2">
              {skillGroups.map((group) => (
                <p key={group.label} className="text-sm leading-relaxed" style={{ fontFamily: "'Inter', sans-serif", color: "#3D4557" }}>
                  <span style={{ fontWeight: 700, color: "#12151C" }}>{group.label}:</span> {group.items}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="no-print">
        <Footer />
      </div>
    </main>
  );
}
