import { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowRight, Calendar, Users, FileText, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Registration Guide | MoMUN 2026",
  description: "Everything you need to know about registering for MoMUN 2026 - deadlines, fees, and requirements.",
}

type DeadlineStatus = "open" | "closed" | "upcoming" | "closing-soon"

type Deadline = {
  event: string
  href?: string
} & (
  | { status: DeadlineStatus; startDate?: never; endDate?: never }
  | { status?: never; startDate: Date; endDate: Date }
)

const deadlineData: Deadline[] = [
  {
    startDate: new Date("2026-04-26"),
    endDate: new Date("2026-05-09"),
    event: "Student Officer Applications",
    href: "/apply/chair",
  },
  {
    status: "closing-soon",
    event: "Form I (School Registration)",
    href: "/register/school",
  },
  {
    startDate: new Date("2026-09-10"),
    endDate: new Date("2026-10-09"),
    event: "Form II (Delegate Assignment)",
  },
  {
    startDate: new Date("2026-09-14"),
    endDate: new Date("2026-10-09"),
    event: "Individual Delegate Registration",
    href: "/register/individual",
  },
]

function getStatus(start: Date, end: Date): DeadlineStatus {
  const now = new Date()
  const daysUntilEnd = (end.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)
  if (now < start) return "upcoming"
  if (now > end) return "closed"
  if (daysUntilEnd <= 7) return "closing-soon"
  return "open"
}

function formatDateRange(start: Date, end: Date): string {
  const opts: Intl.DateTimeFormatOptions = { month: "long", day: "numeric", year: "numeric" }
  return `${start.toLocaleDateString("en-GB", opts)} – ${end.toLocaleDateString("en-GB", opts)}`
}

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

      {/* Important Notice */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-lg border border-accent/30 bg-accent/5 p-6">
            <div className="flex gap-4">
              <AlertCircle className="h-6 w-6 shrink-0 text-accent" />
              <div>
                <h3 className="mb-2 font-semibold text-foreground">
                  Important for School MUN Advisors
                </h3>
                <p className="text-sm text-muted-foreground">
                  Before submitting your school registration, please read this guide 
                  carefully and review the{" "}
                  <Link href="/country-list" className="font-medium text-accent hover:underline">
                    Country List
                  </Link>{" "}
                  to see available country assignments.
                </p>
                <Button asChild className="mt-4">
                  <Link href="/country-list">
                    View Country List
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
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
            {deadlineData.map((item, index) => {
              const status = item.status !== undefined ? item.status : getStatus(item.startDate, item.endDate)
              const isOpen = status === "open"
              const isClosingSoon = status === "closing-soon"
              const isClosed = status === "closed"
              const isActive = isOpen || isClosingSoon
              return (
                <div
                  key={index}
                  className={`flex flex-col gap-2 rounded-lg border p-4 sm:flex-row sm:items-center sm:justify-between ${
                    isClosingSoon
                      ? "border-[#c47b35]/40 bg-[#c47b35]/10"
                      : isOpen
                      ? "border-primary/40 bg-primary/5"
                      : isClosed
                      ? "border-border bg-muted/30 opacity-60"
                      : "border-border bg-card"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`h-3 w-3 rounded-full ${
                      isClosingSoon ? "bg-[#c47b35]" :
                      isOpen ? "bg-primary" :
                      isClosed ? "bg-muted-foreground/30" :
                      "bg-muted-foreground/40"
                    }`} />
                    <span className={`font-medium ${isClosed ? "text-muted-foreground line-through" : "text-foreground"}`}>
                      {isActive && item.href ? (
                        <Link href={item.href} className="underline underline-offset-4 hover:text-primary">
                          {item.event}
                        </Link>
                      ) : item.event}
                    </span>
                    {isClosingSoon && (
                      <span className="rounded-full bg-[#c47b35] px-2 py-0.5 text-xs font-semibold text-white">
                        {item.href === "/register/school" ? "Closing soon" : "Closing Soon"}
                      </span>
                    )}
                    {isOpen && (
                      <span className="rounded-full bg-primary px-2 py-0.5 text-xs font-semibold text-primary-foreground">
                        Open
                      </span>
                    )}
                    {isClosed && (
                      <span className="rounded-full bg-muted px-2 py-0.5 text-xs font-semibold text-muted-foreground">
                        Closed
                      </span>
                    )}
                  </div>
                  {item.startDate && item.endDate && (
                  <div className="flex items-center gap-3 pl-7 sm:pl-0">
                    <span className={`text-sm ${isActive ? "font-semibold text-primary" : "text-muted-foreground"}`}>
                      {formatDateRange(item.startDate, item.endDate)}
                    </span>
                  </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Payment Details */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 flex items-center gap-4">
            <FileText className="h-8 w-8 text-accent" />
            <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
              Fees &amp; Payment
            </h2>
          </div>

          <div className="rounded-lg border border-border bg-card p-6">
            <p className="mb-6 text-muted-foreground">
              Please review the Payment Information document below for full details on fees, bank account information, and payment deadlines.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button asChild>
                <a
                  href="https://moraitis-my.sharepoint.com/:b:/g/personal/eflerianos_moraitis_edu_gr/IQANvKOuYwuAQ7qn-bW9Z4QJAQ1a1Lov6Sl2Cw19hnnJaJA?e=3e65Q2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FileText className="mr-2 h-4 w-4" />
                  View Payment Information
                </a>
              </Button>
              <p className="text-sm text-muted-foreground">
                For inquiries:{" "}
                <a href="mailto:mun@moraitis.edu.gr" className="text-accent hover:underline">
                  mun@moraitis.edu.gr
                </a>
              </p>
            </div>
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
            Register your school or apply as an individual delegate.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link href="/register/school">
                School Registration (Form I)
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/register/individual">
                Individual Delegate Registration
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
