// app/layout.js
import { Geist } from 'next/font/google';
import Navbar from '@/components/Navbar';
import './globals.css';

const geistSans = Geist({
  subsets: ['latin'],
});

export const metadata = {
  title: 'BacaKampus & UKM Hub — Modul 3 Praktikum Web Next.js 16',
  description: 'Aplikasi katalog buku dan direktori UKM kampus UNPAS menggunakan Next.js 16 dan App Router.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${geistSans.className} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <Navbar />
        <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-8">
          {children}
        </main>
        <footer className="border-t border-slate-200 bg-white py-6 text-center text-xs sm:text-sm text-slate-500 space-y-1">
          <p className="font-medium text-slate-700">
            BacaKampus &amp; Direktori UKM Universitas Pasundan &copy; 2026
          </p>
          <p className="text-slate-400">
            Modul 3 Praktikum Pemrograman Web • Billy Wicaksono (243040090) • Kelas C
          </p>
        </footer>
      </body>
    </html>
  );
}
