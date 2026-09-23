import Link from "next/link"
import { Container } from "@/components/ui/frame"

export default function NotFound() {
  return (
    <section>
      <Container className="flex min-h-[70vh] flex-col justify-center py-32">
        <p className="font-heading text-red text-xs tracking-[0.4em] uppercase">
          404
        </p>
        <h1 className="font-heading mt-5 text-6xl leading-[0.94] uppercase sm:text-8xl">
          Halaman
          <br />
          Tidak Ada
        </h1>
        <p className="text-bone/70 mt-7 max-w-md">
          Tautan yang kamu buka tidak ditemukan atau sudah dipindahkan.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/"
            className="bg-red font-heading text-warmwhite hover:bg-red/85 inline-flex items-center gap-3 px-6 py-3.5 text-sm tracking-[0.15em] uppercase transition-colors"
          >
            Ke Home →
          </Link>
          <Link
            href="/branches"
            className="border-bone/40 font-heading hover:bg-bone inline-flex items-center gap-3 border px-6 py-3.5 text-sm tracking-[0.15em] uppercase transition-colors hover:text-black"
          >
            Lihat Cabang
          </Link>
        </div>
      </Container>
    </section>
  )
}
