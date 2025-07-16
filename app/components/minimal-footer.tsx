import Link from "next/link"

export default function MinimalFooter() {
  return (
    <footer className="bg-[#233373] border-t border-gray-200 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-1 ">
            <Link href="/">
              <img
                src="/logo.png"
                alt="JOTIQ Logo"
                className="h-8 w-auto mr-3"
              />
            </Link>
            {/* <p className="mt-4 text-[#D1D5DB] text-sm leading-relaxed">
              Your AI-powered business development assistant, built for recruiters and agencies worldwide.
            </p> */}
          </div>

          {/* Navigation Links (Product, Company, Support) */}
          <div className="col-span-1 md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Product */}
            <div>
              <h3 className="font-semibold text-[#D1D5DB] mb-4">Product</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/features" className="text-[#D1D5DB] hover:text-text-gray-200 transition-colors text-sm">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-[#D1D5DB] hover:text-text-gray-200 transition-colors text-sm">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/integrations" className="text-[#D1D5DB] hover:text-text-gray-200 transition-colors text-sm">
                    Integrations
                  </Link>
                </li>
              </ul>
            </div>


            {/* Resources */}
            <div>
              <h3 className="font-semibold text-[#D1D5DB] mb-4">Resources</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/blog" className="text-[#D1D5DB] hover:text-text-gray-200 transition-colors text-sm">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/docs" className="text-[#D1D5DB] hover:text-text-gray-200 transition-colors text-sm">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="/community" className="text-[#D1D5DB] hover:text-text-gray-200 transition-colors text-sm">
                    Community
                  </Link>
                </li>
              </ul>
            </div>
            {/* Company */}
            <div>
              <h3 className="font-semibold text-[#D1D5DB] mb-4">Company</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/about" className="text-[#D1D5DB] hover:text-text-gray-200 transition-colors text-sm">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-[#D1D5DB] hover:text-gray-200 transition-colors text-sm">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-[#D1D5DB] hover:text-gray-200 transition-colors text-sm">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            {/* Support */}
            <div>
              <h3 className="font-semibold text-[#D1D5DB] mb-4">Support</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:support@jotiq.ai"
                    className="text-[#D1D5DB] hover:text-gray-200 transition-colors text-sm"
                  >
                    support@jotiq.ai
                  </a>
                </li>
                {/* <li>
                  <a href="tel:+212612345678" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                    +212 000000000
                  </a>
                </li> */}
                <li>
                  <Link href="/help" className="text-[#D1D5DB] hover:text-gray-200 transition-colors text-sm">
                    Help Center
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between text-sm">
          {/* Copyright */}
          <span className="text-gray-200 text-center md:text-left mb-4 md:mb-0">
            Copyright © 2025 JOTIQ. All rights reserved.
          </span>

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center md:justify-end items-center gap-x-4 gap-y-2">
            <Link href="/legal/terms" className="text-[#D1D5DB] hover:text-gray-200 transition-colors">
              Terms of Use
            </Link>
            <span className="text-gray-400">|</span>
            <Link href="/legal/privacy" className="text-[#D1D5DB] hover:text-gray-200 transition-colors">
              Privacy Policy
            </Link>
            <span className="text-gray-400">|</span>
            <Link href="/legal/cookie" className="text-[#D1D5DB] hover:text-gray-200 transition-colors">
              Cookie Policy
            </Link>
            <span className="text-gray-400">|</span>
            <Link href="/legal/disclaimer" className="text-[#D1D5DB] hover:text-gray-200 transition-colors">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
