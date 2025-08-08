"use client"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function AIHero() {
  return (
    <section className="relative w-full bg-white pt-18 pb-18 lg:pt-20 lg:pb-20">
      <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-5">

          <div className="flex-1 space-y-12 text-center lg:text-left">
            <div className="flex flex-col items-center lg:items-start space-y-8">
              <h1 className="text-5xl sm:text-4xl lg:text-5xl font-semibold font-headline text-[#020817] leading-tight">
                AI-Powered Outreach for Recruiters
              </h1>
            </div>
            <div className="flex flex-col sm:flex-col gap-6 justify-center lg:justify-start">
              <p className="text-xl text-gray-900 font-medium max-w-3xl">
                Automate your email and voice outreach,
                so you can focus on recruiting.<br /> 
                Save time, boost response rates,
                and win more clients all without a CRM.

              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <Link
                  href="/signup"
                  className="group relative bg-[#0075DE] text-white px-6 py-3 font-medium text-base rounded-lg hover:bg-blue-700 hover:border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 ease-out text-center hover:shadow-md hover:shadow-blue-600/25 transform hover:-translate-y-0.5"
                >
                  <span className="transition-all duration-300 group-hover:translate-x-1">Start Free Trial</span>
                </Link>
                <Link
                  href="/pricing"
                  className="group relative text-[#005BAB] bg-[#F2F9FF] px-6 py-3 font-medium text-base rounded-lg hover:bg-blue-50 hover:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 ease-out text-center hover:shadow-md hover:shadow-blue-500/20 transform hover:-translate-y-0.5"
                >
                  <span className="flex items-center justify-center">
                    <span className="transition-all duration-300 group-hover:translate-x-1">See Plans</span>
                    <ArrowRight className="inline-block ml-2 w-5 h-5 transition-all duration-300 ease-out group-hover:translate-x-2 group-hover:text-blue-600 group-hover:scale-110" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex justify-center items-center">
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200">
                <Image
                  src="/tested/test1.webp"
                  width={500}
                  height={500}
                  alt="JOTIQ AI dashboard showing automated client outreach, lead generation, and performance analytics"
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}