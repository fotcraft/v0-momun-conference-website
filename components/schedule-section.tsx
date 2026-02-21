"use client"

import { useState } from "react"
import { Clock } from "lucide-react"

const scheduleData = {
  "Day 1 - November 6": [
    { time: "08:00 - 09:00", event: "Registration & Welcome Coffee", location: "Main Lobby" },
    { time: "09:00 - 09:45", event: "Opening Ceremony", location: "Auditorium" },
    { time: "09:45 - 10:00", event: "Keynote Address", location: "Auditorium" },
    { time: "10:15 - 12:30", event: "Committee Session I", location: "Assigned Rooms" },
    { time: "12:30 - 13:30", event: "Lunch Break", location: "Dining Hall" },
    { time: "13:30 - 16:00", event: "Committee Session II", location: "Assigned Rooms" },
    { time: "16:00 - 16:30", event: "Coffee Break", location: "Main Lobby" },
    { time: "16:30 - 18:30", event: "Committee Session III", location: "Assigned Rooms" },
    { time: "19:30", event: "Delegate Social Event", location: "School Grounds" },
  ],
  "Day 2 - November 7": [
    { time: "08:30 - 09:00", event: "Morning Coffee", location: "Main Lobby" },
    { time: "09:00 - 11:30", event: "Committee Session IV", location: "Assigned Rooms" },
    { time: "11:30 - 12:00", event: "Coffee Break", location: "Main Lobby" },
    { time: "12:00 - 14:00", event: "Committee Session V", location: "Assigned Rooms" },
    { time: "14:00 - 15:00", event: "Lunch Break", location: "Dining Hall" },
    { time: "15:00 - 16:30", event: "Final Voting Procedures", location: "Assigned Rooms" },
    { time: "17:00 - 18:00", event: "Closing Ceremony & Awards", location: "Auditorium" },
  ],
}

type DayKey = keyof typeof scheduleData

export function ScheduleSection() {
  const days = Object.keys(scheduleData) as DayKey[]
  const [activeDay, setActiveDay] = useState<DayKey>(days[0])

  return (
    <section id="schedule" className="bg-secondary py-24">
      <div className="mx-auto max-w-4xl px-6">
        {/* Section heading */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Programme
          </p>
          <h2 className="mb-6 font-serif text-4xl font-bold text-foreground md:text-5xl">
            Conference Schedule
          </h2>
          <div className="mx-auto h-1 w-16 bg-accent" />
        </div>

        {/* Day tabs */}
        <div className="mb-10 flex justify-center gap-2">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`rounded-md px-6 py-3 text-sm font-semibold transition-colors ${
                activeDay === day
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-muted-foreground hover:bg-card/80"
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Schedule items */}
        <div className="flex flex-col gap-3">
          {scheduleData[activeDay].map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 rounded-lg border border-border bg-background p-5 transition-colors hover:border-accent/30"
            >
              <div className="flex items-center gap-2 text-accent">
                <Clock className="h-4 w-4 shrink-0" />
                <span className="w-32 shrink-0 text-sm font-semibold">
                  {item.time}
                </span>
              </div>
              <div className="flex-1">
                <p className="font-medium text-foreground">{item.event}</p>
                <p className="text-sm text-muted-foreground">{item.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
