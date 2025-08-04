import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function MinimalCTA() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h3 className="text-2xl md:text-3xl font-semibold font-headline text-[#005BAB] mb-4">
          Still wondering if it's right for you?
        </h3>
        {/* <p className="text-xl text-gray-600 mb-8">
          Try JOTIQ free
        </p>
         */}
        <Link
          href="/signup"
          className="inline-flex items-center bg-[#005BAB] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-colors shadow-lg hover:shadow-xl"
        >
          Start Your Free Trial
          <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </div>
    </section>
  )
}
