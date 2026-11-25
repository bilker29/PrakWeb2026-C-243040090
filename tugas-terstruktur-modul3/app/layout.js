// app/layout.js
import Navbar from '@/components/Navbar';
import './globals.css';

export const metadata = {
  title: 'UKM UNPAS Hub — Portal Resmi Direktori Unit Kegiatan Mahasiswa',
  description:
    'Sistem informasi direktori unit kegiatan mahasiswa Universitas Pasundan berbasis Next.js 16 App Router.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className="h-full antialiased">
      <body className="flex min-h-full flex-col font-sans">
        <Navbar />
        <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-8">
          {children}
        </main>
        <footer className="border-t border-slate-200 bg-white py-6 text-center text-sm text-slate-500">
          <div className="mx-auto max-w-5xl px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p>
              UKM UNPAS Hub &copy; 2026 &mdash; Tugas Terstruktur Modul 3 Praktikum Web
            </p>
            <p className="text-xs text-slate-400">
              Billy Wicaksono (243040090) &bull; Teknik Informatika Universitas Pasundan
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
