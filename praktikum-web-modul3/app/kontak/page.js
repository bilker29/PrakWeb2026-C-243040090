// app/kontak/page.js
import Link from 'next/link';

export const metadata = {
  title: 'Kontak Pustakawan — BacaKampus',
  description: 'Informasi kontak dan jadwal layanan pustakawan BacaKampus.',
};

export default function KontakPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Kontak Pustakawan</h1>
        <p className="mt-2 text-slate-600">
          Memerlukan bantuan pencarian referensi, perpanjangan masa peminjaman, atau reservasi ruang baca? Hubungi tim pustakawan kami di bawah ini.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {/* Kartu Jam Layanan Pustakawan */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-xl">
              🕒
            </span>
            <h2 className="text-lg font-semibold text-slate-900">
              Jadwal Layanan Pustakawan
            </h2>
          </div>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            <li className="flex justify-between border-b border-slate-100 pb-2">
              <span className="font-medium text-slate-700">Senin – Kamis</span>
              <span>08.00 – 16.00 WIB</span>
            </li>
            <li className="flex justify-between border-b border-slate-100 pb-2">
              <span className="font-medium text-slate-700">Jumat</span>
              <span>08.30 – 16.30 WIB (Istirahat 11.30 – 13.00)</span>
            </li>
            <li className="flex justify-between border-b border-slate-100 pb-2">
              <span className="font-medium text-slate-700">Sabtu</span>
              <span>09.00 – 14.00 WIB</span>
            </li>
            <li className="flex justify-between text-slate-400">
              <span className="font-medium">Minggu & Libur Nasional</span>
              <span className="font-semibold text-rose-500">Tutup</span>
            </li>
          </ul>
        </div>

        {/* Kartu Informasi Kontak Pustakawan */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-xl">
              👤
            </span>
            <h2 className="text-lg font-semibold text-slate-900">
              Pustakawan Bertugas
            </h2>
          </div>
          <div className="mt-4 space-y-3 text-sm text-slate-600">
            <div>
              <p className="font-semibold text-slate-900">Ibu Siti Nurhaliza, S.I.Pust.</p>
              <p className="text-xs text-slate-500">Kepala Layanan Sirkulasi & Referensi</p>
            </div>
            <div className="space-y-1.5 border-t border-slate-100 pt-3">
              <p className="flex items-center gap-2">
                <span className="text-slate-400">📧</span>
                <span className="font-mono text-xs">perpustakaan.if@unpas.ac.id</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-slate-400">📞</span>
                <span>+62 821-1234-5678 (WhatsApp Center)</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-slate-400">📍</span>
                <span>Meja Layanan Sirkulasi, Lantai 1 Gedung B UNPAS</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Kembali ke Katalog atau Uji 404 */}
      <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 text-center">
        <h3 className="font-semibold text-slate-900">Ingin Mencari Buku Sekarang?</h3>
        <p className="mt-1 text-sm text-slate-600">
          Cek ketersediaan buku langsung melalui katalog daring kami atau coba tautan buku tidak terdaftar untuk menguji respons error 404.
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          <Link
            href="/buku"
            className="rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Lihat Katalog Buku
          </Link>
          <Link
            href="/buku/tidak-ada"
            className="rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            Uji Halaman 404 (/buku/tidak-ada)
          </Link>
        </div>
      </div>
    </div>
  );
}
