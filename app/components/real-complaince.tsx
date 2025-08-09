import { CheckCircle, Shield, Eye, DollarSign } from "lucide-react"

export default function RealCompliance() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-500 to-blue-600 relative overflow-hidden">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Outside Rectangle */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Smart Outreach.
          </h2>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Real Compliance.
          </h2>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
          {/* Description */}
          <div className="text-center mb-12">
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              JOTIQ isn't designed for mass outreach and that's intentional. We help recruiters connect with the right clients, not overwhelm inboxes.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Deliverability */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#005BAB] mb-4">
                Deliverability & Sender Reputation
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Protect your email deliverability and maintain a strong sender reputation with smart volume limits and ethical outreach practices.
              </p>
            </div>

            {/* Legal Compliance */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center">
                  <Eye className="w-8 h-8 text-green-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#005BAB] mb-4">
                Legal Compliance
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Stay compliant with GDPR, CAN-SPAM, TCPA and other regulations through built-in compliance features and best practices.
              </p>
            </div>

            {/* Brand Credibility */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-purple-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#005BAB] mb-4">
                Brand Credibility & Client Trust
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Build and maintain professional credibility with quality outreach that respects your prospects and builds lasting client relationships.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-12">
            <a 
              href="/quality-compliance-philosophy" 
              className="inline-flex items-center bg-[#005BAB] hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 transform hover:scale-105"
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