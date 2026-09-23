import type { Metadata, Viewport } from "next"
import { Barlow_Condensed, Manrope } from "next/font/google"
import "./globals.css"
import { site } from "@/data/site"
import { organizationJsonLd } from "@/lib/seo"
import { Navbar } from "@/components/chrome/navbar"
import { Footer } from "@/components/chrome/footer"
import { FloatingCta } from "@/components/chrome/floating-cta"

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-barlow",
  display: "swap",
})

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.legalName} — Barbershop Premium Tanjungpinang & Batam`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: site.legalName,
    title: `${site.legalName} — ${site.tagline}`,
    description: site.description,
    images: [
      { url: "/images/og.png", width: 1200, height: 630, alt: site.tagline },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.legalName} — ${site.tagline}`,
    description: site.description,
    images: ["/images/og.png"],
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: "#0B0B0A",
  colorScheme: "dark",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={`${barlow.variable} ${manrope.variable}`}>
      <body className="flex min-h-dvh flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd()),
          }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingCta />
      </body>
    </html>
  )
}
