import Link from "next/link"
import { cn } from "@/lib/utils"

export function ArrowLink({
  href,
  children,
  variant = "solid",
  className,
}: {
  href: string
  children: React.ReactNode
  variant?: "solid" | "outline" | "ghost"
  className?: string
}) {
  const external = href.startsWith("http") || href.startsWith("mailto")
  const base =
    "group inline-flex items-center justify-center gap-3 font-heading uppercase tracking-[0.15em] text-sm px-6 py-3.5 transition-colors duration-200"
  const variants = {
    solid: "bg-red text-warmwhite hover:bg-red/85",
    outline:
      "border border-bone/40 text-bone hover:border-bone hover:bg-bone hover:text-black",
    ghost: "text-bone hover:text-red px-0",
  }
  const content = (
    <>
      {children}
      <span className="transition-transform duration-200 group-hover:translate-x-1">
        →
      </span>
    </>
  )
  if (external) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className={cn(base, variants[variant], className)}
      >
        {content}
      </a>
    )
  }
  return (
    <Link href={href} className={cn(base, variants[variant], className)}>
      {content}
    </Link>
  )
}
