# Web Portofolio

Situs portofolio statis (HTML, CSS, JavaScript) tanpa build step. Dua bahasa: Indonesia dan Inggris.

## Menjalankan

Nyalakan Apache di XAMPP, lalu buka: http://localhost/portofolio/

## Mengubah konten

Semua teks ada di `js/data.js`, dikelompokkan per bahasa: `PORTFOLIO.id` dan `PORTFOLIO.en`.
Tiap bahasa punya `ui` (label menu, judul section, form), `profile`, `skills`, `projects`, `experience`, `education`.
Yang sama di semua bahasa (snippet kode hero, link sosial, endpoint form) ada di bagian atas file.

- Bahasa: tombol ID/EN di navigasi. Pilihan disimpan di browser; default mengikuti bahasa browser.
- Foto profil: ganti `img/profile.svg` atau ubah `profile.photo` ke file lain di folder `img/`.
- Form kontak: isi `FORM_ENDPOINT` dengan URL endpoint (mis. Formspree) agar form mengirim lewat POST JSON. Kosong = membuka aplikasi email (mailto).
- Tema terang/gelap mengikuti sistem, bisa diganti lewat tombol di navigasi.
- Proyek dengan `featured: true` tampil sebagai kartu besar. Warna kategori diatur di `CAT_HUE` pada `js/main.js`.
