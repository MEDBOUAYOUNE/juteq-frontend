import { Check, ArrowRight } from "lucide-react"
import Link from "next/link"

const plans = [
  {
    name: "Explore",
    price: "Free",
    period: "",
    description: "Start exploring JOTIQ risk-free and discover the power of AI outreach.",
    features: ["Up to 500 contacts", "Email Outreach (Upgrade unlock)", "50 MB Storage"],
    cta: "Get Started Free",
    popular: false,
  },
  {
    name: "Connect",
    price: "$49",
    period: "/month",
    description: "Book more meetings with AI cold calling while you focus on results.",
    features: ["Up to 2,000 contacts", "3,000 emails/month", "AI Voice Calls", "500 MB Storage"],
    cta: "Start for $49/month",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Custom solutions, advanced integrations, and premium support tailored to your business.",
    features: [
      "Unlimited contacts",
      "Custom email & call volumes",
      "Priority Support",
      "Custom integrations available",
    ],
    cta: "Contact Sales",
    popular: false,
  },
]

export default function MinimalPricing() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Find the Right Plan for You</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl p-8 transition-all duration-300 hover:shadow-lg ${
                plan.popular
                  ? "ring-2 ring-dodger-blue shadow-lg scale-105"
                  : "border border-gray-200 hover:border-gray-300"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-dodger-blue text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                  {plan.period && <span className="text-xl text-gray-600">{plan.period}</span>}
                </div>
                <p className="text-gray-600 leading-relaxed">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={plan.name === "Enterprise" ? "/contact" : "/signup"}
                className={`block w-full text-center py-4 px-6 rounded-lg font-semibold transition-colors ${
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

        {/* See All Plans Link */}
        <div className="text-center">
          <Link
            href="/pricing"
            className="inline-flex items-center text-dodger-blue hover:text-blue-600 font-medium transition-colors group text-lg"
          >
            <p className="text-black">Looking for more advanced solutions?  </p>
            See all plans
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
