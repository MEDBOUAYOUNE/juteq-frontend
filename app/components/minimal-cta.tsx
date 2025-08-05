import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function MinimalCTA() {
  return (
    <section className="relative bg-white py-20 px-4 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* UI Rectangle Container */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 border border-blue-200 rounded-3xl p-24 md:p-32 shadow-xl backdrop-blur-sm">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-semibold font-headline text-[#005BAB] mb-4">
              Still wondering if it's right for you?
            </h3>
            <p className="text-xl text-gray-600 mb-8">Try JOTIQ free</p>
            <Link
              href="/signup"
              className="inline-flex items-center bg-[#005BAB] text-white px-8 py-4 rounded-lg text-lg font-regular hover:bg-blue-600 transition-colors shadow-lg hover:shadow-xl"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
