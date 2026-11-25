// components/Navbar.jsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const daftarLink = [
  { href: '/', label: 'Beranda' },
  { href: '/buku', label: 'Katalog Buku' },
  { href: '/ukm', label: 'Direktori UKM' },
  { href: '/panduan', label: 'Panduan UKM' },
  { href: '/tentang', label: 'Tentang' },
  { href: '/kontak', label: 'Kontak' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 text-lg font-bold text-slate-900">
          <span>📚 BacaKampus &amp; UKM Hub</span>
        </Link>
        <ul className="flex flex-wrap items-center gap-1 sm:gap-2">
          {daftarLink.map((item) => {
            const aktif =
              item.href === '/'
                ? pathname === '/'
                : pathname.startsWith(item.href);

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`rounded-lg px-3 py-1.5 text-xs sm:text-sm font-medium transition ${
                    aktif
                      ? 'bg-slate-900 text-white'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
