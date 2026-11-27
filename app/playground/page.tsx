import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FeaturedTile } from "@/components/PlaygroundSection";
import { PLAYGROUND } from "@/lib/playground";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Playground · Rahadian Maulana",
  description:
    "Side projects Rahadian Maulana vibe-coded on his own, from a VTuber's official site to a design system's docs and a 3D virtual office. All of them live.",
  path: "/playground",
});

export default function PlaygroundPage() {
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
            Things I built to try an idea.
          </h1>
          <p className="mt-6 max-w-4xl text-lg md:text-xl leading-relaxed text-ink-2 [text-wrap:pretty]">
            Side projects I vibe-coded on my own. I design each one, build it with AI coding tools like
            Claude Code, and ship it myself, from the first idea to the live URL. Every one of them is
            live, so open them and click around.
          </p>
        </div>
      </section>

      <section className="bg-surface pb-section">
        <div className="max-w-page mx-auto px-6 md:px-12">
          <div className="grid gap-x-6 gap-y-14 md:grid-cols-2">
            {PLAYGROUND.map((item, i) => (
              <FeaturedTile key={item.id} item={item} priority={i < 2} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
