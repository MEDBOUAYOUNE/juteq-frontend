// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
import { Database, Zap, Clock, Target } from "lucide-react"
import Image from "next/image"

export default function Component() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-900 p-4 md:p-8 lg:p-12">
      <main className="w-full max-w-7xl mx-auto space-y-16 py-12">
        {/* Hero Section */}
        <section className="text-center space-y-6 max-w-4xl mx-auto">
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
            Seamless Integrations for Recruitment Efficiency
          </h1>
          <h2 className="font-headline text-2xl md:text-3xl lg:text-4xl font-semibold text-[#0075DE] leading-tight">
            Work smarter with the tools you already use
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Connect JOTIQ with your favorite CRMs and platforms. No disruption. Just faster outreach, smarter workflows.
          </p>
        </section>

        {/* Popular CRM Integrations */}
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <h3 className="font-headline text-2xl md:text-3xl font-bold text-gray-900">Popular CRM Integrations</h3>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              JOTIQ connects effortlessly with the industry's most trusted CRM systems like Salesforce, Bullhorn,
              HubSpot, and more. Automate outreach, sync data, and keep everything in one place. Whether you're a solo
              recruiter or managing a team, these integrations simplify your workflow and drive results.
            </p>
          </div>

          {/* CRM Logos */}
          <div className="relative overflow-hidden py-8">
            <div className="flex animate-scroll-left gap-8 whitespace-nowrap">
              {/* First set of logos */}
              {[
                { name: "Bullhorn", width: 80, height: 30 },
                { name: "Salesforce", width: 80, height: 30 },
                { name: "Vincere", width: 80, height: 30 },
                { name: "Greenhouse", width: 80, height: 30 },
                { name: "Zoho Recruit", width: 80, height: 30 },
                { name: "HubSpot", width: 80, height: 30 },
              ].map((logo, index) => (
                <div
                  key={`first-${index}`}
                  className="bg-gray-100 rounded-lg px-4 py-2 border border-gray-200 hover:border-[#0075DE] transition-colors flex-shrink-0"
                >
                  <Image
                    src={`/placeholder.svg?height=${logo.height}&width=${logo.width}&text=${logo.name}&query=${logo.name} company logo`}
                    alt={`${logo.name} logo`}
                    width={logo.width}
                    height={logo.height}
                    className="opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
