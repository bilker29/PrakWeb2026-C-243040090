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
