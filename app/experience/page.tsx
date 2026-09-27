import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { experiences } from "@/lib/experience-data";

export const metadata = {
  title: "Experience · Rahadian Maulana",
  description: "Full work experience and case studies from Rahadian Maulana.",
};

export default function ExperiencePage() {
  return (
    <main>
      <Navbar />

      <section className="pt-32 pb-16 px-6 md:px-12" style={{ backgroundColor: "var(--surface-alt)" }}>
        <div className="max-w-4xl mx-auto">
          <Link
            href="/#experience"
            className="inline-flex items-center min-h-11 gap-2 text-sm mb-6"
            style={{ color: "var(--accent)", textDecoration: "none" }}
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M8 2L2 8M2 8H7M2 8V3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to Homepage
          </Link>

          <span
            className="block text-xs mb-3"
            style={{ color: "var(--accent)" }}
          >Full Archive
          </span>
          <h1
            className="text-4xl md:text-5xl"
            style={{ fontWeight: 700, color: "var(--ink)", letterSpacing: "-0.02em" }}
          >
            Complete Work Experience.
          </h1>
        </div>
      </section>

      <section className="pb-24 px-6 md:px-12" style={{ backgroundColor: "var(--surface-alt)" }}>
        <div className="max-w-4xl mx-auto space-y-16">
          {experiences.map((entry) => (
            <div
              key={entry.docId}
              id={entry.docId}
              className="scroll-mt-24"
              style={{ backgroundColor: "var(--surface)", border: "1px solid var(--line)" }}
            >
              {/* Header */}
              <div className="px-6 md:px-10 pt-8 pb-6" style={{ borderBottom: "1px solid var(--line)" }}>
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="text-sm"
                    style={{ color: "var(--accent)", fontWeight: 600 }}
                  >
                    {entry.docId}
                  </span>
                  <span
                    className="text-xs px-2 py-0.5"
                    style={{
                      color: "var(--status-warn)",
                      backgroundColor: "var(--status-warn-bg)",
                      border: "1px solid var(--line)",
                      fontSize: "10px" }}
                  >
                    {entry.duration}
                  </span>
                </div>
                <h2
                  className="text-2xl md:text-3xl mb-1"
                  style={{ fontWeight: 700, color: "var(--ink)" }}
                >
                  {entry.company}
                </h2>
                <p className="text-sm mb-4" style={{ color: "var(--ink-3)", fontWeight: 500 }}>
                  {entry.role} · {entry.period}
                </p>
                <div className="flex flex-wrap gap-2">
                  {entry.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 tracking-wide uppercase"
                      style={{
                        color: "var(--ink-3)",
                        backgroundColor: "var(--surface-alt)",
                        border: "1px solid var(--line)",
                        fontSize: "10px" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Body */}
              <div className="px-6 md:px-10 py-8">
                <div className="space-y-10">
                  {entry.products.map((product) => (
                    <div key={product.tabLabel}>
                      <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1 mb-2">
                        <h3
                          className="text-lg"
                          style={{ fontWeight: 700, color: "var(--ink)" }}
                        >
                          {product.name}
                        </h3>
                        <span
                          className="flex items-center gap-1.5 text-xs"
                          style={{ color: product.statusLive ? "var(--status-live)" : "var(--ink-3)" }}
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full"
                            style={{ backgroundColor: product.statusLive ? "var(--status-live)" : "var(--ink-3)" }}
                          />
                          {product.status}
                        </span>
                      </div>
                      <span
                        className="block text-xs mb-3"
                        style={{ color: "var(--accent)" }}
                      >
                        {product.category}
                      </span>
                      <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--ink-2)" }}>
                        {product.description}
                      </p>
                      <ul className="space-y-2 mb-3">
                        {product.contributions.map((c, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-sm leading-relaxed"
                            style={{ color: "var(--ink-2)" }}
                          >
                            <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: "var(--accent)" }} />
                            {c}
                          </li>
                        ))}
                      </ul>
                      <span className="text-xs" style={{ color: "var(--ink-3)" }}>
                        {product.scope}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
