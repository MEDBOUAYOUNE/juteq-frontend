"use client"

import Link from "next/link"
import { 
  ChevronDown, 
  Menu, 
  X, 
  Send, 
  Phone, 
  Users, 
  Upload, 
  Palette, 
  BarChart3, 
  MessageSquare, 
  Puzzle,
  HelpCircle,
  BookOpen,
  Zap,
  Lightbulb,
  Headphones,
  Mail
} from "lucide-react"
import { useState, useEffect, useRef } from "react"

export default function CleanHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState<string | null>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false)
        setActiveDropdown(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Close mobile menu when window resizes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false)
        setIsMobileDropdownOpen(null)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
    setIsMobileDropdownOpen(null)
  }

  const toggleMobileDropdown = (dropdown: string) => {
    setIsMobileDropdownOpen(isMobileDropdownOpen === dropdown ? null : dropdown)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
    setIsMobileDropdownOpen(null)
  }

  const solutionsLinks = [
    { href: "/solutions/automated-outreach", label: "Automate Your Client Outreach", icon: Send },
    { href: "/solutions/ai-cold-calling", label: "AI-Powered Cold Calling", icon: Phone },
    { href: "/solutions/lead-generation", label: "Instant Lead Generation", icon: Users },
    { href: "/solutions/smart-data-upload-extraction", label: "Smart Data Upload & Extraction", icon: Upload },
    { href: "/solutions/branded-content-upload", label: "Branded Content Upload", icon: Palette },
    { href: "/solutions/sales-analytics", label: "Sales Analytics", icon: BarChart3 },
    { href: "/solutions/conversation-intelligence", label: "Conversation Intelligence", icon: MessageSquare },
    { href: "/solutions/integrations", label: "Integrations", icon: Puzzle },
  ]

  const resourcesLinks = [
    { href: "/help", label: "Help Center", icon: HelpCircle },
    { href: "/blog", label: "Blog", icon: BookOpen },
    { href: "/updates", label: "Product Updates", icon: Zap },
    { href: "/idea-box", label: "Idea Box", icon: Lightbulb },
    { href: "/support", label: "Customer Support", icon: Headphones },
    { href: "/contact", label: "Contact Us", icon: Mail },
  ]

  return (
    <header className="bg-white/95 border-b border-gray-100 sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-6">
            {/* Logo */}
            <div className="flex-shrink-0 py-5">
              <Link href="/">
                <img
                  src="/logo.png"
                  alt="JOTIQ Logo"
                  className="h-8 w-auto"
                />
              </Link>
            </div>

            <div>
              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center space-x-8">
                <Link 
                  href="/products" 
                  className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200"
                >
                  Products
                </Link>

                {/* Solutions Dropdown */}
                <div 
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown('solutions')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="flex items-center text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200">
                    Solutions
                    <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${activeDropdown === 'solutions' ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-lg border border-gray-100 transition-all duration-200 ${activeDropdown === 'solutions' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}`}>
                    <div className="py-3">
                      {solutionsLinks.map((link, index) => {
                        const IconComponent = link.icon
                        return (
                          <Link
                            key={index}
                            href={link.href}
                            className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#0075DE] transition-colors duration-200 group"
                          >
                            <IconComponent className="h-4 w-4 mr-3 text-[#0075DE] group-hover:text-[#0075DE]" />
                            {link.label}
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                </div>

                {/* Resources Dropdown */}
                <div 
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown('resources')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="flex items-center text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200">
                    Resources
                    <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${activeDropdown === 'resources' ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-gray-100 transition-all duration-200 ${activeDropdown === 'resources' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}`}>
                    <div className="py-3">
                      {resourcesLinks.map((link, index) => {
                        const IconComponent = link.icon
                        return (
                          <Link
                            key={index}
                            href={link.href}
                            className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#0075DE] transition-colors duration-200 group"
                          >
                            <IconComponent className="h-4 w-4 mr-3 text-[#0075DE] group-hover:text-[#0075DE]" />
                            {link.label}
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                </div>

                <Link 
                  href="/pricing" 
                  className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200"
                >
                  Pricing
                </Link>
              </nav>
            </div>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
                href="/Login"
                className="group relative text-[#0075DE]  bg-white text-center px-6 py-2 rounded-lg font-medium text-base hover:bg-blue-50 hover:border-blue-600"
              >
                <span className="transition-all duration-300 group-hover:translate-x-0.5">Sign In</span>
              </Link>
              
              <Link
                href="/signup"
                className="group relative bg-[#0075DE] text-white text-center px-6 py-2 rounded-lg font-medium text-base hover:bg-blue-700 hover:border-blue-700"
              >
                <span className="transition-all duration-300 group-hover:translate-x-0.5">Start For Free</span>
            </Link>
          </div>


          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200 p-2"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          ref={menuRef}
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
        >
          <div className="py-4 border-t border-gray-100">
            <div className="space-y-1">
              <Link 
                href="/products"
                onClick={closeMobileMenu}
                className="block px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 font-medium transition-colors duration-200  mx-2"
              >
                Products
              </Link>

              {/* Mobile Solutions Dropdown */}
              <div className="px-2">
                <button
                  onClick={() => toggleMobileDropdown('solutions')}
                  className="flex items-center justify-between w-full px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 font-medium transition-colors duration-200 "
                >
                  Solutions
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isMobileDropdownOpen === 'solutions' ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isMobileDropdownOpen === 'solutions' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="pl-4 py-2 space-y-1">
                    {solutionsLinks.map((link, index) => {
                      const IconComponent = link.icon
                      return (
                        <Link
                          key={index}
                          href={link.href}
                          onClick={closeMobileMenu}
                          className="flex items-center px-4 py-2 text-sm text-gray-600 hover:text-[#0075DE] hover:bg-gray-50 transition-colors duration-200 rounded-lg group"
                        >
                          <IconComponent className="h-4 w-4 mr-3 text-[#0075DE] group-hover:text-[#0075DE]" />
                          {link.label}
                        </Link>
                      )
                    })}
                  </div>
                </div>
              </div>

              {/* Mobile Resources Dropdown */}
              <div className="px-2">
                <button
                  onClick={() => toggleMobileDropdown('resources')}
                  className="flex items-center justify-between w-full px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 font-medium transition-colors duration-200 rounded-lg"
                >
                  Resources
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isMobileDropdownOpen === 'resources' ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isMobileDropdownOpen === 'resources' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="pl-4 py-2 space-y-1">
                    {resourcesLinks.map((link, index) => {
                      const IconComponent = link.icon
                      return (
                        <Link
                          key={index}
                          href={link.href}
                          onClick={closeMobileMenu}
                          className="flex items-center px-4 py-2 text-sm text-gray-600 hover:text-[#0075DE] hover:bg-gray-50 transition-colors duration-200 rounded-lg group"
                        >
                          <IconComponent className="h-4 w-4 mr-3 text-[#0075DE] group-hover:text-[#0075DE]" />
                          {link.label}
                        </Link>
                      )
                    })}
                  </div>
                </div>
              </div>

              <Link 
                href="/pricing"
                onClick={closeMobileMenu}
                className="block px-4 py-3 text-gray-600 hover:text-gray-900 ho:bg-gray-5ver0 font-medium transition-colors duration-200 rounded-lg mx-2"
              >
                Pricing
              </Link>
            </div>

            {/* Mobile CTA Buttons */}
            <div className="mt-6 px-2 space-y-3">
              <Link
                href="/Login"
                onClick={closeMobileMenu}
                className="block w-full text-center text-[#0075DE]  bg-white px-6 py-3 rounded-lg font-medium text-base hover:bg-blue-50 transition-colors duration-200"
              >
                Sign In
              </Link>
              <Link
                href="/signup"
                onClick={closeMobileMenu}
                className="block w-full text-center bg-[#0075DE] text-white px-6 py-3 rounded-lg font-medium text-base hover:bg-blue-700 transition-colors duration-200"
              >
                Start For Free
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}