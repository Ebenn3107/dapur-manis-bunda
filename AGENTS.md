# AGENTS.md — Dapur Manis Bunda Landing Page

## Wajib dibaca di awal sesi
1. `docs/progress.md` (status terakhir)
2. `docs/tasks.md` (ambil task berikutnya yang belum dicentang)
3. `docs/spec.md` hanya jika perlu konteks fitur

## Stack
HTML + Tailwind CSS + JavaScript vanilla. **Tanpa framework, tanpa CDN, tanpa server.**

Tailwind di-compile jadi berkas CSS statis (`assets/css/style.css`), bukan lewat
`cdn.tailwindcss.com`. CDN itu mengirim 124 KB JavaScript yang memblokir render dan
menjatuhkan skor Lighthouse ke 67; setelah diganti CSS statis jadi 97. Font juga
disajikan sendiri dari `assets/fonts/`, bukan Google Fonts.

**Kalau menambah class Tailwind baru di `index.html`, CSS-nya harus di-generate ulang:**
```
npx tailwindcss@3 -c tailwind.config.js -i assets/css/tailwind-src.css -o assets/css/style.css --minify
```
Lupa menjalankan ini bikin class baru tidak bergaya — `node <cek>.mjs` akan memberitahu.

```
/index.html
/tailwind.config.js   warna, font, dan daftar berkas yang dipindai
/assets/css/          style.css (hasil compile), fonts.css, tailwind-src.css (sumber)
/assets/fonts/        .woff2 — Fraunces + Plus Jakarta Sans, subset latin
/assets/img/          gambar .webp
/docs/
/.agents/skills/
```

## Aturan
- Kerjakan SATU task per sesi. Jangan sentuh section lain.
- Jangan menambah fitur di luar spec. Pilih solusi paling sederhana.
- Konten berbahasa Indonesia.
- Semua tampilan WAJIB mengikuti `.agents/skills/design-system/SKILL.md`.
- Membuat/mengubah section: ikuti `.agents/skills/section-builder/SKILL.md`.
- Link atau tombol WhatsApp: ikuti `.agents/skills/whatsapp-cta/SKILL.md`.
- Selesai task: ikuti `.agents/skills/progress-log/SKILL.md`.
