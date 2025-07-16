import { Check } from "lucide-react"
import Link from "next/link"

const plans = [
  {
    name: "Explore",
    price: "Free",
    period: "",
    description: "Start exploring JOTIQ risk-free and discover the power of AI outreach.",
    features: ["Up to 500 contacts", "Email templates library", "Basic analytics", "50 MB storage"],
    cta: "Get Started Free",
    popular: false,
  },
  {
    name: "Activate",
    price: "$19",
    period: "/month",
    description: "Launch your AI outreach and save hours every week.",
    features: [
      "Up to 1,000 contacts",
      "2,000 emails/month (incl. 500 AI-written)",
      "3 branded content uploads",
      "2 job websites scraping",
      "Email automation sequences",
      "Basic integrations",
    ],
    cta: "Start for $19",
    popular: false,
  },
  {
    name: "Connect",
    price: "$49",
    period: "/month",
    description: "Book more meetings with AI cold calling while you focus on results.",
    features: [
      "Up to 2,000 contacts",
      "5,000 emails/month (incl. 2,000 AI-written)",
      "AI voice calls (500/month)",
      "10 branded content uploads",
      "5 job websites scraping",
      "Advanced analytics",
      "Priority support",
    ],
    cta: "Start for $49",
    popular: true,
  },
]

export default function PricingSection() {
  return (
    <section className="py-10 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-medium text-gray-900 mb-6">Find the Right Plan for You</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that fits your outreach needs. Start free and upgrade as you grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-lg border-2 transition-all duration-200 flex flex-col h-full ${
                plan.popular ? "border-blue-600 shadow-lg" : "border-gray-200 hover:border-gray-300 hover:shadow-md"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-8 flex flex-col flex-1">
                {/* Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-medium text-gray-900 mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-semibold text-gray-900">{plan.price}</span>
                    {plan.period && <span className="text-lg text-gray-600">{plan.period}</span>}
                  </div>
                  <p className="text-gray-600 leading-relaxed">{plan.description}</p>
                </div>

                {/* Features */}
                <div className="mb-8 flex-1">
                  <p className="text-sm font-medium text-gray-900 mb-4">Included in this plan</p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="h-4 w-4 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <Link
                  href={plan.name === "Enterprise" ? "/contact" : "/signup"}
                  className={`block w-full text-center py-3 px-6 rounded-lg font-medium transition-colors ${
                    plan.popular
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* See All Plans Link */}
        <div className="text-center">
          <p className="text-gray-600 mb-2">Looking for more advanced solutions?</p>
          <Link href="/pricing" className="text-blue-600 hover:text-blue-700 font-medium transition-colors">
            See All Plans
          </Link>
        </div>
      </div>
    </section>
  )
}
