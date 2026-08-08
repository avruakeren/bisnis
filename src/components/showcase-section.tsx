import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import type { CatalogItem } from "@/data/catalog";
import PreviewCard from "./preview-card";
import ScrollReveal from "./scroll-reveal";

type ShowcaseSectionProps = {
  item: CatalogItem;
  flip?: boolean;
  tint?: string;
};

export default function ShowcaseSection({
  item,
  flip = false,
  tint = "",
}: ShowcaseSectionProps) {
  const textBlock = (
    <div className={flip ? "lg:order-1" : "lg:order-2"}>
      <h2 className="text-sm font-medium text-zinc-400">
        {item.kelas === null ? "Semua Kelas" : `Kelas ${item.kelas}`}
      </h2>
      <p className="mt-4 max-w-[52ch] leading-relaxed text-zinc-500">
        {item.deskripsi}
      </p>
      <Link
        href="/catalog"
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-blue-500 transition-colors hover:text-blue-600"
      >
        Lihat katalog
        <ArrowRight size={15} weight="bold" />
      </Link>
    </div>
  );

  const cardBlock = (
    <div className={flip ? "lg:order-2" : "lg:order-1"}>
      <PreviewCard item={item} />
    </div>
  );

  return (
    <ScrollReveal className={`py-24 ${tint}`}>
      <div className="mx-auto grid max-w-5xl items-center gap-12 px-6 lg:grid-cols-2">
        {cardBlock}
        {textBlock}
      </div>
    </ScrollReveal>
  );
}
