import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowLeft } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Student Officer Application | MoMUN 2026",
  description: "Apply to be a Student Officer at MoMUN 2026 - Chair or Co-Chair positions available across all committees.",
}

export default function ChairApplicationPage() {
  return (
    <main className="bg-background">
      <Navbar />

      {/* Hero */}
      <section className="bg-primary pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
              Join the Team
            </p>
            <h1 className="mb-6 font-serif text-4xl font-bold text-primary-foreground md:text-5xl lg:text-6xl">
              Student Officer Application
            </h1>
            <p className="text-lg leading-relaxed text-primary-foreground/80">
              Apply to serve as a Chair or Co-Chair at MoMUN 2026. Applications close on May 9, 2026.
            </p>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="overflow-hidden rounded-lg border border-border bg-card">
            <iframe
              width="100%"
              height="600px"
              src="https://forms.cloud.microsoft/e/cQB3kufU01?embed=true"
              frameBorder="0"
              marginWidth={0}
              marginHeight={0}
              style={{ border: "none", maxWidth: "100%", maxHeight: "100vh" }}
              allowFullScreen
              title="MoMUN 2026 Student Officer Application"
            />
          </div>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Having trouble with the form?{" "}
            <a
              href="https://forms.cloud.microsoft/e/cQB3kufU01"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary hover:underline"
            >
              Open it directly
            </a>{" "}
            or contact us at{" "}
            <a href="mailto:mun@moraitis.edu.gr" className="font-medium text-primary hover:underline">
              mun@moraitis.edu.gr
            </a>
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
