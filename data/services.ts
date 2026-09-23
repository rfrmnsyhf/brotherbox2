export type Service = {
  id: string
  name: string
  tagline: string
  duration: number
  price: number
  featured?: boolean
}

// isDemo: harga masih DUMMY, ganti saat owner kasih price list asli.
// Cari string ini untuk menemukan semua titik ganti.
export const isDemo = true

export const services: Service[] = [
  {
    id: "classic-cut",
    name: "Classic Cut",
    tagline: "Potongan bersih berdasarkan bentuk kepala dan gaya hidup.",
    duration: 30,
    price: 35000,
  },
  {
    id: "skin-fade",
    name: "Skin Fade",
    tagline: "Transisi rapi dari kulit, presisi di setiap garis.",
    duration: 45,
    price: 50000,
    featured: true,
  },
  {
    id: "kids-cut",
    name: "Kids Cut",
    tagline: "Sabaran, cepat, dan nyaman untuk anak.",
    duration: 30,
    price: 35000,
  },
  {
    id: "haircut-wash",
    name: "Haircut + Wash",
    tagline: "Potong plus cuci dan finishing.",
    duration: 45,
    price: 55000,
  },
  {
    id: "beard-trim",
    name: "Beard Trim",
    tagline: "Rapikan jenggot dan garis rahang.",
    duration: 20,
    price: 25000,
  },
  {
    id: "haircut-beard",
    name: "Haircut + Beard",
    tagline: "Paket lengkap rambut dan jenggot.",
    duration: 60,
    price: 70000,
  },
  {
    id: "premium-grooming",
    name: "Premium Grooming",
    tagline: "Perawatan penuh untuk hasil maksimal.",
    duration: 75,
    price: 95000,
    featured: true,
  },
]

export const cutCategories = [
  { id: "haircut", label: "Haircut", image: "/images/hero/haircut.webp" },
  { id: "fade", label: "Fade", image: "/images/hero/fade.webp" },
  { id: "beard", label: "Beard", image: "/images/hero/beard.webp" },
  { id: "kids", label: "Kids", image: "/images/hero/kids.webp" },
] as const

export const formatPrice = (n: number) => `Rp${(n / 1000).toFixed(0)}K`
