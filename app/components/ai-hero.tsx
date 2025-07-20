"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function AIHero() {
  return (
    <section className="relative bg-white pt-18 pb-18 lg:pt-20 lg:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-5">
          {/* Left Text Block */}
          <div className="flex-1  space-y-12 text-center lg:text-left">
            <div className="flex flex-col items-center lg:items-start space-y-8">
              <h1 className="text-5xl sm:text-4xl lg:text-5xl font-medium text-gray-900 text-4xl font-medium text-gray-900 tracking-tight leading-tight flex flex-col space-y-4 text-center lg:text-left">
                <span>Automate Client Outreach</span>
                <span>Find New Clients</span>
                <span>Save Hours Every Day</span>
              </h1>
            </div>

            {/* <p className="text-xl text-gray-600 leading-relaxed sm:max-w-2xl mx-auto lg:mx-0">
              Your AI-powered business development assistant, built for recruiters and agencies worldwide.
            </p> */}

            <div className="flex flex-col sm:flex-col gap-6 justify-center lg:justify-start">
                <p className="text-xl text-gray-600 max-w-3xl">
                Your AI-powered business development assistant, <br />
                built for recruiters and agencies worldwide.
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <Link
                    href="/signup"
                    className="group relative bg-[#1A8CFF] border-2 border-[#1A8CFF] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 hover:border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 ease-out text-center hover:shadow-md hover:shadow-blue-600/25 transform hover:-translate-y-0.5"
                  >
                    <span className="transition-all duration-300 group-hover:translate-x-1">Start For Free</span>
                </Link>

                <Link
                    href="/pricing"
                    className="group relative text-[#1A8CFF] border-2 border-[#1A8CFF] bg-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 hover:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 ease-out text-center hover:shadow-md hover:shadow-blue-500/20 transform hover:-translate-y-0.5"
                  >
                    <span className="flex items-center justify-center">
                      <span className="transition-all duration-300 group-hover:translate-x-1">See Plans</span>
                      <ArrowRight className="inline-block ml-2 w-5 h-5 transition-all duration-300 ease-out group-hover:translate-x-2 group-hover:text-blue-600 group-hover:scale-110" />
                    </span>
                </Link>

              </div>
              <div className="text-sm text-gray-700">
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
