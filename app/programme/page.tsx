import { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Programme | MoMUN 2026",
  description: "View the schedule and programme for MoMUN 2026 - October 31 - November 1, 2026.",
}

export default function ProgrammePage() {
  return (
    <main className="bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative bg-primary pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
              Schedule
            </p>
            <h1 className="mb-6 font-serif text-4xl font-bold text-primary-foreground md:text-5xl lg:text-6xl">
              Conference Programme
            </h1>
            <p className="text-lg leading-relaxed text-primary-foreground/80">
              Two days of engaging debate, diplomacy, and collaboration. 
              Here&apos;s what to expect at MoMUN 2026.
            </p>
          </div>
        </div>
      </section>

      {/* Schedule TBA */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-lg border border-border bg-card p-16 text-center">
            <Clock className="mx-auto mb-6 h-12 w-12 text-muted-foreground/40" />
            <h2 className="mb-3 font-serif text-2xl font-bold text-foreground">
              Programme To Be Announced
            </h2>
            <p className="mx-auto max-w-md text-muted-foreground">
              The full conference schedule will be published closer to the event date of October 31 – November 1, 2026.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
