export type Review = {
  id: string
  quote: string
  source: string
  author?: string
}

// Sumber: review publik yang sudah dikutip di brief. Verifikasi ulang +
// lengkapi nama/tanggal sebelum production.
export const reviews: Review[] = [
  {
    id: "rev-01",
    quote: "Tempatnya nyaman, pelayanan bagus.",
    source: "Google Review",
  },
  {
    id: "rev-02",
    quote: "Ramah dan rapi.",
    source: "Google Review",
  },
  {
    id: "rev-03",
    quote: "Sangat recommended, murah tapi kualitas luar biasa.",
    source: "Google Review",
  },
  {
    id: "rev-04",
    quote: "Bang Putra sangat recommended untuk dewasa dan anak-anak.",
    source: "Google Review",
  },
  {
    id: "rev-05",
    quote: "Good cut, fast service.",
    source: "Google Review",
  },
]
