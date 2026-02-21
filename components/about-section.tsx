import { Globe, Users, BookOpen, Award } from "lucide-react"

const stats = [
  { icon: Globe, label: "Countries Represented", value: "30+" },
  { icon: Users, label: "Delegates Expected", value: "250+" },
  { icon: BookOpen, label: "Committees", value: "6" },
  { icon: Award, label: "Years of MUN Excellence", value: "5+" },
]

export function AboutSection() {
  return (
    <section id="about" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section heading */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            About the Conference
          </p>
          <h2 className="mb-6 font-serif text-4xl font-bold text-foreground md:text-5xl">
            Welcome to MoMUN
          </h2>
          <div className="mx-auto h-1 w-16 bg-accent" />
        </div>

        {/* Two-column content */}
        <div className="mb-20 grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h3 className="mb-4 font-serif text-2xl font-bold text-foreground">
              Fostering Future Leaders
            </h3>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              The Moraitis Model United Nations (MoMUN) is an annual conference
              organized by students of Moraitis School, one of the most
              prestigious educational institutions in Greece. Founded in 1936,
              Moraitis School has been a cornerstone of academic excellence,
              offering both the Greek national curriculum and the International
              Baccalaureate (IB) Diploma Programme.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              MoMUN brings together young delegates from across Greece and
              beyond to engage in meaningful debate on pressing global issues.
              Our conference simulates the proceedings of the United Nations,
              providing a platform for students to develop their skills in
              diplomacy, public speaking, critical thinking, and international
              cooperation.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-serif text-2xl font-bold text-foreground">
              Our Mission
            </h3>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              At MoMUN, we believe in the power of dialogue and collaboration to
              address the world{"'"}s most complex challenges. Our mission is to
              inspire the next generation of global citizens who are
              knowledgeable, empathetic, and committed to making a positive
              impact.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              Through rigorous academic preparation, spirited debate, and
              cultural exchange, delegates gain an unparalleled educational
              experience that extends far beyond the classroom walls. Join us as
              we work together towards peace, dignity, and equality.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center rounded-lg border border-border bg-card p-8 text-center"
            >
              <stat.icon className="mb-4 h-8 w-8 text-accent" />
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
