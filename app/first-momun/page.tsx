import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowRight, Calendar, MapPin, Users, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "1st MoMUN | MoMUN 2026",
  description: "The inaugural Moraitis Model United Nations conference - October 31 - November 1, 2026 in Athens, Greece.",
}

const committees = [
  { name: "General Assembly First Committee", abbreviation: "GA 1" },
  { name: "General Assembly Third Committee", abbreviation: "GA 3" },
  { name: "General Assembly Fourth Committee", abbreviation: "GA 4" },
  { name: "General Assembly Sixth Committee", abbreviation: "GA 6" },
  { name: "Economic and Social Council", abbreviation: "ECOSOC" },
  { name: "Security Council", abbreviation: "SC" },
  { name: "World Health Organization", abbreviation: "WHO" },
  { name: "World Bank", abbreviation: "WB" },
  { name: "UNESCO", abbreviation: "UNESCO" },
]

const secretariat = [
  {
    position: "Secretary-General",
    name: "Alexandra Piperaki",
    abbreviation: "SG",
    photo: "/images/secretariat/alexandra-piperaki.png",
  },
  {
    position: "Deputy Secretary-General",
    name: "Michalis Fotiadis",
    abbreviation: "DSG",
    photo: "/images/secretariat/michalis-fotiadis.png",
  },
  {
    position: "President of the General Assembly",
    name: "Aggelos Komondouros",
    abbreviation: "PGA",
    photo: null,
  },
  {
    position: "Deputy President of the General Assembly",
    name: "Charis Babalis",
    abbreviation: "DPGA",
    photo: "/images/secretariat/charis-babalis.png",
  },
  {
    position: "Deputy President of the General Assembly",
    name: "Panagiotis Manologlou",
    abbreviation: "DPGA",
    photo: null,
  },
]

const highlights = [
  { icon: Calendar, label: "October 31 - November 1, 2026", description: "Two days of debate" },
  { icon: MapPin, label: "Moraitis School, Athens", description: "Historic venue" },
  { icon: Users, label: "250+ Delegates", description: "From across Greece and beyond" },
  { icon: Globe, label: "9 Committees", description: "Diverse topics" },
]

export default function FirstMoMUNPage() {
  return (
    <main className="bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative bg-primary pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
              Inaugural Conference
            </p>
            <h1 className="mb-6 font-serif text-4xl font-bold text-primary-foreground md:text-5xl lg:text-6xl">
              The 1st MoMUN
            </h1>
            <p className="mb-4 text-2xl font-semibold text-white/90">
              Equity in an Uneducated World
            </p>
            <p className="text-lg leading-relaxed text-primary-foreground/80">
              Join us for the inaugural Moraitis Model United Nations conference, 
              where young minds come together to tackle global challenges through 
              diplomacy and debate.
            </p>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-4 rounded-lg border border-border bg-card p-6"
              >
                <item.icon className="h-8 w-8 shrink-0 text-accent" />
                <div>
                  <p className="font-semibold text-foreground">{item.label}</p>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About the Theme */}
      <section className="bg-card py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Conference Theme
            </p>
            <h2 className="mb-6 font-serif text-3xl font-bold text-foreground md:text-4xl">
              Equity in an Uneducated World
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
              Education is the foundation of progress, yet millions around the world 
              lack access to quality learning opportunities. The 1st MoMUN explores 
              how we can build a more equitable world through education, addressing 
              disparities and working towards universal access to knowledge.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Through our nine committees, delegates will examine various aspects 
              of global equity, from economic development to human rights, security, 
              and international cooperation.
            </p>
          </div>
        </div>
      </section>

      {/* Committees */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Simulations
            </p>
            <h2 className="mb-6 font-serif text-3xl font-bold text-foreground md:text-4xl">
              Our Committees
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Nine committees covering a wide range of global issues, each with 
              topics aligned to our conference theme.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {committees.map((committee) => (
              <div
                key={committee.abbreviation}
                className="flex items-center gap-4 rounded-lg border border-border bg-card p-6"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
                  {committee.abbreviation}
                </div>
                <p className="font-medium text-foreground">{committee.name}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button asChild>
              <Link href="/agenda">
                View Full Agenda & Study Guides
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Secretariat */}
      <section className="bg-card py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Leadership
            </p>
            <h2 className="mb-6 font-serif text-3xl font-bold text-foreground md:text-4xl">
              The Secretariat
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Meet the dedicated team of students leading MoMUN 2026.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {secretariat.map((member) => (
              <div
                key={`${member.position}-${member.name}`}
                className="rounded-lg border border-border bg-background p-8 text-center"
              >
                {member.photo ? (
                  <div className="mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      width={96}
                      height={96}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                    {member.abbreviation}
                  </div>
                )}
                <h3 className="mb-1 font-serif text-xl font-bold text-foreground">
                  {member.name}
                </h3>
                <p className="text-sm text-muted-foreground">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold text-primary-foreground">
            Ready to Participate?
          </h2>
          <p className="mb-8 text-primary-foreground/80">
            Registration is now open. Read our guide and start your application.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link href="/register/guide">
                Registration Guide
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
