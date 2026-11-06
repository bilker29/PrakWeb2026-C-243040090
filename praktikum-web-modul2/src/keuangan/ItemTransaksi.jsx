function ItemTransaksi({ transaksi, onHapus }) {
  const formatRupiah = (angka) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(angka);
  };

  const isPemasukan = transaksi.jenis === 'pemasukan';

  return (
    <li className={`item item-transaksi ${isPemasukan ? 'transaksi-masuk' : 'transaksi-keluar'} anim-slide`}>
      <div className="transaksi-detail">
        <span className="transaksi-judul">{transaksi.keterangan}</span>
        <span className="transaksi-meta">
          {transaksi.tanggal || 'Hari ini'} • {isPemasukan ? 'Pemasukan' : 'Pengeluaran'}
        </span>
      </div>

      <div className="transaksi-nominal-aksi">
        <span className={`transaksi-nominal ${isPemasukan ? 'teks-hijau' : 'teks-merah'}`}>
          {isPemasukan ? '+' : '-'} {formatRupiah(transaksi.nominal)}
        </span>
        <button
          type="button"
          className="tombol tombol-merah tombol-kecil"
          onClick={() => onHapus(transaksi.id)}
        >
          Hapus
        </button>
      </div>
    </li>
  );
}

export default ItemTransaksi;
