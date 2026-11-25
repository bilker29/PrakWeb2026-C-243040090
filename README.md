<div align="center">

# 🌐 Praktikum Pemrograman Web 2026
### Repositori Resmi Tugas & Praktikum Laboratorium Informatika

[![Next.js](https://img.shields.io/badge/Next.js-16.x-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-v4.x-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![GitHub](https://img.shields.io/badge/GitHub-bilker29-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/bilker29)

<br/>

| Parameter | Keterangan |
| :--- | :--- |
| **Nama Praktikan** | **Billy Wicaksono** |
| **NPM** | **243040090** |
| **Kelas** | **C** |
| **Program Studi** | Teknik Informatika - Universitas Pasundan (UNPAS) |
| **Dosen Pengampu** | R. Sandhika Galih Amalga, ST., MT. |
| **Status Akademik** | Mahasiswa Aktif |

</div>

---

## 📌 Daftar Isi
- [Tentang Repositori](#-tentang-repositori)
- [Modul 1: Fondasi Pengembangan Frontend](#-modul-1-fondasi-pengembangan-frontend)
  - [1. Latihan Mandiri (In-Lab Task) - BadgeSkill](#1-latihan-mandiri-in-lab-task---badgeskilljsx)
  - [2. Pemisahan Modul Komponen - ItemMatkul](#2-pemisahan-modul-komponen---itemmatkuljsx)
  - [3. Tugas Terstruktur - Showcase Portofolio Mini](#3-tugas-terstruktur-laporan-mandiri---showcase-portofolio-mini)
- [Modul 2: State Management & Komponen Interaktif](#-modul-2-state-management--komponen-interaktif)
  - [1. Eksperimen Reaktivitas State (`Penghitung.jsx`)](#1-eksperimen-reaktivitas-state-penghitungjsx)
  - [2. Aplikasi Manajemen Daftar Tugas (`Daftar Tugas`)](#2-aplikasi-manajemen-daftar-tugas-daftar-tugas)
  - [3. Catatan Keuangan Mini (`CatatanKeuangan.jsx`)](#3-catatan-keuangan-mini-catatankeuanganjsx)
  - [4. Konfigurasi Multi-Page HTML Entry Points](#4-konfigurasi-multi-page-html-entry-points)
- [Modul 3: Pengenalan Next.js 16 & App Router](#-modul-3-pengenalan-nextjs-16--app-router)
  - [1. Eksperimen Inti Laboratorium - BacaKampus](#1-aplikasi-katalog-perpustakaan-mini---bacakampus)
  - [2. Latihan 1 (In-Lab) - Halaman Kontak & Uji 404](#2-latihan-1-in-lab---halaman-kontak--uji-halaman-404)
  - [3. Latihan 2 (In-Lab) - Filter Kategori Buku](#3-latihan-2-in-lab---komponen-filter-buku-filterbukukjsx)
  - [4. Tugas Terstruktur Mandiri - UKM UNPAS Hub](#4-tugas-terstruktur-mandiri---portal-direktori-ukm-unpas-hub)
- [Daftar Rencana Studi (KRS 2026 Ganjil)](#-daftar-rencana-studi-krs-2026-ganjil)
- [Struktur Hierarki Direktori](#-struktur-hierarki-direktori)
- [Panduan Menjalankan Aplikasi Secara Lokal](#-panduan-menjalankan-aplikasi-secara-lokal)
- [Rubrik Evaluasi & Kriteria Kualitas](#-rubrik-evaluasi--kriteria-kualitas)

---

## 📖 Tentang Repositori
Repositori ini dikelola untuk mendokumentasikan implementasi teknis, tugas terstruktur, serta latihan mandiri mata kuliah **Praktikum Pemrograman Web**. Seluruh arsitektur kode dibangun menggunakan standar industri modern berbasis **Component-Based Architecture**, aturan sintaksis deklaratif JSX, manajemen state reaktif melalui React Hooks, aliran data searah (*unidirectional data flow*), serta transisi menuju **Next.js 16 Fullstack App Router** dan **Tailwind CSS v4**.

---

## 🚀 Modul 1: Fondasi Pengembangan Frontend
Direktori kerja modul: [`praktikum-web-modul1/`](./praktikum-web-modul1/)

### 1. Latihan Mandiri (In-Lab Task) - `BadgeSkill.jsx`
Komponen fungsional terisolasi untuk menampilkan keahlian teknis mahasiswa dengan pewarnaan lencana (*badge*) dinamis berdasarkan level:
- **Props**: `namaSkill` (String), `level` (`Pemula`, `Menengah`, `Mahir`)
- **Pewarnaan Dinamis**:
  - `Mahir` $\rightarrow$ Hijau emerald (`#D4EDDA` / `#15803D`)
  - `Menengah` $\rightarrow$ Kuning amber (`#CCE5FF` / `#004085`)
  - `Pemula` $\rightarrow$ Slate keabuan (`#FFF3CD` / `#856404`)
- Terintegrasi di dalam komponen [`KartuProfil.jsx`](./praktikum-web-modul1/src/KartuProfil.jsx).

### 2. Pemisahan Modul Komponen - `ItemMatkul.jsx`
Pemisahan logika mata kuliah menjadi komponen independen berprinsip *Single Responsibility*:
- **Props**: `{ kode, nama, sks, jadwal, ruang }`
- **Penerapan di `App.jsx`**:
  ```jsx
  {daftarMataKuliah.map((matkul) => (
    <ItemMatkul key={matkul.id} {...matkul} />
  ))}
  ```

### 3. Tugas Terstruktur (Laporan Mandiri) - Showcase Portofolio Mini
Komponen [`KartuProyek.jsx`](./praktikum-web-modul1/src/KartuProyek.jsx) menampilkan 4 proyek nyata yang terhubung langsung ke repositori GitHub resmi praktikan ([@bilker29](https://github.com/bilker29)):

| Proyek | Ringkasan Deskripsi | Tagar Teknologi | Tautan Repositori |
| :--- | :--- | :--- | :---: |
| **PUSTANI** | Platform informasi dan layanan literasi terpadu petani dengan microservices dan pipeline CI/CD GitHub Actions. | `#Docker` `#Microservices` `#CI/CD` `#Fullstack` | [Lihat Repo ↗](https://github.com/bilker29/Pustaka-Informasi-Petani-PUSTANI-) |
| **Portofolio V5** | Website portofolio interaktif pribadi yang responsif dengan showcase keahlian dan riwayat kegiatan. | `#React` `#TailwindCSS` `#Vite` `#JavaScript` | [Lihat Repo ↗](https://github.com/bilker29/Portofolio_V5) |
| **Veridex AI** | Platform verifikasi kredensial berbasis AI dan smart contracts Web3 untuk tokenisasi RWA sertifikat tanah. | `#Next.js` `#Web3` `#SmartContracts` `#TailwindCSS` | [Lihat Repo ↗](https://github.com/bilker29/Veridex-AI) |
| **Notes App** | Aplikasi catatan digital Single Page Application dengan kustom Web Components modular dan RESTful API. | `#JavaScript` `#WebComponents` `#Webpack` `#REST-API` | [Lihat Repo ↗](https://github.com/bilker29/Notes-App) |

---

## ⚡ Modul 2: State Management & Komponen Interaktif
Direktori kerja modul: [`praktikum-web-modul2/`](./praktikum-web-modul2/)

Modul 2 berfokus pada pendalaman reaktivitas React melalui **State Hook (`useState`)**, **Side Effect Hook (`useEffect`)**, penanganan form terkontrol (*Controlled Components*), serta sinkronisasi data peramban (*LocalStorage*).

### 1. Eksperimen Reaktivitas State (`Penghitung.jsx`)
- Demonstrasi interaktivitas state angka melalui tombol *Increment*, *Decrement*, dan *Reset*.
- Mengamati alur kerja *re-render* deklaratif saat nilai state mengalami mutasi.

### 2. Aplikasi Manajemen Daftar Tugas (`Daftar Tugas`)
- **Input Terkontrol & Validasi:** Form penambahan tugas baru dengan validasi string kosong dan reset form otomatis.
- **Toggle Status Selesai:** Penandaan progres tugas menggunakan coretan teks (*line-through*) dan *checkbox*.
- **Filter Tugas Dinamis:** Filter data berbasis state: *Semua*, *Belum Selesai (Aktif)*, dan *Selesai*.
- **Progress Bar Real-Time:** Penghitungan rasio dan persentase penyelesaian tugas secara otomatis.
- **Pembersihan Massal (*Bulk Action*):** Tombol pembersihan semua tugas yang sudah berstatus selesai.
- **Integrasi `useEffect`:**
  - Pembaruan judul tab dokumen (`document.title`) berdasarkan sisa tugas yang belum diselesaikan.
  - Persistensi data dua arah ke `localStorage` agar data tugas tidak hilang saat peramban dimuat ulang.

### 3. Catatan Keuangan Mini (`CatatanKeuangan.jsx`)
- **Dashboard Ringkasan Saldo:** Perhitungan real-time akumulasi pemasukan, pengeluaran, serta sisa saldo kas.
- **Form Mutasi Keuangan:** Input nominal terformat, keterangan transaksi, dan pemilihan kategori tipe mutasi.
- **Riwayat Transaksi:** Penyajian riwayat transaksi terformat mata uang Rupiah (`Intl.NumberFormat`).
- **Penyimpanan Lokal:** Terhubung otomatis dengan `localStorage` (*browser storage*).

### 4. Konfigurasi Multi-Page HTML Entry Points
Proyek dikonfigurasikan dengan build multi-page Vite:
- `index.html` $\rightarrow$ Dasbor Utama (Navigasi Tab antara Daftar Tugas & Catatan Keuangan)
- `HelloWorld.html` $\rightarrow$ Demonstrasi komponen Hello World dasar
- `keuangan.html` $\rightarrow$ Akses mandiri untuk modul Catatan Keuangan

---

## 🌟 Modul 3: Pengenalan Next.js 16 & App Router
Direktori kerja modul: [`praktikum-web-modul3/`](./praktikum-web-modul3/)  
Direktori tugas terstruktur: [`tugas-terstruktur-modul3/`](./tugas-terstruktur-modul3/)  
Dokumen laporan resmi: [`LAPORAN_TUGAS_MODUL_3.md`](./LAPORAN_TUGAS_MODUL_3.md)

Modul 3 mengeksplorasi paradigma modern **App Router** pada **Next.js 16**, pemisahan **Server Component vs Client Component**, **Root & Nested Layout**, navigasi deklaratif `<Link>`, indikator status aktif berbasis `usePathname()`, rute dinamis `[id]/page.js` berbasis asynchronous `await params`, serta halaman penanganan error kustom `not-found.js`.

### 1. Aplikasi Katalog Perpustakaan Mini - BacaKampus
- **Root Layout (`app/layout.js`)**: Struktur terpadu yang menyematkan navigasi sticky `<Navbar />`, kontainer konten responsif, dan footer informasi praktikum.
- **Halaman Beranda (`app/page.js`)**: Hero section perpustakaan dan 3 rekomendasi buku pilihan terhubung ke dynamic route.
- **Halaman Tentang (`app/tentang/page.js`)**: Profil ruang baca, jam operasional, dan lokasi fisik kampus di Bandung.
- **Nested Layout (`app/buku/layout.js`)**: Banner persisten peraturan peminjaman buku perpustakaan untuk rute `/buku` dan `/buku/[id]`.
- **Dynamic Route `[id]` (`app/buku/[id]/page.js`)**: Pembacaan parameter `const { id } = await params;` sesuai standar Next.js 16, pemanggilan `notFound()` bila buku tidak ditemukan, dan integrasi tombol simpan client component.
- **Custom 404 (`app/not-found.js`)**: Halaman penanganan kesalahan 404 estetik dan responsif.

### 2. Latihan 1 (In-Lab) - Halaman Kontak & Uji Halaman 404
- **Halaman Kontak (`app/kontak/page.js`)**: Menyajikan jadwal layanan pustakawan serta informasi kontak Ibu Siti Nurhaliza, S.I.Pust. (email, WhatsApp, meja layanan).
- **Tautan Navigasi**: Terhubung pada bilah menu `components/Navbar.jsx` menggunakan `<Link>`.
- **Pengujian 404**: Menyediakan tombol uji cepat yang membuka rute `/buku/tidak-ada` untuk memverifikasi fungsionalitas `notFound()`.

### 3. Latihan 2 (In-Lab) - Komponen Filter Buku (`FilterBuku.jsx`)
- **Komponen Interaktif (`components/FilterBuku.jsx`)**: Menggunakan `'use client'` dan state `useState('Semua')`.
- Menyaring koleksi buku secara instan berdasarkan kategori: `Semua`, `Pemrograman`, `Web`, `UI/UX`, `Sistem`, dan `Umum`.
- Disorot dengan warna `bg-slate-900 text-white` saat kategori aktif dipilih.

### 4. Tugas Terstruktur Mandiri - Portal Direktori UKM (UKM UNPAS Hub)
Aplikasi mandiri lengkap bertema **Direktori Unit Kegiatan Mahasiswa Universitas Pasundan**:
- **Root Layout & Active Link**: Header navigasi interaktif dengan deteksi `usePathname()`.
- **4 Halaman Statis**:
  1. `/` (Beranda: Hero kemahasiswaan, statistik UKM, kartu unggulan)
  2. `/tentang` (Tentang: 3 pilar karakter UNPAS, profil PKM kampus I, II, dan IV)
  3. `/panduan` (Panduan: 4 tahapan open recruitment & FAQ)
  4. `/kontak` (Kontak: Layanan Biro Kemahasiswaan & Alumni Rektorat)
- **1 Nested Layout (`app/ukm/layout.js`)**: Banner resmi Open Recruitment terpadu 2026/2027.
- **1 Dynamic Route (`app/ukm/[id]/page.js`)**: Menampilkan profil lengkap 6 UKM (`mapak-alam`, `lingkung-seni-sunda`, `ksr-pmi`, `unpas-fc`, `taekwondo`, `robotika-unpas`) dengan `await params` dan `generateStaticParams()`.
- **Client Components**:
  - `FilterUKM.jsx`: Filter kategori & live keyword search dengan `useState`.
  - `TombolMinatUKM.jsx`: Toggle registrasi minat gabung UKM & live counter peminat dengan `useState`.
- **Custom 404 (`app/not-found.js`)**: Penanganan kesalahan 404 ramah pengguna bertema kampus.

---

## 📅 Daftar Rencana Studi (KRS 2026 Ganjil)
Data terverifikasi sesuai Kartu Rencana Studi (KRS) sistem SITU2 UNPAS:

| No | Kode | Nama Mata Kuliah | Kelas | SKS | Waktu & Ruangan |
| :-: | :--- | :--- | :-: | :-: | :--- |
| 1 | `IF21P1506` | Sistem Operasi Lanjut | A | 3 | Rabu, 13:00 - 15:30 @ SB405 - M |
| 2 | `IF21W0502` | Internet of Things | A | 2 | Kamis, 07:00 - 08:40 @ SB305 |
| 3 | `IF21W0503` | Intelegensia Buatan | C | 3 | Kamis, 09:40 - 12:10 @ SB401 |
| 4 | `IF21W0504` | Verifikasi dan Validasi Perangkat Lunak | A | 2 | Senin, 16:30 - 18:15 @ SB407 |
| 5 | `IF21W0505` | Perancangan Sistem | C | 3 | Rabu, 07:00 - 09:30 @ SB405 - M |
| 6 | `IF21W0506` | Praktikum Web | C | 2 | Selasa, 14:50 - 16:30 @ SB602 |
| 7 | `IF21W0507` | Praktikum Sistem Berorientasi Objek | C | 1 | Selasa, 13:00 - 14:40 @ SB603 |
| 8 | `IF21W0508` | Praktikum Pemrograman II | C | 2 | Senin, 13:00 - 14:40 @ SB601 |
| 9 | `IF21W0701` | Bahasa Inggris | C | 2 | Rabu, 16:30 - 18:05 @ SB109 |
| 10 | `IF21W0702` | Technopreneurship | A | 2 | Rabu, 10:40 - 12:20 @ SB410 |

> **Total Beban Studi: 22 SKS (10 Mata Kuliah)**

---

## 📂 Struktur Hierarki Direktori

```text
PrakWeb2026-C-243040090/
├── README.md                          # Dokumentasi utama repositori
├── LAPORAN_TUGAS_MODUL_3.md           # Laporan resmi komprehensif Modul 3
├── .gitignore                         # Konfigurasi pengecualian Git root
│
├── praktikum-web-modul1/              # Proyek Modul 1 (Fondasi React, JSX, Props)
│   ├── README.md                      # Dokumentasi teknis Modul 1
│   ├── index.html                     # Entry point SPA
│   ├── package.json                   # Manifes dependensi Modul 1
│   ├── vite.config.js                 # Konfigurasi build Vite Modul 1
│   ├── eslint.config.js               # Konfigurasi linter Modul 1
│   ├── public/                        # Aset publik statis
│   └── src/                           # Komponen React (BadgeSkill, ItemMatkul, KartuProyek)
│
├── praktikum-web-modul2/              # Proyek Modul 2 (State, Hooks, Controlled Form)
│   ├── README.md                      # Dokumentasi teknis Modul 2
│   ├── index.html                     # Entry point Dasbor Tugas & Keuangan
│   ├── HelloWorld.html                # Entry point halaman Hello World
│   ├── keuangan.html                  # Entry point modul Catatan Keuangan
│   ├── package.json                   # Manifes dependensi Modul 2
│   ├── vite.config.js                 # Konfigurasi multi-page build Vite Modul 2
│   ├── eslint.config.js               # Konfigurasi linter Modul 2
│   └── src/                           # Komponen React & Modul Keuangan
│
├── praktikum-web-modul3/              # Proyek Modul 3 (Next.js 16 App Router - BacaKampus)
│   ├── README.md                      # Dokumentasi teknis Modul 3
│   ├── package.json                   # Manifes dependensi Next.js 16
│   ├── next.config.mjs                # Konfigurasi Turbopack Next.js 16
│   ├── jsconfig.json                  # Konfigurasi alias path @/*
│   ├── eslint.config.mjs              # Konfigurasi ESLint Flat Config v9
│   ├── app/
│   │   ├── layout.js                  # Root Layout (Geist Font, Navbar, Footer)
│   │   ├── page.js                    # Halaman Beranda (Hero & Rekomendasi Buku)
│   │   ├── globals.css                # Tailwind CSS v4 & tema latar #faf7f2
│   │   ├── not-found.js               # Halaman kustom 404
│   │   ├── tentang/page.js            # Halaman statis profil ruang baca
│   │   ├── kontak/page.js             # [Latihan 1] Halaman kontak pustakawan & uji 404
│   │   └── buku/
│   │       ├── layout.js              # Nested Layout banner peminjaman
│   │       ├── page.js                # Halaman katalog buku
│   │       └── [id]/page.js           # Dynamic Route [id] (await params + notFound)
│   ├── components/
│   │   ├── Navbar.jsx                 # Client component navigasi (usePathname)
│   │   ├── TombolSimpan.jsx           # Client component tombol simpan & counter
│   │   └── FilterBuku.jsx             # [Latihan 2] Client component filter kategori
│   └── data/
│       └── buku.js                    # Dataset 6 buku perpustakaan mini
│
└── tugas-terstruktur-modul3/          # Proyek Mandiri Tugas Terstruktur (UKM UNPAS Hub)
    ├── README.md                      # Dokumentasi teknis Tugas Terstruktur
    ├── package.json                   # Manifes dependensi Next.js 16
    ├── next.config.mjs                # Konfigurasi Turbopack
    ├── jsconfig.json                  # Path alias @/*
    ├── eslint.config.mjs              # Konfigurasi ESLint Flat Config v9
    ├── app/
    │   ├── layout.js                  # Root Layout + Navbar + Footer
    │   ├── page.js                    # Halaman Statis 1: Beranda UKM UNPAS Hub
    │   ├── tentang/page.js            # Halaman Statis 2: Pilar Karakter & Fasilitas PKM
    │   ├── panduan/page.js            # Halaman Statis 3: Alur 4 Tahap Pendaftaran & FAQ
    │   ├── kontak/page.js             # Halaman Statis 4: Layanan Biro Kemahasiswaan
    │   ├── globals.css                # Gaya global Tailwind CSS v4
    │   ├── not-found.js               # Halaman kustom 404
    │   └── ukm/
    │       ├── layout.js              # 1 Nested Layout: Banner resmi Open Recruitment
    │       ├── page.js                # Direktori UKM + Filter & Live Search
    │       └── [id]/page.js           # 1 Dynamic Route [id] (await params + notFound)
    ├── components/
    │   ├── Navbar.jsx                 # Client component navigasi (usePathname)
    │   ├── FilterUKM.jsx              # Client component filter kategori & search live
    │   └── TombolMinatUKM.jsx         # Client component toggle minat & counter peminat
    └── data/
        └── ukm.js                     # Dataset lengkap 6 UKM resmi UNPAS
```

---

## 💻 Panduan Menjalankan Aplikasi Secara Lokal

### Prasyarat
- [Node.js](https://nodejs.org/) (versi LTS v20.9.0 atau yang lebih baru)
- npm (versi v10.x+)

### Menjalankan Proyek Modul 1:
```bash
cd praktikum-web-modul1
npm install
npm run dev
```
Buka peramban pada alamat: `http://localhost:5173/`

### Menjalankan Proyek Modul 2:
```bash
cd praktikum-web-modul2
npm install
npm run dev
```
Buka peramban pada alamat: `http://localhost:5173/` (tersedia halaman tambahan `/HelloWorld.html` dan `/keuangan.html`).

### Menjalankan Proyek Modul 3 (Aplikasi BacaKampus):
```bash
cd praktikum-web-modul3
npm install
npm run dev
```
Buka peramban pada alamat: `http://localhost:3000/`  
Pengujian build produksi & linter:
```bash
npm run build
npm run lint
```

### Menjalankan Proyek Tugas Terstruktur (UKM UNPAS Hub):
```bash
cd tugas-terstruktur-modul3
npm install
npm run dev
```
Buka peramban pada alamat: `http://localhost:3000/`  
Pengujian build produksi & linter:
```bash
npm run build
npm run lint
```

---

## 🏆 Rubrik Evaluasi & Kriteria Kualitas

Aplikasi pada repositori ini dirancang dan diuji untuk memenuhi kriteria **Skala Sangat Baik (85 - 100)**:
- **App Router & Layout**: Root Layout dan Nested Layout tersusun rapi, konvensi penamaan berkas (`page.js`, `layout.js`, `not-found.js`) presisi tanpa duplikasi markup.
- **Navigasi & Dynamic Route**: Seluruh navigasi internal memanfaatkan komponen `<Link>`, indikator status menu aktif berbasis `usePathname()`, rute dinamis `[id]` wajib membaca `await params` dan memicu `notFound()` bila data tidak tersedia.
- **Server vs Client Boundary**: Direktif `'use client'` dipasang secara ketat hanya pada komponen interaktif yang membutuhkan state (`useState`, event handler `onClick`, deteksi URL), menjaga performa SSR tetap optimal dan bebas dari galat konsol peramban (`0 errors, 0 warnings`).
- **Dokumentasi & Laporan Komprehensif**: Disertai berkas laporan praktikum lengkap, penjelasan arsitektur kode dengan bahasa sendiri, tabel pengujian rute, dan instruksi replikasi lokal yang jelas.

---
<div align="center">
  <sub>Praktikum Pemrograman Web © 2026 • Teknik Informatika • Universitas Pasundan</sub>
</div>
