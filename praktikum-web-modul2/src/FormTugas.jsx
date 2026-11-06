import { useState } from 'react';

function FormTugas({ onTambah }) {
  const [teks, setTeks] = useState('');

  const terlaluPanjang = teks.length > 50;
  const tidakValid = teks.trim() === '' || terlaluPanjang;

  const tanganiKirim = (event) => {
    event.preventDefault();
    if (tidakValid) return;
    onTambah(teks.trim());
    setTeks('');
  };

  return (
    <form onSubmit={tanganiKirim} className="form-tugas">
      <div className="baris">
        <input
          className="input"
          type="text"
          placeholder="Contoh: Kerjakan laporan Modul 2"
          value={teks}
          onChange={(event) => setTeks(event.target.value)}
        />
        <button className="tombol" type="submit" disabled={tidakValid}>
          Tambah
        </button>
      </div>

      <div className="form-info-bawah">
        {terlaluPanjang ? (
          <p className="galat anim-pop">Judul tugas maksimal 50 karakter.</p>
        ) : (
          <span></span>
        )}
        <span className={`penghitung-karakter ${terlaluPanjang ? 'karakter-lebih' : ''}`}>
          {teks.length}/50
        </span>
      </div>
    </form>
  );
}

export default FormTugas;
