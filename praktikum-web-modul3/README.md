# Modul 3: Pengenalan Next.js 16 & App Router (BacaKampus & Direktori UKM UNPAS)

Aplikasi portal terpadu **BacaKampus & Direktori UKM UNPAS** yang dibangun menggunakan **Next.js 16**, **React 19**, **Tailwind CSS v4**, dan **Turbopack** sebagai bagian dari mata kuliah **Praktikum Pemrograman Web 2026** di Program Studi Teknik Informatika, Universitas Pasundan (UNPAS).

Seluruh materi praktikum (Latihan 1 & 2) serta **Tugas Terstruktur** telah diintegrasikan secara komprehensif ke dalam satu proyek tunggal [`praktikum-web-modul3/`](./).

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

### 1. Struktur Folder & App Router (Nama Folder = Alamat URL)
Sistem perutean modern berbasis direktori (`app/`):
- `app/layout.js`: **Root Layout** wajib yang membungkus seluruh halaman dengan bilah navigasi `<Navbar />`, `<main>`, dan `<footer>`.
- `app/page.js`: Halaman Beranda utama dengan Hero Banner terpadu, tombol navigasi cepat, rekomendasi buku, dan sorotan UKM unggulan.
- `app/tentang/page.js`: Halaman informasi profil layanan, jam operasional, dan lokasi fisik ruang baca.
- `app/kontak/page.js`: **[Latihan 1]** Halaman kontak pustakawan dan informasi saluran layanan.
- `app/panduan/page.js`: Halaman panduan 4 langkah alur pendaftaran anggota baru UKM kampus beserta FAQ.
- `app/buku/layout.js`: **Nested Layout 1** khusus rute `/buku` yang menyematkan banner informasi peminjaman buku perpustakaan secara persisten.
- `app/buku/page.js`: Halaman katalog buku perpustakaan mini dilengkapi komponen filter interaktif.
- `app/buku/[id]/page.js`: **Dynamic Route 1** membaca parameter `[id]` secara asynchronous (`await params`), menerapkan `generateStaticParams()` dan penanganan `notFound()`.
- `app/ukm/layout.js`: **Nested Layout 2** khusus rute `/ukm` yang menyematkan banner informasi Open Recruitment UKM kampus UNPAS.
- `app/ukm/page.js`: Halaman direktori UKM kampus dilengkapi kotak pencarian dan filter kategori interaktif.
- `app/ukm/[id]/page.js`: **Dynamic Route 2** membaca parameter `[id]` secara asynchronous (`await params`), metadata dinamis (`generateMetadata`), `generateStaticParams()`, dan `notFound()`.
- `app/not-found.js`: Halaman kustom responsif saat rute, ID buku, atau ID UKM tidak ditemukan.

### 2. Pemisahan Komponen Server vs Client
- **Server Component (Default)**: Komponen berkinerja tinggi yang dirender di server, mengirimkan HTML ringan ke peramban tanpa beban JavaScript berlebih (`app/page.js`, `app/buku/page.js`, `app/buku/[id]/page.js`, `app/ukm/page.js`, `app/ukm/[id]/page.js`, `app/tentang/page.js`, `app/kontak/page.js`, `app/panduan/page.js`).
- **Client Component (`'use client'`)**: Komponen interaktif yang memerlukan state hooks dan browser APIs:
  - `components/Navbar.jsx`: Memanfaatkan `usePathname()` untuk mendeteksi rute aktif dan menyematkan styling kontras pada link yang sedang dibuka.
  - `components/TombolSimpan.jsx`: Memanfaatkan `useState()` dan `onClick` untuk mengelola status simpan buku ke daftar baca serta counter mahasiswa peminat.
  - `components/FilterBuku.jsx`: **[Latihan 2]** Memanfaatkan `useState()` untuk memfilter daftar buku perpustakaan berdasarkan kategori secara reaktif.
  - `components/FilterUKM.jsx`: **[Tugas Terstruktur]** Memanfaatkan `useState()` untuk filter kategori UKM sekaligus kotak pencarian teks (*live search*).
  - `components/TombolMinatUKM.jsx`: **[Tugas Terstruktur]** Memanfaatkan `useState()` untuk aksi registrasi minat gabung UKM disertai counter real-time.

---

## 🧪 Rincian Implementasi Tugas & Evaluasi Kemampuan

### 📌 1. Latihan 1 (In-Lab): Halaman Kontak & Pengujian 404
- **Halaman `/kontak` (`app/kontak/page.js`)**: Memuat jam layanan, kontak pustakawan, dan kanal komunikasi resmi. Terhubung langsung di `components/Navbar.jsx` menggunakan `<Link>`.
- **Pengujian 404 Custom (`app/not-found.js`)**: Dapat diuji dengan membuka URL yang tidak terdaftar (contoh: `/buku/tidak-ada` atau `/ukm/tidak-ada`), memicu fungsi `notFound()` dan menampilkan halaman error 404 yang ramah pengguna.

### 📌 2. Latihan 2 (In-Lab): Komponen Filter Kategori Buku
- Komponen client-side `components/FilterBuku.jsx` bertanda `'use client'`.
- Menggunakan hook `useState('Semua')` untuk menyaring daftar buku berdasarkan 6 kategori:
  `Semua` | `Pemrograman` | `Web` | `UI/UX` | `Sistem` | `Umum`
- Tombol kategori aktif disorot dengan warna `bg-slate-900 text-white`.

### 📌 3. Tugas Terstruktur: Direktori Unit Kegiatan Mahasiswa (UKM UNPAS Hub)
Terintegrasi langsung di dalam `praktikum-web-modul3` dan memenuhi 100% spesifikasi rubrik:
1. **Root Layout & Active Link**: Terpasang di `app/layout.js` dan `components/Navbar.jsx` menggunakan `usePathname()`.
2. **Minimal 3 Halaman Statis**: Tersedia 4 halaman statis (`/`, `/tentang`, `/kontak`, `/panduan`).
3. **1 Nested Layout**: Menggunakan `app/ukm/layout.js` (dan `app/buku/layout.js`).
4. **1 Dynamic Route `[id]/page.js`**: Menggunakan `app/ukm/[id]/page.js` dengan sintaksis `const { id } = await params;` (standar Next.js 16) serta penanganan `notFound()`.
5. **Halaman 404 Custom**: Menggunakan `app/not-found.js`.
6. **Minimal 1 Client Component**: Menggunakan `FilterUKM.jsx`, `TombolMinatUKM.jsx`, `FilterBuku.jsx`, `TombolSimpan.jsx`, dan `Navbar.jsx`.

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
│   │   │   └── page.js         # Dynamic Route Buku (await params + notFound)
│   │   ├── layout.js           # Nested Layout 1: Banner peminjaman buku
│   │   └── page.js             # Halaman katalog buku
│   ├── ukm/
│   │   ├── [id]/
│   │   │   └── page.js         # [Tugas] Dynamic Route UKM (await params + notFound)
│   │   ├── layout.js           # [Tugas] Nested Layout 2: Banner pendaftaran UKM
│   │   └── page.js             # [Tugas] Halaman direktori UKM
│   ├── kontak/
│   │   └── page.js             # [Latihan 1] Halaman kontak pustakawan
│   ├── panduan/
│   │   └── page.js             # [Tugas] Halaman panduan pendaftaran UKM
│   ├── tentang/
│   │   └── page.js             # Halaman profil ruang baca
│   ├── globals.css             # Konfigurasi Tailwind CSS v4 & tema latar
│   ├── layout.js               # Root Layout aplikasi terpadu
│   ├── not-found.js            # Halaman 404 kustom
│   └── page.js                 # Halaman Beranda utama
├── components/
│   ├── FilterBuku.jsx          # [Latihan 2] Client Component filter buku
│   ├── FilterUKM.jsx           # [Tugas] Client Component filter & search UKM
│   ├── Navbar.jsx              # Client Component bilah navigasi & active link
│   ├── TombolMinatUKM.jsx      # [Tugas] Client Component tombol registrasi minat
│   └── TombolSimpan.jsx        # Client Component tombol simpan daftar baca
├── data/
│   ├── buku.js                 # Dataset lokal katalog buku
│   └── ukm.js                  # Dataset lokal UKM kampus UNPAS
├── jsconfig.json               # Konfigurasi path alias @/*
├── next.config.mjs             # Konfigurasi Next.js 16 & Turbopack
└── package.json                # Manifes dependensi & skrip Next.js 16
```
