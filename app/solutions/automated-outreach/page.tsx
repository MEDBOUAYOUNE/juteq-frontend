"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Zap, Lightbulb, CheckCircle, Sparkles, Bot, Mail, Clock, Target, Rocket, Star, Play } from "lucide-react"

export default function SolutionPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 lg:pt-28 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 font-medium mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                AI-Powered Solution
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Automated Client
                <span className="text-blue-600 block">Outreach</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Automate outbound calls, lead qualification, and meeting scheduling with AI that works 24/7.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/signup"
                  className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <Rocket className="w-5 h-5 mr-2" />
                  Get Started Free
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                
                <Link
                  href="/demo"
                  className="inline-flex items-center justify-center border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </Link>
              </div>
            </div>

            {/* Right Illustration */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 shadow-xl">
                <div className="grid grid-cols-1 gap-6">
                  {/* AI Dashboard Mockup */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-gray-900">AI Outreach Dashboard</h3>
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                        <span className="text-blue-700 font-medium">Emails Sent Today</span>
                        <span className="text-blue-900 font-bold">247</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                        <span className="text-green-700 font-medium">Meetings Scheduled</span>
                        <span className="text-green-900 font-bold">12</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                        <span className="text-purple-700 font-medium">Response Rate</span>
                        <span className="text-purple-900 font-bold">34%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What it is Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-700 font-medium mb-6">
                <Lightbulb className="w-4 h-4 mr-2" />
                What it is
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Your AI-Powered Outreach Engine
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
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
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 bg-blue-50 rounded-xl">
                    <Bot className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-sm font-medium text-blue-900">AI Assistant</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-xl">
                    <Mail className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <div className="text-sm font-medium text-green-900">Smart Emails</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-xl">
                    <Target className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                    <div className="text-sm font-medium text-purple-900">Results</div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">10x Faster</div>
                  <div className="text-gray-600">Outreach Process</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-700 font-medium mb-6">
              <Zap className="w-4 h-4 mr-2" />
              How it works
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Three Simple Steps to Success
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-16 h-16 bg-${item.color}-100 rounded-2xl flex items-center justify-center`}>
                      <item.icon className={`w-8 h-8 text-${item.color}-600`} />
                    </div>
                    <div className="text-4xl font-bold text-gray-200">{item.step}</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why it works Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-blue-50 rounded-2xl">
                    <div className="text-3xl font-bold text-blue-600 mb-2">10x</div>
                    <div className="text-sm text-blue-900">Faster Outreach</div>
                  </div>
                  <div className="text-center p-6 bg-green-50 rounded-2xl">
                    <div className="text-3xl font-bold text-green-600 mb-2">85%</div>
                    <div className="text-sm text-green-900">Time Saved</div>
                  </div>
                  <div className="text-center p-6 bg-purple-50 rounded-2xl">
                    <div className="text-3xl font-bold text-purple-600 mb-2">3x</div>
                    <div className="text-sm text-purple-900">More Meetings</div>
                  </div>
                  <div className="text-center p-6 bg-orange-50 rounded-2xl">
                    <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                    <div className="text-sm text-orange-900">Always Working</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full text-green-700 font-medium mb-6">
                <Star className="w-4 h-4 mr-2" />
                Why it works
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                The Science Behind AI Automation
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
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
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Case Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full text-orange-700 font-medium mb-6">
              <CheckCircle className="w-4 h-4 mr-2" />
              Real-world impact
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              From Problem to Solution
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Problem */}
            <div className="bg-red-50 rounded-2xl p-8 border border-red-100">
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">The Problem</h3>
              <p className="text-gray-600 leading-relaxed">
                Recruiters dislike cold calling because it wastes time on unanswered calls and uninterested prospects.
              </p>
            </div>

            {/* Solution */}
            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <Lightbulb className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">The Solution</h3>
              <p className="text-gray-600 leading-relaxed">
                JOTIQ's AI assistant makes the calls, qualifies leads, and schedules meetings automatically. 
                You can fully customize the call profile and scripts to fit your campaign.
              </p>
            </div>

            {/* Results */}
            <div className="bg-green-50 rounded-2xl p-8 border border-green-100">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">The Results</h3>
              <div className="space-y-3">
                {[
                  "No more cold calling stress",
                  "Save time by letting AI handle multiple calls",
                  "Spend more time talking to qualified leads",
                  "Zero missed opportunities"
                ].map((result, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-3" />
                    <span className="text-gray-700">{result}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Element Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">See How It Works</h2>
          <div className="relative bg-white rounded-3xl p-8 shadow-xl">
            <div className="aspect-video bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Play className="w-10 h-10 text-white ml-1" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Interactive Demo</h3>
                <p className="text-gray-600">Watch AI making calls, qualifying leads, and scheduling meetings</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-12 text-white">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-white font-medium mb-6">
              <Rocket className="w-4 h-4 mr-2" />
              Ready to get started?
            </div>
            
            <h2 className="text-4xl font-bold mb-6">
              Transform Your Outreach Today
            </h2>
            
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Stop wasting time on manual outreach. Let AI handle the heavy lifting while you focus on 
              building relationships and closing deals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-4 text-lg font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              
              <Link
                href="/demo"
                className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 text-lg font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Link>
            </div>
            
            <div className="mt-8 text-sm opacity-75">
              <p>✨ No credit card required • 🚀 Setup in 5 minutes • 🎯 Results guaranteed</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}