import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { HomeAboutSection } from "@/components/home-about-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <HomeAboutSection />
      <Footer />
    </main>
  )
}
