// app/not-found.js
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center">
      <p className="text-4xl font-bold text-slate-900">404</p>
      <h1 className="mt-3 text-xl font-bold text-slate-900">
        Halaman, Buku, atau UKM Tidak Ditemukan
      </h1>
      <p className="mt-2 text-sm text-slate-600">
        Maaf, alamat yang kamu buka tidak tersedia atau data yang dicari tidak ada di sistem BacaKampus &amp; UKM Hub.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Link
          href="/buku"
          className="rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          Kembali ke Katalog Buku
        </Link>
        <Link
          href="/ukm"
          className="rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
        >
          Jelajahi Direktori UKM
        </Link>
      </div>
    </div>
  );
}
