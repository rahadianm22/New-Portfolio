# Follow-up Audit 001, rahadianm22.my.id

- Tanggal: 2026-09-23
- Instruksi: "ubah dan improve semua nya" (26 dari 26 temuan disetujui)
- Arah: `DESIGN.md` dibuat dari arah pemilik, motif blueprint dilepas
- Hasil: 24 file diubah, 5 file baru, **981 baris masuk, 1766 baris keluar** (net -785)

Semua angka di bawah diukur pada build produksi (`next build` lalu `next start`), bukan dari pembacaan kode.

---

## Status tiap temuan

### A. HIGH, Hard Gate

| # | Temuan | Status | Bukti |
|---|---|---|---|
| 1 | `#9AA1B1` 2.59:1 | Selesai | diganti `--ink-3` (5.98:1 di putih) |
| 2 | `#8A93A6` 2.86:1 | Selesai | diganti `--ink-3` (5.53:1 di `--surface-alt`) |
| 3 | Footer putih 35%, 3.22:1 | Selesai | diganti `--ink-on-dark` (8.29:1) |
| 4 | Badge `#FF4B33` 2.94:1 | Selesai | diganti `--status-warn` (5.0:1) |
| 5 | `#6B7280` 4.48:1 | Selesai | diganti `--ink-3` |
| 6 | 6 link tersembunyi bisa di-Tab | Selesai | `max-height:0` diganti atribut `hidden`; terukur `reachableHiddenLinks: 0` |
| 7 | 9 tap target di bawah 44px | Selesai | hamburger 32x32 jadi 44x44; terukur 0 di 10 halaman |
| 8 | 2 kartu klien mati | Selesai | kartu tanpa link kini tanpa afordans link dan berlabel "No public link" |

**Kontras terukur pada teks yang dirender di 10 halaman: 0 kegagalan.** Pada pengukuran pertama setelah migrasi masih ada 13, semuanya sudah ditutup.

### B. MEDIUM, Purpose-Gate

| # | Temuan | Status | Catatan |
|---|---|---|---|
| 9 | Grid blueprint | Selesai | grid, border dashed, dan corner mark dihapus; sisa `dashed` di repo: 0 |
| 10 | Aksen biru di mana-mana | Selesai | aturan ditulis di DESIGN.md: biru hanya tombol primer, link prosa, fokus |
| 11 | Label uppercase tracking lebar | Selesai | `tracking-widest` dan `tracking-wider` tersisa: 0; prefix `//` dihapus |
| 12 | 3 kartu kapabilitas identik | Selesai | kartu utama kini sel lebar, dua pendukung di sampingnya |
| 13 | Panah dekoratif di semua tombol | Selesai | dihapus dari CTA; disisakan hanya pada link keluar, menandakan buka tab baru |
| 14 | Radius campur | Selesai | disatukan jadi `--radius-sm` 6px dan `--radius-md` 10px |

### C. LOW, Quality Locks

| # | Temuan | Status | Catatan |
|---|---|---|---|
| 15 | Logo bar tepat di bawah hero | Selesai | dipindah ke bawah Experience; hero kini diikuti Selected Work |
| 16 | Ritme section seragam | Selesai | Selected Work, Expertise, dan Contact punya komposisi berbeda |
| 17 | 14 warna teks | Selesai | palet UI kini 2 inti + 1 aksen + status; warna brand klien hanya di gambar logo, field `color` yang jadi data mati dihapus |
| 18 | 265 `fontFamily` inline | Selesai | tersisa **0**, semua lewat token |
| 19 | Spasi tanpa skala | Selesai | 3 token: `--space-section`, `--space-block`, `--space-tight` |
| 20 | Tidak ada motif pengganti | Selesai | `DESIGN.md` dibuat; motif = garis ukur yang menggambar diri, gestur milikmu sendiri |

### E. Di luar antislop

| # | Temuan | Status | Catatan |
|---|---|---|---|
| 21 | Homepage tanpa karya | Selesai | section Selected Work baru: 4 case study dengan gambar asli, 2 tanpa gambar ditandai jujur |
| 22 | Font via `<link>` | Selesai | pindah ke `next/font`, self-host, tanpa render-blocking |
| 23 | `--font-display` tak terdefinisi | Selesai | didefinisikan `next/font`, dikonsumsi `tailwind.config.ts` |
| 24 | Gambar ter-upscale | **Sebagian** | lihat catatan di bawah |
| 25 | Kebersihan repo | **Sebagian** | lihat catatan di bawah |
| 26 | Label nav tidak cocok | Selesai | "Skills" jadi "Expertise", "Design Systems" jadi "Design System" |

---

## Dua hal yang belum tuntas, dan alasannya

### Temuan 24, gambar ter-upscale

`public/case-studies/brispot/biaya-biaya-after.png` resolusi aslinya **265x497**.

Yang saya perbaiki: atribut `sizes` ditambahkan, jadi browser kini mengambil versi 265px penuh. Sebelumnya browser menerima versi 132px, jadi gambarnya dua kali lebih buram dari yang seharusnya.

Yang **tidak** bisa saya perbaiki: pada layar retina (2x), lebar tampil 224px butuh sumber 448px. Sumbernya cuma 265px. Ini butuh ekspor ulang dari Figma, bukan perubahan kode.

### Temuan 25, kebersihan repo

Yang saya lakukan, semuanya reversibel, tidak ada yang dihapus:

- `app/case-studies/youtube-download.zip` dipindah ke `_archive/`
- `app/case-studies/qris-domestik/qris-full-flow.png` dipindah ke `_archive/`. File ini ternyata **duplikat persis**, byte-for-byte 4.4MB, dari `public/case-studies/qris-domestik/qris1-full-flow.png`
- `app/README-INSTALL.md` dipindah ke `_archive/`
- `_archive/` ditambahkan ke `.gitignore`

`app/` kini nol file non-source.

Yang sengaja **tidak** saya sentuh:

- **13 file logo tak terpakai** di `public/Logo/`. Beberapa beresolusi lebih tinggi dari yang dipakai (`BRI_2025.svg.webp`, `BYOND_by_BSI.svg.webp`). Itu aset aslimu, dan menghapusnya bisa menghilangkan sumber yang lebih baik.
- **`_to_delete/`**, berisi 3 file lock git. Namanya menyiratkan siap dibuang, tapi menghapus filemu tanpa diminta bukan keputusan saya.

---

## Delivery Gate

### Blok 1, Hard Gate

| Item | Hasil | Bukti |
|---|---|---|
| R-02 em dash | PASS | pencarian karakter em dash di `app`, `components`, `lib`, `DESIGN.md`: 0 |
| R-03 mobile rusak | PASS | 10 halaman di 390x844: overflow 0, tap target di bawah 44px 0 |
| R-17 statistik palsu | PASS | tidak ada angka baru; "1600+ komponen" dan "5 kategori token" sudah ada sebelumnya, milik pemilik |
| R-18 testimoni fiktif | PASS | tidak ada section testimoni |
| R-23 aset tanpa konfirmasi | PASS | tidak ada logo, avatar, atau gambar dibuat; semua gambar sudah ada di `public/` |
| R-24 nav mati | PASS | 6 tujuan nav semuanya ada; anchor `DOC.01` sampai `DOC.04` terverifikasi ada di `/experience` |
| R-25 kontras | PASS | kontras terhitung pada teks terrender di 10 halaman: **0 kegagalan** |
| R-26 kontrol mati | PASS | link tanpa `href` di 10 halaman: **0**; kartu tanpa link diberi label terlihat |
| R-27 state UI | N/A sebagian | situs statis tanpa fetch data. State yang ada (toggle menu, show more/less) berfungsi dan diuji |
| R-28 FAQ generik | PASS | tidak ada FAQ |
| R-32 keyboard | PASS | Tab nyata menampilkan outline 2px aksen; Escape menutup menu; 0 link tersembunyi bisa difokus |
| R-33 patch via skrip | PASS | semua perubahan ditulis di source; skrip migrasi hanya transformasi sekali jalan di folder temp, tidak ditinggal di repo |
| R-34 tema rusak | N/A | tidak ada toggle tema |
| R-35 tidak dijalankan | PASS | `next build` hijau, `next start` dijalankan, 10 rute HTTP 200, click-through tercatat, console error 0 |
| R-36 klaim fiktif | PASS | tidak ada klaim keamanan, kepatuhan, atau performa ditambahkan |
| R-37 tanpa arah | PASS | `DESIGN.md` ada, ditulis dari arah pemilik, dial ENERGY 2 / RHYTHM 2 / MOTION 2 |
| R-38 konten dikarang | PASS | 2 case study tanpa gambar diberi keterangan jujur, bukan placeholder palsu |

### Blok 2, Purpose-Gate

| Item | Hasil | Bukti |
|---|---|---|
| R-01 gradient default | PASS | nol gradient di seluruh situs |
| R-04 ikon generik | PASS | tidak ada ikon sparkle, robot, atau orb; nol emoji dekoratif |
| R-06 tipografi | PASS | Urbanist dengan alasan tertulis; `tracking-widest` dan `wider` tersisa 0 |
| R-07 grid background | PASS | grid blueprint dihapus seluruhnya |
| R-08 panah dekoratif | PASS | dihapus dari CTA, disisakan hanya penanda link keluar |
| R-09 badge kapsul | PASS | hanya badge `v1.0`, status nyata |
| R-10 glassmorphism | PASS | `backdrop-blur` tepat **1** elemen (navbar saat scroll), di bawah batas 1 sampai 2 |
| R-12 shadow | PASS | kartu pakai border, bukan bayangan; 3 dari 4 `boxShadow` adalah swatch demo design system |
| R-13 glow | PASS | nol glow |
| R-14 kartu identik | PASS | Selected Work dan Expertise punya kartu utama berukuran beda |
| R-19 animasi | PASS | `animate-ping` yang berputar tanpa henti dihapus; animasi loop tersisa 0 |
| R-22 ilustrasi generik | PASS | semua gambar adalah screenshot karya asli |

### Blok 3, Liveliness

| Item | Hasil |
|---|---|
| Dial eksplisit | Ya, ENERGY 2 / RHYTHM 2 / MOTION 2 di DESIGN.md |
| Output konsisten dengan dial | Ya, RHYTHM 2 terlihat pada 3 komposisi section yang berbeda |
| Satu focal point per layar | Ya, headline di hero, kartu utama di Selected Work |
| Whitespace struktural | Ya, 3 token spasi menggantikan 6 nilai acak |
| Satu aksen disengaja | Ya, biru dibatasi tombol primer, link prosa, fokus |
| Motif identitas | Ya, garis ukur yang menggambar diri |
| Design Read dideklarasikan | Ya, di DESIGN.md |

### Blok 4, Craftsmanship

| Item | Hasil |
|---|---|
| C-1 keputusan tanpa alasan | PASS, alasan tiap token tertulis di DESIGN.md |
| C-2 elemen tidak berfungsi | PASS, 0 link mati |
| C-3 section pengisi template | PASS, Selected Work ditambah karena kontennya ada dan hilang dari halaman |
| C-4 rusak di suatu state | PASS, 10 halaman diuji di mobile, keyboard, dan build produksi |
| C-5 klaim dikarang | PASS |
| R-05 layout template | PASS, logo bar tidak lagi tepat di bawah hero |
| R-11 semua pil | PASS, 2 nilai radius |
| R-15 CTA generik | PASS, pencarian "Get Started", "Learn More", "Try Now", "Explore", "Discover": 0 |
| R-16 buzzword | PASS, pencarian buzzword: 0 |
| R-20 identitas generik | PASS, motif, palet, dan tipografi punya alasan tertulis |
| R-21 dark mode dipaksa | PASS, terang secara default, gelap hanya jangkar tonal |
| R-29 palet | PASS, 2 inti + 1 aksen + status |
| R-30 klon produk lain | PASS |
| R-31 alasan tiap keputusan | PASS, DESIGN.md |

**Hasil: tidak ada FAIL.**

---

## Yang masih terbuka untukmu

1. Ekspor ulang `biaya-biaya-after.png` dari Figma pada resolusi minimal 530px lebar (temuan 24).
2. Putuskan nasib 13 logo tak terpakai dan folder `_to_delete/` (temuan 25).
3. Dua pertanyaan arah di akhir `DESIGN.md`: seberapa berat jangkar gelap, dan apakah urutan homepage baru sudah pas.
