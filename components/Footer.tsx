import Link from "next/link";
import { ArrowUp, ArrowUpRight } from "lucide-react";

const EMAIL = "rahadianm22@gmail.com";

const PAGES = [
  { label: "Home", href: "/" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Experience", href: "/experience" },
  { label: "Resume", href: "/resume" },
];

const ELSEWHERE = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/rahadianm22/" },
  { label: "Dribbble", href: "https://dribbble.com/rahadianm22" },
  { label: "Instagram", href: "https://www.instagram.com/rahadianonly/" },
  { label: "Medium", href: "https://medium.com/@Rahadianm22" },
  { label: "WhatsApp", href: "https://wa.me/6285782760827" },
];

const CURRENTLY = ["Open to remote roles", "Usually replies within a day", "Based in Jakarta, Indonesia"];

const linkClass =
  "group inline-flex items-center gap-1.5 min-h-11 text-[15px] font-medium text-ink no-underline transition-colors hover:text-accent";

/**
 * The email is the largest thing in the footer, on its own ruled row, so the
 * last thing on every page is the way to reach him. Below it, three short
 * columns: where to go on the site, where else to find him, and his status.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-surface px-6 md:px-12 pb-10">
      <div className="max-w-page mx-auto">
        <a
          href={`mailto:${EMAIL}`}
          className="group grid items-center gap-x-8 gap-y-3 border-y border-line py-8 md:py-10 no-underline
                     lg:grid-cols-[160px_1fr_auto]"
        >
          <span className="text-sm font-medium text-ink-3">Email me</span>
          <span
            className="text-[1.6rem] sm:text-4xl md:text-5xl xl:text-6xl font-bold leading-none tracking-[-0.035em] text-ink
                       break-all transition-colors duration-300 group-hover:text-accent"
          >
            {EMAIL}
          </span>
          <span
            aria-hidden="true"
            className="hidden lg:flex h-12 w-12 items-center justify-center rounded-full ring-1 ring-line text-ink
                       transition duration-300 ease-out group-hover:bg-accent group-hover:text-on-accent group-hover:ring-accent"
          >
            <ArrowUpRight size={20} strokeWidth={1.75} />
          </span>
        </a>

        <div className="grid gap-10 py-12 md:grid-cols-3 md:gap-0">
          <FooterColumn title="Pages" first>
            {PAGES.map((page) => (
              <li key={page.href}>
                <Link href={page.href} className={linkClass}>
                  {page.label}
                </Link>
              </li>
            ))}
          </FooterColumn>

          <FooterColumn title="Social media">
            {ELSEWHERE.map((link) => (
              <li key={link.href}>
                <a href={link.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  {link.label}
                  <ArrowUpRight
                    size={14}
                    strokeWidth={2}
                    className="text-ink-3 transition duration-300 ease-out group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </li>
            ))}
          </FooterColumn>

          <FooterColumn title="Currently">
            {CURRENTLY.map((line) => (
              <li key={line} className="flex min-h-11 items-center text-[15px] font-medium text-ink-2">
                {line}
              </li>
            ))}
          </FooterColumn>
        </div>

        <div className="flex flex-col-reverse items-center justify-between gap-4 border-t border-line pt-8 md:flex-row">
          <span className="text-sm text-ink-3">&copy; {year} Rahadian Maulana.</span>

          <a
            href="#top"
            className="group inline-flex items-center gap-2 min-h-11 px-4 rounded-full text-sm font-medium text-ink-2 no-underline
                       ring-1 ring-line transition-colors hover:bg-surface-alt hover:text-ink"
          >
            Back to top
            <ArrowUp size={16} strokeWidth={1.75} className="transition-transform duration-300 ease-out group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  first = false,
  children,
}: {
  title: string;
  first?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className={first ? "md:pr-8" : "md:border-l md:border-line md:px-8"}>
      <h2 className="mb-2 text-sm font-medium text-ink-3">{title}</h2>
      <ul>{children}</ul>
    </div>
  );
}
