import { Mail, Upload, Phone, Search, Brain, Sparkles, Zap, Bot, MessageSquare, BarChart3 } from "lucide-react"

const features = [
  {
    icon: Mail,
    aiIcon: Brain,
    title: "Save Hours Every Day",
    description: "AI automates email outreach, personalizes messages, and optimizes send times for maximum engagement.",
    aiFeatures: ["Automated email generation", "Personalized content", "Send time optimization"],
    gradient: "from-blue-500 to-purple-6",
  },
  {
    icon: Phone,
    aiIcon: MessageSquare,
    title: "AI-Powered Cold Calling",
    description: "AI makes calls that engage prospects, book meetings, and handle objections seamlessly.",
    aiFeatures: ["Real-time objection handling", "Dynamic script generation", "Call analytics"],
    gradient: "from-green-500 to-teal-600",
  },
  {
    icon: Upload,
    aiIcon: Zap,
    title: "Smart Lead Generation",
    description: "AI identifies and qualifies leads from multiple sources, ensuring you focus on the best prospects.",
    aiFeatures: ["Lead scoring", "Source prioritization", "Automated follow-ups"],
    gradient: "from-purple-500 to-pink-600",
  },
  {
    icon: Search,
    aiIcon: BarChart3,
    title: "Real-Time Sales Analytics",
    description: "AI analyzes sales data to provide actionable insights, helping you make informed decisions.",
    aiFeatures: ["Predictive analytics", "Performance tracking", "Market trend analysis"],
    gradient: "from-orange-500 to-red-600",
  },
]

export default function AIFeatures() {
  return (
    <section className="py-1 bg-white relative overflow-hidden">
      {/* AI Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(51, 154, 240, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(51, 154, 240, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-dodger-blue/10 rounded-full text-sm font-medium text-dodger-blue mb-6">
            <Bot className="w-4 h-4 mr-2 animate-pulse" />
            AI-Powered Features
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Everything you need to scale outreach with <span className="text-dodger-blue">AI</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Advanced artificial intelligence that transforms manual prospecting into automated success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-dodger-blue/30 hover:shadow-xl transition-all duration-500 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* AI Glow Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}
              ></div>

              <div className="flex items-start space-x-4 relative">
                <div className="flex-shrink-0 relative">
                  <div
                    className={`w-14 h-14 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="h-7 w-7 text-white" />
                  </div>
                  {/* AI Badge */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center shadow-sm">
                    <feature.aiIcon className="w-3 h-3 text-yellow-800" />
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-dodger-blue transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{feature.description}</p>

                  {/* AI Features */}
                  <div className="space-y-2">
                    {feature.aiFeatures.map((aiFeature, aiIndex) => (
                      <div key={aiIndex} className="flex items-center text-sm text-gray-500">
                        <Zap className="w-3 h-3 mr-2 text-yellow-500" />
                        {aiFeature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Animated Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-dodger-blue/20 transition-colors duration-300"></div>
            </div>
          ))}
        </div>

        {/* AI Showcase Section */}
        <div className="mt-24 bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 relative overflow-hidden">
          {/* AI Particles */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-dodger-blue rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 2}s`,
                }}
              ></div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-white mb-6">
                <Sparkles className="w-4 h-4 mr-2 text-yellow-400" />
                AI in Action
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Watch AI Transform Your Outreach</h3>
              <p className="text-lg text-gray-300 mb-8">
                See how our advanced AI algorithms analyze, personalize, and optimize every aspect of your outreach
                campaigns in real-time.
              </p>

              <div className="space-y-4">
                {[
                  { icon: Brain, text: "AI analyzes prospect behavior patterns" },
                  { icon: Sparkles, text: "Generates personalized content instantly" },
                  { icon: Zap, text: "Optimizes send times automatically" },
                  { icon: BarChart3, text: "Provides predictive insights" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center text-white">
                    <div className="w-8 h-8 bg-dodger-blue/20 rounded-lg flex items-center justify-center mr-3">
                      <item.icon className="w-4 h-4 text-dodger-blue" />
                    </div>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Dashboard Mockup */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-white font-medium flex items-center">
                    <Bot className="w-5 h-5 mr-2 text-dodger-blue" />
                    AI Dashboard
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-xs text-gray-300">AI Active</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="bg-white/5 rounded-lg p-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-300">AI Writing Progress</span>
                      <span className="text-sm text-dodger-blue">87%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2 mt-2">
                      <div className="bg-dodger-blue h-2 rounded-full animate-pulse" style={{ width: "87%" }}></div>
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-lg p-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-300">Prospects Analyzed</span>
                      <span className="text-sm text-green-400">1,247</span>
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-lg p-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-300">AI Confidence Score</span>
                      <span className="text-sm text-yellow-400">94%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
