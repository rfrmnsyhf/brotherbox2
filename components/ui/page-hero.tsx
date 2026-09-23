import { Container } from "@/components/ui/frame"

export function PageHero({
  kicker,
  title,
  intro,
}: {
  kicker: string
  title: React.ReactNode
  intro?: string
}) {
  return (
    <section className="border-steel/25 border-b">
      <Container className="pt-32 pb-14 sm:pt-40 sm:pb-20">
        <p className="font-heading text-red text-xs tracking-[0.4em] uppercase">
          {kicker}
        </p>
        <h1 className="font-heading mt-5 text-5xl leading-[0.94] uppercase sm:text-7xl lg:text-8xl">
          {title}
        </h1>
        {intro && <p className="text-bone/70 mt-7 max-w-xl text-lg">{intro}</p>}
      </Container>
    </section>
  )
}
