import type { Metadata } from "next";
import Catalog from "@/components/catalog/catalog";
import { catalogItems } from "@/data/catalog";

export const metadata: Metadata = {
  title: "Katalog",
  description: "Katalog media ajar dan perangkat pembelajaran untuk kelas 1 hingga kelas 6.",
};

export default function CatalogPage() {
  return <Catalog items={catalogItems} />;
}