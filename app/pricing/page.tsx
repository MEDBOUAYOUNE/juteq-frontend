"use client"

import { Check, Users, User } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const individualPlans = [
  {
    name: "Explore",
    price: "Free",
    period: "",
    summary: "Start exploring JOTIQ and discover the power of AI outreach.",
    cta: "Start For Free",
    popular: false,
    features: {
      "Smart Data Upload": "Up to 500 contacts",
      "AI Email Outreach": "–",
      "Branded Content Uploads": "–",
      "Job Website Scraping": "–",
      "Storage Space": "50 MB",
      "Customer Support": "Self-service Help Center",
      "AI Voice Calls": "–",
      "Call Recording & Storage": "–",
      "Transcription & Summaries": "–",
      "Custom Integrations": false,
      "Single Sign-On (SSO)": false,
      "Custom Onboarding": false,
      "Service Level Agreement (SLA)": false,
    },
  },
  {
    name: "Activate",
    price: "$19",
    period: "/month",
    summary: "Launch your AI outreach and save hours every week.",
    cta: "Start for $19",
    popular: false,
    features: {
      "Smart Data Upload": "Up to 1,000 contacts",
      "AI Email Outreach": "2,000 emails/month (Includes approx. 500 AI-written emails)",
      "Branded Content Uploads": "3 per month",
      "Job Website Scraping": "2 websites",
      "Storage Space": "100 MB",
      "Customer Support": "24/7 Email Support",
      "AI Voice Calls": "–",
      "Call Recording & Storage": "–",
      "Transcription & Summaries": "–",
      "Custom Integrations": false,
      "Single Sign-On (SSO)": false,
      "Custom Onboarding": false,
      "Service Level Agreement (SLA)": false,
    },
  },
  {
    name: "Connect",
    price: "$49",
    period: "/month",
    summary: "Book more meetings with AI cold calling while you focus on results.",
    cta: "Start for $49",
    popular: true,
    features: {
      "Smart Data Upload": "Up to 2,000 contacts",
      "AI Email Outreach": "3,000 emails/month (Includes approx. 750 AI-written emails)",
      "Branded Content Uploads": "5 per month",
      "Job Website Scraping": "3 websites",
      "Storage Space": "500 MB",
      "Customer Support": "24/7 Email & Live Chat",
      "AI Voice Calls": "~150 min in US / ~50 min in UAE (Incl. $17.50 in AI Call Credit)",
      "Call Recording & Storage": "–",
      "Transcription & Summaries": "–",
      "Custom Integrations": false,
      "Single Sign-On (SSO)": false,
      "Custom Onboarding": false,
      "Service Level Agreement (SLA)": false,
    },
  },
  {
    name: "Convert",
    price: "$89",
    period: "/month",
    summary: "Full analytics, call transcripts, and insights to help you close faster.",
    cta: "Start for $89",
    popular: false,
    features: {
      "Smart Data Upload": "Up to 3,000 contacts",
      "AI Email Outreach": "4,000 emails/month (Includes approx. 1,000 AI-written emails)",
      "Branded Content Uploads": "Unlimited",
      "Job Website Scraping": "4 websites",
      "Storage Space": "2 GB",
      "Customer Support": "24/7 Email, Chat & Phone",
      "AI Voice Calls": "~210 min in US / ~88 min in UAE (Incl. $35.00 in AI Call Credit)",
      "Call Recording & Storage": "Included",
      "Transcription & Summaries": "Included",
      "Custom Integrations": false,
      "Single Sign-On (SSO)": false,
      "Custom Onboarding": false,
      "Service Level Agreement (SLA)": false,
    },
  },
]

const coreFeatures = [
  "Smart Data Upload",
  "AI Email Outreach",
  "Branded Content Uploads",
  "Job Website Scraping",
  "Storage Space",
  "Customer Support",
  "AI Voice Calls",
  "Call Recording & Storage",
  "Transcription & Summaries",
]

const advancedFeatures = [
  "Custom Integrations",
  "Single Sign-On (SSO)",
  "Custom Onboarding",
  "Service Level Agreement (SLA)",
]

const usps = [
  "No CRM Required",
  "Automate Your Daily Outreach in Minutes",
  "Book More Meetings with AI Voice Calling",
  "Smart Data Uploads Included",
  "Scalable Solutions for Individuals and Teams",
]

const faqs = [
  {
    question: "Can I cancel anytime?",
    answer: "Yes, you can cancel your subscription anytime in your account settings.",
  },
  {
    question: "Can I upgrade later?",
    answer: "Yes, you can upgrade or downgrade your plan anytime without losing your data.",
  },
  {
    question: "Are there any hidden fees?",
    answer: "No, all prices are transparent with no additional charges.",
  },
  {
    question: "How are AI call minutes calculated?",
    answer:
      "AI call minutes are based on the total cost of a call, which includes: Local telecommunication costs, AI processing costs, and JOTIQ service fees. The total call price is automatically calculated per country and deducted from your available AI call credits.",
  },
  {
    question: "What happens if I run out of credits?",
    answer:
      "You can easily purchase additional AI email or AI call credits at any time within your plan. You don't need to upgrade your entire plan to continue using JOTIQ.",
  },
]

export default function PricingPage() {
  const [activeTab, setActiveTab] = useState("individuals")
  const [showAdvanced, setShowAdvanced] = useState(false)

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-medium text-gray-900 mb-6">
            Choose the plan that fits your team's needs
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
            Whether you're just getting started or scaling outreach at an enterprise level, JOTIQ gives you flexible
            pricing with no contracts and no hidden fees.
          </p>

          {/* Toggle */}
          <div className="inline-flex bg-white rounded-lg p-1 border border-gray-200 mb-8">
            <button
              onClick={() => setActiveTab("individuals")}
              className={`flex items-center px-6 py-3 rounded-md font-medium transition-colors ${
                activeTab === "individuals"
                  ? "bg-blue-600 text-white"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              <User className="w-4 h-4 mr-2" />
              For Individuals
            </button>
            <button
              onClick={() => setActiveTab("teams")}
              className={`flex items-center px-6 py-3 rounded-md font-medium transition-colors ${
                activeTab === "teams" ? "bg-blue-600 text-white" : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              <Users className="w-4 h-4 mr-2" />
              For Enterprises
            </button>
          </div>

          <p className="text-gray-600">
            Recruitment or Business Development Professional? Choose 'For Individuals'. Running an agency? Choose
            'Enterprise'.
          </p>
        </div>
      </section>

      {activeTab === "individuals" ? (
        <>
          {/* Individual Plans */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Plan Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                {individualPlans.map((plan, index) => (
                  <div
                    key={index}
                    className={`bg-white rounded-lg border-2 p-6 flex flex-col h-full ${
                      plan.popular ? "border-blue-600 shadow-lg" : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    {plan.popular && (
                      <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium text-center mb-4">
                        Most Popular
                      </div>
                    )}

                    <div className="text-center mb-6">
                      <h3 className="text-xl font-medium text-gray-900 mb-2">{plan.name}</h3>
                      <div className="mb-4">
                        <span className="text-3xl font-semibold text-gray-900">{plan.price}</span>
                        {plan.period && <span className="text-gray-600">{plan.period}</span>}
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">{plan.summary}</p>
                    </div>

                    <div className="flex-1"></div>

                    <Link
                      href="/signup"
                      className={`block w-full text-center py-3 px-4 rounded-lg font-medium transition-colors ${
                        plan.popular
                          ? "bg-blue-600 text-white hover:bg-blue-700"
                          : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                      }`}
                    >
                      {plan.cta}
                    </Link>
                  </div>
                ))}
              </div>

              {/* Feature Comparison Table */}
              <div className="bg-white rounded-lg p-8 overflow-x-auto">
                <h3 className="text-2xl font-medium text-gray-900 mb-8 text-center">Compare Features</h3>
                <table className="w-full min-w-[800px]">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-4 px-4 font-medium text-gray-900 w-1/5">Feature</th>
                      {individualPlans.map((plan, index) => (
                        <th key={index} className="text-center py-4 px-3 font-medium text-gray-900">
                          <div className="flex flex-col items-center">
                            <span className="text-sm mb-1">{plan.name}</span>
                            <span className="text-lg font-semibold text-gray-900">
                              {plan.price}
                              {plan.period}
                            </span>
                            {plan.popular && (
                              <span className="text-xs text-blue-600 font-medium mt-1">Most Popular</span>
                            )}
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {/* Core Features */}
                    {coreFeatures.map((feature, featureIndex) => (
                      <tr key={featureIndex} className="border-b border-gray-100">
                        <td className="py-4 px-4 font-medium text-gray-900">{feature}</td>
                        {individualPlans.map((plan, planIndex) => (
                          <td key={planIndex} className="py-4 px-3 text-center">
                            {plan.features[feature] === "–" ? (
                              <span className="text-gray-400">–</span>
                            ) : typeof plan.features[feature] === "boolean" ? (
                              plan.features[feature] ? (
                                <Check className="h-4 w-4 text-green-600 mx-auto" />
                              ) : (
                                <span className="text-gray-400">–</span>
                              )
                            ) : (
                              <span className="text-sm text-gray-700 leading-tight">{plan.features[feature]}</span>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}

                    {/* Advanced Features Toggle */}
                    {showAdvanced &&
                      advancedFeatures.map((feature, featureIndex) => (
                        <tr key={featureIndex} className="border-b border-gray-100">
                          <td className="py-4 px-4 font-medium text-gray-900">{feature}</td>
                          {individualPlans.map((plan, planIndex) => (
                            <td key={planIndex} className="py-4 px-3 text-center">
                              {typeof plan.features[feature] === "boolean" ? (
                                plan.features[feature] ? (
                                  <Check className="h-4 w-4 text-green-600 mx-auto" />
                                ) : (
                                  <span className="text-gray-400">–</span>
                                )
                              ) : (
                                <span className="text-sm text-gray-700 leading-tight">{plan.features[feature]}</span>
                              )}
                            </td>
                          ))}
                        </tr>
                      ))}
                  </tbody>
                </table>

                <div className="text-center mt-6">
                  <button
                    onClick={() => setShowAdvanced(!showAdvanced)}
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    {showAdvanced ? "Hide Advanced Features" : "Show More Features"}
                  </button>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        /* Enterprise Section */
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-medium text-gray-900 mb-4">Enterprise Solutions</h2>
              <div className="text-3xl font-semibold text-gray-900 mb-6">Custom Pricing</div>
              <p className="text-lg text-gray-600">Contact us for tailored solutions that fit your organization</p>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {[
                  "Unlimited Smart Data Uploads",
                  "Custom AI Email Outreach Volumes",
                  "Unlimited Branded Content",
                  "Custom Job Website Scraping Sources",
                  "Custom Storage Options",
                  "Dedicated Account Manager",
                  "Custom AI Voice Call Packages",
                  "Call Recording & Transcription",
                  "API, CRM, ATS Integrations",
                  "Single Sign-On (SSO)",
                  "Custom Onboarding",
                  "Service Level Agreement (SLA)",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <Check className="h-4 w-4 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Link
                  href="/contact"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Why Choose JOTIQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium text-gray-900 mb-4">Why Choose JOTIQ?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {usps.map((usp, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="font-medium text-gray-900">{usp}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium text-gray-900 mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-medium text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
