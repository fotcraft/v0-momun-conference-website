import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Student Officers | 1st MoMUN 2026",
  description: "Meet the Student Officers of the 1st Moraitis Model United Nations conference.",
}

const secretariat = [
  {
    position: "Secretary-General",
    name: "Alexandra Piperaki",
    abbreviation: "SG",
    photo: "/images/secretariat/alexandra-piperaki.png",
  },
  {
    position: "Deputy Secretary-General",
    name: "Michalis Fotiadis",
    abbreviation: "DSG",
    photo: "/images/secretariat/michalis-fotiadis.png",
  },
  {
    position: "President of the General Assembly",
    name: "Aggelos Komondouros",
    abbreviation: "PGA",
    photo: "/images/secretariat/aggelos-komondouros.png",
  },
  {
    position: "Deputy President of the General Assembly",
    name: "Charis Babalis",
    abbreviation: "DPGA",
    photo: "/images/secretariat/charis-babalis.png",
  },
  {
    position: "Deputy President of the General Assembly",
    name: "Panagiotis Manologlou",
    abbreviation: "DPGA",
    photo: "/images/secretariat/panagiotis-manologlou.jpg",
  },
]

const committees = [
  {
    abbreviation: "GA1",
    name: "Disarmament and International Security Committee",
    chairs: [
      {
        position: "Chair",
        name: "Dimitris Flerianos",
        school: "Erasmios Greek-German School",
      },
      {
        position: "Co-Chair",
        name: "Ektoras Moysidis",
        school: "Deutsche Schule Athen",
      },
      {
        position: "Co-Chair",
        name: "Effrosyni Christidou",
        school: "Deutsche Schule Athen",
      },
    ],
  },
  {
    abbreviation: "GA3",
    name: "Social, Humanitarian and Cultural Committee",
    chairs: [
      {
        position: "Chair",
        name: "Dioni Elvira Kalpaka",
        school: "Costeas-Geitonas School",
      },
      {
        position: "Co-Chair",
        name: "Katerina Pouli",
        school: "Geitonas School",
      },
      {
        position: "Co-Chair",
        name: "Marilou Komninou",
        school: "Deutsche Schule Athen",
      },
    ],
  },
  {
    abbreviation: "GA4",
    name: "Special Political and Decolonization Committee",
    chairs: [
      {
        position: "Chair",
        name: "Nikoletta Roussaki",
        school: "Pierce - The American College of Greece",
      },
      {
        position: "Co-Chair",
        name: "Petros Papadopoulos",
        school: "Moraitis School",
      },
      {
        position: "Co-Chair",
        name: "Alexandros Panagiotopoulos-Vanger",
        school: "St. Joseph Greek-French School",
      },
    ],
  },
  {
    abbreviation: "GA6",
    name: "Legal Committee",
    chairs: [
      {
        position: "Chair",
        name: "Stavrina Dimopoulou",
        school: "Deutsche Schule Athen",
      },
      {
        position: "Co-Chair",
        name: "Adrianos Prineas",
        school: "Pierce - The American College of Greece",
      },
      {
        position: "Co-Chair",
        name: "Sotiria Davaki",
        school: "HAEF - Psychiko College",
      },
    ],
  },
  {
    abbreviation: "SC",
    name: "Security Council",
    chairs: [
      {
        position: "President",
        name: "Sofia Vatista",
        school: "Geitonas School",
      },
      {
        position: "Deputy President",
        name: "Evangelia Maragkaki",
        school: "Deutsche Schule Athen",
      },
      {
        position: "Deputy President",
        name: "Sophia Maria Albani",
        school: "Politropi School",
      },
    ],
  },
  {
    abbreviation: "ECOSOC",
    name: "Economic and Social Council",
    chairs: [
      {
        position: "President",
        name: "Konstantinos Grafopoulos",
        school: "George Zois School",
      },
      {
        position: "Deputy President",
        name: "Ilias-Romanos Sporidis",
        school: null,
      },
      {
        position: "Deputy President",
        name: "Semeli Soulioti",
        school: "Deutsche Schule Athen",
      },
    ],
  },
  {
    abbreviation: "HRC",
    name: "Human Rights Council",
    chairs: [
      {
        position: "President",
        name: "Athanasios Theodorou",
        school: "Platon School",
      },
      {
        position: "Deputy President",
        name: "Christina Papageorgiou",
        school: "Geitonas School",
      },
      {
        position: "Deputy President",
        name: "Panagiotis Kamsaris",
        school: "1st General Lykeio of Nea Smyrni",
      },
    ],
  },
  {
    abbreviation: "WB",
    name: "World Bank",
    chairs: [
      {
        position: "President",
        name: "Dimitris Anagnostaras",
        school: "HAEF - Psychiko College",
      },
      {
        position: "Deputy President",
        name: "Ari Tingis",
        school: "St. Catherine's British School",
      },
      {
        position: "Deputy President",
        name: "Milianna Vengerets",
        school: "International School of Athens",
      },
    ],
  },
  {
    abbreviation: "UNESCO",
    name: "UN Educational, Scientific and Cultural Organization",
    chairs: [
      {
        position: "President",
        name: "Emmanuela Tzokas",
        school: "Costeas-Geitonas School",
      },
      {
        position: "Deputy President",
        name: "Aria Karamanlis",
        school: "St. Catherine’s British School",
      },
      {
        position: "Deputy President",
        name: "Vasilis Lialios",
        school: "Erasmios Greek-German School",
      },
    ],
  },
]

export default function StudentOfficersPage() {
  return (
    <main className="bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative bg-primary pb-20 pt-32">
        <div className="mx-auto max-w-7xl px-6">
          <Link
            href="/first-momun"
            className="mb-6 inline-flex items-center gap-2 text-sm text-white/70 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to 1st MoMUN
          </Link>
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
              1st MoMUN 2026
            </p>
            <h1 className="mb-6 font-serif text-4xl font-bold text-primary-foreground md:text-5xl lg:text-6xl">
              Student Officers
            </h1>
            <p className="text-lg leading-relaxed text-primary-foreground/80">
              Meet the dedicated student leadership team organising and running the
              inaugural Moraitis Model United Nations conference.
            </p>
          </div>
        </div>
      </section>

      {/* Secretariat */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Leadership
            </p>
            <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
              The Secretariat
            </h2>
            <p className="mx-auto max-w-xl text-muted-foreground">
              The Secretariat is the highest governing body of MoMUN, responsible
              for the overall organisation and running of the conference.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {secretariat.map((member) => (
              <div
                key={`${member.position}-${member.name}`}
                className="rounded-lg border border-border bg-card p-8 text-center"
              >
                {member.photo ? (
                  <div className="mx-auto mb-4 h-28 w-28 overflow-hidden rounded-full">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      width={112}
                      height={112}
                      className="h-full w-full object-cover"
                      style={member.name === "Aggelos Komondouros" ? { objectPosition: "center 30%" } : undefined}
                    />
                  </div>
                ) : (
                  <div className="mx-auto mb-4 flex h-28 w-28 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                    {member.abbreviation}
                  </div>
                )}
                <div className="mb-1 inline-block rounded-full bg-primary/10 px-3 py-0.5 text-xs font-semibold text-primary">
                  {member.abbreviation}
                </div>
                <h3 className="mt-2 font-serif text-xl font-bold text-foreground">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Committee Officers */}
      <section className="bg-card py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Committees
            </p>
            <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
              Committee Officers
            </h2>
            <p className="mx-auto max-w-xl text-muted-foreground">
              Each committee is chaired by experienced student officers who guide
              delegates through debate and resolution drafting.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {committees.map((committee) => (
              <div
                key={committee.abbreviation}
                className="rounded-lg border border-border bg-background p-6"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
                    {committee.abbreviation}
                  </div>
                  <p className="text-sm font-medium text-foreground">{committee.name}</p>
                </div>
                {committee.chairs.length > 0 ? (
                  <ul className="space-y-4">
                    {committee.chairs.map((chair) => (
                      <li key={chair.name}>
                        <p className="text-xs font-semibold uppercase text-primary">{chair.position}</p>
                        <p className="mt-1 text-sm font-medium text-foreground">{chair.name}</p>
                        {chair.school && (
                          <p className="mt-1 text-sm text-muted-foreground">{chair.school}</p>
                        )}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm italic text-muted-foreground">
                    Chairs to be announced
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
