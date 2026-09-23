import { branches } from "@/data/branches"
import { whyBrotherbox } from "@/data/gallery"
import { Container, Frame, SectionTitle } from "@/components/ui/frame"
import { PageHero } from "@/components/ui/page-hero"
import { Reveal } from "@/components/ui/reveal"
import { ArrowLink } from "@/components/ui/arrow-link"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "Tentang",
  description:
    "Brotherbox berawal dari satu ide sederhana: barbershop yang baik harus terasa seperti tempat kita pulang.",
  path: "/about",
})

export default function AboutPage() {
  const cities = Array.from(new Set(branches.map((b) => b.city)))

  return (
    <>
      <PageHero
        kicker="05 / Tentang"
        title={
          <>
            More Than
            <br />A Haircut.
          </>
        }
      />

      <Frame>
        <Container className="py-16 sm:py-24">
          <div className="grid gap-12 lg:grid-cols-2">
            <Reveal>
              <p className="text-bone/85 text-2xl leading-snug sm:text-3xl">
                Brotherbox berawal dari satu ide sederhana: barbershop yang baik
                harus terasa seperti tempat kita pulang.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="text-bone/70 space-y-5">
                <p>
                  Kami fokus pada tiga hal: presisi hasil potongan, konsistensi
                  di setiap cabang, dan orang-orang yang duduk di kursi kami.
                </p>
                <p>
                  Dari satu cabang di Tanjungpinang, Brotherbox tumbuh ke Batam
                  — dengan standar yang sama di setiap lokasi.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="bg-steel/25 mt-16 flex flex-col gap-px sm:flex-row">
            {cities.map((city, i) => (
              <Reveal key={city} delay={i * 0.08} className="flex-1">
                <div className="flex h-full flex-col justify-between bg-black p-8">
                  <span className="font-heading text-red text-xs tracking-[0.25em]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="font-heading mt-16 text-3xl uppercase">
                    {city}
                  </p>
                  <p className="font-heading text-steel mt-2 text-xs tracking-[0.2em] uppercase">
                    {branches.filter((b) => b.city === city).length} cabang
                  </p>
                </div>
              </Reveal>
            ))}
            <Reveal delay={0.16} className="flex-1">
              <div className="bg-red flex h-full flex-col justify-between p-8">
                <span className="font-heading text-warmwhite/80 text-xs tracking-[0.25em]">
                  {String(cities.length + 1).padStart(2, "0")}
                </span>
                <p className="font-heading text-warmwhite mt-16 text-3xl uppercase">
                  Brotherbox
                </p>
                <p className="font-heading text-warmwhite/80 mt-2 text-xs tracking-[0.2em] uppercase">
                  Satu standar
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </Frame>

      <Frame label="Why Brotherbox">
        <Container className="py-16">
          <SectionTitle className="text-3xl sm:text-5xl">
            What We
            <br />
            Stand For
          </SectionTitle>
          <div className="bg-steel/25 mt-12 grid gap-px sm:grid-cols-2 lg:grid-cols-4">
            {whyBrotherbox.map((w, i) => (
              <Reveal key={w.id} delay={i * 0.05}>
                <div className="h-full bg-black p-7">
                  <h3 className="font-heading text-2xl uppercase">{w.title}</h3>
                  <p className="text-bone/65 mt-3 text-sm">{w.body}</p>
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
