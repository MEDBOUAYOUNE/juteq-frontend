"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Zap, Lightbulb, CheckCircle, Sparkles, Bot, Mail, Clock, Target, Rocket, Star } from "lucide-react"

export default function SolutionPage() {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10">
          {/* Glowing Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-full text-cyan-300 font-medium mb-8 animate-pulse">
            <Sparkles className="w-4 h-4 mr-2" />
            AI-Powered Automation
          </div>

          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight mb-8">
            Automated Client
            <br />
            <span className="relative">
              Outreach
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg blur opacity-20 animate-pulse"></div>
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-12">
            Transform your outreach with AI that never sleeps. Streamline emails, automate follow-ups, 
            and schedule meetings while you focus on closing deals.
          </p>

          {/* Floating Action Button */}
          <div className="relative inline-block">
            <Link
              href="/signup"
              className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white font-semibold text-lg shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
            >
              <Rocket className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Start Your AI Journey
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur opacity-30 animate-pulse"></div>
          </div>
        </div>

        {/* Hero Illustration */}
        <div className="relative mt-16 max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-3xl p-8 border border-cyan-500/20 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-3xl animate-pulse"></div>
            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* AI Bot */}
              <div className="flex flex-col items-center p-6 bg-gradient-to-b from-purple-500/20 to-transparent rounded-2xl border border-purple-500/30">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-4 animate-pulse">
                  <Bot className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-purple-300 mb-2">AI Assistant</h3>
                <p className="text-sm text-gray-400 text-center">Smart automation that learns your style</p>
              </div>

              {/* Email Flow */}
              <div className="flex flex-col items-center p-6 bg-gradient-to-b from-cyan-500/20 to-transparent rounded-2xl border border-cyan-500/30">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mb-4 animate-pulse" style={{animationDelay: '1s'}}>
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-cyan-300 mb-2">Smart Emails</h3>
                <p className="text-sm text-gray-400 text-center">Personalized outreach at scale</p>
              </div>

              {/* Results */}
              <div className="flex flex-col items-center p-6 bg-gradient-to-b from-green-500/20 to-transparent rounded-2xl border border-green-500/30">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mb-4 animate-pulse" style={{animationDelay: '2s'}}>
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-green-300 mb-2">Results</h3>
                <p className="text-sm text-gray-400 text-center">More meetings, less effort</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What it is Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-full text-cyan-300 font-medium mb-6">
              <Lightbulb className="w-4 h-4 mr-2" />
              What it is
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-8">
              Your AI-Powered
              <br />
              Outreach Engine
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              JOTIQ revolutionizes how recruiters and agencies handle client outreach. Our intelligent automation 
              platform schedules follow-ups, generates personalized emails, and maintains consistent communication 
              without the manual overhead.
            </p>
            <div className="space-y-4">
              {[
                "Smart email personalization",
                "Automated follow-up sequences",
                "Meeting scheduling integration",
                "Performance analytics"
              ].map((feature, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mr-4 animate-pulse" style={{animationDelay: `${index * 0.5}s`}}></div>
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-3xl p-8 border border-cyan-500/20 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-3xl animate-pulse"></div>
              <div className="relative">
                {/* Mock Dashboard */}
                <div className="bg-slate-900/50 rounded-2xl p-6 border border-gray-700/50">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-white">Outreach Dashboard</h3>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                      <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-gradient-to-r from-cyan-500/10 to-transparent rounded-lg border border-cyan-500/20">
                      <span className="text-cyan-300">Emails Sent Today</span>
                      <span className="text-white font-bold">247</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gradient-to-r from-purple-500/10 to-transparent rounded-lg border border-purple-500/20">
                      <span className="text-purple-300">Meetings Scheduled</span>
                      <span className="text-white font-bold">12</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gradient-to-r from-green-500/10 to-transparent rounded-lg border border-green-500/20">
                      <span className="text-green-300">Response Rate</span>
                      <span className="text-white font-bold">34%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full text-purple-300 font-medium mb-6">
            <Zap className="w-4 h-4 mr-2" />
            How it works
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-8">
            Three Steps to
            <br />
            Outreach Mastery
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              step: "01",
              title: "Setup & Configure",
              description: "Connect your tools, set preferences, and customize your AI assistant's personality and messaging style.",
              icon: Bot,
              color: "from-cyan-500 to-blue-500",
              bgColor: "from-cyan-500/20 to-blue-500/20",
              borderColor: "border-cyan-500/30"
            },
            {
              step: "02",
              title: "AI Takes Over",
              description: "Your AI assistant drafts personalized messages, schedules follow-ups, and manages your entire outreach pipeline.",
              icon: Sparkles,
              color: "from-purple-500 to-pink-500",
              bgColor: "from-purple-500/20 to-pink-500/20",
              borderColor: "border-purple-500/30"
            },
            {
              step: "03",
              title: "Focus on Closing",
              description: "Spend your time on qualified leads and meaningful conversations while AI handles the rest automatically.",
              icon: Target,
              color: "from-green-500 to-emerald-500",
              bgColor: "from-green-500/20 to-emerald-500/20",
              borderColor: "border-green-500/30"
            }
          ].map((item, index) => (
            <div key={index} className={`relative group`}>
              <div className={`relative bg-gradient-to-b ${item.bgColor} backdrop-blur-sm rounded-3xl p-8 border ${item.borderColor} shadow-2xl hover:shadow-xl transition-all duration-300 transform hover:scale-105`}>
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className={`text-6xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent opacity-20`}>
                      {item.step}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why it works Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-3xl p-8 border border-purple-500/20 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl animate-pulse"></div>
              <div className="relative">
                {/* Stats Visualization */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-gradient-to-b from-cyan-500/20 to-transparent rounded-2xl border border-cyan-500/30">
                    <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">10x</div>
                    <div className="text-sm text-gray-400">Faster Outreach</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-b from-purple-500/20 to-transparent rounded-2xl border border-purple-500/30">
                    <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">85%</div>
                    <div className="text-sm text-gray-400">Time Saved</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-b from-green-500/20 to-transparent rounded-2xl border border-green-500/30">
                    <div className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">3x</div>
                    <div className="text-sm text-gray-400">More Meetings</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-b from-yellow-500/20 to-transparent rounded-2xl border border-yellow-500/30">
                    <div className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-2">24/7</div>
                    <div className="text-sm text-gray-400">Always Working</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-500/30 rounded-full text-green-300 font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              Why it works
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-8">
              The Science Behind
              <br />
              AI Automation
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              By eliminating repetitive tasks and optimizing timing, JOTIQ creates a steady rhythm of engagement 
              that increases response rates and ensures no opportunity falls through the cracks.
            </p>
            <div className="space-y-6">
              {[
                {
                  title: "Consistent Engagement",
                  description: "Never miss a follow-up or let a lead go cold",
                  icon: Clock
                },
                {
                  title: "Perfect Timing",
                  description: "AI learns optimal send times for maximum impact",
                  icon: Target
                },
                {
                  title: "Scalable Growth",
                  description: "Handle 10x more prospects without burning out",
                  icon: Rocket
                }
              ].map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                    <p className="text-gray-400">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Case Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm border border-orange-500/30 rounded-full text-orange-300 font-medium mb-6">
              <CheckCircle className="w-4 h-4 mr-2" />
              Real-world impact
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-8">
              From Chaos to Control
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Problem */}
            <div className="relative group">
              <div className="relative bg-gradient-to-b from-red-500/20 to-orange-500/20 backdrop-blur-sm rounded-3xl p-8 border border-red-500/30 shadow-2xl hover:shadow-xl transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">The Problem</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Recruiters waste countless hours on manual email writing, tracking follow-ups, and scheduling meetings. 
                    Opportunities slip through the cracks, and burnout becomes inevitable.
                  </p>
                </div>
              </div>
            </div>

            {/* Solution */}
            <div className="relative group">
              <div className="relative bg-gradient-to-b from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-3xl p-8 border border-purple-500/30 shadow-2xl hover:shadow-xl transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <Lightbulb className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">The Solution</h3>
                  <p className="text-gray-300 leading-relaxed">
                    JOTIQ's AI takes over the entire outreach process. It generates personalized emails, automates 
                    follow-ups, and handles scheduling so you can focus on what matters most - closing clients.
                  </p>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="relative group">
              <div className="relative bg-gradient-to-b from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-3xl p-8 border border-green-500/30 shadow-2xl hover:shadow-xl transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">The Results</h3>
                  <div className="space-y-3">
                    {[
                      "Save 10+ hours per week",
                      "3x more qualified meetings",
                      "Consistent follow-up timing",
                      "Zero missed opportunities"
                    ].map((result, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full mr-3 animate-pulse" style={{animationDelay: `${index * 0.3}s`}}></div>
                        <span className="text-gray-300">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 lg:py-28 text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-3xl p-12 border border-cyan-500/20 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-3xl animate-pulse"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-full text-cyan-300 font-medium mb-8">
                <Rocket className="w-4 h-4 mr-2" />
                Ready to transform?
              </div>
              
              <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-8">
                Join the AI Revolution
              </h2>
              
              <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                Stop wasting time on manual outreach. Let AI handle the heavy lifting while you focus on building 
                relationships and closing deals.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link
                  href="/signup"
                  className="group relative inline-flex items-center justify-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-5 text-xl font-semibold rounded-full shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur opacity-30 animate-pulse"></div>
                  <div className="relative flex items-center">
                    <Sparkles className="w-6 h-6 mr-3 group-hover:animate-spin" />
                    Start Automating Now
                    <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
                
                <Link
                  href="/demo"
                  className="group inline-flex items-center text-cyan-300 hover:text-white font-semibold text-lg transition-colors"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                    <Zap className="w-5 h-5" />
                  </div>
                  Watch Demo
                </Link>
              </div>
              
              <div className="mt-12 text-sm text-gray-400">
                <p>✨ No credit card required • 🚀 Setup in 5 minutes • 🎯 Results guaranteed</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}