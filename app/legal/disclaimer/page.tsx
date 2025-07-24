import Link from "next/link";

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-black mb-4 text-center">JOTIQ Disclaimer</h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 text-sm mb-6">
              <strong>Last Updated:</strong> 07/21/2025
            </p>
            <div className="">
              <p className="text-gray-700 leading-relaxed mb-6">
                JOTIQ provides software tools to facilitate client outreach for recruitment professionals. We do not
                conduct outreach activities on behalf of users.
              </p>
            </div>

            {/* Key Points Section */}
            <section className="mb-12">
              <h2 className="text-xl font-bold text-black mb-6 border-b border-gray-200 pb-2">Key Points</h2>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-black mb-2">1. User Responsibility</h3>
                  <p className="mb-4">
                    All outreach activities, including AI voice calls and email campaigns, are initiated and managed by you, the user.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-black mb-2">2. Legal Compliance</h3>
                  <p className="mb-3">
                    You are fully responsible for complying with all local, national, and international laws, including but not limited to:
                  </p>
                  <ul className="space-y-2 list-disc pl-6 mb-4">
                    <li>Telemarketing and cold calling regulations</li>
                    <li>GDPR (Europe)</li>
                    <li>TCPA (United States)</li>
                    <li>Data privacy and consent laws</li>
                  </ul>
                  <p className="mb-4">
                    JOTIQ does not monitor the content of your outreach or verify consent status. You are responsible for storing and maintaining proof
                    of consent for all recipients as required by law.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-black mb-2">3. AI Voice Call Restrictions</h3>
                  <p className="mb-4">
                    AI-powered voice outreach may not be legally permitted in some jurisdictions, including when contacting mobile numbers in the
                    United States. Under the TCPA, it is illegal to use automated or AI-generated voice messages to call U.S. mobile phones without
                    prior express written consent. Violations may result in penalties of up to $1,500 per call. JOTIQ accepts no responsibility for such
                    violations.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-black mb-2">4. Feature Limitations</h3>
                  <p className="mb-4">
                    While JOTIQ may provide compliance templates and warnings, we do not guarantee full legal protection. You are responsible for
                    understanding and following the laws in your region.
                  </p>
                  <p className="mb-4">
                    If you bypass platform safeguards or use external data, you do so at your own risk.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-black mb-2">5. Platform Limitations</h3>
                  <p className="mb-3">JOTIQ does not guarantee:</p>
                  <ul className="space-y-2 list-disc pl-6 mb-4">
                    <li>Delivery rates or open/call responses</li>
                    <li>Legal compliance of your outreach</li>
                    <li>Engagement or outcomes from any campaign</li>
                  </ul>
                  <p className="mb-4">
                    JOTIQ is a tool provider, not a communication agency.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-black mb-2">6. No Legal Advice</h3>
                  <p className="mb-4">
                    Nothing in this Disclaimer, the Terms of Use, or on the JOTIQ platform constitutes legal advice. We recommend consulting legal
                    counsel before launching outreach activities in regulated jurisdictions.
                  </p>
                </div>
              </div>
            </section>

            {/* Contact Section */}
            <section className="mb-12">
              <h2 className="text-xl font-bold text-black mb-6 border-b border-gray-200 pb-2">Contact</h2>
              <div className="text-gray-700 leading-relaxed">
                <p>
                  For questions regarding this Disclaimer, contact us at:{" "}
                  <Link href="mailto:legal@jotiq.ai" className="text-gray-700 underline">
                    legal@jotiq.ai
                  </Link>
                </p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}