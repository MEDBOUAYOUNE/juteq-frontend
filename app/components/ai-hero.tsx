
import Link from "next/link"
import { ArrowRight, Brain, Bot, TrendingUp, Mail, Phone, BarChart3, CheckCircle, Sparkles } from "lucide-react"

export default function AIHero() {
  return (
    <section className="bg-gray-50 pt-20 pb-24 lg:pt-24 lg:pb-32 relative overflow-hidden">
      {/* AI Background Pattern */}
      {/* <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-2 h-2 bg-dodger-blue rounded-full animate-pulse"></div>
        <div
          className="absolute top-40 right-32 w-1 h-1 bg-soft-blue rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-32 left-40 w-1.5 h-1.5 bg-dodger-blue rounded-full animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div> */}

      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight tracking-tight">
              Automate Client Outreach.
              <br />
              <span className="text-dodger-blue relative">
                Find New Clients.
              </span>
              <br />
              <span className="text-gray-600 text-2xl md:text-3xl">Save Hours Every Day</span>
            </h1>

            <p className="text-l md:text-2xl text-gray-600 mb-12 leading-relaxed">
              Your AI-powered business development assistant, built for recruiters and agencies worldwide
            </p>

            <div className="flex flex-col items-start gap-8 mb-12">
              <div className="flex flex-col sm:flex-row items-start gap-8 sm:gap-10">
                {/* Start for Free + No Card Text */}
                <div className="flex flex-col items-start text-left">
                  <Link
                    href="/signup"
                    className="group inline-flex items-center bg-blue-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105"
                  >
                    <Bot className="mr-2 w-5 h-5 group-hover:animate-pulse" />
                    Start for Free
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <span className="text-sm font-medium text-gray-600 mt-2">No Credit Card Required</span>
                </div>

                {/* See Our Plans */}
                <div className="flex flex-col items-start text-left">
                  <Link
                    href="/pricing"
                    className="group inline-flex items-center text-gray-700 hover:text-dodger-blue font-semibold transition-colors"
                  >
                    <span className="text-lg transition-colors">See Our Plans</span>
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  {/* <span className="text-sm font-medium text-gray-600 mt-2">
                    Compare all features and find the right fit for you.
                  </span> */}
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            {/* <div className="flex flex-wrap gap-8 text-left">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm font-medium text-gray-700">5,000+ Active Users</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm font-medium text-gray-700">10M+ Messages Sent</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm font-medium text-gray-700">95% Success Rate</span>
              </div>
            </div> */}
          </div>

          {/* Right Visual - SaaS Dashboard Mockup */}
          <div className="relative animate-slide-up lg:pl-8">
            {/* Main Dashboard Container */}
            <div className="relative bg-white rounded-3xl shadow-2xl p-6 transform hover:scale-105 transition-transform duration-500">
              {/* Browser Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="text-sm font-medium text-gray-500 flex items-center">
                  <div className="w-4 h-4 mr-2 text-dodger-blue" />
                  JOTIQ Dashboard
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-xs text-gray-500">AI Active</span>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="space-y-6">
                {/* Stats Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-blue-600 font-medium">Active Campaigns</p>
                        <p className="text-2xl font-bold text-blue-700">24</p>
                      </div>
                      <Mail className="w-8 h-8 text-blue-500" />
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-green-600 font-medium">Response Rate</p>
                        <p className="text-2xl font-bold text-green-700">87%</p>
                      </div>
                      <TrendingUp className="w-8 h-8 text-green-500" />
                    </div>
                  </div>
                </div>

                {/* AI Activity Feed */}
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-gray-900 flex items-center">
                      <Brain className="w-4 h-4 mr-2 text-dodger-blue" />
                      AI Activity
                    </h3>
                    <span className="text-xs text-green-600 font-medium">Live</span>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 animate-pulse">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-sm text-gray-700">AI wrote 12 personalized emails</span>
                      <span className="text-xs text-gray-500">2m ago</span>
                    </div>
                    <div className="flex items-center space-x-3 animate-pulse" style={{ animationDelay: "0.5s" }}>
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-sm text-gray-700">Voice call scheduled with TechCorp</span>
                      <span className="text-xs text-gray-500">5m ago</span>
                    </div>
                    <div className="flex items-center space-x-3 animate-pulse" style={{ animationDelay: "1s" }}>
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-sm text-gray-700">127 new leads discovered</span>
                      <span className="text-xs text-gray-500">8m ago</span>
                    </div>
                  </div>
                </div>

                {/* Performance Chart */}
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-gray-900">Weekly Performance</h3>
                    <BarChart3 className="w-5 h-5 text-purple-500" />
                  </div>

                  <div className="flex items-end justify-between space-x-2 h-20">
                    {[40, 65, 45, 80, 60, 90, 75].map((height, index) => (
                      <div
                        key={index}
                        className="bg-gradient-to-t from-purple-400 to-purple-500 rounded-t-sm animate-pulse"
                        style={{
                          height: `${height}%`,
                          width: "16px",
                          animationDelay: `${index * 0.1}s`,
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Success Notifications */}
            {/* <div
              className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-3 animate-bounce border border-green-200"
              style={{ animationDelay: "1s" }}
            >
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <div className="text-sm">
                  <div className="font-medium text-green-700">Meeting Booked!</div>
                  <div className="text-gray-500 text-xs">with InnovateCorp</div>
                </div>
              </div>
            </div>

            <div
              className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-3 animate-bounce border border-blue-200"
              style={{ animationDelay: "2s" }}
            >
              <div className="flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-blue-500" />
                <div className="text-sm">
                  <div className="font-medium text-blue-700">+47 New Leads</div>
                  <div className="text-gray-500 text-xs">AI Generated</div>
                </div>
              </div>
            </div>

            <div
              className="absolute top-1/2 -left-6 bg-white rounded-xl shadow-lg p-3 animate-bounce border border-purple-200"
              style={{ animationDelay: "3s" }}
            >
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-purple-500" />
                <div className="text-sm">
                  <div className="font-medium text-purple-700">AI Call Active</div>
                  <div className="text-gray-500 text-xs">Qualifying lead...</div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}
