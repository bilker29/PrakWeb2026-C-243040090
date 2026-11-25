// app/page.js
import Link from 'next/link';
import { daftarBuku } from '@/data/buku';
import { daftarUKM } from '@/data/ukm';

export default function HomePage() {
  const bukuPilihan = daftarBuku.slice(0, 3);
  const ukmPilihan = daftarUKM.slice(0, 3);

  return (
    <div className="space-y-12">
      {/* Hero Banner */}
      <section className="rounded-3xl bg-slate-900 p-8 sm:p-10 text-white shadow-sm">
        <span className="inline-block rounded-full bg-slate-800 px-3.5 py-1 text-xs font-semibold text-slate-200">
          Laboratorium Informatika UNPAS • Modul 3 Next.js 16
        </span>
        <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold leading-tight">
          Portal Mahasiswa: BacaKampus &amp; Direktori UKM
        </h1>
        <p className="mt-3 max-w-2xl text-slate-300 leading-relaxed text-sm sm:text-base">
          Aplikasi web terpadu untuk pencarian referensi pustaka buku pemrograman, sistem, dan desain antarmuka, sekaligus direktori resmi Unit Kegiatan Mahasiswa (UKM) di lingkungan Universitas Pasundan.
        </p>

        {/* Quick Action Buttons */}
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/buku"
            className="rounded-xl bg-white px-5 py-2.5 text-sm font-bold text-slate-900 transition hover:bg-slate-100 shadow-xs"
          >
            📚 Jelajahi Katalog Buku
          </Link>
          <Link
            href="/ukm"
            className="rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-indigo-700 shadow-xs"
          >
            🏛️ Direktori UKM Kampus
          </Link>
          <Link
            href="/panduan"
            className="rounded-xl border border-slate-700 bg-slate-800/80 px-4 py-2.5 text-sm font-semibold text-slate-200 transition hover:bg-slate-800"
          >
            📖 Panduan UKM
          </Link>
          <Link
            href="/tentang"
            className="rounded-xl border border-slate-700 px-4 py-2.5 text-sm font-semibold text-slate-300 transition hover:bg-slate-800"
          >
            ℹ️ Info Layanan
          </Link>
        </div>
      </section>

      {/* Bagian 1: Buku Rekomendasi (BacaKampus) */}
      <section>
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-900">Koleksi Buku Rekomendasi</h2>
            <p className="text-xs text-slate-500">Materi praktikum katalog buku perpustakaan mini</p>
          </div>
          <Link
            href="/buku"
            className="text-sm font-semibold text-slate-700 hover:text-slate-900 hover:underline"
          >
            Semua Koleksi &rarr;
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {bukuPilihan.map((buku) => (
            <Link
              key={buku.id}
              href={`/buku/${buku.id}`}
              className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-slate-400 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-2xl group-hover:scale-105 transition">
                {buku.ikon}
              </div>
              <h3 className="mt-4 font-bold text-slate-900 group-hover:text-slate-700">
                {buku.judul}
              </h3>
              <p className="mt-1 text-xs text-slate-500">{buku.penulis} ({buku.tahun})</p>
              <span className="mt-3 inline-block rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-slate-700">
                {buku.kategori}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Bagian 2: Unit Kegiatan Mahasiswa Unggulan (Tugas Terstruktur) */}
      <section>
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-900">Unit Kegiatan Mahasiswa Unggulan</h2>
            <p className="text-xs text-slate-500">Tugas terstruktur direktori organisasi &amp; kegiatan kampus UNPAS</p>
          </div>
          <Link
            href="/ukm"
            className="text-sm font-semibold text-indigo-600 hover:text-indigo-800 hover:underline"
          >
            Lihat Semua UKM &rarr;
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {ukmPilihan.map((ukm) => (
            <Link
              key={ukm.id}
              href={`/ukm/${ukm.id}`}
              className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-indigo-300 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-2xl group-hover:scale-105 transition">
                {ukm.ikon}
              </div>
              <h3 className="mt-4 font-bold text-slate-900 group-hover:text-indigo-600">
                {ukm.nama}
              </h3>
              <p className="mt-1 text-xs text-slate-500 line-clamp-1">{ukm.kepanjangan}</p>
              <span className="mt-3 inline-block rounded-full bg-indigo-50 px-2.5 py-0.5 text-xs font-semibold text-indigo-700">
                {ukm.kategori}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
