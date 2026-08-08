"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/catalog", label: "Katalog" },
  { href: "/order", label: "Pesan" },
  { href: "/about", label: "Tentang" },
  { href: "/contact", label: "Kontak" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-white/50 backdrop-blur-xl">
      <nav className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="text-base font-semibold tracking-tight"
        >
          Gina
        </Link>
        <button
          type="button"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] rounded-lg transition-colors hover:bg-white/70"
        >
          <span
            className={`h-[1.5px] w-5 bg-zinc-800 transition-all duration-200 ${
              open ? "translate-y-[6.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-[1.5px] w-5 bg-zinc-800 transition-all duration-200 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-[1.5px] w-5 bg-zinc-800 transition-all duration-200 ${
              open ? "-translate-y-[6.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>
      {open && (
        <div className="border-t border-white/60 bg-white/60 backdrop-blur-xl">
          <ul className="mx-auto flex max-w-5xl flex-col px-6 py-4">
            {navLinks.map((link, index) => (
              <li
                key={link.href}
                className="animate-card-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-4 text-lg font-medium text-zinc-800 transition-colors hover:text-blue-500"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
