import { Hero } from "@/components/sections/hero"
import { ServicesSection } from "@/components/sections/services"
import { BrotherhoodCut } from "@/components/sections/brotherhood-cut"
import { BarbersSection } from "@/components/sections/barbers"
import { BranchesSection } from "@/components/sections/branches"
import { InsideTheBox } from "@/components/sections/inside-the-box"
import { ReviewsSection } from "@/components/sections/reviews"
import { BookingSection } from "@/components/sections/booking"

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <BrotherhoodCut />
      <BarbersSection />
      <BranchesSection />
      <InsideTheBox />
      <ReviewsSection />
      <BookingSection />
    </>
  )
}
