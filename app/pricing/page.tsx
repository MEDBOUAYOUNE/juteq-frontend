"use client"

import { Check, X, ArrowRight, Users, User, Sparkles } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import CleanHeader from "../components/clean-header"
import MinimalFooter from "../components/minimal-footer"

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
      "AI Email Outreach": "locked",
      "Branded Content Uploads": "locked",
      "Job Website Scraping": "locked",
      "Storage Space": "50 MB",
      "Customer Support": "Self-service Help Center",
      "AI Voice Calls": "locked",
      "Call Recording & Storage": "Locked",
      "Transcription & Summaries": "Locked",
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
    cta: "Start for Just $19",
    popular: false,
    features: {
      "Smart Data Upload": "Up to 1,000 contacts",
      "AI Email Outreach": "2,000 emails/month (Includes approx. 500 AI-written emails)",
      "Branded Content Uploads": "3 per month",
      "Job Website Scraping": "2 websites",
      "Storage Space": "100 MB",
      "Customer Support": "24/7 Email Support",
      "AI Voice Calls": "Not included",
      "Call Recording & Storage": "Not included",
      "Transcription & Summaries": "Not included",
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
    cta: "Enable AI Voice Calling",
    popular: true,
    features: {
      "Smart Data Upload": "Up to 2,000 contacts",
      "AI Email Outreach": "3,000 emails/month (Includes approx. 750 AI-written emails)",
      "Branded Content Uploads": "5 per month",
      "Job Website Scraping": "3 websites",
      "Storage Space": "500 MB",
      "Customer Support": "24/7 Email & Live Chat",
      "AI Voice Calls": "~150 min in US / ~50 min in UAE (Incl. $17.50 in AI Call Credit)",
      "Call Recording & Storage": "Not included",
      "Transcription & Summaries": "Not included",
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
    cta: "Unlock Full AI Power",
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

const featureKeys = [
  "Smart Data Upload",
  "AI Email Outreach",
  "Branded Content Uploads",
  "Job Website Scraping",
  "Storage Space",
  "Customer Support",
  "AI Voice Calls",
  "Call Recording & Storage",
  "Transcription & Summaries",
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
      "AI call minutes are based on the total cost of a call, which includes: Local telecommunication costs, AI processing costs, and JOTIQ service fees. The total call price is automatically calculated per country and deducted from your available AI call credits. Please see our Rate Table for country-specific pricing.",
  },
  {
    question: "What happens if I run out of credits?",
    answer:
      "You can easily purchase additional AI email or AI call credits at any time within your plan. You don't need to upgrade your entire plan to continue using JOTIQ.",
  },
  {
    question: "Can I add extra credits without upgrading?",
    answer:
      "Yes, you can always top up your AI email or AI call credits without changing your subscription. Top-ups are available directly in your account dashboard.",
  },
]

export default function PricingPage() {
  const [activeTab, setActiveTab] = useState("individuals")

  return (
    <main className="min-h-screen bg-white">
      {/* <CleanHeader /> */}

      {/* Hero Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Simple, Flexible Pricing for <span className="text-dodger-blue">AI-Powered Outreach</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
            For Recruiters and Business Development Professionals. Scale your outreach, automate your follow-ups, and
            book more meetings all in one platform.
          </p>

          {/* Toggle */}
          <div className="inline-flex bg-white rounded-lg p-1 shadow-sm border border-gray-200 mb-8">
            <button
              onClick={() => setActiveTab("individuals")}
              className={`flex items-center px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                activeTab === "individuals"
                  ? "bg-dodger-blue text-white shadow-sm"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              <User className="w-4 h-4 mr-2" />
              For Individuals
            </button>
            <button
              onClick={() => setActiveTab("teams")}
              className={`flex items-center px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                activeTab === "teams"
                  ? "bg-dodger-blue text-white shadow-sm"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              <Users className="w-4 h-4 mr-2" />
              For Teams & Enterprises
            </button>
          </div>
        </div>
      </section>

      {activeTab === "individuals" ? (
        <>
          {/* Individual Plans */}
          <section className="py-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-dodger-blue mb-4">For Individuals</h2>
              </div>

              {/* Plan Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                {individualPlans.map((plan, index) => (
                  <div
                    key={index}
                    className={`relative bg-white rounded-2xl p-6 transition-all duration-300 hover:shadow-lg ${
                      plan.popular
                        ? "ring-2 ring-dodger-blue shadow-lg scale-105"
                        : "border border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-dodger-blue text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                          <Sparkles className="w-3 h-3 mr-1" />
                          Most Popular
                        </span>
                      </div>
                    )}

                    <div className="text-center mb-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                      <div className="mb-4">
                        <span className="text-4xl font-bold text-dodger-blue">{plan.price}</span>
                        {plan.period && <span className="text-gray-600">{plan.period}</span>}
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed mb-6">{plan.summary}</p>
                    </div>

                    <Link
                      href="/signup"
                      className={`block w-full text-center py-3 px-4 rounded-lg font-medium transition-colors mb-4 ${
                        plan.popular
                          ? "bg-dodger-blue text-white hover:bg-blue-600"
                          : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                      }`}
                    >
                      {plan.cta}
                    </Link>
                  </div>
                ))}
              </div>

              {/* Feature Comparison Table */}
              <div className="bg-gray-50 rounded-2xl p-6 overflow-x-auto">
                <h3 className="text-2xl font-bold text-dodger-blue mb-6 text-center">Features</h3>
                <table className="w-full min-w-[800px]">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-4 px-4 font-semibold text-gray-900 w-1/5">Feature</th>
                      {individualPlans.map((plan, index) => (
                        <th key={index} className="text-center py-4 px-3 font-semibold text-gray-900">
                          <div className="flex flex-col items-center">
                            <span className="text-sm mb-1">{plan.name}</span>
                            <span className="text-lg font-bold text-dodger-blue">
                              {plan.price}
                              {plan.period}
                            </span>
                            {plan.popular && <Sparkles className="w-4 h-4 text-dodger-blue mt-1" />}
                            <Link
                              href="/signup"
                              className={`mt-2 px-3 py-1 rounded text-xs font-medium ${
                                plan.popular
                                  ? "bg-dodger-blue text-white"
                                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                              }`}
                            >
                              {plan.cta}
                            </Link>
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {featureKeys.map((feature, featureIndex) => (
                      <tr key={featureIndex} className="border-b border-gray-100 hover:bg-white/50">
                        <td className="py-4 px-4 font-medium text-gray-900">{feature}</td>
                        {individualPlans.map((plan, planIndex) => (
                          <td key={planIndex} className="py-4 px-3 text-center">
                            {plan.features[feature] === "locked" ? (
                              <div className="flex flex-col items-center">
                                <X className="h-5 w-5 text-red-400 mb-1" />
                                <span className="text-xs text-red-600 font-medium">Upgrade to any paid plan</span>
                              </div>
                            ) : typeof plan.features[feature] === "boolean" ? (
                              plan.features[feature] ? (
                                <Check className="h-5 w-5 text-green-500 mx-auto" />
                              ) : (
                                <span className="text-sm text-gray-500">Not included</span>
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
                <p className="text-sm text-gray-600 mt-4 text-center">
                  *Call usage varies based on destination. See our{" "}
                  <Link href="/rate-table" className="text-dodger-blue hover:underline">
                    Rate Table
                  </Link>{" "}
                  for country-specific estimates.
                </p>
              </div>
            </div>
          </section>
        </>
      ) : (
        /* Enterprise Section */
        <section className="py-4">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Enterprise Solutions: For <span className="text-dodger-blue">Teams & Enterprises</span>
              </h2>
              <div className="text-4xl font-bold text-dodger-blue mb-6">Custom Pricing – Contact Us</div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {[
                  "Unlimited Smart Data Uploads",
                  "Custom AI Email Outreach Volumes",
                  "Unlimited Branded Content",
                  "Custom Job Website Scraping Sources",
                  "Custom Storage Options",
                  "Dedicated Account Manager",
                  "Custom AI Voice Call Packages & International Support",
                  "Call Recording & Transcription",
                  "API, CRM, ATS Integrations",
                  "Single Sign-On (SSO)",
                  "Custom Onboarding",
                  "Service Level Agreement (SLA)",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center bg-dodger-blue text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-colors shadow-sm"
                >
                  Let's Talk → Contact Sales
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>

              <p className="text-sm text-gray-600 mt-6 text-center">
                *Call usage varies based on destination. See our{" "}
                <Link href="/rate-table" className="text-dodger-blue hover:underline">
                  Rate Table
                </Link>{" "}
                for country-specific estimates.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* USPs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Why Choose <span className="text-dodger-blue">JOTIQ</span>?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {usps.map((usp, index) => (
              <div key={index} className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                <Check className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                <span className="font-medium text-gray-900">{usp}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              <span className="text-dodger-blue">FAQs</span> on Pricing
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <MinimalFooter /> */}
    </main>
  )
}
