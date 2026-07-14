export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="py-6 px-6 md:px-12"
      style={{
        backgroundColor: "#12151C",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        <span
          className="text-xs"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            color: "rgba(255,255,255,0.35)",
            letterSpacing: "0.05em",
          }}
        >
          © {year} Rahadian Maulana — All rights reserved.
        </span>

        <div className="flex items-center gap-2">
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: "rgba(43,78,255,0.6)" }}
          />
          <span
            className="text-xs"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              color: "rgba(255,255,255,0.35)",
              letterSpacing: "0.05em",
            }}
          >
            Built with Next.js — Deployed on Vercel
          </span>
        </div>
      </div>
    </footer>
  );
}
