import Image from "next/image";
import type { CatalogItem } from "@/data/catalog";
import { formatHarga, jenisLabel, jenisStyles } from "./format";

type CatalogCardProps = {
  item: CatalogItem;
  onDetail: () => void;
  onAddToCart: () => void;
  wide?: boolean;
};

export default function CatalogCard({
  item,
  onDetail,
  onAddToCart,
  wide = false,
}: CatalogCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white/55 shadow-[0_8px_30px_rgba(0,0,0,0.05)] ring-1 ring-white/60 backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:shadow-[0_16px_44px_rgba(0,0,0,0.09)]">
      <div className="relative overflow-hidden">
        <Image
          src={`https://picsum.photos/seed/${item.id}/800/500`}
          alt={item.title}
          width={800}
          height={500}
          className={`w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05] ${
            wide ? "aspect-[16/7]" : "aspect-[16/10]"
          }`}
        />
        <div className="absolute left-4 top-4 flex flex-wrap items-center gap-2">
          <span
            className={`rounded-full px-3 py-1 text-xs font-medium backdrop-blur-md ${jenisStyles[item.jenis]}`}
          >
            {jenisLabel[item.jenis]}
          </span>
          {item.isJasa && (
            <span className="rounded-full bg-yellow-100/70 px-3 py-1 text-xs font-medium text-yellow-700 backdrop-blur-md">
              Jasa
            </span>
          )}
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
      <div className="flex flex-1 flex-col px-5 pb-5 pt-3">
        <p className="text-sm text-zinc-500">{item.mapel}</p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-600 line-clamp-3">
          {item.deskripsi}
        </p>
        <div className="mt-4 flex items-center justify-between gap-4">
          <p className="font-semibold text-zinc-900">
            {formatHarga(item.harga)}
          </p>
        </div>
        <div className="mt-4 flex gap-3">
          <button
            type="button"
            onClick={onDetail}
            className="flex-1 rounded-xl bg-white/60 px-4 py-2 text-sm font-medium text-zinc-800 ring-1 ring-white/70 backdrop-blur-md transition-colors hover:bg-white/90"
          >
            Lihat Detail
          </button>
          <button
            type="button"
            onClick={onAddToCart}
            className="flex-1 rounded-xl bg-primary px-4 py-2 text-sm font-medium text-on-primary transition-colors hover:bg-primary-container"
          >
            + Keranjang
          </button>
        </div>
      </div>
    </article>
  );
}
