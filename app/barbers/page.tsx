import { barbers } from "@/data/barbers"
import { Container, Frame } from "@/components/ui/frame"
import { PageHero } from "@/components/ui/page-hero"
import { BarbersSection } from "@/components/sections/barbers"
import { pageMetadata } from "@/lib/seo"
import { ArrowLink } from "@/components/ui/arrow-link"

export const metadata = pageMetadata({
  title: "Barber",
  description:
    "Kenali barber Brotherbox. Spesialisasi fade, classic, scissor, dan kids cut.",
  path: "/barbers",
})

export default function BarbersPage() {
  return (
    <>
      <PageHero
        kicker="03 / Barber"
        title={
          <>
            The
            <br />
            People
          </>
        }
        intro="Barbershop dibangun dari barber. Ini orang-orang di balik kursi."
      />
      <BarbersSection />
      <Frame>
        <Container className="py-16">
          <p className="font-heading text-steel text-xs tracking-[0.3em] uppercase">
            {barbers.length} barber terdaftar
          </p>
          <div className="mt-6">
            <ArrowLink href="/booking">Book a cut</ArrowLink>
          </div>
        </Container>
      </Frame>
    </>
  )
}
