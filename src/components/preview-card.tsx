import Image from "next/image";
import Link from "next/link";
import type { CatalogItem } from "@/data/catalog";
import { formatHarga, jenisLabel, jenisStyles } from "./catalog/format";

type PreviewCardProps = {
  item: CatalogItem;
};

export default function PreviewCard({ item }: PreviewCardProps) {
  return (
    <Link
      href="/catalog"
      className="group block overflow-hidden rounded-3xl bg-white/55 shadow-[0_8px_30px_rgba(0,0,0,0.05)] ring-1 ring-white/60 backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:shadow-[0_16px_44px_rgba(0,0,0,0.09)]"
    >
      <div className="relative overflow-hidden">
        <Image
          src={`https://picsum.photos/seed/${item.id}/800/500`}
          alt={item.title}
          width={800}
          height={500}
          className="aspect-[16/10] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
        />
        <div className="absolute left-4 top-4 flex flex-wrap items-center gap-2">
          <span
            className={`rounded-full px-3 py-1 text-xs font-medium backdrop-blur-md ${jenisStyles[item.jenis]}`}
          >
            {jenisLabel[item.jenis]}
          </span>
          <span className="rounded-full bg-emerald-100/70 px-3 py-1 text-xs font-medium text-emerald-700 backdrop-blur-md">
            {item.kelas === null ? "Semua Kelas" : `Kelas ${item.kelas}`}
          </span>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white/80 to-transparent" />
      </div>
      <div className="relative z-10 -mt-10 px-5">
        <h3 className="text-xl font-bold leading-snug tracking-tight text-zinc-900 sm:text-2xl">
          {item.title}
        </h3>
      </div>
      <div className="flex items-center justify-between gap-4 px-5 pb-5 pt-3">
        <p className="text-sm text-zinc-500">{item.mapel}</p>
        <p className="shrink-0 font-semibold text-zinc-900">
          {formatHarga(item.harga)}
        </p>
      </div>
    </Link>
  );
}
