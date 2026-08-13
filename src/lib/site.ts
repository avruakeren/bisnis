export const site = {
  name: "studia.co",
  tagline: "Digital Education Agency",
  description:
    "Jasa digital, akademik, dan perangkat pembelajaran yang dapat disesuaikan dengan kebutuhanmu.",
  whatsapp: "62895626747960",
  whatsappDisplay: "0895 6267 4796",
  instagram: "studiadotco",
  email: "sinibantu.id@gmail.com",
  hours: {
    weekday: "Senin - Sabtu",
    weekdayTime: "08.00 - 20.00 WIB",
    weekend: "Minggu & Hari Libur",
    weekendTime: "By Appointment",
  },
};

export function waLink(message?: string): string {
  const base = `https://wa.me/${site.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
