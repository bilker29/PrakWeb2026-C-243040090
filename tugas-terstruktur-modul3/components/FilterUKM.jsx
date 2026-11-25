// components/FilterUKM.jsx
'use client';

import { useState } from 'react';
import Link from 'next/link';

const kategoriList = [
  'Semua',
  'Olahraga',
  'Seni Budaya',
  'Pecinta Alam',
  'Teknologi & Riset',
  'Sosial Kemanusiaan',
];

export default function FilterUKM({ daftarUKM }) {
  const [kategoriAktif, setKategoriAktif] = useState('Semua');
  const [kataKunci, setKataKunci] = useState('');

  const ukmTerfilter = daftarUKM.filter((ukm) => {
    const matchKategori =
      kategoriAktif === 'Semua' || ukm.kategori === kategoriAktif;
    const matchKataKunci =
      ukm.nama.toLowerCase().includes(kataKunci.toLowerCase()) ||
      ukm.kepanjangan.toLowerCase().includes(kataKunci.toLowerCase()) ||
      ukm.ringkasan.toLowerCase().includes(kataKunci.toLowerCase());
    return matchKategori && matchKataKunci;
  });

  return (
    <div className="space-y-6">
      {/* Kontrol Pencarian dan Kategori */}
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-4">
        {/* Input Pencarian */}
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400">
            🔍
          </span>
          <input
            type="text"
            value={kataKunci}
            onChange={(e) => setKataKunci(e.target.value)}
            placeholder="Cari UKM berdasarkan nama, bidang, atau kata kunci..."
            className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-2.5 pl-10 pr-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-100 transition"
          />
        </div>

        {/* Tombol Filter Kategori */}
        <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-slate-100">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 mr-2">
            Kategori:
          </span>
          {kategoriList.map((kat) => (
            <button
              key={kat}
              type="button"
              onClick={() => setKategoriAktif(kat)}
              className={`cursor-pointer rounded-lg px-3.5 py-1.5 text-xs font-semibold transition ${
                kategoriAktif === kat
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {kat}
            </button>
          ))}
        </div>
      </div>

      {/* Ringkasan Filter */}
      <div className="flex items-center justify-between text-xs text-slate-500 px-1">
        <span>
          Menampilkan <strong>{ukmTerfilter.length}</strong> dari {daftarUKM.length} Unit Kegiatan Mahasiswa
          {kategoriAktif !== 'Semua' && ` &bull; Kategori: ${kategoriAktif}`}
          {kataKunci && ` &bull; Kata kunci: "${kataKunci}"`}
        </span>
      </div>

      {/* Grid Kartu UKM */}
      {ukmTerfilter.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center text-slate-500">
          <p className="text-3xl mb-2">🔎</p>
          <p className="font-semibold text-slate-800">Tidak ada UKM yang cocok</p>
          <p className="text-xs text-slate-500 mt-1">
            Coba ganti kata kunci pencarian atau pilih kategori &quot;Semua&quot;.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ukmTerfilter.map((ukm) => (
            <div
              key={ukm.id}
              className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-indigo-300 hover:shadow-md transition"
            >
              <div>
                <div className="flex items-start justify-between gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-2xl group-hover:scale-110 transition">
                    {ukm.ikon}
                  </div>
                  <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-700">
                    {ukm.kategori}
                  </span>
                </div>

                <h3 className="mt-4 text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition">
                  {ukm.nama}
                </h3>
                <p className="text-xs text-indigo-700 font-medium">
                  {ukm.kepanjangan}
                </p>

                <p className="mt-3 line-clamp-3 text-sm text-slate-600 leading-relaxed">
                  {ukm.ringkasan}
                </p>
              </div>

              <div className="mt-6 border-t border-slate-100 pt-4 flex items-center justify-between">
                <span className="text-xs text-slate-400">
                  Est. {ukm.tahunBerdiri}
                </span>
                <Link
                  href={`/ukm/${ukm.id}`}
                  className="rounded-lg bg-indigo-600 px-3.5 py-2 text-xs font-semibold text-white hover:bg-indigo-700 transition"
                >
                  Detail UKM &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
