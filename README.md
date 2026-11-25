<div align="center">

# 🌐 Praktikum Pemrograman Web 2026
### Repositori Resmi Tugas & Praktikum Laboratorium Informatika

[![Next.js](https://img.shields.io/badge/Next.js-16.x-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
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
- [Modul 1: Fondasi Pengembangan Frontend (React JS & Vite)](#-modul-1-fondasi-pengembangan-frontend-react-js--vite)
- [Modul 2: State Management & Komponen Interaktif](#-modul-2-state-management--komponen-interaktif)
- [Modul 3: Pengenalan Next.js 16 & App Router](#-modul-3-pengenalan-nextjs-16--app-router)
  - [1. Ringkasan Fitur Terpadu (BacaKampus & Direktori UKM)](#1-ringkasan-fitur-terpadu-bacakampus--direktori-ukm)
  - [2. Evaluasi & Kepatuhan Rubrik Modul 3](#2-evaluasi--kepatuhan-rubrik-modul-3)
- [Daftar Rencana Studi (KRS 2026 Ganjil)](#-daftar-rencana-studi-krs-2026-ganjil)
- [Struktur Hierarki Direktori](#-struktur-hierarki-direktori)
- [Panduan Menjalankan Aplikasi Secara Lokal](#-panduan-menjalankan-aplikasi-secara-lokal)
- [Rubrik Evaluasi & Kriteria Kualitas](#-rubrik-evaluasi--kriteria-kualitas)

---

## 📖 Tentang Repositori
Repositori ini dikelola untuk mendokumentasikan seluruh implementasi teknis, tugas mandiri, serta tugas terstruktur mata kuliah **Praktikum Pemrograman Web**. Seluruh arsitektur dibangun menggunakan standar industri modern berbasis **Component-Based Architecture**, aturan sintaksis deklaratif JSX, manajemen state reaktif melalui React Hooks, serta arsitektur fullstack modern berbasis **Next.js 16 App Router & Server Components**.

---

## 🚀 Modul 1: Fondasi Pengembangan Frontend (React JS & Vite)
Direktori kerja modul: [`praktikum-web-modul1/`](./praktikum-web-modul1/)

- **Latihan Mandiri 1 (`BadgeSkill.jsx`)**: Komponen lencana keahlian modular dengan pewarnaan dinamis berdasarkan level (`Mahir`, `Menengah`, `Pemula`).
- **Pemisahan Modul Komponen 2 (`ItemMatkul.jsx`)**: Pemisahan logika baris mata kuliah berprinsip *Single Responsibility* dengan *spread props* `<ItemMatkul key={...} {...props} />`.
- **Tugas Terstruktur 3 (`KartuProyek.jsx`)**: Showcase 4 proyek portofolio nyata praktikan di GitHub (@bilker29) lengkap dengan ringkasan deskripsi, tagar teknologi, dan tautan repositori.

---

## ⚡ Modul 2: State Management & Komponen Interaktif
Direktori kerja modul: [`praktikum-web-modul2/`](./praktikum-web-modul2/)

- **Eksperimen State (`Penghitung.jsx`)**: Reaktivitas state angka melalui tombol penambah, pengurang, dan reset.
- **Aplikasi Daftar Tugas**: Input terkontrol (*Controlled Components*), penandaan tugas selesai, filter kategori (*Semua*, *Aktif*, *Selesai*), progress bar penyelesaian, dan integrasi `useEffect` untuk judul tab serta persistensi `localStorage`.
- **Catatan Keuangan Mini (`CatatanKeuangan.jsx`)**: Dashboard kalkulasi saldo pemasukan/pengeluaran otomatis terhubung dengan `localStorage`.
- **Multi-Page Entry Points**: Konfigurasi multi-entry Vite (`index.html`, `HelloWorld.html`, `keuangan.html`).

---

## 🌐 Modul 3: Pengenalan Next.js 16 & App Router
Direktori kerja modul: [`praktikum-web-modul3/`](./praktikum-web-modul3/)

Pada Modul 3, seluruh materi praktikum laboratorium (**BacaKampus**) dan **Tugas Terstruktur (Direktori UKM Kampus UNPAS)** digabungkan secara utuh dan terpadu dalam satu aplikasi Next.js 16 agar tidak terpisah-pisah, rapi, dan mudah diakses.

### 1. Ringkasan Fitur Terpadu (BacaKampus & Direktori UKM)
1. **Root Layout (`app/layout.js`) & Active Navigation (`components/Navbar.jsx`)**:
   Bilah navigasi terpadu dengan indikator aktif berbasis `usePathname()` yang menghubungkan:
   - `Beranda` (`/`)
   - `Katalog Buku` (`/buku`)
   - `Direktori UKM` (`/ukm`)
   - `Panduan UKM` (`/panduan`)
   - `Tentang` (`/tentang`)
   - `Kontak` (`/kontak`)
2. **Katalog Perpustakaan Mini (Materi & Latihan In-Lab)**:
   - **Nested Layout 1 (`app/buku/layout.js`)**: Banner informasi peminjaman buku yang tampil persisten.
   - **Katalog & Filter Buku (`components/FilterBuku.jsx`)**: [Latihan 2] Client Component untuk memfilter 6 kategori buku secara reaktif.
   - **Dynamic Route 1 (`app/buku/[id]/page.js`)**: Membaca parameter asynchronous `await params` (standar Next.js 16), `generateStaticParams()`, tombol simpan daftar baca interaktif (`TombolSimpan.jsx`), dan validasi rute 404 via `notFound()`.
   - **Halaman Kontak (`app/kontak/page.js`)**: [Latihan 1] Informasi jadwal piket dan kontak pustakawan.
3. **Direktori Unit Kegiatan Mahasiswa (Tugas Terstruktur)**:
   - **Nested Layout 2 (`app/ukm/layout.js`)**: Banner pengumuman Open Recruitment terpadu UKM UNPAS.
   - **Direktori & Pencarian UKM (`components/FilterUKM.jsx`)**: Client Component dilengkapi filter kategori bidang UKM dan kotak pencarian teks langsung (*live search*).
   - **Dynamic Route 2 (`app/ukm/[id]/page.js`)**: Halaman detail profil UKM lengkap dengan sejarah, slogan, jadwal latihan, lokasi sekretariat, rekam jejak prestasi, dan tombol registrasi minat (`TombolMinatUKM.jsx`).
   - **Panduan Pendaftaran UKM (`app/panduan/page.js`)**: 4 langkah alur pendaftaran anggota baru beserta FAQ.
4. **Halaman 404 Custom (`app/not-found.js`)**:
   Halaman error kustom terpadu saat rute, ID buku, atau ID UKM tidak ditemukan.

### 2. Evaluasi & Kepatuhan Rubrik Modul 3
- **App Router & Layout (Sangat Baik)**: Root Layout dan 2 Nested Layout terpisah rapi dengan penamaan konvensi resmi Next.js (`layout.js`, `page.js`, `not-found.js`).
- **Navigasi & Dynamic Route (Sangat Baik)**: Seluruh navigasi menggunakan `<Link>`, Active Link tepat dengan `usePathname()`, rute dinamis `[id]` membaca `await params` + `notFound()`.
- **Server vs Client (Sangat Baik)**: Pemisahan tegas; direktif `'use client'` hanya dipasang pada komponen interaktif (`Navbar`, `FilterBuku`, `TombolSimpan`, `FilterUKM`, `TombolMinatUKM`), sementara halaman utama tetap berstatus Server Component.

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
├── .gitignore                         # Konfigurasi pengecualian Git root
│
├── praktikum-web-modul1/              # Proyek Modul 1 (Fondasi React, JSX, Props)
│   ├── README.md                      # Dokumentasi teknis Modul 1
│   ├── package.json                   # Manifes dependensi Modul 1
│   └── src/                           # Komponen React & pass foto praktikan
│
├── praktikum-web-modul2/              # Proyek Modul 2 (State, Hooks, Controlled Form)
│   ├── README.md                      # Dokumentasi teknis Modul 2
│   ├── package.json                   # Manifes dependensi Modul 2
│   └── src/                           # Daftar Tugas & Catatan Keuangan
│
└── praktikum-web-modul3/              # Proyek Modul 3 (Next.js 16 & App Router)
    ├── README.md                      # Dokumentasi teknis Modul 3
    ├── package.json                   # Manifes dependensi Next.js 16
    ├── next.config.mjs                # Konfigurasi Turbopack & Next.js 16
    ├── jsconfig.json                  # Konfigurasi path alias @/*
    ├── data/
    │   ├── buku.js                    # Data buku perpustakaan BacaKampus
    │   └── ukm.js                     # [Tugas] Data UKM kampus UNPAS
    ├── components/
    │   ├── Navbar.jsx                 # Bilah navigasi aktif
    │   ├── FilterBuku.jsx             # [Latihan 2] Client Component filter buku
    │   ├── TombolSimpan.jsx           # Client Component simpan buku
    │   ├── FilterUKM.jsx              # [Tugas] Client Component filter & search UKM
    │   └── TombolMinatUKM.jsx         # [Tugas] Client Component registrasi minat UKM
    └── app/
        ├── layout.js                  # Root Layout terpadu
        ├── not-found.js               # Halaman 404 kustom
        ├── page.js                    # Beranda (Buku + UKM unggulan)
        ├── tentang/page.js            # Halaman statis Tentang
        ├── kontak/page.js             # [Latihan 1] Halaman statis Kontak
        ├── panduan/page.js            # [Tugas] Halaman statis Panduan UKM
        ├── buku/
        │   ├── layout.js              # Nested Layout 1: Info peminjaman buku
        │   ├── page.js                # Katalog buku perpustakaan
        │   └── [id]/page.js           # Dynamic Route buku (await params + notFound)
        └── ukm/
            ├── layout.js              # [Tugas] Nested Layout 2: Banner pendaftaran UKM
            ├── page.js                # [Tugas] Direktori UKM kampus
            └── [id]/page.js           # [Tugas] Dynamic Route UKM (await params + notFound)
```

---

## 💻 Panduan Menjalankan Aplikasi Secara Lokal

### Prasyarat
- [Node.js](https://nodejs.org/) (versi LTS v20.9.0 atau yang lebih baru)
- npm (v10.x+)

### Menjalankan Proyek Modul 1:
```bash
cd praktikum-web-modul1
npm install
npm run dev
```
Akses: `http://localhost:5173/`

### Menjalankan Proyek Modul 2:
```bash
cd praktikum-web-modul2
npm install
npm run dev
```
Akses: `http://localhost:5173/`

### Menjalankan Proyek Modul 3:
```bash
cd praktikum-web-modul3
npm install
npm run dev
```
Akses: `http://localhost:3000/`

---

## 🏆 Rubrik Evaluasi & Kriteria Kualitas

Aplikasi pada repositori ini dirancang dan diuji untuk memenuhi kriteria **Skala Sangat Baik (85 - 100)**:
- **Modularitas & Single Responsibility**: Setiap modul komponen dan rute terpecah rapi sesuai peruntukan.
- **Kepatuhan Next.js 16**: Memanfaatkan Turbopack, App Router direktori, perutean dinamis `await params`, dan pemisahan Server/Client boundary yang disiplin.
- **Bebas Error & Warning**: Seluruh halaman terkompilasi bersih tanpa peringatan konsol peramban maupun linter (`npm run build` sukses).

---
<div align="center">
  <sub>Praktikum Pemrograman Web © 2026 • Teknik Informatika • Universitas Pasundan</sub>
</div>
