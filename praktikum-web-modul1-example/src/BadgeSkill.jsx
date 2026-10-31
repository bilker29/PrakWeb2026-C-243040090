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
