import { Target, Users, TrendingUp, BarChart3, CheckCircle } from "lucide-react"

const features = [
  {
    icon: Target,
    title: "Automated Email Outreach",
    description:
      "AI crafts personalized emails that convert, automatically scheduling and optimizing send times for maximum engagement.",
    features: ["Smart personalization", "Optimal timing", "A/B testing"],
    color: "blue",
  },
  {
    icon: Users,
    title: "Intelligent Lead Qualification",
    description:
      "AI analyzes and scores prospects automatically, ensuring your team focuses on the highest-value opportunities.",
    features: ["Lead scoring", "Behavioral analysis", "Priority ranking"],
    color: "green",
  },
  {
    icon: TrendingUp,
    title: "Smart Pipeline Management",
    description:
      "AI tracks deal progression and predicts outcomes, helping you close more deals with data-driven insights.",
    features: ["Deal forecasting", "Pipeline optimization", "Risk assessment"],
    color: "orange",
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description:
      "AI provides actionable insights from your outreach data, continuously improving your conversion rates.",
    features: ["Conversion tracking", "Performance insights", "ROI optimization"],
    color: "blue",
  },
]

const getColorClasses = (color: string) => {
  switch (color) {
    case "blue":
      return {
        bg: "bg-blue-600",
        text: "text-blue-600",
        border: "border-blue-200",
        hover: "hover:border-blue-300",
      }
    case "green":
      return {
        bg: "bg-green-600",
        text: "text-green-600",
        border: "border-green-200",
        hover: "hover:border-green-300",
      }
    case "orange":
      return {
        bg: "bg-orange-600",
        text: "text-orange-600",
        border: "border-orange-200",
        hover: "hover:border-orange-300",
      }
    default:
      return {
        bg: "bg-blue-600",
        text: "text-blue-600",
        border: "border-blue-200",
        hover: "hover:border-blue-300",
      }
  }
}

export default function AIFeatures() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-semibold text-gray-900 mb-6">How JOTIQ Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Advanced AI automation that learns from your best practices and continuously improves your results
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          {features.map((feature, index) => {
            const colors = getColorClasses(feature.color)
            return (
              <div
                key={index}
                className={`bg-white rounded-lg p-8 border-2 ${colors.border} ${colors.hover} transition-colors duration-200`}
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center`}>
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-medium text-gray-900 mb-4">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{feature.description}</p>

                    <div className="space-y-3">
                      {feature.features.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 mr-3 text-green-600" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Stats Section
        <div className="bg-gray-50 rounded-lg p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-medium text-gray-900 mb-4">
              Trusted by recruitment and business development professionals
            </h3>
            <p className="text-lg text-gray-600">See the impact JOTIQ makes on outreach performance</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { value: "10,000+", label: "Active users", color: "blue" },
              { value: "94.7%", label: "Accuracy rate", color: "green" },
              { value: "247%", label: "Conversion lift", color: "orange" },
              { value: "15hrs", label: "Saved per week", color: "blue" },
            ].map((stat, index) => {
              const colors = getColorClasses(stat.color)
              return (
                <div key={index} className="text-center">
                  <div className={`text-3xl font-semibold ${colors.text} mb-2`}>{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div> */}

        {/* CTA Section
        <div className="text-center mt-20">
          <h3 className="text-2xl font-medium text-gray-900 mb-6">Ready to transform your outreach?</h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who are already using JOTIQ to automate their client outreach and save hours
            every day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Start For Free
            </button>
            <button className="text-blue-600 border border-blue-600 bg-white px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
              See Plans
            </button>
          </div> */}
        {/* </div> */}
      </div>
    </section>
  )
}
