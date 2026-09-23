import { cn } from "@/lib/utils"

export function Frame({
  index,
  label,
  className,
  children,
}: {
  index?: string
  label?: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <section className={cn("border-steel/25 relative border-t", className)}>
      {(index || label) && (
        <div className="mx-auto flex max-w-[1400px] items-center gap-4 px-5 pt-6 sm:px-8">
          {index && (
            <span className="font-heading text-red text-sm tracking-[0.2em]">
              {index}
            </span>
          )}
          {label && (
            <span className="font-heading text-steel text-sm tracking-[0.3em] uppercase">
              {label}
            </span>
          )}
          <span className="bg-steel/25 h-px flex-1" />
        </div>
      )}
      {children}
    </section>
  )
}

export function Container({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <div
      className={cn("mx-auto w-full max-w-[1400px] px-5 sm:px-8", className)}
    >
      {children}
    </div>
  )
}

export function SectionTitle({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <h2
      className={cn(
        "font-heading text-4xl leading-[0.95] uppercase sm:text-6xl lg:text-7xl",
        className,
      )}
    >
      {children}
    </h2>
  )
}
