import { Users } from "lucide-react"

const secretariat = [
  {
    position: "Secretary-General",
    name: "Alexandra Piperaki",
    abbreviation: "SG",
  },
  {
    position: "Deputy Secretary-General",
    name: "Michalis Fotiadis",
    abbreviation: "DSG",
  },
  {
    position: "President of the General Assembly",
    name: "Lefteris Tsampras",
    abbreviation: "PGA",
  },
  {
    position: "Deputy President of the General Assembly",
    name: "Aggelos Komondouros",
    abbreviation: "DPGA",
  },
  {
    position: "Deputy President of the General Assembly",
    name: "Charis Babalis",
    abbreviation: "DPGA",
  },
]

export function SecretariatSection() {
  return (
    <section id="secretariat" className="bg-muted py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section heading */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Leadership
          </p>
          <h2 className="mb-6 font-serif text-4xl font-bold text-foreground md:text-5xl">
            The Secretariat
          </h2>
          <div className="mx-auto h-1 w-16 bg-accent" />
          <p className="mx-auto mt-6 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            Meet the dedicated student leaders organizing MoMUN 2026, ensuring a
            memorable and impactful conference experience for all delegates.
          </p>
        </div>

        {/* Secretariat cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {secretariat.map((member, index) => (
            <div
              key={index}
              className="group flex flex-col items-center rounded-lg border border-border bg-card p-8 text-center transition-all hover:border-accent/40 hover:shadow-lg"
            >
              <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Users className="h-10 w-10" />
              </div>
              <span className="mb-1 text-xs font-bold uppercase tracking-widest text-accent">
                {member.abbreviation}
              </span>
              <h3 className="mb-2 font-serif text-xl font-bold text-foreground">
                {member.name}
              </h3>
              <p className="text-sm text-muted-foreground">{member.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
