export const site = {
  name: "studia.co",
  tagline: "Digital Education Agency",
  description:
    "Jasa digital, akademik, dan perangkat pembelajaran yang dapat disesuaikan dengan kebutuhanmu.",
  whatsapp: "6285778078397",
  whatsappDisplay: "0857 7807 8397",
  instagram: "studia_co",
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
