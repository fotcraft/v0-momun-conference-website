import { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Code of Conduct | MoMUN 2026",
  description: "Code of Conduct for the Moraitis Model United Nations Conference 2026.",
}

export default function CodeOfConductPage() {
  return (
    <main className="bg-background">
      <Navbar />

      {/* Hero */}
      <section className="bg-primary pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
              Policies
            </p>
            <h1 className="mb-6 font-serif text-4xl font-bold text-primary-foreground md:text-5xl">
              Code of Conduct
            </h1>
            <p className="text-lg leading-relaxed text-primary-foreground/80">
              The standards of conduct expected of all MoMUN participants.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-6">
          <article className="space-y-6 text-muted-foreground leading-relaxed">
            <header>
              <h2 className="mb-3 font-serif text-2xl font-bold text-foreground">General Code of Conduct</h2>
            </header>
            <p>Moraitis Model United Nations is an educational activity of the Moraitis School. All participants are therefore expected to conduct themselves in accordance with the values and standards of the School, as well as the specific rules of the Conference.</p>
            <p>This Code applies to delegates, Student Officers, MUN Advisors, members of the Organizing Team, volunteers and guests throughout the Conference and during all related activities.</p>
            <h2 className="pt-6 font-serif text-2xl font-bold text-foreground">1. Conduct and Respect</h2>
            <p>Participants are expected to treat one another with respect, courtesy and consideration, and to contribute to an environment in which everyone can participate comfortably and safely.</p>
            <p>Discrimination, intimidation, bullying, harassment, threats, humiliation and aggressive behavior, whether physical, verbal or online, will not be tolerated. This includes conduct directed at another person on the basis of their background, nationality, ethnicity, religion, beliefs, sex, gender, sexual orientation, disability, appearance or any other personal characteristic.</p>
            <p>Participants should respect the different roles and responsibilities within the Conference and follow reasonable instructions given by the Secretariat, Organizing Team, Student Officers, MUN Advisors and members of School staff.</p>
            <h2 className="pt-6 font-serif text-2xl font-bold text-foreground">2. Committee Conduct</h2>
            <p>Committee debate should remain diplomatic, constructive and relevant to the matter under discussion. Delegates are expected to:</p>
            <ul className="list-disc space-y-3 pl-6">
            <li>follow the Rules of Procedure and the rulings of the Chairing Panel;</li>
            <li>listen to and engage respectfully with other delegates;</li>
            <li>avoid personal attacks, deliberately offensive remarks or disruptive behavior;</li>
            <li>distinguish between the position they represent in committee and their own personal views.</li>
            </ul>
            <p>The nature of Model United Nations means that controversial political positions may be discussed and represented. Diplomatic simulation, however, does not excuse language or behavior intended to intimidate, humiliate or target another participant.</p>
            <h2 className="pt-6 font-serif text-2xl font-bold text-foreground">3. Academic Integrity and use of Artificial Intelligence (AI)</h2>
            <p>All work submitted or presented at MoMUN should reflect the participant's own research and understanding.</p>
            <p>Plagiarism, fabrication of sources or information, or presenting another person's work as one's own is not acceptable. Sources should be represented accurately and acknowledged where appropriate, in line with the School's expectations regarding academic integrity.</p>
            <p>Artificial intelligence may be used as a research and preparation tool, but not as a substitute for a delegate's own participation or understanding. Participants remain fully responsible for the accuracy and content of anything they submit or say. The Secretariat or Student Officers may ask a participant to explain or substantiate submitted material where necessary.</p>
            <h2 className="pt-6 font-serif text-2xl font-bold text-foreground">4. Use of Electronic Devices</h2>
            <p>Participants must respect the School's rules concerning electronic devices and personal privacy.</p>
            <p>Mobile phones and smartwatches may not be used during committee proceedings or ceremonies, unless their use has been expressly authorized for a Conference purpose or is required for an approved medical reason. Other electronic devices may only be used where their use has been authorized for Conference work. Their use must not disrupt proceedings or distract other participants.</p>
            <p>Photography, audio recording and video recording on School premises are not permitted unless authorised as part of an official School or Conference activity. Participants must not record, publish or share material concerning another participant in a way that violates their privacy or dignity.</p>
            <h2 className="pt-6 font-serif text-2xl font-bold text-foreground">5. Safety and Prohibited Items</h2>
            <p>Smoking and vaping, as well as the possession or consumption of alcohol, illegal substances or other intoxicating substances, are strictly prohibited on School premises and during Conference activities.</p>
            <p>Weapons, imitation weapons, fireworks or any object that may reasonably be considered dangerous must not be brought onto School premises. Gambling is also prohibited. Any participant who becomes aware of an immediate safety concern should inform a member of the Student Affairs Committee or School Staff.</p>
            <h2 className="pt-6 font-serif text-2xl font-bold text-foreground">6. Conduct within School Premises &amp; Personal Property</h2>
            <p>Participants must respect the School's buildings, classrooms, equipment and grounds, as well as the belongings of others.</p>
            <p>Deliberate damage, vandalism, theft or misuse of property may result in disciplinary action and, where appropriate, liability for the cost of repair or replacement. The School's regulations similarly provide for responsibility where deliberate damage is caused during School activities.</p>
            <p>Participants are responsible for their own personal belongings and are advised not to bring unnecessary valuables to the Conference.</p>
            <h2 className="pt-6 font-serif text-2xl font-bold text-foreground">7. Attendance &amp; Movement within the School Premises</h2>
            <p>Participants are expected to attend all scheduled committee sessions, ceremonies and other Conference activities for which they are registered and to arrive on time.</p>
            <p>Participants must remain within areas designated for the Conference and may not enter classrooms, offices or other restricted areas without permission.</p>
            <p>Delegates wishing to leave the School premises during Conference hours must follow the instructions of their MUN Advisor and the Organizing Team. Participants must also follow any instructions concerning access, evacuation or emergency procedures.</p>
            <p>In an emergency, all participants must immediately follow the directions of School and Conference staff. The School maintains specific procedures for emergency situations and requires compliance with the instructions of the relevant authorities.</p>
            <h2 className="pt-6 font-serif text-2xl font-bold text-foreground">8. Dress Code</h2>
            <p>Business attire is expected throughout official Conference proceedings.</p>
            <p>Participants should dress in a neat and appropriate manner consistent with the formal and educational character of the Conference. Clothing or accessories displaying offensive, discriminatory or otherwise inappropriate material are not permitted.</p>
            <h2 className="pt-6 font-serif text-2xl font-bold text-foreground">9. Reporting a concern</h2>
            <p>Participants who experience or witness behavior that may breach this Code are encouraged to speak to a member of the Student Affairs Committee or School Staff.</p>
            <p>Reports will be handled as discreetly as circumstances allow. Where a matter concerns safeguarding, safety, serious misconduct or a possible legal obligation, information may be shared with the appropriate School authorities, parents or guardians, or competent authorities.</p>
            <p>Participants are also expected not to remain passive when they witness bullying or violence. All participants are encouraged to seek assistance and report incidents rather than tolerate or conceal them.</p>
            <h2 className="pt-6 font-serif text-2xl font-bold text-foreground">10. Breach of Code</h2>
            <p>Breaches of this Code will be addressed according to their nature and seriousness.</p>
            <p>Measures may include a warning, temporary removal from a committee or activity, referral to the participant's MUN Advisor or School, disqualification from awards, or removal from the Conference. Serious misconduct may result in immediate removal.</p>
            <p>Where a participant is a student of the Moraitis School, conduct may also be addressed under the applicable School regulations. Where appropriate, the participant's own school and parents or guardians may also be informed.</p>
            <p>The Conference and the Moraitis School reserve the right to address behavior not expressly listed in this Code where it threatens the safety, dignity or wellbeing of another person, damages property, or interferes with the orderly operation of the Conference.</p>
            <h2 className="pt-6 font-serif text-2xl font-bold text-foreground">11. Acceptance</h2>
            <p>Participation in MoMUN 2026 constitutes acceptance of this Code of Conduct, the Conference Rules of Procedure and all applicable rules of the Moraitis School.</p>
            <p>All participants are expected to familiarize themselves with these provisions before attending the Conference.</p>
          </article>
        </div>
      </section>

      <Footer />
    </main>
  )
}
