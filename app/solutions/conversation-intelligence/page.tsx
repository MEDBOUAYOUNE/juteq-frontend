import Image from "next/image"
import { ArrowUpRight, Check, Mail, Plus, ChevronRight, Mic, Brain, FileText, MessageSquare, TrendingUp, Zap, Target, BarChart3 } from "lucide-react"

export default function ConversationIntelligence() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-900 p-4 md:p-8 lg:p-12">
      <main className="w-full max-w-6xl mx-auto grid gap-12 py-12">
        {/* Hero Section */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-headline font-semibold leading-tight">
              Conversation Intelligence for Client Calls
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-headline font-regular text-[#0075DE] leading-tight">
              Turn every call into a growth opportunity
            </h2>
            <p className="text-lg text-gray-700 max-w-md">
              JOTIQ automatically records, transcribes, and analyzes your calls. Understand client sentiment, track key moments, and follow up with precision.
            </p>
          </div>
          <div className="relative flex justify-center items-center">
          <Image
            // src="/solutions/convesion.png"
            alt="Conversation Intelligence Dashboard Illustration"
            width={400}
            height={300}
            className="rounded-3xl shadow-2xl border border-gray-100 object-cover"
          />
        </div>
        </section>

        {/* What You Can Do / Why It Works Sections */}
        <section className="grid md:grid-cols-2 gap-12 mt-12">
          <div>
            <h3 className="text-2xl font-headline font-bold mb-4">What You Can Do</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FileText className="w-6 h-6 text-[#0075DE] shrink-0 mt-1" />
                <p className="text-lg text-gray-700">Get AI-generated call summaries and transcripts</p>
              </li>
              <li className="flex items-start gap-3">
                <MessageSquare className="w-6 h-6 text-[#0075DE] shrink-0 mt-1" />
                <p className="text-lg text-gray-700">Analyze tone, sentiment, and objections</p>
              </li>
              <li className="flex items-start gap-3">
                <TrendingUp className="w-6 h-6 text-[#0075DE] shrink-0 mt-1" />
                <p className="text-lg text-gray-700">Identify improvement points to close more deals</p>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-headline font-bold mb-4">Why It Works</h3>
            <p className="text-lg text-gray-700 mb-6">
              Reviewing calls manually is time-consuming. JOTIQ highlights what matters so you can improve outcomes and close more clients.
            </p>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="mt-12">
          <h3 className="text-2xl font-headline font-bold mb-6 text-center">How It Works (Step-by-Step)</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 flex items-center justify-center bg-[#0075DE] text-white rounded-full text-2xl font-bold mx-auto">
                1
              </div>
              <h4 className="text-xl font-semibold">Calls are recorded and transcribed</h4>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 flex items-center justify-center bg-[#0075DE] text-white rounded-full text-2xl font-bold mx-auto">
                2
              </div>
              <h4 className="text-xl font-semibold">Key insights and sentiment are highlighted</h4>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 flex items-center justify-center bg-[#0075DE] text-white rounded-full text-2xl font-bold mx-auto">
                3
              </div>
              <h4 className="text-xl font-semibold">You improve messaging and follow-ups</h4>
            </div>
          </div>
        </section>

        {/* Key Benefits & Testimonial */}
        <section className="grid md:grid-cols-2 gap-12 mt-12">
          <div>
            <h3 className="text-2xl font-headline font-bold mb-4">Key Benefits</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Zap className="w-6 h-6 text-[#0075DE] shrink-0 mt-1" />
                <p className="text-lg text-gray-700">Fast access to call summaries</p>
              </li>
              <li className="flex items-start gap-3">
                <Target className="w-6 h-6 text-[#0075DE] shrink-0 mt-1" />
                <p className="text-lg text-gray-700">Sentiment-based follow-up strategies</p>
              </li>
              <li className="flex items-start gap-3">
                <BarChart3 className="w-6 h-6 text-[#0075DE] shrink-0 mt-1" />
                <p className="text-lg text-gray-700">Stronger conversations with data-driven feedback</p>
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-center">
            <p className="text-2xl font-semibold italic text-gray-800 text-center">
              &quot;Learn what works. Fix what doesn't. Win more clients.&quot;
            </p>
          </div>
        </section>

        {/* Call to Action */}
        <section className="flex flex-col items-center justify-center mt-12 space-y-6">
          <button className="bg-[#0075DE] hover:bg-blue-700 text-white px-8 py-4 text-xl font-semibold rounded-lg shadow-lg transition-colors duration-200">
            See How It Works
          </button>
          <p className="text-md text-gray-600 text-center max-w-lg">
            Boost post-call impact with {' '}
            <a 
              href="/solutions/branded-content-upload"
              className="text-[#0075DE] hover:text-blue-700 transition-colors duration-200"
            >
            Branded Proposals 
            </a>
            {' '} and {' '}
            <a 
              href="/solutions/sales-analytics"
              className="text-[#0075DE] hover:text-blue-700 transition-colors duration-200"
            >
            Analytics
            </a>
          </p>
        </section>
      </main>
    </div>
  )
}