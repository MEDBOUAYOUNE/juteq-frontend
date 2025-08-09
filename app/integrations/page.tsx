import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import {
  Building2,
  Users,
  Target,
  TrendingUp,
  Database,
  UserCheck,
  Briefcase,
  Globe,
  BarChart3,
  FileText,
  FolderOpen,
  Zap,
  RefreshCw,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Integrations - JOTIQ",
  description:
    "Connect JOTIQ with your favorite CRMs and business platforms to streamline processes and boost productivity.",
}

const popularIntegrations = [
  {
    name: "Salesforce",
    icon: Building2,
    description: "Sync your CRM data seamlessly with JOTIQ to improve client management and streamline your outreach.",
    img_src: "/integration/Salesforce.png",
  },
  {
    name: "Bullhorn",
    icon: Users,
    description:
      "Easily manage candidates, placements, and clients by connecting Bullhorn with JOTIQ for smarter workflows.",
    img_src: "/integration/Bullhorn.png",
  },
  {
    name: "HubSpot CRM",
    icon: Target,
    description:
      "Automate your marketing and sales outreach directly from HubSpot while syncing real-time updates with JOTIQ.",
    img_src: "/integration/HubSpot.png",
  },
  {
    name: "Pipedrive",
    icon: TrendingUp,
    description: "Integrate Pipedrive with JOTIQ to simplify your sales process and boost lead management efficiency.",
    img_src: "/integration/Pipedrive.png",
  },
]

const additionalIntegrations = [
  {
    name: "Zoho CRM",
    icon: Database,
    description: "Sync your client data and automate outreach by integrating Zoho CRM with JOTIQ.",
    img_src: "/integration/zoho.svg",
  },
  {
    name: "Recruit CRM",
    icon: UserCheck,
    description: "Simplify your recruitment process and improve client communication with the Recruit CRM integration.",
    img_src: "/integration/recruit.png",
  },
  {
    name: "Breezy HR",
    icon: Briefcase,
    description: "Streamline your recruitment workflow and automate tasks by connecting Breezy HR with JOTIQ.",
    img_src: "/integration/breezy.png",
  },
  {
    name: "Copper (for Google Workspace)",
    icon: Globe,
    description: "Keep your client data always up-to-date by connecting Copper for Google Workspace with JOTIQ.",
    img_src: "/integration/Copper.webp",
  },
  {
    name: "Insightly",
    icon: BarChart3,
    description: "Optimize your business development and automate CRM tasks by linking Insightly with JOTIQ.",
    img_src: "/integration/insightly-logo.svg",
  },
  {
    name: "CANDIS CRM",
    icon: FileText,
    description: "Automate invoicing, financial workflows, and client management with the CANDIS CRM integration.",
    img_src: "/integration/CANDIS.png",
  },
]

const benefits = [
  {
    icon: FolderOpen,
    title: "Stay Organized",
    description: "Keep all your client data in one place and never miss an opportunity.",
  },
  {
    icon: Zap,
    title: "Automate Tasks",
    description: "Let JOTIQ handle lead generation, outreach, follow-ups, and more with seamless automation.",
  },
  {
    icon: RefreshCw,
    title: "Real-Time Sync",
    description: "Ensure all systems are always up-to-date with instant, real-time data synchronization.",
  },
  {
    icon: TrendingUp,
    title: "Boost Productivity",
    description: "Spend less time on repetitive tasks and more time on closing deals and growing your business.",
  },
]

export default function IntegrationsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold font-headline text-[#0075DE] mb-4">
            Seamless Integrations with Leading Tools
          </h1>
          <p className="text-lg text-gray-900 leading-relaxed max-w-3xl  mx-auto">
            JOTIQ connects effortlessly with your favorite CRMs and business platforms to streamline your processes and
            boost productivity. Whether you're using Salesforce, HubSpot, or other top solutions, JOTIQ helps you
            automate tasks, sync data, and improve workflows for better efficiency and stronger results.
          </p>
        </div>
      </section>

      {/* Popular Integrations */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0075DE] font-headline text-center py-4 mb-8">Popular Integrations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {popularIntegrations.map((integration, index) => (
              <div key={index} className="text-center group">
                <div className="flex items-center justify-center mb-4 mx-auto">
                  <Image
                    width={400}
                    height={300}
                    src={integration.img_src}
                    alt={integration.name}
                    priority={1}
                    className="w-24 h-24 object-contain hover:scale-110 transition-transform duration-300 grayscale hover:grayscale-0"
                  />
                </div>
                <p className="text-gray-600 leading-relaxed text-sm">{integration.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Integrations */}
      <section className="py-12 px-8 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0075DE] font-headline text-center mb-8">Additional Integrations</h2>

          {/* Grid with lines */}
          <div className="overflow-hidden bg-white shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {additionalIntegrations.map((integration, index) => (
                <div
                  key={index}
                  className="p-6 text-center group hover:bg-blue-50 transition-colors"
                >
                  <div className="flex items-center justify-center mb-4 mx-auto">
                    <Image
                    width={400}
                    height={300}
                    src={integration.img_src}
                    alt={integration.name}
                    priority={1}
                    className="w-24 h-24 object-contain"e
                  />
                    {/* <integration.icon className="w-16 h-16 text-gray-400 hover:text-[#0075DE] hover:scale-110 transition-all duration-300" /> */}
                  </div>
                  {/* <h3 className="text-lg font-semibold text-black mb-2">{integration.name}</h3> */}
                  <p className="text-gray-700 leading-relaxed text-sm">{integration.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Integrate */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-blue-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold font-headline text-black mb-3">Why Integrate with JOTIQ?</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Integrating your CRM and business tools with JOTIQ helps you create more connected, automated, and
              efficient workflows, giving you more time to focus on building client relationships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3 bg-white p-5 rounded-lg shadow-sm">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-300 rounded-lg flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#0075DE] mb-1">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl pb-4 font-bold text-black font-headline mb-6">Looking to connect your CRM or tool?</h2>
          {/* <p className="text-lg text-gray-700 mb-6">
            Connect JOTIQ with your favorite tools and start automating your workflows today.
          </p> */}
          <Link
            href="/"
            className="bg-[#0075DE] hover:bg-blue-700 text-white px-8 py-4 text-l font-regular rounded-lg shadow-lg cursor-pointer"
          >
            Talk to Sales
          </Link>

        </div>
      </section>
    </div>
  )
}
