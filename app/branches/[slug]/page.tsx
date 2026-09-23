import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { branches, getBranch } from "@/data/branches"
import { services, formatPrice } from "@/data/services"
import { Container, Frame, SectionTitle } from "@/components/ui/frame"
import { Reveal } from "@/components/ui/reveal"
import { branchJsonLd, pageMetadata } from "@/lib/seo"
import { whatsappUrl } from "@/lib/whatsapp"

export function generateStaticParams() {
  return branches.map((b) => ({ slug: b.slug }))
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const b = getBranch(slug)
    if (!b)
      return pageMetadata({
        title: "Cabang tidak ditemukan",
        path: "/branches",
      })
    return pageMetadata({
      title: `Cabang ${b.name} — ${b.city}`,
      description: `Brotherbox ${b.name}, ${b.city}. ${b.address}. Buka ${b.open}–${b.close}.`,
      path: `/branches/${b.slug}`,
    })
  })
}

export default async function BranchPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const branch = getBranch(slug)
  if (!branch) notFound()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(branchJsonLd(branch)),
        }}
      />

      <section className="border-steel/25 border-b">
        <Container className="pt-32 pb-12 sm:pt-40">
          <Link
            href="/branches"
            className="font-heading text-steel hover:text-bone text-xs tracking-[0.25em] uppercase"
          >
            ← Semua cabang
          </Link>
          <p className="font-heading text-red mt-8 text-xs tracking-[0.4em] uppercase">
            {branch.city}
          </p>
          <h1 className="font-heading mt-4 text-6xl leading-[0.94] uppercase sm:text-8xl">
            {branch.name}
          </h1>
        </Container>
      </section>

      <Container className="py-12">
        <div className="border-steel/25 relative aspect-[16/9] overflow-hidden border">
          <Image
            src={branch.image}
            alt={`Cabang Brotherbox ${branch.name}`}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="font-heading text-steel text-xs tracking-[0.3em] uppercase">
              Alamat
            </p>
            <p className="text-bone/85 mt-4 text-lg">{branch.address}</p>
            <p className="font-heading text-steel mt-6 text-xs tracking-[0.3em] uppercase">
              Jam Buka
            </p>
            <p className="font-heading text-red mt-4 text-3xl">
              {branch.open} — {branch.close}
            </p>
            <p className="font-heading text-steel mt-2 text-xs tracking-[0.25em] uppercase">
              {branch.status === "open" ? "Buka sekarang" : "Tutup"}
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={branch.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border-bone/40 font-heading hover:bg-bone inline-flex items-center gap-3 border px-6 py-3.5 text-sm tracking-[0.15em] uppercase transition-colors hover:text-black"
              >
                Petunjuk arah ↗
              </a>
              <a
                href={whatsappUrl(
                  undefined,
                  `Halo Brotherbox, saya ingin booking di cabang ${branch.name} (${branch.city}).`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red font-heading text-warmwhite hover:bg-red/85 inline-flex items-center gap-3 px-6 py-3.5 text-sm tracking-[0.15em] uppercase transition-colors"
              >
                Booking di sini →
              </a>
            </div>
          </div>

          <div className="border-steel/25 aspect-[4/3] overflow-hidden border lg:aspect-auto lg:min-h-[360px]">
            <iframe
              title={`Peta cabang ${branch.name}`}
              src={branch.mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full grayscale"
            />
          </div>
        </div>
      </Container>

      <Frame label="Layanan di cabang ini">
        <Container className="py-14">
          <SectionTitle className="text-3xl sm:text-5xl">Layanan</SectionTitle>
          <div className="bg-steel/25 mt-8 grid gap-px sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.id} delay={(i % 3) * 0.04}>
                <div className="flex h-full items-baseline justify-between bg-black p-6">
                  <div>
                    <h3 className="font-heading text-2xl uppercase">
                      {s.name}
                    </h3>
                    <p className="font-heading text-steel mt-1 text-xs tracking-[0.2em] uppercase">
                      {s.duration} menit
                    </p>
                  </div>
                  <span className="font-heading text-red text-xl">
                    {formatPrice(s.price)}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Frame>
    </>
  )
}
