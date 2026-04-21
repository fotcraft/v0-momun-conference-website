import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "About | MoMUN 2026",
  description: "Learn about MoMUN, the Moraitis Model United Nations conference, and meet our Secretariat and Organising Team.",
}

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
    name: "Lefteris Tsampras",
    abbreviation: "PGA",
    photo: null,
  },
  {
    position: "Deputy President of the General Assembly",
    name: "Aggelos Komondouros",
    abbreviation: "DPGA",
    photo: null,
  },
  {
    position: "Deputy President of the General Assembly",
    name: "Charis Babalis",
    abbreviation: "DPGA",
    photo: "/images/secretariat/charis-babalis.png",
  },
]

export default function AboutPage() {
  return (
    <main className="bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative bg-primary pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              About Us
            </p>
            <h1 className="mb-6 font-serif text-4xl font-bold text-primary-foreground md:text-5xl lg:text-6xl">
              About MoMUN
            </h1>
            <p className="text-lg leading-relaxed text-primary-foreground/80">
              The Moraitis Model United Nations is a platform for young leaders 
              to engage with global issues through diplomacy and debate.
            </p>
          </div>
        </div>
      </section>

      {/* About MoMUN */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 font-serif text-3xl font-bold text-foreground md:text-4xl">
                What is MoMUN?
              </h2>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                MoMUN (Moraitis Model United Nations) is an annual conference 
                organized by students of Moraitis School, one of the most 
                prestigious educational institutions in Greece. Founded in 1936, 
                Moraitis School has been a cornerstone of academic excellence.
              </p>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                Our conference simulates the proceedings of the United Nations, 
                providing a platform for students to develop their skills in 
                diplomacy, public speaking, critical thinking, and international 
                cooperation.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                At MoMUN, we believe in the power of dialogue and collaboration 
                to address the world&apos;s most complex challenges. Our mission 
                is to inspire the next generation of global citizens who are 
                knowledgeable, empathetic, and committed to making a positive impact.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-video overflow-hidden rounded-lg bg-muted">
                <Image
                  src="/images/committee-bg.jpg"
                  alt="MUN Conference Session"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Secretariat */}
      <section className="bg-card py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
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

      {/* Organising Team Placeholder */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Behind the Scenes
            </p>
            <h2 className="mb-6 font-serif text-3xl font-bold text-foreground md:text-4xl">
              Organising Team
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Our dedicated organising team works tirelessly to make MoMUN 2026 
              a memorable experience. Team photos coming soon!
            </p>
          </div>

          <div className="rounded-lg border-2 border-dashed border-border bg-muted/30 p-16 text-center">
            <p className="text-lg text-muted-foreground">
              Team photos will be added soon.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold text-primary-foreground">
            Ready to Join Us?
          </h2>
          <p className="mb-8 text-primary-foreground/80">
            Learn more about the 1st MoMUN conference or start your registration.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link href="/first-momun">
                Explore 1st MoMUN
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <Link href="/register/guide">
                Registration Guide
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
