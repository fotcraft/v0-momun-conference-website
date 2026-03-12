import Image from "next/image"
import { CalendarDays, MapPin } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary/75" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 py-32 text-center">
        <Image
          src="/images/momun-logo.png"
          alt="MoMUN Logo"
          width={160}
          height={160}
          className="mb-8"
          priority
        />

        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-accent">
          Moraitis School Presents
        </p>

        <h1 className="mb-4 text-balance font-serif text-5xl font-bold leading-tight tracking-tight text-primary-foreground md:text-7xl">
          MoMUN 2026
        </h1>

        <p className="mb-8 text-lg font-semibold tracking-wide text-accent md:text-xl">
          Equity in an Uneducated World
        </p>

        <p className="mb-10 max-w-2xl text-pretty text-lg leading-relaxed text-primary-foreground/80 md:text-xl">
          The Moraitis Model United Nations Conference. Two days of diplomacy,
          debate, and global cooperation in the heart of Athens.
        </p>

        <div className="mb-10 flex flex-col items-center gap-4 sm:flex-row sm:gap-8">
          <div className="flex items-center gap-2 text-primary-foreground/90">
            <CalendarDays className="h-5 w-5 text-accent" />
            <span className="text-sm font-medium">November 6 - 7, 2026</span>
          </div>
          <div className="flex items-center gap-2 text-primary-foreground/90">
            <MapPin className="h-5 w-5 text-accent" />
            <span className="text-sm font-medium">Moraitis School, Athens</span>
          </div>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            href="#contact"
            className="rounded-md bg-accent px-8 py-3.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
          >
            Register Now
          </a>
          <a
            href="#about"
            className="rounded-md border border-primary-foreground/30 px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex h-8 w-5 items-start justify-center rounded-full border-2 border-primary-foreground/40 p-1">
          <div className="h-2 w-1 animate-bounce rounded-full bg-primary-foreground/60" />
        </div>
      </div>
    </section>
  )
}
