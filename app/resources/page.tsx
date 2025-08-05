import Link from "next/link"
import { ArrowRight, BookOpen, FileText, Lightbulb, Megaphone, Users, HeadphonesIcon } from "lucide-react"

export default function ResourcesPage() {
  const resources = [
    {
      id: 1,
      icon: BookOpen,
      title: "Help Center",
      description: "Quick answers, walkthroughs, and troubleshooting guides to get the most out of JOTIQ",
      href: "/resources/help-center",
      ctaText: "Go to Help Center"
    },
    {
      id: 2,
      icon: FileText,
      title: "Blog",
      description: "Insights on AI outreach, lead generation, and smart recruitment strategies",
      href: "/resources/blog",
      ctaText: "Read Blog"
    },
    {
      id: 3,
      icon: Lightbulb,
      title: "Best Practices",
      description: "Playbooks, templates, and expert tips to improve your outreach.",
      href: "/resources/best-practices",
      ctaText: "Read Tips"
    },
    {
      id: 4,
      icon: Megaphone,
      title: "Product Updates",
      description: "New features, platform improvements, and roadmap previews.",
      href: "/resources/product-updates",
      ctaText: "See What's New"
    },
    {
      id: 5,
      icon: Lightbulb,
      title: "Idea Box",
      description: "Got a great idea for JOTIQ? Help shape our future with your feedback.",
      href: "/resources/idea-box",
      ctaText: "Submit an Idea"
    },
    {
      id: 6,
      icon: HeadphonesIcon,
      title: "Support & Contact",
      description: "Need help? Our team is ready to assist",
      href: "/resources/support",
      ctaText: "Contact Support"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-4xl lg:text-6xl font-semibold font-headline text-gray-900 mb-6">
            JOTIQ Resources
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-4">
            A central hub to learn, improve, and grow with JOTIQ.
          </p>
          <p className="text-lg text-gray-500 max-w-4xl mx-auto">
            Browse our 6 resource areas below to find everything you need from help articles to strategic outreach tips.
          </p>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource) => {
              const IconComponent = resource.icon
              return (
                <div
                  key={resource.id}
                  className="bg-gradient-to-br from-blue-50 to-indigo-100 border border-blue-200 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-[#005BAB] rounded-xl flex items-center justify-center mr-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold font-headline text-[#005BAB]">
                      {resource.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {resource.description}
                  </p>
                  
                  <Link
                    href={resource.href}
                    className="inline-flex items-center text-[#005BAB] font-medium hover:text-blue-600 transition-colors group"
                  >
                    {resource.ctaText}
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 border border-blue-200 rounded-3xl p-24 md:p-32 shadow-xl backdrop-blur-sm">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-semibold font-headline text-[#005BAB] mb-4">
                Ready to get started?
              </h3>
              <p className="text-xl text-gray-600 mb-8">
                Join thousands of recruiters using JOTIQ to streamline their outreach
              </p>
              <Link
                href="/signup"
                className="inline-flex items-center bg-[#005BAB] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-colors shadow-lg hover:shadow-xl"
              >
                Start Your Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}