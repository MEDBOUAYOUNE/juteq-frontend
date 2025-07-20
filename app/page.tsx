import CleanHeader from "./components/clean-header"
import AIHero from "./components/ai-hero"
import AIFeatures from "./components/ai-features"
import AITestimonials from "./components/ai-testimonials"
import PricingSection from "./components/pricing-section"
import HowItWorks from "./components/how-it-works"
import MinimalCTA from "./components/minimal-cta"
import MinimalFooter from "./components/minimal-footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* <CleanHeader /> */}
      <AIHero />
      <AIFeatures />
      <PricingSection />
      {/* <HowItWorks />
      <AITestimonials /> */}
      {/* <MinimalCTA /> */}
      {/* <MinimalFooter /> */}
    </main>
  )
}
