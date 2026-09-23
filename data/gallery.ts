export type GalleryCategory =
  "ALL" | "CUTS" | "SHOP" | "BARBERS" | "DETAILS" | "COMMUNITY"

export type GalleryItem = {
  id: string
  src: string
  caption: string
  category: Exclude<GalleryCategory, "ALL">
  span?: "wide" | "tall"
}

export const galleryCategories: GalleryCategory[] = [
  "ALL",
  "CUTS",
  "SHOP",
  "BARBERS",
  "DETAILS",
  "COMMUNITY",
]

export const gallery: GalleryItem[] = [
  {
    id: "g-01",
    src: "/images/gallery/01.webp",
    caption: "Fade",
    category: "CUTS",
    span: "tall",
  },
  {
    id: "g-02",
    src: "/images/gallery/02.webp",
    caption: "Scissor Work",
    category: "CUTS",
  },
  {
    id: "g-03",
    src: "/images/gallery/03.webp",
    caption: "The Chair",
    category: "SHOP",
  },
  {
    id: "g-04",
    src: "/images/gallery/04.webp",
    caption: "At Work",
    category: "BARBERS",
    span: "wide",
  },
  {
    id: "g-05",
    src: "/images/gallery/05.webp",
    caption: "Clippers",
    category: "DETAILS",
  },
  {
    id: "g-06",
    src: "/images/gallery/06.webp",
    caption: "Beard",
    category: "CUTS",
  },
  {
    id: "g-07",
    src: "/images/gallery/07.webp",
    caption: "Interior",
    category: "SHOP",
    span: "tall",
  },
  {
    id: "g-08",
    src: "/images/gallery/08.webp",
    caption: "Finish",
    category: "DETAILS",
  },
  {
    id: "g-09",
    src: "/images/gallery/09.webp",
    caption: "Community",
    category: "COMMUNITY",
    span: "wide",
  },
  {
    id: "g-10",
    src: "/images/gallery/10.webp",
    caption: "Texture",
    category: "CUTS",
  },
]

export const philosophy = [
  { id: "face", label: "Bentuk Wajah" },
  { id: "hair", label: "Jenis Rambut" },
  { id: "life", label: "Gaya Hidup" },
  { id: "cut", label: "Potongannya" },
]

export const insideTheBox = [
  "CLIPPER",
  "MUSIK",
  "KURSI",
  "OBROLAN",
  "DETAIL",
  "FINISHING",
]

export const whyBrotherbox = [
  { id: "cut", title: "THE CUT", body: "Presisi sebelum segalanya." },
  {
    id: "people",
    title: "THE PEOPLE",
    body: "Dibangun dari hubungan barber dan pelanggan.",
  },
  {
    id: "place",
    title: "THE PLACE",
    body: "Tempat untuk duduk, ngobrol, dan berbenah.",
  },
  {
    id: "standard",
    title: "THE STANDARD",
    body: "Konsisten di setiap kunjungan.",
  },
]
