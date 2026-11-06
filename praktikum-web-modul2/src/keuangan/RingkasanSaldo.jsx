function RingkasanSaldo({ transaksi }) {
  const totalPemasukan = transaksi
    .filter((t) => t.jenis === 'pemasukan')
    .reduce((total, t) => total + Number(t.nominal), 0);

  const totalPengeluaran = transaksi
    .filter((t) => t.jenis === 'pengeluaran')
    .reduce((total, t) => total + Number(t.nominal), 0);

  const totalSaldo = totalPemasukan - totalPengeluaran;

  const formatRupiah = (angka) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(angka);
  };

  return (
    <div className="keuangan-saldo-grid">
      <div className="kartu-saldo-utama gradien-biru-hijau">
        <div className="saldo-header">
          <span className="saldo-label">Total Saldo Bersih</span>
          <span className={`saldo-badge ${totalSaldo >= 0 ? 'badge-surplus' : 'badge-defisit'}`}>
            {totalSaldo >= 0 ? 'Surplus' : 'Defisit'}
          </span>
        </div>
        <div className="saldo-nominal">
          {formatRupiah(totalSaldo)}
        </div>
        <div className="saldo-keterangan">
          Akumulasi dari {transaksi.length} transaksi tercatat
        </div>
      </div>

      <div className="kartu-arus-grid">
        <div className="kartu-arus arus-pemasukan">
          <span className="arus-label">Total Pemasukan</span>
          <strong className="arus-nominal teks-hijau">
            +{formatRupiah(totalPemasukan)}
          </strong>
          <span className="arus-subtext">
            {transaksi.filter((t) => t.jenis === 'pemasukan').length} Transaksi Masuk
          </span>
        </div>

        <div className="kartu-arus arus-pengeluaran">
          <span className="arus-label">Total Pengeluaran</span>
          <strong className="arus-nominal teks-merah">
            -{formatRupiah(totalPengeluaran)}
          </strong>
          <span className="arus-subtext">
            {transaksi.filter((t) => t.jenis === 'pengeluaran').length} Transaksi Keluar
          </span>
        </div>
      </div>
    </div>
  );
}

export default RingkasanSaldo;
