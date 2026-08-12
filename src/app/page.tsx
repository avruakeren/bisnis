import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import AnimatedHeadline from "@/components/animated-headline";
import PreviewCard from "@/components/preview-card";
import ScrollStory from "@/components/scroll-story";
import { catalogItems, type CatalogJenis } from "@/data/catalog";
import { formatHarga, jenisLabel } from "@/components/catalog/format";

const contohItems = [
  catalogItems.find((item) => item.id === "sp-kelas-1")!,
  catalogItems.find((item) => item.id === "ma-kelas-1-bindo")!,
  catalogItems.find((item) => item.id === "wa-plus")!,
];

const productTypes: CatalogJenis[] = [
  "sistem-pembelajaran",
  "media-pembelajaran",
  "rpp",
  "worksheet",
  "web-absensi",
];

const productKeterangan: Record<CatalogJenis, string> = {
  "sistem-pembelajaran":
    "Paket lengkap semua mapel untuk satu semester. Bahan ajar sudah jadi, tinggal dipakai.",
  "media-pembelajaran":
    "Slide, kartu kata, dan video belajar bergambar agar anak lebih mudah memahami pelajaran.",
  rpp: "Rencana mengajar harian untuk guru, lengkap dan sesuai kurikulum yang berlaku.",
  worksheet:
    "Lembar latihan yang bisa dicetak, untuk mengulang pelajaran di rumah.",
  "web-absensi":
    "Aplikasi untuk mencatat kehadiran siswa secara otomatis dan rapi.",
};

const productImage: Record<CatalogJenis, string> = {
  "sistem-pembelajaran": "gina-sp",
  "media-pembelajaran": "gina-ma",
  rpp: "gina-rpp",
  worksheet: "gina-ws",
  "web-absensi": "gina-wa",
};

function minHarga(jenis: CatalogJenis): number {
  return Math.min(
    ...catalogItems
      .filter((item) => item.jenis === jenis)
      .map((item) => item.harga),
  );
}

const caraPesan = [
  {
    langkah: "Pilih produk",
    isi: "Pilih yang paling cocok dari katalog. Kalau masih ragu, tinggal tanya dulu lewat WhatsApp—kami jawab dengan ramah.",
    seed: "gina-step-1",
  },
  {
    langkah: "Isi form sederhana",
    isi: "Cukup isi nama, sekolah, dan kelas anak. Tidak panjang, tidak ribet.",
    seed: "gina-step-2",
  },
  {
    langkah: "Kirim ke WhatsApp",
    isi: "Ringkasan pesanan muncul otomatis, tinggal tekan kirim. Setelahnya kami yang lanjutkan.",
    seed: "gina-step-3",
  },
];

type SceneImageProps = {
  seed: string;
  alt: string;
};

function SceneImage({ seed, alt }: SceneImageProps) {
  return (
    <Image
      src={`https://picsum.photos/seed/${seed}/1400/900`}
      alt={alt}
      fill
      className="object-cover"
      sizes="100vw"
      priority
    />
  );
}

type SceneProps = {
  children: React.ReactNode;
  seed: string;
  alt: string;
};

function Scene({ children, seed, alt }: SceneProps) {
  return (
    <div className="scene-content mx-auto flex h-full w-full max-w-6xl items-center px-4 pt-20 pb-6 sm:px-6 sm:py-10">
      <div className="relative flex w-full items-end overflow-hidden rounded-[2.5rem] border border-white/10 bg-zinc-900 shadow-2xl shadow-black/30" style={{ height: "calc(100vh - 5rem)" }}>
        <div className="scene-image absolute inset-0">
          <SceneImage seed={seed} alt={alt} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />
        </div>
        <div className="relative z-10 w-full p-6 pb-8 sm:p-10 sm:pb-12">
          <div className="max-w-xl">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const steps = [
    {
      label: "Perkenalan",
      key: "perkenalan",
      node: (
        <Scene seed="gina-hero" alt="Ilustrasi bahan ajar untuk SD">
          <p className="text-sm font-medium text-blue-300">
            Selamat datang di website Gina
          </p>
          <AnimatedHeadline />
          <p className="mt-6 text-xl leading-relaxed text-white/80">
            Website ini membantu orang tua dan guru SD menemukan bahan belajar
            untuk anak: media ajar, RPP, lembar kerja, sampai web absensi.
            Semua sudah jadi—cukup dipakai, tidak perlu membuat dari nol.
          </p>
          <Link
            href="/catalog"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-7 py-3.5 text-base font-semibold text-white ring-1 ring-white/30 backdrop-blur-md transition-all hover:bg-white/30"
          >
            Order sekarang
            <ArrowRight size={18} weight="bold" />
          </Link>
          <p className="mt-6 text-sm text-white/50">
            Gulir ke bawah untuk mengenal produk kami.
          </p>
        </Scene>
      ),
    },
    {
      label: "Produk",
      key: "produk",
      node: (
        <Scene seed="gina-produk" alt="Berbagai jenis produk pembelajaran">
          <p className="text-sm font-medium text-blue-300">Produk</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Kami punya lima jenis produk
          </h2>
          <p className="mt-4 text-xl leading-relaxed text-white/80">
            Akan kami kenalkan satu per satu. Tinggal gulir pelan-pelan, tidak
            perlu buru-buru.
          </p>
          <p className="mt-6 text-sm text-white/50">
            Gulir ke bawah untuk mengenal tiap produk.
          </p>
        </Scene>
      ),
    },
    ...productTypes.map((jenis) => {
      const contoh = catalogItems.find((item) => item.jenis === jenis)!;
      return {
        key: jenis,
        label: jenisLabel[jenis],
node: (
          <Scene
              seed={productImage[jenis]}
              alt={`Ilustrasi ${jenisLabel[jenis]}`}
            >
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {jenisLabel[jenis]}
            </h2>
            <p className="mt-4 text-xl leading-relaxed text-white/80">
              {productKeterangan[jenis]}
            </p>
            <p className="mt-6 text-sm text-white/50">
              Mulai {formatHarga(minHarga(jenis))}
            </p>
            <p className="mt-2 text-sm text-white/50">Contoh: {contoh.title}</p>
            <Link
              href="/catalog"
              className="inline-block text-sm font-medium text-blue-300 transition-colors hover:text-blue-200"
            >
              Lihat di katalog →
            </Link>
          </Scene>
        ),
      };
    }),
    {
      key: "contoh",
      label: "Contoh",
      node: (
<div className="scene-content mx-auto flex h-full w-full max-w-6xl items-center px-4 pt-20 pb-6 sm:px-6 sm:py-10">
          <div className="relative flex w-full flex-col justify-end overflow-hidden rounded-[2.5rem] border border-white/10 bg-zinc-900 shadow-2xl shadow-black/30" style={{ height: "calc(100vh - 5rem)" }}>
            <div className="scene-image absolute inset-0 bg-gradient-to-br from-zinc-800 via-zinc-900 to-zinc-950" />
            <div className="relative z-10 flex flex-col px-6 pb-8 sm:px-10 sm:pb-12">
              <div className="max-w-xl">
                <p className="text-sm font-medium text-blue-300">Contoh produk</p>
                <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Ini contoh produknya
                </h2>
                <p className="mt-4 text-xl leading-relaxed text-white/70">
                  Supaya lebih kebayang, berikut tiga contoh yang ada di katalog.
                </p>
              </div>
              <div className="mt-8 grid w-full gap-4 sm:grid-cols-3">
                {contohItems.map((item) => (
                  <PreviewCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      key: "cara-order",
      label: "Cara order",
      node: (
        <Scene seed="gina-order" alt="Ilustrasi cara memesan">
          <p className="text-sm font-medium text-blue-300">Cara memesan</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Cara memesannya gampang
          </h2>
          <p className="mt-4 text-xl leading-relaxed text-white/80">
            Tidak perlu aplikasi khusus, tidak perlu bayar online. Tiga
            langkah, kami uraikan satu-satu.
          </p>
          <p className="mt-6 text-sm text-white/50">
            Gulir ke bawah untuk melihat langkah pertama.
          </p>
        </Scene>
      ),
    },
    ...caraPesan.map((item, index) => ({
      key: `langkah-${index + 1}`,
      label: `Langkah ${index + 1}`,
      node: (
        <Scene
          seed={item.seed}
          alt={`Ilustrasi langkah ${index + 1}`}
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 text-base font-bold text-white lg:mx-0">
            {index + 1}
          </span>
          <h2 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {item.langkah}
          </h2>
          <p className="mt-4 text-xl leading-relaxed text-white/80">
            {item.isi}
          </p>
        </Scene>
      ),
    })),
    {
      key: "selesai",
      label: "Selesai",
      node: (
        <Scene seed="gina-done" alt="Ilustrasi pesanan selesai">
          <p className="text-sm font-medium text-blue-300">Siap memesan</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Siap? Pesan sekarang ya
          </h2>
          <p className="mt-4 text-xl leading-relaxed text-white/80">
            Setiap produk bisa dipesan lewat WhatsApp. Tidak ada yang dipungut
            biaya tambahan.
          </p>
          <div className="mt-8 flex flex-col gap-3">
            <span className="inline-flex justify-center">
              <Link
                href="/order"
                className="inline-flex items-center gap-2 rounded-xl bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700 lg:inline-flex"
              >
                Mulai pesan sekarang
                <ArrowDown size={16} weight="bold" />
              </Link>
            </span>
            <Link
              href="/catalog"
              className="text-sm font-medium text-blue-300 transition-colors hover:text-blue-200"
            >
              Atau lihat katalog lengkap →
            </Link>
          </div>
        </Scene>
      ),
    },
  ];

  return <ScrollStory steps={steps} />;
}