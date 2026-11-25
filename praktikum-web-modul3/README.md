# Modul 3: Pengenalan Next.js 16 & App Router (BacaKampus)

Aplikasi katalog buku perpustakaan mini **BacaKampus** yang dibangun menggunakan **Next.js 16**, **React 19**, **Tailwind CSS v4**, dan **Turbopack** sebagai bagian dari mata kuliah **Praktikum Pemrograman Web 2026** di Program Studi Teknik Informatika, Universitas Pasundan (UNPAS).

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

## 🎯 Capaian Pembelajaran & Fitur Modul 3

### 1. Struktur Folder & App Router
Sistem routing berbasis direktori (`app/`):
- `app/layout.js`: Root Layout terpadu yang membungkus seluruh halaman dengan `<Navbar />`, `<main>`, dan `<footer>`.
- `app/page.js`: Halaman utama Beranda dengan Hero Banner, CTA navigasi, dan koleksi rekomendasi buku.
- `app/tentang/page.js`: Halaman profil ruang baca, jam layanan, dan lokasi fisik.
- `app/buku/layout.js`: **Nested Layout** khusus sub-rute `/buku` yang menampilkan banner informasi peminjaman buku perpustakaan secara persisten.
- `app/buku/page.js`: Halaman katalog buku lengkap terintegrasi dengan filter interaktif.
- `app/buku/[id]/page.js`: **Dynamic Route** yang membaca parameter `[id]` secara asynchronous (`await params`), menerapkan `generateStaticParams()` dan `notFound()`.
- `app/not-found.js`: Halaman kustom responsif saat rute atau ID buku tidak ditemukan.

### 2. Pemisahan Komponen Server vs Client
- **Server Component (Default)**: Komponen berkinerja tinggi yang dirender di server, mengirimkan HTML ringan ke peramban tanpa overhead JavaScript runtime (`app/page.js`, `app/buku/page.js`, `app/buku/[id]/page.js`, `app/tentang/page.js`, `app/kontak/page.js`).
- **Client Component (`'use client'`)**: Komponen interaktif yang memerlukan browser APIs dan state hooks:
  - `components/Navbar.jsx`: Memanfaatkan `usePathname()` untuk mendeteksi dan memberi styling aktif pada link halaman saat ini.
  - `components/TombolSimpan.jsx`: Memanfaatkan `useState()` dan event handler `onClick` untuk mengelola status simpan ke daftar baca serta counter peminat buku.
  - `components/FilterBuku.jsx`: Memanfaatkan `useState()` untuk filter dinamis kategori koleksi buku secara real-time di sisi peramban.

---

## 🧪 Implementasi Latihan Modul 3 (In-Lab Tasks)

### 📌 Latihan 1: Halaman Kontak & Uji Halaman 404
1. **Rute `/kontak` (`app/kontak/page.js`)**:
   - Menampilkan jadwal layanan operasional pustakawan (Senin - Sabtu).
   - Menampilkan profil pustakawan bertugas (nama, email resmi, kontak WhatsApp, lokasi meja sirkulasi).
   - Terhubung langsung ke bilah navigasi utama melalui `components/Navbar.jsx` menggunakan komponen `<Link>` Next.js.
2. **Pengujian 404 Custom (`/buku/tidak-ada`)**:
   - Membuka URL buku yang tidak terdaftar akan memicu fungsi `notFound()` di `app/buku/[id]/page.js`, merender antarmuka kustom `app/not-found.js` dengan judul, pesan informatif, dan tombol kembali ke katalog.

### 📌 Latihan 2: Komponen Filter Kategori Buku (`FilterBuku.jsx`)
- Komponen client-side `components/FilterBuku.jsx` bertanda `'use client'`.
- Menggunakan hook `useState('Semua')` untuk menangani filter kategori:
  `Semua` | `Pemrograman` | `Web` | `UI/UX` | `Sistem` | `Umum`
- Tombol kategori aktif disorot dengan warna kontras (`bg-slate-900 text-white`).
- Kartu buku yang ditampilkan otomatis disaring secara reaktif tanpa perlu memuat ulang peramban.

---

## 💻 Panduan Menjalankan Aplikasi Secara Lokal

### Prasyarat
- Node.js versi 20.9.0 atau yang lebih baru (`node -v`)
- npm versi 10.x+

### Menjalankan Development Server
```bash
cd praktikum-web-modul3
npm run dev
```
Akses aplikasi melalui peramban: `http://localhost:3000`

### Build & Pengujian Produksi
```bash
# Build aplikasi produksi dengan Turbopack
npm run build

# Menjalankan server hasil build
npm run start

# Menjalankan static code analysis (Linter)
npm run lint
```

---

## 📂 Struktur Berkas Proyek

```text
praktikum-web-modul3/
├── app/
│   ├── buku/
│   │   ├── [id]/
│   │   │   └── page.js         # Dynamic Route [id] (await params + notFound)
│   │   ├── layout.js           # Nested Layout banner peminjaman
│   │   └── page.js             # Halaman katalog buku
│   ├── kontak/
│   │   └── page.js             # [Latihan 1] Halaman kontak pustakawan
│   ├── tentang/
│   │   └── page.js             # Halaman profil & lokasi ruang baca
│   ├── globals.css             # Konfigurasi Tailwind CSS v4 & latar #faf7f2
│   ├── layout.js               # Root Layout (Geist Font, Navbar, Footer)
│   ├── not-found.js            # Halaman 404 custom
│   └── page.js                 # Halaman beranda utama
├── components/
│   ├── FilterBuku.jsx          # [Latihan 2] Client component filter kategori
│   ├── Navbar.jsx              # Client component navigasi (usePathname)
│   └── TombolSimpan.jsx        # Client component tombol simpan & counter
├── data/
│   └── buku.js                 # Dataset lokal 6 buku perpustakaan
├── jsconfig.json               # Konfigurasi path alias @/*
├── next.config.mjs             # Konfigurasi Next.js 16
└── package.json                # Dependensi proyek
```
