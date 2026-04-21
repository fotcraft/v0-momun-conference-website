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
    abbreviation: "GA 1",
    name: "General Assembly First Committee",
    topic: "Disarmament and International Security",
    description: "The First Committee deals with disarmament, global challenges, and threats to peace that affect the international community.",
    studyGuideUrl: "#", // To be updated
  },
  {
    abbreviation: "GA 3",
    name: "General Assembly Third Committee",
    topic: "Social, Humanitarian and Cultural Affairs",
    description: "Focuses on social development questions, including human rights, humanitarian affairs, and advancement of women and children.",
    studyGuideUrl: "#",
  },
  {
    abbreviation: "GA 4",
    name: "General Assembly Fourth Committee",
    topic: "Special Political and Decolonization",
    description: "Addresses special political subjects including decolonization, Palestinian refugees, peacekeeping, and outer space.",
    studyGuideUrl: "#",
  },
  {
    abbreviation: "GA 6",
    name: "General Assembly Sixth Committee",
    topic: "Legal Affairs",
    description: "The Legal Committee considers legal questions and the progressive development of international law.",
    studyGuideUrl: "#",
  },
  {
    abbreviation: "ECOSOC",
    name: "Economic and Social Council",
    topic: "Sustainable Development and Global Prosperity",
    description: "Coordinates the economic and social work of the UN, addressing sustainable development, education, and global prosperity.",
    studyGuideUrl: "#",
  },
  {
    abbreviation: "SC",
    name: "Security Council",
    topic: "Maintaining International Peace and Security",
    description: "Tasked with maintaining international peace and security, the Security Council addresses threats and authorizes collective action.",
    studyGuideUrl: "#",
  },
  {
    abbreviation: "WHO",
    name: "World Health Organization",
    topic: "Global Health Challenges",
    description: "Directs international health within the UN system, leading responses to health emergencies and promoting well-being.",
    studyGuideUrl: "#",
  },
  {
    abbreviation: "WB",
    name: "World Bank",
    topic: "Economic Development and Poverty Reduction",
    description: "Works to reduce poverty and support development by providing loans, policy advice, and technical assistance.",
    studyGuideUrl: "#",
  },
  {
    abbreviation: "UNESCO",
    name: "UN Educational, Scientific and Cultural Organization",
    topic: "Education, Science, and Culture",
    description: "Seeks to build peace through international cooperation in education, sciences, culture, and communication.",
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

          <div className="flex flex-col gap-6">
            {committees.map((committee) => (
              <div
                key={committee.abbreviation}
                className="rounded-lg border border-border bg-card p-6 md:p-8"
              >
                <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                  <div className="flex gap-6">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-primary text-lg font-bold text-primary-foreground">
                      {committee.abbreviation}
                    </div>
                    <div>
                      <h3 className="mb-1 font-serif text-xl font-bold text-foreground">
                        {committee.name}
                      </h3>
                      <p className="mb-2 font-medium text-accent">
                        {committee.topic}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {committee.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="shrink-0 md:ml-6">
                    {committee.studyGuideUrl !== "#" ? (
                      <Button asChild variant="outline" size="sm">
                        <a href={committee.studyGuideUrl} target="_blank" rel="noopener noreferrer">
                          <FileText className="mr-2 h-4 w-4" />
                          Study Guide
                          <ExternalLink className="ml-2 h-3 w-3" />
                        </a>
                      </Button>
                    ) : (
                      <Button variant="outline" size="sm" disabled>
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
            <Button asChild variant="outline">
              <Link href="/register/school">School Registration</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
