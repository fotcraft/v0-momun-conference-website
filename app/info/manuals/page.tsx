import { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FileText, Download, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Manuals | MoMUN 2026",
  description: "Download delegate manuals and rules of procedure for MoMUN 2026.",
}

const manuals = [
  {
    title: "Delegate Manual",
    description: "Comprehensive guide for delegates including Rules of Procedure, tips for debate, and conference etiquette.",
    available: false,
  },
  {
    title: "Position Paper Guide",
    description: "Learn how to write an effective position paper for your assigned country.",
    available: false,
  },
  {
    title: "Resolution Writing Guide",
    description: "Step-by-step guide on drafting and submitting resolutions.",
    available: false,
  },
]

export default function ManualsPage() {
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
              Manuals & Guides
            </h1>
            <p className="text-lg leading-relaxed text-primary-foreground/80">
              Download essential resources to prepare for MoMUN 2026, including 
              Rules of Procedure and delegate guidelines.
            </p>
          </div>
        </div>
      </section>

      {/* Manuals List */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="flex flex-col gap-6">
            {manuals.map((manual) => (
              <div
                key={manual.title}
                className="flex flex-col gap-4 rounded-lg border border-border bg-card p-6 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex gap-4">
                  <FileText className="h-10 w-10 shrink-0 text-accent" />
                  <div>
                    <h3 className="mb-1 font-semibold text-foreground">
                      {manual.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {manual.description}
                    </p>
                  </div>
                </div>
                <div className="shrink-0 sm:ml-4">
                  {manual.available ? (
                    <Button variant="outline" size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      Download PDF
                    </Button>
                  ) : (
                    <Button variant="outline" size="sm" disabled>
                      Coming Soon
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-lg border border-border bg-muted/30 p-6 text-center">
            <p className="text-muted-foreground">
              Manuals will be available for download closer to the conference date. 
              Check back regularly for updates.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-card py-16">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="mb-4 font-serif text-2xl font-bold text-foreground">
            Need Help?
          </h2>
          <p className="mb-8 text-muted-foreground">
            If you have questions about conference procedures, reach out to our team.
          </p>
          <Button asChild>
            <Link href="/contact">
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
