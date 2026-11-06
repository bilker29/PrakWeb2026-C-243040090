import { useState, useEffect } from 'react';
import Kartu from '../Kartu';
import RingkasanSaldo from './RingkasanSaldo';
import FormTransaksi from './FormTransaksi';
import DaftarTransaksi from './DaftarTransaksi';

function CatatanKeuangan() {
  const [transaksi, setTransaksi] = useState(() => {
    const dataTersimpan = localStorage.getItem('catatan-keuangan');
    if (dataTersimpan) {
      try {
        return JSON.parse(dataTersimpan);
      } catch (err) {
        console.error('Gagal memuat catatan keuangan:', err);
      }
    }
    return [
      {
        id: 1,
        keterangan: 'Uang Saku Bulanan',
        nominal: 500000,
        jenis: 'pemasukan',
        tanggal: '1 Nov 2026',
      },
      {
        id: 2,
        keterangan: 'Beli Buku Praktikum React',
        nominal: 85000,
        jenis: 'pengeluaran',
        tanggal: '2 Nov 2026',
      },
      {
        id: 3,
        keterangan: 'Makan Siang Kafetaria',
        nominal: 25000,
        jenis: 'pengeluaran',
        tanggal: '3 Nov 2026',
      },
    ];
  });

  useEffect(() => {
    localStorage.setItem('catatan-keuangan', JSON.stringify(transaksi));
  }, [transaksi]);

  const tambahTransaksi = (dataBaru) => {
    const transaksiBaru = {
      id: Date.now(),
      ...dataBaru,
    };
    setTransaksi([transaksiBaru, ...transaksi]);
  };

  const hapusTransaksi = (id) => {
    setTransaksi(transaksi.filter((item) => item.id !== id));
  };

  const hapusSemuaTransaksi = () => {
    if (window.confirm('Hapus seluruh riwayat transaksi?')) {
      setTransaksi([]);
    }
  };

  return (
    <div className="keuangan-wrapper anim-fade">
      <Kartu judul="Ringkasan Saldo">
        <RingkasanSaldo transaksi={transaksi} />
      </Kartu>

      <Kartu judul="Tambah Transaksi Baru">
        <FormTransaksi onTambah={tambahTransaksi} />
      </Kartu>

      <Kartu judul="Daftar Transaksi" badge={`${transaksi.length} transaksi`}>
        <DaftarTransaksi
          daftarTransaksi={transaksi}
          onHapus={hapusTransaksi}
          onHapusSemua={hapusSemuaTransaksi}
        />
      </Kartu>
    </div>
  );
}

export default CatatanKeuangan;
