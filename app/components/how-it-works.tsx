import { Upload, Rocket, BarChart3 } from "lucide-react"

export default function HowItWorks() {
  return (
    <section className="relative bg-white py-20 px-4 overflow-hidden">
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Headline */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold font-headline text-[#005BAB] mb-4">How it works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From upload to outreach, JOTIQ simplifies every step.
          </p>
        </div>

        {/* UI Rectangle Container */}
        <div className="bg-gradient-to-br p-40 from-blue-50 to-indigo-100 border border-blue-200 rounded-3xl p-24 md:p-32 shadow-xl backdrop-blur-sm">
          {/* Steps Container */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Step 1: Upload Contacts */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center backdrop-blur-sm shadow-lg border border-white/20">
                  <Upload className="w-8 h-8 text-[#005BAB]" />
                </div>
              </div>
              <h3 className="text-xl font-semibold font-headline text-gray-900 mb-4">Upload Contacts</h3>
              <p className="text-gray-600 leading-relaxed">Import your client lead lists into JOTIQ in seconds.</p>
            </div>

            {/* Step 2: Launch Campaigns */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center backdrop-blur-sm shadow-lg border border-white/20">
                  <Rocket className="w-8 h-8 text-[#005BAB]" />
                </div>
              </div>
              <h3 className="text-xl font-semibold font-headline text-gray-900 mb-4">Launch Campaigns</h3>
              <p className="text-gray-600 leading-relaxed">
                Create personalized AI email and voice campaigns with just a few clicks.
              </p>
            </div>

            {/* Step 3: Track & Win */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center backdrop-blur-sm shadow-lg border border-white/20">
                  <BarChart3 className="w-8 h-8 text-[#005BAB]" />
                </div>
              </div>
              <h3 className="text-xl font-semibold font-headline text-gray-900 mb-4">Track & Win</h3>
              <p className="text-gray-600 leading-relaxed">
                Monitor replies and results in real time, book meetings, and fill roles faster.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}