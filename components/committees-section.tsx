import Image from "next/image"
import { ArrowRight } from "lucide-react"

const committees = [
  {
    abbreviation: "GA",
    name: "General Assembly",
    topic: "Addressing the Global Refugee Crisis and Forced Displacement",
    description:
      "The principal deliberative organ of the United Nations, bringing all member states together to discuss the most pressing global challenges.",
  },
  {
    abbreviation: "SC",
    name: "Security Council",
    topic: "De-escalation of Conflicts in the Middle East",
    description:
      "Tasked with maintaining international peace and security, the Security Council addresses threats and authorizes collective action.",
  },
  {
    abbreviation: "ECOSOC",
    name: "Economic and Social Council",
    topic: "Bridging the Digital Divide in Developing Nations",
    description:
      "Coordinates the economic and social work of the UN, addressing sustainable development, education, and global prosperity.",
  },
  {
    abbreviation: "HRC",
    name: "Human Rights Council",
    topic: "Protecting Freedom of Expression in the Digital Age",
    description:
      "Responsible for promoting and protecting human rights around the globe, addressing violations and making recommendations.",
  },
  {
    abbreviation: "UNEP",
    name: "UN Environment Programme",
    topic: "Combating Plastic Pollution in International Waters",
    description:
      "Sets the global environmental agenda and promotes sustainable development within the United Nations system.",
  },
  {
    abbreviation: "WHO",
    name: "World Health Organization",
    topic: "Pandemic Preparedness and Global Health Equity",
    description:
      "Directs international health within the UN system, leading responses to health emergencies and promoting well-being.",
  },
]

export function CommitteesSection() {
  return (
    <section id="committees" className="relative bg-primary py-24">
      {/* Background accent */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src="/images/committee-bg.jpg"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Section heading */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Simulations
          </p>
          <h2 className="mb-6 font-serif text-4xl font-bold text-primary-foreground md:text-5xl">
            Our Committees
          </h2>
          <div className="mx-auto h-1 w-16 bg-accent" />
        </div>

        {/* Committee cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {committees.map((committee) => (
            <div
              key={committee.abbreviation}
              className="group flex flex-col rounded-lg border border-primary-foreground/10 bg-primary-foreground/5 p-8 backdrop-blur-sm transition-all hover:border-accent/40 hover:bg-primary-foreground/10"
            >
              <span className="mb-2 text-sm font-bold tracking-widest text-accent">
                {committee.abbreviation}
              </span>
              <h3 className="mb-2 font-serif text-xl font-bold text-primary-foreground">
                {committee.name}
              </h3>
              <p className="mb-4 text-sm font-medium leading-relaxed text-accent/90">
                {'"'}{committee.topic}{'"'}
              </p>
              <p className="mb-6 flex-1 text-sm leading-relaxed text-primary-foreground/60">
                {committee.description}
              </p>
              <div className="flex items-center gap-1 text-sm font-medium text-accent transition-colors group-hover:text-accent/80">
                Study Guide
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
