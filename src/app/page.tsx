import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import AnimatedHeadline from "@/components/animated-headline";
import PreviewCard from "@/components/preview-card";
import ScrollReveal from "@/components/scroll-reveal";
import ShowcaseSection from "@/components/showcase-section";
import { catalogItems } from "@/data/catalog";

const heroItem = catalogItems.find((item) => item.id === "sp-kelas-1")!;

const showcaseItems = [
  catalogItems.find((item) => item.id === "ma-kelas-1-bindo")!,
  catalogItems.find((item) => item.id === "sp-kelas-2")!,
  catalogItems.find((item) => item.id === "ma-kelas-3-ipa")!,
  catalogItems.find((item) => item.id === "rpp-kelas-4-ipa")!,
  catalogItems.find((item) => item.id === "ws-kelas-5")!,
  catalogItems.find((item) => item.id === "ma-kelas-6-ipa")!,
];

const webAbsensi = catalogItems.find((item) => item.id === "wa-plus")!;

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <section className="mx-auto grid w-full max-w-5xl items-center gap-12 px-6 pb-24 pt-20 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <AnimatedHeadline />
          <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-zinc-500">
            Lima jenis produk untuk guru SD: sistem pembelajaran, media ajar,
            RPP, worksheet, dan web absensi.
          </p>
          <Link
            href="/catalog"
            className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-blue-500 transition-colors hover:text-blue-600"
          >
            Lihat katalog
            <ArrowRight size={15} weight="bold" />
          </Link>
        </div>
        <div className="animate-card-in w-full max-w-sm justify-self-center">
          <PreviewCard item={heroItem} />
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-8">
        <p className="animate-card-in text-center text-sm text-zinc-400 [animation-delay:150ms]">
          Sistem pembelajaran · Media ajar · RPP · Worksheet · Web absensi
        </p>
      </section>

      <section aria-label="Contoh produk" className="pb-8">
        <ScrollReveal className="mx-auto max-w-5xl px-6 pb-6 pt-16">
          <h2 className="text-center text-2xl font-semibold tracking-tight sm:text-3xl">
            Satu contoh untuk tiap kelas
          </h2>
          <p className="mx-auto mt-3 max-w-[58ch] text-center text-zinc-500">
            Setiap produk ditampilkan satu per satu. Semua tersedia di katalog
            untuk kelas 1 sampai 6.
          </p>
        </ScrollReveal>
        <ShowcaseSection item={showcaseItems[0]} />
        <ShowcaseSection item={showcaseItems[1]} flip tint="bg-white/40" />
        <ShowcaseSection item={showcaseItems[2]} />
        <ShowcaseSection item={showcaseItems[3]} flip tint="bg-blue-50/40" />
        <ShowcaseSection item={showcaseItems[4]} />
        <ShowcaseSection item={showcaseItems[5]} flip tint="bg-white/40" />
      </section>

      <ScrollReveal className="bg-white/40 py-24 backdrop-blur-sm">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-sm font-medium text-zinc-400">Web Absensi</h2>
            <p className="mt-3 leading-relaxed text-zinc-500">
              {webAbsensi.deskripsi}
            </p>
            <Link
              href="/catalog"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-blue-500 transition-colors hover:text-blue-600"
            >
              Lihat katalog
              <ArrowRight size={15} weight="bold" />
            </Link>
          </div>
          <div className="mx-auto mt-10 max-w-3xl">
            <PreviewCard item={webAbsensi} />
          </div>        </div>
      </ScrollReveal>

      <section className="mx-auto max-w-5xl px-6 py-24 text-center">
        <p className="text-zinc-500">Setiap produk bisa dipesan lewat WhatsApp.</p>
        <div className="mt-6 flex items-center justify-center gap-8 text-sm">
          <Link
            href="/catalog"
            className="font-medium text-blue-500 transition-colors hover:text-blue-600"
          >
            Lihat katalog
          </Link>
          <Link
            href="/order"
            className="font-medium text-blue-500 transition-colors hover:text-blue-600"
          >
            Buat pesanan
          </Link>
        </div>
      </section>
    </div>
  );
}
