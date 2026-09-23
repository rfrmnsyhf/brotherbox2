import { philosophy } from "@/data/gallery"
import { Container, Frame, SectionTitle } from "@/components/ui/frame"
import { Reveal } from "@/components/ui/reveal"

export function BrotherhoodCut() {
  return (
    <Frame index="02" label="The Brotherbox Cut">
      <Container className="py-16 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionTitle>
              The
              <br />
              Brotherbox
              <br />
              Cut
            </SectionTitle>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-bone/75 max-w-md text-lg">
              Tidak semua kepala butuh potongan yang sama. Kami melihat bentuk,
              jenis rambut, gaya hidup, dan apa yang benar-benar cocok.
            </p>
          </Reveal>
        </div>

        <div className="bg-steel/25 mt-16 flex flex-col gap-px lg:flex-row">
          {philosophy.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.08} className="flex-1">
              <div className="flex h-full flex-col justify-between bg-black p-7">
                <span className="font-heading text-red text-xs tracking-[0.25em]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-heading mt-16 text-2xl tracking-[0.05em] uppercase">
                  {p.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Frame>
  )
}
