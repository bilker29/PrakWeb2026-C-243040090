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
    { namaSkill: "HTML5 & Modern CSS", level: "Mahir" },
    { namaSkill: "JavaScript (ES6+)", level: "Mahir" },
    { namaSkill: "React.js & Vite", level: "Menengah" },
    { namaSkill: "Git & GitHub", level: "Mahir" },
    { namaSkill: "Tailwind CSS", level: "Mahir" },
    { namaSkill: "Next.js & Web3", level: "Menengah" },
    { namaSkill: "Docker & Microservices", level: "Menengah" },
    { namaSkill: "Web Components & REST API", level: "Mahir" },
    { namaSkill: "Node.js & Express", level: "Pemula" },
    { namaSkill: "PostgreSQL & Database", level: "Pemula" },
  ];

  // 3. Data daftar mata kuliah semester 2026 Ganjil sesuai KRS SITU2 UNPAS
  const daftarMataKuliah = [
    {
      id: 1,
      kode: "IF21P1506",
      nama: "Sistem Operasi Lanjut",
      kelas: "A",
      sks: 3,
      jadwal: "Rabu, 13:00 - 15:30",
      ruang: "SB405 - M",
    },
    {
      id: 2,
      kode: "IF21W0502",
      nama: "Internet of Things",
      kelas: "A",
      sks: 2,
      jadwal: "Kamis, 07:00 - 08:40",
      ruang: "SB305",
    },
    {
      id: 3,
      kode: "IF21W0503",
      nama: "Intelegensia Buatan",
      kelas: "C",
      sks: 3,
      jadwal: "Kamis, 09:40 - 12:10",
      ruang: "SB401",
    },
    {
      id: 4,
      kode: "IF21W0504",
      nama: "Verifikasi dan Validasi Perangkat Lunak",
      kelas: "A",
      sks: 2,
      jadwal: "Senin, 16:30 - 18:15",
      ruang: "SB407",
    },
    {
      id: 5,
      kode: "IF21W0505",
      nama: "Perancangan Sistem",
      kelas: "C",
      sks: 3,
      jadwal: "Rabu, 07:00 - 09:30",
      ruang: "SB405 - M",
    },
    {
      id: 6,
      kode: "IF21W0506",
      nama: "Praktikum Web",
      kelas: "C",
      sks: 2,
      jadwal: "Selasa, 14:50 - 16:30",
      ruang: "SB602",
    },
    {
      id: 7,
      kode: "IF21W0507",
      nama: "Praktikum Sistem Berorientasi Objek",
      kelas: "C",
      sks: 1,
      jadwal: "Selasa, 13:00 - 14:40",
      ruang: "SB603",
    },
    {
      id: 8,
      kode: "IF21W0508",
      nama: "Praktikum Pemrograman II",
      kelas: "C",
      sks: 2,
      jadwal: "Senin, 13:00 - 14:40",
      ruang: "SB601",
    },
    {
      id: 9,
      kode: "IF21W0701",
      nama: "Bahasa Inggris",
      kelas: "C",
      sks: 2,
      jadwal: "Rabu, 16:30 - 18:05",
      ruang: "SB109",
    },
    {
      id: 10,
      kode: "IF21W0702",
      nama: "Technopreneurship",
      kelas: "A",
      sks: 2,
      jadwal: "Rabu, 10:40 - 12:20",
      ruang: "SB410",
    },
  ];

  // Menghitung total SKS secara dinamis
  const totalSKS = daftarMataKuliah.reduce((total, matkul) => total + matkul.sks, 0);

  // 4. Data portofolio nyata dari repositori GitHub @bilker29 untuk Tugas Terstruktur 3
  const daftarProyek = [
    {
      id: 1,
      judul: "Pustaka Informasi Petani (PUSTANI)",
      deskripsi:
        "Platform sistem informasi dan layanan literasi terpadu untuk petani dengan arsitektur microservices, containerization Docker, serta automated pipeline CI/CD GitHub Actions.",
      teknologi: ["Docker", "Microservices", "CI/CD", "Infra", "Fullstack"],
      linkGithub: "https://github.com/bilker29/Pustaka-Informasi-Petani-PUSTANI-",
    },
    {
      id: 2,
      judul: "Personal Portfolio Website V5",
      deskripsi:
        "Website portofolio interaktif modern yang responsif dengan arsitektur berbasis React dan Tailwind CSS, menampilkan showcase keahlian teknis dan galeri aktivitas bertema polaroid card.",
      teknologi: ["React", "TailwindCSS", "Vite", "PostCSS", "Vercel"],
      linkGithub: "https://github.com/bilker29/Portofolio_V5",
    },
    {
      id: 3,
      judul: "Veridex AI (Credential & RWA Verification)",
      deskripsi:
        "Platform verifikasi kredensial berbasis AI dan smart contracts Web3 terdesentralisasi untuk tokenisasi sertifikat tanah RWA (Real World Asset) dan validasi keaslian dokumen digital.",
      teknologi: ["Next.js", "Web3", "Smart Contracts", "AI", "TailwindCSS"],
      linkGithub: "https://github.com/bilker29/Veridex-AI",
    },
    {
      id: 4,
      judul: "Notes App (Web Components & REST API)",
      deskripsi:
        "Aplikasi catatan digital modern berbasis Single Page Application (SPA) yang dibangun menggunakan Webpack bundler, Custom Web Components terisolasi, dan integrasi RESTful API.",
      teknologi: ["Web Components", "Webpack", "REST API", "JavaScript ES6+", "SPA"],
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
        maxWidth: "920px",
        margin: "40px auto",
        padding: "0 24px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Header Halaman */}
      <header style={{ textAlign: "center", marginBottom: "36px" }}>
        <h1 style={{ color: "#1B365D", margin: "0 0 8px 0" }}>
          Praktikum Pemrograman Web
        </h1>
        <p style={{ color: "#666", fontSize: "15px" }}>
          Laboratorium Informatika - Modul 1: Pengenalan React JS & Vite
        </p>
      </header>

      {/* Bagian 1: Profil Mahasiswa Praktikan + Latihan Mandiri 1 (BadgeSkill) */}
      <section style={{ marginBottom: "36px" }}>
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

      {/* Bagian 2: Daftar Rencana Kuliah Semester + Latihan 2 (ItemMatkul) */}
      <section style={{ marginBottom: "36px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "2px solid #E1E4E8",
            paddingBottom: "8px",
            marginBottom: "16px",
          }}
        >
          <h2 style={{ color: "#2C3E50", margin: 0 }}>
            Daftar Mata Kuliah Semester Ini (KRS 2026 Ganjil)
          </h2>
          <span
            style={{
              backgroundColor: "#1B365D",
              color: "#FFFFFF",
              fontSize: "12px",
              fontWeight: "bold",
              padding: "4px 10px",
              borderRadius: "14px",
            }}
          >
            Total: {totalSKS} SKS ({daftarMataKuliah.length} Matkul)
          </span>
        </div>
        <div style={{ display: "grid", gap: "12px" }}>
          {daftarMataKuliah.map((matkul) => (
            <ItemMatkul key={matkul.id} {...matkul} />
          ))}
        </div>
      </section>

      {/* Bagian 3: Showcase Portofolio Mini + Tugas Terstruktur 3 (KartuProyek) */}
      <section style={{ marginBottom: "40px" }}>
        <h2
          style={{
            color: "#2C3E50",
            borderBottom: "2px solid #E1E4E8",
            paddingBottom: "8px",
          }}
        >
          Showcase Portofolio Mini
        </h2>
        <p
          style={{
            color: "#666",
            fontSize: "14px",
            marginTop: "-4px",
            marginBottom: "20px",
          }}
        >
          Koleksi proyek perangkat lunak dari repositori GitHub resmi praktikan (<strong>@bilker29</strong>).
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))",
            gap: "20px",
          }}
        >
          {daftarProyek.map((proyek) => (
            <KartuProyek key={proyek.id} {...proyek} />
          ))}
        </div>
      </section>

      {/* Tombol Interaktivitas Event */}
      <div
        style={{
          textAlign: "center",
          marginTop: "30px",
          marginBottom: "50px",
        }}
      >
        <button
          onClick={notifikasiSapaan}
          style={{
            backgroundColor: "#1B365D",
            color: "#FFFFFF",
            padding: "12px 28px",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "14px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.15)",
            transition: "background-color 0.2s",
          }}
        >
          Uji Interaktivitas Event (Klik Disini)
        </button>
      </div>
    </div>
  );
}

export default App;
