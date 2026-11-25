// app/ukm/[id]/page.js
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { daftarUKM } from '@/data/ukm';
import TombolMinatUKM from '@/components/TombolMinatUKM';

export function generateStaticParams() {
  return daftarUKM.map((ukm) => ({ id: ukm.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const ukm = daftarUKM.find((item) => item.id === id);

  if (!ukm) {
    return {
      title: 'UKM Tidak Ditemukan — UKM UNPAS Hub',
    };
  }

  return {
    title: `${ukm.nama} — UKM UNPAS Hub`,
    description: ukm.ringkasan,
  };
}

export default async function DetailUKMPage({ params }) {
  const { id } = await params;
  const ukm = daftarUKM.find((item) => item.id === id);

  if (!ukm) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <Link
        href="/ukm"
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition"
      >
        &larr; Kembali ke Direktori UKM
      </Link>

      <article className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-sm space-y-8">
        {/* Header Profil UKM */}
        <div className="flex flex-wrap items-center gap-6">
          <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-indigo-50 text-5xl shadow-xs">
            {ukm.ikon}
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-bold text-indigo-800">
                {ukm.kategori}
              </span>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                Didirikan Tahun {ukm.tahunBerdiri}
              </span>
            </div>

            <h1 className="mt-2 text-2xl sm:text-3xl font-black text-slate-900">
              {ukm.nama}
            </h1>
            <p className="text-sm font-medium text-indigo-700">
              {ukm.kepanjangan}
            </p>
            <p className="mt-1 text-xs italic text-slate-500">
              &ldquo;{ukm.slogan}&rdquo;
            </p>
          </div>
        </div>

        {/* Deskripsi Lengkap */}
        <div className="space-y-3">
          <h2 className="text-base font-bold text-slate-900">Deskripsi &amp; Profil Kegiatan</h2>
          <p className="text-slate-700 leading-relaxed text-sm">
            {ukm.ringkasan}
          </p>
        </div>

        {/* Info Grid: Jadwal, Lokasi, Kontak */}
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl bg-slate-50 p-4 border border-slate-100">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block">
              Jadwal Kumpul Rutin
            </span>
            <p className="mt-1 text-sm font-semibold text-slate-900">
              {ukm.jadwalKumpul}
            </p>
          </div>

          <div className="rounded-xl bg-slate-50 p-4 border border-slate-100">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block">
              Lokasi Sekretariat
            </span>
            <p className="mt-1 text-sm font-semibold text-slate-900">
              {ukm.lokasiSekretariat}
            </p>
          </div>

          <div className="rounded-xl bg-slate-50 p-4 border border-slate-100">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block">
              Akun Resmi Media Sosial
            </span>
            <p className="mt-1 text-sm font-semibold text-indigo-600 font-mono">
              {ukm.kontak}
            </p>
          </div>
        </div>

        {/* Prestasi Unggulan */}
        <div className="space-y-3">
          <h2 className="text-base font-bold text-slate-900">Prestasi &amp; Rekam Jejak Unggulan</h2>
          <ul className="space-y-2">
            {ukm.prestasi.map((item, idx) => (
              <li
                key={idx}
                className="flex items-center gap-2 text-sm text-slate-700"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700 text-xs font-bold">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Client Component: Interaksi Tombol Minat */}
        <div className="border-t border-slate-100 pt-6">
          <TombolMinatUKM namaUKM={ukm.nama} jumlahAwal={ukm.peminatAwal} />
        </div>
      </article>
    </div>
  );
}
