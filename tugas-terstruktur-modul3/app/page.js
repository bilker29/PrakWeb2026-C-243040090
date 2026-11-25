// app/page.js
import Link from 'next/link';
import { daftarUKM } from '@/data/ukm';

export default function HomePage() {
  const ukmUnggulan = daftarUKM.slice(0, 3);

  return (
    <div className="space-y-12">
      {/* Hero Banner */}
      <section className="relative overflow-hidden rounded-3xl bg-linear-to-br from-indigo-900 via-slate-900 to-indigo-950 p-8 sm:p-12 text-white shadow-xl">
        <div className="relative z-10 max-w-2xl">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-500/20 px-3.5 py-1 text-xs font-semibold text-indigo-200 border border-indigo-500/30">
            🏛️ Biro Kemahasiswaan &amp; Alumni UNPAS
          </span>
          <h1 className="mt-5 text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Eksplorasi Minat, Raih Prestasi di UKM UNPAS
          </h1>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            Temukan ruang berkarya, berorganisasi, dan berprestasi di lingkungan Universitas Pasundan. Pilih lebih dari 20 Unit Kegiatan Mahasiswa lintas bidang olahraga, seni budaya, riset teknologi, hingga sosial.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/ukm"
              className="rounded-xl bg-white px-6 py-3 text-sm font-bold text-indigo-900 hover:bg-slate-100 shadow-md transition"
            >
              Jelajahi Direktori UKM &rarr;
            </Link>
            <Link
              href="/panduan"
              className="rounded-xl border border-indigo-400/40 bg-indigo-950/40 px-6 py-3 text-sm font-semibold text-white hover:bg-indigo-900/60 transition"
            >
              Alur Pendaftaran
            </Link>
          </div>
        </div>
      </section>

      {/* Statistik Cepat */}
      <section className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-xs">
          <p className="text-3xl font-black text-indigo-600">24+</p>
          <p className="mt-1 text-xs font-medium text-slate-500">Unit Kegiatan Mahasiswa</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-xs">
          <p className="text-3xl font-black text-emerald-600">3.500+</p>
          <p className="mt-1 text-xs font-medium text-slate-500">Mahasiswa Aktif Terdaftar</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-xs">
          <p className="text-3xl font-black text-amber-600">120+</p>
          <p className="mt-1 text-xs font-medium text-slate-500">Penghargaan Nasional</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-xs">
          <p className="text-3xl font-black text-sky-600">5</p>
          <p className="mt-1 text-xs font-medium text-slate-500">Kampus Terpadu UNPAS</p>
        </div>
      </section>

      {/* UKM Unggulan */}
      <section>
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              Unit Kegiatan Unggulan
            </h2>
            <p className="text-sm text-slate-500">
              Rekomendasi organisasi mahasiswa dengan torehan prestasi bergengsi
            </p>
          </div>
          <Link
            href="/ukm"
            className="text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition"
          >
            Lihat Semua &rarr;
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {ukmUnggulan.map((ukm) => (
            <Link
              key={ukm.id}
              href={`/ukm/${ukm.id}`}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-indigo-400 hover:shadow-lg transition"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-3xl group-hover:scale-105 transition">
                {ukm.ikon}
              </div>
              <h3 className="mt-5 text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition">
                {ukm.nama}
              </h3>
              <p className="text-xs font-medium text-indigo-700">{ukm.kategori}</p>
              <p className="mt-2 line-clamp-2 text-xs text-slate-500">
                {ukm.slogan}
              </p>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-indigo-600">
                <span>Pelajari Profil</span>
                <span>&rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
