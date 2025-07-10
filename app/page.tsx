import CleanHeader from "./components/clean-header"
import AIHero from "./components/ai-hero"
import AIFeatures from "./components/ai-features"
import AITestimonials from "./components/ai-testimonials"
import MinimalPricing from "./components/minimal-pricing"
import HowItWorks from "./components/how-it-works"
import MinimalCTA from "./components/minimal-cta"
import MinimalFooter from "./components/minimal-footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* <CleanHeader /> */}
      <AIHero />
      <AIFeatures />
      <MinimalPricing />
      <HowItWorks />
      <AITestimonials />
      <MinimalCTA />
      {/* <MinimalFooter /> */}
    </main>
  )
}
