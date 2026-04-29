"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"

const mainNavLinks = [
  { label: "About", href: "/about" },
  { label: "1st MoMUN", href: "/first-momun" },
  { label: "Agenda", href: "/agenda" },
  { label: "Programme", href: "/programme" },
]

const registrationLinks = [
  { label: "Registration Guide", href: "/register/guide" },
  { label: "School Registration (Form I)", href: "/register/school" },
  { label: "Student Officer Applications", href: "/apply/chair" },
]

const infoLinks = [
  { label: "Travel & Accommodation", href: "/info/travel" },
  { label: "Contact", href: "/contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-primary/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/momun-logo.png"
            alt="MoMUN - The Moraitis School"
            width={160}
            height={80}
            className="h-10 w-auto mix-blend-multiply"
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {mainNavLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="rounded-md px-3 py-2 text-sm font-medium tracking-wide text-primary-foreground/80 transition-colors hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                {link.label}
              </Link>
            </li>
          ))}

          {/* Registration Dropdown */}
          <li>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium tracking-wide text-primary-foreground/80 transition-colors hover:bg-primary-foreground/10 hover:text-primary-foreground">
                Registration <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                {registrationLinks.map((link) => (
                  <DropdownMenuItem key={link.href} asChild>
                    <Link href={link.href}>{link.label}</Link>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/country-list">Country List</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>

          {/* Information Dropdown */}
          <li>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium tracking-wide text-primary-foreground/80 transition-colors hover:bg-primary-foreground/10 hover:text-primary-foreground">
                Information <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                {infoLinks.map((link) => (
                  <DropdownMenuItem key={link.href} asChild>
                    <Link href={link.href}>{link.label}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </li>

          {/* Contact CTA */}
          <li className="ml-2">
            <Link
              href="/contact"
              className="rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
            >
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="text-primary-foreground lg:hidden"
          aria-label="Toggle menu"
        >
          {isMobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isMobileOpen && (
        <div className="border-t border-primary-foreground/10 bg-primary/95 backdrop-blur-md lg:hidden max-h-[80vh] overflow-y-auto">
          <ul className="flex flex-col gap-1 px-6 py-4">
            {mainNavLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="block rounded-md px-4 py-3 text-sm font-medium text-primary-foreground/80 transition-colors hover:bg-primary-foreground/10 hover:text-primary-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            
            <li className="pt-2">
              <p className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-primary-foreground/50">
                Registration
              </p>
              {registrationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="block rounded-md px-4 py-3 text-sm font-medium text-primary-foreground/80 transition-colors hover:bg-primary-foreground/10 hover:text-primary-foreground"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/country-list"
                onClick={() => setIsMobileOpen(false)}
                className="block rounded-md px-4 py-3 text-sm font-medium text-primary-foreground/80 transition-colors hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                Country List
              </Link>
            </li>

            <li className="pt-2">
              <p className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-primary-foreground/50">
                Information
              </p>
              {infoLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="block rounded-md px-4 py-3 text-sm font-medium text-primary-foreground/80 transition-colors hover:bg-primary-foreground/10 hover:text-primary-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </li>

            <li className="pt-4">
              <Link
                href="/contact"
                onClick={() => setIsMobileOpen(false)}
                className="block rounded-md bg-accent px-4 py-3 text-center text-sm font-semibold text-accent-foreground"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
