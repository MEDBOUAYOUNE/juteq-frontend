import Link from "next/link"
import { Twitter, Linkedin } from "lucide-react" // Import Linkedin and Twitter icons

export default function MinimalFooter() {
  return (
    <footer className="bg-[#121212] border-t border-gray-800 py-16">
      {" "}
      {/* Changed background and top border color */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2 text-center lg:text-left">
            <Link href="/">
              <img src="/logo_white.png" alt="JOTIQ Logo" className="h-8 w-auto mx-auto lg:mx-0" />
            </Link>
            {/* The original comment block for description is kept as is, assuming it's intentionally commented out. */}
            {/* <p className="mt-4 text-[#E5E5E5] text-sm leading-relaxed max-w-md mx-auto lg:mx-0">
              Your AI-powered business development assistant, built for recruiters and agencies worldwide.
            </p> */}
          </div>
          {/* Navigation Links */}
          {/* Added divide-x for column dividers on large screens, and padding for spacing */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center lg:text-left lg:divide-x lg:divide-gray-700/50">
            {/* Platform */}
            <div className="text-center lg:text-left lg:px-4">
              {" "}
              {/* Added horizontal padding for divider spacing */}
              <h3 className="font-semibold text-white mb-4 text-sm">Platform</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/solutions"
                    className="text-[#E5E5E5] hover:text-white hover:underline transition-colors text-sm"
                  >
                    {" "}
                    {/* Changed text color, added underline hover */}
                    Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/integrations"
                    className="text-[#E5E5E5] hover:text-white hover:underline transition-colors text-sm"
                  >
                    {" "}
                    {/* Changed text color, added underline hover */}
                    Integrations
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing"
                    className="text-[#E5E5E5] hover:text-white hover:underline transition-colors text-sm"
                  >
                    {" "}
                    {/* Changed text color, added underline hover */}
                    Pricing
                  </Link>
                </li>
                {/* <li>
                  <Link
                    href="/sign-in"
                    className="text-[#E5E5E5] hover:text-white hover:underline transition-colors text-sm"
                  >
                    Sign In
                  </Link>
                </li>
                <li>
                  <Link
                    href="/signup"
                    className="text-[#E5E5E5] hover:text-white hover:underline transition-colors text-sm"
                  >
                    Start For Free
                  </Link>
                </li> */}
              </ul>
            </div>
            {/* Resources */}
            <div className="text-center lg:text-left lg:px-4">
              {" "}
              {/* Added horizontal padding for divider spacing */}
              <h3 className="font-semibold text-white mb-4 text-sm">Resources</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/help-center"
                    className="text-[#E5E5E5] hover:text-white hover:underline transition-colors text-sm"
                  >
                    {" "}
                    {/* Changed text color, added underline hover */}
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-[#E5E5E5] hover:text-white hover:underline transition-colors text-sm"
                  >
                    {" "}
                    {/* Changed text color, added underline hover */}
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/product-updates"
                    className="text-[#E5E5E5] hover:text-white hover:underline transition-colors text-sm"
                  >
                    {" "}
                    {/* Changed text color, added underline hover */}
                    Product Updates
                  </Link>
                </li>
                <li>
                  <Link
                    href="/idea-box"
                    className="text-[#E5E5E5] hover:text-white hover:underline transition-colors text-sm"
                  >
                    {" "}
                    {/* Changed text color, added underline hover */}
                    Idea Box
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact-support"
                    className="text-[#E5E5E5] hover:text-white hover:underline transition-colors text-sm"
                  >
                    {" "}
                    {/* Changed text color, added underline hover */}
                    Contact Support
                  </Link>
                </li>
              </ul>
            </div>
            {/* Company */}
            <div className="text-center lg:text-left lg:px-4">
              {" "}
              {/* Added horizontal padding for divider spacing */}
              <h3 className="font-semibold text-white mb-4 text-sm">Company</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/about"
                    className="text-[#E5E5E5] hover:text-white hover:underline transition-colors text-sm"
                  >
                    {" "}
                    {/* Changed text color, added underline hover */}
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/career"
                    className="text-[#E5E5E5] hover:text-white hover:underline transition-colors text-sm"
                  >
                    {" "}
                    {/* Changed text color, added underline hover */}
                    Career
                  </Link>
                </li>
                {/* Socials: Replaced "Follow Us" link with icons */}
                <li>
                  <a
                    href="mailto:support@jotiq.ai"
                    className="text-[#E5E5E5] hover:text-white hover:underline transition-colors text-sm break-all" // Changed text color, added underline hover
                  >
                    support@jotiq.ai
                  </a>
                </li>
                <li className="pt-2">
                  {" "}
                  {/* Added padding top for spacing from previous link */}
                  <div className="flex justify-center lg:justify-start space-x-4">
                    {/* <Link href="#" className="text-[#E5E5E5] hover:text-white transition-colors">
                      <Twitter className="h-5 w-5" />
                      <span className="sr-only">Twitter</span>
                    </Link> */}
                    <Link href="#" className="text-[#E5E5E5] hover:text-white transition-colors">
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          {" "}
          {/* Changed border color */}
          <div className="flex flex-col space-y-4 lg:flex-row lg:items-center lg:justify-between lg:space-y-0">
            {/* Copyright */}
            <span className="text-[#E5E5E5] text-xs text-center lg:text-left">
              {" "}
              {/* Changed text color and font size */}
              Copyright © 2025 JOTIQ. All rights reserved.
            </span>
            {/* Legal Links */}
            <div className="text-xs">
              {" "}
              {/* Changed font size */}
              {/* Mobile: Two rows, centered */}
              <div className="flex flex-col items-center space-y-3 lg:hidden">
                {" "}
                {/* Increased vertical spacing */}
                <div className="flex items-center justify-center gap-x-2">
                  {" "}
                  {/* Increased horizontal spacing */}
                  <Link
                    href="/legal/terms"
                    className="text-[#E5E5E5] hover:text-white hover:underline transition-colors px-2"
                  >
                    {" "}
                    {/* Changed text color, added underline hover */}
                    Terms of Use
                  </Link>
                  <span className="text-gray-500">|</span> {/* Adjusted divider color */}
                  <Link
                    href="/legal/privacy"
                    className="text-[#E5E5E5] hover:text-white hover:underline transition-colors px-2"
                  >
                    {" "}
                    {/* Changed text color, added underline hover */}
                    Privacy Policy
                  </Link>
                </div>
                <div className="flex items-center justify-center gap-x-2">
                  {" "}
                  {/* Increased horizontal spacing */}
                  <Link
                    href="/legal/cookie"
                    className="text-[#E5E5E5] hover:text-white hover:underline transition-colors px-2"
                  >
                    {" "}
                    {/* Changed text color, added underline hover */}
                    Cookie Policy
                  </Link>
                  <span className="text-gray-500">|</span> {/* Adjusted divider color */}
                  <Link
                    href="/legal/disclaimer"
                    className="text-[#E5E5E5] hover:text-white hover:underline transition-colors px-2"
                  >
                    {" "}
                    {/* Changed text color, added underline hover */}
                    Disclaimer
                  </Link>
                </div>
              </div>
              {/* Desktop: Single row */}
              <div className="hidden lg:flex items-center justify-end gap-x-4">
                {" "}
                {/* Increased horizontal spacing */}
                <Link
                  href="/legal/terms"
                  className="text-[#E5E5E5] hover:text-white hover:underline transition-colors px-2"
                >
                  {" "}
                  {/* Changed text color, added underline hover */}
                  Terms of Use
                </Link>
                <span className="text-gray-500">|</span> {/* Adjusted divider color */}
                <Link
                  href="/legal/privacy"
                  className="text-[#E5E5E5] hover:text-white hover:underline transition-colors px-2"
                >
                  {" "}
                  {/* Changed text color, added underline hover */}
                  Privacy Policy
                </Link>
                <span className="text-gray-500">|</span> {/* Adjusted divider color */}
                <Link
                  href="/legal/cookie"
                  className="text-[#E5E5E5] hover:text-white hover:underline transition-colors px-2"
                >
                  {" "}
                  {/* Changed text color, added underline hover */}
                  Cookie Policy
                </Link>
                <span className="text-gray-500">|</span> {/* Adjusted divider color */}
                <Link
                  href="/legal/disclaimer"
                  className="text-[#E5E5E5] hover:text-white hover:underline transition-colors px-2"
                >
                  {" "}
                  {/* Changed text color, added underline hover */}
                  Disclaimer
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
