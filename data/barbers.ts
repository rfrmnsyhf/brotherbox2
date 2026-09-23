export type Barber = {
  id: string
  name: string
  role: string
  specialties: string[]
  branchIds: string[]
  image: string
  isDemo: boolean
}

// isDemo: nama & data barber masih DUMMY. Ganti saat data asli tersedia.
export const barbers: Barber[] = [
  {
    id: "barber-01",
    name: "Bang Raka",
    role: "Barber",
    specialties: ["Fade", "Texture"],
    branchIds: ["branch-01"],
    image: "/images/barbers/barber-01.webp",
    isDemo: true,
  },
  {
    id: "barber-02",
    name: "Bang Arya",
    role: "Barber",
    specialties: ["Classic", "Scissor"],
    branchIds: ["branch-02"],
    image: "/images/barbers/barber-02.webp",
    isDemo: true,
  },
  {
    id: "barber-03",
    name: "Bang Fikri",
    role: "Barber",
    specialties: ["Fade", "Kids"],
    branchIds: ["branch-04"],
    image: "/images/barbers/barber-03.webp",
    isDemo: true,
  },
]
