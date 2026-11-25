// app/ukm/page.js
import { daftarUKM } from '@/data/ukm';
import FilterUKM from '@/components/FilterUKM';

export const metadata = {
  title: 'Direktori Unit Kegiatan Mahasiswa — UKM UNPAS Hub',
  description: 'Daftar lengkap UKM resmi di lingkungan Universitas Pasundan.',
};

export default function DirektoriUKMPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-extrabold text-slate-900">
          Direktori Unit Kegiatan Mahasiswa
        </h1>
        <p className="mt-1 text-sm text-slate-600">
          Gunakan filter kategori atau kotak pencarian untuk menemukan UKM yang sesuai dengan minat dan bakatmu.
        </p>
      </div>

      {/* Client Component: Filter & Search UKM */}
      <FilterUKM daftarUKM={daftarUKM} />
    </div>
  );
}
