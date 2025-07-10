import { Users, Target, Award, ArrowRight, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"
// import CleanHeader from "../../components/clean-header"
// import MinimalFooter from "../../components/minimal-footer"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* <CleanHeader /> */}

      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Who We Are</h1>
          <div className="text-xl text-gray-600 leading-relaxed space-y-6">
            <p>
              At <span className="text-dodger-blue font-semibold">JOTIQ</span>, we believe that business development
              should be smarter, faster, and more human.
            </p>
            <p>
              Founded by recruitment and technology experts, JOTIQ empowers recruitment consultants to automate client
              outreach and focus on what really matters: building lasting relationships and closing more deals.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-dodger-blue/5 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our mission is simple:</h2>
            <div className="text-4xl md:text-5xl font-bold text-dodger-blue mb-6">Automate the part you hate.</div>
            <p className="text-xl text-gray-600">
              Let AI handle the cold outreach so you can focus on growing your business.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Our Story</h2>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="text-lg text-gray-600 leading-relaxed space-y-6">
              <p>
                Joel and Otman first connected in 2020 when Joel was recruiting a CTO for one of his clients, with Otman
                successfully securing the role. They've maintained a strong professional relationship ever since,
                staying in close contact even after Otman's contract ended.
              </p>
              <p>
                When Joel came up with the idea for JOTIQ, Otman was the first person he approached for advice. What
                started as a conversation quickly evolved into a shared mission.
              </p>
              <p>
                Today, Otman leads the technical development of JOTIQ, ensuring the platform is both recruiter-centric
                and technologically advanced.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Founders Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Meet the Founders</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Joel Bennett */}
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              {/* Founder Image */}
              <div className="mb-8 text-center">
                <div className="w-48 h-48 mx-auto bg-gray-200 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="/Joel_img.jpeg"
                    alt="Joel Bennett - Founder of JOTIQ"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="flex items-center mb-6">
                {/* <div className="w-20 h-20 bg-dodger-blue rounded-full flex items-center justify-center mr-6">
                  <span className="text-2xl font-bold text-white">JB</span>
                </div> */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Joel Bennett</h3>
                  <p className="text-dodger-blue font-semibold">Founder</p>
                </div>
              </div>
              <div className="text-gray-600 leading-relaxed space-y-4">
                <p>
                  With nearly two decades of international experience in recruitment, team management, and client
                  strategy, Joel understands the everyday challenges recruitment consultants face when it comes to
                  client acquisition.
                </p>
                <p>
                  Throughout his career, Joel has built and led high-performing recruitment teams and worked with
                  businesses across multiple industries and continents.
                </p>
                <p>
                  With JOTIQ, his mission is to remove the most time-consuming parts of the job and give recruiters more
                  time to focus on meaningful client conversations.
                </p>
              </div>
            </div>

            {/* Otman Nouinou */}
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              {/* Founder Image */}
              <div className="mb-8 text-center">
                <div className="w-48 h-48 mx-auto bg-gray-200 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="/Otman_img.jpeg"
                    alt="Otman Nouinou - Co-Founder of JOTIQ"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="flex items-center mb-6">
                {/* <div className="w-20 h-20 bg-dodger-blue rounded-full flex items-center justify-center mr-6">
                  {/* <span className="text-2xl font-bold text-white">ON</span> */}
                {/* </div> */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Otman Nouinou</h3>
                  <p className="text-dodger-blue font-semibold">Co-Founder</p>
                </div>
              </div>
              <div className="text-gray-600 leading-relaxed space-y-4">
                <p>
                  Otman brings over 25 years of experience as an IT entrepreneur, strategic consultant, and digital
                  transformation leader. He has built a career at the intersection of technical innovation and business
                  strategy, consistently driving growth and creating long-term value.
                </p>
                <p>
                  As the founder of several IT companies, Otman combines deep technical expertise in software
                  engineering, system architecture, and enterprise IT with a strong background in business management.
                </p>
                <p>
                  With JOTIQ, his mission is to build a platform that simplifies the most time-consuming tasks for
                  recruiters, helping them focus on what really matters: building strong client relationships and
                  closing more deals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why JOTIQ Section */}
      <section className="py-20 bg-dodger-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Why JOTIQ?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <p className="text-white text-lg font-medium">Built by recruiters, powered by AI.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <p className="text-white text-lg font-medium">Designed to solve real problems consultants face.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <p className="text-white text-lg font-medium">
                Focused on helping you win more clients, save hours every day, and grow your business faster.
              </p>
            </div>
          </div>

          <div className="text-white text-xl leading-relaxed mb-8">
            <p className="mb-4">
              We're on a mission to change the way recruiters approach business development — and we'd love you to be
              part of it.
            </p>
            <p>Follow us for updates, product insights, and smart AI tips for recruitment success.</p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            <Link
              href="#"
              className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              <Linkedin className="w-6 h-6 text-white" />
            </Link>
            <Link
              href="#"
              className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              <Twitter className="w-6 h-6 text-white" />
            </Link>
          </div>

          {/* CTA */}
          <Link
            href="/signup"
            className="inline-flex items-center bg-white text-dodger-blue px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
          >
            Join Our Mission
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* <MinimalFooter /> */}
    </main>
  )
}
