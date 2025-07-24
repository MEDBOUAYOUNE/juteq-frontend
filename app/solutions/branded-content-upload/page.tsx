"use client"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Zap, Lightbulb, CheckCircle, Sparkles, Bot, Clock, Target, Rocket, Star, Play } from "lucide-react"

export default function SolutionPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-8 pb-2 lg:pt-20 lg:pb-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center relative z-10">
          <h1 className="text-5xl lg:text-5xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Branded Content Upload
            {/* <span className="text-blue-600 block">Content Upload</span> */}
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
            Upload and send professional client-facing documents like brochures, candidate profiles,
            and contracts with consistent branding across all communications.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex items-center justify-center bg-[#005BAB] text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Upload Your Content
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
    
    {/* Combined What it is, How it works, Why it works */}
<section className="py-16 px-8 bg-gradient-to-b from-gray-50 to-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="space-y-16">
      {/* What it is */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What it is</h2>
          <p className="text-base text-gray-600 mb-6 leading-relaxed">
            Branded Content Upload allows you to upload and send professional client-facing documents
            like brochures, candidate profiles, terms and agreements, and one-off contracts, all with your
            consistent branding.
          </p>
        </div>
        <div className="relative flex justify-center items-center">
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="Branded Content Upload Interface Illustration"
            width={300}
            height={200}
            className="rounded-3xl shadow-2xl border border-gray-100 object-cover"
          />
        </div>
      </div>

      {/* How it works */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How it works</h2>
          <p className="text-base text-gray-600 mb-6 leading-relaxed">
            You upload your branded materials to JOTIQ, where they are stored and easily sent to
            prospects with just a few clicks. The platform ensures brand consistency across all
            communications.
          </p>
        </div>
        <div className="relative flex justify-center items-center">
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="Document Storage and Sharing Process Illustration"
            width={300}
            height={200}
            className="rounded-3xl shadow-2xl border border-gray-100 object-cover"
          />
        </div>
      </div>

      {/* Why it works */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why it works</h2>
          <p className="text-base text-gray-600 mb-6 leading-relaxed">
            Manually creating and sending client-facing documents takes time and can result in branding
            mistakes. JOTIQ automates the process, saving you time and ensuring professional
            consistency.
          </p>
        </div>
        <div className="relative flex justify-center items-center">
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="Brand Consistency and Time Savings Benefits Illustration"
            width={300}
            height={200}
            className="rounded-3xl shadow-2xl border border-gray-100 object-cover"
          />
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Use Case Section */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-3 py-1 bg-orange-100 border border-orange-200 rounded-full text-orange-700 text-sm font-medium mb-4">
              <CheckCircle className="w-8 h-8 mr-2" />
              <span className="font-semibold">Use Case</span>
            </div>
            {/* <h2 className="text-3xl font-bold text-gray-900 mb-4">Use Case</h2> */}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Problem */}
            <div className="bg-red-50 rounded-2xl p-8 border border-red-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6 border border-red-200 shadow-sm">
                <Zap className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">The Problem</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Recruiters waste time manually formatting and sending documents, which often leads
                to inconsistent branding.
              </p>
            </div>
            {/* Solution */}
            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100 hover:shadow-lg transition-shadow duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 border border-blue-200 shadow-sm">
                <Lightbulb className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">The Solution</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Upload proposals, agreements, and profiles to JOTIQ and send them quickly to your
                prospects with brand consistency.
              </p>
            </div>
            {/* Results */}
            <div className="bg-green-50 rounded-2xl p-8 border border-green-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6 border border-green-200 shadow-sm">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">The Results</h3>
              <div className="space-y-3">
                {[
                  "Consistent branding across all documents",
                  "Easily send customized deals or agreements",
                  "Centralized storage for fast, efficient access",
                ].map((result, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-3" />
                    <span className="text-sm text-gray-700">{result}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}