import { Users, Briefcase, Building2 } from "lucide-react"
import Image from "next/image"

export default function AITestimonials() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Headline */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-center font-headline text-[#005BAB] mb-4">Use Cases by Persona</h2>
          <p className="text-xl text-gray-600">Tailored for Every Type of Recruitment Professional</p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Recruiters Card */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="h-48 bg-gray-200 flex items-center justify-center relative">
              <Image
                src="/placeholder.svg"
                alt="Recruiters"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold font-headline text-gray-900 mb-4">Recruiters</h3>
              <p className="text-gray-600 leading-relaxed">
                Automate your client outreach and look instantly professional. JOTIQ helps you win new business and
                follow up consistently without extra resources.
              </p>
            </div>
          </div>

          {/* Client Manager & BD Card */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="h-48 bg-gray-200 flex items-center justify-center relative">
              <Image
                src="/placeholder.svg"
                alt="Client Manager & BD"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 font-headline mb-4">Client Manager & BD</h3>
              <p className="text-gray-600 leading-relaxed">
                Use AI-driven emails and calls to stay top-of-mind with clients and re-engage dormant leads. Never miss
                a follow-up again.
              </p>
            </div>
          </div>

          {/* Agency Owners Card */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="h-48 bg-gray-200 flex items-center justify-center relative">
              <Image
                src="/placeholder.svg"
                alt="Agency Owners"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 font-headline mb-4">Agency Owners</h3>
              <p className="text-gray-600 leading-relaxed">
                Scale your team's outreach with centralized campaigns. Help your recruiters book more meetings and hit
                targets faster.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
 )
}