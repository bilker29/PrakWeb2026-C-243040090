// app/ukm/layout.js
export default function UKMLayout({ children }) {
  return (
    <section className="space-y-6">
      {/* Banner Nested Layout */}
      <div className="rounded-2xl border border-indigo-200 bg-linear-to-r from-indigo-50 via-slate-50 to-indigo-50 p-5 shadow-xs">
        <div className="flex items-start gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-indigo-600 text-white font-bold text-sm">
            📢
          </span>
          <div>
            <h3 className="text-sm font-bold text-indigo-950">
              Informasi Open Recruitment UKM Periode 2026/2027
            </h3>
            <p className="mt-1 text-xs text-slate-600 leading-relaxed">
              Pendaftaran terpadu dibuka untuk seluruh mahasiswa Universitas Pasundan. Harap membawa KTM aktif atau bukti KRS resmi saat menghadiri sesi verifikasi di sekretariat.
            </p>
            <p className="mt-1 text-[11px] font-semibold text-indigo-700">
              * Banner ini berasal dari Nested Layout (app/ukm/layout.js) dan tampil konsisten di halaman katalog maupun detail UKM.
            </p>
          </div>
        </div>
      </div>

      {children}
    </section>
  );
}
