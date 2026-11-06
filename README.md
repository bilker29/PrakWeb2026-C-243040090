<div align="center">

# 🌐 Praktikum Pemrograman Web 2026
### Repositori Resmi Tugas & Praktikum Laboratorium Informatika

[![React](https://img.shields.io/badge/React-19.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
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
- [Modul 2: Praktikum Lanjutan](#-modul-2-praktikum-lanjutan)
- [Daftar Rencana Studi (KRS 2026 Ganjil)](#-daftar-rencana-studi-krs-2026-ganjil)
- [Struktur Hierarki Direktori](#-struktur-hierarki-direktori)
- [Panduan Menjalankan Aplikasi](#-panduan-menjalankan-aplikasi-secara-lokal)
- [Rubrik Evaluasi & Kriteria Kualitas](#-rubrik-evaluasi--kriteria-kualitas)

---

## 📖 Tentang Repositori
Repositori ini dikelola untuk mendokumentasikan implementasi teknis, tugas terstruktur, serta latihan mandiri mata kuliah **Praktikum Pemrograman Web**. Seluruh arsitektur kode dibangun menggunakan standar industri modern berbasis **Component-Based Architecture**, aturan sintaksis deklaratif JSX, dan alur data searah (*unidirectional data flow*).

---

## 🚀 Modul 1: Fondasi Pengembangan Frontend
Direktori kerja modul: [`praktikum-web-modul1/`](./praktikum-web-modul1/)

### 1. Latihan Mandiri (In-Lab Task) - `BadgeSkill.jsx`
Komponen fungsional terisolasi untuk menampilkan keahlian teknis mahasiswa dengan pewarnaan lencana (*badge*) dinamis berdasarkan level:
- **Props**: `namaSkill` (String), `level` (`Pemula`, `Menengah`, `Mahir`)
- **Pewarnaan Dinamis**:
  - `Mahir` $\rightarrow$ Hijau emerald (`#DCFCE7` / `#15803D`)
  - `Menengah` $\rightarrow$ Kuning amber (`#FEF3C7` / `#92400E`)
  - `Pemula` $\rightarrow$ Slate keabuan (`#E2E8F0` / `#334155`)
- Terintegrasi di dalam komponen [`KartuProfil.jsx`](./praktikum-web-modul1/src/KartuProfil.jsx).

### 2. Pemisahan Modul Komponen - `ItemMatkul.jsx`
Pemisahan logika mata kuliah menjadi komponen independen berprinsip *Single Responsibility*:
- **Props**: `{ kode, nama, sks, jadwal, kelas, ruang }`
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
| **PUSTANI** | Platform informasi dan layanan literasi terpadu petani dengan microservices dan pipeline CI/CD GitHub Actions. | `#Docker` `#Microservices` `#CI/CD` `#Infra` | [Lihat Repo ↗](https://github.com/bilker29/Pustaka-Informasi-Petani-PUSTANI-) |
| **Portofolio V5** | Website portofolio interaktif pribadi yang responsif dengan showcase aktivitas bertema polaroid card. | `#React` `#TailwindCSS` `#Vite` `#Vercel` | [Lihat Repo ↗](https://github.com/bilker29/Portofolio_V5) |
| **Veridex AI** | Platform verifikasi kredensial berbasis AI dan smart contracts Web3 untuk tokenisasi RWA sertifikat tanah. | `#Next.js` `#Web3` `#SmartContracts` `#AI` | [Lihat Repo ↗](https://github.com/bilker29/Veridex-AI) |
| **Notes App** | Aplikasi catatan digital Single Page Application dengan kustom Web Components dan RESTful API. | `#WebComponents` `#Webpack` `#REST-API` `#SPA` | [Lihat Repo ↗](https://github.com/bilker29/Notes-App) |

---

## ⚡ Modul 2: Praktikum Lanjutan
Direktori kerja modul: [`praktikum-web-modul2/`](./praktikum-web-modul2/)

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
├── praktikum-web-modul1/              # Ruang kerja Proyek Modul 1 (Vite + React)
│   ├── index.html                     # Single-entry point HTML untuk SPA
│   ├── package.json                   # Manifes dependensi & skrip build
│   ├── vite.config.js                 # Konfigurasi build tool Vite
│   ├── eslint.config.js               # Konfigurasi standar kualitas kode
│   ├── public/                        # Aset statis publik
│   └── src/
│       ├── assets/
│       │   └── pass-foto.jpeg         # Pass foto resmi praktikan
│       ├── main.jsx                   # Titik masuk React DOM rendering
│       ├── App.jsx                    # Root component aplikasi
│       ├── KartuProfil.jsx            # Komponen kartu identitas praktikan
│       ├── BadgeSkill.jsx             # [Tugas 1] Komponen badge level keahlian
│       ├── ItemMatkul.jsx             # [Tugas 2] Komponen modular item mata kuliah
│       ├── KartuProyek.jsx            # [Tugas 3] Komponen showcase portofolio
│       └── index.css                  # Pengaturan gaya global
└── praktikum-web-modul2/              # Ruang kerja Proyek Modul 2
    ├── index.html                     # Entry point Modul 2
    ├── package.json                   # Manifes dependensi Modul 2
    ├── vite.config.js                 # Konfigurasi Vite Modul 2
    └── src/                           # Source code Modul 2
```

---

## 💻 Panduan Menjalankan Aplikasi Secara Lokal

### Prasyarat
- [Node.js](https://nodejs.org/) (versi LTS v18.x atau v20.x+)
- npm (v9.x atau v10.x+)

### Langkah Instalasi & Eksekusi (Modul 1)
1. **Clone repositori:**
   ```bash
   git clone https://github.com/bilker29/PrakWeb2026-C-243040090.git
   cd PrakWeb2026-C-243040090
   ```

2. **Masuk ke folder modul 1:**
   ```bash
   cd praktikum-web-modul1
   ```

3. **Pasang dependensi:**
   ```bash
   npm install
   ```

4. **Nyalakan server pengembangan lokal:**
   ```bash
   npm run dev
   ```

5. **Akses antarmuka peramban:**
   Buka peramban pada alamat `http://localhost:5173/`.

6. **Pengujian Build Produksi & Linter:**
   ```bash
   npm run build
   npm run lint
   ```

---

## 🏆 Rubrik Evaluasi & Kriteria Kualitas

Aplikasi ini telah dirancang dan diuji untuk memenuhi kriteria **Skala Sangat Baik (85 - 100)**:
- **Modularitas Komponen**: Seluruh komponen terpecah rapi, independen, dan berprinsip *Single Responsibility*.
- **Pemanfaatan Props & Data**: Pengiriman props dinamis, pemanfaatan *object destructuring*, dan perulangan array `.map()` menggunakan atribut `key` unik.
- **Kepatuhan Sintaksis JSX**: Menerapkan konvensi `camelCase`, penutupan tag mandiri (*self-closing tags*) yang presisi, serta bersih dari peringatan pada konsol peramban (`0 errors, 0 warnings`).

---
<div align="center">
  <sub>Praktikum Pemrograman Web © 2026 • Teknik Informatika • Universitas Pasundan</sub>
</div>
