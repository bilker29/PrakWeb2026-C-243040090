// app/tentang/page.js
import Link from 'next/link';

export const metadata = {
  title: 'Tentang Pembinaan Kemahasiswaan — UKM UNPAS Hub',
  description: 'Visi, misi, dan pilar pembinaan Unit Kegiatan Mahasiswa di Universitas Pasundan.',
};

export default function TentangPage() {
  return (
    <div className="space-y-10">
      <div>
        <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
          Profil Lembaga
        </span>
        <h1 className="mt-2 text-3xl font-extrabold text-slate-900">
          Tentang Pembinaan Kemahasiswaan UNPAS
        </h1>
        <p className="mt-3 text-slate-600 leading-relaxed">
          Unit Kegiatan Mahasiswa (UKM) Universitas Pasundan berada di bawah koordinasi Wakil Rektor Bidang Kemahasiswaan dan Alumni. Lembaga ini bertugas memberikan fasilitas, bimbingan, dan ruang pembentukan karakter luhur &quot;Pengkuh Agamana, Luhung Elmuna, Jembar Budayana&quot; bagi seluruh civitas akademika mahasiswa.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 text-xl font-bold mb-4">
            🎯
          </div>
          <h3 className="font-bold text-slate-900">Pengkuh Agamana</h3>
          <p className="mt-2 text-xs text-slate-600 leading-relaxed">
            Menanamkan integritas moral, etika kemanusiaan, dan spiritualitas yang kokoh dalam berorganisasi dan mengabdi ke masyarakat.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 text-xl font-bold mb-4">
            💡
          </div>
          <h3 className="font-bold text-slate-900">Luhung Elmuna</h3>
          <p className="mt-2 text-xs text-slate-600 leading-relaxed">
            Mendorong daya nalar kritis, keunggulan riset, inovasi teknologi, dan kematangan soft-skill kepemimpinan abad ke-21.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 text-xl font-bold mb-4">
            🌿
          </div>
          <h3 className="font-bold text-slate-900">Jembar Budayana</h3>
          <p className="mt-2 text-xs text-slate-600 leading-relaxed">
            Melestarikan kekayaan kearifan lokal budaya Sunda dan nusantara sekaligus menjunjung sikap toleran dan adaptif terhadap kemajuan global.
          </p>
        </div>
      </div>

      {/* Sekretariat Bersama */}
      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-xs">
        <h2 className="text-xl font-bold text-slate-900">
          Fasilitas Sekretariat Bersama (PKM)
        </h2>
        <p className="mt-2 text-sm text-slate-600 leading-relaxed">
          Universitas Pasundan menyediakan gedung Pusat Kegiatan Mahasiswa (PKM) terpadu di 3 kampus utama:
        </p>

        <ul className="mt-4 grid gap-4 sm:grid-cols-3 text-sm text-slate-600">
          <li className="rounded-xl bg-slate-50 p-4 border border-slate-100">
            <strong className="block text-slate-900">Kampus IV Setiabudi</strong>
            <span className="text-xs text-slate-500">Pusat Olahraga, Gelanggang Mahasiswa, dan Seni Karawitan</span>
          </li>
          <li className="rounded-xl bg-slate-50 p-4 border border-slate-100">
            <strong className="block text-slate-900">Kampus II Tamansari</strong>
            <span className="text-xs text-slate-500">Pusat Pecinta Alam, Riset Teknologi, dan Pers Mahasiswa</span>
          </li>
          <li className="rounded-xl bg-slate-50 p-4 border border-slate-100">
            <strong className="block text-slate-900">Kampus I Lengkong</strong>
            <span className="text-xs text-slate-500">Pusat Relawan KSR PMI, Koperasi Mahasiswa, dan Keagamaan</span>
          </li>
        </ul>

        <div className="mt-6 pt-6 border-t border-slate-100 flex gap-4">
          <Link
            href="/ukm"
            className="rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700 transition"
          >
            Lihat Daftar Lengkap UKM &rarr;
          </Link>
          <Link
            href="/panduan"
            className="rounded-xl border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition"
          >
            Pelajari Panduan Pendaftaran
          </Link>
        </div>
      </div>
    </div>
  );
}
