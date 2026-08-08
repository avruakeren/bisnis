import catalogData from "./catalog.json";

export type CatalogJenis =
  | "sistem-pembelajaran"
  | "media-pembelajaran"
  | "rpp"
  | "worksheet"
  | "web-absensi";

export type CatalogItem = {
  id: string;
  title: string;
  jenis: CatalogJenis;
  kelas: number | null;
  mapel: string;
  deskripsi: string;
  harga: number;
};

export const catalogItems = catalogData as CatalogItem[];
