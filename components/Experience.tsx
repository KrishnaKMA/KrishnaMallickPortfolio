'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp, MapPin, Calendar, Briefcase } from 'lucide-react'

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

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
      skills: ['Next.js', 'React', 'JavaScript', 'Notion API'],
      color: '#FF4500'
    },
    {
      company: 'Ontario Tech Space and Rocketry',
      position: 'Software Developer',
      period: 'October 2024 - March 2025',
      location: 'Oshawa, ON',
      logo: '/images/ot-space.png',
      description: [
        'Part of the Software department that focused on data storage from launches and predictive modeling using various programming languages.',
        'Also in the futere planned on assisting in the avionics department to gain experience with embedded systems in rockets.',
        'assited in updates for website'
      ],
      skills: ['Data Storage', 'Predictive Modeling', 'Embedded Systems'],
      color: '#0066CC'
    },
    {
      company: 'Ontario Tech Racing',
      position: 'Embedded Software Engineer',
      period: 'July 2024 - March 2025',
      location: 'Oshawa, ON',
      logo: '/images/otr-logo.png',
      description: [
        'Designed and built STM32 and NXP S32K-based electronic systems such as reflow ovens, HUDs, and ECUs for vehicle subsystems.',
        'Developed a personal HUD with an ESP32 microprocessor, figma for front end, integrating it with SolidWorks.',
        'Learned (But not applied) how to program various microprocessors for DAQ and sub vechicle systems'
      ],
      skills: ['STM32', 'NXP S32K', 'CI/CD', 'GitHub Actions', 'ESP32', 'SolidWorks'],
      color: '#00CC66'
    },
    {
      company: 'Blueprint',
      position: 'Website / Software Developer',
      period: 'November 2024 - Present',
      location: 'Oshawa, ON',
      logo: '/images/Blueprint.png',
      description: [
        'assisting on the development of websites for NPOs using next.js and various other tools ',
        'helped Develop the front end of the company website using Next.js to improve user experience.',
        'Implemented dynamic content updates and interactive features using React.js, optimizing performance and responsiveness.',
        'Learning and applying the core values of the company while using tech for social good.',
      ],
      skills: ['Next.js', 'React.js', 'Front-end Development', 'UI/UX'],
      color: '#9933CC'
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
      skills: ['G-code', 'CNC Programming', 'Precision Machinery', 'Quality Control'],
      color: '#FF6600'
    },
  ]

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <section id="experience" className="relative py-20 bg-gradient-to-b from-black via-gray-900 to-black border-b border-red-600">
      {/* Red accent lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-800 via-red-600 to-red-800"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-800 via-red-600 to-red-800"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Professional <span className="text-red-600">Experience</span></h2>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">My journey through various roles and organizations, building expertise in software development and engineering.</p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 sm:left-1/2 transform sm:-translate-x-1/2 w-1 bg-gradient-to-b from-red-800 via-red-600 to-red-800 h-full rounded-full hidden sm:block"></div>

          {experiences.map((exp, index) => (
            <div key={index} className="mb-12 relative">
              <div className={`flex flex-col sm:flex-row items-center ${index % 2 === 0 ? 'sm:flex-row-reverse' : ''}`}>
                {/* Timeline dot */}
                <div className="absolute left-0 sm:left-1/2 transform sm:-translate-x-1/2 w-6 h-6 rounded-full border-4 border-red-600 bg-black z-10 hidden sm:block"></div>
                
                {/* Content card */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`w-full sm:w-5/12 ${index % 2 === 0 ? 'sm:pl-12' : 'sm:pr-12'}`}
                >
                  <div 
                    className={`bg-gray-800 rounded-xl shadow-lg overflow-hidden border-l-4`}
                    style={{ borderColor: exp.color }}
                  >
                    {/* Card header */}
                    <div className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="relative w-16 h-16 flex-shrink-0 rounded-full overflow-hidden bg-gray-700 p-0.5">
                          <Image
                            src={exp.logo || "/placeholder.svg"}
                            alt={`${exp.company} logo`}
                            fill
                            className="object-cover rounded-full"
                          />
                        </div>
                        <div className="flex-grow">
                          <h3 className="text-xl font-bold text-white">{exp.position}</h3>
                          <h4 className="text-lg font-medium text-red-500">{exp.company}</h4>
                          
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-2 text-sm text-gray-400">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <span>{exp.period}</span>
                            </div>
                            <div className="hidden sm:block text-gray-500">•</div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <button 
                        onClick={() => toggleExpand(index)}
                        className="mt-4 w-full flex items-center justify-between px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-md text-white transition-colors"
                      >
                        <span className="flex items-center gap-2">
                          <Briefcase className="w-4 h-4" />
                          <span>Responsibilities</span>
                        </span>
                        {expandedIndex === index ? (
                          <ChevronUp className="w-5 h-5" />
                        ) : (
                          <ChevronDown className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                    
                    {/* Expandable content */}
                    <AnimatePresence>
                      {expandedIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6">
                            <ul className="space-y-2 text-gray-300 list-disc pl-5">
                              {exp.description.map((item, i) => (
                                <li key={i}>{item}</li>
                              ))}
                            </ul>
                            
                            <div className="mt-4">
                              <h5 className="text-sm font-medium text-gray-400 mb-2">Skills & Technologies</h5>
                              <div className="flex flex-wrap gap-2">
                                {exp.skills.map((skill, i) => (
                                  <span 
                                    key={i} 
                                    className="px-2 py-1 bg-gray-700 text-xs rounded-full text-gray-300"
                                    style={{ borderLeft: `2px solid ${exp.color}` }}
                                  >
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
