import { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Privacy Policy | MoMUN 2026",
  description: "Privacy Policy for the Moraitis Model United Nations Conference 2026.",
}

const PRIVACY_POLICY_URL =
  "https://moraitis-my.sharepoint.com/:b:/g/personal/eflerianos_moraitis_edu_gr/IQCUg5MdQDEQTp9ntBfZxMujAXlYFMXkiqGYg_oeWV9SMkY?e=fCX5mI"

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-background">
      <Navbar />

      {/* Hero */}
      <section className="bg-primary pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
              Legal
            </p>
            <h1 className="mb-6 font-serif text-4xl font-bold text-primary-foreground md:text-5xl">
              Privacy Policy
            </h1>
            <p className="text-lg leading-relaxed text-primary-foreground/80">
              How MoMUN 2026 collects, uses, and protects your personal information.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mb-10 rounded-lg border border-border bg-card p-8 text-center">
            <p className="mb-6 text-muted-foreground">
              Our full Privacy Policy is available as a PDF document. Click the button
              below to view or download it.
            </p>
            <Button asChild size="lg">
              <a
                href={PRIVACY_POLICY_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Privacy Policy
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          <div className="rounded-lg border border-border bg-card p-8">
            <h2 className="mb-4 font-serif text-xl font-bold text-foreground">
              Contact
            </h2>
            <p className="text-muted-foreground">
              For any privacy-related questions or requests, please contact us at{" "}
              <a
                href="mailto:mun@moraitis.edu.gr"
                className="font-medium text-primary hover:underline"
              >
                mun@moraitis.edu.gr
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
