import { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowRight, Calendar, CreditCard, Users, FileText, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Registration Guide | MoMUN 2026",
  description: "Everything you need to know about registering for MoMUN 2026 - deadlines, fees, and requirements.",
}

const deadlines = [
  { date: "April 24 – May 9, 2026", event: "Student Officer Applications", status: "soon" },
  { date: "April 27 – September 4, 2026", event: "Form I (School Registration)", status: "upcoming" },
  { date: "September 10 – October 9, 2026", event: "Form II (Delegate Assignment)", status: "upcoming" },
  { date: "September 14 – October 9, 2026", event: "Individual Delegate Registration", status: "upcoming" },
]

const fees = [
  { category: "Early Bird (per delegate)", amount: "TBD", note: "Until October 1" },
  { category: "Regular (per delegate)", amount: "TBD", note: "October 2–15" },
  { category: "Late Registration (per delegate)", amount: "TBD", note: "October 16–25" },
  { category: "Faculty Advisor", amount: "Free", note: "One per school" },
]

export default function RegistrationGuidePage() {
  return (
    <main className="bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative bg-primary pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
              How to Register
            </p>
            <h1 className="mb-6 font-serif text-4xl font-bold text-primary-foreground md:text-5xl lg:text-6xl">
              Registration Guide
            </h1>
            <p className="text-lg leading-relaxed text-primary-foreground/80">
              Everything you need to know about registering your delegation 
              for MoMUN 2026.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="border-b border-border bg-card py-8">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button asChild>
              <Link href="/register/school">
                School Registration
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild className="border border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground">
              <Link href="/country-list">
                View Country List
              </Link>
            </Button>
            <Button asChild className="border border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground">
              <Link href="/apply/chair">
                Student Officer Applications
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-lg border border-accent/30 bg-accent/5 p-6">
            <div className="flex gap-4">
              <AlertCircle className="h-6 w-6 shrink-0 text-accent" />
              <div>
                <h3 className="mb-2 font-semibold text-foreground">
                  Important for Faculty Advisors
                </h3>
                <p className="text-sm text-muted-foreground">
                  Before submitting your school registration, please read this guide 
                  carefully and review the{" "}
                  <Link href="/country-list" className="font-medium text-accent hover:underline">
                    Country List
                  </Link>{" "}
                  to see available country assignments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deadlines */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 flex items-center gap-4">
            <Calendar className="h-8 w-8 text-accent" />
            <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
              Important Deadlines
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            {deadlines.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col gap-2 rounded-lg border p-4 sm:flex-row sm:items-center sm:justify-between ${
                  item.status === "soon"
                    ? "border-accent/50 bg-accent/10"
                    : "border-border bg-card"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`h-3 w-3 rounded-full ${item.status === "soon" ? "bg-accent" : "bg-muted-foreground/40"}`} />
                  <span className="font-medium text-foreground">{item.event}</span>
                  {item.status === "soon" && (
                    <span className="rounded-full bg-accent px-2 py-0.5 text-xs font-semibold text-accent-foreground">
                      Closing Soon
                    </span>
                  )}
                </div>
                <span className={`pl-7 text-sm sm:pl-0 ${item.status === "soon" ? "font-semibold text-accent" : "text-muted-foreground"}`}>
                  {item.date}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fees */}
      <section className="bg-card py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 flex items-center gap-4">
            <CreditCard className="h-8 w-8 text-accent" />
            <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
              Fee Breakdown
            </h2>
          </div>

          <div className="overflow-hidden rounded-lg border border-border">
            <table className="w-full">
              <thead className="bg-muted">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                    Category
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                    Amount
                  </th>
                  <th className="hidden px-6 py-4 text-left text-sm font-semibold text-foreground sm:table-cell">
                    Note
                  </th>
                </tr>
              </thead>
              <tbody className="bg-background">
                {fees.map((fee, index) => (
                  <tr key={index} className="border-t border-border">
                    <td className="px-6 py-4 text-sm text-foreground">
                      {fee.category}
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-foreground">
                      {fee.amount}
                    </td>
                    <td className="hidden px-6 py-4 text-sm text-muted-foreground sm:table-cell">
                      {fee.note}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-sm text-muted-foreground">
            * Fees include conference materials, meals during the conference, and a delegate certificate.
          </p>
        </div>
      </section>

      {/* Payment Details */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 flex items-center gap-4">
            <FileText className="h-8 w-8 text-accent" />
            <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
              Payment Information
            </h2>
          </div>

          <div className="rounded-lg border border-border bg-card p-6">
            <p className="mb-4 text-muted-foreground">
              Payment details and bank account information will be provided upon 
              acceptance of your registration. Please ensure all payments are made 
              within the specified deadlines.
            </p>
            <p className="text-sm text-muted-foreground">
              For payment-related inquiries, please contact us at{" "}
              <a href="mailto:mun@moraitis.edu.gr" className="text-accent hover:underline">
                mun@moraitis.edu.gr
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Registration Steps */}
      <section className="bg-card py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 flex items-center gap-4">
            <Users className="h-8 w-8 text-accent" />
            <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
              How to Register
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border border-border bg-background p-6">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                1
              </div>
              <h3 className="mb-2 font-semibold text-foreground">Review Materials</h3>
              <p className="text-sm text-muted-foreground">
                Read this guide carefully and check the Country List for available 
                assignments.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-background p-6">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                2
              </div>
              <h3 className="mb-2 font-semibold text-foreground">Submit Registration</h3>
              <p className="text-sm text-muted-foreground">
                Complete the school registration form with your delegation details 
                and country preferences.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-background p-6">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                3
              </div>
              <h3 className="mb-2 font-semibold text-foreground">Confirmation</h3>
              <p className="text-sm text-muted-foreground">
                Receive confirmation with country assignments and payment instructions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold text-primary-foreground">
            Ready to Register?
          </h2>
          <p className="mb-8 text-primary-foreground/80">
            Start your school registration or apply to become a Student Officer.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link href="/register/school">
                School Registration
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" className="border border-white/50 bg-transparent text-white hover:bg-white/10">
              <Link href="/apply/chair">
                Student Officer Applications
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
