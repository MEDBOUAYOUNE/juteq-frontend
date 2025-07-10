import { Brain, Sparkles, Zap, Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "The AI writes better emails than our entire marketing team. We're booking 3x more meetings with zero manual work.",
    name: "Sarah Johnson",
    position: "Senior Recruiter",
    company: "",
    aiMetric: "3x more meetings",
    aiFeature: "AI Email Writing",
    img_path: "/sarah-johnson.jpeg",
  },
  {
    quote:
      "It's like having a genius AI assistant that never sleeps. The voice calling AI books meetings while I focus on strategy.",
    name: "Michael Chen",
    position: "Head of talent acquisition",
    company: "",
    aiMetric: "2x conversion rate",
    aiFeature: "AI Voice Calling",
    img_path: "/michael-chen.jpeg",
  },
  {
    quote: "The AI data enrichment is mind-blowing. It finds prospects I never knew existed and scores them perfectly.",
    name: "Emily Rodriguez",
    position: "Talent Acquisition Lead",
    company: "",
    aiMetric: "80% time saved",
    aiFeature: "AI Data Intelligence",
    img_path: "/emily-rodriguez.jpeg",
  },
]

export default function AITestimonials() {
  return (
    <section className="py-2 bg-gradient-to-br from-gray-50 to-blue-50/30 relative overflow-hidden">
      {/* AI Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-dodger-blue rounded-full animate-pulse blur-xl"></div>
        <div
          className="absolute bottom-20 right-20 w-24 h-24 bg-purple-500 rounded-full animate-pulse blur-xl"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-dodger-blue mb-6 border border-dodger-blue/20">
            <Brain className="w-4 h-4 mr-2 animate-pulse" />
            AI Success Stories
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">See how AI transforms businesses</h2>
          <p className="text-xl text-gray-600">Real results from teams using JOTIQ's AI-powered outreach</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-105 animate-slide-up border border-white/50"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* AI Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-dodger-blue/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Quote Icon with AI Effect */}
              <div className="absolute -top-4 left-8">
                <div className="relative bg-gradient-to-r from-dodger-blue to-purple-600 p-3 rounded-full shadow-lg">
                  <Quote className="w-6 h-6 text-white" />
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center">
                    <Sparkles className="w-2 h-2 text-yellow-800" />
                  </div>
                </div>
              </div>

              {/* AI Feature Badge */}
              <div className="flex items-center justify-between mb-4 pt-4">
                <div className="inline-flex items-center px-3 py-1 bg-dodger-blue/10 rounded-full text-xs font-medium text-dodger-blue">
                  <Brain className="w-3 h-3 mr-1" />
                  {testimonial.aiFeature}
                </div>
              </div>

              {/* Quote */}
              <blockquote className="text-lg text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </blockquote>

              {/* AI Results Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full text-sm font-medium text-green-800 mb-6">
                <Zap className="w-4 h-4 mr-2 text-green-600" />
                {testimonial.aiMetric}
              </div>

              {/* Author Info */}
              <div className="flex items-center relative">
                <div className="w-12 h-12 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full mr-4 flex items-center justify-center">
                  <span className="text-gray-600 font-semibold text-sm">
                    <img
                      src={testimonial.img_path}
                      alt={testimonial.name}
                      className="w-full h-full rounded-full" ></img>
                   </span>
                  
                </div>
                <div>
                  <div className="font-semibold text-gray-900 group-hover:text-dodger-blue transition-colors">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">{testimonial.position}</div>
                  <div className="text-sm text-dodger-blue font-medium">{testimonial.company}</div>
                </div>
              </div>

              {/* Animated Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-dodger-blue/30 group-hover:to-purple-500/30 transition-colors duration-300"></div>
            </div>
          ))}
        </div>

        {/* AI Trust Indicators */}
        {/* <div className="mt-16 text-center">
          <p className="text-gray-600 mb-8 flex items-center justify-center">
            <Brain className="w-5 h-5 mr-2 text-dodger-blue" />
            Trusted by AI-forward companies worldwide
          </p> */}
          {/* <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {["TechCorp AI", "GrowthLabs", "InnovateCorp", "ScaleUp AI", "NextGen Solutions"].map((company, index) => (
              <div
                key={index}
                className="text-lg font-semibold text-gray-400 hover:text-dodger-blue transition-colors flex items-center"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                {company}
              </div>
            ))}
          </div> */}
        {/* </div> */}
      </div>
    </section>
  )
}
