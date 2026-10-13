import { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Payment Information | MoMUN 2026",
  description: "Payment Information for the Moraitis Model United Nations Conference 2026.",
}

export default function PaymentInformationPage() {
  return (
    <main className="bg-background">
      <Navbar />

      {/* Hero */}
      <section className="bg-primary pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
              Registration
            </p>
            <h1 className="mb-6 font-serif text-4xl font-bold text-primary-foreground md:text-5xl">
              Payment Information
            </h1>
            <p className="text-lg leading-relaxed text-primary-foreground/80">
              Conference fees, payment instructions, and bank account details.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-6">
          <article className="space-y-6 text-muted-foreground leading-relaxed">
            <h2 className="font-serif text-2xl font-bold text-foreground">Fee Breakdown</h2>
            <h3 className="pt-2 font-serif text-xl font-bold text-foreground">School Registration Fee</h3>
            <p>When submitting Form I (School Registration &amp; Country Selection), Schools must complete the payment of €80, to secure their spot in the conference.</p>
            <p>The School Registration Fee is non-refundable.</p>
            <h3 className="pt-2 font-serif text-xl font-bold text-foreground">Delegate Fee (Participation Fee)</h3>
            <p>All delegates must complete payment of 55€ to secure their participation in the conference. This fee covers: lunch during the days of the conference, stationery and materials (Badge, Placard, Pen, Notepad, etc).</p>
            <p>Schools must complete payment upon submission of Form II, while Individual Applicants should await instructions from the MoMUN Conference Team.</p>
            <p>The withdrawal of a delegation after the submission of Form II is non-refundable.</p>
            <h3 className="pt-2 font-serif text-xl font-bold text-foreground">Student Officers</h3>
            <p>Student Officers must complete a payment of €35 following acceptance of their position. This fee is non-refundable.</p>
            <h3 className="pt-2 font-serif text-xl font-bold text-foreground">Advisor Fee</h3>
            <p>Each school is entitled to one advisor, free of charge. A fee of €35 will be charged for every additional advisor.</p>
            <h2 className="pt-6 font-serif text-2xl font-bold text-foreground">Bank accounts</h2>
            <p>Registration fees may be deposited to the following bank accounts. Following completion of payments, you are kindly requested to forward a copy of the transaction receipt to <a href="mailto:mun@moraitis.edu.gr" className="font-medium text-primary hover:underline">mun@moraitis.edu.gr</a>.</p>
            <p><span className="font-semibold text-foreground">Account Holder Name:</span> Σχολή Μωραΐτη Μονοπρόσωπη ΑΕ</p>
            {[
              { name: "Alpha Bank", cardStyle: { background: "linear-gradient(135deg, #eaf1fa, #f6f8fc)", borderColor: "#d0ddec", color: "#29466b" }, logo: "/images/banks/alpha.svg", account: "110-002320010731", iban: "GR0801401100110002320010731", swift: "CRBAGRAA" },
              { name: "Piraeus Bank", cardStyle: { background: "linear-gradient(135deg, #fff5cf, #fffaf0)", borderColor: "#eadca6", color: "#574923" }, logo: "/images/banks/piraeus.svg", account: "5013-000086-811", iban: "GR9101720130005013000086811", swift: "PIRBGRAA" },
              { name: "Eurobank", cardStyle: { background: "linear-gradient(135deg, #f9e3e3, #f2f4fa)", borderColor: "#e6d6dd", color: "#343e61" }, logo: "/images/banks/eurobank.svg", account: "00260027300200401452", iban: "GR7602600270000300200401452", swift: "ERBKGRAA" },
            ].map((bank) => (
              <section key={bank.name} className="rounded-lg border p-6" style={bank.cardStyle}>
                <h3 className="mb-4 flex items-center gap-3 font-serif text-xl font-bold">
                  <span
                    aria-hidden="true"
                    className="h-7 w-7 shrink-0 bg-current"
                    style={{ maskImage: `url(${bank.logo})`, WebkitMaskImage: `url(${bank.logo})`, maskSize: "contain", WebkitMaskSize: "contain", maskRepeat: "no-repeat", WebkitMaskRepeat: "no-repeat", maskPosition: "center", WebkitMaskPosition: "center" }}
                  />
                  {bank.name}
                </h3>
                <dl className="space-y-3 text-sm">
                  <div><dt className="font-semibold">Account Number</dt><dd className="break-all">{bank.account}</dd></div>
                  <div><dt className="font-semibold">IBAN</dt><dd className="break-all">{bank.iban}</dd></div>
                  <div><dt className="font-semibold">BIC/SWIFT</dt><dd>{bank.swift}</dd></div>
                </dl>
              </section>
            ))}
            <p>Please use “MOMUN [School Name]” or “MOMUN [Individual’s Name]” as payment reference.</p>
          </article>
        </div>
      </section>

      <Footer />
    </main>
  )
}
