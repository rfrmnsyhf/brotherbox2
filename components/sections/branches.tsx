"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { branches } from "@/data/branches"
import { Container, Frame, SectionTitle } from "@/components/ui/frame"
import { whatsappUrl } from "@/lib/whatsapp"

export function BranchesSection() {
  const [active, setActive] = useState(branches[0])
  const cities = Array.from(new Set(branches.map((b) => b.city)))

  return (
    <Frame index="04" label="Cabang">
      <Container className="py-16 sm:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionTitle>
              Temukan
              <br />
              Cabangmu
            </SectionTitle>
            <p className="text-bone/70 mt-5 max-w-md">
              Lima lokasi. Satu standar Brotherbox.
            </p>
          </div>
          <Link
            href="/branches"
            className="font-heading text-red hover:text-bone text-sm tracking-[0.2em] uppercase"
          >
            Semua cabang →
          </Link>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            {cities.map((city) => (
              <div key={city} className="mb-6">
                <p className="font-heading text-steel text-xs tracking-[0.3em] uppercase">
                  {city}
                </p>
                <div className="mt-3 flex flex-col">
                  {branches
                    .filter((b) => b.city === city)
                    .map((b) => (
                      <button
                        key={b.id}
                        type="button"
                        onClick={() => setActive(b)}
                        aria-pressed={active.id === b.id}
                        className={`border-steel/20 font-heading flex items-center justify-between border-b py-4 text-left text-2xl uppercase transition-colors ${
                          active.id === b.id
                            ? "text-red"
                            : "text-bone/70 hover:text-bone"
                        }`}
                      >
                        {b.name}
                        <span
                          className={`text-xs tracking-[0.2em] ${
                            b.status === "open" ? "text-red" : "text-steel"
                          }`}
                        >
                          {b.status === "open" ? "OPEN" : "CLOSED"}
                        </span>
                      </button>
                    ))}
                </div>
              </div>
            ))}
          </div>

          <div className="relative">
            <div className="border-steel/25 relative aspect-[4/3] overflow-hidden border">
              <Image
                key={active.id}
                src={active.image}
                alt={`Cabang Brotherbox ${active.name}`}
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />
            </div>
            <div className="mt-6 flex flex-wrap items-start justify-between gap-6">
              <div>
                <h3 className="font-heading text-3xl uppercase">
                  {active.name}
                </h3>
                <p className="text-bone/65 mt-2 max-w-xs text-sm">
                  {active.address}
                </p>
                <p className="font-heading text-steel mt-3 text-sm tracking-[0.15em] uppercase">
                  {active.open} — {active.close}
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <a
                  href={active.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-bone/40 font-heading hover:bg-bone inline-flex items-center justify-between gap-6 border px-5 py-3 text-xs tracking-[0.2em] uppercase transition-colors hover:text-black"
                >
                  Petunjuk Arah <span>↗</span>
                </a>
                <a
                  href={whatsappUrl(
                    undefined,
                    `Halo Brotherbox, saya ingin booking di cabang ${active.name}.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red font-heading text-warmwhite hover:bg-red/85 inline-flex items-center justify-between gap-6 px-5 py-3 text-xs tracking-[0.2em] uppercase transition-colors"
                >
                  Booking di sini <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Frame>
  )
}
