'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Experience() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const experiences = [
    {
      company: 'OpenCore Group',
      position: 'Software Developer Trainee',
      period: 'February 2025 - Present',
      location: 'Remote',
      logo: '/images/OpenCore.png',
      description: [
        'Developing a hillchart embedded into Notion so customers can see the progress of the service they have a contract for, using Next.js.',
      ],
    },
    {
      company: 'Ontario Tech Space and Rocketry',
      position: 'Software Developer',
      period: 'October 2024 - Present',
      location: 'Oshawa, ON',
      logo: '/images/ot-space.png',
      description: [
        'Part of the Software department focusing on data storage from launches and predictive modeling using various programming languages.',
        'Also assisting in the avionics department to gain experience with embedded systems in rockets.',
      ],
    },
    {
      company: 'Ontario Tech Racing',
      position: 'Embedded Software Engineer',
      period: 'July 2024 - Present',
      location: 'Oshawa, ON',
      logo: '/images/otr-logo.png',
      description: [
        'Designed and built STM32 and NXP S32K-based electronic systems such as reflow ovens, HUDs, and ECUs for vehicle subsystems.',
        'Implemented CI/CD workflows for PCB design, Python, and C programming, incorporating GitHub Actions pipelines with future SIL/HIL testing.',
        'Developed a HUD with an ESP32 microprocessor, integrating it with SolidWorks.',
      ],
    },
    {
      company: 'Blueprint',
      position: 'Website / Software Developer',
      period: 'November 2024 - Present',
      location: 'Oshawa, ON',
      logo: '/images/Blueprint.png',
      description: [
        'Developed the front end of the company website using Next.js to improve user experience.',
        'Implemented dynamic content updates and interactive features using React.js, optimizing performance and responsiveness.',
        'Learning and applying the core values of the company while using tech for social good.',
      ],
    },
    {
      company: 'SIGMA Metals Co.',
      position: 'Machine Programmer',
      period: 'March 2021 - September 2021',
      location: 'Brampton, ON',
      logo: '/images/SigmaMetals.jpg',
      description: [
        'Optimized precision machinery using G-code, increasing production efficiency by 25% and reducing setup time by 15%.',
        'Operated heavy machinery, producing high-accuracy parts for multiple suppliers with a 99.9% quality standard.',
        'Developed and optimized CNC programs, improving efficiency by 20% and reducing material waste by 15%.',
      ],
    },
  ]

  return (
    <section id="experience" className="relative py-20 text-white border-b-4 border-red-600">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        src="/videos/Experiencebg.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="container mx-auto px-6 relative z-10 bg-gray-900 bg-opacity-0 p-8 rounded-lg">
        <h2 className="text-3xl font-bold text-center text-red-600 mb-8">Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden bg-gray-800 border border-red-600 rounded-lg shadow-md transition-all duration-300 ease-in-out"
              style={{ height: hoveredIndex === index ? '400px' : '160px' }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="p-6 flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Image
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold">{exp.position}</h3>
                  <p className="text-gray-400">{exp.company} | {exp.location}</p>
                  <p className="text-gray-500">{exp.period}</p>
                </div>
              </div>
              <div 
                className={`absolute inset-0 bg-gray-700 text-white p-6 transition-all duration-300 ease-in-out ${
                  hoveredIndex === index ? 'translate-y-[120px]' : 'translate-y-full'
                }`}
              >
                <h4 className="text-lg font-semibold mb-2 text-red-400">Responsibilities & Achievements:</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-2 overflow-y-auto max-h-[220px]">
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