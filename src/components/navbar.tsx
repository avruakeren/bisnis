"use client";

import Link from "next/link";
import { useState } from "react";
import { ShoppingCart } from "@phosphor-icons/react";
import { useCart } from "@/lib/cart-context";

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/catalog", label: "Katalog" },
  { href: "/cart", label: "Keranjang" },
  { href: "/about", label: "Tentang" },
  { href: "/contact", label: "Kontak" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <header className="fixed top-4 left-4 right-4 z-[100] rounded-2xl bg-white/15 backdrop-blur-2xl ring-1 ring-white/20">
      <nav className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="text-base font-semibold tracking-tight text-white"
        >
          Gina
        </Link>
        <div className="flex items-center gap-1">
          <Link
            href="/cart"
            className="relative flex h-9 w-9 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/20"
          >
            <ShoppingCart size={20} />
            {totalItems > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-blue-500 px-1 text-[10px] font-bold text-white">
                {totalItems > 99 ? "99+" : totalItems}
              </span>
            )}
          </Link>
          <button
            type="button"
            aria-label={open ? "Tutup menu" : "Buka menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] rounded-lg transition-colors hover:bg-white/20"
          >
            <span
              className={`h-[1.5px] w-5 bg-white transition-all duration-200 ${
                open ? "translate-y-[6.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-[1.5px] w-5 bg-white transition-all duration-200 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-[1.5px] w-5 bg-white transition-all duration-200 ${
                open ? "-translate-y-[6.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>
      {open && (
        <div className="border-t border-white/10 bg-black/40 backdrop-blur-xl">
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
                  className="block py-4 text-lg font-medium text-white transition-colors hover:text-blue-300"
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