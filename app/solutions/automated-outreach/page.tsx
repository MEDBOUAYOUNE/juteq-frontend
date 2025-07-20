import Image from "next/image"

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        {/* Hero */}
        <h1 className="text-5xl font-semibold text-black mb-4 sm:text-5xl md:text-6xl">
          {"Automated Client Outreach"}
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          {"Automate your emails, follow-ups, and meeting scheduling with JOTIQ’s AI-powered solution."}
        </p>

        {/* What it is */}
        <section className="mt-16 text-left">
          <h2 className="text-3xl font-semibold text-gray-900">{"What it is"}</h2>
          <p className="mt-4 text-lg text-gray-700">
            {
              "Automated Client Outreach lets you automate your emails, follow-ups, and meeting scheduling with JOTIQ’s AI-powered solution. The system learns from real-time client responses to keep your outreach relevant and timely."
            }
          </p>
        </section>

        {/* How it works */}
        <section className="mt-16 text-left">
          <h2 className="text-3xl font-semibold text-gray-900">{"How it works"}</h2>
          <p className="mt-4 text-lg text-gray-700">
            {
              "JOTIQ removes the manual effort from client outreach. The AI automatically sends personalized emails, follows up based on real-time responses, and books meetings while ensuring each message is customized and consistent."
            }
          </p>
        </section>

        {/* Why it works */}
        <section className="mt-16 text-left">
          <h2 className="text-3xl font-semibold text-gray-900">{"Why it works"}</h2>
          <p className="mt-4 text-lg text-gray-700">
            {
              "By automating repetitive outreach tasks, JOTIQ saves valuable time and maximizes client engagement. Every communication is timely and optimized based on past client interactions."
            }
          </p>
        </section>

        {/* Use Case */}
        <section className="mt-16 text-left">
          <h2 className="text-3xl font-semibold text-gray-900">{"Use Case"}</h2>

          <div className="mt-6 rounded-lg border border-gray-200 bg-gray-50 p-6 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-800">{"Problem:"}</h3>
            <p className="mt-2 text-lg text-gray-700">
              {"Recruiters often spend too much time manually sending emails and scheduling follow-ups."}
            </p>
          </div>

          <div className="mt-4 rounded-lg border border-gray-200 bg-gray-50 p-6 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-800">{"Solution:"}</h3>
            <p className="mt-2 text-lg text-gray-700">
              {
                "JOTIQ automates this process. The AI handles outreach, follow-ups, and scheduling based on real-time responses, keeping each message relevant and timely."
              }
            </p>
          </div>

          <div className="mt-4 rounded-lg border border-gray-200 bg-gray-50 p-6 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-800">{"Results / Benefits:"}</h3>
            <ul className="mt-2 list-inside list-disc space-y-2 text-lg text-gray-700">
              <li>{"Save up to 10 hours per week by automating client outreach."}</li>
              <li>{"Ensure consistent client communication."}</li>
              <li>{"Maximize engagement by sending messages at the best possible time."}</li>
            </ul>
          </div>
        </section>

        {/* Visual Element */}
        <section className="mt-16">
          {/* <h2 className="sr-only">{"Visual Element: Automated Emails Screenshot"}</h2> */}
          <div className="relative mx-auto aspect-video w-full max-w-2xl overflow-hidden rounded-lg border border-gray-200 shadow-lg">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Screenshot of automated emails and follow-ups being sent"
              fill
              sizes="(max-width: 1024px) 100vw, 600px"
              className="object-cover"
            />
          </div>
          <p className="mt-4 text-sm text-gray-500">{"Screenshot of automated emails and follow-ups being sent."}</p>
        </section>

        {/* CTA */}
        <section className="mt-16">
          <button className="rounded-md bg-blue-500 px-8 py-4 text-xl font-semibold text-white shadow-lg transition-colors duration-200 hover:bg-blue-600">
            {"Start Automating Now"}
          </button>
          <p className="mt-3 text-sm text-gray-600">{"Instant access. No credit card required."}</p>
        </section>
      </div>
    </main>
  )
}
