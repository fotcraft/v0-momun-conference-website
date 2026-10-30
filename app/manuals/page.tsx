import type { Metadata } from "next"
import Link from "next/link"
import { BookOpen, Download, FileText } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Manuals | MoMUN 2026",
  description:
    "Download the MoMUN Delegate and Student Officer Manuals and the Security Council and World Bank supplements.",
}

const generalManuals = [
  {
    title: "Delegate Manual",
    description:
      "Preparation, research, ambassadors, lobbying, speeches, resolutions, amendments and voting.",
    href: "/documents/manuals/delegate-manual.pdf",
    audience: "For delegates",
  },
  {
    title: "Student Officer Manual",
    description:
      "Rules of Procedure, chairing guidance, resolution formatting and correction.",
    href: "/documents/manuals/student-officer-manual.pdf",
    audience: "For Student Officers",
  },
]

const committeeManuals = [
  {
    title: "Security Council Supplement",
    description:
      "Council membership, the right to veto, voting, negotiation and amendments.",
    href: "/documents/manuals/security-council-manual.pdf",
    audience: "For Security Council chairs and delegates",
  },
  {
    title: "World Bank Supplement",
    description:
      "Delegation budgets, funding pledges, clause-by-clause debate, weighted voting and financial amendments.",
    href: "/documents/manuals/world-bank-manual.pdf",
    audience: "For World Bank chairs and delegates",
  },
]

type Manual = (typeof generalManuals)[number]

function ManualCard({ manual }: { manual: Manual }) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-border bg-card p-6 md:p-8">
      <FileText className="mb-5 h-8 w-8 text-primary" aria-hidden="true" />
      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-primary">
        {manual.audience}
      </p>
      <h3 className="mb-3 font-serif text-2xl font-bold text-foreground">
        {manual.title}
      </h3>
      <p className="mb-6 leading-relaxed text-muted-foreground">
        {manual.description}
      </p>
      <div className="mt-auto flex flex-wrap items-center gap-4">
        <a
          href={manual.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Read ${manual.title} PDF in a new tab`}
          className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        >
          <BookOpen className="h-4 w-4" aria-hidden="true" />
          Read PDF
        </a>
        <a
          href={manual.href}
          download
          aria-label={`Download ${manual.title} PDF`}
          className="inline-flex items-center gap-2 rounded-md py-2 text-sm font-semibold text-primary underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        >
          <Download className="h-4 w-4" aria-hidden="true" />
          Download
        </a>
      </div>
    </article>
  )
}

export default function ManualsPage() {
  return (
    <main className="bg-background">
      <Navbar />
      <section className="bg-primary pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
              Conference Information
            </p>
            <h1 className="mb-6 font-serif text-4xl font-bold text-primary-foreground md:text-5xl">
              Manuals
            </h1>
            <p className="text-lg leading-relaxed text-primary-foreground/80">
              Guides to preparing for MoMUN and participating in committee proceedings.
            </p>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24" aria-labelledby="general-manuals">
        <div className="mx-auto max-w-5xl px-6">
          <h2 id="general-manuals" className="mb-4 font-serif text-3xl font-bold text-foreground">
            General Manuals
          </h2>
          <p className="mb-8 max-w-3xl leading-relaxed text-muted-foreground">
            Start with the manual for your role. These guides explain conference preparation,
            the Rules of Procedure and resolution writing.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {generalManuals.map((manual) => <ManualCard key={manual.href} manual={manual} />)}
          </div>
          <h2 id="committee-supplements" className="mt-16 mb-4 font-serif text-3xl font-bold text-foreground">
            Committee Supplements
          </h2>
          <p className="mb-8 max-w-3xl leading-relaxed text-muted-foreground">
            Security Council and World Bank participants should also read their committee’s
            supplement alongside the general manuals.
          </p>
          <div className="grid gap-6 md:grid-cols-2" aria-labelledby="committee-supplements">
            {committeeManuals.map((manual) => <ManualCard key={manual.href} manual={manual} />)}
          </div>
          <p className="mt-10 leading-relaxed text-muted-foreground">
            All manuals are available as PDFs. Please also read the{" "}
            <Link href="/code-of-conduct" className="font-semibold text-primary underline underline-offset-4">
              Code of Conduct
            </Link>.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  )
}
