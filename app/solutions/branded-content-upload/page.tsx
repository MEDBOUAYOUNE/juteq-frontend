import Image from "next/image"
import { ArrowUpRight, Check, Mail, Plus, ChevronRight, Upload, FileText } from "lucide-react"

export default function BrandedContentUpload() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-900 p-4 md:p-8 lg:p-12">
      <main className="w-full max-w-6xl mx-auto grid gap-12 py-12">
        {/* Hero Section */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-headline font-semibold leading-tight">
              Branded Content Upload for Agencies
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-headline font-regular text-[#0075DE] leading-tight">
              Send polished, on-brand materials in seconds
            </h2>
            <p className="text-lg text-gray-700 max-w-md">
              Easily upload brochures, candidate profiles, proposals, or contracts. JOTIQ ensures every document reflects your brand and is ready to send at the click of a button.
            </p>
          </div>
          <div className="relative flex justify-center items-center">
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="Branded Content Upload Interface Illustration"
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
                <Plus className="w-6 h-6 text-[#0075DE] shrink-0 mt-1" />
                <p className="text-lg text-gray-700">Store brochures, CVs, and agreements in one place</p>
              </li>
              <li className="flex items-start gap-3">
                <Plus className="w-6 h-6 text-[#0075DE] shrink-0 mt-1" />
                <p className="text-lg text-gray-700">Send branded content quickly and securely</p>
              </li>
              <li className="flex items-start gap-3">
                <Plus className="w-6 h-6 text-[#0075DE] shrink-0 mt-1" />
                <p className="text-lg text-gray-700">Keep all client-facing documents visually consistent</p>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-headline font-bold mb-4">Why It Works</h3>
            <p className="text-lg text-gray-700 mb-6">
              Branded consistency builds trust. JOTIQ makes it simple to deliver documents that look professional and match your agency's style.
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
              <h4 className="text-xl font-semibold">Upload proposals and brochures</h4>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 flex items-center justify-center bg-[#0075DE] text-white rounded-full text-2xl font-bold mx-auto">
                2
              </div>
              <h4 className="text-xl font-semibold">Store files under your company branding</h4>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 flex items-center justify-center bg-[#0075DE] text-white rounded-full text-2xl font-bold mx-auto">
                3
              </div>
              <h4 className="text-xl font-semibold">Send them in one click to clients</h4>
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
                <p className="text-lg text-gray-700">Maintain brand consistency across all touchpoints</p>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-[#0075DE] shrink-0 mt-1" />
                <p className="text-lg text-gray-700">Speed up proposal and document sharing</p>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-[#0075DE] shrink-0 mt-1" />
                <p className="text-lg text-gray-700">Access all materials from one central hub</p>
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-center">
            <p className="text-2xl font-semibold italic text-gray-800 text-center">
              &quot;Upload once and use anytime&quot;
            </p>
          </div>
        </section>

        {/* Call to Action */}
        <section className="flex flex-col items-center justify-center mt-12 space-y-6">
          <button className="bg-[#0075DE] hover:bg-blue-700 text-white px-8 py-4 text-xl font-semibold rounded-lg shadow-lg transition-colors duration-200">
            Upload Your Content
          </button>
          <p className="text-md text-gray-600 text-center max-w-lg">
            Enhance your documents with {' '}
            <a 
              href="/solutions/sales-analytics"
              className="text-[#0075DE] hover:text-blue-700 transition-colors duration-200"
            >
            Sales Analytics 
            </a>
            {' '} and {' '}
            <a 
              href="/solutions/smart-data-upload-extraction"
              className="text-[#0075DE] hover:text-blue-700 transition-colors duration-200"
            >
            Smart Outreach
            </a>
          </p>
        </section>
      </main>
    </div>
  )
}