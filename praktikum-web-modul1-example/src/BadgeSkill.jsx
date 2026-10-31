import React from "react";

// Komponen BadgeSkill menerima properti (props) 'namaSkill' dan 'level'
// Level: 'Pemula', 'Menengah', 'Mahir'
function BadgeSkill({ namaSkill, level }) {
  // Menentukan skema warna dinamis berdasarkan level keahlian
  const getBadgeStyle = (lvl) => {
    switch (lvl) {
      case "Mahir":
        return {
          backgroundColor: "#DCFCE7",
          color: "#15803D",
          borderColor: "#86EFAC",
        };
      case "Menengah":
        return {
          backgroundColor: "#FEF3C7",
          color: "#92400E",
          borderColor: "#FDE68A",
        };
      case "Pemula":
      default:
        return {
          backgroundColor: "#E2E8F0",
          color: "#334155",
          borderColor: "#CBD5E1",
        };
    }
  };

  const badgeStyle = getBadgeStyle(level);

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        padding: "4px 10px",
        borderRadius: "20px",
        fontSize: "12px",
        fontWeight: "600",
        backgroundColor: badgeStyle.backgroundColor,
        color: badgeStyle.color,
        border: `1px solid ${badgeStyle.borderColor}`,
        marginRight: "6px",
        marginBottom: "6px",
        boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
      }}
    >
      <span>{namaSkill}</span>
      <span
        style={{
          fontSize: "10px",
          fontWeight: "700",
          opacity: 0.85,
          padding: "1px 6px",
          borderRadius: "10px",
          backgroundColor: "rgba(0, 0, 0, 0.07)",
        }}
      >
        {level}
      </span>
    </span>
  );
}

export default BadgeSkill;

