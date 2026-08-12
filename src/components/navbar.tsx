"use client";

import Link from "next/link";
import { useState } from "react";
import { BookOpen, List, X, ShoppingCart } from "@phosphor-icons/react";
import { useCart } from "@/lib/cart-context";
import { site } from "@/lib/site";

const navLinks = [
  { href: "/#layanan", label: "Layanan" },
  { href: "/#cara-kerja", label: "Cara Kerja" },
  { href: "/catalog", label: "Katalog" },
  { href: "/contact", label: "Kontak" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <header className="glass-nav sticky top-3 z-50 mx-3 mt-3 rounded-2xl md:mx-4">
      <nav className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-4 md:px-6">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="flex items-center gap-2"
        >
          <BookOpen size={28} weight="fill" className="text-primary" />
          <span className="leading-tight">
            <span className="block font-headline text-base font-extrabold text-primary">
              {site.name}
            </span>
            <span className="block text-[10px] uppercase tracking-wider text-on-surface-variant">
              {site.tagline}
            </span>
          </span>
        </Link>

        <div className="flex items-center gap-2">
          <ul className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-semibold uppercase tracking-wide text-on-surface-variant transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/cart"
            className="relative flex h-10 w-10 items-center justify-center rounded-lg text-primary transition-colors hover:bg-primary-fixed/40"
            aria-label="Keranjang"
          >
            <ShoppingCart size={22} />
            {totalItems > 0 && (
              <span
                className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-bold text-on-primary"
              >
                {totalItems > 99 ? "99+" : totalItems}
              </span>
            )}
          </Link>

          <button
            type="button"
            aria-label={open ? "Tutup menu" : "Buka menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-primary transition-colors hover:bg-primary-fixed/40 md:hidden"
          >
            {open ? <X size={24} /> : <List size={24} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-white/30 bg-white/40 backdrop-blur-xl md:hidden">
          <ul className="mx-auto flex max-w-[1280px] flex-col px-4 py-2">
            {navLinks.map((link, index) => (
              <li
                key={link.href}
                className="animate-card-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base font-semibold text-on-surface transition-colors hover:text-primary"
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
