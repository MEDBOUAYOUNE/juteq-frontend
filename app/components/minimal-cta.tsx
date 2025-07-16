import Link from "next/link"
import { ArrowRight, Play } from "lucide-react"

export default function MinimalCTA() {
  return (
    <section className="py-2   bg-white relative overflow-hidden">
       {/* Bottom CTA */}
               <div className="mt-20 text-center">
                 <div className="bg-gradient-to-r from-dodger-blue to-soft-blue rounded-3xl p-12 relative overflow-hidden">
                   {/* Background Pattern */}
                   <div className="absolute inset-0 opacity-10">
                     {[...Array(15)].map((_, i) => (
                       <div
                         key={i}
                         className="absolute w-2 h-2 bg-white rounded-full animate-pulse"
                         style={{
                           left: `${Math.random() * 100}%`,
                           top: `${Math.random() * 100}%`,
                           animationDelay: `${Math.random() * 3}s`,
                           animationDuration: `${2 + Math.random() * 2}s`,
                         }}
                       ></div>
                     ))}
                   </div>
       
                   <div className="relative">
                     <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Outreach?</h3>
                     <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                       Join thousands of recruiters who've automated their way to success with JOTIQ's AI-powered platform
                     </p>
       
                     <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                       <Link
                         href="/signup"
                         className="inline-flex items-center bg-white text-dodger-blue px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
                       >
                         Start Your Free Trial
                         <ArrowRight className="ml-2 w-5 h-5" />
                       </Link>
       
                       <Link
                         href="/demo"
                         className="inline-flex items-center text-white hover:text-gray-200 font-semibold transition-colors group"
                       >
                         <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                         Watch Full Demo
                       </Link>
                     </div>
       
                     {/* Stats */}
                     <div className="flex flex-wrap justify-center gap-8 mt-12 text-center">
                       <div>
                         <div className="text-3xl font-bold text-white">5,000+</div>
                         <div className="text-sm text-white/80">Active Users</div>
                       </div>
                       <div>
                         <div className="text-3xl font-bold text-white">10M+</div>
                         <div className="text-sm text-white/80">Messages Sent</div>
                       </div>
                       <div>
                         <div className="text-3xl font-bold text-white">95%</div>
                         <div className="text-sm text-white/80">Success Rate</div>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
    </section>
  )
}
