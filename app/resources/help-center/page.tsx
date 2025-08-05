"use client"
import { useState } from "react"

export default function HelpCenterPage() {
  const [activeSection, setActiveSection] = useState<string>("getting-started")

  const sections = [
    {
      id: "getting-started",
      title: "Getting Started",
      content: [
        "How to create your JOTIQ account",
        "Setting up your first campaign",
        "Uploading your contact lists",
        "Basic platform navigation"
      ]
    },
    {
      id: "features",
      title: "Features & Functionalities",
      content: [
        "AI-powered email outreach",
        "Voice calling automation",
        "Lead generation tools",
        "Analytics and reporting",
        "Template management"
      ]
    },
    {
      id: "troubleshooting",
      title: "Troubleshooting",
      content: [
        "Common login issues",
        "Email delivery problems",
        "Contact import errors",
        "Campaign not starting",
        "Performance optimization"
      ]
    },
    {
      id: "best-practices",
      title: "Best Practices",
      content: [
        "Writing effective outreach emails",
        "Optimizing response rates",
        "Managing your contact database",
        "Setting up follow-up sequences",
        "Compliance and best practices"
      ]
    }
  ]

  const activeSectionData = sections.find(section => section.id === activeSection)

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-semibold font-headline text-gray-900 mb-4 flex items-center justify-center gap-3">
            {/* <span className="text-4xl md:text-5xl">📚</span> */}
            Help Center
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find quick answers, setup guides, and troubleshooting tips to get the most out of JOTIQ.
          </p>
        </div>
      </section>

      {/* Tab Navigation and Content */}
      <section className="pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center border-b border-gray-200 mb-8">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors duration-200 ${
                  activeSection === section.id
                    ? 'border-[#005BAB] text-[#005BAB] bg-gray-50'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {section.title}
              </button>
            ))}
          </div>

          {/* Active Section Content */}
          {activeSectionData && (
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 border border-blue-200 rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-semibold font-headline text-[#005BAB] mb-6 text-center">
                {activeSectionData.title}
              </h3>
              
              <div className="max-w-2xl mx-auto">
                <ul className="space-y-4">
                  {activeSectionData.content.map((item, index) => (
                    <li key={index} className="text-gray-700 flex items-start gap-3 text-lg">
                      <span className="text-[#005BAB] mt-2 w-2 h-2 rounded-full bg-[#005BAB] flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Contact Support Section
      <section className="bg-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 border border-blue-200 rounded-3xl p-8 md:p-12 shadow-lg text-center">
            <h3 className="text-2xl font-semibold font-headline text-[#005BAB] mb-4">
              Still need help?
            </h3>
            <p className="text-gray-600 mb-6">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <a
              href="/resources/support"
              className="inline-flex items-center bg-[#005BAB] text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors shadow-lg hover:shadow-xl"
            >
              Contact Support
            </a>
          </div>
        </div>
      </section> */}
    </div>
  )
}