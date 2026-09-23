import Image from "next/image"
import Link from "next/link"
import { gallery, insideTheBox } from "@/data/gallery"
import { Container, Frame, SectionTitle } from "@/components/ui/frame"
import { Reveal } from "@/components/ui/reveal"

export function InsideTheBox() {
  const preview = gallery.slice(0, 5)
  return (
    <Frame index="05" label="Inside the Box">
      <Container className="py-16 sm:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionTitle>
            Inside
            <br />
            The Box
          </SectionTitle>
          <Link
            href="/gallery"
            className="font-heading text-red hover:text-bone text-sm tracking-[0.2em] uppercase"
          >
            Buka galeri →
          </Link>
        </div>

        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-2">
          {insideTheBox.map((w) => (
            <span
              key={w}
              className="font-heading text-steel text-sm tracking-[0.3em] uppercase"
            >
              {w}
            </span>
          ))}
        </div>

        <div className="bg-steel/25 mt-12 grid grid-cols-2 gap-px md:grid-cols-4">
          {preview.map((item, i) => (
            <Reveal
              key={item.id}
              delay={i * 0.06}
              className={i === 0 ? "col-span-2 row-span-2" : ""}
            >
              <div
                className={`group relative overflow-hidden ${
                  i === 0 ? "aspect-square" : "aspect-square"
                }`}
              >
                <Image
                  src={item.src}
                  alt={item.caption}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <span className="font-heading text-bone/90 absolute bottom-3 left-3 text-xs tracking-[0.25em] uppercase opacity-0 transition-opacity group-hover:opacity-100">
                  {item.caption}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Frame>
  )
}
