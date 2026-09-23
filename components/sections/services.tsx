import Link from "next/link"
import { services, formatPrice, isDemo } from "@/data/services"
import { Container, Frame, SectionTitle } from "@/components/ui/frame"
import { Reveal } from "@/components/ui/reveal"

export function ServicesSection() {
  return (
    <Frame index="01" label="Layanan">
      <Container className="py-16 sm:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionTitle>
              What
              <br />
              We Do
            </SectionTitle>
            <p className="text-bone/70 mt-5 max-w-md">
              Grooming yang baik dimulai dari memahami orang yang duduk di
              kursi.
            </p>
          </div>
          {isDemo && (
            <span className="border-red/50 font-heading text-red border px-3 py-1.5 text-xs tracking-[0.2em] uppercase">
              Harga demo
            </span>
          )}
        </div>

        <div className="border-steel/25 bg-steel/25 mt-14 grid gap-px border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.id} delay={i * 0.05}>
              <div className="hover:bg-charcoal flex h-full flex-col bg-black p-7 transition-colors">
                <span className="font-heading text-steel text-xs tracking-[0.25em]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-heading mt-6 text-3xl uppercase">
                  {s.name}
                </h3>
                <p className="text-bone/65 mt-3 flex-1 text-sm">{s.tagline}</p>
                <div className="border-steel/25 mt-8 flex items-baseline justify-between border-t pt-4">
                  <span className="font-heading text-steel text-sm tracking-[0.15em] uppercase">
                    {s.duration} min
                  </span>
                  <span className="font-heading text-red text-2xl">
                    {formatPrice(s.price)}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
          <Reveal delay={services.length * 0.05}>
            <Link
              href="/services"
              className="group bg-charcoal hover:bg-red flex h-full flex-col justify-between p-7 transition-colors"
            >
              <span className="font-heading text-steel group-hover:text-warmwhite text-xs tracking-[0.25em] uppercase">
                Semua
              </span>
              <span className="font-heading group-hover:text-warmwhite mt-20 text-3xl uppercase">
                Lihat detail →
              </span>
            </Link>
          </Reveal>
        </div>
      </Container>
    </Frame>
  )
}
