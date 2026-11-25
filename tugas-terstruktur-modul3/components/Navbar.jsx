// components/Navbar.jsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const daftarMenu = [
  { href: '/', label: 'Beranda' },
  { href: '/ukm', label: 'Direktori UKM' },
  { href: '/tentang', label: 'Tentang' },
  { href: '/panduan', label: 'Panduan' },
  { href: '/kontak', label: 'Kontak' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur shadow-xs">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 text-lg font-bold text-slate-900 hover:text-indigo-600 transition">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-white font-black text-sm shadow-sm">
            UP
          </span>
          <div>
            <span className="block leading-none">UKM UNPAS Hub</span>
            <span className="block text-[10px] font-normal text-slate-500 uppercase tracking-wider">Direktori Mahasiswa</span>
          </div>
        </Link>

        <nav>
          <ul className="flex items-center gap-1 sm:gap-2">
            {daftarMenu.map((item) => {
              const aktif =
                item.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(item.href);

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`rounded-lg px-3 py-2 text-sm font-semibold transition ${
                      aktif
                        ? 'bg-indigo-600 text-white shadow-sm'
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
      </div>
    </header>
  );
}
