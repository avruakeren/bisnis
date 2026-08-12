import { site } from "@/lib/site";

export const metadata = {
  title: `Tentang - ${site.name}`,
};

export default function About() {
  return (
    <div className="mx-auto flex max-w-3xl flex-1 flex-col px-4 py-20 md:px-6">
      <div className="glass-panel rounded-2xl p-8 sm:p-10">
        <h1 className="font-headline text-3xl font-bold tracking-tight text-on-background">
          Tentang {site.name}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-on-surface-variant">
          {site.name} adalah {site.tagline.toLowerCase()} yang membantu
          kebutuhan digital, akademik, dan perangkat pembelajaran. Mulai dari
          website, makalah, RPP, media ajar, worksheet, hingga web absensi
          sekolah—semua disesuaikan dengan kebutuhanmu.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-on-surface-variant">
          Kami percaya setiap kebutuhan itu unik. Karena itu layanan kami bisa
          diminta sesuai keinginan, dengan harga yang bersahabat dan pengerjaan
          yang rapi.
        </p>
      </div>
    </div>
  );
}
