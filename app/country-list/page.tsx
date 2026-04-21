import { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FileText, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Country List | MoMUN 2026",
  description: "View available countries for MoMUN 2026 delegation assignments.",
}

export default function CountryListPage() {
  return (
    <main className="bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative bg-primary pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Delegate Resources
            </p>
            <h1 className="mb-6 font-serif text-4xl font-bold text-primary-foreground md:text-5xl lg:text-6xl">
              Country List
            </h1>
            <p className="text-lg leading-relaxed text-primary-foreground/80">
              View the available countries for delegation assignments at MoMUN 2026.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <div className="rounded-lg border-2 border-dashed border-border bg-muted/30 p-16">
            <FileText className="mx-auto mb-6 h-16 w-16 text-muted-foreground" />
            <h2 className="mb-4 font-serif text-2xl font-bold text-foreground">
              Country List Coming Soon
            </h2>
            <p className="mb-8 text-muted-foreground">
              The official country list for MoMUN 2026 will be published here as a 
              downloadable PDF. Check back soon for updates.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button asChild>
                <Link href="/register/guide">
                  Registration Guide
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
