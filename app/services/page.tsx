import { services, formatPrice, isDemo } from "@/data/services"
import { Container, Frame } from "@/components/ui/frame"
import { PageHero } from "@/components/ui/page-hero"
import { Reveal } from "@/components/ui/reveal"
import { ArrowLink } from "@/components/ui/arrow-link"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "Layanan",
  description:
    "Daftar layanan Brotherbox: classic cut, skin fade, beard trim, kids cut, hingga premium grooming.",
  path: "/services",
})

export default function ServicesPage() {
  return (
    <>
      <PageHero
        kicker="01 / Layanan"
        title={
          <>
            The
            <br />
            Service
          </>
        }
        intro="Grooming yang baik dimulai dari memahami orang yang duduk di kursi."
      />

      <Frame>
        <Container className="py-16 sm:py-20">
          <div className="mb-8 flex items-center justify-between">
            <p className="font-heading text-steel text-xs tracking-[0.3em] uppercase">
              {services.length} layanan
            </p>
            {isDemo && (
              <span className="border-red/50 font-heading text-red border px-3 py-1.5 text-xs tracking-[0.2em] uppercase">
                Harga demo
              </span>
            )}
          </div>

          <div className="bg-steel/25 grid gap-px sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.id} delay={(i % 3) * 0.05}>
                <div className="flex h-full flex-col bg-black p-8">
                  <span className="font-heading text-steel text-xs tracking-[0.25em]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-heading mt-6 text-4xl uppercase">
                    {s.name}
                  </h2>
                  <p className="text-bone/65 mt-4 flex-1">{s.tagline}</p>
                  <div className="border-steel/25 mt-10 flex items-baseline justify-between border-t pt-5">
                    <span className="font-heading text-steel text-sm tracking-[0.15em] uppercase">
                      {s.duration} menit
                    </span>
                    <span className="font-heading text-red text-3xl">
                      {formatPrice(s.price)}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-12">
            <ArrowLink href="/booking">Book a cut</ArrowLink>
          </div>
        </Container>
      </Frame>
    </>
  )
}
