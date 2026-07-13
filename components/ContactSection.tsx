import { ArrowUpRight } from "lucide-react";
import SpecTag from "./SpecTag";

const links = [
  { label: "Email", href: "mailto:you@example.com" },
  { label: "LinkedIn", href: "https://linkedin.com/in/your-handle" },
  { label: "Dribbble", href: "https://dribbble.com/your-handle" },
  { label: "Notion", href: "https://your-notion-portfolio.site" },
];

export default function ContactSection() {
  return (
    <section id="contact" className="px-6 py-24 md:px-16">
      <div className="mx-auto max-w-4xl">
        <SpecTag>Contact</SpecTag>
        <h2 className="mt-4 max-w-lg font-display text-3xl font-bold text-ink md:text-4xl">
          Let&apos;s build something precise.
        </h2>

        <div className="mt-12 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group flex items-center justify-between bg-surface px-6 py-5 transition-colors hover:bg-ink"
            >
              <span className="font-mono text-sm uppercase tracking-widest text-ink group-hover:text-paper">
                {link.label}
              </span>
              <ArrowUpRight className="h-4 w-4 text-muted transition-colors group-hover:text-redline" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
