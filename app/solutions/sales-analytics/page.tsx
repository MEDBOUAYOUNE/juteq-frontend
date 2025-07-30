import Image from "next/image"
import { ArrowUpRight, Check, Mail, Plus, ChevronRight, BarChart, TrendingUp } from "lucide-react"

export default function SalesAnalytics() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-900 p-4 md:p-8 lg:p-12">
      <main className="w-full max-w-6xl mx-auto grid gap-12 py-12">
        {/* Hero Section */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-headline font-semibold leading-tight">
              Sales Analytics for Recruiters
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-headline font-regular text-[#0075DE] leading-tight">
              Track every interaction. Improve every outcome.
            </h2>
            <p className="text-lg text-gray-700 max-w-md">
              JOTIQ's Sales Analytics shows you how your emails perform in real time. Track open rates, replies, and engagement patterns to refine your outreach strategy.
            </p>
          </div>
          <div className="relative flex justify-center items-center">
          <Image
            // src="/solutions/sales.png"
            alt="Sales Analytics Dashboard Illustration"
            width={400}
            height={300}
            className="rounded-3xl shadow-2xl border border-gray-100 object-cover"
          />
        </div>
        </section>

        {/* What You Can Do / Why It Works Sections */}
        <section className="grid md:grid-cols-2 gap-12 mt-12">
          <div>
            <h3 className="text-2xl font-headline font-bold mb-4">What You Can Do</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <BarChart className="w-6 h-6 text-[#0075DE] shrink-0 mt-1" />
                <p className="text-lg text-gray-700">Monitor campaign performance at a glance</p>
              </li>
              <li className="flex items-start gap-3">
                <TrendingUp className="w-6 h-6 text-[#0075DE] shrink-0 mt-1" />
                <p className="text-lg text-gray-700">See what content drives engagement</p>
              </li>
              <li className="flex items-start gap-3">
                <ArrowUpRight className="w-6 h-6 text-[#0075DE] shrink-0 mt-1" />
                <p className="text-lg text-gray-700">Identify top-performing messages and timing</p>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-headline font-bold mb-4">Why It Works</h3>
            <p className="text-lg text-gray-700 mb-6">
              Without data, outreach becomes guesswork. JOTIQ provides real-time visibility into what works, so you can double down on results.
            </p>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="mt-12">
          <h3 className="text-2xl font-headline font-bold mb-6 text-center">How It Works (Step-by-Step)</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 flex items-center justify-center bg-[#0075DE] text-white rounded-full text-2xl font-bold mx-auto">
                1
              </div>
              <h4 className="text-xl font-semibold">Track opens, clicks, and replies</h4>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 flex items-center justify-center bg-[#0075DE] text-white rounded-full text-2xl font-bold mx-auto">
                2
              </div>
              <h4 className="text-xl font-semibold">View insights in real time</h4>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 flex items-center justify-center bg-[#0075DE] text-white rounded-full text-2xl font-bold mx-auto">
                3
              </div>
              <h4 className="text-xl font-semibold">Optimize strategy for conversions</h4>
            </div>
          </div>
        </section>

        {/* Key Benefits & Testimonial */}
        <section className="grid md:grid-cols-2 gap-12 mt-12">
          <div>
            <h3 className="text-2xl font-headline font-bold mb-4">Key Benefits</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-[#0075DE] shrink-0 mt-1" />
                <p className="text-lg text-gray-700">Data-driven optimization of email campaigns</p>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-[#0075DE] shrink-0 mt-1" />
                <p className="text-lg text-gray-700">Clear visibility into client behavior</p>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-[#0075DE] shrink-0 mt-1" />
                <p className="text-lg text-gray-700">Improved conversions from smarter decisions</p>
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-center">
            <p className="text-2xl font-semibold italic text-gray-800 text-center">
              &quot;Make smarter outreach decisions with live data&quot;
            </p>
          </div>
        </section>

        {/* Call to Action */}
        <section className="flex flex-col items-center justify-center mt-12 space-y-6">
          <button className="bg-[#0075DE] hover:bg-blue-700 text-white px-8 py-4 text-xl font-semibold rounded-lg shadow-lg transition-colors duration-200">
            View Demo
          </button>
          <p className="text-md text-gray-600 text-center max-w-lg">
            Take it further with {' '}
            <a 
              href="/solutions/conversation-intelligence"
              className="text-[#0075DE] hover:text-blue-700 transition-colors duration-200"
            >
            Conversation Intelligence 
            </a>
            {' '} and {' '}
            <a 
              href="/solutions/ai-cold-calling"
              className="text-[#0075DE] hover:text-blue-700 transition-colors duration-200"
            >
            Cold Calling Insights
            </a>
          </p>
        </section>
      </main>
    </div>
  )
}