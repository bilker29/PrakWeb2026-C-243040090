import React from 'react';

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
