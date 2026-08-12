import { BookOpen, Phone, InstagramLogo } from "@phosphor-icons/react/dist/ssr";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-[#213145]/70 backdrop-blur-2xl">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-8 px-4 py-16 md:grid-cols-3 md:px-6">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <BookOpen size={28} weight="fill" className="text-inverse-on-surface" />
            <span className="leading-tight">
              <span className="block font-headline text-base font-extrabold text-inverse-on-surface">
                {site.name}
              </span>
              <span className="block text-[10px] uppercase tracking-wider text-surface-variant">
                {site.tagline}
              </span>
            </span>
          </div>
          <p className="text-sm leading-relaxed text-surface-variant">
            Membantu kebutuhan digital, akademik, dan perangkat pembelajaran kamu jadi lebih mudah.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-base font-bold text-inverse-on-surface">
            Hubungi Kami
          </h3>
          <ul className="space-y-3">
            <li>
              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-surface-variant transition-colors hover:text-primary-fixed-dim"
              >
                <Phone size={16} /> {site.whatsappDisplay}
              </a>
            </li>
            <li>
              <a
                href={`https://instagram.com/${site.instagram.replace("@", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-surface-variant transition-colors hover:text-primary-fixed-dim"
              >
                <InstagramLogo size={16} /> @{site.instagram.replace("@", "")}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-base font-bold text-inverse-on-surface">
            Jam Operasional
          </h3>
          <ul className="space-y-3 text-sm text-surface-variant">
            <li>
              <span className="block font-semibold text-inverse-on-surface">
                {site.hours.weekday}
              </span>
              {site.hours.weekdayTime}
            </li>
            <li className="pt-2">
              <span className="block font-semibold text-inverse-on-surface">
                {site.hours.weekend}
              </span>
              {site.hours.weekendTime}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center">
        <p className="text-sm text-surface-variant">
          &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}