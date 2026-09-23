"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import {
  gallery,
  galleryCategories,
  type GalleryCategory,
} from "@/data/gallery"
import { cn } from "@/lib/utils"

export function GalleryGrid() {
  const [filter, setFilter] = useState<GalleryCategory>("ALL")
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const items = gallery.filter((g) => filter === "ALL" || g.category === filter)

  useEffect(() => {
    document.body.style.overflow = openIndex !== null ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [openIndex])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null)
      if (openIndex === null) return
      if (e.key === "ArrowRight")
        setOpenIndex((i) => ((i ?? 0) + 1) % items.length)
      if (e.key === "ArrowLeft")
        setOpenIndex((i) => ((i ?? 0) - 1 + items.length) % items.length)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [openIndex, items.length])

  const active = openIndex !== null ? items[openIndex] : null

  return (
    <>
      <div className="flex flex-wrap gap-2">
        {galleryCategories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setFilter(c)}
            aria-pressed={filter === c}
            className={cn(
              "font-heading px-4 py-2 text-xs tracking-[0.2em] uppercase transition-colors",
              filter === c
                ? "bg-red text-warmwhite"
                : "border-steel/40 text-bone/70 hover:border-bone hover:text-bone border",
            )}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="bg-steel/25 mt-8 grid auto-rows-[180px] grid-cols-2 gap-px sm:auto-rows-[220px] md:grid-cols-4">
        {items.map((item, i) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setOpenIndex(i)}
            className={cn(
              "group relative overflow-hidden text-left",
              item.span === "wide" && "md:col-span-2",
              item.span === "tall" && "row-span-2",
            )}
          >
            <Image
              src={item.src}
              alt={item.caption}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <span className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/30" />
            <span className="font-heading text-warmwhite absolute bottom-3 left-3 text-xs tracking-[0.25em] uppercase opacity-0 transition-opacity group-hover:opacity-100">
              {String(i + 1).padStart(2, "0")} / {item.caption}
            </span>
          </button>
        ))}
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.caption}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/95 p-4"
          onClick={() => setOpenIndex(null)}
        >
          <div
            className="relative h-[80vh] w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={active.src}
              alt={active.caption}
              fill
              sizes="90vw"
              className="object-contain"
            />
          </div>
          <button
            type="button"
            aria-label="Tutup"
            onClick={() => setOpenIndex(null)}
            className="font-heading text-red absolute top-5 right-5 text-sm tracking-[0.2em] uppercase"
          >
            Tutup
          </button>
          <button
            type="button"
            aria-label="Sebelumnya"
            onClick={(e) => {
              e.stopPropagation()
              setOpenIndex((i) => ((i ?? 0) - 1 + items.length) % items.length)
            }}
            className="font-heading text-bone/70 hover:text-bone absolute left-4 text-3xl"
          >
            ←
          </button>
          <button
            type="button"
            aria-label="Selanjutnya"
            onClick={(e) => {
              e.stopPropagation()
              setOpenIndex((i) => ((i ?? 0) + 1) % items.length)
            }}
            className="font-heading text-bone/70 hover:text-bone absolute right-4 text-3xl"
          >
            →
          </button>
        </div>
      )}
    </>
  )
}
