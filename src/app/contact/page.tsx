import { Phone, InstagramLogo, Envelope, Clock } from "@phosphor-icons/react/dist/ssr";
import { site, waLink } from "@/lib/site";

export const metadata = {
  title: `Kontak - ${site.name}`,
};

export default function Contact() {
  return (
    <div className="mx-auto flex max-w-3xl flex-1 flex-col px-4 py-20 md:px-6">
      <div className="glass-panel rounded-2xl p-8 sm:p-10">
        <h1 className="font-headline text-3xl font-bold tracking-tight text-on-background">
          Hubungi Kami
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-on-surface-variant">
          Punya pertanyaan atau mau pesan? Ceritakan kebutuhanmu lewat
          WhatsApp—kami jawab dengan ramah.
        </p>

        <div className="mt-8 flex flex-col gap-4">
          <a
            href={waLink(`Halo ${site.name}, saya mau bertanya.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-lg border border-outline-variant/40 bg-surface-container-lowest px-4 py-3 text-on-surface transition-colors hover:border-primary/40 hover:bg-primary-fixed/20"
          >
            <Phone size={20} className="text-primary" />
            <span>
              <span className="block text-xs text-on-surface-variant">WhatsApp / Telepon</span>
              <span className="font-semibold">{site.whatsappDisplay}</span>
            </span>
          </a>
          <a
            href={`https://instagram.com/${site.instagram.replace("@", "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-lg border border-outline-variant/40 bg-surface-container-lowest px-4 py-3 text-on-surface transition-colors hover:border-primary/40 hover:bg-primary-fixed/20"
          >
            <InstagramLogo size={20} className="text-primary" />
            <span>
              <span className="block text-xs text-on-surface-variant">Instagram</span>
              <span className="font-semibold">@{site.instagram.replace("@", "")}</span>
            </span>
          </a>
          <a
            href={`mailto:${site.email}`}
            className="flex items-center gap-3 rounded-lg border border-outline-variant/40 bg-surface-container-lowest px-4 py-3 text-on-surface transition-colors hover:border-primary/40 hover:bg-primary-fixed/20"
          >
            <Envelope size={20} className="text-primary" />
            <span>
              <span className="block text-xs text-on-surface-variant">Email</span>
              <span className="font-semibold">{site.email}</span>
            </span>
          </a>
          <div className="flex items-center gap-3 rounded-lg border border-outline-variant/40 bg-surface-container-lowest px-4 py-3">
            <Clock size={20} className="text-primary" />
            <span>
              <span className="block text-xs text-on-surface-variant">{site.hours.weekday}</span>
              <span className="font-semibold">{site.hours.weekdayTime}</span>
            </span>
          </div>
        </div>

        <a
          href={waLink(`Halo ${site.name}, saya mau konsultasi gratis.`)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-on-primary shadow-md transition-all hover:bg-primary-container active:scale-95"
        >
          Konsultasi Gratis
        </a>
      </div>
    </div>
  );
}
