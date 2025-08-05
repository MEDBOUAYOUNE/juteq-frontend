import CleanHeader from "./components/clean-header"
import AIHero from "./components/ai-hero"
import AIFeatures from "./components/ai-features"
import AITestimonials from "./components/ai-testimonials"
import PricingSection from "./components/pricing-section"
import HowItWorks from "./components/how-it-works"
import WhyItWorks from "./components/why-it-works"
import MinimalCTA from "./components/minimal-cta"
import MinimalFooter from "./components/minimal-footer"
import FAQ from "./components/fqa"
import TrustedLogos from "./components/trusted-logos"


export default function Home() {
  return (
    <main className="min-h-screen">
      {/* <CleanHeader /> */}
      <AIHero />
      <TrustedLogos />
      <AIFeatures />
      <HowItWorks />
      <PricingSection />
      <AITestimonials />
      <WhyItWorks />
      <FAQ />
      <MinimalCTA />
      {/* <MinimalFooter /> */}
    </main>
  )
}
