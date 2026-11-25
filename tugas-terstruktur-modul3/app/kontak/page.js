// app/kontak/page.js
import Link from 'next/link';

export const metadata = {
  title: 'Kontak Biro Kemahasiswaan — UKM UNPAS Hub',
  description: 'Saluran komunikasi resmi Biro Kemahasiswaan & Sekretariat UKM Universitas Pasundan.',
};

export default function KontakPage() {
  return (
    <div className="space-y-8">
      <div>
        <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
          Layanan Mahasiswa
        </span>
        <h1 className="mt-2 text-3xl font-extrabold text-slate-900">
          Hubungi Biro Kemahasiswaan &amp; Alumni
        </h1>
        <p className="mt-2 text-slate-600">
          Silakan hubungi helpdesk kemahasiswaan bila Anda memiliki pertanyaan seputar legalitas UKM, pengajuan beasiswa prestasi, atau kegiatan kampus.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {/* Jam Operasional */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 text-xl font-bold">
              🕒
            </span>
            <h2 className="text-lg font-bold text-slate-900">Jam Layanan Helpdesk</h2>
          </div>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            <li className="flex justify-between border-b border-slate-100 pb-2">
              <span className="font-medium text-slate-700">Senin &ndash; Kamis</span>
              <span>08.00 &ndash; 16.00 WIB</span>
            </li>
            <li className="flex justify-between border-b border-slate-100 pb-2">
              <span className="font-medium text-slate-700">Jumat</span>
              <span>08.30 &ndash; 16.30 WIB (Istirahat 11.30 - 13.00)</span>
            </li>
            <li className="flex justify-between border-b border-slate-100 pb-2">
              <span className="font-medium text-slate-700">Sabtu &amp; Minggu</span>
              <span className="font-semibold text-rose-500">Tutup (Layanan Daring)</span>
            </li>
          </ul>
        </div>

        {/* Informasi Kontak */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 text-xl font-bold">
              📍
            </span>
            <h2 className="text-lg font-bold text-slate-900">Alamat &amp; Kontak</h2>
          </div>
          <div className="mt-4 space-y-3 text-sm text-slate-600">
            <p className="flex items-start gap-2">
              <span className="font-semibold text-slate-800">Alamat:</span>
              <span>Gedung Rektorat Lt. 2, Jl. Dr. Setiabudi No. 193 Bandung 40153</span>
            </p>
            <p className="flex items-center gap-2">
              <span className="font-semibold text-slate-800">Email:</span>
              <span className="font-mono text-xs">kemahasiswaan@unpas.ac.id</span>
            </p>
            <p className="flex items-center gap-2">
              <span className="font-semibold text-slate-800">Hotline:</span>
              <span>+62 811-2345-6789 (WhatsApp Kemahasiswaan)</span>
            </p>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-xs">
        <h3 className="font-bold text-slate-900">Ingin Mencari Unit Kegiatan Mahasiswa?</h3>
        <p className="mt-1 text-sm text-slate-600">
          Lihat direktori organisasi dan mulai ikuti kegiatan yang kamu sukai.
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          <Link
            href="/ukm"
            className="rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700 transition"
          >
            Buka Direktori UKM
          </Link>
          <Link
            href="/ukm/tidak-ada"
            className="rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition"
          >
            Uji Halaman 404 (/ukm/tidak-ada)
          </Link>
        </div>
      </div>
    </div>
  );
}
