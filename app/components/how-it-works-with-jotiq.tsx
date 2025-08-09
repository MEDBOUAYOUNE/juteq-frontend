import React from 'react';
import { Upload, Rocket, BarChart3 } from 'lucide-react';

const ClearStepsBlock = () => {
  const steps = [
    {
      number: 1,
      icon: <Upload className="w-10 h-10 text-blue-500" strokeWidth={1.5} />,
      title: "Upload Contacts",
      description: "Import your client lead lists into JOTIQ in seconds."
    },
    {
      number: 2,
      icon: <Rocket className="w-10 h-10 text-blue-500" strokeWidth={1.5} />,
      title: "Launch Campaigns",
      description: "Create personalized AI email and voice campaigns with just a few clicks."
    },
    {
      number: 3,
      icon: <BarChart3 className="w-10 h-10 text-blue-500" strokeWidth={1.5} />,
      title: "Track & Win",
      description: "Monitor replies and results in real time, book meetings, and fill roles faster."
    }
  ];

  return (
    <div className="w-full py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-gray-900">
            How It Works With <span className="text-blue-500">JOTIQ</span>
          </h2>
        </div>

        {/* Horizontal Steps Container */}
        <div className="relative max-w-6xl mx-auto">
          <div className="flex items-start justify-between">
            {steps.map((step, index) => (
              <React.Fragment key={index}>
                {/* Step Item */}
                <div className="flex flex-col items-center text-center relative z-10 w-72">
                  {/* Step Number Circle - positioned absolute */}
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-xl z-20">
                    {step.number}
                  </div>
                  
                  {/* Icon Container */}
                  <div className="w-32 h-32 rounded-full border-2 border-gray-200 bg-gray-50 flex items-center justify-center mb-6 mt-6">
                    {step.icon}
                  </div>

                  {/* Step Title */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  
                  {/* Step Description */}
                  <p className="text-gray-600 text-sm leading-relaxed px-4">
                    {step.description}
                  </p>
                </div>

                {/* Connecting Arrow Between Steps */}
                {index < steps.length - 1 && (
                  <div className="relative flex items-start pt-16 w-24">
                    <svg 
                      viewBox="0 0 100 50" 
                      className="w-full"
                      style={{ marginTop: '-8px' }}
                    >
                      <defs>
                        <marker
                          id={`arrowhead-${index}`}
                          markerWidth="8"
                          markerHeight="8"
                          refX="7"
                          refY="4"
                          orient="auto"
                        >
                          <polygon
                            points="0 0, 8 4, 0 8"
                            fill="#3B82F6"
                          />
                        </marker>
                      </defs>
                      {/* Curved path that alternates direction */}
                      <path
                        d={index % 2 === 0 
                          ? "M 5 25 Q 50 5 95 25"  // Curve up
                          : "M 5 25 Q 50 45 95 25" // Curve down
                        }
                        stroke="#3B82F6"
                        strokeWidth="2"
                        fill="none"
                        strokeDasharray="5,5"
                        markerEnd={`url(#arrowhead-${index})`}
                        opacity="0.5"
                      />
                    </svg>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Subtitle */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600">
            From upload to outreach, JOTIQ simplifies every step.
          </p>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-10">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors shadow-lg hover:shadow-xl">
            Get Started Free
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClearStepsBlock;
