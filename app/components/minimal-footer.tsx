import Link from "next/link"

export default function MinimalFooter() {

  return (
    <footer className="bg-white border-t border-gray-200 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <img src="/logo.png" alt="JOTIQ Logo" className="h-8 w-auto mr-3" />
            </div>
            <p className="text-gray-600 mb-6 max-w-md">
              AI-powered business development tools for recruiters and global businesses. Automate outreach, find
              clients, save time.
            </p>
          </div>

          {/* Navigation Links (Product, Company, Support) */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex flex-col sm:flex-row justify-between gap-8">
              {/* Product */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Product</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/features" className="text-gray-600 hover:text-gray-900 transition-colors">
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link href="/pricing" className="text-gray-600 hover:text-gray-900 transition-colors">
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link href="/integrations" className="text-gray-600 hover:text-gray-900 transition-colors">
                      Integrations
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/legal/about" className="text-gray-600 hover:text-gray-900 transition-colors">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/legal/terms" className="text-gray-600 hover:text-gray-900 transition-colors">
                      Terms of Use
                    </Link>
                  </li>
                  <li>
                    <Link href="/legal/privacy" className="text-gray-600 hover:text-gray-900 transition-colors">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/legal/cookie" className="text-gray-600 hover:text-gray-900 transition-colors">
                      Cookie Policy
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Support */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="mailto:support@jotiq.ai" className="text-gray-600 hover:text-gray-900 transition-colors">
                      support@jotiq.ai
                    </a>
                  </li>
                  <li>
                    <a href="tel:+212612345678" className="text-gray-600 hover:text-gray-900 transition-colors">
                      +212 000000000
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Contact & Legal Section */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <p className="text-center text-gray-600">© 2025 JOTIQ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
