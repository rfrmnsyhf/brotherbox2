export const site = {
  name: "Brotherbox",
  legalName: "Brotherbox Barbershop",
  tagline: "THE CUT. THE BROTHERHOOD.",
  description:
    "Barbershop premium dengan cabang di Tanjungpinang dan Batam. Potongan presisi, barber berpengalaman, dan pengalaman yang konsisten di setiap cabang.",
  url: "https://brotherbox.id",
  instagram: "https://instagram.com/brotherboxbarbershop",
  instagramHandle: "@brotherboxbarbershop",
  whatsapp: "6285668868138",
  whatsappDisplay: "0856-6886-8138",
  email: "halo@brotherbox.id",
  hours: { open: "10:00", close: "21:00" },
  cities: ["Tanjungpinang", "Batam"],
} as const

export const nav = [
  { label: "Home", href: "/" },
  { label: "Layanan", href: "/services" },
  { label: "Cabang", href: "/branches" },
  { label: "Barber", href: "/barbers" },
  { label: "Galeri", href: "/gallery" },
  { label: "Tentang", href: "/about" },
] as const
