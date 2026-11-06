import { useState } from 'react';

function FormTransaksi({ onTambah }) {
  const [keterangan, setKeterangan] = useState('');
  const [nominal, setNominal] = useState('');
  const [jenis, setJenis] = useState('pengeluaran');

  const nominalAngka = Number(nominal);
  const nominalTidakValid = isNaN(nominalAngka) || nominalAngka <= 0;
  const keteranganTidakValid = keterangan.trim() === '';
  const formTidakValid = keteranganTidakValid || nominalTidakValid;

  const tanganiKirim = (event) => {
    event.preventDefault();
    if (formTidakValid) return;

    onTambah({
      keterangan: keterangan.trim(),
      nominal: Number(nominal),
      jenis: jenis,
      tanggal: new Date().toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      }),
    });

    setKeterangan('');
    setNominal('');
  };

  return (
    <form className="form-keuangan" onSubmit={tanganiKirim}>
      <div className="jenis-pilihan-grup">
        <button
          type="button"
          className={`tombol-jenis ${jenis === 'pengeluaran' ? 'jenis-pengeluaran aktif' : ''}`}
          onClick={() => setJenis('pengeluaran')}
        >
          Pengeluaran (-)
        </button>
        <button
          type="button"
          className={`tombol-jenis ${jenis === 'pemasukan' ? 'jenis-pemasukan aktif' : ''}`}
          onClick={() => setJenis('pemasukan')}
        >
          Pemasukan (+)
        </button>
      </div>

      <div className="baris-input-keuangan">
        <div className="input-group">
          <label className="input-label" htmlFor="keterangan-input">
            Keterangan Transaksi
          </label>
          <input
            id="keterangan-input"
            className="input"
            type="text"
            placeholder="Contoh: Beli Buku Praktikum, Uang Saku"
            value={keterangan}
            onChange={(e) => setKeterangan(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label className="input-label" htmlFor="nominal-input">
            Nominal (Rp)
          </label>
          <input
            id="nominal-input"
            className="input"
            type="number"
            min="1"
            placeholder="Contoh: 50000"
            value={nominal}
            onChange={(e) => setNominal(e.target.value)}
          />
        </div>
      </div>

      <button
        type="submit"
        className={`tombol ${jenis === 'pemasukan' ? 'tombol-hijau' : 'tombol-biru'}`}
        disabled={formTidakValid}
      >
        + Simpan {jenis === 'pemasukan' ? 'Pemasukan' : 'Pengeluaran'}
      </button>

      {nominal !== '' && nominalTidakValid && (
        <p className="galat anim-pop">Nominal harus berupa angka lebih dari 0.</p>
      )}
    </form>
  );
}

export default FormTransaksi;
