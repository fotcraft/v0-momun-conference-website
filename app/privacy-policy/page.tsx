import { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Privacy Policy | MoMUN 2026",
  description: "Privacy Policy for the Moraitis Model United Nations Conference 2026.",
}

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-background">
      <Navbar />

      {/* Hero */}
      <section className="bg-primary pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
              Legal
            </p>
            <h1 className="mb-6 font-serif text-4xl font-bold text-primary-foreground md:text-5xl">
              Privacy Policy
            </h1>
            <p className="text-lg leading-relaxed text-primary-foreground/80">
              How MoMUN 2026 collects, uses, and protects your personal information.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-6">
          <article className="space-y-6 text-muted-foreground leading-relaxed">
            <header>
              <h2 className="mb-3 font-serif text-2xl font-bold text-foreground">Privacy Notice</h2>
              <p className="font-medium text-foreground">The Moraitis School Model United Nations Conference (MoMUN)</p>
            </header>
            <p>This Privacy Notice applies to the processing of personal data in the context of participation in the Model United Nations Conference organised by Moraitis School (“the School”). It applies to all categories of participants, such as but not limited to: Members of the Student Secretariat and Organising Team, Student Officers, School MUN Advisors and Delegates It constitutes a supplementary notice to the <a href="https://moraitis.edu.gr/sites/default/files/gdpr_genikos_kanonismos_sxoleiou.pdf" target="_blank" rel="noopener noreferrer" className="font-medium text-primary hover:underline">School’s General Data Protection Policy</a>.</p>
            <h2 className="pt-6 font-serif text-2xl font-bold text-foreground">(1) Data Controller</h2>
            <p>The Data Controller for the processing of personal data collected through this form is The Moraitis School.<sup><a href="#data-controller-details" className="text-primary hover:underline" aria-label="Data controller details">1</a></sup> Further contact details, including those of the Data Protection Officer (DPO) can be found in the <a href="https://moraitis.edu.gr/sites/default/files/gdpr_genikos_kanonismos_sxoleiou.pdf" target="_blank" rel="noopener noreferrer" className="font-medium text-primary hover:underline">School’s General Data Protection Policy</a></p>
            <p id="data-controller-details" className="text-sm"><sup>1</sup> “Σχολή Μωραΐτη Μονοπρόσωπη Ανώνυμη Εταιρεία” Al. Papanastasiou &amp; Ag. Dimitriou, Psychiko 154 52 VAT No: 094024728</p>
            <h2 className="pt-6 font-serif text-2xl font-bold text-foreground">(2) Categories of Personal Data Collected</h2>
            <p>The School may process the following categories of personal data:</p>
            <ol start={1} className="list-[lower-alpha] space-y-3 pl-6">
              <li>Identification Data (Full Name, Date of Birth)</li>
              <li>Contact Details (Email Address, Phone Number)</li>
              <li>Educational Information (School Affiliation)</li>
              <li>Academic and Extracurricular Background (MUN Experience, Roles, Achievements)</li>
              <li>Application Materials (Letter of Motivation, Letter of Recommendation)</li>
              <li>Third-Party Data (Contact Details of School MUN Advisors)</li>
              <li>Participation-related data (Roles, Committee Assignment, Attendance)</li>
              <li>Visual and audiovisual material (photographs and video recordings, taken before or during the conference)</li>
            </ol>
            <p>No special categories of Personal Data (Art. 9 of GDPR) are intentionally collected.</p>
            <h2 className="pt-6 font-serif text-2xl font-bold text-foreground">(3) Purpose of and Legal Basis for Processing</h2>
            <ol start={1} className="list-[lower-alpha] space-y-3 pl-6">
              <li>Participation and organisation of the conference, including the evaluation of applications, registration, communication with all members of the conference, and overall administration. Art. 6(1)(b) GDPR (performance of a contract and steps prior to entering into a contract) and, where necessary, Art. 6(1)(f) GDPR (legitimate interests of the School)</li>
              <li>Preparation and publication of academic materials, including Study Guides and conference-related outputs Art. 6(1)(f) GDPR (legitimate interests of the School)</li>
              <li>Documentation and promotion of the conference, including photographs and audiovisual material Art. 6(1)(a) GDPR (consent of participants)</li>
              <li>Archival and record keeping purposes Art. 6(1)(f) GDPR (legitimate interests of the School)</li>
            </ol>
            <p>Data shall not be processed for purposes incompatible with the above. Where processing is based on legitimate interests, such interests are balanced against the rights and freedoms of data subjects.</p>
            <h2 className="pt-6 font-serif text-2xl font-bold text-foreground">(4) Processing of Minors’ Data</h2>
            <p>Participation in the conference may include individuals under the age of 15. Where data processing is based on consent (including the publication of photographic and audiovisual material) , the School shall obtain such consent from parents or legal guardians, in accordance with applicable law. The School takes reasonable steps to ensure that such consent is obtained in a valid manner.</p>
            <h2 className="pt-6 font-serif text-2xl font-bold text-foreground">(5) Access to Personal Data</h2>
            <p>Personal Data is accessible on a strict need-to-know basis, and solely for the purposes described above. Access may be granted to:</p>
            <ol start={1} className="list-[lower-alpha] space-y-3 pl-6">
              <li>Members of faculty and relevant Administrative Staff of Moraitis School, responsible for the coordination and organisation of the Conference</li>
              <li>Members of the Student Secretariat</li>
              <li>Members of the Student Organising Team and Student Officers</li>
              <li>External Service Providers (including providers of cloud storage, form processing, and communication platforms, under appropriate data processing agreements, in accordance with Art. 28 GDPR) Where such providers are located outside of the European Economic Area (EEA), personal data is transferred only where safeguards such as Standard Contractual Clauses are in place (Art. 46 GDPR)</li>
            </ol>
            <p>All student organisers, as listed in 5(b) and (c) are subject to confidentiality obligations and act under the authority and supervision of the School.</p>
            <p>Where an individual involved in the organisation is not affiliated with the School, access to personal data is granted solely for the purposes of conference organisation and remains subject to equivalent confidentiality requirements.</p>
            <p>The School implements appropriate technical and organisational measures to ensure that personal data is accessed only as necessary for each role. Such measures include, where appropriate, role -based access controls, secure storage of data within authorised systems provided by the School, and restrictions on the disclosure of personal data.</p>
            <h2 className="pt-6 font-serif text-2xl font-bold text-foreground">(6) Publication and dissemination</h2>
            <h3 className="pt-6 font-serif text-xl font-bold text-foreground">(6.1) Conference Participation</h3>
            <p>The School may publish limited personal data of participants, including: Full Name, Role or Position, School Affiliation. Such data may appear on the conference website, official social media channels, programmes and official records. This processing is based on the legitimate interests of the School in organising and documenting the conference, under Art. 6(1)(f) GDPR.</p>
            <h3 className="pt-6 font-serif text-xl font-bold text-foreground">(6.2) Study Guides and Academic Materials</h3>
            <p>Student Officers may prepare Study Guides or similar materials, as outlined in the responsibilities of their role. Such materials may be published on official platforms, in connection with the conference. Authorship may be attributed by name. This processing is based on the legitimate interests of the School in disseminating conference outputs and promoting engagement, under Art. 6(1)(f) GDPR.</p>
            <h3 className="pt-6 font-serif text-xl font-bold text-foreground">(6.3) Photographs and audiovisual material</h3>
            <p>Photographs and audiovisual material may be captured before or during the conference for purposes such as, but not limited to:</p>
            <ol start={1} className="list-[lower-alpha] space-y-3 pl-6">
              <li>Documentation of the event</li>
              <li>Promotion of the conference and the School’s activities</li>
              <li>Publication on the conference website, the School’s website, and official social media channels. This processing is based on the data subject’s consent, under Art. 6(1)(a) GDPR. Where required by applicable law, such consent is provided by a parent or a legal guardian.</li>
            </ol>
            <h2 className="pt-6 font-serif text-2xl font-bold text-foreground">(7) Data retention</h2>
            <ol start={1} className="list-[lower-alpha] space-y-3 pl-6">
              <li>Data of unsuccessful applicants is retained for up to 12 months after the completion of the selection process</li>
              <li>Data of selected participants is retained for the duration of participation and for up to 5 years thereafter, for administrative and organisational purposes</li>
              <li>Supporting Documents and Application Materials are deleted when no longer necessary</li>
            </ol>
            <p>Notwithstanding the above, limited identification data of selected participants (such as name, role in the conference, and school affiliation), as well as published materials (including Study Guides and Official Photographs) may be retained for extended or indefinite periods, for archival purposes in the public interest. Such data is retained only to the extent necessary to document the activities, outcomes and history of the conference, and does not include contact information of participants, application materials, and other personal data –not available in the public domain. The necessity for such retention is subject to periodic review.</p>
            <h2 className="pt-6 font-serif text-2xl font-bold text-foreground">(8) Provision of third-party data</h2>
            <p>Where participants provide personal data relating to third parties, they confirm that such individuals have been informed appropriately regarding the processing of their personal data , including the purposes of processing, and their rights under applicable law. Participants further confirm that they have been authorised to provide such data for the purposes of this conference.</p>
            <h2 className="pt-6 font-serif text-2xl font-bold text-foreground">(9) Rights of Data Subjects</h2>
            <p>Applicants retain the right to:</p>
            <ol start={1} className="list-[lower-alpha] space-y-3 pl-6">
              <li>Access to their personal data that the School retains, and any information relating to the purposes and methods of data processing, as well as request a copy of their personal data</li>
              <li>Request rectification of any incomplete or inaccurate data</li>
              <li>Request complete erasure of their data, or limit the ways in which it is processed</li>
              <li>Request data portability, where applicable</li>
              <li>Object to the processing of their personal data based on legitimate interests, where applicable</li>
              <li>Withdraw their consent at any time</li>
            </ol>
            <p>Data subjects also have the right to lodge a complaint with the competent supervisory authority: <a href="https://dpa.gr/" target="_blank" rel="noopener noreferrer" className="font-medium text-primary hover:underline">Hellenic Data Protection Authority</a>. Requests may be submitted in accordance with the <a href="https://moraitis.edu.gr/sites/default/files/gdpr_genikos_kanonismos_sxoleiou.pdf" target="_blank" rel="noopener noreferrer" className="font-medium text-primary hover:underline">School’s General Data Protection Policy</a>. The School will respond to such requests within the timeframes provided by applicable law.</p>
            <h2 className="pt-6 font-serif text-2xl font-bold text-foreground">(10) Role-Specific Provisions</h2>
            <h3 className="pt-6 font-serif text-xl font-bold text-foreground">(10.1) Students-Members of the Organising Team, the Secretariat, and Student Officers</h3>
            <p>Personal data is processed for application evaluation, role assignment, and conference organisation. Selected individuals may have their name, role, and authored materials (including Study Guides) published.</p>
            <h3 className="pt-6 font-serif text-xl font-bold text-foreground">(10.2) Delegates</h3>
            <p>Personal data is processed for registration, committee allocation, participation, and certification. Limited identification data (such as name, committee, and school affiliation) may be included in conference materials and certificates.</p>
            <h3 className="pt-6 font-serif text-xl font-bold text-foreground">(10.3) School MUN Advisors</h3>
            <p>Personal data is processed for communication, coordination, and institutional representation related to the conference.</p>
            <h2 className="pt-6 font-serif text-2xl font-bold text-foreground">(11) Acknowledgement</h2>
            <p>By registering or applying to the conference, participants confirm that:</p>
            <ol start={1} className="list-[lower-alpha] space-y-3 pl-6">
              <li>They have read and understood this Privacy Notice</li>
              <li>They acknowledge their data will be processed by authorised members of the organising team, including student organisers</li>
              <li>They understand that, where applicable, their name, role, school affiliation, authored materials, and visual material may be published</li>
              <li>They acknowledge the processing of their personal data as described herein. Where process is based on consent, such consent is obtained independently.</li>
              <li>They have taken note of the <a href="https://moraitis.edu.gr/sites/default/files/gdpr_genikos_kanonismos_sxoleiou.pdf" target="_blank" rel="noopener noreferrer" className="font-medium text-primary hover:underline">General Data Protection Policy of Moraitis School</a>.</li>
            </ol>
          </article>

          <div className="mt-10 rounded-lg border border-border bg-card p-8">
            <h2 className="mb-4 font-serif text-xl font-bold text-foreground">
              Contact
            </h2>
            <p className="text-muted-foreground">
              For any privacy-related questions or requests, please contact us at{" "}
              <a
                href="mailto:mun@moraitis.edu.gr"
                className="font-medium text-primary hover:underline"
              >
                mun@moraitis.edu.gr
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
