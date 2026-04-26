import { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FileText, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Agenda | MoMUN 2026",
  description: "View the committee topics and study guides for MoMUN 2026.",
}

const committees = [
  {
    abbreviation: "GA1",
    name: "General Assembly First Committee",
    rsm: "Babalis, Manoglou",
    topics: [
      "Assessing the implications of drone warfare for asymmetric conflict in the Red Sea",
      "Preventing the use of critical infrastructure sabotage as a means of coercion",
    ],
    studyGuideUrl: "#",
  },
  {
    abbreviation: "GA3",
    name: "General Assembly Third Committee",
    rsm: "Komondouros",
    topics: [
      "Addressing the cultural assimilation of marginalised refugee communities",
      "Combatting honour-based abuse and killings and ensuring the protection of victims",
    ],
    studyGuideUrl: "#",
  },
  {
    abbreviation: "GA4",
    name: "General Assembly Fourth Committee",
    rsm: "Komondouros",
    topics: [
      "Ensuring stability in regions affected by protracted and frozen conflicts",
      "The situation in Nakhchivan",
    ],
    studyGuideUrl: "#",
  },
  {
    abbreviation: "GA6",
    name: "General Assembly Sixth Committee",
    rsm: "Manoglou",
    topics: [
      "Clarifying the limits of self-defense under the UN Charter in contemporary conflicts",
      "Defining the scope of digital sovereignty under international law",
    ],
    studyGuideUrl: "#",
  },
  {
    abbreviation: "SC",
    name: "Security Council",
    rsm: "Babalis",
    topics: [
      "Maintaining peace and security in the Strait of Hormuz during periods of heightened tensions",
      "(open)",
    ],
    studyGuideUrl: "#",
  },
  {
    abbreviation: "ECOSOC",
    name: "Economic and Social Council",
    rsm: "Fotiadis",
    topics: [
      "Addressing the economic implications of illegal oil transfers in the South China Sea",
      "Balancing economic feasibility and environmental sustainability in the adoption of next-generation nuclear energy technologies",
      "Promoting efficient management of water resources in regions facing scarcity",
    ],
    studyGuideUrl: "#",
  },
  {
    abbreviation: "HRC",
    name: "Human Rights Council",
    rsm: "Piperaki",
    topics: [
      "Ensuring protection against discrimination based on sexual orientation while upholding international human rights obligations",
      "Eradicating human trafficking networks through international cooperation",
      "Ensuring the protection of media workers and journalists in conflict zones",
    ],
    studyGuideUrl: "#",
  },
  {
    abbreviation: "WB",
    name: "World Bank",
    rsm: "Piperaki",
    topics: [
      "Expanding financial inclusion through digital infrastructure in developing states",
      "Investing in resilient healthcare systems to mitigate future pandemic risks",
    ],
    studyGuideUrl: "#",
  },
  {
    abbreviation: "UNESCO",
    name: "UN Educational, Scientific and Cultural Organization",
    rsm: "Fotiadis",
    topics: [
      "Mitigating anthropogenic degradation of cultural heritage sites",
      "Addressing the exclusion of scientific theories from national education curricula due to cultural and ideological factors",
      "Balancing globalisation-driven economic development and the preservation of cultural heritage",
    ],
    studyGuideUrl: "#",
  },
]

export default function AgendaPage() {
  return (
    <main className="bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative bg-primary pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Conference Agenda
            </p>
            <h1 className="mb-6 font-serif text-4xl font-bold text-primary-foreground md:text-5xl lg:text-6xl">
              Committees & Topics
            </h1>
            <p className="text-lg leading-relaxed text-primary-foreground/80">
              Explore our nine committees and access study guides to prepare 
              for your participation in MoMUN 2026.
            </p>
          </div>
        </div>
      </section>

      {/* Committees List */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12">
            <p className="text-muted-foreground">
              Study guides will be published as they become available. Check back 
              regularly for updates.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {committees.map((committee) => (
              <div
                key={committee.abbreviation}
                className="rounded-lg border border-border bg-card p-6 md:p-8"
              >
                <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                  <div className="flex gap-5">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
                      {committee.abbreviation}
                    </div>
                    <div className="flex-1">
                      <div className="mb-3 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        <h3 className="font-serif text-xl font-bold text-foreground">
                          {committee.name}
                        </h3>
                        <span className="text-sm text-muted-foreground">
                          RSM: {committee.rsm}
                        </span>
                      </div>
                      <ul className="flex flex-col gap-2">
                        {committee.topics.map((topic, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                            <span className={topic === "(open)" ? "italic text-muted-foreground" : ""}>
                              {topic}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="shrink-0 md:ml-6">
                    {committee.studyGuideUrl !== "#" ? (
                      <Button asChild size="sm" className="border border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground">
                        <a href={committee.studyGuideUrl} target="_blank" rel="noopener noreferrer">
                          <FileText className="mr-2 h-4 w-4" />
                          Study Guide
                          <ExternalLink className="ml-2 h-3 w-3" />
                        </a>
                      </Button>
                    ) : (
                      <Button size="sm" disabled className="border border-border bg-transparent text-muted-foreground">
                        <FileText className="mr-2 h-4 w-4" />
                        Coming Soon
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-card py-16">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="mb-4 font-serif text-2xl font-bold text-foreground">
            Ready to Register?
          </h2>
          <p className="mb-8 text-muted-foreground">
            Read our registration guide and submit your school delegation.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button asChild>
              <Link href="/register/guide">Registration Guide</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
