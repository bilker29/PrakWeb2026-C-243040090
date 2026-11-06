import { useState, useEffect } from 'react';
import './App.css';
import Kartu from './Kartu';
import Penghitung from './Penghitung';
import FormTugas from './FormTugas';
import ItemTugas from './ItemTugas';
import CatatanKeuangan from './keuangan/CatatanKeuangan';

function App() {
  const [daftarTugas, setDaftarTugas] = useState(() => {
    const dataTersimpan = localStorage.getItem('daftar-tugas');
    if (dataTersimpan) {
      try {
        return JSON.parse(dataTersimpan);
      } catch (e) {
        console.error('Gagal membaca data tugas:', e);
      }
    }
    return [
      { id: 1, judul: 'Install Node.js dan Vite', selesai: true },
      { id: 2, judul: 'Pelajari useState', selesai: false },
    ];
  });

  const [filter, setFilter] = useState('semua');
  const [tabAktif, setTabAktif] = useState('tugas');

  useEffect(() => {
    console.log('Aplikasi Daftar Tugas siap digunakan!');
  }, []);

  useEffect(() => {
    if (tabAktif === 'tugas') {
      const sisa = daftarTugas.filter((tugas) => !tugas.selesai).length;
      document.title = sisa > 0 ? `(${sisa}) Tugas Belum Selesai` : 'Semua Tugas Selesai!';
    }
  }, [daftarTugas, tabAktif]);

  useEffect(() => {
    localStorage.setItem('daftar-tugas', JSON.stringify(daftarTugas));
  }, [daftarTugas]);

  const tambahTugas = (judul) => {
    const tugasBaru = { id: Date.now(), judul: judul, selesai: false };
    setDaftarTugas([...daftarTugas, tugasBaru]);
  };

  const ubahStatus = (id) => {
    const daftarBaru = daftarTugas.map((tugas) => {
      if (tugas.id === id) {
        return { ...tugas, selesai: !tugas.selesai };
      }
      return tugas;
    });
    setDaftarTugas(daftarBaru);
  };

  const hapusTugas = (id) => {
    setDaftarTugas(daftarTugas.filter((tugas) => tugas.id !== id));
  };

  const hapusSemuaSelesai = () => {
    setDaftarTugas(daftarTugas.filter((tugas) => !tugas.selesai));
  };

  const jumlahSelesai = daftarTugas.filter((tugas) => tugas.selesai).length;
  const jumlahBelumSelesai = daftarTugas.filter((tugas) => !tugas.selesai).length;
  const persentaseSelesai =
    daftarTugas.length > 0 ? Math.round((jumlahSelesai / daftarTugas.length) * 100) : 0;

  const tugasTerfilter = daftarTugas.filter((tugas) => {
    if (filter === 'aktif') return !tugas.selesai;
    if (filter === 'selesai') return tugas.selesai;
    return true;
  });

  return (
    <div className="wadah">
      <header className="header-praktikum">
        <div className="header-pill">
          <span className="pill-dot"></span>
          <span>Universitas Pasundan • Modul 2 React Lanjutan</span>
        </div>

        <h1 className="judul gradien-teks">
          {tabAktif === 'tugas' ? 'Daftar Tugas Praktikum' : 'Catatan Keuangan Mini'}
        </h1>
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

        <nav className="tab-nav">
          <button
            type="button"
            className={`tab-btn ${tabAktif === 'tugas' ? 'aktif' : ''}`}
            onClick={() => setTabAktif('tugas')}
          >
            Daftar Tugas ({daftarTugas.length})
          </button>
          <button
            type="button"
            className={`tab-btn ${tabAktif === 'keuangan' ? 'aktif' : ''}`}
            onClick={() => setTabAktif('keuangan')}
          >
            Catatan Keuangan Mini
          </button>
        </nav>
      </header>

      {tabAktif === 'tugas' && (
        <main className="tab-konten anim-fade">
          <Penghitung />

          <Kartu judul="Tambah Tugas Baru">
            <FormTugas onTambah={tambahTugas} />
          </Kartu>

          <Kartu
            judul="Daftar Tugas"
            badge={`${jumlahSelesai} dari ${daftarTugas.length} selesai`}
          >
            <div className="progress-box">
              <div className="progress-info">
                <span className="ringkasan">
                  {jumlahSelesai} dari {daftarTugas.length} tugas selesai
                </span>
                <span className="progress-angka">{persentaseSelesai}%</span>
              </div>
              <div className="progress-track">
                <div
                  className="progress-fill"
                  style={{ width: `${persentaseSelesai}%` }}
                ></div>
              </div>
            </div>

            <div className="toolbar-tugas">
              <div className="filter-group">
                <button
                  type="button"
                  className={`tombol-filter ${filter === 'semua' ? 'aktif' : ''}`}
                  onClick={() => setFilter('semua')}
                >
                  Semua ({daftarTugas.length})
                </button>
                <button
                  type="button"
                  className={`tombol-filter ${filter === 'aktif' ? 'aktif' : ''}`}
                  onClick={() => setFilter('aktif')}
                >
                  Belum Selesai ({jumlahBelumSelesai})
                </button>
                <button
                  type="button"
                  className={`tombol-filter ${filter === 'selesai' ? 'aktif' : ''}`}
                  onClick={() => setFilter('selesai')}
                >
                  Selesai ({jumlahSelesai})
                </button>
              </div>

              {jumlahSelesai > 0 && (
                <button
                  type="button"
                  className="tombol tombol-merah tombol-kecil tombol-hapus-selesai anim-pop"
                  onClick={hapusSemuaSelesai}
                >
                  Hapus Semua yang Selesai ({jumlahSelesai})
                </button>
              )}
            </div>

            {daftarTugas.length === 0 ? (
              <div className="kotak-kosong anim-fade">
                <p className="kosong">Belum ada tugas. Yuk tambahkan tugas pertamamu!</p>
              </div>
            ) : tugasTerfilter.length === 0 ? (
              <div className="kotak-kosong anim-fade">
                <p className="kosong">
                  Tidak ada tugas pada kategori <strong>{filter === 'aktif' ? 'Belum Selesai' : 'Selesai'}</strong>.
                </p>
              </div>
            ) : (
              <ul className="daftar">
                {tugasTerfilter.map((tugas) => (
                  <ItemTugas
                    key={tugas.id}
                    tugas={tugas}
                    onUbahStatus={ubahStatus}
                    onHapus={hapusTugas}
                  />
                ))}
              </ul>
            )}
          </Kartu>
        </main>
      )}

      {tabAktif === 'keuangan' && (
        <main className="tab-konten anim-fade">
          <CatatanKeuangan />
        </main>
      )}

      <footer className="footer-praktikum">
        <p>Praktikum Pemrograman Web • IF UNPAS 2026</p>
        <span className="footer-sub">Billy Wicaksono (243040090) • Kelas C</span>
      </footer>
    </div>
  );
}

export default App;
