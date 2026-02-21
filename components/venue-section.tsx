import { MapPin, Phone, Mail, ExternalLink } from "lucide-react"

export function VenueSection() {
  return (
    <section id="venue" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section heading */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Location
          </p>
          <h2 className="mb-6 font-serif text-4xl font-bold text-foreground md:text-5xl">
            The Venue
          </h2>
          <div className="mx-auto h-1 w-16 bg-accent" />
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Map */}
          <div className="overflow-hidden rounded-lg border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3144.886!2d23.7487!3d37.9836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bd40b8d9c34f%3A0x8e15e1dc05e3b63a!2sMoraitis+School!5e0!3m2!1sen!2sgr!4v1"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Moraitis School location on Google Maps"
            />
          </div>

          {/* Venue details */}
          <div>
            <h3 className="mb-2 font-serif text-2xl font-bold text-foreground">
              Moraitis School
            </h3>
            <p className="mb-6 text-lg text-muted-foreground">
              One of Greece{"'"}s most distinguished educational institutions since 1936.
            </p>

            <p className="mb-8 leading-relaxed text-muted-foreground">
              Moraitis School is located in the Psychiko area of Athens, featuring
              modern facilities including fully equipped auditoriums, conference
              rooms, and a beautiful campus ideal for hosting an international
              conference. The school offers both the Greek national curriculum and
              the International Baccalaureate (IB) Diploma Programme, and is a
              member of the Inspired Education group.
            </p>

            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <div>
                  <p className="font-medium text-foreground">Address</p>
                  <p className="text-sm text-muted-foreground">
                    Agias Sofias & Aristotelous, Psychiko, Athens, Greece
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <div>
                  <p className="font-medium text-foreground">Phone</p>
                  <p className="text-sm text-muted-foreground">+30 210 6798100</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <p className="text-sm text-muted-foreground">momun@moraitis.edu.gr</p>
                </div>
              </div>

              <a
                href="https://moraitis.edu.gr"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80"
              >
                Visit Moraitis School website
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
