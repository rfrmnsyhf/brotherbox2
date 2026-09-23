export type Branch = {
  id: string
  slug: string
  name: string
  city: string
  address: string
  addressStatus: "VERIFIED" | "PENDING_VERIFICATION"
  status: "open" | "closed"
  open: string
  close: string
  phone: string
  mapsUrl: string
  mapEmbedUrl: string
  image: string
}

export const branches: Branch[] = [
  {
    id: "branch-01",
    slug: "air-raja",
    name: "Air Raja",
    city: "Tanjungpinang",
    address:
      "WG83+VX2, Air Raja, Kec. Tanjungpinang Tim., Kota Tanjung Pinang, Kepulauan Riau 29125",
    addressStatus: "VERIFIED",
    status: "open",
    open: "10:00",
    close: "21:00",
    phone: "0856-6886-8138",
    mapsUrl:
      "https://maps.google.com/?q=WG83%2BVX2%20Air%20Raja%20Tanjungpinang",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=WG83%2BVX2%20Air%20Raja%20Tanjungpinang&output=embed",
    image: "/images/branches/air-raja.webp",
  },
  {
    id: "branch-02",
    slug: "gatot-subroto",
    name: "Gatot Subroto",
    city: "Tanjungpinang",
    address:
      "WF89+VXQ, Jl. Gatot Subroto, Kp. Bulang, Kec. Tanjungpinang Tim., Kota Tanjung Pinang, Kepulauan Riau 29122",
    addressStatus: "VERIFIED",
    status: "open",
    open: "10:00",
    close: "21:00",
    phone: "0856-6886-8138",
    mapsUrl:
      "https://maps.google.com/?q=WF89%2BVXQ%20Jl.%20Gatot%20Subroto%20Tanjungpinang",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=WF89%2BVXQ%20Jl.%20Gatot%20Subroto%20Tanjungpinang&output=embed",
    image: "/images/branches/gatot-subroto.webp",
  },
  {
    id: "branch-03",
    slug: "sei-jang",
    name: "Sei Jang",
    city: "Tanjungpinang",
    address:
      "WF3M+RJM, Sei Jang, Kec. Bukit Bestari, Kota Tanjung Pinang, Kepulauan Riau 29123",
    addressStatus: "VERIFIED",
    status: "open",
    open: "10:00",
    close: "21:00",
    phone: "0856-6886-8138",
    mapsUrl:
      "https://maps.google.com/?q=WF3M%2BRJM%20Sei%20Jang%20Tanjungpinang",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=WF3M%2BRJM%20Sei%20Jang%20Tanjungpinang&output=embed",
    image: "/images/branches/sei-jang.webp",
  },
  {
    id: "branch-04",
    slug: "tiban-impian",
    name: "Tiban Impian",
    city: "Batam",
    address:
      "Jl. Gajah Mada Ruko, Jl. Tiban Impian No.05 blok A1, Tiban Baru, Sekupang, Batam City, Riau Islands 29424",
    addressStatus: "VERIFIED",
    status: "open",
    open: "10:00",
    close: "21:00",
    phone: "0856-6886-8138",
    mapsUrl:
      "https://maps.google.com/?q=Jl.%20Tiban%20Impian%20No.05%20Tiban%20Baru%20Sekupang%20Batam",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=Jl.%20Tiban%20Impian%20No.05%20Tiban%20Baru%20Sekupang%20Batam&output=embed",
    image: "/images/branches/tiban-impian.webp",
  },
  {
    id: "branch-05",
    slug: "tiban-i",
    name: "Tiban I",
    city: "Batam",
    address:
      "4X7H+723, Jl. Tiban I, Patam Lestari, Kec. Sekupang, Kota Batam, Kepulauan Riau 29424",
    addressStatus: "VERIFIED",
    status: "open",
    open: "10:00",
    close: "21:00",
    phone: "0856-6886-8138",
    mapsUrl: "https://maps.google.com/?q=4X7H%2B723%20Jl.%20Tiban%20I%20Batam",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=4X7H%2B723%20Jl.%20Tiban%20I%20Batam&output=embed",
    image: "/images/branches/tiban-i.webp",
  },
]

export const branchesByCity = (city: string) =>
  branches.filter((b) => b.city === city)

export const getBranch = (slug: string) => branches.find((b) => b.slug === slug)
