"use client"

import Image from "next/image"

export default function TrustedLogos() {
  const companies = [
    {
      name: "Randstad",
      logo: "/trusted/randstad-logo.svg"
    },
    {
      name: "Adecco",
      logo: "/trusted/adecco-logo.svg"
    },
    {
      name: "Sthree",
      logo: "/trusted/sthree-logo.png"
    },
    {
      name: "Michael Page",
      logo: "/trusted/michael-page-logo.png"
    },
    {
      name: "Kelly Services",
      logo: "/trusted/kelly-services-logo.svg"
    },
    // {
    //   name: "Antal International",
    //   logo: "/trusted/antal-international-logo.svg"
    // },
    // {
    //   name: "TEKsystems",
    //   logo: "/trusted/teksystems-logo.svg"
    // }
  ]

  return (
    <section className="py-16 px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        {/* <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold font-headline text-[#005BAB] mb-4">
            Already trusted by recruitment professionals from
          </h2>
        </div> */}

        {/* Moving Logos Container */}
        <div className="relative">
          <div className="flex animate-scroll">
            {/* First set of logos */}
            {companies.map((company, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center"
                style={{ minWidth: '200px' }}
              >
                <Image
                  src={company.logo}
                  alt={`${company.name} logo`}
                  width={160}
                  height={80}
                  className="h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                />
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {companies.map((company, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center"
                style={{ minWidth: '200px' }}
              >
                <Image
                  src={company.logo}
                  alt={`${company.name} logo`}
                  width={160}
                  height={80}
                  className="h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                />
              </div>
            ))}
          </div>

          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}