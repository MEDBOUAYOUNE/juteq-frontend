import { ArrowRight, Play, Upload, BarChart3, FileText, Phone, Search, Mail } from "lucide-react"
import Link from "next/link"

const steps = [
  {
    number: "01",
    icon: Mail,
    title: "Automated Client Outreach",
    description:
      "Save time by automating your outreach, follow-ups, and meeting scheduling, all without manual effort.",
    cta: "Start Automating",
    ctaSubtext: "Get instant access to the Activate Plan.",
    gradient: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    href: "/signup",
  },
  {
    number: "02",
    icon: Phone,
    title: "AI-Powered Cold Calling",
    description:
      "Let JOTIQ's AI assistant make cold calls, qualify clients, and book meetings while you focus on closing deals.",
    cta: "See in Action",
    ctaSubtext: "Watch a quick demo of JOTIQ's AI assistant.",
    gradient: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    href: "/demo",
    isDemo: true,
  },
  {
    number: "03",
    icon: Search,
    title: "Instant Lead Generation",
    description: "Discover real-time job opportunities and fresh leads",
    cta: "Get Leads",
    ctaSubtext: "Discover real-time job opportunities today.",
    gradient: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
    href: "/signup",
  },
  {
    number: "04",
    icon: Upload,
    title: "Smart Data Upload",
    description:
      "Upload your client lists and let JOTIQ automatically structure and organize key data, ready for outreach.",
    cta: "Try it now",
    ctaSubtext: "Upload your contacts and start exploring.",
    gradient: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50",
    href: "/signup",
  },
  {
    number: "05",
    icon: FileText,
    title: "Branded Content Uploads",
    description:
      "Easily upload and send polished client proposals and candidate profiles fast, professional, and consistent.",
    cta: "Upload now",
    ctaSubtext: "Easily send professional proposals and candidate profiles.",
    gradient: "from-pink-500 to-pink-600",
    bgColor: "bg-pink-50",
    href: "/signup",
  },
  {
    number: "06",
    icon: BarChart3,
    title: "Real-Time Sales Analytics",
    description:
      "Track engagement and get AI-powered insights to fine-tune your outreach strategy and close more deals.",
    cta: "Explore Analytics",
    ctaSubtext: "Track your outreach and optimize your strategy.",
    gradient: "from-indigo-500 to-indigo-600",
    bgColor: "bg-indigo-50",
    href: "/signup",
  },
]

export default function HowItWorks() {
  return (
    <section className="py-2 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, #339AF0 0%, transparent 50%), 
              radial-gradient(circle at 75% 75%, #74C0FC 0%, transparent 50%)
            `,
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-20">
          {/* <div className="inline-flex items-center px-4 py-2 bg-dodger-blue/10 rounded-full text-sm font-medium text-dodger-blue mb-6">
            <ArrowRight className="w-4 h-4 mr-2" />
            Step-by-Step Process
          </div> */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How <span className="text-dodger-blue">JOTIQ</span> Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From automated outreach to closing deals - see how JOTIQ transforms your entire sales process
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`group relative ${step.bgColor} rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-105 animate-slide-up border border-white/50`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4">
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${step.gradient} rounded-2xl flex items-center justify-center shadow-lg transform rotate-12 group-hover:rotate-0 transition-transform duration-300`}
                >
                  <span className="text-white font-bold text-lg">{step.number}</span>
                </div>
              </div>

              {/* Icon */}
              <div
                className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${step.gradient} rounded-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                <step.icon className="h-8 w-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-dodger-blue transition-colors">
                {step.title}
              </h3>

              <p className="text-gray-700 mb-6 leading-relaxed">{step.description}</p>

              {/* CTA Button */}
              <Link
                href={step.href}
                className={`group/btn inline-flex items-center bg-gradient-to-r ${step.gradient} text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 mb-3`}
              >
                {step.isDemo && <Play className="w-4 h-4 mr-2" />}
                {step.cta}
                <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </Link>

              {/* CTA Subtext */}
              <p className="text-sm text-gray-600 font-medium">{step.ctaSubtext}</p>

              {/* Hover Effect Border */}
              <div
                className={`absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:${step.gradient.replace("from-", "border-").replace("to-", "")} opacity-30 transition-colors duration-300`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
