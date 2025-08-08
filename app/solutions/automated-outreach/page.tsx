import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Check, Mail, Plus, ChevronRight, Phone, Bot, Clock, Calendar } from "lucide-react"

export default function AutomatedClientOutreach() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-900 p-4 md:p-8 lg:p-12">
      <main className="w-full max-w-6xl mx-auto grid gap-12 py-12">
        {/* Hero Section */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-headline font-semibold leading-tight">
              Automated Client Outreach for Recruiters
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-headline font-regular text-[#0075DE] leading-tight">
              Scale your outreach without losing the human touch
            </h2>
            <p className="text-lg text-gray-700 max-w-md">
              JOTIQ's Automated Client Outreach is built for recruiters and agency owners who want to reach more clients in less time. Create personalized emails, automate follow-ups, and schedule meetings without the manual workload.
            </p>
          </div>
          <div className="relative flex justify-center items-center">
          <Image
            src="/solutions/automated-outreach.png"
            alt="Automated Client Outreach Interface Illustration"
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
                <Mail className="w-6 h-6 text-[#0075DE] shrink-0 mt-1" />
                <p className="text-lg text-gray-700">Generate high-quality outreach emails in seconds using AI</p>
              </li>
              <li className="flex items-start gap-3">
                <ChevronRight className="w-6 h-6 text-[#0075DE] shrink-0 mt-1" />
                <p className="text-lg text-gray-700">Automate follow-ups based on engagement and timing</p>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-6 h-6 text-[#0075DE] shrink-0 mt-1" />
                <p className="text-lg text-gray-700">Let clients schedule calls directly through integrated links</p>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-headline font-bold mb-4">Why It Works</h3>
            <p className="text-lg text-gray-700 mb-6">
              Recruiters often spend hours sending cold emails and chasing responses. JOTIQ automates your outreach while keeping messages relevant, timely, and personalized so you can focus on building relationships that matter.
            </p>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="mt-12">
          <h3 className="text-2xl font-headline font-bold mb-6 text-center">How It Works (Step-by-Step)</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 flex items-center justify-center bg-[#EB6810] rounded-full mx-auto">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <Bot className="w-8 h-8 text-[#EB6810] mx-auto" />
              <h4 className="text-xl font-semibold">AI generates a personalized email</h4>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 flex items-center justify-center bg-[#EB6810] rounded-full mx-auto">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <Clock className="w-8 h-8 text-[#EB6810] mx-auto" />
              <h4 className="text-xl font-semibold">Follow-up is automatically scheduled</h4>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 flex items-center justify-center bg-[#EB6810] rounded-full mx-auto">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <Calendar className="w-8 h-8 text-[#EB6810] mx-auto" />
              <h4 className="text-xl font-semibold">Meeting is booked through integrated scheduling</h4>
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
                <p className="text-lg text-gray-700">Save up to 10 hours per week on manual outreach</p>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-[#0075DE] shrink-0 mt-1" />
                <p className="text-lg text-gray-700">Stay consistent with every client touchpoint</p>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-[#0075DE] shrink-0 mt-1" />
                <p className="text-lg text-gray-700">Boost response rates with well-timed follow-ups</p>
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-center">
            <p className="text-2xl font-semibold italic text-gray-800 text-center">
              &quot;Start automating your outreach today&quot;
            </p>
          </div>
        </section>

        {/* Call to Action */}
        <section className="flex flex-col items-center justify-center mt-12 space-y-6">
          <Link
            href="/signup"
            className="group relative bg-[#0075DE] text-white px-6 py-3 font-medium text-base rounded-lg hover:bg-blue-700 hover:border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 ease-out text-center hover:shadow-md hover:shadow-blue-600/25 transform hover:-translate-y-0.5"
          >
            <span className="transition-all duration-300 group-hover:translate-x-1">Start Automating Now</span>
          </Link>
          <p className="text-md text-gray-600 text-center max-w-lg">
            Looking for more ways to boost engagement? Explore our {' '}
            <a 
              href="/solutions/ai-cold-calling"
              className="text-[#0075DE] hover:text-blue-700 transition-colors duration-200"
            >
            AI Cold Calling 
            </a>
           {' '} and {' '}
            <a 
              href="/solutions/lead-generation"
              className="text-[#0075DE] hover:text-blue-700 transition-colors duration-200"
            >
             Lead Generation
            </a>
            {' '} tools.
          </p>
        </section>
      </main>
    </div>
  )
}