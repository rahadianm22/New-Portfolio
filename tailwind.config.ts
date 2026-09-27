import type { Config } from "tailwindcss";

/**
 * Every value here resolves to a CSS custom property defined in
 * app/globals.css, so the palette has exactly one source of truth.
 * Direction and measured contrast ratios live in DESIGN.md.
 */
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        surface: "var(--surface)",
        "surface-alt": "var(--surface-alt)",
        "surface-ink": "var(--surface-ink)",
        ink: "var(--ink)",
        "ink-2": "var(--ink-2)",
        "ink-3": "var(--ink-3)",
        "ink-on-dark": "var(--ink-on-dark)",
        accent: "var(--accent)",
        "accent-hover": "var(--accent-hover)",
        "accent-soft": "var(--accent-soft)",
        "on-accent": "var(--on-accent)",
        "accent-on-dark": "var(--accent-on-dark)",
        "status-live": "var(--status-live)",
        "status-live-on-dark": "var(--status-live-on-dark)",
        "status-warn": "var(--status-warn)",
        "status-warn-bg": "var(--status-warn-bg)",
        line: "var(--line)",
        "line-strong": "var(--line-strong)",
        "line-on-dark": "var(--line-on-dark)",
        "tint-blue": "var(--tint-blue)",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      spacing: {
        section: "var(--space-section)",
        block: "var(--space-block)",
        tight: "var(--space-tight)",
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
      },
      boxShadow: {
        soft: "var(--shadow-soft)",
        lift: "var(--shadow-lift)",
      },
      transitionTimingFunction: {
        out: "var(--ease-out)",
      },
      maxWidth: {
        page: "72rem",
        prose: "44rem",
      },
    },
  },
  plugins: [],
};

export default config;
