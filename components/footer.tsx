import Image from "next/image"

const quickLinks = [
  { label: "About", href: "/about" },
  { label: "1st MoMUN", href: "/first-momun" },
  { label: "Agenda", href: "/agenda" },
  { label: "Contact", href: "/contact" },
]

const resources = [
  { label: "Registration Guide", href: "/register/guide" },
  { label: "Country List", href: "/country-list" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4 flex items-center gap-3">
              <Image
                src="/images/moraitis-logo.png"
                alt="Moraitis School Logo"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <span className="text-lg font-bold text-foreground">MoMUN 2026</span>
            </div>
            <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
              The Moraitis Model United Nations Conference. Organized by
              students, for students, in the spirit of international cooperation
              and diplomacy.
            </p>
            <p className="text-sm text-muted-foreground">
              Moraitis School, Athens, Greece
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Resources
            </h4>
            <ul className="flex flex-col gap-2">
              {resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Contact
            </h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <p>mun@moraitis.edu.gr</p>
              <p>+30 210 679 5000</p>
              <p>Al. Papanastasiou & Ag. Dimitriou</p>
              <p>Psychiko (154 52), Athens</p>
              <a
                href="https://moraitis.edu.gr"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-accent"
              >
                moraitis.edu.gr
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; MoMUN, 2026 - The Moraitis School. All Rights Reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Moraitis School &middot; Est. 1936 &middot; Athens, Greece
          </p>
        </div>
      </div>
    </footer>
  )
}
