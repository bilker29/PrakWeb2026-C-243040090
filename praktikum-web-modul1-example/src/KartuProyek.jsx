import React from "react";

// Komponen mandiri untuk menampilkan kartu portofolio proyek
function KartuProyek({ judul, deskripsi, teknologi = [], linkGithub }) {
  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        border: "1px solid #E1E4E8",
        borderRadius: "8px",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
      }}
    >
      <div>
        <h3
          style={{
            margin: "0 0 10px 0",
            color: "#1B365D",
            fontSize: "18px",
          }}
        >
          {judul}
        </h3>
        <p
          style={{
            color: "#555",
            fontSize: "14px",
            lineHeight: "1.6",
            marginBottom: "16px",
          }}
        >
          {deskripsi}
        </p>
      </div>

      <div>
        {/* Tagar Teknologi */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "6px",
            marginBottom: "16px",
          }}
        >
          {teknologi.map((tech, index) => (
            <span
              key={index}
              style={{
                backgroundColor: "#EEF2F6",
                color: "#1E40AF",
                fontSize: "11px",
                fontWeight: "600",
                padding: "3px 8px",
                borderRadius: "4px",
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
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            backgroundColor: "#24292F",
            color: "#FFFFFF",
            textDecoration: "none",
            padding: "8px 14px",
            borderRadius: "6px",
            fontSize: "13px",
            fontWeight: "600",
            boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
          }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="currentColor"
            style={{ flexShrink: 0 }}
          >
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
          Lihat Repositori GitHub
        </a>
      </div>
    </div>
  );
}

export default KartuProyek;
