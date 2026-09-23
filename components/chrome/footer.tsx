import Link from "next/link"
import { nav, site } from "@/data/site"
import { branches } from "@/data/branches"
import { Container } from "@/components/ui/frame"

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-steel/25 bg-charcoal border-t">
      <Container className="py-16 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[2fr_1fr_1fr]">
          <div>
            <p className="font-heading text-5xl leading-[0.95] uppercase sm:text-7xl">
              Brother<span className="text-red">box</span>
            </p>
            <p className="font-heading text-bone/70 mt-4 text-xl tracking-[0.15em] uppercase">
              {site.tagline}
            </p>
            <p className="text-steel mt-3 text-sm">{site.cities.join(" × ")}</p>
          </div>

          <div>
            <p className="font-heading text-steel text-xs tracking-[0.3em] uppercase">
              Navigasi
            </p>
            <ul className="mt-5 space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-bone/80 hover:text-red text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-heading text-steel text-xs tracking-[0.3em] uppercase">
              Cabang
            </p>
            <ul className="mt-5 space-y-2.5">
              {branches.map((b) => (
                <li key={b.id}>
                  <Link
                    href={`/branches/${b.slug}`}
                    className="text-bone/80 hover:text-red text-sm"
                  >
                    {b.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-steel/25 mt-14 flex flex-col gap-4 border-t pt-6 sm:flex-row sm:items-center sm:justify-between">
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="font-heading hover:text-red text-sm tracking-[0.2em] uppercase"
          >
            {site.instagramHandle}
          </a>
          <p className="text-steel text-xs">
            © {year} {site.legalName}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
