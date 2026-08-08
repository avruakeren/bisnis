import type { CatalogItem } from "@/data/catalog";

export const jenisLabel: Record<CatalogItem["jenis"], string> = {
  "sistem-pembelajaran": "Sistem Pembelajaran",
  "media-pembelajaran": "Media Pembelajaran",
  rpp: "RPP",
  worksheet: "Worksheet",
  "web-absensi": "Web Absensi",
};

export const jenisStyles: Record<CatalogItem["jenis"], string> = {
  "sistem-pembelajaran": "bg-violet-100/70 text-violet-700",
  "media-pembelajaran": "bg-sky-100/70 text-sky-700",
  rpp: "bg-amber-100/70 text-amber-700",
  worksheet: "bg-teal-100/70 text-teal-700",
  "web-absensi": "bg-rose-100/70 text-rose-700",
};

export function formatHarga(harga: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(harga);
}
