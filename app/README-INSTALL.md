# Case Studies Update — Install Instructions

File-file ini nambahin halaman "Case Studies" baru + case study Natuna Digilab
ke portfolio kamu (portfolio-starter / New-Portfolio repo).

## Cara pasang

1. Copy folder `case-studies/` ke dalam `app/` project kamu, jadi strukturnya:
   `app/case-studies/page.tsx`
   `app/case-studies/natuna-digilab/page.tsx`

2. Timpa (replace) file berikut di project kamu dengan versi di sini:
   - `sitemap.ts` → taro di `app/sitemap.ts` (nambahin 2 URL baru ke sitemap)
   - `Navbar.tsx` → taro di `components/Navbar.tsx` (nambahin link "Case Studies" ke menu nav)

3. Jalanin `npm run dev` buat cek lokal, atau langsung commit & push:
   ```
   git add app/case-studies app/sitemap.ts components/Navbar.tsx
   git commit -m "Add Case Studies section with Natuna Digilab case study"
   git push
   ```

## Yang berubah di Navbar.tsx

Cuma nambahin 1 baris di array NAV_LINKS:
`{ label: "Case Studies", href: "/case-studies" }`

Kalau kamu udah sempat edit Navbar.tsx sendiri sejak terakhir kali dikasih ke aku,
jangan langsung timpa — tinggal tambahin baris itu manual aja ke NAV_LINKS kamu
biar nggak ketiban perubahan lain yang nggak sengaja.

## Route baru

- `/case-studies` — halaman index/kumpulan case study (list: Natuna Digilab "live",
  BRISPOT/BSI/CIMB ditandai "Coming soon" biar udah kelihatan arahnya)
- `/case-studies/natuna-digilab` — halaman detail case study Natuna Digilab, isinya
  dari dokumen case study yang udah kita susun bareng (Hook, Context, Problem,
  Process, Solution, Outcome, Reflection), plus CTA ke Figma Community file kamu.

Sudah di-build & di-test lokal (npm run build sukses, semua route return 200,
tampilan sudah dicek via screenshot) — dan udah disesuaikan gaya visualnya
(font Urbanist/Inter, warna #2B4EFF, style card dashed-border) biar konsisten
sama halaman lain di portfolio kamu.
