import type { Metadata } from "next"
import { site } from "@/data/site"
import { branches } from "@/data/branches"

export function pageMetadata({
  title,
  description,
  path = "/",
}: {
  title: string
  description?: string
  path?: string
}): Metadata {
  const fullTitle = title === site.name ? site.name : `${title} — ${site.name}`
  const desc = description ?? site.description
  const url = `${site.url}${path}`
  return {
    title: fullTitle,
    description: desc,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description: desc,
      url,
      siteName: site.legalName,
      locale: "id_ID",
      type: "website",
      images: [
        { url: "/images/og.png", width: 1200, height: 630, alt: site.tagline },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: desc,
      images: ["/images/og.png"],
    },
  }
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.legalName,
    url: site.url,
    description: site.description,
    sameAs: [site.instagram],
    location: branches.map((b) => ({
      "@type": "HairSalon",
      name: `${site.name} ${b.name}`,
      address: {
        "@type": "PostalAddress",
        streetAddress: b.address,
        addressLocality: b.city,
        addressRegion: "Kepulauan Riau",
        addressCountry: "ID",
      },
      telephone: b.phone,
      openingHours: `Mo-Su ${b.open}-${b.close}`,
      url: `${site.url}/branches/${b.slug}`,
      image: `${site.url}${b.image}`,
    })),
  }
}

export function branchJsonLd(branch: (typeof branches)[number]) {
  return {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    name: `${site.name} ${branch.name}`,
    parentOrganization: { "@type": "Organization", name: site.legalName },
    address: {
      "@type": "PostalAddress",
      streetAddress: branch.address,
      addressLocality: branch.city,
      addressRegion: "Kepulauan Riau",
      addressCountry: "ID",
    },
    telephone: branch.phone,
    openingHours: `Mo-Su ${branch.open}-${branch.close}`,
    url: `${site.url}/branches/${branch.slug}`,
    image: `${site.url}${branch.image}`,
  }
}
