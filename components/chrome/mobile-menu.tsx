"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { nav, site } from "@/data/site"
import { whatsappUrl } from "@/lib/whatsapp"

export function MobileMenu() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <>
      <button
        type="button"
        aria-label="Buka menu"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className="font-heading text-sm tracking-[0.2em] uppercase"
      >
        Menu
      </button>

      <div
        className={`fixed inset-0 z-[60] bg-black transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
      >
        <div className="flex h-16 items-center justify-between px-5">
          <span className="font-heading text-xl tracking-[0.18em] uppercase">
            Brother<span className="text-red">box</span>
          </span>
          <button
            type="button"
            aria-label="Tutup menu"
            onClick={() => setOpen(false)}
            className="font-heading text-red text-sm tracking-[0.2em] uppercase"
          >
            Tutup
          </button>
        </div>

        <nav className="mt-6 flex flex-col px-5">
          {nav.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-steel/20 flex items-baseline gap-4 border-b py-4"
            >
              <span className="font-heading text-red text-xs tracking-[0.2em]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-heading text-3xl tracking-[0.05em] uppercase">
                {item.label}
              </span>
            </Link>
          ))}
        </nav>

        <div className="mt-8 flex flex-col gap-3 px-5">
          <a
            href={`tel:+${site.whatsapp}`}
            className="font-heading text-steel text-sm tracking-[0.2em] uppercase"
          >
            Telepon
          </a>
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="font-heading text-steel text-sm tracking-[0.2em] uppercase"
          >
            Instagram
          </a>
          <a
            href={whatsappUrl(
              undefined,
              "Halo Brotherbox, saya ingin booking.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red font-heading text-warmwhite mt-2 inline-flex items-center justify-center gap-3 px-6 py-4 text-sm tracking-[0.15em] uppercase"
          >
            Book a Cut →
          </a>
        </div>
      </div>
    </>
  )
}
