"use client"

import { useState, type FormEvent } from "react"
import { Send } from "lucide-react"

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-primary py-24">
      <div className="mx-auto max-w-3xl px-6">
        {/* Section heading */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Get in Touch
          </p>
          <h2 className="mb-6 font-serif text-4xl font-bold text-primary-foreground md:text-5xl">
            Register & Contact
          </h2>
          <div className="mx-auto mb-6 h-1 w-16 bg-accent" />
          <p className="text-primary-foreground/70">
            Interested in participating as a delegate, chair, or observer? Fill
            out the form below and we{"'"}ll get back to you with all the details.
          </p>
        </div>

        {submitted ? (
          <div className="rounded-lg border border-accent/30 bg-primary-foreground/5 p-12 text-center backdrop-blur-sm">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/20">
              <Send className="h-7 w-7 text-accent" />
            </div>
            <h3 className="mb-2 font-serif text-2xl font-bold text-primary-foreground">
              Thank You!
            </h3>
            <p className="text-primary-foreground/70">
              We have received your registration. Our team will reach out to you
              shortly with further information.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 rounded-lg border border-primary-foreground/10 bg-primary-foreground/5 p-8 backdrop-blur-sm md:p-10"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="firstName"
                  className="text-sm font-medium text-primary-foreground/80"
                >
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  required
                  className="rounded-md border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  placeholder="Enter your first name"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="lastName"
                  className="text-sm font-medium text-primary-foreground/80"
                >
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  required
                  className="rounded-md border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  placeholder="Enter your last name"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-primary-foreground/80"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                className="rounded-md border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                placeholder="your.email@example.com"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="school"
                className="text-sm font-medium text-primary-foreground/80"
              >
                School / Organization
              </label>
              <input
                id="school"
                type="text"
                required
                className="rounded-md border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                placeholder="Your school or organization"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="role"
                className="text-sm font-medium text-primary-foreground/80"
              >
                Preferred Role
              </label>
              <select
                id="role"
                required
                className="rounded-md border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-3 text-sm text-primary-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              >
                <option value="" className="bg-primary text-primary-foreground">Select a role</option>
                <option value="delegate" className="bg-primary text-primary-foreground">Delegate</option>
                <option value="chair" className="bg-primary text-primary-foreground">Chair / President</option>
                <option value="observer" className="bg-primary text-primary-foreground">Observer</option>
                <option value="press" className="bg-primary text-primary-foreground">Press Team</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="text-sm font-medium text-primary-foreground/80"
              >
                Message (Optional)
              </label>
              <textarea
                id="message"
                rows={4}
                className="resize-none rounded-md border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                placeholder="Tell us anything else you'd like us to know..."
              />
            </div>

            <button
              type="submit"
              className="mt-2 flex items-center justify-center gap-2 rounded-md bg-accent px-8 py-3.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
            >
              <Send className="h-4 w-4" />
              Submit Registration
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
