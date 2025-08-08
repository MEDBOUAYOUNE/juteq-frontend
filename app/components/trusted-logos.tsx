"use client"

import Image from "next/image"

export default function TrustedLogos() {
  const companies = [
    {
      name: "Randstad",
      logo: "/trusted/randstad.png"
    },
    {
      name: "Adecco",
      logo: "/trusted/adecco.png"
    },
    {
      name: "Sthree",
      logo: "/trusted/sthree.png"
    },
    {
      name: "Michael Page",
      logo: "/trusted/michaelpage.png"
    },
    {
      name: "Kelly Services",
      logo: "/trusted/kelly.svg"
    },
    // {
    //   name: "Antal International",
    //   logo: "/trusted/michael-page-logo.png"
    // },
    {
      name: "TEKsystems",
      logo: "/trusted/teksystems.svg"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold font-headline text-gray-800 mb-4">
            Already trusted by recruitment professionals from
          </h2>
          <div className="w-24 h-1 bg-[#005BAB] mx-auto"></div>
        </div>

        <div className="relative w-full">
          {/* Inner container with padding */}
          <div className="mx-16 relative overflow-hidden">
            
            <div className="logos-track flex">
              {/* First set */}
              {companies.map((company, index) => (
                <div
                  key={`logo-1-${index}`}
                  className="logo-item flex-shrink-0 flex items-center justify-center px-8"
                >
                  <Image
                    src={company.logo}
                    alt={`${company.name} logo`}
                    width={140}
                    height={70}
                    className="h-10 w-auto object-contain filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  />
                </div>
              ))}
              
              {companies.map((company, index) => (
                <div
                  key={`logo-2-${index}`}
                  className="logo-item flex-shrink-0 flex items-center justify-center px-8"
                >
                  <Image
                    src={company.logo}
                    alt={`${company.name} logo`}
                    width={120}
                    height={70}
                    className="h-10 w-auto object-contain filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
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
        
        .logos-track {
          animation: scroll 20s linear infinite;
        }
        
        .logos-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}