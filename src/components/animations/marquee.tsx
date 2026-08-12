import { Star } from "@phosphor-icons/react/dist/ssr";

const items = [
  "Website",
  "Web Store",
  "Makalah",
  "RPP",
  "Media Ajar",
  "Worksheet",
  "Web Absensi",
  "PPT",
  "Proposal",
];

function Row({ ariaHidden }: { ariaHidden: boolean }) {
  return (
    <div
      aria-hidden={ariaHidden}
      className="flex shrink-0 items-center gap-10 pr-10"
    >
      {items.map((item) => (
        <span
          key={item}
          className="flex items-center gap-10 whitespace-nowrap font-headline text-2xl font-extrabold uppercase tracking-tight text-primary/60"
        >
          {item}
          <Star size={18} weight="fill" className="text-primary/35" />
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <section
      aria-label="Layanan populer"
      className="overflow-hidden border-y border-white/30 bg-white/30 py-6 backdrop-blur-md"
    >
      <div className="marquee-track">
        <Row ariaHidden={false} />
        <Row ariaHidden={true} />
      </div>
    </section>
  );
}