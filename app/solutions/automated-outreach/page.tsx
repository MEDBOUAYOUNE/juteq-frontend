"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Zap, Lightbulb, CheckCircle } from "lucide-react" // Importing necessary icons

export default function SolutionPage() {
  return (
    <div className="bg-white">
      {/* Hero Section - Adjusted padding and text */}
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-normal text-gray-900 tracking-tight leading-tight mb-6">
          Automated Client Outreach
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
          Save hours on client outreach by streamlining your emails, follow-ups and meeting scheduling. Powered by
          JOTIQ’s intelligent assistant.
        </p>
      </section>

      {/* What it is Section */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-8">What it is</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          JOTIQ helps recruiters and agencies simplify their client outreach. With smart automation, you can schedule
          follow-ups, generate personalized outreach emails more efficiently and keep communication consistent without
          starting from scratch each time.
        </p>
        <div className="flex justify-center mt-12">
          <Image
            src="/placeholder.svg?height=400&width=700"
            width={700}
            height={400}
            alt="AI-powered outreach dashboard"
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* How it works Section */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-8">How it works</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          JOTIQ reduces the manual steps in your outreach process. It assists with drafting personalized messages, sends
          automated follow-ups based on timing rules and helps you schedule meetings with prospects. Everything works
          together to keep your workflow smooth and scalable.
        </p>
        <div className="flex justify-center mt-12">
          <Image
            src="/placeholder.svg?height=400&width=700"
            width={700}
            height={400}
            alt="Workflow automation diagram"
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Why it works Section */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-8">Why it works</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          By streamlining repetitive tasks, JOTIQ frees up time for real conversations. The platform helps maintain a
          steady outreach rhythm, increases engagement and ensures your follow-ups happen at the right moment.
        </p>
      </section>

      {/* Use Case Section - Card-style layout with light gray background */}
      <section className="py-16 lg:py-24 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-10 text-center">Use Case</h2>

          <div className="space-y-10">
            {/* Problem */}
            <div className="flex items-start gap-4">
              <Zap className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Problem:</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Recruiters often lose valuable time manually writing emails, tracking follow-ups and scheduling
                  meetings.
                </p>
              </div>
            </div>

            {/* Solution */}
            <div className="flex items-start gap-4">
              <Lightbulb className="w-8 h-8 text-yellow-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Solution:</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  JOTIQ simplifies this process. The platform helps you structure and generate outreach emails,
                  automates follow-ups and makes scheduling easier so you can focus on closing clients.
                </p>
              </div>
            </div>

            {/* Results / Benefits */}
            <div className="flex items-start gap-4">
              <CheckCircle className="w-8 h-8 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Results / Benefits:</h3>
                <ul className="space-y-3 text-lg text-gray-700">
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="font-medium">Save up to 10 hours per week</span> by automating client outreach
                    tasks
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="font-medium">Improve consistency and follow-up timing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="font-medium">Engage more leads with less effort</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-8">Ready to streamline your outreach?</h2>
          <Link
            href="/signup"
            className="inline-flex items-center justify-center bg-[#1a8cff] text-white px-10 py-5 text-xl font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300 ease-in-out group"
          >
            Start Automating Outreach
            <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  )
}
