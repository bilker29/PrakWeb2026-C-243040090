import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../index.css';
import '../App.css';
import CatatanKeuangan from './CatatanKeuangan';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="wadah">
      <header className="header-praktikum">
        <div className="header-pill">
          <span className="pill-dot"></span>
          <span>Universitas Pasundan • Modul 2 React Lanjutan</span>
        </div>
        <h1 className="judul gradien-teks">Catatan Keuangan Mini</h1>
        <p className="subjudul">
          Pengampu: R. Sandhika Galih Amalga, ST., MT. • Laboratorium Informatika
        </p>

        <div className="biodata-card anim-pop">
          <div className="biodata-item">
            <span className="biodata-label">Nama Praktikan</span>
            <strong className="biodata-val">Billy Wicaksono</strong>
          </div>
          <div className="biodata-garis"></div>
          <div className="biodata-item">
            <span className="biodata-label">NIM</span>
            <strong className="biodata-val">243040090</strong>
          </div>
          <div className="biodata-garis"></div>
          <div className="biodata-item">
            <span className="biodata-label">Kelas</span>
            <strong className="biodata-val">Praktikum Web C</strong>
          </div>
        </div>
      </header>
      <CatatanKeuangan />
      <footer className="footer-praktikum">
        <p>Praktikum Pemrograman Web • IF UNPAS 2026</p>
        <span className="footer-sub">Billy Wicaksono (243040090) • Kelas C</span>
      </footer>
    </div>
  </StrictMode>
);
