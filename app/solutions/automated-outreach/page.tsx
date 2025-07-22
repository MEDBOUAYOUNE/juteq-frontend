"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Zap, Lightbulb, CheckCircle, Sparkles, Bot, Mail, Clock, Target, Rocket, Star, Play, TrendingUp, Users, BarChart3, MessageSquare, Calendar, Send } from "lucide-react"

export default function SolutionPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-8 pb-2 lg:pt-20 lg:pb-8 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left relative z-10">
              <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 font-medium mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                AI-Powered Solution
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                Automated Client
                <span className="text-blue-600 block">Outreach</span>
              </h1>
              
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Save hours on client outreach by streamlining your emails, <br/>
                follow-ups and meeting scheduling. Powered by JOTIQ's intelligent assistant.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/signup"
                  className="inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-lg text-base font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <Rocket className="w-4 h-4 mr-2" />
                  Get Started Free
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                
                <Link
                  href="/demo"
                  className="inline-flex items-center justify-center border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </Link>
              </div>
            </div>

            {/* Right Illustration */}
            <div className="relative z-10">
              <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-6 shadow-2xl border border-blue-200">
                <div className="grid grid-cols-1 gap-4">
                  {/* AI Dashboard Mockup */}
                  <div className="bg-white rounded-2xl p-6 shadow-xl border border-blue-100 backdrop-blur-sm">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-base font-semibold text-gray-900 flex items-center">
                        <Bot className="w-5 h-5 mr-2 text-blue-600" />
                        AI Outreach Dashboard
                      </h3>
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                        <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                        <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-100">
                        <span className="text-sm text-blue-700 font-medium flex items-center">
                          <Send className="w-4 h-4 mr-2" />
                          Emails Sent Today
                        </span>
                        <span className="text-sm text-blue-900 font-bold">247</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-100">
                        <span className="text-sm text-green-700 font-medium flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          Meetings Scheduled
                        </span>
                        <span className="text-sm text-green-900 font-bold">12</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg border border-purple-100">
                        <span className="text-sm text-purple-700 font-medium flex items-center">
                          <TrendingUp className="w-4 h-4 mr-2" />
                          Response Rate
                        </span>
                        <span className="text-sm text-purple-900 font-bold">34%</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Mini Analytics Cards */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-blue-100">
                      <div className="flex items-center justify-between">
                        <Users className="w-6 h-6 text-blue-600" />
                        <span className="text-sm font-semibold text-gray-900">+23%</span>
                      </div>
                      <div className="text-xs text-gray-600 mt-1">New Leads</div>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-blue-100">
                      <div className="flex items-center justify-between">
                        <MessageSquare className="w-6 h-6 text-green-600" />
                        <span className="text-sm font-semibold text-gray-900">89%</span>
                      </div>
                      <div className="text-xs text-gray-600 mt-1">Open Rate</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What it is Section */}
      <section className="py-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 bg-blue-100 border border-blue-200 rounded-full text-blue-700 text-sm font-medium mb-4">
                <Lightbulb className="w-4 h-4 mr-2" />
                What it is
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Your AI-Powered Outreach Engine
              </h2>
              <p className="text-base text-gray-600 mb-6 leading-relaxed">
                AI crafts personalized emails that convert, automatically scheduling and optimizing send times for maximum engagement. 
                You can customize the AI assistant's profile and script to fit your outreach style.
              </p>
              <div className="space-y-4">
                {[
                  "Smart email personalization",
                  "Automated follow-up sequences", 
                  "Meeting scheduling integration",
                  "Performance analytics"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3" />
                    <span className="text-sm text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 hover:shadow-3xl transition-shadow duration-300">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 bg-blue-50 rounded-xl border border-blue-100 hover:bg-blue-100 transition-colors duration-300">
                    <Bot className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-xs font-medium text-blue-900">AI Assistant</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-xl border border-green-100 hover:bg-green-100 transition-colors duration-300">
                    <Mail className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <div className="text-xs font-medium text-green-900">Smart Emails</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-xl border border-purple-100 hover:bg-purple-100 transition-colors duration-300">
                    <Target className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                    <div className="text-xs font-medium text-purple-900">Results</div>
                  </div>
                </div>
                <div className="text-center p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100">
                  <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1">10x Faster</div>
                  <div className="text-sm text-gray-600">Outreach Process</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-3 py-1 bg-blue-100 border border-blue-200 rounded-full text-blue-700 text-sm font-medium mb-4">
              <Zap className="w-4 h-4 mr-2" />
              How it works
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Three Simple Steps to Success
            </h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              You set up your cold calling campaigns, select your target prospects, and JOTIQ's AI handles the rest.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Setup & Configure",
                description: "Connect your tools, set preferences, and customize your AI assistant's personality and messaging style.",
                icon: Bot,
                color: "blue"
              },
              {
                step: "02", 
                title: "AI Takes Over",
                description: "Your AI assistant drafts personalized messages, schedules follow-ups, and manages your entire outreach pipeline.",
                icon: Sparkles,
                color: "green"
              },
              {
                step: "03",
                title: "Focus on Closing", 
                description: "Spend your time on qualified leads and meaningful conversations while AI handles the rest automatically.",
                icon: Target,
                color: "purple"
              }
            ].map((item, index) => (
              <div key={index} className="relative">
                {/* Connection Line */}
                {index < 2 && (
                  <div className="hidden md:block absolute top-8 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-300 to-transparent z-0"></div>
                )}
                
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-16 h-16 bg-${item.color}-100 rounded-2xl flex items-center justify-center border border-${item.color}-200 shadow-lg`}>
                      <item.icon className={`w-8 h-8 text-${item.color}-600`} />
                    </div>
                    <div className="text-4xl font-bold text-gray-200 select-none">{item.step}</div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why it works Section */}
      <section className="py-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-blue-50 rounded-2xl border border-blue-100 hover:bg-blue-100 transition-colors duration-300">
                    <div className="text-2xl font-bold text-blue-600 mb-1">10x</div>
                    <div className="text-xs text-blue-900">Faster Outreach</div>
                  </div>
                  <div className="text-center p-6 bg-green-50 rounded-2xl border border-green-100 hover:bg-green-100 transition-colors duration-300">
                    <div className="text-2xl font-bold text-green-600 mb-1">85%</div>
                    <div className="text-xs text-green-900">Time Saved</div>
                  </div>
                  <div className="text-center p-6 bg-purple-50 rounded-2xl border border-purple-100 hover:bg-purple-100 transition-colors duration-300">
                    <div className="text-2xl font-bold text-purple-600 mb-1">3x</div>
                    <div className="text-xs text-purple-900">More Meetings</div>
                  </div>
                  <div className="text-center p-6 bg-orange-50 rounded-2xl border border-orange-100 hover:bg-orange-100 transition-colors duration-300">
                    <div className="text-2xl font-bold text-orange-600 mb-1">24/7</div>
                    <div className="text-xs text-orange-900">Always Working</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center px-3 py-1 bg-green-100 border border-green-200 rounded-full text-green-700 text-sm font-medium mb-4">
                <Star className="w-4 h-4 mr-2" />
                Why it works
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                The Science Behind AI Automation
              </h2>
              <p className="text-base text-gray-600 mb-6 leading-relaxed">
                Cold calling is time-consuming and often frustrating. Many calls go unanswered or end quickly. 
                JOTIQ eliminates this by automating cold calling and ensuring you only spend time with qualified leads.
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
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 border border-blue-200 shadow-sm">
                      <benefit.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-gray-900 mb-1">{benefit.title}</h3>
                      <p className="text-sm text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Case Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-3 py-1 bg-orange-100 border border-orange-200 rounded-full text-orange-700 text-sm font-medium mb-4">
              <CheckCircle className="w-4 h-4 mr-2" />
              Real-world impact
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              From Problem to Solution
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Problem */}
            <div className="bg-red-50 rounded-2xl p-8 border border-red-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6 border border-red-200 shadow-sm">
                <Zap className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">The Problem</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Recruiters dislike cold calling because it wastes time on unanswered calls and uninterested prospects.
              </p>
            </div>

            {/* Solution */}
            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100 hover:shadow-lg transition-shadow duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 border border-blue-200 shadow-sm">
                <Lightbulb className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">The Solution</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                JOTIQ's AI assistant makes the calls, qualifies leads, and schedules meetings automatically. 
                You can fully customize the call profile and scripts to fit your campaign.
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
                  "No more cold calling stress",
                  "Save 10+ hours per week on automation",
                  "Spend more time talking to qualified leads",
                  "Zero missed opportunities"
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

      {/* Visual Element Section */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 border border-blue-200 rounded-full text-blue-700 font-medium mb-6">
            <Play className="w-4 h-4 mr-2" />
            Interactive Demo
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">See How It Works</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Watch how our AI assistant transforms your outreach process from start to finish
          </p>
          
          <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
            <div className="aspect-video bg-gradient-to-br from-blue-50 via-blue-100 to-purple-100 rounded-2xl flex items-center justify-center relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 left-4 w-8 h-8 bg-blue-400 rounded-full"></div>
                <div className="absolute top-8 right-8 w-6 h-6 bg-purple-400 rounded-full"></div>
                <div className="absolute bottom-8 left-8 w-4 h-4 bg-green-400 rounded-full"></div>
                <div className="absolute bottom-4 right-4 w-10 h-10 bg-blue-300 rounded-full"></div>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-2xl hover:scale-110 transition-transform duration-300 cursor-pointer">
                  <Play className="w-10 h-10 text-white ml-1" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Interactive Demo</h3>
                <p className="text-sm text-gray-600">Watch AI making calls, qualifying leads, and scheduling meetings</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 rounded-3xl p-12 text-white shadow-2xl border border-blue-500 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-8 left-8 w-32 h-32 bg-white rounded-full"></div>
              <div className="absolute bottom-8 right-8 w-24 h-24 bg-white rounded-full"></div>
            </div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-4">
              <Rocket className="w-4 h-4 mr-2" />
              Ready to get started?
            </div>
              
              <h2 className="text-3xl font-bold mb-4">
                Transform Your Outreach Today
              </h2>
              
              <p className="text-base mb-6 opacity-90 max-w-2xl mx-auto">
                Stop wasting time on manual outreach. Let AI handle the heavy lifting while you focus on 
                building relationships and closing deals.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link
                  href="/signup"
                  className="inline-flex items-center justify-center bg-white text-blue-600 px-6 py-3 text-base font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                
                <Link
                  href="/demo"
                  className="inline-flex items-center justify-center border-2 border-white text-white px-6 py-3 text-base font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-105"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </Link>
              </div>
              
              <div className="text-sm opacity-75">
                <p>✨ No credit card required • 🚀 Setup in 5 minutes • 🎯 Results guaranteed</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}