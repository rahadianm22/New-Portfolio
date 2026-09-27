import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ShotCard, NoteCard } from "@/components/ShotCard";
import { CASE_STUDIES } from "@/lib/case-studies";

export const metadata = {
  title: "Case Studies · Rahadian Maulana",
  description:
    "In-depth case studies from Rahadian Maulana: the problems, process, and outcomes behind fintech products and design systems.",
};

const withCover = CASE_STUDIES.filter((s) => s.cover);
const withoutCover = CASE_STUDIES.filter((s) => !s.cover);

export default function CaseStudiesPage() {
  return (
    <main>
      <Navbar />

      <section className="bg-surface pt-32 pb-block md:pt-36">
        <div className="max-w-page mx-auto px-6 md:px-12">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 min-h-11 pl-3 pr-4 rounded-full text-sm font-medium text-ink-2
                       ring-1 ring-line no-underline transition-colors hover:bg-surface-alt hover:text-ink"
          >
            <ArrowLeft size={16} strokeWidth={1.75} className="transition-transform duration-300 ease-out group-hover:-translate-x-0.5" />
            Back to homepage
          </Link>

          <h1 className="mt-8 max-w-3xl text-4xl md:text-6xl font-bold leading-[1.02] tracking-[-0.035em] text-ink">
            The story behind the work.
          </h1>
          <p className="mt-6 max-w-prose text-lg leading-relaxed text-ink-2">
            The problem that started each project, the constraints that shaped it, and what happened
            once it shipped.
          </p>
        </div>
      </section>

      <section className="bg-surface pb-section">
        <div className="max-w-page mx-auto px-6 md:px-12">
          <div className="grid gap-x-6 gap-y-14 md:grid-cols-2">
            {withCover.map((study, i) => (
              <ShotCard
                key={study.id}
                study={study}
                priority={i < 2}
                canvasClassName="h-[300px] md:h-[400px]"
                sizes="(max-width: 768px) 100vw, 560px"
              />
            ))}
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {withoutCover.map((study) => (
              <NoteCard key={study.id} study={study} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
