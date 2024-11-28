'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Experience() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const experiences = [
    {
      company: 'Ontario Tech Space and Rocketry',
      position: 'Software Developer',
      period: 'October 2024 - Present',
      location: 'Oshawa, ON',
      logo: '/images/ot-space.png', // Unique image for this experience
      description: [
        'Apart of the Software depart whos main focus is to store data from launches and create prediction models using various different coding languages. ', 'Iam also looking towrds on helping out in the avionics department aswell and getting experience when it comes to embedded systems in rockets'
      ],
    },
    {
      company: 'Ontario Tech Racing',
      position: 'Embedded Software Engineer',
      period: 'July 2024 - Present',
      location: 'Oshawa, ON',
      logo: '/images/otr-logo.png', // Unique image for this experience
      description: [
        'Designed and built STM32 and NXP S32K-based Electronic systems such as Relow oven, Heads up display, Electronic Control units for vehicle sub-systems.',
        'Implemented CI/CD workflows for PCB design, Python, and C programming incorporating GitHub Actions pipelines, with flexibility for future integration with SIL/HIL testing.',
        'Assisted in the development of a HUD what consistsed of ESP-32 microprocessor with the use of Solidworks',
      ],
    },
    {
      company: 'Blueprint',
      position: 'Website / Software Developer',
      period: 'Nov 2024 - Present',
      location: 'Oshawa, ON',
      logo: '/images/Blueprint.png', // Unique image for this experience
      description: [
        'Developed the front end of the company website to improve user experience using the Next.js framework',
        'Implemented dynamic content updates and interactive features using React.js, optimizing website performance and responsiveness.',
        'Mastering the core vlaues of the company and applying tech for social good :)',
      ],
    },
    {
      company: 'SIGMA Metals Co.',
      position: 'Machine Programmer',
      period: 'March 2021 - Sept 2021',
      location: 'Brampton, ON',
      logo: '/images/SigmaMetals.jpg', // Unique image for this experience
      description: [
        'Orchestrated the setup and optimization of precision machinery using G-code, resulting in a 25% increase in production efficiency and a 15% reduction in setup time.',
        'Operated heavy machinery with precision, producing parts for multiple suppliers with a 99.9% accuracy rate, exceeding quality standards for 10+ Industries and 70+ companies.',
        'Developed and optimized CNC programs for milling and turning operations, increasing production efficiency by 20% and reducing material waste by 15% over a 6-month period.',
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-blue-200">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden bg-gray-100 rounded-lg shadow-md transition-all duration-300 ease-in-out"
              style={{ height: hoveredIndex === index ? '400px' : '120px' }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="p-6 flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Image
                    src={exp.logo}  // Use the unique image URL
                    alt={`${exp.company} logo`}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold">{exp.position}</h3>
                  <p className="text-gray-600">{exp.company} | {exp.location}</p>
                  <p className="text-gray-500">{exp.period}</p>
                </div>
              </div>
              <div 
                className={`absolute inset-0 bg-white p-6 transition-all duration-300 ease-in-out ${
                  hoveredIndex === index ? 'translate-y-[120px]' : 'translate-y-full'
                }`}
              >
                <h4 className="text-lg font-semibold mb-2">Responsibilities & Achievements:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-2 overflow-y-auto max-h-[220px]">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

