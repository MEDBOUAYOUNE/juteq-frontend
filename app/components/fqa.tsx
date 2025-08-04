"use client"
import { useState } from "react"
import { Plus, Minus } from "lucide-react"

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    )
  }

  const faqData = [
    {
      question: "What is JOTIQ, and who is it for?",
      answer: "JOTIQ is an AI-powered platform designed to supercharge business development for recruitment professionals. It's built for recruiters, account managers, and business development managers who want to automate outreach, generate leads, and close more clients faster."
    },
    {
      question: "Do I need technical experience to use JOTIQ?",
      answer: "Not at all. JOTIQ is simple, intuitive, and requires no technical skills or coding experience. You can get started right away without complex setup."
    },
    {
      question: "How does JOTIQ's AI outreach feature work?",
      answer: "JOTIQ's AI assistant automatically sends smart, personalized emails and can even handle AI-powered cold calls. You control whether the AI leads the conversation or if you prefer to customize the messages yourself. It's like having a virtual business development partner working for you around the clock."
    },
    {
      question: "Is JOTIQ compliant with U.S. regulations and data privacy laws?",
      answer: "JOTIQ is designed with compliance in mind and supports outreach aligned with major U.S. laws such as the TCPA, the CAN-SPAM Act, and global standards like GDPR. That said, JOTIQ is a facilitation tool you remain responsible for complying with all laws applicable in your region. We encourage all users to review their contact lists and outreach practices to ensure full legal compliance."
    },
    {
      question: "How does pricing work at JOTIQ?",
      answer: "JOTIQ offers clear, fixed-price bundles with no hidden fees. You can start with the Explore Plan for free and upgrade anytime as your needs grow. You only pay for the plan you choose, and pricing details are fully transparent on our website."
    },
    {
      question: "Can I use JOTIQ if I work at an agency or as a freelance recruiter?",
      answer: "Absolutely. JOTIQ is designed for both independent recruiters and recruitment agencies. Our flexible pricing supports solo consultants and growing teams."
    }
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Headline */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold font-headline text-[#005BAB] mb-6">
            FAQ
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transition-shadow duration-300 hover:shadow-xl"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between"
              >
                <h3 className="text-xl font-bold font-headline text-gray-900 pr-4">
                  {item.question}
                </h3>
                <div className="flex-shrink-0">
                  {openItems.includes(index) ? (
                    <Minus className="w-6 h-6 text-[#005BAB]" />
                  ) : (
                    <Plus className="w-6 h-6 text-[#005BAB]" />
                  )}
                </div>
              </button>
              
              {openItems.includes(index) && (
                <div className="px-8 pb-6">
                  <div className="border-t border-gray-200 pt-6">
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {item.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}