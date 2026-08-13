"use client";

import { useMemo, useState } from "react";
import type { CatalogItem } from "@/data/catalog";
import { useCart } from "@/lib/cart-context";
import CatalogCard from "./catalog-card";
import { formatHarga, jenisLabel, jenisStyles } from "./format";

const kelasOptions = [null, 1, 2, 3, 4, 5, 6] as const;
const jenisOptions = [
  "semua",
  "sistem-pembelajaran",
  "media-pembelajaran",
  "rpp",
  "worksheet",
  "web-absensi",
] as const;

type JenisFilter = (typeof jenisOptions)[number];
type KategoriFilter = "website" | "akademik" | "perangkat" | "";

const kategoriToJenis: Record<string, string[]> = {
  website: ["web-absensi"],
  akademik: ["rpp", "worksheet"],
  perangkat: ["sistem-pembelajaran", "media-pembelajaran"],
};

type CatalogProps = {
  items: CatalogItem[];
};

export default function Catalog({ items }: CatalogProps) {
  const [kelasFilter, setKelasFilter] = useState<number | null>(null);
  const [jenisFilter, setJenisFilter] = useState<JenisFilter>("semua");

  // Initialize kategoriFilter from URL hash (lazy state)
  const getInitialKategori = (): KategoriFilter => {
    if (typeof window === "undefined") return "";
    const hash = window.location.hash.slice(1);
    if (hash === "website" || hash === "akademik" || hash === "perangkat") {
      return hash;
    }
    return "";
  };

  const [kategoriFilter, setKategoriFilter] = useState<KategoriFilter>(getInitialKategori);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItem, setSelectedItem] = useState<CatalogItem | null>(null);
  const [addedItem, setAddedItem] = useState<string | null>(null);
  const { addItem } = useCart();

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const kelasOk = kelasFilter === null || item.kelas === kelasFilter;
      const jenisOk = jenisFilter === "semua" || item.jenis === jenisFilter;
      let kategoriOk = true;
      if (kategoriFilter) {
        kategoriOk = kategoriToJenis[kategoriFilter].includes(item.jenis);
      }
      const searchOk =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.deskripsi.toLowerCase().includes(searchQuery.toLowerCase()) ||
        jenisLabel[item.jenis].toLowerCase().includes(searchQuery.toLowerCase());
      return kelasOk && jenisOk && kategoriOk && searchOk;
    });
  }, [items, kelasFilter, jenisFilter, kategoriFilter, searchQuery]);

  const activeFilterClass = "bg-primary text-on-primary ring-primary";
  const inactiveFilterClass =
    "bg-white/60 text-zinc-600 ring-white/70 backdrop-blur-md hover:bg-white/90";

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-6 py-12">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">
          Katalog Produk Pembelajaran
        </h1>
        <p className="mt-2 text-zinc-600">
          {filteredItems.length} item ditampilkan. Sistem pembelajaran, media,
          RPP, worksheet, hingga web absensi.
        </p>
      </header>

      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Cari produk, jenis, atau deskripsi..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full rounded-xl border border-outline-variant/30 bg-white/60 px-4 py-2.5 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* Kategori Filter */}
      <section aria-label="Filter kategori" className="mb-4">
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setKategoriFilter("")}
            aria-pressed={kategoriFilter === ""}
            className={`rounded-full px-4 py-1.5 text-sm font-medium ring-1 transition-all ${
              kategoriFilter === "" ? activeFilterClass : inactiveFilterClass
            }`}
          >
            Semua Kategori
          </button>
          <button
            type="button"
            onClick={() => setKategoriFilter("website")}
            aria-pressed={kategoriFilter === "website"}
            className={`rounded-full px-4 py-1.5 text-sm font-medium ring-1 transition-all ${
              kategoriFilter === "website" ? activeFilterClass : inactiveFilterClass
            }`}
          >
            Website
          </button>
          <button
            type="button"
            onClick={() => setKategoriFilter("akademik")}
            aria-pressed={kategoriFilter === "akademik"}
            className={`rounded-full px-4 py-1.5 text-sm font-medium ring-1 transition-all ${
              kategoriFilter === "akademik" ? activeFilterClass : inactiveFilterClass
            }`}
          >
            Kebutuhan Akademik
          </button>
          <button
            type="button"
            onClick={() => setKategoriFilter("perangkat")}
            aria-pressed={kategoriFilter === "perangkat"}
            className={`rounded-full px-4 py-1.5 text-sm font-medium ring-1 transition-all ${
              kategoriFilter === "perangkat" ? activeFilterClass : inactiveFilterClass
            }`}
          >
            Perangkat Pembelajaran
          </button>
        </div>
      </section>

      <section aria-label="Filter katalog" className="mb-8 space-y-4">
        <div
          role="group"
          aria-label="Filter berdasarkan kelas"
          className="flex flex-wrap items-center gap-2"
        >
          {kelasOptions.map((kelas) => (
            <button
              key={kelas === null ? "semua-kelas" : `kelas-${kelas}`}
              type="button"
              onClick={() => setKelasFilter(kelas)}
              aria-pressed={kelasFilter === kelas}
              className={`rounded-full px-4 py-1.5 text-sm font-medium ring-1 transition-all ${
                kelasFilter === kelas
                  ? activeFilterClass
                  : inactiveFilterClass
              }`}
            >
              {kelas === null ? "Semua Kelas" : `Kelas ${kelas}`}
            </button>
          ))}
        </div>
        <div
          role="group"
          aria-label="Filter berdasarkan jenis"
          className="flex flex-wrap items-center gap-2"
        >
          {jenisOptions.map((jenis) => (
            <button
              key={jenis}
              type="button"
              onClick={() => setJenisFilter(jenis)}
              aria-pressed={jenisFilter === jenis}
              className={`rounded-full px-4 py-1.5 text-sm font-medium ring-1 transition-all ${
                jenisFilter === jenis ? activeFilterClass : inactiveFilterClass
              }`}
            >
              {jenis === "semua" ? "Semua" : jenisLabel[jenis]}
            </button>
          ))}
        </div>
      </section>

      {filteredItems.length > 0 ? (
        <div
          key={`${kelasFilter}-${jenisFilter}-${kategoriFilter}`}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filteredItems.map((item, index) => {
            const wide = index % 6 === 0;
            return (
              <div
                key={item.id}
                className={`animate-card-in ${wide ? "sm:col-span-2" : ""}`}
                style={{ animationDelay: `${index * 40}ms` }}
              >
                <CatalogCard
                  item={item}
                  wide={wide}
                  onDetail={() => setSelectedItem(item)}
                  onAddToCart={() => {
                    addItem({
                      id: item.id,
                      title: item.title,
                      harga: item.harga,
                      isJasa: item.isJasa,
                      mapel: item.mapel,
                    });
                    setAddedItem(item.title);
                    setTimeout(() => setAddedItem(null), 2000);
                  }}
                />
              </div>
            );
          })}
        </div>
      ) : (
        <p className="rounded-3xl border border-dashed border-zinc-300 bg-white/40 p-12 text-center text-zinc-500 backdrop-blur-md">
          Tidak ada item yang cocok dengan filter saat ini.
        </p>
      )}

      {addedItem && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 left-1/2 z-40 flex w-[calc(100%-3rem)] max-w-md -translate-x-1/2 items-center gap-4 rounded-2xl bg-white/70 p-4 shadow-xl ring-1 ring-white/60 backdrop-blur-xl"
        >
          <p className="flex-1 text-sm">
            <span className="font-medium">{addedItem}</span> ditambahkan ke keranjang.
          </p>
          <button
            type="button"
            onClick={() => setAddedItem(null)}
            className="text-sm font-medium underline underline-offset-2"
          >
            Tutup
          </button>
        </div>
      )}

      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-white/40 p-4 backdrop-blur-md"
          onClick={() => setSelectedItem(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`Detail ${selectedItem.title}`}
            className="glass-strong w-full max-w-lg rounded-3xl p-6 sm:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <h2 className="text-xl font-bold leading-snug">
                {selectedItem.title}
              </h2>
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                aria-label="Tutup dialog"
                className="rounded-full p-1 text-zinc-500 transition-colors hover:bg-white/80 hover:text-zinc-900"
              >
                <span aria-hidden className="text-2xl leading-none">
                  &times;
                </span>
              </button>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span
                className={`rounded-full px-3 py-1 text-xs font-medium ${jenisStyles[selectedItem.jenis]}`}
              >
                {jenisLabel[selectedItem.jenis]}
              </span>
              <span className="rounded-full bg-emerald-100/70 px-3 py-1 text-xs font-medium text-emerald-700 backdrop-blur-md">
                {selectedItem.kelas === null
                  ? "Semua Kelas"
                  : `Kelas ${selectedItem.kelas}`}
              </span>
              <span className="rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-zinc-600 backdrop-blur-md">
                {selectedItem.mapel}
              </span>
            </div>
            <p className="mt-4 leading-relaxed text-zinc-600">
              {selectedItem.deskripsi}
            </p>
            <p className="mt-4 text-lg font-semibold">
              {formatHarga(selectedItem.harga)}
            </p>
            <button
              type="button"
              onClick={() => setSelectedItem(null)}
              className="mt-6 w-full rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-on-primary transition-colors hover:bg-primary-container"
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
