import React from "react";
import KartuProfil from "./KartuProfil";
import ItemMatkul from "./ItemMatkul";
import KartuProyek from "./KartuProyek";

function App() {
  // 1. Data profil mahasiswa praktikan
  const profilMahasiswa = {
    nama: "Billy Wicaksono",
    npm: "243040090",
    kelas: "IF - C",
    status: "Aktif",
    fotoUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80",
  };

  // 2. Data daftar keahlian untuk Latihan Mandiri 1 (BadgeSkill)
  const daftarSkill = [
    { namaSkill: "HTML5 & Modern CSS", level: "Mahir" },
    { namaSkill: "JavaScript (ES6+)", level: "Menengah" },
    { namaSkill: "React.js & Vite", level: "Menengah" },
    { namaSkill: "Git & Version Control", level: "Mahir" },
    { namaSkill: "Node.js & Express", level: "Pemula" },
    { namaSkill: "PostgreSQL / Database", level: "Pemula" },
  ];

  // 3. Data daftar mata kuliah praktikum untuk Latihan 2 (ItemMatkul)
  const daftarPraktikum = [
    {
      id: 101,
      kode: "IF211",
      nama: "Pemrograman Web (React & Laravel)",
      sks: 3,
      hari: "Senin",
    },
    {
      id: 102,
      kode: "IF212",
      nama: "Sistem Basis Data (PostgreSQL)",
      sks: 3,
      hari: "Rabu",
    },
    {
      id: 103,
      kode: "IF213",
      nama: "Rekayasa Perangkat Lunak Terapan",
      sks: 3,
      hari: "Kamis",
    },
    {
      id: 104,
      kode: "IF214",
      nama: "Arsitektur Sistem Terdistribusi",
      sks: 2,
      hari: "Jumat",
    },
  ];

  // 4. Data daftar portofolio untuk Tugas Terstruktur 3 (Showcase Portofolio Mini)
  const daftarProyek = [
    {
      id: 1,
      judul: "Sistem Informasi Perpustakaan Digital",
      deskripsi:
        "Aplikasi web responsif untuk pengelolaan katalog buku, pencatatan transaksi peminjaman, serta kalkulasi denda keterlambatan secara otomatis.",
      teknologi: ["React", "Node.js", "Express", "PostgreSQL"],
      linkGithub: "https://github.com/bilker29/library-management-system",
    },
    {
      id: 2,
      judul: "E-Kantin UNPAS (Pemesanan Makanan)",
      deskripsi:
        "Platform pemesanan hidangan kantin kampus secara mandiri dengan fitur keranjang belanja real-time dan konfirmasi status pembayaran.",
      teknologi: ["React", "Vite", "Tailwind CSS", "Firebase"],
      linkGithub: "https://github.com/bilker29/e-kantin-unpas",
    },
    {
      id: 3,
      judul: "Dashboard Monitoring Kualitas Udara IoT",
      deskripsi:
        "Antarmuka pemantauan data sensor lingkungan hidup secara real-time yang menyajikan grafik time-series dan indikator indeks standar pencemar udara.",
      teknologi: ["React", "Chart.js", "MQTT", "REST API"],
      linkGithub: "https://github.com/bilker29/iot-air-quality-monitor",
    },
    {
      id: 4,
      judul: "Taskflow - Manajemen Produktivitas Mahasiswa",
      deskripsi:
        "Aplikasi pelacak progres tugas kuliah berbasis papan Kanban interaktif dengan klasifikasi prioritas dan penyimpanan lokal pada browser.",
      teknologi: ["React", "JavaScript ES6+", "CSS Grid", "LocalStorage"],
      linkGithub: "https://github.com/bilker29/taskflow-kanban",
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
        maxWidth: "900px",
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

      {/* Bagian 2: Daftar Rencana Praktikum Semester + Latihan 2 (ItemMatkul) */}
      <section style={{ marginBottom: "36px" }}>
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
          {daftarPraktikum.map((matkul) => (
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
        <p style={{ color: "#666", fontSize: "14px", marginTop: "-4px", marginBottom: "20px" }}>
          Koleksi proyek perangkat lunak mandiri yang dikembangkan dengan teknologi modern.
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
      <div style={{ textAlign: "center", marginTop: "30px", marginBottom: "50px" }}>
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
