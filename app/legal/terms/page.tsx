import Link from "next/link"
import { ArrowLeft, Mail, Shield, AlertTriangle, Scale } from "lucide-react"

export default function TermsOfUsePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center text-dodger-blue hover:text-blue-600 font-medium transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">JOTIQ Terms of Use</h1>
          <p className="text-lg text-gray-600">Last Updated: 09/01/2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <p className="text-gray-700 leading-relaxed mb-0">
                Welcome to JOTIQ. Please read these Terms of Use carefully before using our platform. By accessing or
                using JOTIQ, you agree to be bound by these Terms.
              </p>
            </div>

            {/* Section 1 */}
            <div className="mb-12">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-dodger-blue rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Introduction</h2>
              </div>
              <div className="ml-11 text-gray-700 leading-relaxed space-y-4">
                <p>
                  JOTIQ provides an AI-powered outreach platform designed for recruitment professionals. By using our
                  services, you agree to comply with these Terms of Use, our Privacy Policy, and our Disclaimer.
                </p>
                <p className="font-medium text-gray-900">
                  If you do not agree with these Terms, please do not use our platform.
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div className="mb-12">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-dodger-blue rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Service Description</h2>
              </div>
              <div className="ml-11 text-gray-700 leading-relaxed">
                <p>
                  JOTIQ is a software-as-a-service (SaaS) platform that enables automated client outreach via email and
                  AI-powered voice calls, primarily for recruitment professionals and business development users.
                </p>
              </div>
            </div>

            {/* Section 3 */}
            <div className="mb-12">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-dodger-blue rounded-full flex items-center justify-center mr-3">
                  <Shield className="w-4 h-4 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Account Registration and Security</h2>
              </div>
              <div className="ml-11 text-gray-700 leading-relaxed">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-dodger-blue mr-2">•</span>
                    You are responsible for providing accurate account information.
                  </li>
                  <li className="flex items-start">
                    <span className="text-dodger-blue mr-2">•</span>
                    You are responsible for maintaining the confidentiality of your login credentials and for all
                    activity under your account.
                  </li>
                  <li className="flex items-start">
                    <span className="text-dodger-blue mr-2">•</span>
                    You agree to notify us immediately of any unauthorized access to your account.
                  </li>
                  <li className="flex items-start">
                    <span className="text-dodger-blue mr-2">•</span>
                    You may not share your login credentials with others.
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 4 */}
            <div className="mb-12">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-dodger-blue rounded-full flex items-center justify-center mr-3">
                  <Scale className="w-4 h-4 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">User Responsibilities and Legal Compliance</h2>
              </div>
              <div className="ml-11 space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">4.1 Local Law Compliance</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    You are solely responsible for ensuring that your use of JOTIQ complies with all applicable local,
                    regional, national, and international laws, including but not limited to:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-dodger-blue mr-2">•</span>
                      Telemarketing and cold calling laws
                    </li>
                    <li className="flex items-start">
                      <span className="text-dodger-blue mr-2">•</span>
                      Privacy and data protection laws (such as GDPR, CCPA, TCPA)
                    </li>
                    <li className="flex items-start">
                      <span className="text-dodger-blue mr-2">•</span>
                      Any consent requirements related to your outreach activities
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">4.2 Geographical Restrictions</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Certain features, including AI-powered voice outreach, may not be legally permitted or available in
                    specific jurisdictions, including the European Union. It is your responsibility to verify whether
                    the use of AI-powered voice outreach is lawful in your country or region.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">4.3 Consent Obligations</h3>
                  <p className="text-gray-700 leading-relaxed">
                    You must obtain all necessary permissions and consents from recipients before initiating any
                    outreach activities using JOTIQ. You are responsible for maintaining proof of consent if required by
                    law.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 5 */}
            <div className="mb-12">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-3">
                  <AlertTriangle className="w-4 h-4 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Prohibited Uses</h2>
              </div>
              <div className="ml-11 text-gray-700 leading-relaxed">
                <p className="mb-4">You may not use the platform to:</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    Conduct unlawful, fraudulent, or deceptive outreach.
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    Send unsolicited messages that violate anti-spam or telemarketing laws.
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    Harass, abuse, or harm any individual or organization.
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    Circumvent or attempt to circumvent JOTIQ's security measures.
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    Remove, obscure, or alter any JOTIQ branding without written permission.
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    Upload or distribute viruses or malicious code.
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 6 */}
            <div className="mb-12">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-dodger-blue rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">6</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Marketing and Publicity Rights</h2>
              </div>
              <div className="ml-11 text-gray-700 leading-relaxed space-y-4">
                <p>
                  By using the JOTIQ platform, you grant JOTIQ a worldwide, non-exclusive, royalty-free, and irrevocable
                  right to:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-dodger-blue mr-2">•</span>
                    Display the name and logo of the company or agency you represent on JOTIQ's website, in social media
                    posts, sales presentations, promotional materials, and other marketing content.
                  </li>
                  <li className="flex items-start">
                    <span className="text-dodger-blue mr-2">•</span>
                    Refer to your company or agency as a customer of JOTIQ in case studies, press releases, and
                    marketing communications, unless otherwise agreed in writing.
                  </li>
                </ul>
                <p>
                  You confirm that you are authorized to grant this permission on behalf of the company or agency you
                  represent.
                </p>
                <p className="font-medium text-gray-900">
                  If you are not authorized to grant this permission, you must notify JOTIQ immediately at{" "}
                  <Link href="mailto:legal@jotiq.ai" className="text-dodger-blue hover:underline">
                    legal@jotiq.ai
                  </Link>
                  .
                </p>
                <p>
                  You may opt out of this publicity permission at any time by providing written notice to{" "}
                  <Link href="mailto:privacy@jotiq.ai" className="text-dodger-blue hover:underline">
                    privacy@jotiq.ai
                  </Link>
                  . Upon receiving your request, JOTIQ will promptly remove your company's branding from future
                  marketing materials.
                </p>
              </div>
            </div>

            {/* Sections 7-13 */}
            {[
              {
                number: "7",
                title: "Limitation of Liability",
                content: (
                  <div className="space-y-4">
                    <p>JOTIQ provides its services on an "as-is" and "as-available" basis.</p>
                    <p>We are not liable for:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-dodger-blue mr-2">•</span>
                        Any legal consequences resulting from your outreach activities.
                      </li>
                      <li className="flex items-start">
                        <span className="text-dodger-blue mr-2">•</span>
                        Any violations of local or international laws by users.
                      </li>
                      <li className="flex items-start">
                        <span className="text-dodger-blue mr-2">•</span>
                        Any indirect, incidental, special, or consequential damages.
                      </li>
                    </ul>
                    <p>
                      JOTIQ's total cumulative liability for any claim will not exceed the amount you have paid to JOTIQ
                      in the three (3) months preceding the event giving rise to the claim.
                    </p>
                    <p>
                      We make no guarantees regarding the accuracy, reliability, or delivery success of outreach
                      activities performed via our platform.
                    </p>
                  </div>
                ),
              },
              {
                number: "8",
                title: "Service Modifications",
                content: (
                  <p>
                    We reserve the right to modify, suspend, or discontinue any part of the platform or its features at
                    any time, without prior notice. We may also introduce new features or impose new limitations on
                    certain services.
                  </p>
                ),
              },
              {
                number: "9",
                title: "Termination",
                content: (
                  <p>
                    We may suspend or terminate your access to the platform immediately, without notice or liability, if
                    you violate these Terms. You may terminate your account at any time by contacting{" "}
                    <Link href="mailto:support@jotiq.ai" className="text-dodger-blue hover:underline">
                      support@jotiq.ai
                    </Link>
                    .
                  </p>
                ),
              },
              {
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
                number: "11",
                title: "Contact Information",
                content: (
                  <p>
                    For any questions about these Terms, please contact us at:{" "}
                    <Link href="mailto:legal@jotiq.ai" className="text-dodger-blue hover:underline">
                      legal@jotiq.ai
                    </Link>
                  </p>
                ),
              },
              {
                number: "12",
                title: "Changes to the Terms",
                content: (
                  <p>
                    We may update or modify these Terms of Use from time to time. Material changes will be communicated
                    via the platform or by direct notice to you. Continued use of the platform after such changes
                    constitutes acceptance of the updated Terms.
                  </p>
                ),
              },
              {
                number: "13",
                title: "Acceptance",
                content: (
                  <div className="space-y-4">
                    <p>By using the JOTIQ platform, you confirm that you:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-dodger-blue mr-2">•</span>
                        Have read and understood these Terms of Use.
                      </li>
                      <li className="flex items-start">
                        <span className="text-dodger-blue mr-2">•</span>
                        Agree to comply with these Terms, the Privacy Policy, and the Disclaimer.
                      </li>
                      <li className="flex items-start">
                        <span className="text-dodger-blue mr-2">•</span>
                        Accept full responsibility for ensuring legal compliance with all local laws.
                      </li>
                    </ul>
                  </div>
                ),
              },
            ].map((section) => (
              <div key={section.number} className="mb-12">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-dodger-blue rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">{section.number}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                </div>
                <div className="ml-11 text-gray-700 leading-relaxed">{section.content}</div>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-16 bg-gray-50 rounded-2xl p-8">
            <div className="flex items-center mb-4">
              <Mail className="w-6 h-6 text-dodger-blue mr-3" />
              <h3 className="text-xl font-bold text-gray-900">Questions about these Terms?</h3>
            </div>
            <p className="text-gray-600 mb-4">
              If you have any questions or concerns about these Terms of Use, please don't hesitate to contact our legal
              team.
            </p>
            <Link
              href="mailto:legal@jotiq.ai"
              className="inline-flex items-center bg-dodger-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
            >
              Contact Legal Team
              <Mail className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
