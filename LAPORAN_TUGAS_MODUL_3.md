# LAPORAN PRAKTIKUM PEMROGRAMAN WEB
## MODUL 3: PENGENALAN NEXT.JS 16 & APP ROUTER

---

### IDENTITAS MAHASISWA
- **Nama Praktikan** : Billy Wicaksono
- **NPM** : 243040090
- **Kelas** : C
- **Program Studi** : Teknik Informatika
- **Fakultas** : Fakultas Teknik
- **Perguruan Tinggi** : Universitas Pasundan (UNPAS)
- **Mata Kuliah** : Praktikum Pemrograman Web (IF21W0506)
- **Dosen Pengampu** : R. Sandhika Galih Amalga, ST., MT.
- **Tahun Akademik** : 2026 / 2027

---

## 1. PENDAHULUAN & TUJUAN PRAKTIKUM

Praktikum Modul 3 bertujuan memberikan pemahaman mendalam mengenai arsitektur modern pengembangan aplikasi web fullstack berbasis **Next.js 16** dengan paradigma **App Router**. 

Capaian luaran praktikan meliputi:
1. **Peran Next.js vs React + Vite**: Memahami keunggulan SSR (*Server-Side Rendering*), layout bersama, serta performa SEO yang optimal.
2. **Setup Next.js 16**: Menguasai inisialisasi proyek dengan `create-next-app@latest`, menjalankan bundler Turbopack, serta menata struktur direktori `app/`.
3. **Root Layout & Nested Layout**: Mengimplementasikan `layout.js` untuk komponen antarmuka bersama (Navbar/Footer) serta layout bertingkat (*nested*) khusus sub-rute.
4. **Navigasi & Dynamic Route**: Menguasai komponen `<Link>`, indikator status aktif berbasis `usePathname()`, rute dinamis `[id]/page.js` berbasis asynchronous `await params`, serta penanganan halaman 404 kustom melalui `not-found.js`.
5. **Server Component vs Client Component**: Memahami batasan eksekusi kode di server secara *default* serta penggunaan direktif `'use client'` secara tepat pada komponen interaktif berbasis state.

---

## 2. DASAR TEORI

### 2.1 Perbandingan React + Vite vs Next.js 16 (App Router)

| Parameter | React + Vite (Modul 1 & 2) | Next.js 16 App Router (Modul 3) |
| :--- | :--- | :--- |
| **Mekanisme Routing** | Perlu pustaka pihak ketiga (`react-router-dom`) | Otomatis berbasis struktur hierarki direktori di `app/` |
| **Lingkungan Rendering** | Browser (Client-Side Rendering / CSR) | Server secara default (React Server Component / RSC) |
| **Layout Antarmuka** | Dikelola manual melalui pembungkus komponen | Disediakan secara terintegrasi via berkas khusus `layout.js` |
| **Bundler Bawaan** | Vite (Rollup / esbuild) | Turbopack (kompilasi kilat berbasis Rust) |
| **Penanganan Dynamic Params** | `useParams()` synchronous hook | `await params` (Asynchronous Promise pada Next.js 15/16) |

### 2.2 Aturan Pembagian Server Component & Client Component

```text
┌────────────────────────────────────────────────────────┐
│            SERVER COMPONENT (DEFAULT DI APP/)          │
│ • Dirender langsung di server                          │
│ • Menghasilkan markup HTML ringan ke peramban          │
│ • Aman membaca database / sistem berkas lokal          │
│ • Bebas overhead JavaScript di browser                 │
└───────────────────────────┬────────────────────────────┘
                            │ Mengirim HTML & Props
                            ▼
┌────────────────────────────────────────────────────────┐
│          CLIENT COMPONENT ('use client' DI BARIS 1)    │
│ • Komponen interaktif peramban                         │
│ • Wajib memakai useState, useEffect, onClick, dll      │
│ • Membaca URL peramban via usePathname()               │
└────────────────────────────────────────────────────────┘
```

---

## 3. IMPLEMENTASI BAGIAN C: LANGKAH EKSPERIMEN LABORATORIUM

Eksperimen laboratorium menghasilkan aplikasi katalog perpustakaan mini **BacaKampus** di dalam direktori `praktikum-web-modul3`:

### 3.1 Langkah 1: Setup Proyek Next.js 16
Proyek diinisialisasi menggunakan perintah standar laboratorium:
```bash
npx create-next-app@latest praktikum-web-modul3 --js --tailwind --eslint --app --import-alias "@/*" --use-npm --yes
```

### 3.2 Langkah 2: Konfigurasi Gaya Global (`app/globals.css`)
Warna latar belakang diatur ke nuansa terang `#faf7f2` dengan warna teks utama `#0f172a`:
```css
/* app/globals.css */
@import "tailwindcss";

body {
  background-color: #faf7f2;
  color: #0f172a;
}
```

### 3.3 Langkah 3: Dataset Lokal, Navbar Client Component, dan Root Layout
1. **Dataset Lokal (`data/buku.js`)**:
   Menyimpan 6 koleksi buku dengan atribut: `id`, `judul`, `penulis`, `kategori`, `tahun`, `status`, `ikon`, `ringkasan`, dan `lokasiRak`.
2. **Komponen Navigasi (`components/Navbar.jsx`)**:
   Diberi direktif `'use client'` dan memanfaatkan `usePathname()` untuk mengecek apakah rute saat ini cocok dengan `item.href`. Rute aktif diberi gaya `bg-slate-900 text-white`.
3. **Root Layout (`app/layout.js`)**:
   Menyediakan kerangka bersama dengan `Geist font`, komponen `<Navbar />`, kontainer `<main>`, serta `<footer>` hak cipta laboratorium.

### 3.4 Langkah 4: Halaman Beranda, Tentang, Nested Layout, dan Katalog Buku
1. **Halaman Beranda (`app/page.js`)**: Menampilkan hero section perpustakaan dan 3 rekomendasi buku pilihan (`daftarBuku.slice(0, 3)`).
2. **Halaman Tentang (`app/tentang/page.js`)**: Menampilkan jam layanan perpustakaan dan alamat ruang baca di Setiabudi Bandung.
3. **Nested Layout (`app/buku/layout.js`)**: Menampilkan banner informasi peraturan peminjaman buku (maksimal 3 buku selama 7 hari) yang tampil konsisten pada sub-rute `/buku` dan `/buku/[id]`.
4. **Halaman Katalog (`app/buku/page.js`)**: Menyajikan daftar koleksi buku secara grid responsif.

### 3.5 Langkah 5: Tombol Simpan, Dynamic Route `[id]`, dan Halaman 404
1. **Tombol Simpan (`components/TombolSimpan.jsx`)**:
   Client component yang mengelola status `tersimpan` dan angka `jumlahPeminat` menggunakan hook `useState`.
2. **Dynamic Route (`app/buku/[id]/page.js`)**:
   Membaca parameter rute menggunakan `const { id } = await params;` sesuai konvensi Next.js 16. Memanggil `notFound()` jika ID buku tidak ditemukan dalam dataset.
3. **Custom 404 (`app/not-found.js`)**:
   Menyajikan antarmuka bersahabat dengan badge "404", pesan kesalahan yang jelas, dan tombol navigasi kembali ke katalog buku.

---

## 4. IMPLEMENTASI BAGIAN D: LATIHAN (IN-LAB)

### 4.1 Latihan 1: Halaman Kontak Pustakawan & Pengujian 404
- **Berkas**: `app/kontak/page.js`
- **Fitur**:
  - Menampilkan jadwal layanan pustakawan bertugas (Senin s.d. Sabtu).
  - Menyajikan informasi kartu nama pustakawan (Ibu Siti Nurhaliza, S.I.Pust.), email resmi `perpustakaan.if@unpas.ac.id`, kontak WhatsApp, dan meja layanan.
  - Tautan kontak dipasang pada `components/Navbar.jsx` menggunakan komponen `<Link href="/kontak">`.
  - Dilengkapi tombol uji halaman 404 yang mengarah ke `/buku/tidak-ada`.
- **Hasil Pengujian**:
  Membuka `/buku/tidak-ada` berhasil mengaktifkan penanganan `notFound()`, merender halaman 404 kustom secara sempurna.

### 4.2 Latihan 2: Komponen Filter Kategori Buku (`FilterBuku.jsx`)
- **Berkas**: `components/FilterBuku.jsx`
- **Fitur**:
  - Diberi direktif `'use client'` dan hook `useState('Semua')`.
  - Menyediakan 6 tombol pilihan kategori: `Semua`, `Pemrograman`, `Web`, `UI/UX`, `Sistem`, dan `Umum`.
  - Tombol kategori yang sedang aktif disorot dengan warna `bg-slate-900 text-white`.
  - Menampilkan ringkasan jumlah buku yang cocok secara real-time.
  - Terintegrasi langsung pada `app/buku/page.js` sehingga daftar buku langsung tersaring tanpa memuat ulang halaman.

---

## 5. IMPLEMENTASI BAGIAN D: TUGAS TERSTRUKTUR

### 5.1 Judul Proyek: UKM UNPAS Hub
Proyek mandiri Next.js 16 dibangun pada direktori terpisah: `tugas-terstruktur-modul3/`.

### 5.2 Pemenuhan Syarat Penilaian Rubrik Sangat Baik

| Syarat Kategori | Realisasi Teknis | Berkas Sumber |
| :--- | :--- | :--- |
| **Root Layout** | Kerangka dasar HTML, body antialiased, navbar responsif, dan footer kemahasiswaan UNPAS. | `app/layout.js` |
| **Active Link** | Navigasi dengan deteksi `usePathname()` dan styling aktif warna `bg-indigo-600 text-white`. | `components/Navbar.jsx` |
| **Minimal 3 Halaman Statis** | 1. Beranda (`/`)<br/>2. Tentang Kemahasiswaan (`/tentang`)<br/>3. Panduan Pendaftaran (`/panduan`)<br/>4. Kontak Biro Kemahasiswaan (`/kontak`) | `app/page.js`<br/>`app/tentang/page.js`<br/>`app/panduan/page.js`<br/>`app/kontak/page.js` |
| **1 Nested Layout** | Banner resmi Open Recruitment terpadu 2026/2027 yang membungkus seluruh rute `/ukm/*`. | `app/ukm/layout.js` |
| **1 Dynamic Route** | Rute `/ukm/[id]` dengan pembacaan asynchronous `await params`, `generateStaticParams()`, dan `notFound()`. | `app/ukm/[id]/page.js` |
| **Custom 404** | Halaman ramah `app/not-found.js` jika ID UKM tidak valid. | `app/not-found.js` |
| **Client Component** | 1. `FilterUKM.jsx`: Filter kategori & pencarian kata kunci live dengan `useState`.<br/>2. `TombolMinatUKM.jsx`: Bookmark minat dan counter interaktif dengan `useState`. | `components/FilterUKM.jsx`<br/>`components/TombolMinatUKM.jsx` |

### 5.3 Entitas Data UKM UNPAS (`data/ukm.js`)
1. **MAPAK ALAM UNPAS** (`mapak-alam`): Bidang Pecinta Alam & Konservasi.
2. **LSS UNPAS** (`lingkung-seni-sunda`): Bidang Seni Budaya Sunda & Karawitan.
3. **KSR PMI Unit UNPAS** (`ksr-pmi`): Bidang Sosial Kemanusiaan & Medis Kampus.
4. **UNPAS FC** (`unpas-fc`): Bidang Olahraga Sepak Bola & Futsal.
5. **Taekwondo UNPAS** (`taekwondo`): Bidang Beladiri & Prestasi Olahraga.
6. **Robotic & AI Club UNPAS** (`robotika-unpas`): Bidang Teknologi, Robot Otonom & AI.

---

## 6. HASIL PENGUJIAN & VERIFIKASI APLIKASI

### 6.1 Verifikasi Build Produksi Turbopack
Kedua proyek berhasil dikompilasi ke versi produksi dengan status bersih (`0 errors, 0 warnings`):

#### Hasil Build Proyek `praktikum-web-modul3`:
```text
Route (app)
┌ ○ /
├ ○ /_not-found
├ ○ /buku
├   /buku/[id]
│ ├ ◐ /buku/[id]
│ ├ ○ /buku/clean-code
│ ├ ○ /buku/pragmatic-programmer
│ └ ◐ [+4 more paths]
├ ○ /kontak
└ ○ /tentang

○ (Static)            prerendered as static content
◐ (Partial Prerender) prerendered as static HTML with dynamic server-streamed content
```

#### Hasil Build Proyek `tugas-terstruktur-modul3`:
```text
Route (app)
┌ ○ /
├ ○ /_not-found
├ ○ /kontak
├ ○ /panduan
├ ○ /tentang
├ ○ /ukm
└   /ukm/[id]
  ├ ● /ukm/mapak-alam
  ├ ● /ukm/lingkung-seni-sunda
  ├ ● /ukm/ksr-pmi
  └ ● [+3 more paths]

○ (Static)  prerendered as static content
● (SSG)     prerendered as static HTML (uses generateStaticParams)
```

### 6.2 Verifikasi Endpoint HTTP
| Alamat URL | Proyek | Kode Status | Keterangan Tampilan |
| :--- | :--- | :-: | :--- |
| `http://localhost:3000/` | BacaKampus | `200 OK` | Halaman beranda dengan hero & 3 rekomendasi buku |
| `http://localhost:3000/buku` | BacaKampus | `200 OK` | Katalog buku + filter interaktif (Latihan 2) |
| `http://localhost:3000/buku/clean-code` | BacaKampus | `200 OK` | Detail buku, lokasi rak, tombol simpan client component |
| `http://localhost:3000/kontak` | BacaKampus | `200 OK` | Halaman kontak pustakawan & jadwal layanan (Latihan 1) |
| `http://localhost:3000/tentang` | BacaKampus | `200 OK` | Halaman informasi ruang baca |
| `http://localhost:3000/buku/tidak-ada` | BacaKampus | `404 Not Found` | Halaman kustom 404 `not-found.js` terpicu otomatis |
| `http://localhost:3001/` | UKM Hub | `200 OK` | Beranda portal direktori UKM UNPAS |
| `http://localhost:3001/ukm` | UKM Hub | `200 OK` | Direktori UKM + nested banner + search & filter |
| `http://localhost:3001/ukm/robotika-unpas` | UKM Hub | `200 OK` | Detail UKM Robotika, jadwal, prestasi, tombol minat |
| `http://localhost:3001/panduan` | UKM Hub | `200 OK` | Panduan 4 tahap pendaftaran anggota baru |
| `http://localhost:3001/ukm/tidak-ada` | UKM Hub | `404 Not Found` | Halaman kustom 404 kemahasiswaan UNPAS |

---

## 7. KESIMPULAN

Berdasarkan seluruh tahapan praktikum yang telah dilaksanakan, dapat disimpulkan bahwa:
1. **Next.js 16 App Router** menyederhanakan arsitektur pengembangan web fullstack dengan menghilangkan kebutuhan konfigurasi manual routing berbasis pustaka eksternal.
2. Konsep **Server Component** secara *default* mengurangi beban JavaScript di sisi klien, sementara direktif `'use client'` memungkinkan reaktivitas antarmuka lokal secara terisolasi.
3. Penerapan **Nested Layout** terbukti sangat efektif dalam mempertahankan konteks antarmuka pada sub-bagian aplikasi tanpa merender ulang tata letak utama.
4. Penanganan rute dinamis pada Next.js 16 mewajibkan penanganan asynchronous pada objek `params` (`await params`), yang jika dipadukan dengan `generateStaticParams()` menghasilkan halaman statis berkecepatan tinggi dengan optimasi SEO prima.
5. Seluruh sasaran eksperimen, latihan lab (Latihan 1 dan 2), serta tugas terstruktur telah berhasil direalisasikan dengan standar mutu Sangat Baik (85 - 100).

---

<div align="center">
  <sub>Laporan Praktikum Pemrograman Web Modul 3 &bull; Billy Wicaksono (243040090) &bull; Teknik Informatika Universitas Pasundan</sub>
</div>
