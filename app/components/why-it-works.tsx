import { CheckCircle, Users, Zap, Target } from "lucide-react"

export default function WhyItWorks() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Headline */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-center font-headline text-[#005BAB] mb-6">
            Why JOTIQ?
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Everything we've built is designed to help recruiters move faster,
            reach more clients, and close more deals with less effort.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* No CRM Needed */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-[#005BAB] rounded-lg flex items-center justify-center mr-4">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold font-headline text-gray-900">
                No CRM Needed
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg">
              Skip the complex CRM software. JOTIQ manages contacts, outreach, and
              follow-ups in one platform cutting tools and saving cost.
            </p>
          </div>

          {/* AI Voice Included */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-[#005BAB] rounded-lg flex items-center justify-center mr-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold font-headline text-gray-900">
                AI Voice Included
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg">
              Start cold calling with AI and reach prospects through smart email and
              automated calls for more replies and conversations.
            </p>
          </div>

          {/* Fast Onboarding */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-[#005BAB] rounded-lg flex items-center justify-center mr-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold font-headline text-gray-900">
                Fast Onboarding
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg">
              Launch your first campaign in minutes. Intuitive setup, no learning curve, and
              ready-to-use templates built for recruiters.
            </p>
          </div>

          {/* Built by Recruiters for Recruiters */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-[#005BAB] rounded-lg flex items-center justify-center mr-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold font-headline text-gray-900">
                Built by Recruiters for Recruiters
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg">
              Designed for recruitment not generic sales. Every feature is tailored to help you
              win clients and place candidates faster.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}