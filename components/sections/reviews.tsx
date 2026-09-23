import { reviews } from "@/data/reviews"
import { whyBrotherbox } from "@/data/gallery"
import { Container, Frame, SectionTitle } from "@/components/ui/frame"
import { Reveal } from "@/components/ui/reveal"

export function ReviewsSection() {
  return (
    <>
      <Frame index="06" label="Why Brotherbox">
        <Container className="py-16 sm:py-24">
          <SectionTitle>Why Brotherbox</SectionTitle>
          <div className="bg-steel/25 mt-12 grid gap-px sm:grid-cols-2 lg:grid-cols-4">
            {whyBrotherbox.map((w, i) => (
              <Reveal key={w.id} delay={i * 0.06}>
                <div className="h-full bg-black p-7">
                  <span className="font-heading text-red text-xs tracking-[0.25em]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-heading mt-8 text-2xl uppercase">
                    {w.title}
                  </h3>
                  <p className="text-bone/65 mt-3 text-sm">{w.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Frame>

      <Frame index="07" label="Reviews">
        <Container className="py-16 sm:py-24">
          <SectionTitle>Apa Kata Mereka</SectionTitle>
          <div className="bg-steel/25 mt-12 flex snap-x gap-px overflow-x-auto pb-px">
            {reviews.map((r, i) => (
              <Reveal
                key={r.id}
                delay={i * 0.05}
                className="w-[85vw] shrink-0 snap-start sm:w-[45vw] lg:w-[calc(25%-1px)]"
              >
                <figure className="flex h-full min-h-[220px] flex-col justify-between bg-black p-7">
                  <blockquote className="font-heading text-2xl leading-tight">
                    &ldquo;{r.quote}&rdquo;
                  </blockquote>
                  <figcaption className="border-steel/25 font-heading text-steel mt-6 border-t pt-4 text-xs tracking-[0.25em] uppercase">
                    {r.source}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </Container>
      </Frame>
    </>
  )
}
