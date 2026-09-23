"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useReducedMotion } from "motion/react"
import { site } from "@/data/site"
import { cutCategories } from "@/data/services"
import { whatsappUrl } from "@/lib/whatsapp"

export function Hero() {
  const reduce = useReducedMotion()
  const [active, setActive] = useState(0)
  const [imgSrc, setImgSrc] = useState<string>(cutCategories[0].image)

  const ease = [0.22, 1, 0.36, 1] as const
  const anim = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 28 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.9, delay, ease },
        }

  return (
    <section className="grain relative overflow-hidden border-t border-transparent">
      <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-5 pt-32 pb-16 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:pt-40 lg:pb-24">
        <div>
          <motion.p
            {...anim(0.1)}
            className="font-heading text-red text-sm tracking-[0.4em] uppercase"
          >
            Brother<span className="text-bone">box</span>
          </motion.p>

          <h1 className="font-heading mt-6 text-6xl leading-[0.92] uppercase sm:text-7xl lg:text-8xl">
            <motion.span {...anim(0.25)} className="block">
              The Cut.
            </motion.span>
            <motion.span {...anim(0.4)} className="text-bone/70 block">
              The
            </motion.span>
            <motion.span {...anim(0.5)} className="block">
              Brotherhood.
            </motion.span>
          </h1>

          <motion.p
            {...anim(0.7)}
            className="text-bone/75 mt-8 max-w-md text-base sm:text-lg"
          >
            Pengalaman barber premium untuk kamu yang peduli bagaimana dirimu
            tampil.
          </motion.p>

          <motion.div {...anim(0.85)} className="mt-10 flex flex-wrap gap-3">
            <a
              href={whatsappUrl(
                undefined,
                "Halo Brotherbox, saya ingin booking.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-red font-heading text-warmwhite hover:bg-red/85 inline-flex items-center gap-3 px-7 py-4 text-sm tracking-[0.15em] uppercase transition-colors"
            >
              Book a Cut
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
            <Link
              href="/branches"
              className="border-bone/40 font-heading text-bone hover:border-bone hover:bg-bone inline-flex items-center gap-3 border px-7 py-4 text-sm tracking-[0.15em] uppercase transition-colors hover:text-black"
            >
              Lihat Cabang
            </Link>
          </motion.div>

          <div className="mt-12">
            <p className="font-heading text-steel text-xs tracking-[0.3em] uppercase">
              Kamu cari apa?
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {cutCategories.map((c, i) => (
                <button
                  key={c.id}
                  type="button"
                  onMouseEnter={() => {
                    setActive(i)
                    setImgSrc(c.image)
                  }}
                  onFocus={() => {
                    setActive(i)
                    setImgSrc(c.image)
                  }}
                  onClick={() => {
                    setActive(i)
                    setImgSrc(c.image)
                  }}
                  aria-pressed={active === i}
                  className={`font-heading px-5 py-2.5 text-sm tracking-[0.15em] uppercase transition-colors ${
                    active === i
                      ? "bg-bone text-black"
                      : "border-steel/40 text-bone/70 hover:border-bone hover:text-bone border"
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          {...(reduce
            ? {}
            : {
                initial: { opacity: 0, scale: 1.06 },
                animate: { opacity: 1, scale: 1 },
                transition: { duration: 1, delay: 0.3, ease },
              })}
          className="border-steel/30 relative aspect-[4/5] w-full overflow-hidden border lg:aspect-[3/4]"
        >
          <Image
            key={imgSrc}
            src={imgSrc}
            alt="Barber Brotherbox sedang memotong rambut"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover"
            onError={() => setImgSrc("/images/placeholder.svg")}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <p className="font-heading text-bone/80 absolute bottom-5 left-5 text-xs tracking-[0.3em] uppercase">
            {cutCategories[active].label}
          </p>
        </motion.div>
      </div>

      <div className="border-steel/25 font-heading text-steel mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-3 border-t px-5 py-5 text-xs tracking-[0.25em] uppercase sm:px-8">
        <span>{site.cities.join(" × ")}</span>
        <span>
          Open {site.hours.open} — {site.hours.close}
        </span>
      </div>
    </section>
  )
}
