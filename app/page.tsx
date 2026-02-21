import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SecretariatSection } from "@/components/secretariat-section"
import { CommitteesSection } from "@/components/committees-section"
import { ScheduleSection } from "@/components/schedule-section"
import { VenueSection } from "@/components/venue-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SecretariatSection />
      <CommitteesSection />
      <ScheduleSection />
      <VenueSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
