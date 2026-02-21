import Image from "next/image"
import { ArrowRight } from "lucide-react"

const committees = [
  {
    abbreviation: "GA 1",
    name: "General Assembly First Committee",
    topic: "Disarmament and International Security",
    description:
      "The First Committee deals with disarmament, global challenges, and threats to peace that affect the international community.",
  },
  {
    abbreviation: "GA 3",
    name: "General Assembly Third Committee",
    topic: "Social, Humanitarian and Cultural Affairs",
    description:
      "Focuses on social development questions, including human rights, humanitarian affairs, and advancement of women and children.",
  },
  {
    abbreviation: "GA 4",
    name: "General Assembly Fourth Committee",
    topic: "Special Political and Decolonization",
    description:
      "Addresses special political subjects including decolonization, Palestinian refugees, peacekeeping, outer space, and public information.",
  },
  {
    abbreviation: "GA 6",
    name: "General Assembly Sixth Committee",
    topic: "Legal Affairs",
    description:
      "The Legal Committee considers legal questions and the progressive development of international law and its codification.",
  },
  {
    abbreviation: "ECOSOC",
    name: "Economic and Social Council",
    topic: "Sustainable Development and Global Prosperity",
    description:
      "Coordinates the economic and social work of the UN, addressing sustainable development, education, and global prosperity.",
  },
  {
    abbreviation: "SC",
    name: "Security Council",
    topic: "Maintaining International Peace and Security",
    description:
      "Tasked with maintaining international peace and security, the Security Council addresses threats and authorizes collective action.",
  },
  {
    abbreviation: "WHO",
    name: "World Health Organization",
    topic: "Global Health Challenges",
    description:
      "Directs international health within the UN system, leading responses to health emergencies and promoting well-being.",
  },
  {
    abbreviation: "WB",
    name: "World Bank",
    topic: "Economic Development and Poverty Reduction",
    description:
      "Works to reduce poverty and support development by providing loans, policy advice, and technical assistance to countries.",
  },
  {
    abbreviation: "UNESCO",
    name: "UN Educational, Scientific and Cultural Organization",
    topic: "Education, Science, and Culture",
    description:
      "Seeks to build peace through international cooperation in education, sciences, culture, and communication.",
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
