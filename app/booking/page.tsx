import { PageHero } from "@/components/ui/page-hero"
import { BookingSection } from "@/components/sections/booking"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "Booking",
  description:
    "Booking kursi Brotherbox: pilih cabang, layanan, barber, dan jadwal.",
  path: "/booking",
})

export default function BookingPage() {
  return (
    <>
      <PageHero
        kicker="06 / Booking"
        title={
          <>
            Book
            <br />
            Your Chair
          </>
        }
        intro="Pilih cabang, layanan, dan jadwal. Kami lanjutkan lewat WhatsApp."
      />
      <BookingSection compact />
    </>
  )
}
