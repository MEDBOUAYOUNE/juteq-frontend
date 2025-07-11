import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const tableOfContents = [
  { id: "introduction", title: "1. Introduction" },
  { id: "service-description", title: "2. Service Description" },
  { id: "account-security", title: "3. Account Registration and Security" },
  { id: "user-responsibilities", title: "4. User Responsibilities and Legal Compliance" },
  { id: "prohibited-uses", title: "5. Prohibited Uses" },
  { id: "marketing-rights", title: "6. Marketing and Publicity Rights" },
  { id: "limitation-liability", title: "7. Limitation of Liability" },
  { id: "service-modifications", title: "8. Service Modifications" },
  { id: "termination", title: "9. Termination" },
  { id: "governing-law", title: "10. Governing Law" },
  { id: "contact-information", title: "11. Contact Information" },
  { id: "changes-terms", title: "12. Changes to the Terms" },
  { id: "acceptance", title: "13. Acceptance" },
]

export default function TermsOfUsePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-medium text-black mb-4 text-center">JOTIQ Terms of Use</h1>
          {/* <p className="text-gray-600 mb-5">Last Updated: 09/01/2025</p> */}
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-12">
            {/* Sticky Sidebar Table of Contents */}
            <div className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-24">
                <h3 className="text-sm font-medium text-black mb-4">Table of Contents</h3>
                <nav className="space-y-2">
                  {tableOfContents.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="block text-sm text-gray-600 hover:text-black transition-colors py-1"
                    >
                      {item.title}
                    </a>
                  ))}
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 max-w-4xl">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 text-sm mb-6">
              <strong>Last Updated:</strong> 09/01/2025
            </p>
                <div className="mb-6">
                  <p className="text-gray-700 leading-relaxed">
                    Welcome to JOTIQ. Please read these Terms of Use carefully before using our platform. By accessing
                    or using JOTIQ, you agree to be bound by these Terms.
                  </p>
                </div>

                {/* Section 1 */}
                <section id="introduction" key="introduction" className="mb-12">
                  <h2 className="text-xl font-medium text-black mb-6 border-b border-gray-200 pb-2">1. Introduction</h2>
                  <div className="text-gray-700 leading-relaxed space-y-4">
                    <p>
                      JOTIQ provides an AI-powered outreach platform designed for recruitment professionals. By using
                      our services, you agree to comply with these Terms of Use, our Privacy Policy, and our Disclaimer.
                    </p>
                    <p className="font-medium text-black">
                      If you do not agree with these Terms, please do not use our platform.
                    </p>
                  </div>
                </section>

                {/* Section 2 */}
                <section id="service-description" className="mb-12">
                  <h2 className="text-xl font-medium text-black mb-6 border-b border-gray-200 pb-2">
                    2. Service Description
                  </h2>
                  <div className="text-gray-700 leading-relaxed">
                    <p>
                      JOTIQ is a software-as-a-service (SaaS) platform that enables automated client outreach via email
                      and AI-powered voice calls, primarily for recruitment professionals and business development
                      users.
                    </p>
                  </div>
                </section>

                {/* Section 3 */}
                <section id="account-security" className="mb-12">
                  <h2 className="text-xl font-medium text-black mb-6 border-b border-gray-200 pb-2">
                    3. Account Registration and Security
                  </h2>
                  <div className="text-gray-700 leading-relaxed">
                    <ul className="space-y-3 list-disc pl-6">
                      <li>You are responsible for providing accurate account information.</li>
                      <li>
                        You are responsible for maintaining the confidentiality of your login credentials and for all
                        activity under your account.
                      </li>
                      <li>You agree to notify us immediately of any unauthorized access to your account.</li>
                      <li>You may not share your login credentials with others.</li>
                    </ul>
                  </div>
                </section>

                {/* Section 4 */}
                <section id="user-responsibilities" className="mb-12">
                  <h2 className="text-xl font-medium text-black mb-6 border-b border-gray-200 pb-2">
                    4. User Responsibilities and Legal Compliance
                  </h2>
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-lg font-medium text-black mb-4">4.1 Local Law Compliance</h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        You are solely responsible for ensuring that your use of JOTIQ complies with all applicable
                        local, regional, national, and international laws, including but not limited to:
                      </p>
                      <ul className="space-y-2 text-gray-700 list-disc pl-6">
                        <li>Telemarketing and cold calling laws</li>
                        <li>Privacy and data protection laws (such as GDPR, CCPA, TCPA)</li>
                        <li>Any consent requirements related to your outreach activities</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium text-black mb-4">4.2 Geographical Restrictions</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Certain features, including AI-powered voice outreach, may not be legally permitted or available
                        in specific jurisdictions, including the European Union. It is your responsibility to verify
                        whether the use of AI-powered voice outreach is lawful in your country or region.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium text-black mb-4">4.3 Consent Obligations</h3>
                      <p className="text-gray-700 leading-relaxed">
                        You must obtain all necessary permissions and consents from recipients before initiating any
                        outreach activities using JOTIQ. You are responsible for maintaining proof of consent if
                        required by law.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Section 5 */}
                <section id="prohibited-uses" className="mb-12">
                  <h2 className="text-xl font-medium text-black mb-6 border-b border-gray-200 pb-2">
                    5. Prohibited Uses
                  </h2>
                  <div className="text-gray-700 leading-relaxed">
                    <p className="mb-4">You may not use the platform to:</p>
                    <ul className="space-y-3 list-disc pl-6">
                      <li>Conduct unlawful, fraudulent, or deceptive outreach.</li>
                      <li>Send unsolicited messages that violate anti-spam or telemarketing laws.</li>
                      <li>Harass, abuse, or harm any individual or organization.</li>
                      <li>Circumvent or attempt to circumvent JOTIQ's security measures.</li>
                      <li>Remove, obscure, or alter any JOTIQ branding without written permission.</li>
                      <li>Upload or distribute viruses or malicious code.</li>
                    </ul>
                  </div>
                </section>

                {/* Section 6 */}
                <section id="marketing-rights" className="mb-12">
                  <h2 className="text-xl font-medium text-black mb-6 border-b border-gray-200 pb-2">
                    6. Marketing and Publicity Rights
                  </h2>
                  <div className="text-gray-700 leading-relaxed space-y-4">
                    <p>
                      By using the JOTIQ platform, you grant JOTIQ a worldwide, non-exclusive, royalty-free, and
                      irrevocable right to:
                    </p>
                    <ul className="space-y-3 list-disc pl-6">
                      <li>
                        Display the name and logo of the company or agency you represent on JOTIQ's website, in social
                        media posts, sales presentations, promotional materials, and other marketing content.
                      </li>
                      <li>
                        Refer to your company or agency as a customer of JOTIQ in case studies, press releases, and
                        marketing communications, unless otherwise agreed in writing.
                      </li>
                    </ul>
                    <p>
                      You confirm that you are authorized to grant this permission on behalf of the company or agency
                      you represent.
                    </p>
                    <p className="font-medium text-black">
                      If you are not authorized to grant this permission, you must notify JOTIQ immediately at{" "}
                      <Link href="mailto:legal@jotiq.ai" className="text-gray-700 underline">
                        legal@jotiq.ai
                      </Link>
                      .
                    </p>
                    <p>
                      You may opt out of this publicity permission at any time by providing written notice to{" "}
                      <Link href="mailto:privacy@jotiq.ai" className="text-gray-700 underline">
                        privacy@jotiq.ai
                      </Link>
                      . Upon receiving your request, JOTIQ will promptly remove your company's branding from future
                      marketing materials.
                    </p>
                  </div>
                </section>

                {/* Sections 7-13 */}
                {[
                  {
                    id: "limitation-liability",
                    number: "7",
                    title: "Limitation of Liability",
                    content: (
                      <div className="space-y-4">
                        <p>JOTIQ provides its services on an "as-is" and "as-available" basis.</p>
                        <p>We are not liable for:</p>
                        <ul className="space-y-2 list-disc pl-6">
                          <li>Any legal consequences resulting from your outreach activities.</li>
                          <li>Any violations of local or international laws by users.</li>
                          <li>Any indirect, incidental, special, or consequential damages.</li>
                        </ul>
                        <p>
                          JOTIQ's total cumulative liability for any claim will not exceed the amount you have paid to
                          JOTIQ in the three (3) months preceding the event giving rise to the claim.
                        </p>
                        <p>
                          We make no guarantees regarding the accuracy, reliability, or delivery success of outreach
                          activities performed via our platform.
                        </p>
                      </div>
                    ),
                  },
                  {
                    id: "service-modifications",
                    number: "8",
                    title: "Service Modifications",
                    content: (
                      <p>
                        We reserve the right to modify, suspend, or discontinue any part of the platform or its features
                        at any time, without prior notice. We may also introduce new features or impose new limitations
                        on certain services.
                      </p>
                    ),
                  },
                  {
                    id: "termination",
                    number: "9",
                    title: "Termination",
                    content: (
                      <p>
                        We may suspend or terminate your access to the platform immediately, without notice or
                        liability, if you violate these Terms. You may terminate your account at any time by contacting{" "}
                        <Link href="mailto:support@jotiq.ai" className="text-gray-700 underline">
                          support@jotiq.ai
                        </Link>
                        .
                      </p>
                    ),
                  },
                  {
                    id: "governing-law",
                    number: "10",
                    title: "Governing Law",
                    content: (
                      <p>
                        These Terms are governed by and construed in accordance with the laws of the State of Delaware,
                        United States of America. Any disputes shall be resolved in the courts located in Delaware.
                      </p>
                    ),
                  },
                  {
                    id: "contact-information",
                    number: "11",
                    title: "Contact Information",
                    content: (
                      <p>
                        For any questions about these Terms, please contact us at:{" "}
                        <Link href="mailto:legal@jotiq.ai" className="text-gray-700 underline">
                          legal@jotiq.ai
                        </Link>
                      </p>
                    ),
                  },
                  {
                    id: "changes-terms",
                    number: "12",
                    title: "Changes to the Terms",
                    content: (
                      <p>
                        We may update or modify these Terms of Use from time to time. Material changes will be
                        communicated via the platform or by direct notice to you. Continued use of the platform after
                        such changes constitutes acceptance of the updated Terms.
                      </p>
                    ),
                  },
                  {
                    id: "acceptance",
                    number: "13",
                    title: "Acceptance",
                    content: (
                      <div className="space-y-4">
                        <p>By using the JOTIQ platform, you confirm that you:</p>
                        <ul className="space-y-2 list-disc pl-6">
                          <li>Have read and understood these Terms of Use.</li>
                          <li>Agree to comply with these Terms, the Privacy Policy, and the Disclaimer.</li>
                          <li>Accept full responsibility for ensuring legal compliance with all local laws.</li>
                        </ul>
                      </div>
                    ),
                  },
                ].map((section) => (
                  <section key={section.id} id={section.id} className="mb-12">
                    <h2 className="text-xl font-medium text-black mb-6 border-b border-gray-200 pb-2">
                      {section.number}. {section.title}
                    </h2>
                    <div className="text-gray-700 leading-relaxed">{section.content}</div>
                  </section>
                ))}

                {/* Contact Section */}
                {/* <div className="mt-16 pt-8 border-t border-gray-200">
                  <h3 className="text-lg font-medium text-black mb-4">Questions about these Terms?</h3>
                  <p className="text-gray-700 mb-6">
                    If you have any questions or concerns about these Terms of Use, please contact our legal team.
                  </p>
                  <Link
                    href="mailto:legal@jotiq.ai"
                    className="inline-block bg-blue-600 text-white px-6 py-2 rounded text-sm font-medium hover:bg-blue-700 transition-colors"
                  >
                    Contact Legal Team
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
