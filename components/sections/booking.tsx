"use client"

import { useMemo, useState } from "react"
import { branches } from "@/data/branches"
import { services } from "@/data/services"
import { barbers } from "@/data/barbers"
import { Container, Frame, SectionTitle } from "@/components/ui/frame"
import { buildWhatsAppMessage, whatsappUrl } from "@/lib/whatsapp"
import { cn } from "@/lib/utils"

const fieldset =
  "w-full border border-steel/30 bg-black px-4 py-3 text-bone placeholder:text-steel focus:border-red focus:outline-none"
const label = "font-heading text-xs tracking-[0.25em] text-steel uppercase"

export function BookingSection({ compact = false }: { compact?: boolean }) {
  const [step, setStep] = useState(0)
  const [branch, setBranch] = useState("")
  const [service, setService] = useState("")
  const [barber, setBarber] = useState("Barber mana saja")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [notes, setNotes] = useState("")

  const payload = useMemo(
    () => ({ branch, service, barber, date, time, name, phone, notes }),
    [branch, service, barber, date, time, name, phone, notes],
  )

  const canNext =
    step === 0
      ? branch !== "" && service !== ""
      : step === 1
        ? date !== "" && time !== ""
        : true
  const canSubmit = name.trim() !== "" && phone.trim() !== ""

  const steps = ["Cabang & Layanan", "Barber & Jadwal", "Data Kamu"]

  return (
    <Frame index={compact ? undefined : "08"} label="Booking">
      <Container className={cn("py-16 sm:py-24", compact && "py-10 sm:py-14")}>
        <SectionTitle>Book Your Chair</SectionTitle>
        <p className="text-bone/70 mt-5 max-w-md">
          Pilih tempat, pilih layanan, sisanya kami urus. Booking dikirim lewat
          WhatsApp.
        </p>

        <ol className="mt-10 flex flex-wrap gap-x-8 gap-y-2">
          {steps.map((s, i) => (
            <li
              key={s}
              className={cn(
                "font-heading text-xs tracking-[0.25em] uppercase",
                i === step
                  ? "text-red"
                  : i < step
                    ? "text-bone/70"
                    : "text-steel",
              )}
            >
              {String(i + 1).padStart(2, "0")} {s}
            </li>
          ))}
        </ol>

        <div className="border-steel/25 bg-charcoal mt-8 max-w-2xl border p-6 sm:p-8">
          {step === 0 && (
            <div className="grid gap-6">
              <label className="grid gap-2">
                <span className={label}>Cabang</span>
                <select
                  className={fieldset}
                  value={branch}
                  onChange={(e) => setBranch(e.target.value)}
                >
                  <option value="">Pilih cabang</option>
                  {branches.map((b) => (
                    <option key={b.id} value={`${b.name} (${b.city})`}>
                      {b.name} — {b.city}
                    </option>
                  ))}
                </select>
              </label>
              <label className="grid gap-2">
                <span className={label}>Layanan</span>
                <select
                  className={fieldset}
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                >
                  <option value="">Pilih layanan</option>
                  {services.map((s) => (
                    <option key={s.id} value={s.name}>
                      {s.name} — {s.duration} menit
                    </option>
                  ))}
                </select>
              </label>
            </div>
          )}

          {step === 1 && (
            <div className="grid gap-6">
              <label className="grid gap-2">
                <span className={label}>Barber</span>
                <select
                  className={fieldset}
                  value={barber}
                  onChange={(e) => setBarber(e.target.value)}
                >
                  <option value="Barber mana saja">Barber mana saja</option>
                  {barbers.map((b) => (
                    <option key={b.id} value={b.name}>
                      {b.name}
                    </option>
                  ))}
                </select>
              </label>
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="grid gap-2">
                  <span className={label}>Tanggal</span>
                  <input
                    type="date"
                    className={fieldset}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </label>
                <label className="grid gap-2">
                  <span className={label}>Jam</span>
                  <input
                    type="time"
                    min="10:00"
                    max="21:00"
                    className={fieldset}
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                  />
                </label>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="grid gap-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="grid gap-2">
                  <span className={label}>Nama</span>
                  <input
                    className={fieldset}
                    placeholder="Nama kamu"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </label>
                <label className="grid gap-2">
                  <span className={label}>No. HP</span>
                  <input
                    className={fieldset}
                    placeholder="08xxxxxxxxxx"
                    inputMode="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </label>
              </div>
              <label className="grid gap-2">
                <span className={label}>Catatan (opsional)</span>
                <textarea
                  className={cn(fieldset, "min-h-24 resize-y")}
                  placeholder="Contoh: preferensi potongan"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                />
              </label>
              <div className="border-steel/25 border bg-black p-4">
                <p className={label}>Ringkasan</p>
                <pre className="font-body text-bone/80 mt-3 text-sm whitespace-pre-wrap">
                  {buildWhatsAppMessage(payload)}
                </pre>
              </div>
            </div>
          )}

          <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => setStep((s) => Math.max(0, s - 1))}
              disabled={step === 0}
              className="font-heading text-steel hover:text-bone text-xs tracking-[0.2em] uppercase disabled:opacity-30"
            >
              ← Kembali
            </button>

            {step < 2 ? (
              <button
                type="button"
                onClick={() => setStep((s) => s + 1)}
                disabled={!canNext}
                className="bg-red font-heading text-warmwhite hover:bg-red/85 inline-flex items-center gap-3 px-6 py-3.5 text-sm tracking-[0.15em] uppercase transition-colors disabled:cursor-not-allowed disabled:opacity-40"
              >
                Lanjut →
              </button>
            ) : (
              <a
                href={canSubmit ? whatsappUrl(payload) : undefined}
                target="_blank"
                rel="noopener noreferrer"
                aria-disabled={!canSubmit}
                onClick={(e) => {
                  if (!canSubmit) e.preventDefault()
                }}
                className={cn(
                  "bg-red font-heading text-warmwhite hover:bg-red/85 inline-flex items-center gap-3 px-6 py-3.5 text-sm tracking-[0.15em] uppercase transition-colors",
                  !canSubmit && "cursor-not-allowed opacity-40",
                )}
              >
                Lanjut ke WhatsApp →
              </a>
            )}
          </div>
        </div>
      </Container>
    </Frame>
  )
}
