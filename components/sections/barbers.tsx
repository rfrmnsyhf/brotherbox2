import Image from "next/image"
import { barbers } from "@/data/barbers"
import { Container, Frame, SectionTitle } from "@/components/ui/frame"
import { Reveal } from "@/components/ui/reveal"
import { whatsappUrl } from "@/lib/whatsapp"

export function BarbersSection() {
  return (
    <Frame index="03" label="Barber">
      <Container className="py-16 sm:py-24">
        <SectionTitle>
          Meet
          <br />
          The Barbers
        </SectionTitle>

        <div className="bg-steel/25 mt-14 grid gap-px sm:grid-cols-2 lg:grid-cols-3">
          {barbers.map((b, i) => (
            <Reveal key={b.id} delay={i * 0.08}>
              <div className="group relative h-full bg-black">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={b.image}
                    alt={`${b.name} — barber Brotherbox`}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <span className="font-heading text-red text-xs tracking-[0.25em]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="font-heading mt-2 text-3xl uppercase">
                      {b.name}
                    </p>
                    <p className="font-heading text-bone/70 mt-1 text-xs tracking-[0.2em] uppercase">
                      {b.specialties.join(" / ")}
                    </p>
                  </div>
                </div>
                <a
                  href={whatsappUrl(
                    undefined,
                    `Halo Brotherbox, saya ingin booking dengan ${b.name}.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-steel/25 font-heading hover:bg-red hover:text-warmwhite flex items-center justify-between border-t px-6 py-4 text-xs tracking-[0.2em] uppercase transition-colors"
                >
                  Book dengan {b.name.split(" ")[1]}
                  <span>→</span>
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Frame>
  )
}
