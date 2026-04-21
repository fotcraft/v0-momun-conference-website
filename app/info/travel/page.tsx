import { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Plane, Hotel, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Travel & Accommodation | MoMUN 2026",
  description: "Information about travel and accommodation options for MoMUN 2026 in Athens, Greece.",
}

export default function TravelPage() {
  return (
    <main className="bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative bg-primary pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Visitor Information
            </p>
            <h1 className="mb-6 font-serif text-4xl font-bold text-primary-foreground md:text-5xl lg:text-6xl">
              Travel & Accommodation
            </h1>
            <p className="text-lg leading-relaxed text-primary-foreground/80">
              Plan your trip to Athens for MoMUN 2026. Information about getting 
              here and where to stay.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Travel */}
            <div className="rounded-lg border border-border bg-card p-8">
              <Plane className="mb-4 h-10 w-10 text-accent" />
              <h2 className="mb-4 font-serif text-xl font-bold text-foreground">
                Getting to Athens
              </h2>
              <p className="mb-4 text-muted-foreground">
                Athens International Airport (ATH) is well-connected to major 
                European cities and beyond. From the airport, you can reach the 
                Psychiko area by:
              </p>
              <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground">
                <li>Metro Line 3 + taxi/bus</li>
                <li>Direct taxi (approximately 40 minutes)</li>
                <li>Airport shuttle services</li>
              </ul>
            </div>

            {/* Accommodation */}
            <div className="rounded-lg border border-border bg-card p-8">
              <Hotel className="mb-4 h-10 w-10 text-accent" />
              <h2 className="mb-4 font-serif text-xl font-bold text-foreground">
                Where to Stay
              </h2>
              <p className="mb-4 text-muted-foreground">
                Accommodation recommendations will be provided in coordination 
                with Moraitis School. We&apos;ll share a list of suggested hotels 
                near the venue with special rates for conference participants.
              </p>
              <p className="text-sm text-muted-foreground">
                Details coming soon.
              </p>
            </div>
          </div>

          <div className="mt-12 rounded-lg border-2 border-dashed border-border bg-muted/30 p-8 text-center">
            <h3 className="mb-4 font-serif text-xl font-bold text-foreground">
              More Information Coming Soon
            </h3>
            <p className="mb-6 text-muted-foreground">
              Detailed travel and accommodation information, including recommended 
              hotels and transportation options, will be published closer to the 
              conference date.
            </p>
            <Button asChild>
              <Link href="/contact">
                Contact Us for Inquiries
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
