/**
 * Konfigurasi Tailwind untuk Dapur Manis Bunda.
 *
 * Halaman TIDAK memakai CDN Tailwind. CSS-nya di-compile jadi berkas statis
 * supaya browser menerima CSS (~15 KB), bukan JavaScript 124 KB yang memblokir
 * render. Lihat docs/progress.md entri T15.
 *
 * CARA GENERATE ULANG — jalankan dari folder ini setiap kali menambah class
 * Tailwind baru di index.html (kalau lupa, kelasnya tidak akan ada gayanya;
 * `node .agents/tools/cek.mjs` akan memberitahu):
 *
 *   npx tailwindcss@3 -c tailwind.config.js -i assets/css/tailwind-src.css -o assets/css/style.css --minify
 *
 * `content` harus memuat SEMUA berkas yang berisi nama class Tailwind.
 */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        cream: '#FFF8F0',
        sand: '#F5E6D3',
        cocoa: '#3E2723',
        mocha: '#6D4C41',
        berry: '#C8553D',
        'berry-dark': '#A8432E',
        butter: '#F2C14E',
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        body: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
    },
  },
}
