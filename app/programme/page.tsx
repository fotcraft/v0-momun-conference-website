import { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AlertCircle, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Programme | MoMUN 2026",
  description: "View the schedule and programme for MoMUN 2026 - October 31 - November 1, 2026.",
}

const programme = [
  {
    day: "Day 1",
    date: "Saturday, 31 October 2026",
    sessions: [
      { time: "09:00–10:00", events: ["Arrivals and Registration"] },
      { time: "09:30–10:00", events: ["Student Officer Briefing"] },
      { time: "10:00–10:30", events: ["All Committees in Session"] },
      { time: "10:30–12:30", events: ["Opening Ceremony"] },
      { time: "12:30–13:45", events: ["All Committees in Session"] },
      { time: "13:45–14:30", events: ["Lunch"] },
      { time: "14:30–16:00", events: ["All Committees in Session"] },
      { time: "16:00–16:30", events: ["Group Photo & Coffee Break"] },
      { time: "16:30–18:00", events: ["All Committees in Session"] },
      { time: "18:00–18:30", events: ["Student Officer Debriefing"] },
    ],
  },
  {
    day: "Day 2",
    date: "Sunday, 1 November 2026",
    sessions: [
      { time: "09:30–10:00", events: ["Student Officer Briefing"] },
      { time: "10:00–12:15", events: ["All Committees in Session"] },
      { time: "12:15–12:30", events: ["Coffee Break"] },
      { time: "12:30–14:30", events: ["General Assembly in Session (Plenary)", "Specialized Agencies in Session"] },
      { time: "14:30–15:15", events: ["Lunch"] },
      { time: "15:15–17:00", events: ["General Assembly in Session (Plenary)", "Specialized Agencies in Session"] },
      { time: "17:00–18:30", events: ["Closing Ceremony"] },
    ],
  },
]

export default function ProgrammePage() {
  return (
    <main className="bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative bg-primary pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
              Schedule
            </p>
            <h1 className="mb-6 font-serif text-4xl font-bold text-primary-foreground md:text-5xl lg:text-6xl">
              Conference Programme
            </h1>
            <p className="text-lg leading-relaxed text-primary-foreground/80">
              Two days of engaging debate, diplomacy, and collaboration. 
              Here&apos;s what to expect at MoMUN 2026.
            </p>
          </div>
        </div>
      </section>

      {/* Conference Schedule */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <aside className="mb-8 flex items-start gap-4 rounded-lg border border-accent/30 bg-accent/5 p-6">
            <AlertCircle className="h-6 w-6 shrink-0 text-accent" aria-hidden="true" />
            <p className="text-sm leading-relaxed text-foreground">
              This programme is provisional and may be subject to change.
            </p>
          </aside>
          <div className="grid items-start gap-8 lg:grid-cols-2">
            {programme.map((day) => (
              <section key={day.day} className="overflow-hidden rounded-lg border border-border bg-card">
                <div className="border-b border-border p-6 md:p-8">
                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                    {day.day}
                  </p>
                  <h2 className="font-serif text-2xl font-bold text-foreground">
                    {day.date}
                  </h2>
                </div>
                <ol className="divide-y divide-border">
                  {day.sessions.map((session) => {
                    const officersOnly = session.events.every((event) => event.startsWith("Student Officer "))
                    return (
                    <li key={`${session.time}-${session.events[0]}`} className={`flex flex-col gap-3 px-6 sm:flex-row sm:gap-5 md:px-8 ${officersOnly ? "py-4" : "py-6"}`}>
                      <div className={`flex shrink-0 items-center gap-2 self-start tabular-nums sm:w-32 ${officersOnly ? "text-xs text-muted-foreground" : "text-sm font-semibold text-primary"}`}>
                        <Clock className="h-4 w-4 shrink-0" aria-hidden="true" />
                        <span>{session.time}</span>
                      </div>
                      <div className="min-w-0 flex-1">
                        {session.events.length > 1 && (
                          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                            Parallel sessions
                          </p>
                        )}
                        {officersOnly && (
                          <p className="mb-1 text-[10px] font-bold uppercase tracking-wide text-muted-foreground">
                            Student officers only
                          </p>
                        )}
                        <ul className="space-y-2">
                          {session.events.map((event) => (
                            <li key={event} className={`leading-relaxed ${officersOnly ? "text-xs text-muted-foreground" : "text-sm font-medium text-foreground"}`}>
                              {event}
                            </li>
                          ))}
                        </ul>

                      </div>
                    </li>
                    )
                  })}
                </ol>
              </section>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
