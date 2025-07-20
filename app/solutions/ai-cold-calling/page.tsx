import Image from "next/image"

export default function ColdCallingPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        {/* Hero */}
        <h1 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
          {"AI-Powered Cold Calling"}
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          {"Automate outbound calls, lead qualification, and meeting scheduling."}
        </p>

        {/* What it is */}
        <section className="mt-16 text-left">
          <h2 className="text-3xl font-semibold text-gray-900">{"What it is"}</h2>
          <p className="mt-4 text-lg text-gray-700">
            {
              "AI-Powered Cold Calling automates outbound calls, lead qualification, and meeting scheduling. You can customize the AI assistant’s profile and script to fit your outreach style. The AI can make multiple calls at the same time, scaling your outreach efforts efficiently."
            }
          </p>
        </section>

        {/* How it works */}
        <section className="mt-16 text-left">
          <h2 className="text-3xl font-semibold text-gray-900">{"How it works"}</h2>
          <p className="mt-4 text-lg text-gray-700">
            {
              "You set up your cold calling campaigns, select your target prospects, and JOTIQ’s AI handles the rest. The AI uses either your custom scripts or JOTIQ’s default templates to engage, qualify, and schedule meetings with interested prospects."
            }
          </p>
        </section>

        {/* Why it works */}
        <section className="mt-16 text-left">
          <h2 className="text-3xl font-semibold text-gray-900">{"Why it works"}</h2>
          <p className="mt-4 text-lg text-gray-700">
            {
              "Cold calling is time-consuming and often frustrating. Many calls go unanswered or end quickly. JOTIQ eliminates this by automating cold calling and ensuring you only spend time with qualified leads."
            }
          </p>
        </section>

        {/* Use Case */}
        <section className="mt-16 text-left">
          <h2 className="text-3xl font-semibold text-gray-900">{"Use Case"}</h2>

          <div className="mt-6 rounded-lg border border-gray-200 bg-gray-50 p-6 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-800">{"Problem:"}</h3>
            <p className="mt-2 text-lg text-gray-700">
              {"Recruiters dislike cold calling because it wastes time on unanswered calls and uninterested prospects."}
            </p>
          </div>

          <div className="mt-4 rounded-lg border border-gray-200 bg-gray-50 p-6 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-800">{"Solution:"}</h3>
            <p className="mt-2 text-lg text-gray-700">
              {
                "JOTIQ’s AI assistant makes the calls, qualifies leads, and schedules meetings automatically. You can fully customize the call profile and scripts to fit your campaign."
              }
            </p>
          </div>

          <div className="mt-4 rounded-lg border border-gray-200 bg-gray-50 p-6 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-800">{"Results / Benefits:"}</h3>
            <ul className="mt-2 list-inside list-disc space-y-2 text-lg text-gray-700">
              <li>{"No more cold calling stress."}</li>
              <li>{"Save time by letting the AI handle multiple calls at once."}</li>
              <li>{"Spend more time talking to qualified leads."}</li>
            </ul>
          </div>
        </section>

        {/* Visual Element */}
        <section className="mt-16">
          {/* <h2 className="sr-only">{"Visual Element: AI making calls animation"}</h2> */}
          <div className="relative mx-auto aspect-video w-full max-w-2xl overflow-hidden rounded-lg border border-gray-200 shadow-lg">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Animation showing AI making calls, qualifying leads, and scheduling meetings"
              fill
              sizes="(max-width: 1024px) 100vw, 600px"
              className="object-cover"
            />
          </div>
          <p className="mt-4 text-sm text-gray-500">
            {"Animation showing AI making calls, qualifying leads, and scheduling meetings."}
          </p>
        </section>

        {/* CTA */}
        <section className="mt-16">
          <button className="rounded-md bg-blue-500 px-8 py-4 text-xl font-semibold text-white shadow-lg transition-colors duration-200 hover:bg-blue-600">
            {"See How It Works"}
          </button>
          <p className="mt-3 text-sm text-gray-600">{"Fully customizable AI. Hands-free cold calling."}</p>
        </section>
      </div>
    </main>
  )
}
