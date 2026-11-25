// app/panduan/page.js
import Link from 'next/link';

export const metadata = {
  title: 'Panduan Pendaftaran UKM — UKM UNPAS Hub',
  description: 'Syarat dan alur lengkap pendaftaran anggota baru Unit Kegiatan Mahasiswa UNPAS.',
};

export default function PanduanPage() {
  const alurLangkah = [
    {
      no: '01',
      judul: 'Pilih UKM Sesuai Minat',
      deskripsi:
        'Kunjungi direktori UKM di portal ini, baca profil, sejarah, prestasi, dan jadwal kumpul masing-masing unit.',
    },
    {
      no: '02',
      judul: 'Siapkan Berkas Persyaratan',
      deskripsi:
        'Siapkan Kartu Tanda Mahasiswa (KTM) aktif atau bukti KRS semester berjalan, serta pas foto formal terbaru.',
    },
    {
      no: '03',
      judul: 'Registrasi Formulir Minat',
      deskripsi:
        'Klik tombol minat di halaman detail UKM atau kunjungi stand sekretariat pada masa Open Recruitment kampus.',
    },
    {
      no: '04',
      judul: 'Wawancara & Masa Orientasi',
      deskripsi:
        'Ikuti sesi pengenalan organisasi, wawancara komitmen, dan pelatihan dasar (diksar) sesuai ketentuan cabang.',
    },
  ];

  return (
    <div className="space-y-10">
      <div>
        <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
          Prosedur &amp; Persyaratan
        </span>
        <h1 className="mt-2 text-3xl font-extrabold text-slate-900">
          Panduan Pendaftaran Anggota Baru UKM
        </h1>
        <p className="mt-3 text-slate-600 leading-relaxed">
          Open Recruitment UKM Universitas Pasundan dilaksanakan serentak pada awal semester ganjil dan genap. Ikuti empat tahapan praktis berikut untuk bergabung.
        </p>
      </div>

      {/* Grid Alur */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {alurLangkah.map((step) => (
          <div
            key={step.no}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs relative"
          >
            <span className="text-4xl font-black text-indigo-100 block">
              {step.no}
            </span>
            <h3 className="mt-2 text-base font-bold text-slate-900">
              {step.judul}
            </h3>
            <p className="mt-2 text-xs text-slate-600 leading-relaxed">
              {step.deskripsi}
            </p>
          </div>
        ))}
      </div>

      {/* Box FAQ */}
      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-xs space-y-6">
        <h2 className="text-xl font-bold text-slate-900">Pertanyaan Umum (FAQ)</h2>

        <div className="space-y-4 text-sm">
          <div className="rounded-xl bg-slate-50 p-4 border border-slate-100">
            <h4 className="font-semibold text-slate-900">
              Bolehkah mahasiswa mendaftar lebih dari satu UKM?
            </h4>
            <p className="mt-1 text-xs text-slate-600">
              Boleh, maksimal 2 UKM dengan catatan jadwal latihan/kegiatan tidak bertabrakan dan perkuliahan tetap menjadi prioritas utama.
            </p>
          </div>

          <div className="rounded-xl bg-slate-50 p-4 border border-slate-100">
            <h4 className="font-semibold text-slate-900">
              Apakah mahasiswa tingkat atas (semester 3 ke atas) masih bisa bergabung?
            </h4>
            <p className="mt-1 text-xs text-slate-600">
              Sangat bisa! Walaupun sebagian besar pendaftar adalah mahasiswa baru semester 1, seluruh mahasiswa aktif UNPAS berhak mendaftar.
            </p>
          </div>
        </div>

        <div className="pt-4 flex justify-center">
          <Link
            href="/ukm"
            className="rounded-xl bg-indigo-600 px-6 py-3 text-sm font-bold text-white hover:bg-indigo-700 transition"
          >
            Mulai Pilih UKM Sekarang &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
