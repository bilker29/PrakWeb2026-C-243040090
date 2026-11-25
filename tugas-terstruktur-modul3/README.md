# Tugas Terstruktur Modul 3: Portal Direktori UKM UNPAS (UKM UNPAS Hub)

Aplikasi mandiri **UKM UNPAS Hub** (Portal Direktori Unit Kegiatan Mahasiswa Universitas Pasundan) yang dibangun dari nol menggunakan **Next.js 16**, **React 19**, **Tailwind CSS v4**, dan **Turbopack** sebagai pemenuhan **Tugas Terstruktur Modul 3 Praktikum Pemrograman Web 2026**.

---

## Identitas Praktikan

| Parameter | Keterangan |
| :--- | :--- |
| **Nama Praktikan** | **Billy Wicaksono** |
| **NPM** | **243040090** |
| **Kelas** | **C** |
| **Program Studi** | Teknik Informatika - Universitas Pasundan (UNPAS) |
| **Dosen Pengampu** | R. Sandhika Galih Amalga, ST., MT. |

---

## 📋 Pemenuhan Rubrik Penilaian (Kategori Sangat Baik: 85 - 100)

| Kriteria Modul | Implementasi Teknis pada UKM UNPAS Hub | Berkas Terkait |
| :--- | :--- | :--- |
| **Root Layout** | Menyediakan kerangka dasar `<html>`, `<body>`, bilah navigasi `<Navbar />` terpadu, `<main>`, dan `<footer>` resmi kampus. | [`app/layout.js`](./app/layout.js) |
| **Active Link** | Navigasi Client Component menggunakan `usePathname()` dari `next/navigation` untuk memberikan indikator visual menu aktif secara presisi. | [`components/Navbar.jsx`](./components/Navbar.jsx) |
| **Minimal 3 Halaman Statis** | 1. **Beranda** (`/`): Hero banner, statistik capaian kemahasiswaan, kartu UKM unggulan.<br/>2. **Tentang** (`/tentang`): Profil 3 pilar karakter UNPAS, fasilitas PKM di 3 kampus.<br/>3. **Panduan Pendaftaran** (`/panduan`): Alur 4 tahap registrasi anggota baru & FAQ.<br/>4. **Kontak** (`/kontak`): Jam operasional helpdesk, alamat Gedung Rektorat, hotline WA. | [`app/page.js`](./app/page.js)<br/>[`app/tentang/page.js`](./app/tentang/page.js)<br/>[`app/panduan/page.js`](./app/panduan/page.js)<br/>[`app/kontak/page.js`](./app/kontak/page.js) |
| **1 Nested Layout** | Layout tingkat kedua di rute `/ukm` yang menampilkan banner pengumuman resmi Open Recruitment terpadu secara konsisten pada halaman katalog maupun detail. | [`app/ukm/layout.js`](./app/ukm/layout.js) |
| **1 Dynamic Route (`[id]`)** | Rute dinamis `/ukm/[id]` yang membaca parameter URL secara asynchronous (`await params`) sesuai standar Next.js 16, mendukung `generateStaticParams()` dan `notFound()`. | [`app/ukm/[id]/page.js`](./app/ukm/[id]/page.js) |
| **Custom 404 (`not-found.js`)** | Tampilan error 404 ramah pengguna ketika membuka URL atau slug UKM yang tidak valid (`/ukm/tidak-ada`), lengkap dengan tombol navigasi balik. | [`app/not-found.js`](./app/not-found.js) |
| **Minimal 1 Client Component** | 1. `FilterUKM.jsx`: Fitur pencarian kata kunci dan penyaringan kategori UKM berbasis `useState()`.<br/>2. `TombolMinatUKM.jsx`: Tombol interaktif pendaftaran minat UKM dengan counter real-time berbasis `useState()`. | [`components/FilterUKM.jsx`](./components/FilterUKM.jsx)<br/>[`components/TombolMinatUKM.jsx`](./components/TombolMinatUKM.jsx) |

---

## 🏛️ Dataset Unit Kegiatan Mahasiswa (data/ukm.js)

1. **MAPAK ALAM UNPAS** (`mapak-alam`): Kategori Pecinta Alam (Konservasi, Caving, Arung Jeram).
2. **LSS UNPAS** (`lingkung-seni-sunda`): Kategori Seni Budaya (Karawitan, Jaipong, Degung).
3. **KSR PMI Unit UNPAS** (`ksr-pmi`): Kategori Sosial Kemanusiaan (Pertolongan Pertama, Donor Darah, Siaga Bencana).
4. **UNPAS Football & Futsal Club** (`unpas-fc`): Kategori Olahraga (Liga Mahasiswa, Pembinaan Fisik).
5. **Taekwondo UNPAS** (`taekwondo`): Kategori Olahraga (Kyorugi & Poomsae Beladiri Mahasiswa).
6. **Robotic & AI Club UNPAS** (`robotika-unpas`): Kategori Teknologi & Riset (Robot Otonom, IoT, Kontes Robot Indonesia).

---

## 💻 Panduan Menjalankan Proyek Secara Lokal

```bash
# 1. Pindah ke direktori tugas terstruktur
cd tugas-terstruktur-modul3

# 2. Pasang dependensi
npm install

# 3. Jalankan development server pada port default atau kustom
npm run dev

# 4. Bangun versi produksi (Build Verification)
npm run build

# 5. Uji kepatuhan kode (Lint)
npm run lint
```
Buka peramban pada alamat: `http://localhost:3000`
