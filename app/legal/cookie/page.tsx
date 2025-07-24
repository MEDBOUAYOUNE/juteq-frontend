import Link from "next/link"

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-black mb-4 text-center">JOTIQ Cookie Policy</h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 text-sm mb-6">
              <strong>Effective Date:</strong> 09/01/2025
            </p>

            <div className="">
              <p className="text-gray-700 leading-relaxed mb-6">
                JOTIQ uses cookies and similar tracking technologies to enhance your experience, improve our website
                performance, and analyze website traffic.
              </p>
            </div>

            {/* Section 1 */}
            <section className="mb-12">
              <h2 className="text-xl font-bold text-black mb-6 border-b border-gray-200 pb-2">
                1. What Are Cookies?
              </h2>
              <div className="text-gray-700 leading-relaxed">
                <p>
                  Cookies are small text files that are stored on your device when you visit our website. They allow us
                  to recognize your browser and remember certain information.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section className="mb-12">
              <h2 className="text-xl font-bold text-black mb-6 border-b border-gray-200 pb-2">
                2. Types of Cookies We Use
              </h2>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <p>We use the following types of cookies:</p>
                <ul className="space-y-3 list-disc pl-6">
                  <li>
                    <strong>Essential Cookies:</strong> These cookies are strictly necessary to provide you with
                    services available through our website. Without these cookies, the website may not function
                    properly.
                  </li>
                  <li>
                    <strong>Analytics Cookies:</strong> These cookies help us understand how visitors interact with our
                    website by collecting anonymous information. This data helps us improve website functionality and
                    user experience.
                  </li>
                  <li>
                    <strong>Preference Cookies:</strong> These cookies remember your settings and preferences (such as
                    language or region) to personalize your experience.
                  </li>
                  <li>
                    <strong>Marketing Cookies (if applicable):</strong> These cookies track your browsing behavior to
                    deliver relevant advertisements. You can opt-out of these cookies at any time.
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 3 */}
            <section className="mb-12">
              <h2 className="text-xl font-bold text-black mb-6 border-b border-gray-200 pb-2">3. Cookie Consent</h2>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <p>When you visit our website, you will be presented with a cookie consent banner.</p>
                <p>You can:</p>
                <ul className="space-y-2 list-disc pl-6">
                  <li>Accept all cookies.</li>
                  <li>Customize your cookie preferences.</li>
                  <li>Reject non-essential cookies.</li>
                </ul>
                <p>You can also manage or delete cookies at any time by adjusting your browser settings.</p>
                <p className="font-bold text-black">
                  Important: Essential cookies cannot be disabled as they are required for basic website functionality.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section className="mb-12">
              <h2 className="text-xl font-bold text-black mb-6 border-b border-gray-200 pb-2">
                4. Third-Party Cookies
              </h2>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <p>
                  We may allow third-party service providers (such as analytics and advertising partners) to place
                  cookies on our website. These providers may collect information in accordance with their own privacy
                  policies.
                </p>
                <p>We recommend reviewing their policies for more details:</p>
                <ul className="space-y-2 list-disc pl-6">
                  <li>
                    <Link
                      href="https://policies.google.com/privacy"
                      className="text-gray-700 underline hover:text-black"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Google Analytics Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 5 */}
            <section className="mb-12">
              <h2 className="text-xl font-bold text-black mb-6 border-b border-gray-200 pb-2">5. Data Transfers</h2>
              <div className="text-gray-700 leading-relaxed">
                <p>
                  Some cookies may result in the transfer of your data to countries outside your jurisdiction, including
                  the United States. By accepting cookies, you consent to such international transfers.
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section className="mb-12">
              <h2 className="text-xl font-bold text-black mb-6 border-b border-gray-200 pb-2">
                6. Changes to This Policy
              </h2>
              <div className="text-gray-700 leading-relaxed">
                <p>
                  We may update this Cookie Policy from time to time. Material changes will be communicated via our
                  website. Continued use of our website constitutes your acceptance of the updated policy.
                </p>
              </div>
            </section>

            {/* Section 7 */}
            <section className="mb-12">
              <h2 className="text-xl font-bold text-black mb-6 border-b border-gray-200 pb-2">7. Contact Us</h2>
              <div className="text-gray-700 leading-relaxed">
                <p>
                  For questions or requests regarding this Cookie Policy, please contact us at:{" "}
                  <Link href="mailto:privacy@jotiq.ai" className="text-gray-700 underline">
                    privacy@jotiq.ai
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