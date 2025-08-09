import CleanHeader from "./components/clean-header"
import AIHero from "./components/ai-hero"
import AIFeatures from "./components/ai-features"
import AITestimonials from "./components/ai-testimonials"
import PricingSection from "./components/pricing-section"
import HowItWorks from "./components/how-it-works"
import HowItWorksWithJotiq from "./components/how-it-works-with-jotiq"
import WhyItWorks from "./components/why-it-works"
import MinimalCTA from "./components/minimal-cta"
import MinimalFooter from "./components/minimal-footer"
import FAQ from "./components/fqa"
import TrustedLogos from "./components/trusted-logos"
import RealCompliance from "./components/real-complaince"


export default function Home() {
  return (
    <main className="min-h-screen">
      {/* <CleanHeader /> */}
      <AIHero />
      <TrustedLogos />
      <AIFeatures />
      {/* <RealCompliance /> */}
      <HowItWorks />
      <HowItWorksWithJotiq />
      <PricingSection />
      <AITestimonials />
      <WhyItWorks />
      <FAQ />
      {/* <MinimalCTA /> */}
      {/* <MinimalFooter /> */}
    </main>
  )
}
