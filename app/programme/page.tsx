import { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Programme | MoMUN 2026",
  description: "View the schedule and programme for MoMUN 2026 - October 31 - November 1, 2026.",
}

const day1 = [
  { time: "08:00 - 08:30", event: "Registration & Check-in", location: "Main Hall" },
  { time: "08:30 - 09:00", event: "Opening Ceremony", location: "Auditorium" },
  { time: "09:15 - 11:00", event: "Committee Session I", location: "Committee Rooms" },
  { time: "11:00 - 11:30", event: "Coffee Break", location: "Cafeteria" },
  { time: "11:30 - 13:30", event: "Committee Session II", location: "Committee Rooms" },
  { time: "13:30 - 14:30", event: "Lunch Break", location: "Cafeteria" },
  { time: "14:30 - 16:30", event: "Committee Session III", location: "Committee Rooms" },
  { time: "16:30 - 17:00", event: "Coffee Break", location: "Cafeteria" },
  { time: "17:00 - 18:30", event: "Committee Session IV", location: "Committee Rooms" },
]

const day2 = [
  { time: "08:30 - 09:00", event: "Delegate Check-in", location: "Main Hall" },
  { time: "09:00 - 11:00", event: "Committee Session V", location: "Committee Rooms" },
  { time: "11:00 - 11:30", event: "Coffee Break", location: "Cafeteria" },
  { time: "11:30 - 13:30", event: "Committee Session VI", location: "Committee Rooms" },
  { time: "13:30 - 14:30", event: "Lunch Break", location: "Cafeteria" },
  { time: "14:30 - 16:00", event: "Committee Session VII (Final)", location: "Committee Rooms" },
  { time: "16:30 - 17:30", event: "Closing Ceremony & Awards", location: "Auditorium" },
]

export default function ProgrammePage() {
  return (
    <main className="bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative bg-primary pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
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

      {/* Schedule */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Day 1 */}
            <div>
              <div className="mb-8 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  1
                </div>
                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground">
                    Day One
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Friday, October 31, 2026
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                {day1.map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-4 rounded-lg border border-border bg-card p-4"
                  >
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span className="w-28 shrink-0 font-mono">{item.time}</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{item.event}</p>
                      <p className="text-sm text-muted-foreground">{item.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Day 2 */}
            <div>
              <div className="mb-8 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  2
                </div>
                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground">
                    Day Two
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Saturday, November 1, 2026
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                {day2.map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-4 rounded-lg border border-border bg-card p-4"
                  >
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span className="w-28 shrink-0 font-mono">{item.time}</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{item.event}</p>
                      <p className="text-sm text-muted-foreground">{item.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 rounded-lg border border-border bg-muted/30 p-6 text-center">
            <p className="text-sm text-muted-foreground">
              The programme is subject to minor changes. Final schedule will be 
              provided in the delegate handbook closer to the conference date.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
