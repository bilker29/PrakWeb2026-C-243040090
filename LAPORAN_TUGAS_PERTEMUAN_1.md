# LAPORAN PRAKTIKUM PEMROGRAMAN WEB
**Dosen Pengampu: R. Sandhika Galih Amalga, ST., MT.**

---

### TUGAS - PERTEMUAN 1
**Mata Kuliah: IF21W0506 / IF21W0508 – Praktikum Web**

| Data Mahasiswa | Keterangan |
| :--- | :--- |
| **NPM** | **243040090** |
| **Nama** | **Billy Wicaksono** |
| **Kelas** | **C** |
| **Link Github Repository** | [https://github.com/bilker29/PrakWeb2026-C-243040090](https://github.com/bilker29/PrakWeb2026-C-243040090) |

---

## Bagian 1. Screenshot Semua Kode

> **Petunjuk Praktikan:** Buka VS Code, tampilkan masing-masing berkas kode di bawah ini, lalu ambil tangkapan layar (*screenshot*) dan tempelkan pada dokumen laporan Anda.

### 1.1. Berkas: `src/main.jsx` (Titik Masuk / Entry Point Aplikasi)
```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

### 1.2. Berkas: `src/App.jsx` (Komponen Induk / Root Component)
```jsx
import React from "react";
import KartuProfil from "./KartuProfil";
import ItemMatkul from "./ItemMatkul";
import KartuProyek from "./KartuProyek";
import fotoProfil from "./assets/pass-foto.jpeg";

function App() {
  // 1. Data profil mahasiswa praktikan
  const profilMahasiswa = {
    nama: "Billy Wicaksono",
    npm: "243040090",
    kelas: "IF - C",
    status: "Aktif",
    fotoUrl: fotoProfil,
  };

  // 2. Data daftar keahlian untuk Latihan Mandiri 1 (BadgeSkill)
  const daftarSkill = [
    { namaSkill: "HTML & CSS", level: "Mahir" },
    { namaSkill: "JavaScript ES6+", level: "Mahir" },
    { namaSkill: "React JS", level: "Menengah" },
    { namaSkill: "Git & GitHub", level: "Mahir" },
    { namaSkill: "Tailwind CSS", level: "Menengah" },
    { namaSkill: "Node.js", level: "Pemula" },
  ];

  // 3. Data daftar mata kuliah semester ini sesuai KRS SITU2 UNPAS
  const daftarMataKuliah = [
    {
      id: 1,
      kode: "IF21P1506",
      nama: "Sistem Operasi Lanjut",
      sks: 3,
      jadwal: "Rabu, 13:00 s.d 15:30",
      ruang: "SB405 - M",
    },
    {
      id: 2,
      kode: "IF21W0502",
      nama: "Internet of Things",
      sks: 2,
      jadwal: "Kamis, 07:00 s.d 08:40",
      ruang: "SB305",
    },
    {
      id: 3,
      kode: "IF21W0503",
      nama: "Intelegensia Buatan",
      sks: 3,
      jadwal: "Kamis, 09:40 s.d 12:10",
      ruang: "SB401",
    },
    {
      id: 4,
      kode: "IF21W0504",
      nama: "Verifikasi dan Validasi Perangkat Lunak",
      sks: 2,
      jadwal: "Senin, 16:30 s.d 18:15",
      ruang: "SB407",
    },
    {
      id: 5,
      kode: "IF21W0505",
      nama: "Perancangan Sistem",
      sks: 3,
      jadwal: "Rabu, 07:00 s.d 09:30",
      ruang: "SB405 - M",
    },
    {
      id: 6,
      kode: "IF21W0506",
      nama: "Praktikum Web",
      sks: 2,
      jadwal: "Selasa, 14:50 s.d 16:30",
      ruang: "SB602",
    },
    {
      id: 7,
      kode: "IF21W0507",
      nama: "Praktikum Sistem Berorientasi Objek",
      sks: 1,
      jadwal: "Selasa, 13:00 s.d 14:40",
      ruang: "SB603",
    },
    {
      id: 8,
      kode: "IF21W0508",
      nama: "Praktikum Pemrograman II",
      sks: 2,
      jadwal: "Senin, 13:00 s.d 14:40",
      ruang: "SB601",
    },
    {
      id: 9,
      kode: "IF21W0701",
      nama: "Bahasa Inggris",
      sks: 2,
      jadwal: "Rabu, 16:30 s.d 18:05",
      ruang: "SB109",
    },
    {
      id: 10,
      kode: "IF21W0702",
      nama: "Technopreneurship",
      sks: 2,
      jadwal: "Rabu, 10:40 s.d 12:20",
      ruang: "SB410",
    },
  ];

  // 4. Data portofolio proyek untuk Tugas Terstruktur 3
  const daftarProyek = [
    {
      id: 1,
      judul: "Pustaka Informasi Petani (PUSTANI)",
      deskripsi:
        "Sistem informasi pertanian untuk membantu petani mengakses informasi tanaman dan artikel, dilengkapi arsitektur microservices dan Docker.",
      teknologi: ["Docker", "Microservices", "CI/CD", "Fullstack"],
      linkGithub: "https://github.com/bilker29/Pustaka-Informasi-Petani-PUSTANI-",
    },
    {
      id: 2,
      judul: "Website Portofolio V5",
      deskripsi:
        "Website portofolio pribadi berbasis React dan Tailwind CSS untuk menampilkan biodata, daftar keahlian, dan riwayat kegiatan.",
      teknologi: ["React", "TailwindCSS", "Vite", "JavaScript"],
      linkGithub: "https://github.com/bilker29/Portofolio_V5",
    },
    {
      id: 3,
      judul: "Veridex AI",
      deskripsi:
        "Platform validasi kredensial dan verifikasi dokumen digital menggunakan smart contracts dan antarmuka Next.js.",
      teknologi: ["Next.js", "Web3", "Smart Contracts", "TailwindCSS"],
      linkGithub: "https://github.com/bilker29/Veridex-AI",
    },
    {
      id: 4,
      judul: "Notes App",
      deskripsi:
        "Aplikasi pencatatan berbasis web dengan Web Components terstruktur, pengelolaan modul dengan Webpack, dan integrasi REST API.",
      teknologi: ["JavaScript", "Web Components", "Webpack", "REST API"],
      linkGithub: "https://github.com/bilker29/Notes-App",
    },
  ];

  // 5. Fungsi penanganan interaksi event tombol
  const notifikasiSapaan = () => {
    alert(
      "Selamat datang di Modul 1! Anda berhasil menguasai fondasi arsitektur React JS.",
    );
  };

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "40px auto",
        padding: "0 24px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <header style={{ textAlign: "center", marginBottom: "32px" }}>
        <h1 style={{ color: "#1B365D", margin: "0 0 8px 0" }}>
          Praktikum Pemrograman Web
        </h1>
        <p style={{ color: "#666", fontSize: "15px" }}>
          Laboratorium Informatika - Modul 1: Pengenalan React JS & Vite
        </p>
      </header>

      {/* Bagian 1: Profil Mahasiswa Praktikan */}
      <section style={{ marginBottom: "32px" }}>
        <h2
          style={{
            color: "#2C3E50",
            borderBottom: "2px solid #E1E4E8",
            paddingBottom: "8px",
          }}
        >
          Profil Mahasiswa Praktikan
        </h2>
        <KartuProfil
          nama={profilMahasiswa.nama}
          npm={profilMahasiswa.npm}
          kelas={profilMahasiswa.kelas}
          status={profilMahasiswa.status}
          fotoUrl={profilMahasiswa.fotoUrl}
          skills={daftarSkill}
        />
      </section>

      {/* Bagian 2: Daftar Rencana Praktikum Semester */}
      <section style={{ marginBottom: "32px" }}>
        <h2
          style={{
            color: "#2C3E50",
            borderBottom: "2px solid #E1E4E8",
            paddingBottom: "8px",
          }}
        >
          Daftar Rencana Praktikum Semester (List Rendering)
        </h2>
        <div style={{ display: "grid", gap: "12px" }}>
          {daftarMataKuliah.map((matkul) => (
            <ItemMatkul key={matkul.id} {...matkul} />
          ))}
        </div>
      </section>

      {/* Bagian 3: Showcase Portofolio Mini */}
      <section style={{ marginBottom: "32px" }}>
        <h2
          style={{
            color: "#2C3E50",
            borderBottom: "2px solid #E1E4E8",
            paddingBottom: "8px",
          }}
        >
          Showcase Portofolio Mini
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "16px",
            marginTop: "16px",
          }}
        >
          {daftarProyek.map((proyek) => (
            <KartuProyek key={proyek.id} {...proyek} />
          ))}
        </div>
      </section>

      {/* Tombol Uji Interaktivitas Event */}
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <button
          onClick={notifikasiSapaan}
          style={{
            backgroundColor: "#1B365D",
            color: "#FFFFFF",
            padding: "12px 24px",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "14px",
          }}
        >
          Uji Interaktivitas Event (Klik Disini)
        </button>
      </div>
    </div>
  );
}

export default App;
```

### 1.3. Berkas: `src/KartuProfil.jsx` (Komponen Profil Praktikan)
```jsx
import React from 'react';
import BadgeSkill from './BadgeSkill';

// Komponen Functional menerima properti (props) melalui parameter fungsi
function KartuProfil({ nama, npm, kelas, status, fotoUrl, skills = [] }) {
  return (
    <div
      style={{
        border: '1px solid #D0D7DE',
        borderRadius: '10px',
        padding: '20px',
        backgroundColor: '#FFFFFF',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        maxWidth: '450px',
        marginBottom: '20px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <img
          src={fotoUrl || 'https://via.placeholder.com/80'}
          alt={`Foto ${nama}`}
          style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            objectFit: 'cover',
          }}
        />
        <div>
          <h3 style={{ margin: '0 0 4px 0', color: '#1B365D' }}>{nama}</h3>
          <p style={{ margin: '2px 0', fontSize: '14px', color: '#555' }}>
            NPM: <strong>{npm}</strong>
          </p>
          <p style={{ margin: '2px 0', fontSize: '14px', color: '#555' }}>
            Kelas: {kelas}
          </p>
        </div>
      </div>

      <div
        style={{
          marginTop: '16px',
          borderTop: '1px solid #E1E4E8',
          paddingTop: '10px',
        }}
      >
        <span
          style={{
            padding: '4px 10px',
            borderRadius: '20px',
            fontSize: '12px',
            fontWeight: 'bold',
            backgroundColor: status === 'Aktif' ? '#D4EDDA' : '#FFF3CD',
            color: status === 'Aktif' ? '#155724' : '#856404',
          }}
        >
          Status Akademik: {status}
        </span>
      </div>

      {/* Latihan 1: Daftar Keahlian Mahasiswa */}
      {skills && skills.length > 0 && (
        <div
          style={{
            marginTop: '14px',
            borderTop: '1px solid #E1E4E8',
            paddingTop: '10px',
          }}
        >
          <p
            style={{
              margin: '0 0 8px 0',
              fontSize: '13px',
              fontWeight: 'bold',
              color: '#555',
            }}
          >
            Daftar Keahlian:
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {skills.map((skill, index) => (
              <BadgeSkill
                key={index}
                namaSkill={skill.namaSkill}
                level={skill.level}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default KartuProfil;
```

### 1.4. Berkas: `src/BadgeSkill.jsx` (Latihan Mandiri 1: Badge Keahlian Dinamis)
```jsx
import React from 'react';

// Komponen BadgeSkill menerima props namaSkill dan level
function BadgeSkill({ namaSkill, level }) {
  // Penentuan warna dinamis berdasarkan level keahlian (Mahir, Menengah, Pemula)
  const getWarna = (lvl) => {
    switch (lvl) {
      case 'Mahir':
        return {
          backgroundColor: '#D4EDDA',
          color: '#155724',
        };
      case 'Menengah':
        return {
          backgroundColor: '#CCE5FF',
          color: '#004085',
        };
      case 'Pemula':
      default:
        return {
          backgroundColor: '#FFF3CD',
          color: '#856404',
        };
    }
  };

  const styleWarna = getWarna(level);

  return (
    <span
      style={{
        display: 'inline-block',
        padding: '4px 10px',
        borderRadius: '20px',
        fontSize: '12px',
        fontWeight: 'bold',
        backgroundColor: styleWarna.backgroundColor,
        color: styleWarna.color,
      }}
    >
      {namaSkill} ({level})
    </span>
  );
}

export default BadgeSkill;
```

### 1.5. Berkas: `src/ItemMatkul.jsx` (Latihan Mandiri 2: Pemisahan Modul Mata Kuliah)
```jsx
import React from 'react';

// Komponen mandiri untuk merepresentasikan satu item mata kuliah praktikum
function ItemMatkul({ kode, nama, sks, hari, jadwal, ruang }) {
  const infoJadwal = jadwal || (hari ? `${hari}` : '-');

  return (
    <div
      style={{
        padding: '14px 18px',
        backgroundColor: '#F8F9FA',
        borderLeft: '5px solid #1B365D',
        borderRadius: '4px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <div>
        <span style={{ fontWeight: 'bold', color: '#1B365D' }}>{kode}</span>{' '}
        - {nama}
        <div
          style={{
            fontSize: '12px',
            color: '#777',
            marginTop: '4px',
          }}
        >
          Jadwal Sesi: {infoJadwal} {ruang ? `(${ruang})` : ''}
        </div>
      </div>
      <span
        style={{
          backgroundColor: '#E1E4E8',
          padding: '4px 10px',
          borderRadius: '12px',
          fontSize: '13px',
        }}
      >
        {sks} SKS
      </span>
    </div>
  );
}

export default ItemMatkul;
```

### 1.6. Berkas: `src/KartuProyek.jsx` (Tugas Terstruktur 3: Showcase Portofolio Mini)
```jsx
import React from 'react';

// Komponen mandiri untuk menampilkan satu kartu portofolio proyek
function KartuProyek({ judul, deskripsi, teknologi = [], linkGithub }) {
  return (
    <div
      style={{
        border: '1px solid #D0D7DE',
        borderRadius: '8px',
        padding: '18px',
        backgroundColor: '#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
      }}
    >
      <div>
        <h3
          style={{
            margin: '0 0 8px 0',
            color: '#1B365D',
            fontSize: '16px',
          }}
        >
          {judul}
        </h3>
        <p
          style={{
            margin: '0 0 14px 0',
            fontSize: '13px',
            color: '#555',
            lineHeight: '1.5',
          }}
        >
          {deskripsi}
        </p>
      </div>

      <div>
        {/* Tagar Teknologi */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '6px',
            marginBottom: '14px',
          }}
        >
          {teknologi.map((tech, index) => (
            <span
              key={index}
              style={{
                fontSize: '11px',
                color: '#1B365D',
                backgroundColor: '#EEF2F6',
                padding: '2px 8px',
                borderRadius: '4px',
                fontWeight: 'bold',
              }}
            >
              #{tech}
            </span>
          ))}
        </div>

        {/* Tombol Tautan Repositori GitHub */}
        <a
          href={linkGithub}
          target="_blank"
          rel="noreferrer"
          style={{
            display: 'inline-block',
            backgroundColor: '#1B365D',
            color: '#FFFFFF',
            padding: '8px 14px',
            borderRadius: '4px',
            fontSize: '12px',
            fontWeight: 'bold',
            textDecoration: 'none',
          }}
        >
          Lihat di GitHub
        </a>
      </div>
    </div>
  );
}

export default KartuProyek;
```

---

## Bagian 2. Penjelasan Kode

Implementasi kode pada praktikum ini dibangun dengan landasan arsitektur React modern berbasis fungsi (*Functional Components*), aturan deklaratif JSX, dan pola aliran data searah (*unidirectional data flow*). Berikut analisis teknis dan teoritis mendalam:

### 2.1. Arsitektur Komponen dan Modularitas (Single Responsibility Principle)
Aplikasi tidak menumpuk seluruh logika tampilan pada satu berkas `App.jsx`, melainkan menerapkan dekomposisi komponen ke dalam berkas-berkas mandiri:
1. **`main.jsx`**: Berfungsi sebagai jembatan (*entry point*) yang menghubungkan React dengan Real DOM dokumen HTML. Menggunakan API `createRoot` dari pustaka `react-dom/client` untuk merender komponen puncak `<App />` ke dalam kontainer `<div id="root">`. Pembungkus `<StrictMode>` diaktifkan guna mendeteksi potensi efek samping (*side effects*) serta penggunaan API lawas selama pengembangan.
2. **`App.jsx` (Root Component)**: Bertanggung jawab sebagai orkestrator data dan tata letak utama aplikasi. Seluruh himpunan data (`profilMahasiswa`, `daftarSkill`, `daftarMataKuliah`, `daftarProyek`) serta fungsi penanganan event (`notifikasiSapaan`) dipusatkan di sini sebelum dialirkan ke komponen anak (*child components*).
3. **`KartuProfil.jsx`**: Menangani penyajian identitas mahasiswa praktikan secara terisolasi. Komponen ini memiliki tanggung jawab tunggal (*Single Responsibility*) untuk menyusun kartu profil dan mendelegasikan daftar keahlian kepada komponen `BadgeSkill`.
4. **`BadgeSkill.jsx` (Tugas 1)**: Komponen khusus penyaji lencana (*badge*) keahlian yang secara cerdas menentukan skema warna visual berdasarkan properti tingkat kemahiran.
5. **`ItemMatkul.jsx` (Tugas 2)**: Komponen modular yang merepresentasikan satu baris entitas mata kuliah pada daftar rencana studi.
6. **`KartuProyek.jsx` (Tugas 3)**: Komponen mandiri untuk menampilkan item portofolio proyek lengkap dengan judul, deskripsi, tagar teknologi, dan tautan repositori GitHub.

### 2.2. Pengelolaan Komunikasi Komponen melalui Props & Destructuring
Komunikasi antar-komponen diatur secara ketat menggunakan *unidirectional data flow* dari komponen induk ke komponen anak:
- **Object Destructuring**: Pada deklarasi fungsi komponen (misalnya: `function KartuProfil({ nama, npm, kelas, status, fotoUrl, skills = [] })`), digunakan teknik *destructuring assignment* ES6+. Hal ini membuat kode lebih bersih (*clean code*) tanpa perlu menulis prefiks `props.` berulang kali.
- **Spread Operator**: Pada pemanggilan `<ItemMatkul key={matkul.id} {...matkul} />`, seluruh properti objek `matkul` (`kode`, `nama`, `sks`, `jadwal`, `ruang`) secara otomatis diekspansi menjadi atribut props individual yang diterima oleh `ItemMatkul`. Pendekatan ini sangat ringkas dan fleksibel.

### 2.3. Pemetaan Koleksi Data (List Rendering) dan Urgensi Atribut `key`
Pada render daftar mata kuliah, daftar skill, dan kartu proyek, digunakan fungsi perulangan deklaratif bawaan JavaScript `.map()`:
- **Signifikansi Atribut `key` Unik**: React memanfaatkan algoritma rekonsiliasi (*Diffing Algorithm*) berbasis heuristik $O(n)$ untuk membandingkan pohon *Virtual DOM* baru dengan sebelumnya. Atribut `key` (seperti `key={matkul.id}` atau `key={proyek.id}`) memberikan identitas permanen pada setiap simpul (*node*). Dengan adanya `key`, React dapat mengetahui secara presisi elemen mana yang ditambahkan, dihapus, atau diubah posisinya tanpa perlu merender ulang (*re-render*) seluruh daftar dari awal. Hal ini mencegah terjadinya *performance bottleneck* dan *warning* pada konsol peramban.

### 2.4. Penerapan Pewarnaan Dinamis (*Conditional Styling*)
Pada `BadgeSkill.jsx`, dibuat fungsi pembantu `getWarna(level)` dengan struktur percabangan `switch-case`:
- Jika `level === 'Mahir'`, diterapkan warna latar hijau `#D4EDDA` dan teks hijau tua `#15803D`.
- Jika `level === 'Menengah'`, diterapkan warna biru `#CCE5FF` dan teks biru tua `#004085`.
- Jika `level === 'Pemula'`, diterapkan warna kuning/amber `#FFF3CD` dan teks cokelat keemasan `#856404`.
Logika ini menghasilkan umpan balik visual (*visual feedback*) yang langsung mengomunikasikan hierarki kemahiran praktikan secara intuitif.

### 2.5. Kepatuhan Sintaksis JSX dan Arsitektur Virtual DOM
1. **Atribut JSX**: Penggunaan penamaan gaya inline style mengikuti konvensi `camelCase` (seperti `backgroundColor`, `fontSize`, `borderRadius`, `maxWidth`).
2. **Self-Closing Tags**: Semua tag tanpa anak (seperti `<img ... />` dan `<input ... />`) ditutup secara eksplisit menggunakan garis miring untuk memenuhi standar XHTML yang diwajibkan parser JSX.
3. **Event Handling**: Fungsi `notifikasiSapaan` dilewatkan sebagai referensi fungsi pada atribut `onClick={notifikasiSapaan}`, bukan pemanggilan langsung `onClick={notifikasiSapaan()}`, agar fungsi hanya dieksekusi saat tombol benar-benar diklik pengguna.
4. **Virtual DOM**: Saat tombol diklik atau data diperbarui, manipulasi tidak dilakukan langsung pada *Real DOM* peramban (yang mahal secara komputasi karena memicu *Reflow* dan *Repaint*), melainkan diproses pada representasi JavaScript di memori (*in-memory*) terlebih dahulu, lalu diterapkan secara efisien (*batch update*).

---

## Bagian 3. Screenshot Hasil Antarmuka

> **Petunjuk Praktikan:** Buka peramban Google Chrome Anda pada alamat `http://localhost:5173/`, lalu ambil tangkapan layar untuk 4 bagian berikut dan cantumkan gambarnya pada laporan Anda:

### 3.1. Screenshot 1: Header Halaman dan Profil Mahasiswa Praktikan
- **Tampilan yang ditangkap:**
  - Header utama bertuliskan *"Praktikum Pemrograman Web"* dan *"Laboratorium Informatika - Modul 1: Pengenalan React JS & Vite"*.
  - Komponen **Kartu Profil Mahasiswa** yang menampilkan foto resmi praktikan (**Billy Wicaksono**), NPM (`243040090`), Kelas (`IF - C`), badge *"Status Akademik: Aktif"*, serta daftar **Badge Keahlian** (*HTML & CSS, JavaScript ES6+, React JS, Git & GitHub, Tailwind CSS, Node.js*) dengan pewarnaan dinamis sesuai level.

### 3.2. Screenshot 2: Daftar Rencana Praktikum Semester (List Rendering)
- **Tampilan yang ditangkap:**
  - Bagian *"Daftar Rencana Praktikum Semester (List Rendering)"*.
  - 10 baris kartu mata kuliah dari semester 2026 Ganjil sesuai KRS SITU2 UNPAS (`IF21P1506 Sistem Operasi Lanjut`, `IF21W0502 IoT`, `IF21W0506 Praktikum Web`, dll.) yang terpecah rapi menggunakan komponen mandiri `ItemMatkul.jsx`.

### 3.3. Screenshot 3: Showcase Portofolio Mini
- **Tampilan yang ditangkap:**
  - Bagian *"Showcase Portofolio Mini"*.
  - 4 kartu proyek nyata dari GitHub (`PUSTANI`, `Website Portofolio V5`, `Veridex AI`, dan `Notes App`) dengan susunan *responsive grid*, tagar teknologi (`#Docker`, `#React`, `#Next.js`, dll.), dan tombol tautan *"Lihat di GitHub"*.

### 3.4. Screenshot 4: Pengujian Interaktivitas Event (Alert Pop-up)
- **Tampilan yang ditangkap:**
  - Jendela dialog *alert* peramban yang muncul setelah tombol *"Uji Interaktivitas Event (Klik Disini)"* diklik, bertuliskan:
    *"Selamat datang di Modul 1! Anda berhasil menguasai fondasi arsitektur React JS."*

---

## Bagian 4. Penjelasan Hasil Antarmuka

Hasil pengujian antarmuka aplikasi pada peramban web menunjukkan implementasi yang bersih, terstruktur, responsif, dan bebas dari galat kompilasi:

### 4.1. Kartu Profil Mahasiswa & Lencana Keahlian (Latihan 1)
- Pada bagian atas, kartu profil ditampilkan dengan kontainer putih, bayangan halus (*box-shadow*), dan sudut membulat (*border-radius* 10px) yang memberikan kedalaman visual (*visual depth*).
- Foto profil ditampilkan dalam bentuk lingkaran berdiameter 80px dengan pemotongan `object-fit: cover` sehingga proporsi wajah tetap presisi.
- Di bawah informasi akademik, daftar keahlian disajikan menggunakan komponen `BadgeSkill`. Pengguna dapat membedakan tingkat penguasaan materi secara langsung karena warna badge berubah dinamis: warna hijau untuk tingkat *Mahir* (misal: HTML & CSS, Git & GitHub), warna biru untuk *Menengah* (React JS, Tailwind CSS), dan warna kuning untuk *Pemula* (Node.js).

### 4.2. Daftar Rencana Kuliah Semester (Latihan 2)
- Bagian rencana praktikum menyajikan daftar 10 mata kuliah semester 2026 Ganjil secara vertikal dengan jarak antar-elemen (*gap*) 12px.
- Setiap baris memiliki aksen garis vertikal tebal berwarna biru navy (`#1B365D`) pada sisi kiri yang menjadi ciri khas desain modul.
- Informasi kode mata kuliah ditebalkan, disertai jadwal sesi perkuliahan dan ruangan kelas. Pada sisi kanan, bobot SKS dikemas dalam kapsul abu-abu berlatar `#E1E4E8` sehingga mudah dipindai oleh mata (*scannable*).
- Berkat pemisahan ke komponen `ItemMatkul`, jika terdapat perubahan struktur data atau tata letak satu item mata kuliah di masa mendatang, perbaikan cukup dilakukan pada satu berkas tersebut tanpa memengaruhi logika halaman induk.

### 4.3. Showcase Portofolio Mini (Tugas 3)
- Portofolio proyek disusun menggunakan teknik tata letak *CSS Grid* dengan formula `repeat(auto-fit, minmax(340px, 1fr))`. Tata letak ini bersifat adaptif; pada layar desktop lebar akan terbagi menjadi dua kolom sejajar yang seimbang, sementara pada layar ponsel pintar (*mobile*) akan bertransformasi otomatis menjadi satu kolom vertikal tanpa terjadi *horizontal overflow*.
- Tiap kartu portofolio memuat judul proyek, ringkasan fungsionalitas, deretan tagar teknologi bertema abu-kebiruan, serta tombol navigasi *"Lihat di GitHub"*. Tombol ini menggunakan atribut `target="_blank"` dan `rel="noreferrer"` agar halaman repositori dibuka pada tab baru demi menjaga keamanan peramban klien.

### 4.4. Respon Interaktivitas Event
- Tombol interaktivitas yang terletak di bagian bawah halaman memberikan umpan balik langsung saat diklik. Browser mengeksekusi *event listener* `onClick` dan memicu fungsi alert secara instan.
- Hal ini membuktikan keunggulan paradigma *Single Page Application* (SPA); seluruh penanganan interaksi terjadi di memori klien peramban tanpa memerlukan siklus muat ulang halaman penuh (*full page reload* / kedipan layar putih) seperti pada aplikasi web konvensional (MPA).
