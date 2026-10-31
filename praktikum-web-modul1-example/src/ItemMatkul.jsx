import React from "react";

// Komponen mandiri untuk merepresentasikan kartu item mata kuliah praktikum / semester
function ItemMatkul({ kode, nama, sks, hari, jadwal, kelas, ruang }) {
  const waktuTampil = jadwal || (hari ? `Jadwal Sesi: ${hari}` : "-");

  return (
    <div
      style={{
        padding: "14px 18px",
        backgroundColor: "#F8F9FA",
        borderLeft: "5px solid #1B365D",
        borderRadius: "6px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
        gap: "12px",
      }}
    >
      <div style={{ flex: 1 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              fontWeight: "bold",
              color: "#1B365D",
              fontSize: "15px",
            }}
          >
            {kode}
          </span>
          <span style={{ color: "#888" }}>•</span>
          <span
            style={{
              fontWeight: "600",
              color: "#2C3E50",
              fontSize: "15px",
            }}
          >
            {nama}
          </span>
          {kelas && (
            <span
              style={{
                fontSize: "11px",
                fontWeight: "bold",
                backgroundColor: "#E2E8F0",
                color: "#334155",
                padding: "2px 8px",
                borderRadius: "10px",
              }}
            >
              Kelas {kelas}
            </span>
          )}
        </div>
        <div
          style={{
            fontSize: "13px",
            color: "#64748B",
            marginTop: "6px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
            flexWrap: "wrap",
          }}
        >
          <span>🕒 {waktuTampil}</span>
          {ruang && <span>📍 Ruang: {ruang}</span>}
        </div>
      </div>
      <span
        style={{
          backgroundColor: "#E1E4E8",
          padding: "5px 12px",
          borderRadius: "12px",
          fontSize: "13px",
          fontWeight: "700",
          color: "#1B365D",
          whiteSpace: "nowrap",
        }}
      >
        {sks} SKS
      </span>
    </div>
  );
}

export default ItemMatkul;
