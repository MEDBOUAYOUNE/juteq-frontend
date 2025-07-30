import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Check, Mail, Plus, ChevronRight, Phone } from "lucide-react"

export default function AIColdCalling() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-900 p-4 md:p-8 lg:p-12">
      <main className="w-full max-w-6xl mx-auto grid gap-12 py-12">
        {/* Hero Section */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-headline font-semibold leading-tight">
              AI Cold Calling for Recruitment Agencies
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-headline font-regular text-[#0075DE] leading-tight">
              Let AI start the conversation, so you can close the deal
            </h2>
            <p className="text-lg text-gray-700 max-w-md">
              JOTIQ's AI Cold Calling gives your outreach a head start. Instead of spending hours dialing cold leads, let your AI agent check in with potential clients to see if they're hiring. It's a low-pressure, high-impact approach that opens doors and leaves you free to follow up with those who show real interest.
            </p>
          </div>
          <div className="relative flex justify-center items-center">
          <Image
            // src="/solutions/ai-called.png"
            alt="AI Cold Calling Interface Illustration"
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
                <Phone className="w-6 h-6 text-[#0075DE] shrink-0 mt-1" />
                <p className="text-lg text-gray-700">Run voice outreach campaigns without picking up the phone</p>
              </li>
              <li className="flex items-start gap-3">
                <ChevronRight className="w-6 h-6 text-[#0075DE] shrink-0 mt-1" />
                <p className="text-lg text-gray-700">Use your AI agent to ask businesses if they have open roles</p>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-6 h-6 text-[#0075DE] shrink-0 mt-1" />
                <p className="text-lg text-gray-700">Follow up with warm leads flagged by the system</p>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-headline font-bold mb-4">Why It Works</h3>
            <p className="text-lg text-gray-700 mb-6">
              Cold calls are tough to scale and easy to ignore. By letting AI start the conversation, you plant a seed professionally and efficiently so you can focus on the leads that matter most.
            </p>
            {/* <div className="flex items-center justify-between text-center text-gray-700">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 flex items-center justify-center bg-[#0075DE] text-white rounded-full text-xl font-bold">
                  1
                </div>
                <p className="mt-2 text-sm">Launch Campaign</p>
              </div>
              <ChevronRight className="w-6 h-6 text-gray-400" />
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 flex items-center justify-center bg-[#0075DE] text-white rounded-full text-xl font-bold">
                  2
                </div>
                <p className="mt-2 text-sm">AI Checks Interest</p>
              </div>
              <ChevronRight className="w-6 h-6 text-gray-400" />
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 flex items-center justify-center bg-[#0075DE] text-white rounded-full text-xl font-bold">
                  3
                </div>
                <p className="mt-2 text-sm">Follow-Up Ready</p>
              </div>
            </div> */}
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
              <h4 className="text-xl font-semibold">Launch your calling campaign</h4>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 flex items-center justify-center bg-[#0075DE] text-white rounded-full text-2xl font-bold mx-auto">
                2
              </div>
              <h4 className="text-xl font-semibold">The AI agent politely checks if hiring is on the horizon</h4>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 flex items-center justify-center bg-[#0075DE] text-white rounded-full text-2xl font-bold mx-auto">
                3
              </div>
              <h4 className="text-xl font-semibold">JOTIQ highlights companies open to a follow-up</h4>
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
                <p className="text-lg text-gray-700">Open more client conversations without doing the outreach yourself</p>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-[#0075DE] shrink-0 mt-1" />
                <p className="text-lg text-gray-700">Focus only on leads who show interest</p>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-[#0075DE] shrink-0 mt-1" />
                <p className="text-lg text-gray-700">Eliminate the stress and time drain of manual cold calling</p>
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-center">
            <p className="text-2xl font-semibold italic text-gray-800 text-center">
              &quot;Let AI make the first move&quot;
            </p>
          </div>
        </section>

        {/* Call to Action */}
        <section className="flex flex-col items-center justify-center mt-12 space-y-6">
          <div className="bg-[#0075DE] hover:bg-blue-700 text-white px-8 py-4 text-xl font-semibold rounded-lg shadow-lg cursor-pointer">
            See How It Works
          </div>
          <p className="text-md text-gray-600 text-center max-w-lg">
            Looking for more automation? Pair it with {' '}
            <a 
              href="/solutions/automated-outreach"
              className="text-[#0075DE] hover:text-blue-700 transition-colors duration-200"
            >
            Automated Outreach 
            </a>
           {' '} and {' '}
            <a 
              href="/solutions/lead-generation"
              className="text-[#0075DE] hover:text-blue-700 transition-colors duration-200"
            >
             Lead Generation
            </a>
          </p>
        </section>
      </main>
    </div>
  )
}