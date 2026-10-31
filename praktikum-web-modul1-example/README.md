# Modul 1: Fondasi Pengembangan Frontend (React JS & Vite)

Modul ini merupakan bagian dari mata kuliah **Praktikum Pemrograman Web 2026** di Program Studi Teknik Informatika, Universitas Pasundan.

## Identitas Praktikan
- **Nama:** Billy Wicaksono
- **NPM:** 243040090
- **Kelas:** C
- **Dosen Pengampu:** R. Sandhika Galih Amalga, ST., MT.

---

## Implementasi Tugas & Evaluasi Kemampuan

1. **Latihan Mandiri (In-Lab Task): [`src/BadgeSkill.jsx`](./src/BadgeSkill.jsx)**
   - Menerima `props`: `namaSkill` dan `level` (`Pemula`, `Menengah`, `Mahir`).
   - Warna badge dinamis:
     - `Mahir`: `#DCFCE7` (teks: `#15803D`)
     - `Menengah`: `#FEF3C7` (teks: `#92400E`)
     - `Pemula`: `#E2E8F0` (teks: `#334155`)
   - Ditampilkan di bawah profil pada [`src/KartuProfil.jsx`](./src/KartuProfil.jsx).

2. **Pemisahan Modul Komponen: [`src/ItemMatkul.jsx`](./src/ItemMatkul.jsx)**
   - Memisahkan logika tampilan mata kuliah dari [`src/App.jsx`](./src/App.jsx).
   - Mendukung props: `kode`, `nama`, `sks`, `jadwal`, `kelas`, dan `ruang`.
   - Menggunakan perulangan deklaratif `.map()` dengan *key* unik dan *spread props* `<ItemMatkul key={...} {...props} />`.

3. **Tugas Terstruktur (Laporan Mandiri): [`src/KartuProyek.jsx`](./src/KartuProyek.jsx)**
   - Menampilkan 4 kartu proyek nyata dari profil GitHub [@bilker29](https://github.com/bilker29):
     1. **PUSTANI** (Pustaka Informasi Petani)
     2. **Portofolio Website V5**
     3. **Veridex AI**
     4. **Notes App**
   - Tiap kartu memuat: **Judul Proyek**, **Ringkasan Deskripsi**, **Tagar Teknologi**, dan **Tombol Tautan Repositori GitHub**.

---

## Menjalankan Proyek Secara Lokal

```bash
# 1. Pasang dependensi
npm install

# 2. Jalankan dev server
npm run dev

# 3. Uji build produksi
npm run build

# 4. Uji linter
npm run lint
```
Buka `http://localhost:5173/` di peramban.
