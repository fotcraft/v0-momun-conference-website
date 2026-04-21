import Link from "next/link"
import { Globe, Users, BookOpen, Calendar, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const stats = [
  { icon: Globe, label: "Countries Represented", value: "30+" },
  { icon: Users, label: "Delegates Expected", value: "250+" },
  { icon: BookOpen, label: "Committees", value: "9" },
  { icon: Calendar, label: "Days of Debate", value: "2" },
]

export function HomeAboutSection() {
  return (
    <section id="about" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section heading */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            November 6-7, 2026
          </p>
          <h2 className="mb-6 text-balance font-serif text-4xl font-bold text-foreground md:text-5xl">
            The 1st Moraitis Model United Nations
          </h2>
          <div className="mx-auto h-1 w-16 bg-primary" />
        </div>

        {/* Brief intro */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
            MoMUN 2026 marks the inaugural Model United Nations conference hosted by 
            Moraitis School in Athens, Greece. Under the theme{" "}
            <span className="font-semibold text-foreground">
              &ldquo;Equity in an Uneducated World&rdquo;
            </span>
            , we invite young delegates from across Greece and beyond to engage in 
            meaningful debate on pressing global issues.
          </p>
          <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
            Join us for two days of diplomacy, collaboration, and intellectual exchange 
            as we work together towards a more equitable future.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/about">
                Learn More About MoMUN
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" className="border border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground">
              <Link href="/register/guide">
                Registration Guide
              </Link>
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center rounded-lg border border-border bg-card p-8 text-center"
            >
              <stat.icon className="mb-4 h-8 w-8 text-primary" />
              <span className="mb-1 font-serif text-3xl font-bold text-foreground">
                {stat.value}
              </span>
              <span className="text-sm text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
