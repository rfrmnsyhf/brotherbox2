import { site } from "@/data/site"

export type BookingPayload = {
  branch: string
  service: string
  barber: string
  date: string
  time: string
  name: string
  phone: string
  notes?: string
}

export function buildWhatsAppMessage(p: BookingPayload): string {
  const lines = [
    "Halo Brotherbox,",
    "",
    "Saya ingin booking:",
    "",
    `Cabang   : ${p.branch}`,
    `Layanan  : ${p.service}`,
    `Barber   : ${p.barber}`,
    `Tanggal  : ${p.date}`,
    `Jam      : ${p.time}`,
    `Nama     : ${p.name}`,
    `No. HP   : ${p.phone}`,
  ]
  if (p.notes?.trim()) lines.push(`Catatan  : ${p.notes.trim()}`)
  return lines.join("\n")
}

export function whatsappUrl(payload?: BookingPayload, text?: string): string {
  const message = payload ? buildWhatsAppMessage(payload) : (text ?? "")
  const base = `https://wa.me/${site.whatsapp}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}
