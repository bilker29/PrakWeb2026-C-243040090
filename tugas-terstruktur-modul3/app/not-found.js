// app/not-found.js
import Link from 'next/link';

export const metadata = {
  title: '404 - Halaman Tidak Ditemukan — UKM UNPAS Hub',
};

export default function NotFound() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-12 text-center shadow-xs max-w-xl mx-auto my-8">
      <div className="inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 text-4xl mb-4 font-black">
        404
      </div>
      <h1 className="text-2xl font-black text-slate-900">
        Halaman atau UKM Tidak Ditemukan
      </h1>
      <p className="mt-3 text-sm text-slate-600 leading-relaxed">
        Mohon maaf, halaman atau profil Unit Kegiatan Mahasiswa yang Anda tuju tidak terdaftar di sistem direktori kemahasiswaan UNPAS.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Link
          href="/ukm"
          className="rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700 transition shadow-sm"
        >
          Lihat Direktori UKM
        </Link>
        <Link
          href="/"
          className="rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
}
