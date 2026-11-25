// components/FilterBuku.jsx
'use client';

import { useState } from 'react';
import Link from 'next/link';

const kategoriList = ['Semua', 'Pemrograman', 'Web', 'UI/UX', 'Sistem', 'Umum'];

export default function FilterBuku({ daftarBuku }) {
  const [kategoriAktif, setKategoriAktif] = useState('Semua');

  const bukuTerfilter =
    kategoriAktif === 'Semua'
      ? daftarBuku
      : daftarBuku.filter((buku) => buku.kategori === kategoriAktif);

  return (
    <div className="mt-6 space-y-6">
      {/* Tombol Filter Kategori */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-sm font-medium text-slate-500 mr-1">Filter Kategori:</span>
        {kategoriList.map((kategori) => (
          <button
            key={kategori}
            type="button"
            onClick={() => setKategoriAktif(kategori)}
            className={`cursor-pointer rounded-lg px-3.5 py-1.5 text-xs font-semibold transition ${
              kategoriAktif === kategori
                ? 'bg-slate-900 text-white shadow-sm'
                : 'border border-slate-200 bg-white text-slate-700 hover:bg-slate-100'
            }`}
          >
            {kategori}
          </button>
        ))}
      </div>

      {/* Ringkasan Hasil Filter */}
      <div className="flex items-center justify-between text-xs text-slate-500">
        <span>
          Menampilkan <strong>{bukuTerfilter.length}</strong> dari {daftarBuku.length} buku
          {kategoriAktif !== 'Semua' && ` (Kategori: ${kategoriAktif})`}
        </span>
      </div>

      {/* Grid Koleksi Buku */}
      {bukuTerfilter.length === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-300 p-8 text-center text-slate-500">
          Tidak ada koleksi buku untuk kategori ini.
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {bukuTerfilter.map((buku) => (
            <div
              key={buku.id}
              className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 transition hover:border-slate-400"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-slate-100 text-2xl">
                    {buku.ikon}
                  </span>
                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                      buku.status === 'Tersedia'
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-amber-100 text-amber-800'
                    }`}
                  >
                    {buku.status}
                  </span>
                </div>
                <h2 className="mt-4 text-lg font-semibold text-slate-900">
                  {buku.judul}
                </h2>
                <p className="mt-0.5 text-xs text-slate-500">
                  {buku.penulis} ({buku.tahun})
                </p>
                <p className="mt-2 line-clamp-2 text-sm text-slate-600">
                  {buku.ringkasan}
                </p>
              </div>
              <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                <span className="text-xs font-medium text-slate-500">
                  {buku.kategori}
                </span>
                <Link
                  href={`/buku/${buku.id}`}
                  className="rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-slate-800"
                >
                  Lihat Detail
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
