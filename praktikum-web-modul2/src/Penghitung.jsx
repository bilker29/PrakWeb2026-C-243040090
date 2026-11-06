import { useState } from 'react';
import Kartu from './Kartu';

function Penghitung() {
  const [jumlah, setJumlah] = useState(0);

  const tambah = () => {
    setJumlah(jumlah + 1);
  };

  const ulangi = () => {
    setJumlah(0);
  };

  return (
    <Kartu judul="Penghitung Klik">
      <div className="penghitung-wrapper">
        <p className="penghitung-teks">
          Tombol sudah diklik <span className="penghitung-angka anim-bounce" key={jumlah}>{jumlah}</span> kali
        </p>

        {jumlah >= 5 && (
          <div className="pesan-apresiasi anim-pop">
            <p>Wah, kamu rajin sekali mengklik!</p>
          </div>
        )}

        <div className="baris">
          <button type="button" className="tombol" onClick={tambah}>
            Klik Saya
          </button>
          <button
            type="button"
            className="tombol tombol-merah"
            onClick={ulangi}
          >
            Ulangi
          </button>
        </div>
      </div>
    </Kartu>
  );
}

export default Penghitung;
