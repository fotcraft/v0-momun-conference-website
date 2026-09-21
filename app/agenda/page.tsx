import { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Agenda | MoMUN 2026",
  description: "View the committee topics and study guides for MoMUN 2026.",
}

const committees = [
  {
    abbreviation: "GA1",
    name: "Disarmament and International Security Committee",
    topics: [
      { title: "Assessing the implications of drone warfare for asymmetric conflict in the Red Sea", studyGuideUrl: "#" },
      { title: "Preventing the use of critical infrastructure sabotage as a means of coercion", studyGuideUrl: "#" },
    ],
  },
  {
    abbreviation: "GA3",
    name: "Social, Humanitarian and Cultural Committee",
    topics: [
      { title: "Addressing the cultural assimilation of marginalised refugee communities", studyGuideUrl: "#" },
      { title: "Combatting honour-based abuse and killings and ensuring the protection of victims", studyGuideUrl: "#" },
    ],
  },
  {
    abbreviation: "GA4",
    name: "Special Political and Decolonization Committee",
    topics: [
      { title: "Ensuring stability in regions affected by protracted and frozen conflicts", studyGuideUrl: "#" },
      { title: "The situation in Nakhchivan", studyGuideUrl: "#" },
    ],
  },
  {
    abbreviation: "GA6",
    name: "Legal Committee",
    topics: [
      { title: "Clarifying the limits of self-defense under the UN Charter in contemporary conflicts", studyGuideUrl: "#" },
      { title: "Defining the scope of digital sovereignty under international law", studyGuideUrl: "#" },
    ],
  },
  {
    abbreviation: "SC",
    name: "Security Council",
    topics: [
      { title: "Maintaining peace and security in the Strait of Hormuz during periods of heightened tensions", studyGuideUrl: "#" },
      { title: "Responding to the escalating instability in the Darfur region following the Siege of El Fasher", studyGuideUrl: "#" },
    ],
  },
  {
    abbreviation: "ECOSOC",
    name: "Economic and Social Council",
    topics: [
      { title: "Addressing the economic implications of illegal oil transfers in the South China Sea", studyGuideUrl: "#" },
      { title: "Balancing economic feasibility and environmental sustainability in the adoption of next-generation nuclear energy technologies", studyGuideUrl: "#" },
      { title: "Promoting efficient management of water resources in regions facing scarcity", studyGuideUrl: "#" },
    ],
  },
  {
    abbreviation: "HRC",
    name: "Human Rights Council",
    topics: [
      { title: "Ensuring protection against discrimination based on sexual orientation while upholding international human rights obligations", studyGuideUrl: "#" },
      { title: "Eradicating human trafficking networks through international cooperation", studyGuideUrl: "#" },
      { title: "Ensuring the protection of media workers and journalists in conflict zones", studyGuideUrl: "#" },
    ],
  },
  {
    abbreviation: "WB",
    name: "World Bank",
    topics: [
      { title: "Expanding financial inclusion through digital infrastructure in developing states", studyGuideUrl: "#" },
      { title: "Investing in resilient healthcare systems to mitigate future pandemic risks", studyGuideUrl: "#" },
    ],
  },
  {
    abbreviation: "UNESCO",
    name: "UN Educational, Scientific and Cultural Organization",
    topics: [
      { title: "Mitigating anthropogenic degradation of cultural heritage sites", studyGuideUrl: "#" },
      { title: "Addressing the exclusion of scientific theories from national education curricula due to cultural and ideological factors", studyGuideUrl: "#" },
      { title: "Balancing globalisation-driven economic development and the preservation of cultural heritage", studyGuideUrl: "#" },
    ],
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
                  <div className="flex w-full min-w-0 gap-5">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
                      {committee.abbreviation}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="mb-3">
                        <h3 className="font-serif text-xl font-bold text-foreground">
                          {committee.name}
                        </h3>
                      </div>
                      <ul className="flex flex-col gap-4">
                        {committee.topics.map((topic) => (
                          <li key={topic.title} className="flex items-start gap-3 text-sm text-foreground/80">
                            <span className="shrink-0" title={topic.studyGuideUrl === "#" ? "Study guide coming soon" : "Open study guide"}>
                              {topic.studyGuideUrl !== "#" ? (
                                <Button asChild size="icon" className="h-8 w-8 border border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground">
                                  <a href={topic.studyGuideUrl} target="_blank" rel="noopener noreferrer" aria-label={`Study Guide: ${topic.title}`}>
                                    <FileText className="h-4 w-4" aria-hidden="true" />
                                  </a>
                                </Button>
                              ) : (
                                <Button size="icon" disabled aria-label={`Study Guide coming soon: ${topic.title}`} className="h-8 w-8 border border-border bg-transparent text-muted-foreground">
                                  <FileText className="h-4 w-4" aria-hidden="true" />
                                </Button>
                              )}
                            </span>
                            <span className="min-w-0 pt-1.5">{topic.title}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
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
