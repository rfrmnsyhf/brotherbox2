import { Container, Frame } from "@/components/ui/frame"
import { PageHero } from "@/components/ui/page-hero"
import { GalleryGrid } from "@/components/sections/gallery-grid"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "Galeri",
  description: "Hasil potongan, suasana shop, barber, dan detail Brotherbox.",
  path: "/gallery",
})

export default function GalleryPage() {
  return (
    <>
      <PageHero
        kicker="04 / Galeri"
        title={
          <>
            Inside
            <br />
            The Box
          </>
        }
        intro="Hasil, suasana, dan detail. Semua dari kursi Brotherbox."
      />
      <Frame>
        <Container className="py-12 sm:py-16">
          <GalleryGrid />
        </Container>
      </Frame>
    </>
  )
}
