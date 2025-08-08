import { CheckCircle } from "lucide-react"

export default function RealCompliance() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-headline text-gray-900 mb-6">
            Smart Outreach. Real Compliance.
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            JOTIQ isn't designed for mass outreach and that's intentional. We help recruiters connect with the right clients, not overwhelm inboxes.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            By limiting email volume and promoting ethical outreach, we protect your:
          </p>

          <div className="space-y-6 mb-10">
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
              <p className="text-lg text-gray-700">Deliverability & sender reputation</p>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
              <p className="text-lg text-gray-700">Legal compliance (GDPR, CAN-SPAM, TCPA)</p>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
              <p className="text-lg text-gray-700">Brand credibility and client trust</p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-8">
            <p className="text-lg font-semibold text-[#005BAB] text-center">
              Quality beats quantity! Always
            </p>
          </div>

          <div className="text-center">
            <a 
              href="/quality-compliance-philosophy" 
              className="inline-flex items-center text-[#005BAB] hover:text-blue-700 font-medium text-lg transition-colors duration-200"
            >
              Read our full Quality & Compliance Philosophy
              <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}