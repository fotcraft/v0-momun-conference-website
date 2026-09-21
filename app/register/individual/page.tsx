import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Individual Registration | MoMUN 2026",
  description: "Register as an individual applicant for MoMUN 2026.",
}

export default function IndividualRegistrationPage() {
  return (
    <main className="bg-background">
      <Navbar />

      {/* Hero */}
      <section className="bg-primary pb-20 pt-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
              Registration
            </p>
            <h1 className="mb-6 font-serif text-4xl font-bold text-primary-foreground md:text-5xl lg:text-6xl">
              Individual Registration
            </h1>
            <p className="text-lg leading-relaxed text-primary-foreground/80">
              Register as an individual applicant for MoMUN 2026.
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
              src="https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=qpGH3e3XlkGdt2P9e5hDHscucAL9oRRFkRd3gu6ot0FUMzE5TzhYVjVCWFBVUEZPVkFOQzgzMk0wNi4u&amp;embed=true"
              frameBorder="0"
              marginWidth={0}
              marginHeight={0}
              style={{ border: "none", maxWidth: "100%", maxHeight: "100vh" }}
              allowFullScreen
              title="MoMUN 2026 Individual Registration Form"
            />
          </div>

          <div className="mt-8 rounded-lg border border-border bg-card p-6">
            <h3 className="mb-2 font-semibold text-foreground">Payment Information</h3>
            <p className="mb-4 text-sm text-muted-foreground">
              Before submitting, please review the payment details document for fee amounts and bank account information.
            </p>
            <a
              href="https://moraitis-my.sharepoint.com/:b:/g/personal/eflerianos_moraitis_edu_gr/IQANvKOuYwuAQ7qn-bW9Z4QJAQ1a1Lov6Sl2Cw19hnnJaJA?e=3e65Q2"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
            >
              View Payment Information
            </a>
          </div>

          <p className="mt-4 text-center text-sm text-muted-foreground">
            Having trouble with the form?{" "}
            <a
              href="https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=qpGH3e3XlkGdt2P9e5hDHscucAL9oRRFkRd3gu6ot0FUMzE5TzhYVjVCWFBVUEZPVkFOQzgzMk0wNi4u"
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
