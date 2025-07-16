"use client"

import Image from "next/image"
import Link from "next/link"

export default function AIHero() {
  return (
    <section className="relative bg-white pt-18 pb-18 lg:pt-20 lg:pb-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-5">
          {/* Left Text Block */}
          <div className="flex-1  space-y-12 text-center lg:text-left">
            <div className="flex flex-col items-center lg:items-start space-y-8">
              <h1 className="text-5xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 tracking-tight leading-tight flex flex-col space-y-4 text-center lg:text-left">
                <span>Automate Client Outreach</span>
                <span>Find New Clients</span>
                <span>Save Hours Every Day</span>
              </h1>
            </div>

            {/* <p className="text-xl text-gray-600 leading-relaxed sm:max-w-2xl mx-auto lg:mx-0">
              Your AI-powered business development assistant, built for recruiters and agencies worldwide.
            </p> */}

            <div className="flex flex-col sm:flex-col gap-6 justify-center lg:justify-start">
                <p className="text-l text-gray-600 font-medium sm:max-w-xl mx-auto lg:mx-0">
                Your AI-powered business development assistant, built for recruiters and agencies worldwide.
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-5">
                <Link
                  href="/signup"
                  className="bg-[#1A8CFF] text-white px-10 py-5 rounded-lg font-regular hover:bg-blue-700 transition-colors"
                >
                  Start For Free
                </Link>
                <Link
                  href="/pricing"
                  className="text-[#1A8CFF] border border-[#1A8CFF] bg-white px-12 py-5 rounded-lg font-regular hover:bg-blue-50 transition-colors"
                >
                  See Plans
                </Link>
              </div>
              <div className="text-sm text-gray-600">
              <p className="font-normal mx-auto lg:mx-0">
                No credit card required. Free forever with the Explore Plan.
              </p>
            </div>
              
            </div>
          </div>

          {/* Right Visual */}
          <div className="flex flex justify-center items-center">
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200">
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  width={500}
                  height={500}
                  alt="JOTIQ AI dashboard showing automated client outreach, lead generation, and performance analytics"
                  className="rounded-lg object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
