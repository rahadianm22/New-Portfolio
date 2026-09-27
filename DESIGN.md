# DESIGN.md, rahadianm22.my.id

Arah desain untuk portofolio Rahadian Maulana.
Dibaca bersama `antislop.md` sebagai filter. File ini sumber arah, antislop hanya menyaring.

> **Kepengarangan.** Bagian "Arah dari pemilik" ditulis Rahadian, saya hanya memformat.
> Bagian "Turunan" adalah keputusan yang saya ambil dari arah itu, ditandai jelas supaya bisa dikoreksi.
> Terakhir diperbarui: 2026-09-23 (revisi arah Dribbble shot).

---

## Arah dari pemilik

| Bidang | Arah |
|---|---|
| **Identitas** | Rahadian Maulana sebagai product designer |
| **Kepribadian** | Clean |
| **Palet** | Putih dan biru, seperti yang sekarang |
| **Tipografi** | Urbanist |
| **Mood** | Profesional |

Keputusan terpisah: **motif blueprint dilepas.** Grid background, border dashed, dan corner registration mark tidak dipakai lagi.

---

## Turunan (keputusan saya, bisa dikoreksi)

### Dial

`ENERGY 2 / RHYTHM 2 / MOTION 2`

- **ENERGY 2.** "Clean" dan "profesional" menutup ENERGY 3 (agency/Awwwards). Tapi ENERGY 1 itu wilayah GOV.UK, dan portofolio tetap harus menyapa. Jadi 2.
- **RHYTHM 2.** Konsisten dengan beberapa jeda. Memperbaiki temuan 16 (semua section berkomposisi sama) tanpa jadi asimetris liar yang melawan "clean".
- **MOTION 2.** Scroll-reveal dan transisi, sesuai gestur yang sudah ada. Bukan parallax atau koreografi.

### Motif identitas

**Garis ukur yang menggambar diri saat section tercapai**, lalu judul menyusul di belakangnya.

Ini bukan motif baru. Ini gestur yang sudah ditulis Rahadian sendiri (`SectionLabel` + `HeadingRise`, commit "Replace uniform scroll animation with a motif-driven entrance"), dan satu-satunya bagian dari bahasa blueprint yang bertahan.

Alasan dipertahankan: yang dilepas adalah **ornamen** blueprint (grid, dashed, corner mark), bukan **gestur**-nya. Tanpa satu pun motif, "clean" jatuh jadi Sterile Default, dan antislop menyebut itu kekosongan, bukan perbaikan (R-20, R-37).

Aturannya: garis itu satu-satunya elemen yang bergerak saat masuk. Konten tidak ikut tampil-hilang.

### Palet

Batas R-29: maksimum 2 sampai 3 warna inti + 1 aksen. Netral tidak dihitung.

**Inti:** putih (permukaan) dan ink (teks).
**Aksen:** biru, satu-satunya, dan hanya di titik keputusan.

Semua nilai di bawah sudah diukur rasio kontrasnya, bukan dikira-kira:

| Token | Nilai | Dipakai untuk | Kontras |
|---|---|---|---|
| `--surface` | `#FFFFFF` | permukaan dominan | |
| `--surface-alt` | `#F4F6FA` | section selang-seling | |
| `--surface-ink` | `#12151C` | jangkar gelap (kontak, footer) | |
| `--ink` | `#12151C` | teks utama | 17.4:1 di putih |
| `--ink-2` | `#3D4557` | teks sekunder | 8.87:1 di `--surface-alt` |
| `--ink-3` | `#5B6472` | teks muted | 5.53:1 di alt, 5.98:1 di putih |
| `--ink-on-dark` | `#A8AFBD` | muted di atas gelap | 8.29:1 |
| `--accent` | `#2B4EFF` | aksen tunggal | 5.77:1 di putih |
| `--on-accent` | `#FFFFFF` | teks di atas aksen | 5.77:1 |
| `--accent-on-dark` | `#8FA6FF` | aksen di atas gelap | 7.89:1 |
| `--status-warn` | `#B4451F` | badge status | 5.0:1 di tint-nya |

Tiga warna yang dibuang karena gagal AA: `#9AA1B1` (2.59), `#8A93A6` (2.86), `#6B7280` di atas abu (4.48). Semuanya diganti `--ink-3`.

**Aturan pemakaian aksen (memperbaiki temuan 10):** biru hanya boleh di tombol primer, link dalam prosa, dan state fokus. Tidak untuk label section, bullet, garis pemisah, titik, atau border dekoratif. Kalau semua biru, tidak ada yang biru.

Warna brand klien (`#00529C`, `#00A651`, `#F7941E`, `#7A1E2C`) bukan bagian palet UI. Hanya muncul di logo klien, tidak pernah sebagai warna teks atau UI.

### Tipografi

**Urbanist**, satu keluarga untuk seluruh situs, sesuai arah pemilik.

Inter dilepas sepenuhnya. Awalnya saya berencana menyimpannya untuk prosa panjang case study, tapi arahnya jelas ("tipografi pakai urbanist"), dan satu keluarga membuat "clean" lebih konsisten sekaligus menghapus seluruh style font inline dalam satu langkah. Kelas `font-body` masih ada sebagai alias Urbanist supaya penamaan semantiknya tetap terbaca di kode.

Dimuat lewat `next/font` (self-host, tanpa render-blocking, tanpa FOUT), bukan `<link>` ke Google Fonts.

**Dilarang:** label uppercase dengan tracking lebar (`letterSpacing: 0.15em`). Itu pola "Generic AI Typography" (R-06), dan itu yang dipakai semua label `//` di versi lama.

### Skala spasi

Memperbaiki temuan 19 (enam nilai padding berbeda tanpa sistem).

| Token | Nilai | Dipakai untuk |
|---|---|---|
| `--space-section` | `96px` (desktop), `64px` (mobile) | jarak vertikal antar section |
| `--space-block` | `48px` | judul ke konten |
| `--space-tight` | `24px` | label ke judul |

Tidak ada nilai lain untuk ritme vertikal. Spasi memisahkan, bukan melebarkan.

### Revisi 2026-09-23: arah "Dribbble shot"

Atas permintaan pemilik ("perbagus seperti dribbbleable"), bahasa visual dinaikkan tanpa mengubah arah inti (clean, profesional, putih dan biru, Urbanist). Skill acuan: `design-taste-frontend` dari taste-skill.

- **Hero dan section Design System hanya teks** (arahan pemilik: tanpa foto maupun gambar di dua tempat itu). Hero rata tengah dan bertumpu pada headline besar, dengan cahaya tint radial di latar dan satu sorotan penanda pada "fintech products". Tombol utama hero turun ke Selected Work. Gambar karya hanya muncul di grid Selected Work, di mana setiap case study tampil sebagai "shot": layar asli dibingkai di atas kanvas ber-tint, judul di bawah, tidak ditumpuk di atas gambar.
- **Satu tint kanvas saja** (`--tint-blue`, `#E7ECFF`). Semua kotak karya dan kartu ber-tint memakai warna yang sama; arahan pemilik: kotak tidak boleh beda-beda warna. Hanya untuk permukaan, tidak pernah untuk teks. Aksen tetap satu.
- **Satu tema dari atas ke bawah.** Section kontak dan footer tidak lagi gelap. CTA penutup berupa satu kartu aksen besar di halaman putih. Ini menjawab pertanyaan terbuka nomor 1.
- **Strip logo pindah ke tepat di bawah hero**, isinya logo saja.
- **Navbar berupa island yang melayang**, selalu frosted, tanpa scroll listener.
- Scroll progress memakai CSS scroll timeline, tanpa listener JS.

### Revisi 2026-09-25: pointer dan marquee logo

Atas permintaan pemilik (acuan: arturospatino.com), dua gerak ditambahkan di luar MOTION 2:

- **Pointer custom**: titik biru (aksen, bertepi putih agar terlihat di atas tombol biru) tepat di posisi mouse, dan lingkaran abu yang menyusul dengan jeda. Lingkaran membesar dan ber-tint biru di atas elemen yang bisa diklik. Hanya aktif untuk mouse; perangkat sentuh dan `prefers-reduced-motion` tetap memakai kursor sistem.
- **Strip logo menjadi marquee** selebar layar, berhenti saat hover atau fokus keyboard. Dengan `prefers-reduced-motion` tampil sebagai deretan logo diam.

Pengecualian aksen: titik pointer boleh biru karena ia penanda posisi interaksi, bukan dekorasi.

### Radius

Aturan tunggal: **kontrol interaktif berbentuk pil; wadah mengecil sesuai kedalaman sarangnya.** Ini menggantikan larangan pil sebelumnya (R-11), karena di arah baru pil konsisten dipakai untuk semua tombol dan chip, bukan tercampur acak.

| Token | Nilai | Dipakai untuk |
|---|---|---|
| `rounded-full` | pil | tombol, chip, tombol ikon |
| `--radius-lg` | `28px` | kanvas shot, kartu tingkat section |
| `--radius-md` | `16px` | kartu di dalamnya, layar yang dibingkai, tile |
| `--radius-sm` | `10px` | swatch dan elemen kecil |

Bingkai bersarang ("double bezel") memakai `calc(var(--radius-lg) - padding)` supaya lengkungnya konsentris.

### Bayangan

Dua level, keduanya di-tint ke biru, bukan hitam (R-12):
`--shadow-soft` untuk elemen yang mengambang tipis (nav, tile saat hover), `--shadow-lift` untuk layar yang dibingkai di atas kanvas.

---

## Aturan yang tidak boleh dilanggar

Diturunkan dari audit 001, supaya tidak berulang:

1. **Setiap warna teks wajib lolos WCAG AA** di atas setiap latar tempat ia muncul. Diukur, bukan dikira. Ambang: 4.5:1 teks normal, 3:1 teks besar.
2. **Tap target minimum 44x44px** untuk semua kontrol di mobile.
3. **Elemen yang disembunyikan wajib keluar dari tab order.** `max-height: 0` saja tidak cukup, perlu `hidden` atau `inert`.
4. **Tidak ada kontrol mati.** Kartu atau tombol tanpa tujuan harus diberi label yang terlihat pengguna, bukan cuma komentar `// TODO`.
5. **Tidak ada `fontFamily` inline.** Semua tipografi lewat token.
6. **Karya harus terlihat di homepage.** Portofolio product designer yang tidak menampilkan satu layar pun sudah gagal sebelum soal gaya dibahas.

---

## Pertanyaan terbuka untuk pemilik

1. ~~Jangkar gelap terlalu berat?~~ Dijawab revisi 2026-09-23: kontak dan footer sekarang terang. Panel Reflection di halaman case study masih memakai `--surface-ink`.
2. Urutan homepage sekarang: Hero, strip logo produk, Selected Work, Experience, Expertise, Design System, Contact. Sudah pas?
