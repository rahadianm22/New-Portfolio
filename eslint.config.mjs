import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  // Satori (next/og) renders plain <img> only; next/image does not exist there.
  { files: ["lib/og-image.tsx"], rules: { "@next/next/no-img-element": "off" } },
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts", "_archive/**", "_to_delete/**", "New-Portfolio/**", "portfolio-starter/**"]),
]);
