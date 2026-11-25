// components/TombolMinatUKM.jsx
'use client';

import { useState } from 'react';

export default function TombolMinatUKM({ namaUKM, jumlahAwal = 35 }) {
  const [berminat, setBerminat] = useState(false);
  const [totalPeminat, setTotalPeminat] = useState(jumlahAwal);

  function handleToggle() {
    if (berminat) {
      setBerminat(false);
      setTotalPeminat((prev) => prev - 1);
    } else {
      setBerminat(true);
      setTotalPeminat((prev) => prev + 1);
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-4">
      <button
        type="button"
        onClick={handleToggle}
        className={`cursor-pointer rounded-xl px-5 py-2.5 text-sm font-semibold transition ${
          berminat
            ? 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-xs'
            : 'border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white'
        }`}
      >
        {berminat ? '✓ Terdaftar di Minat Saya' : '+ Tambah ke Minat Saya'}
      </button>

      <div className="flex items-center gap-2 text-sm text-slate-600">
        <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
        <span>
          <strong>{totalPeminat}</strong> mahasiswa berminat gabung ke <strong>{namaUKM}</strong>
        </span>
      </div>
    </div>
  );
}
