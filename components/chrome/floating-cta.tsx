"use client"

import { useEffect, useState } from "react"
import { whatsappUrl } from "@/lib/whatsapp"

export function FloatingCta() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <a
      href={whatsappUrl(undefined, "Halo Brotherbox, saya ingin booking.")}
      target="_blank"
      rel="noopener noreferrer"
      className={`bg-red font-heading text-warmwhite fixed inset-x-4 bottom-4 z-40 flex items-center justify-between px-6 py-4 text-sm tracking-[0.15em] uppercase transition-all duration-300 lg:hidden ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      Book a Cut
      <span>→</span>
    </a>
  )
}
