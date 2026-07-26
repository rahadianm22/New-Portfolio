# Portfolio Starter

Starter project pakai **Next.js 14 (App Router) + TypeScript + Tailwind CSS**,
siap dibuka di VS Code, di-push ke GitHub, lalu di-deploy ke Vercel.

Konsep visualnya "spec sheet" / blueprint — garis putus-putus, corner marks,
dan label mono ala redline annotation di Figma/Zeplin. Semua konten (nama,
project, link) masih **placeholder**, tinggal kamu ganti.

## Struktur folder

```
app/
  layout.tsx      -> font (Google Fonts link) + metadata global
  globals.css     -> style dasar (background, selection color, dst)
  page.tsx        -> merakit semua section jadi 1 halaman
components/
  Navbar.tsx
  Hero.tsx
  ExperienceSection.tsx   -> juga export SectionLabel (dipakai section lain)
  SystemsSection.tsx
  ContactSection.tsx
  Footer.tsx
```

Komponen di atas hasil convert dari desain Figma Make (konsep "spec sheet /
blueprint"). Warna & font ditulis langsung sebagai inline style di tiap
komponen, bukan lewat token Tailwind — sengaja dibiarkan begitu supaya persis
sama desainnya.

## 1. Jalanin di lokal (VS Code)

Butuh Node.js versi 18.18 ke atas (cek dulu: `node -v`).

```bash
npm install
npm run dev
```

Buka `http://localhost:3000` di browser. Setiap kali kamu simpan file, halaman
auto-refresh.

## 2. Konten yang perlu diganti / dicek lagi

- `components/Hero.tsx` — nama, tagline, role
- `components/ExperienceSection.tsx` — array `experiences`. **Cek dulu:**
  badge durasi "1.5+ yr" di BRI dan klaim "tim 10+ designer" / "jutaan
  pengguna aktif" itu hasil tebakan Figma Make, bukan dari CV kamu — pastikan
  akurat sebelum publish.
- `components/SystemsSection.tsx` — bio & parts list (tools)
- `components/ContactSection.tsx` — array `links`, pastikan URL LinkedIn &
  Dribbble kamu benar (yang sekarang masih placeholder pola umum)
- `components/Navbar.tsx` — label menu & tombol "Hire me"
- `app/layout.tsx` — bagian `metadata` (title & description buat SEO/tab browser)

## 3. Push ke GitHub

```bash
git init
git add .
git commit -m "Initial commit: portfolio starter"
git branch -M main
git remote add origin https://github.com/USERNAME/NAMA-REPO.git
git push -u origin main
```

Ganti `USERNAME` dan `NAMA-REPO` sesuai repo yang kamu buat di GitHub.

## 4. Deploy ke Vercel

1. Buka [vercel.com](https://vercel.com), login pakai akun GitHub kamu.
2. Klik **Add New → Project**.
3. Pilih repo yang tadi kamu push.
4. Vercel otomatis detect ini project Next.js — biarin default settings, klik **Deploy**.
5. Setelah selesai, kamu dapet URL `nama-repo.vercel.app`. Setiap kali kamu
   `git push` ke branch `main`, Vercel otomatis build & deploy ulang.

## Catatan

- Font (Space Grotesk, Inter, JetBrains Mono) di-load lewat `next/font/google`,
  jadi otomatis ke-download & ter-optimize saat build — nggak perlu setup manual.
- Warna & font diatur sebagai token di `tailwind.config.ts`, jadi kalau mau
  ganti palet, cukup edit di satu tempat itu.
