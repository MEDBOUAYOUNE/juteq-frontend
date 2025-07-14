import Link from "next/link"
import { ChevronDown } from "lucide-react"

export default function CleanHeader() {
  return (
    <header className="bg-smoke-white border-b border-gray-100 sticky  top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 py-5">
        <Link href="/">
          {/* <a className="flex items-center"> */}
            <img
              src="/logo.png"
              alt="JOTIQ Logo"
              className="h-8 w-auto mr-3"
            />
            {/* Optional brand text */}
            {/* <span className="text-xl font-semibold text-gray-900">JOTIQ</span> */}
          {/* </a> */}
        </Link>
      </div>
          {/* Desktop Navigation */}
          <nav className="hidden gap md:flex items-center space-x-8">
            <Link href="/products" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
              Products
            </Link>

            {/* Solutions Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-gray-600 hover:text-gray-900 font-medium transition-colors">
                Solutions
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-3">
                  <Link
                    href="/automated-outreach"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-dodger-blue transition-colors"
                  >
                    Automated outreach
                  </Link>
                  <Link
                    href="/ai-cold-calling"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-dodger-blue transition-colors"
                  >
                    AI-Powered Cold Calling
                  </Link>
                  <Link
                    href="/lead-generation"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-dodger-blue transition-colors"
                  >
                    Instant Lead Generation
                  </Link>
                  <Link
                    href="/smart-data-upload-extraction"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-dodger-blue transition-colors"
                  >
                    Smart Data Upload & Extraction 
                  </Link>
                  <Link
                    href="/branded-content-upload"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-dodger-blue transition-colors"
                  >
                    Branded Content Upload 
                  </Link>
                  <Link
                    href="/sales-analytics"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-dodger-blue transition-colors"
                  >
                    Sales Analytics 
                  </Link>
                  <Link
                    href="/conversation-intelligence"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-dodger-blue transition-colors"
                  >
                    Conversation Intelligence
                  </Link>
                  <Link
                    href="/integrations"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-dodger-blue transition-colors"
                  >
                    Integrations
                  </Link>
                </div>
              </div>
            </div>

            {/* Resources Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-gray-600 hover:text-gray-900 font-medium transition-colors">
                Resources
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-3">
                  <Link
                    href="/help"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-dodger-blue transition-colors"
                  >
                    Help Center
                  </Link>
                  <Link
                    href="/blog"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-dodger-blue transition-colors"
                  >
                    Blog
                  </Link>
                  <Link
                    href="/updates"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-dodger-blue transition-colors"
                  >
                    Product Updates
                  </Link>
                  <Link
                    href="/idea-box"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-dodger-blue transition-colors"
                  >
                    Idea Box
                  </Link>
                  {/* <Link
                    href="/integrations"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-dodger-blue transition-colors"
                  >
                    Integrations
                  </Link> */}
                  <Link
                    href="/support"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-dodger-blue transition-colors"
                  >
                    Customer Support
                  </Link>
                  <Link
                    href="/contact"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-dodger-blue transition-colors"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/pricing" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
              Pricing
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login" className="bg-gray-900 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-gray-800 transition-colors">
              Login
            </Link>
            <Link
              href="/signup"
              className="bg-gray-900 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-gray-800 transition-colors"
            >
              Start For Free
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-600">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
