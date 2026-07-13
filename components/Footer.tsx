export default function Footer() {
  return (
    <footer className="border-t border-line px-6 py-8 md:px-16">
      <div className="mx-auto flex max-w-4xl flex-col items-start justify-between gap-2 font-mono text-xs uppercase tracking-widest text-muted sm:flex-row sm:items-center">
        <span>© {new Date().getFullYear()} — Portfolio Starter</span>
        <span>Built with Next.js, deployed on Vercel</span>
      </div>
    </footer>
  );
}
