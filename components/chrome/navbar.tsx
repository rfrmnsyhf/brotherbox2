"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { nav } from "@/data/site"
import { cn } from "@/lib/utils"
import { MobileMenu } from "./mobile-menu"
import { whatsappUrl } from "@/lib/whatsapp"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled
          ? "border-steel/25 border-b bg-black/90 backdrop-blur-sm"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 sm:h-20 sm:px-8">
        <Link
          href="/"
          className="font-heading text-xl tracking-[0.18em] uppercase sm:text-2xl"
        >
          Brother<span className="text-red">box</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => {
            const active = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "font-heading text-sm tracking-[0.18em] uppercase transition-colors",
                  active ? "text-red" : "text-bone/70 hover:text-bone",
                )}
              >
                {item.label}
              </Link>
            )
          })}
          <a
            href={whatsappUrl(
              undefined,
              "Halo Brotherbox, saya ingin booking.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-red font-heading text-warmwhite hover:bg-red/85 inline-flex items-center gap-2 px-5 py-2.5 text-sm tracking-[0.15em] uppercase transition-colors"
          >
            Book a Cut
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </nav>

        <div className="lg:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}

export const navbarHeight = 80
