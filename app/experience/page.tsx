import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { experiences } from "@/lib/experience-data";

export const metadata = {
  title: "Experience — Rahadian Maulana",
  description: "Detail lengkap pengalaman kerja Rahadian Maulana.",
};

export default function ExperiencePage() {
  return (
    <main>
      <Navbar />

      <section className="pt-32 pb-16 px-6 md:px-12" style={{ backgroundColor: "#EDEFF5" }}>
        <div className="max-w-4xl mx-auto">
          <Link
            href="/#experience"
            className="inline-flex items-center gap-2 text-xs tracking-wider uppercase mb-8"
            style={{ fontFamily: "'Urbanist', sans-serif", color: "#2B4EFF", textDecoration: "none" }}
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M8 2L2 8M2 8H7M2 8V3" stroke="#2B4EFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Kembali ke Beranda
          </Link>

          <span
            className="block text-xs tracking-widest uppercase mb-3"
            style={{ fontFamily: "'Urbanist', sans-serif", color: "#2B4EFF", letterSpacing: "0.15em" }}
          >
            // Full Archive
          </span>
          <h1
            className="text-4xl md:text-5xl"
            style={{ fontFamily: "'Urbanist', sans-serif", fontWeight: 700, color: "#12151C", letterSpacing: "-0.02em" }}
          >
            Semua pengalaman kerja.
          </h1>
        </div>
      </section>

      <section className="pb-24 px-6 md:px-12" style={{ backgroundColor: "#EDEFF5" }}>
        <div className="max-w-4xl mx-auto space-y-16">
          {experiences.map((entry) => (
            <div
              key={entry.docId}
              id={entry.docId}
              className="scroll-mt-24"
              style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(18, 21, 28, 0.1)" }}
            >
              {/* Header */}
              <div className="px-6 md:px-10 pt-8 pb-6" style={{ borderBottom: "1px solid rgba(18, 21, 28, 0.08)" }}>
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="text-sm tracking-widest"
                    style={{ fontFamily: "'Urbanist', sans-serif", color: "#2B4EFF", fontWeight: 600 }}
                  >
                    {entry.docId}
                  </span>
                  <span
                    className="text-xs px-2 py-0.5"
                    style={{
                      fontFamily: "'Urbanist', sans-serif",
                      color: "#FF4B33",
                      backgroundColor: "rgba(255, 75, 51, 0.1)",
                      border: "1px solid rgba(255, 75, 51, 0.2)",
                      fontSize: "10px",
                    }}
                  >
                    {entry.duration}
                  </span>
                </div>
                <h2
                  className="text-2xl md:text-3xl mb-1"
                  style={{ fontFamily: "'Urbanist', sans-serif", fontWeight: 700, color: "#12151C" }}
                >
                  {entry.company}
                </h2>
                <p className="text-sm mb-4" style={{ fontFamily: "'Inter', sans-serif", color: "#6B7280", fontWeight: 500 }}>
                  {entry.role} · {entry.period}
                </p>
                <div className="flex flex-wrap gap-2">
                  {entry.tags.map((tag) => (
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
              </div>

              {/* Body */}
              <div className="px-6 md:px-10 py-8">
                {entry.products ? (
                  <div className="space-y-10">
                    {entry.products.map((product) => (
                      <div key={product.tabLabel}>
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <h3
                            className="text-lg"
                            style={{ fontFamily: "'Urbanist', sans-serif", fontWeight: 700, color: "#12151C" }}
                          >
                            {product.name}
                          </h3>
                          <span
                            className="flex-shrink-0 flex items-center gap-1.5 text-xs"
                            style={{ fontFamily: "'Urbanist', sans-serif", color: product.statusLive ? "#16A34A" : "#6B7280" }}
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
                          style={{ fontFamily: "'Urbanist', sans-serif", color: "#2B4EFF" }}
                        >
                          {product.category}
                        </span>
                        <p className="text-sm leading-relaxed mb-4" style={{ fontFamily: "'Inter', sans-serif", color: "#3D4557" }}>
                          {product.description}
                        </p>
                        <ul className="space-y-2 mb-3">
                          {product.contributions.map((c, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-3 text-sm leading-relaxed"
                              style={{ fontFamily: "'Inter', sans-serif", color: "#3D4557" }}
                            >
                              <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: "#2B4EFF" }} />
                              {c}
                            </li>
                          ))}
                        </ul>
                        <span className="text-xs" style={{ fontFamily: "'Urbanist', sans-serif", color: "#9CA3AF" }}>
                          {product.scope}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
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
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
