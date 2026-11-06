import { useState } from 'react';
import ItemTransaksi from './ItemTransaksi';

function DaftarTransaksi({ daftarTransaksi, onHapus, onHapusSemua }) {
  const [filterJenis, setFilterJenis] = useState('semua');

  const transaksiTerfilter = daftarTransaksi.filter((item) => {
    if (filterJenis === 'pemasukan') return item.jenis === 'pemasukan';
    if (filterJenis === 'pengeluaran') return item.jenis === 'pengeluaran';
    return true;
  });

  return (
    <div className="daftar-transaksi-wrapper">
      <div className="transaksi-toolbar">
        <div className="filter-group">
          <button
            type="button"
            className={`tombol-filter ${filterJenis === 'semua' ? 'aktif' : ''}`}
            onClick={() => setFilterJenis('semua')}
          >
            Semua ({daftarTransaksi.length})
          </button>
          <button
            type="button"
            className={`tombol-filter ${filterJenis === 'pemasukan' ? 'aktif' : ''}`}
            onClick={() => setFilterJenis('pemasukan')}
          >
            Pemasukan ({daftarTransaksi.filter((t) => t.jenis === 'pemasukan').length})
          </button>
          <button
            type="button"
            className={`tombol-filter ${filterJenis === 'pengeluaran' ? 'aktif' : ''}`}
            onClick={() => setFilterJenis('pengeluaran')}
          >
            Pengeluaran ({daftarTransaksi.filter((t) => t.jenis === 'pengeluaran').length})
          </button>
        </div>

        {daftarTransaksi.length > 0 && onHapusSemua && (
          <button
            type="button"
            className="tombol tombol-merah tombol-kecil"
            onClick={onHapusSemua}
          >
            Hapus Riwayat
          </button>
        )}
      </div>

      {daftarTransaksi.length === 0 ? (
        <div className="kotak-kosong anim-fade">
          <p className="kosong">Belum ada transaksi. Silakan tambahkan transaksi pemasukan atau pengeluaran baru.</p>
        </div>
      ) : transaksiTerfilter.length === 0 ? (
        <div className="kotak-kosong anim-fade">
          <p className="kosong">
            Tidak ada transaksi dengan kategori <strong>{filterJenis}</strong>.
          </p>
        </div>
      ) : (
        <ul className="daftar">
          {transaksiTerfilter.map((transaksi) => (
            <ItemTransaksi
              key={transaksi.id}
              transaksi={transaksi}
              onHapus={onHapus}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default DaftarTransaksi;
