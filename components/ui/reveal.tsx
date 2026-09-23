"use client"

import { motion, useReducedMotion } from "motion/react"
import { cn } from "@/lib/utils"

export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
}: {
  children: React.ReactNode
  delay?: number
  className?: string
  as?: "div" | "span" | "li"
}) {
  const reduce = useReducedMotion()
  const MotionTag = motion[as]
  if (reduce) {
    const Tag = as
    return <Tag className={className}>{children}</Tag>
  }
  return (
    <MotionTag
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={cn(className)}
    >
      {children}
    </MotionTag>
  )
}
