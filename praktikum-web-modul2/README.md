# Modul 2: State Management & Komponen Interaktif (React JS & Vite)

Modul ini merupakan bagian dari mata kuliah **Praktikum Pemrograman Web 2026** di Program Studi Teknik Informatika, Universitas Pasundan (UNPAS).

## Identitas Praktikan
- **Nama:** Billy Wicaksono
- **NPM:** 243040090
- **Kelas:** C
- **Dosen Pengampu:** R. Sandhika Galih Amalga, ST., MT.

---

## 🎯 Capaian Pembelajaran & Fitur Modul 2

Modul 2 berfokus pada rekayasa antarmuka interaktif memanfaatkan **React Hooks** (`useState`, `useEffect`), penanganan form (*Controlled Components*), penyimpanan lokal (*LocalStorage*), serta arsitektur komponen terpadu:

### 1. Eksperimen Penghitung State (`Penghitung.jsx`)
- Demonstrasi reaktivitas state dengan tombol penambah (*increment*), pengurang (*decrement*), dan reset.
- Memahami konsep *immutability* dan siklus hidup re-render React saat state bermutasi.

### 2. Aplikasi Manajemen Daftar Tugas (`Daftar Tugas`)
- **Penambahan Tugas:** Form input terkontrol (*controlled input*) dengan validasi string kosong.
- **Toggle Status Selesai:** Mengubah status tugas secara dinamis dengan pencoretan teks (*strike-through*).
- **Penghapusan Tugas:** Menghapus tugas individual serta opsi pembersihan massal (*bulk delete*) untuk semua tugas yang telah selesai.
- **Sistem Filter Dinamis:** Memfilter tampilan tugas berdasarkan 3 kategori: *Semua*, *Belum Selesai (Aktif)*, dan *Selesai*.
- **Progress Bar Interaktif:** Kalkulasi persentase penyelesaian tugas secara real-time.
- **Efek Samping (`useEffect`):**
  - Sinkronisasi dinamis judul dokumen tab peramban (`document.title`) dengan jumlah sisa tugas belum selesai.
  - Persistensi data lokal otomatis ke `localStorage` (*browser-level storage*).

### 3. Modul Tambahan: Catatan Keuangan Mini (`CatatanKeuangan.jsx`)
- **Ringkasan Saldo Otomatis:** Perhitungan total pemasukan, total pengeluaran, serta saldo akhir.
- **Form Input Transaksi:** Pencatatan keterangan, nominal, dan pemilihan jenis transaksi (*pemasukan* / *pengeluaran*).
- **Daftar Riwayat Transaksi:** Penyajian riwayat transaksi terformat mata uang Rupiah (`Intl.NumberFormat`).
- **Persistensi Data:** Seluruh mutasi keuangan tersimpan secara otomatis pada `localStorage`.

### 4. Dukungan Multi-Page / Entry Points
Proyek ini dikonfigurasi dengan Vite multi-page build:
- `index.html` $\rightarrow$ Aplikasi Utama (Daftar Tugas & Catatan Keuangan terintegrasi via tab)
- `HelloWorld.html` $\rightarrow$ Demonstrasi dasar komponen Hello World
- `keuangan.html` $\rightarrow$ Akses langsung modul Catatan Keuangan mandiri

---

## 💻 Panduan Menjalankan Proyek Secara Lokal

1. **Masuk ke folder modul 2:**
   ```bash
   cd praktikum-web-modul2
   ```

2. **Pasang dependensi:**
   ```bash
   npm install
   ```

3. **Jalankan development server:**
   ```bash
   npm run dev
   ```

4. **Buka peramban pada alamat:**
   `http://localhost:5173/`

5. **Uji Build & Lint:**
   ```bash
   npm run build
   npm run lint
   ```
