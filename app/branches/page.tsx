import Link from "next/link"
import { branches } from "@/data/branches"
import { Container, Frame } from "@/components/ui/frame"
import { PageHero } from "@/components/ui/page-hero"
import { Reveal } from "@/components/ui/reveal"
import { ArrowLink } from "@/components/ui/arrow-link"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "Cabang",
  description:
    "Lima cabang Brotherbox di Tanjungpinang dan Batam. Temukan lokasi terdekat, jam buka, dan booking.",
  path: "/branches",
})

export default function BranchesPage() {
  const cities = Array.from(new Set(branches.map((b) => b.city)))

  return (
    <>
      <PageHero
        kicker="02 / Cabang"
        title={
          <>
            Find
            <br />
            Your Branch
          </>
        }
        intro={`${branches.length} lokasi. Satu standar Brotherbox.`}
      />

      {cities.map((city) => (
        <Frame key={city} label={city}>
          <Container className="py-12 sm:py-16">
            <div className="bg-steel/25 grid gap-px">
              {branches
                .filter((b) => b.city === city)
                .map((b, i) => (
                  <Reveal key={b.id} delay={i * 0.05}>
                    <Link
                      href={`/branches/${b.slug}`}
                      className="group hover:bg-charcoal flex flex-col justify-between gap-6 bg-black p-7 transition-colors sm:flex-row sm:items-center"
                    >
                      <div>
                        <span className="font-heading text-red text-xs tracking-[0.25em]">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <h2 className="font-heading mt-3 text-4xl uppercase">
                          {b.name}
                        </h2>
                        <p className="text-bone/65 mt-2 max-w-xl text-sm">
                          {b.address}
                        </p>
                      </div>
                      <div className="flex shrink-0 items-center gap-6">
                        <span className="font-heading text-steel text-sm tracking-[0.15em] uppercase">
                          {b.open} — {b.close}
                        </span>
                        <span className="font-heading text-red text-2xl transition-transform group-hover:translate-x-1">
                          →
                        </span>
                      </div>
                    </Link>
                  </Reveal>
                ))}
            </div>
          </Container>
        </Frame>
      ))}

      <Frame>
        <Container className="py-16">
          <ArrowLink href="/booking">Book a cut</ArrowLink>
        </Container>
      </Frame>
    </>
  )
}
