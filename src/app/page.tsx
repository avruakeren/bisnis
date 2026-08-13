import Image from "next/image";
import Link from "next/link";
import {
  ChatsCircle,
  ChatCircle,
  ArrowDown,
  ArrowRight,
  Check,
  CheckCircle,
  CreditCard,
  Clock,
  Globe,
  GraduationCap,
  Notebook,
  Swatches,
  Tag,
  ClipboardText,
  Laptop,
  SealCheck,
} from "@phosphor-icons/react/dist/ssr";
import { site, waLink } from "@/lib/site";
import MagneticButton from "@/components/animations/magnetic-button";
import Marquee from "@/components/animations/marquee";
import RotatingWord from "@/components/animations/rotating-word";
import StaggerReveal from "@/components/animations/stagger-reveal";
import TiltCard from "@/components/animations/tilt-card";

const heroBadges = [
  { icon: CheckCircle, title: "Bisa Request", subtitle: "Sesuai Kebutuhan" },
  { icon: CreditCard, title: "Harga Bersahabat", subtitle: "Terjangkau & Adil" },
  { icon: Clock, title: "menunggu dibuka blokiran repa", subtitle: "Sedang diproses" },
];

const services = [
  {
    icon: Globe,
    title: "Website",
    subtitle: "Website sesuai kebutuhanmu",
    accent: "primary",
    items: [
      "Personal Website",
      "Web Store",
      "Portofolio Online",
      "Website Absensi",
      "Website Sekolah",
      "Custom Website",
    ],
    href: "/catalog#website",
    external: false,
  },
  {
    icon: GraduationCap,
    title: "Kebutuhan Akademik",
    subtitle: "Bantu rapikan dan selesaikan kebutuhan akademikmu",
    accent: "green",
    items: [
      "Makalah",
      "Laporan",
      "Proposal",
      "PPT",
      "Tugas Harian",
      "Perapihan Format Penulisan",
    ],
    href: "/catalog#akademik",
    external: false,
  },
  {
    icon: Notebook,
    title: "Perangkat Pembelajaran",
    subtitle: "Perangkat pembelajaran siap pakai dan dapat disesuaikan",
    accent: "orange",
    items: [
      "RPP / Modul Ajar",
      "Bahan Ajar",
      "Media Pembelajaran Interaktif",
      "Worksheet",
    ],
    href: "/catalog",
    external: false,
  },
];

const reasons = [
  {
    icon: Swatches,
    title: "Bisa Request",
    desc: "Layanan disesuaikan dengan kebutuhan, bukan sekadar template.",
  },
  {
    icon: Tag,
    title: "Harga Bersahabat",
    desc: "Harga disesuaikan dengan jenis dan tingkat kebutuhan yang kamu mau.",
  },
  {
    icon: ChatsCircle,
    title: "Konsultasi Dulu",
    desc: "Belum yakin butuh apa? Konsultasikan kebutuhanmu terlebih dahulu.",
  },
  {
    icon: CheckCircle,
    title: "Praktis & Terarah",
    desc: "Sampaikan kebutuhan → diskusikan → kerjakan → revisi → selesai.",
  },
];

const steps = [
  {
    no: "01",
    icon: ChatCircle,
    title: "Konsultasi",
    desc: "Ceritakan kebutuhan dan detail yang kamu inginkan kepada kami.",
    color: "primary",
  },
  {
    no: "02",
    icon: ClipboardText,
    title: "Tentukan Layanan",
    desc: "Kami bantu menentukan layanan dan estimasi harga yang sesuai.",
    color: "green",
  },
  {
    no: "03",
    icon: Laptop,
    title: "Pengerjaan",
    desc: "Pesanan dikerjakan sesuai kesepakatan dengan hasil yang rapi dan berkualitas.",
    color: "orange",
  },
  {
    no: "04",
    icon: SealCheck,
    title: "Revisi & Selesai",
    desc: "Cek hasil, lakukan revisi bila diperlukan, lalu terima hasil akhirmu.",
    color: "purple",
  },
];

const accentMap: Record<string, { bg: string; text: string; btn: string; dot: string }> = {
  primary: { bg: "bg-primary-fixed/25", text: "text-primary", btn: "bg-primary text-on-primary hover:bg-primary-container", dot: "text-primary" },
  green: { bg: "bg-green-100", text: "text-green-700", btn: "bg-green-600 text-white hover:bg-green-700", dot: "text-green-600" },
  orange: { bg: "bg-orange-100", text: "text-orange-600", btn: "bg-orange-500 text-white hover:bg-orange-600", dot: "text-orange-500" },
};

const stepColor: Record<string, { num: string; bg: string; text: string }> = {
  primary: { num: "text-primary", bg: "bg-primary-fixed/40", text: "text-primary" },
  green: { num: "text-green-600", bg: "bg-green-50", text: "text-green-700" },
  orange: { num: "text-orange-500", bg: "bg-orange-50", text: "text-orange-600" },
  purple: { num: "text-purple-600", bg: "bg-purple-50", text: "text-purple-700" },
};

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-[1280px] px-4 py-12 md:px-6 md:py-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="relative z-10 flex flex-col gap-6">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Bingung dengan Tugas, Website, atau Perangkat Pembelajaran?
            </span>
            <h1 className="font-headline text-4xl font-extrabold leading-[1.1] tracking-tight text-on-background md:text-5xl">
              Kami Bantu
              <br />
              <span className="text-primary">
                <RotatingWord />
              </span>
            </h1>
            <p className="max-w-lg text-lg leading-relaxed text-on-surface-variant">
              Jasa digital, akademik, dan perangkat pembelajaran yang dapat
              disesuaikan dengan kebutuhanmu.
            </p>
            <div className="mt-2 flex flex-col gap-4 sm:flex-row">
              <MagneticButton>
                <a
                  href={waLink(`Halo ${site.name}, saya mau konsultasi gratis.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-on-primary shadow-md transition-all hover:bg-primary-container hover:shadow-lg active:scale-95"
                >
                  <ChatsCircle size={20} weight="fill" />
                  Konsultasi Gratis
                </a>
              </MagneticButton>
              <MagneticButton>
                <Link
                  href="/#layanan"
                  className="flex items-center justify-center gap-2 rounded-lg border border-primary px-8 py-3 text-sm font-semibold text-primary transition-all hover:bg-primary/5 active:scale-95"
                >
                  Lihat Layanan
                  <ArrowDown size={18} />
                </Link>
              </MagneticButton>
            </div>
            <div className="mt-8 flex flex-wrap gap-6 border-t border-outline-variant/30 pt-6">
              {heroBadges.map((badge) => (
                <div key={badge.title} className="flex items-center gap-2">
                  <div className="rounded-full bg-primary-fixed/30 p-2 text-primary">
                    <badge.icon size={16} weight="fill" />
                  </div>
                  <div>
                    <p className="text-xs font-bold">{badge.title}</p>
                    <p className="text-xs text-on-surface-variant">{badge.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative aspect-square rotate-2 overflow-hidden rounded-2xl border-4 border-white bg-surface-container-low shadow-2xl transition-transform duration-500 hover:rotate-0">
            <Image
              src="https://picsum.photos/seed/studia-hero/900/900"
              alt="Ilustrasi layanan digital, akademik, dan perangkat pembelajaran"
              width={900}
              height={900}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="layanan" className="bg-surface-container-low/50 py-20">
        <div className="mx-auto max-w-[1280px] px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="flex items-center justify-center gap-4 font-headline text-3xl font-bold text-primary">
              <span className="h-[2px] w-12 bg-primary" />
              Layanan Kami
              <span className="h-[2px] w-12 bg-primary" />
            </h2>
            <p className="mt-4 text-base text-on-surface-variant">
              Pilih layanan yang kamu butuhkan, bisa juga request sesuai kebutuhan!
            </p>
          </div>
          <StaggerReveal className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {services.map((service) => {
              const accent = accentMap[service.accent];
              return (
                <TiltCard
                  key={service.title}
                  className="glass-card flex h-full flex-col rounded-xl p-6 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="mb-6 flex items-center gap-4">
                    <div className={`flex h-16 w-16 items-center justify-center rounded-lg ${accent.bg} ${accent.text}`}>
                      <service.icon size={32} />
                    </div>
                    <div>
                      <h3 className={`font-headline text-xl font-bold ${accent.text}`}>
                        {service.title}
                      </h3>
                      <p className="text-xs text-on-surface-variant">{service.subtitle}</p>
                    </div>
                  </div>
                  <ul className="mb-8 flex-grow space-y-3">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-base text-on-background">
                        <Check size={16} weight="bold" className={`${accent.dot}`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  {service.external ? (
                    <a
                      href={service.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`mt-auto flex items-center justify-center gap-2 rounded-lg py-3 text-sm font-semibold transition-colors ${accent.btn}`}
                    >
                      Lihat Detail <ArrowRight size={16} />
                    </a>
                  ) : (
                    <Link
                      href={service.href}
                      className={`mt-auto flex items-center justify-center gap-2 rounded-lg py-3 text-sm font-semibold transition-colors ${accent.btn}`}
                    >
                      Lihat Detail <ArrowRight size={16} />
                    </Link>
                  )}
                </TiltCard>
              );
            })}
          </StaggerReveal>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mx-auto max-w-[1280px] border-b border-outline-variant/20 px-4 py-12 md:px-6">
        <div className="mb-10 text-center">
          <h2 className="flex items-center justify-center gap-4 font-headline text-3xl font-bold text-primary">
            <span className="h-4 w-4 rounded-full bg-primary/20" />
            Kenapa Pilih Kami?
            <span className="h-4 w-4 rounded-full bg-primary/20" />
          </h2>
        </div>
        <StaggerReveal className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <div key={reason.title} className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-fixed text-primary shadow-sm">
                <reason.icon size={24} />
              </div>
              <div>
                <h4 className="mb-1 text-base font-bold">{reason.title}</h4>
                <p className="text-xs text-on-surface-variant">{reason.desc}</p>
              </div>
            </div>
          ))}
        </StaggerReveal>
      </section>

      {/* How It Works */}
      <section id="cara-kerja" className="mx-auto max-w-[1280px] px-4 py-20 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold text-on-background">
            Cara Kerja
          </h2>
        </div>
        <StaggerReveal className="relative flex flex-col items-stretch gap-4 lg:flex-row lg:justify-between">
          <div className="absolute left-0 top-1/2 hidden h-[2px] w-full -translate-y-1/2 bg-outline-variant/30 lg:block" />
          {steps.map((step, index) => {
            const color = stepColor[step.color];
            return (
              <div key={step.no} className="glass-card relative z-10 flex w-full flex-col items-center rounded-xl p-6 text-center lg:w-1/4">
                <div className={`mb-2 text-2xl font-bold ${color.num}`}>{step.no}</div>
                <div className={`mb-4 flex h-16 w-16 items-center justify-center rounded-full ${color.bg} ${color.text}`}>
                  <step.icon size={28} />
                </div>
                <h4 className={`mb-2 text-base font-bold ${color.text}`}>{step.title}</h4>
                <p className="text-xs text-on-surface-variant">{step.desc}</p>
                {index < steps.length - 1 && (
                  <ArrowRight size={20} className="mt-4 text-outline-variant lg:hidden" />
                )}
              </div>
            );
          })}
        </StaggerReveal>
      </section>

      {/* Service marquee */}
      <Marquee />

      {/* CTA */}
      <section className="mx-auto mb-20 max-w-[1280px] px-4 md:px-6">
        <div className="relative flex flex-col items-center justify-between overflow-hidden rounded-2xl bg-primary/80 p-8 shadow-xl backdrop-blur-2xl md:flex-row md:p-12">
          <div className="absolute right-0 top-0 h-64 w-64 translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-48 w-48 -translate-x-1/2 translate-y-1/2 rounded-full bg-black/10 blur-2xl" />
          <div className="relative z-10 flex items-center gap-6">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border-4 border-white bg-white/20 text-white">
              <ChatsCircle size={36} weight="fill" />
            </div>
            <div>
              <h3 className="mb-2 font-headline text-2xl font-bold text-white">
                Masih bingung atau mau tanya dulu?
              </h3>
              <p className="text-base text-white/90">
                Konsultasi gratis, tanpa komitmen. Ceritakan kebutuhanmu sekarang!
              </p>
            </div>
          </div>
          <MagneticButton>
            <a
              href={waLink(`Halo ${site.name}, saya mau konsultasi gratis.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-sm font-semibold text-primary shadow-lg transition-all hover:bg-surface-container-high active:scale-95 md:mt-0 md:w-auto"
            >
              <ChatsCircle size={20} weight="fill" />
              Konsultasi Gratis
            </a>
          </MagneticButton>
        </div>
      </section>
    </>
  );
}
