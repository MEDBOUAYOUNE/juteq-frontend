import { Upload, Rocket, BarChart3, ArrowRight } from "lucide-react"

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: Upload,
      title: "Upload Contacts",
      description: "Import your client lead lists into JOTIQ in seconds with our smart data extraction.",
      color: "#9ECAD6"
    },
    {
      number: "02", 
      icon: Rocket,
      title: "Launch Campaigns",
      description: "Create personalized AI email and voice campaigns with just a few clicks using our advanced automation.",
      color: "#748DAE"
    },
    {
      number: "03",
      icon: BarChart3,
      title: "Track & Win",
      description: "Monitor replies and results in real time, book meetings, and fill roles faster than ever before.",
      color: "#F5CBCB"
    }
  ]

  return (
    <section className="relative bg-white py-24 px-4 overflow-hidden">
      {/* Background decorative elements */}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Headline */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-3xl font-bold text-center font-headline text-[#005BAB] mb-6">How it works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From upload to outreach, JOTIQ simplifies every step of your recruitment process
          </p>
        </div>

        {/* Steps Container */}
        <div className="relative">
          {/* Connection lines for desktop */}
          <div className="hidden md:block absolute top-20 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
            <div className="flex justify-between items-center px-16">
              <div className="flex-1 h-0.5 bg-gradient-to-r from-blue-300 to-indigo-300"></div>
              <div className="w-8"></div>
              <div className="flex-1 h-0.5 bg-gradient-to-r from-indigo-300 to-purple-300"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Step Card */}
                <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  {/* Step Number */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-bold text-gray-300 font-mono">{step.number}</span>
                    <div className="md:hidden">
                      <ArrowRight className="w-6 h-6 text-gray-400" />
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg transform rotate-3 group-hover:rotate-0 transition-transform duration-300" style={{ backgroundColor: step.color }}>
                      <step.icon className="w-10 h-10 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-2xl font-bold font-headline text-gray-900 mb-4">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>

                  {/* Hover effect */}
                  <div className="absolute inset-0 rounded-2xl transition-opacity duration-300 opacity-0 group-hover:opacity-5" style={{ backgroundColor: step.color }}></div>
                </div>

                {/* Mobile connector */}
                {index < steps.length - 1 && (
                  <div className="md:hidden flex justify-center mt-6 mb-6">
                    <div className="w-0.5 h-8 bg-gradient-to-b from-gray-300 to-gray-200"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}