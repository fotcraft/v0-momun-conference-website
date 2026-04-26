"use client"

import { useState } from "react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Search, Check, X, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const committees = ["GA1", "GA3", "GA4", "GA6", "SC", "ECOSOC", "HRC", "WB", "UNESCO"]

const countries = [
  { name: "Albania", committees: [true, true, true, true, false, false, true, true, true], total: 7 },
  { name: "Algeria", committees: [true, true, true, true, false, true, false, true, false], total: 6 },
  { name: "Antigua and Barbuda", committees: [true, true, true, true, false, true, false, false, true], total: 6 },
  { name: "Angola", committees: [true, true, true, true, false, false, true, false, false], total: 5 },
  { name: "Armenia", committees: [true, true, true, true, false, true, false, true, false], total: 6 },
  { name: "Australia", committees: [true, true, true, true, false, true, false, true, true], total: 7 },
  { name: "Austria", committees: [true, true, true, true, false, true, false, true, true], total: 7 },
  { name: "Azerbaijan", committees: [true, true, true, true, false, true, false, true, true], total: 7 },
  { name: "Bahrain", committees: [true, true, true, true, true, false, false, false, false], total: 5 },
  { name: "Bangladesh", committees: [true, true, true, true, false, true, false, false, true], total: 6 },
  { name: "Benin", committees: [true, true, true, true, false, false, true, true, false], total: 6 },
  { name: "Plurinational State of Bolivia", committees: [true, true, true, true, false, false, true, true, true], total: 7 },
  { name: "Brazil", committees: [true, true, true, true, false, false, true, true, false], total: 6 },
  { name: "Bulgaria", committees: [true, true, true, true, false, false, true, false, true], total: 6 },
  { name: "Burundi", committees: [true, true, true, true, false, true, true, true, false], total: 7 },
  { name: "Canada", committees: [true, true, true, true, false, true, false, true, true], total: 7 },
  { name: "Chad", committees: [true, true, true, true, false, true, false, false, true], total: 6 },
  { name: "Chile", committees: [true, true, true, true, false, false, true, false, false], total: 5 },
  { name: "China", committees: [true, true, true, true, true, true, true, true, true], total: 9 },
  { name: "Colombia", committees: [true, true, true, true, true, false, true, false, true], total: 7 },
  { name: "Côte d'Ivoire", committees: [true, true, true, true, false, true, true, false, false], total: 6 },
  { name: "Croatia", committees: [true, true, true, true, false, true, false, false, false], total: 5 },
  { name: "Cuba", committees: [true, true, true, true, false, false, true, true, false], total: 6 },
  { name: "Cyprus", committees: [true, true, true, true, false, false, true, false, true], total: 6 },
  { name: "Czech Republic", committees: [true, true, true, true, false, false, true, true, false], total: 6 },
  { name: "Democratic Republic of the Congo", committees: [true, true, true, true, true, false, true, true, false], total: 7 },
  { name: "Denmark", committees: [true, true, true, true, true, false, false, false, true], total: 6 },
  { name: "Djibouti", committees: [true, true, true, true, false, true, false, true, false], total: 6 },
  { name: "Dominican Republic", committees: [true, true, true, true, false, true, true, false, false], total: 6 },
  { name: "Ecuador", committees: [true, true, true, true, false, true, true, true, true], total: 8 },
  { name: "Egypt", committees: [true, true, true, true, false, false, true, false, true], total: 6 },
  { name: "Estonia", committees: [true, true, true, true, false, false, true, true, false], total: 6 },
  { name: "Ethiopia", committees: [true, true, true, true, false, false, true, false, true], total: 6 },
  { name: "Finland", committees: [true, true, true, true, false, true, false, true, true], total: 7 },
  { name: "France", committees: [true, true, true, true, true, true, true, true, true], total: 9 },
  { name: "Gambia", committees: [true, true, true, true, false, false, true, true, false], total: 6 },
  { name: "Germany", committees: [true, true, true, true, false, true, false, true, true], total: 7 },
  { name: "Ghana", committees: [true, true, true, true, false, false, true, false, false], total: 5 },
  { name: "Greece", committees: [true, true, true, true, true, false, false, false, true], total: 6 },
  { name: "Haiti", committees: [true, true, true, true, false, true, false, true, false], total: 6 },
  { name: "Iceland", committees: [true, true, true, true, false, false, true, true, true], total: 7 },
  { name: "India", committees: [true, true, true, true, false, true, true, true, true], total: 8 },
  { name: "Indonesia", committees: [true, true, true, true, false, false, true, true, false], total: 6 },
  { name: "Iraq", committees: [true, true, true, true, false, false, true, true, false], total: 6 },
  { name: "Italy", committees: [true, true, true, true, false, false, true, true, true], total: 7 },
  { name: "Japan", committees: [true, true, true, true, false, true, true, true, true], total: 8 },
  { name: "Kenya", committees: [true, true, true, true, false, true, true, true, true], total: 8 },
  { name: "Kuwait", committees: [true, true, true, true, false, false, true, false, false], total: 5 },
  { name: "Latvia", committees: [true, true, true, true, true, false, false, false, false], total: 5 },
  { name: "Lebanon", committees: [true, true, true, true, false, true, false, true, false], total: 6 },
  { name: "Liberia", committees: [true, true, true, true, true, false, false, false, false], total: 5 },
  { name: "Malawi", committees: [true, true, true, true, false, false, true, true, false], total: 6 },
  { name: "Marshall Islands", committees: [true, true, true, true, false, false, true, false, false], total: 5 },
  { name: "Mauritania", committees: [true, true, true, true, false, true, false, false, true], total: 6 },
  { name: "Mauritius", committees: [true, true, true, true, false, false, true, true, false], total: 6 },
  { name: "Mexico", committees: [true, true, true, true, false, true, true, true, true], total: 8 },
  { name: "Mozambique", committees: [true, true, true, true, false, true, false, false, true], total: 6 },
  { name: "Nepal", committees: [true, true, true, true, false, true, false, true, false], total: 6 },
  { name: "Kingdom of the Netherlands", committees: [true, true, true, true, false, true, true, true, true], total: 8 },
  { name: "Nigeria", committees: [true, true, true, true, false, true, false, true, false], total: 6 },
  { name: "Norway", committees: [true, true, true, true, false, true, false, true, true], total: 7 },
  { name: "North Macedonia", committees: [true, true, true, true, false, false, true, true, false], total: 6 },
  { name: "Pakistan", committees: [true, true, true, true, true, true, true, false, true], total: 8 },
  { name: "Panama", committees: [true, true, true, true, true, false, false, true, false], total: 6 },
  { name: "Paraguay", committees: [true, true, true, true, false, true, false, false, true], total: 6 },
  { name: "Peru", committees: [true, true, true, true, false, true, false, true, false], total: 6 },
  { name: "Poland", committees: [true, true, true, true, false, true, false, true, false], total: 6 },
  { name: "Qatar", committees: [true, true, true, true, false, false, true, false, true], total: 6 },
  { name: "Republic of Korea", committees: [true, true, true, true, false, false, true, false, true], total: 6 },
  { name: "Russian Federation", committees: [true, true, true, true, true, true, false, true, true], total: 8 },
  { name: "Saint Kitts and Nevis", committees: [true, true, true, true, false, true, false, false, true], total: 6 },
  { name: "Saudi Arabia", committees: [true, true, true, true, false, true, false, true, true], total: 7 },
  { name: "Senegal", committees: [true, true, true, true, false, true, false, true, false], total: 6 },
  { name: "Sierra Leone", committees: [true, true, true, true, false, true, false, false, true], total: 6 },
  { name: "Slovenia", committees: [true, true, true, true, false, false, true, false, true], total: 6 },
  { name: "Somalia", committees: [true, true, true, true, true, false, false, true, false], total: 6 },
  { name: "South Africa", committees: [true, true, true, true, false, true, true, true, true], total: 8 },
  { name: "Spain", committees: [true, true, true, true, false, true, true, true, false], total: 7 },
  { name: "Sri Lanka", committees: [true, true, true, true, false, true, false, false, true], total: 6 },
  { name: "Suriname", committees: [true, true, true, true, false, true, false, false, false], total: 5 },
  { name: "Switzerland", committees: [true, true, true, true, false, true, true, true, true], total: 8 },
  { name: "Thailand", committees: [true, true, true, true, false, false, true, true, true], total: 7 },
  { name: "Türkiye", committees: [true, true, true, true, false, true, false, false, false], total: 5 },
  { name: "Turkmenistan", committees: [true, true, true, true, false, true, false, true, false], total: 6 },
  { name: "Ukraine", committees: [true, true, true, true, false, true, false, false, false], total: 5 },
  { name: "United Kingdom", committees: [true, true, true, true, true, true, true, true, true], total: 9 },
  { name: "United Republic of Tanzania", committees: [true, true, true, true, false, true, false, true, false], total: 6 },
  { name: "United States of America", committees: [true, true, true, true, true, true, false, true, true], total: 8 },
  { name: "Uruguay", committees: [true, true, true, true, false, true, false, false, true], total: 6 },
  { name: "Uzbekistan", committees: [true, true, true, true, false, true, false, true, true], total: 7 },
  { name: "Viet Nam", committees: [true, true, true, true, false, false, true, true, true], total: 7 },
  { name: "Zambia", committees: [true, true, true, true, false, true, false, false, false], total: 5 },
]

const totals = [92, 92, 92, 92, 15, 54, 47, 56, 49]

export default function CountryListPage() {
  const [search, setSearch] = useState("")
  const [filterCommittee, setFilterCommittee] = useState<number | null>(null)

  const filteredCountries = countries.filter((country) => {
    const matchesSearch = country.name.toLowerCase().includes(search.toLowerCase())
    const matchesCommittee = filterCommittee === null || country.committees[filterCommittee]
    return matchesSearch && matchesCommittee
  })

  return (
    <main className="bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative bg-primary pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
              Delegate Resources
            </p>
            <h1 className="mb-6 font-serif text-4xl font-bold text-primary-foreground md:text-5xl lg:text-6xl">
              Country List
            </h1>
            <p className="text-lg leading-relaxed text-primary-foreground/80">
              92 countries across 9 committees.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="border-b border-border bg-card py-6">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="relative max-w-md flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search countries..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <Button
                size="sm"
                variant={filterCommittee === null ? "default" : "outline"}
                onClick={() => setFilterCommittee(null)}
                className={filterCommittee === null ? "" : "border-border"}
              >
                All
              </Button>
              {committees.map((committee, index) => (
                <Button
                  key={committee}
                  size="sm"
                  variant={filterCommittee === index ? "default" : "outline"}
                  onClick={() => setFilterCommittee(filterCommittee === index ? null : index)}
                  className={filterCommittee === index ? "" : "border-border"}
                >
                  {committee}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Country Matrix */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full min-w-[800px]">
              <thead className="bg-primary text-primary-foreground">
                <tr>
                  <th className="sticky left-0 z-10 bg-primary px-4 py-3 text-left text-sm font-semibold">
                    Country
                  </th>
                  {committees.map((committee) => (
                    <th key={committee} className="px-3 py-3 text-center text-sm font-semibold">
                      {committee}
                    </th>
                  ))}
                  <th className="px-3 py-3 text-center text-sm font-semibold">Total</th>
                </tr>
              </thead>
              <tbody>
                {filteredCountries.map((country, rowIndex) => (
                  <tr
                    key={country.name}
                    className={`border-t border-border ${rowIndex % 2 === 0 ? "bg-background" : "bg-card"}`}
                  >
                    <td className="sticky left-0 z-10 bg-inherit px-4 py-2.5 text-sm font-medium text-foreground">
                      {country.name}
                    </td>
                    {country.committees.map((inCommittee, colIndex) => (
                      <td key={colIndex} className="px-3 py-2.5 text-center">
                        {inCommittee ? (
                          <Check className="mx-auto h-4 w-4 text-accent" />
                        ) : (
                          <X className="mx-auto h-4 w-4 text-muted-foreground/30" />
                        )}
                      </td>
                    ))}
                    <td className="px-3 py-2.5 text-center text-sm font-semibold text-foreground">
                      {country.total}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="bg-muted">
                <tr className="border-t-2 border-primary">
                  <td className="sticky left-0 z-10 bg-muted px-4 py-3 text-sm font-bold text-foreground">
                    Countries
                  </td>
                  {totals.map((total, index) => (
                    <td key={index} className="px-3 py-3 text-center text-sm font-bold text-foreground">
                      {total}
                    </td>
                  ))}
                  <td className="px-3 py-3 text-center text-sm font-bold text-foreground">
                    {countries.length}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>

          <p className="mt-4 text-sm text-muted-foreground">
            Showing {filteredCountries.length} of {countries.length} countries
            {filterCommittee !== null && ` in ${committees[filterCommittee]}`}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-card py-16">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="mb-4 font-serif text-2xl font-bold text-foreground">
            Ready to Register?
          </h2>
          <p className="mb-8 text-muted-foreground">
            Review the registration guide and submit your school delegation.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button asChild>
              <Link href="/register/guide">
                Registration Guide
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
