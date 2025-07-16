import Link from "next/link"

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-medium text-black mb-4 text-center">JOTIQ Disclaimer</h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 text-sm mb-6">
              <strong>Last Updated:</strong> 09/01/2025
            </p>

            <div className="mb-6">
              <p className="text-gray-700 leading-relaxed">
                JOTIQ provides software tools to facilitate client outreach for recruitment professionals. We do not
                conduct outreach activities on behalf of users.
              </p>
            </div>

            {/* Key Points Section */}
            <section id="key-points" className="mb-12">
              <h2 className="text-xl font-medium text-black mb-6 border-b border-gray-200 pb-2">Key Points</h2>
              <div className="text-gray-700 leading-relaxed space-y-6">
                <div>
                  <p className="mb-3">
                    <strong>User Responsibility:</strong> All outreach activities, including AI voice calls and email
                    campaigns, are initiated and managed by you, the user.
                  </p>
                </div>

                <div>
                  <p className="mb-3">
                    <strong>Compliance:</strong> You are fully responsible for complying with all local, national, and
                    international laws, including but not limited to:
                  </p>
                  <ul className="space-y-2 list-disc pl-6">
                    <li>Telemarketing and cold calling regulations</li>
                    <li>GDPR (Europe)</li>
                    <li>TCPA (United States)</li>
                    <li>Data privacy and consent laws</li>
                  </ul>
                </div>

                <div>
                  <p className="mb-3">
                    <strong>Feature Availability:</strong> AI-powered voice outreach may not be available or legally
                    permitted in certain regions, including the European Union.
                  </p>
                </div>
              </div>
            </section>

            {/* User Acceptance Section */}
            <section id="user-acceptance" className="mb-12">
              <h2 className="text-xl font-medium text-black mb-6 border-b border-gray-200 pb-2">User Acceptance</h2>
              <div className="text-gray-700 leading-relaxed">
                <p>
                  By using JOTIQ, you accept full responsibility for the legal compliance of your outreach activities
                  and any consequences that may arise from their use.
                </p>
              </div>
            </section>

            {/* Limitation of JOTIQ's Role Section */}
            <section id="limitation-role" className="mb-12">
              <h2 className="text-xl font-medium text-black mb-6 border-b border-gray-200 pb-2">
                Limitation of JOTIQ's Role
              </h2>
              <div className="text-gray-700 leading-relaxed">
                <ul className="space-y-3 list-disc pl-6">
                  <li>JOTIQ provides tools to support your outreach activities.</li>
                  <li>JOTIQ does not guarantee delivery rates, legal compliance, or recipient engagement.</li>
                  <li>JOTIQ is not responsible for the legality or outcomes of your outreach campaigns.</li>
                </ul>
              </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="mb-12">
              <h2 className="text-xl font-medium text-black mb-6 border-b border-gray-200 pb-2">Contact</h2>
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
  )
}
