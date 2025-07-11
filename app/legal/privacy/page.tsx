import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
       <section className="py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
         <h1 className="text-4xl font-medium center text-black mb-4 text-center">JOTIQ Privacy Policy</h1>
         {/* <p className="text-gray-600 mb-5">Last Updated: 09/01/2025</p> */}
         </div >

      </section>

      {/* Content */}
      <section className="py-12">

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 text-sm mb-6">
              <strong>Last Updated:</strong> 09/01/2025
            </p>
            <div className="">
              <p className="text-gray-700 leading-relaxed mb-6">
                JOTIQ respects your privacy and is committed to protecting your personal data. This Privacy Policy
                explains how we collect, use, disclose, and safeguard your information when you visit or use our
                platform.
              </p>
            </div>

            {/* Section 1 */}
            <section className="mb-12">
              <h2 className="text-xl font-medium text-black mb-6 border-b border-gray-200 pb-2">
                1. Information We Collect
              </h2>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <p>We may collect the following types of information:</p>
                <ul className="space-y-3 list-disc pl-6">
                  <li>
                    <strong>User-Provided Information:</strong> Name, email address, phone number, company name, job
                    title, and other profile details.
                  </li>
                  <li>
                    <strong>Usage Data:</strong> System logs, IP addresses, device information, browser type, and
                    interaction history.
                  </li>
                  <li>
                    <strong>Third-Party Data:</strong> Information from integrations or publicly available sources.
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 2 */}
            <section className="mb-12">
              <h2 className="text-xl font-medium text-black mb-6 border-b border-gray-200 pb-2">
                2. How We Use Your Information
              </h2>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <p>We use your information to:</p>
                <ul className="space-y-2 list-disc pl-6">
                  <li>Provide and maintain the JOTIQ platform.</li>
                  <li>Enable AI-powered outreach services.</li>
                  <li>Personalize your user experience.</li>
                  <li>Improve our services and develop new features.</li>
                  <li>Comply with legal obligations.</li>
                  <li>Protect the security and integrity of our platform.</li>
                </ul>
              </div>
            </section>

            {/* Section 3 */}
            <section className="mb-12">
              <h2 className="text-xl font-medium text-black mb-6 border-b border-gray-200 pb-2">
                3. International Data Transfers
              </h2>
              <div className="text-gray-700 leading-relaxed">
                <p>
                  Your data may be processed and stored in the United States or other countries where we or our partners
                  operate. By using JOTIQ, you acknowledge and consent to these international transfers, even if the
                  local data protection laws in those countries may not provide the same level of protection as those in
                  your jurisdiction.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section className="mb-12">
              <h2 className="text-xl font-medium text-black mb-6 border-b border-gray-200 pb-2">
                4. Legal Basis for Processing (GDPR Compliance)
              </h2>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <p>We process your personal data based on:</p>
                <ul className="space-y-2 list-disc pl-6">
                  <li>Your explicit consent.</li>
                  <li>The performance of our contractual obligations with you.</li>
                  <li>Our legitimate interest in providing, maintaining, and improving our services.</li>
                  <li>Compliance with legal obligations.</li>
                </ul>
              </div>
            </section>

            {/* Section 5 */}
            <section className="mb-12">
              <h2 className="text-xl font-medium text-black mb-6 border-b border-gray-200 pb-2">
                5. User Responsibilities
              </h2>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <p>
                  You are solely responsible for ensuring that your outreach activities comply with all applicable
                  privacy, telemarketing, and data protection laws in your jurisdiction, including but not limited to:
                </p>
                <ul className="space-y-2 list-disc pl-6">
                  <li>GDPR (Europe)</li>
                  <li>TCPA (United States)</li>
                  <li>Other local consent and privacy regulations</li>
                </ul>
              </div>
            </section>

            {/* Section 6 */}
            <section className="mb-12">
              <h2 className="text-xl font-medium text-black mb-6 border-b border-gray-200 pb-2">6. Data Sharing</h2>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <p>We may share your information with:</p>
                <ul className="space-y-2 list-disc pl-6">
                  <li>
                    Service providers and contractors who assist with platform operations and processing activities.
                  </li>
                  <li>
                    Legal authorities if required to comply with applicable laws, regulations, or valid legal processes.
                  </li>
                </ul>
                <p className="font-medium text-black">We do not sell your personal data.</p>
              </div>
            </section>

            {/* Section 7 */}
            <section className="mb-12">
              <h2 className="text-xl font-medium text-black mb-6 border-b border-gray-200 pb-2">7. Your Rights</h2>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <p>Depending on your location, you may have the right to:</p>
                <ul className="space-y-2 list-disc pl-6">
                  <li>Access, update, or delete your personal data.</li>
                  <li>Restrict or object to certain types of data processing.</li>
                  <li>Withdraw consent at any time without affecting the lawfulness of prior processing.</li>
                  <li>File a complaint with your local data protection authority.</li>
                </ul>
                <p>
                  You may exercise these rights by contacting us at{" "}
                  <Link href="mailto:privacy@jotiq.ai" className="text-gray-700 underline">
                    privacy@jotiq.ai
                  </Link>
                </p>
                <p>We will respond within a reasonable timeframe in accordance with applicable data protection laws.</p>
              </div>
            </section>

            {/* Section 8 */}
            <section className="mb-12">
              <h2 className="text-xl font-medium text-black mb-6 border-b border-gray-200 pb-2">8. Data Security</h2>
              <div className="text-gray-700 leading-relaxed">
                <p>
                  We implement commercially reasonable and industry-standard security measures to protect your personal
                  data from unauthorized access, loss, or misuse. However, no system can guarantee absolute security.
                </p>
              </div>
            </section>

            {/* Section 9 */}
            <section className="mb-12">
              <h2 className="text-xl font-medium text-black mb-6 border-b border-gray-200 pb-2">9. Data Retention</h2>
              <div className="text-gray-700 leading-relaxed">
                <p>
                  We retain your personal data only as long as necessary to fulfill the purposes outlined in this
                  Privacy Policy, unless a longer retention period is required by law.
                </p>
              </div>
            </section>

            {/* Section 10 */}
            <section className="mb-12">
              <h2 className="text-xl font-medium text-black mb-6 border-b border-gray-200 pb-2">
                10. Changes to This Policy
              </h2>
              <div className="text-gray-700 leading-relaxed">
                <p>
                  We reserve the right to update or modify this Privacy Policy at any time. We will notify users of any
                  material changes via our website or direct communication channels.
                </p>
              </div>
            </section>

            {/* Section 11 */}
            <section className="mb-12">
              <h2 className="text-xl font-medium text-black mb-6 border-b border-gray-200 pb-2">11. Contact</h2>
              <div className="text-gray-700 leading-relaxed">
                <p>
                  For any questions, concerns, or requests regarding your personal data, please contact us at:{" "}
                  <Link href="mailto:privacy@jotiq.ai" className="text-gray-700 underline">
                    privacy@jotiq.ai
                  </Link>
                </p>
              </div>
            </section>

            {/* Contact Section */}
            {/* <div className="mt-16 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-medium text-black mb-4">Questions about this Privacy Policy?</h3>
              <p className="text-gray-700 mb-6">
                If you have any questions or concerns about how we handle your personal data, please contact our privacy
                team.
              </p>
              <Link
                href="mailto:privacy@jotiq.ai"
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                Contact Privacy Team
              </Link>
            </div> */}
          </div>
        </div>
      </section>
    </main>
  )
}
