import Image from 'next/image'

export default function AIFeatures() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center font-headline text-[#005BAB] mb-12">Built to Supercharge your outreach</h2>

        {/* Feature 1 - Text Left, Visual Right */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold font-headline text-black mb-6">Smarter Email Outreach. More Replies.</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              JOTIQ's AI Email Outreach crafts personalized campaigns that scale. It optimizes send times and tone, so
              every message lands right. That means higher replies and less manual follow-up.
            </p>
          </div>
          <div className="flex items-center justify-end">
            <Image
              src="/tested/test2.webp"
              alt="Email Campaign Interface"
              width={400}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Feature 2 - Visual Left, Text Right */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <div className="flex items-center md:order-1">
            <Image
              src="/tested/test4.webp"
              alt="AI Call Dashboard"
              width={400}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:order-2">
            <h3 className="text-3xl font-bold text-black mb-6">AI-Powered Calls. More Conversations.</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              JOTIQ's AI Agent cold-calls leads and handles objections. It sounds human, responds naturally, and saves
              you hours per week. You only step in when it's time to close.
            </p>
          </div>
        </div>

        {/* Feature 3 - Text Left, Visual Right */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold font-headline text-black mb-6">Real-Time Job Leads. More Opportunities.</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our smart job scraper monitors public job boards 24/7 and flags new roles instantly. You're always first
              to know where hiring happens, no more manual browsing.
            </p>
          </div>
          <div className="flex items-center justify-end">
            <Image
              src="/tested/test3.webp"
              alt="Job Leads Dashboard"
              width={400}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Feature 4 - Visual Left, Text Right */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="flex items-center md:order-1">
            <Image
              src="/tested/test4.webp"
              alt="Analytics Dashboard"
              width={400}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:order-2">
            <h3 className="text-3xl font-bold font-headline text-black mb-6">Actionable Analytics. Better Results.</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              The dashboard tracks opens, replies, call outcomes, and more, all in one place. Know what works, what
              doesn't, and continuously improve your outreach strategy.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}