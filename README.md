# PrakWeb2026-C-243040090

Repositori Tugas & Praktikum Pemrograman Web 2026

## Identitas Praktikan
- **Nama:** Billy Wicaksono
- **NPM:** 243040090
- **Kelas:** C
- **Dosen Pengampu:** R. Sandhika Galih Amalga, ST., MT.

---

## Modul 1: Fondasi Pengembangan Frontend (React JS & Vite)

Direktori proyek: [`praktikum-web-modul1-example`](./praktikum-web-modul1-example/)

### Capaian & Penyelesaian Tugas / Evaluasi Kemampuan:
1. **Latihan Mandiri (In-Lab Task) - `BadgeSkill.jsx`**:
   - Komponen fungsional modular yang menerima `props`: `namaSkill` dan `level` (`Pemula`, `Menengah`, `Mahir`).
   - Menerapkan pewarnaan dinamis pada badge sesuai tingkat keahlian (*conditional styling*).
   - Diintegrasikan secara dinamis di dalam profil mahasiswa.

2. **Pemisahan Modul Komponen - `ItemMatkul.jsx`**:
   - Memisahkan logika rendering item daftar mata kuliah dari `App.jsx` ke dalam berkas `ItemMatkul.jsx`.
   - Menggunakan pendekatan *destructuring props* dan *spread operator* `<ItemMatkul key={...} {...props} />` untuk memastikan prinsip *Single Responsibility*.

3. **Tugas Terstruktur (Laporan Mandiri) - Showcase Portofolio Mini (`KartuProyek.jsx`)**:
   - Menampilkan minimal 4 kartu portofolio proyek perangkat lunak interaktif.
   - Komponen memuat atribut: **Judul Proyek**, **Ringkasan Deskripsi**, **Tagar Teknologi**, dan **Tombol Tautan Repositori GitHub**.
   - Tata letak responsif menggunakan *CSS Grid* dan estetika visual yang konsisten.

---

## Cara Menjalankan Proyek Secara Lokal

1. Masuk ke direktori modul:
   ```bash
   cd praktikum-web-modul1-example
   ```

2. Instalasi dependensi:
   ```bash
   npm install
   ```

3. Jalankan development server:
   ```bash
   npm run dev
   ```

4. Buka peramban pada alamat:
   `http://localhost:5173/`
