'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { BookOpen, Award, Code, PenToolIcon as Tool, Server, ExternalLink, ChevronRight } from 'lucide-react'

type SkillCategory = 'Languages' | 'Tools' | 'DevOps'

interface Skill {
  name: string
  image: string
  proficiency?: number // Optional proficiency level out of 100
}

interface Certification {
  name: string
  issuedBy: string
  url: string
  issuedDate: string
  image: string
}

export default function Education() {
  const [activeSkillCategory, setActiveSkillCategory] = useState<SkillCategory>('Languages')
  const [expandedCert, setExpandedCert] = useState<number | null>(null)

  const education = [
    {
      degree: 'Bachelor of Software Engineering Honours Co-op',
      school: 'Ontario Tech University',
      location: 'Oshawa, ON',
      period: 'Expected April 2027',
      description: 'Focusing on software design, development, and engineering principles with hands-on co-op experience.',
      courses: [
        'Data Structures & Algorithms',
        'Object-Oriented Programming',
        'Software Design Patterns',
        'Database Systems',
      ]
    },
  ]

  const additionalCourses = [
    {
      name: 'Deep Learning',
      provider: 'Stanford University',
      type: 'Online Course'
    },
    {
      name: 'iOS App Development',
      provider: 'Stanford University',
      type: 'Online Course'
    },
    {
      name: 'Advanced Web Developer Bootcamp',
      provider: 'Udemy',
      type: 'Certificate Course'
    },
    {
      name: 'Relational Database Management',
      provider: 'Online Learning Platform',
      type: 'Self-paced Course'
    },
    {
      name: 'Data Structures & Algorithms',
      provider: 'University Course',
      type: 'Academic Course'
    },
    {
      name: 'Object-Oriented Programming',
      provider: 'University Course',
      type: 'Academic Course'
    },
  ]

  const skills: Record<SkillCategory, Skill[]> = {
    Languages: [
      { name: 'C', image: '/images/C.png', proficiency: 85 },
      { name: 'C++', image: '/images/cpp.png', proficiency: 80 },
      { name: 'Swift', image: '/images/swift.png', proficiency: 90 },
      { name: 'Flutter', image: '/images/Flutter.png', proficiency: 75 },
      { name: 'Java', image: '/images/Java.png', proficiency: 85 },
      { name: 'JavaScript', image: '/images/JavaScript.png', proficiency: 95 },
      { name: 'TypeScript', image: '/images/TypeScript.png', proficiency: 90 },
      { name: 'Python', image: '/images/Python.png', proficiency: 85 },
      { name: 'HTML', image: '/images/HTML.png', proficiency: 95 },
      { name: 'CSS', image: '/images/CSS.svg', proficiency: 90 },
      { name: 'SQL', image: '/images/SQL.png', proficiency: 80 },
      { name: 'Bash', image: '/images/Bash.png', proficiency: 70 },
      { name: 'PHP', image: '/images/PHP.png', proficiency: 65 },
    ],
    Tools: [
      { name: 'SwiftUI', image: '/images/SwiftUI.png', proficiency: 85 },
      { name: 'UIKit', image: '/images/UIkit.webp', proficiency: 80 },
      { name: 'Charles', image: '/images/Charles.webp', proficiency: 75 },
      { name: 'Node.js', image: '/images/NodeJS.webp', proficiency: 90 },
      { name: 'Express', image: '/images/Express.png', proficiency: 85 },
      { name: 'Firebase', image: '/images/Firebase.svg', proficiency: 80 },
      { name: 'Angular', image: '/images/Angular.png', proficiency: 75 },
      { name: 'React', image: '/images/React.png', proficiency: 95 },
      { name: 'Nextion', image: '/images/Nextion.png', proficiency: 70 },
      { name: 'Next.js', image: '/images/NextJS.svg', proficiency: 90 },
    ],
    DevOps: [
      { name: 'Git', image: '/images/GIT.png', proficiency: 90 },
      { name: 'GitHub Actions', image: '/images/GithubActions.png', proficiency: 85 },
      { name: 'Docker', image: '/images/Docker.svg', proficiency: 80 },
      { name: 'CI/CD Pipelines', image: '/images/CICDPipelines.png', proficiency: 75 },
      { name: 'AWS', image: '/images/AWS.png', proficiency: 70 },
    ],
  }

  const certifications: Certification[] = [
    {
      name: 'Software Development Certification',
      issuedBy: 'Sertifier',
      url: 'https://verified.sertifier.com/en/verify/84258725943850/?ref=email',
      issuedDate: 'November 2024',
      image: '/images/BrilliantCatalystCerti.png',
    },
    {
      name: 'Wavemakers Program Completion Certification',
      issuedBy: 'iPWRU',
      url: 'https://credentials.wavemakers.network/verifier?id=c0c8d983-9bf0-45fa-b1e3-d3188f34c911&dbl=to',
      issuedDate: 'November 2024',
      image: '/images/WavemakersCerti.png',
    },
  ]

  const getCategoryIcon = (category: SkillCategory) => {
    switch (category) {
      case 'Languages':
        return <Code className="w-5 h-5" />
      case 'Tools':
        return <Tool className="w-5 h-5" />
      case 'DevOps':
        return <Server className="w-5 h-5" />
    }
  }

  return (
    <section id="education" className="py-20 bg-black">
      {/* Red accent lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-800 via-red-600 to-red-800"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-800 via-red-600 to-red-800"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Education & <span className="text-red-600">Skills</span></h2>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">My academic background, technical skills, and professional certifications.</p>
        </div>

        {/* Formal Education */}
        <div className="mb-20">
          <div className="flex items-center mb-8">
            <BookOpen className="text-red-600 w-6 h-6 mr-3" />
            <h3 className="text-2xl font-bold text-white">Formal Education</h3>
          </div>
          
          {education.map((edu, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-800"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/4 bg-gradient-to-br from-gray-800 to-black p-6 flex items-center justify-center">
                  <Image
                    src="/images/otu.png"
                    alt="Ontario Tech University logo"
                    width={180}
                    height={180}
                    className="object-contain"
                  />
                </div>
                <div className="md:w-3/4 p-6">
                  <h4 className="text-xl font-bold text-white mb-2">{edu.degree}</h4>
                  <div className="flex flex-wrap items-center text-gray-300 mb-4">
                    <span className="mr-3">{edu.school}, {edu.location}</span>
                    <span className="px-3 py-1 bg-red-600/20 text-red-400 rounded-full text-sm">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-gray-400 mb-4">{edu.description}</p>
                  
                  <div className="mt-4">
                    <h5 className="text-sm font-semibold text-gray-300 mb-2">Key Courses:</h5>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course, idx) => (
                        <span key={idx} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Courses */}
        <div className="mb-20">
          <div className="flex items-center mb-8">
            <BookOpen className="text-red-600 w-6 h-6 mr-3" />
            <h3 className="text-2xl font-bold text-white">Additional Coursework</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalCourses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-gray-900 rounded-lg p-5 border border-gray-800 hover:border-red-600/50 transition-colors"
              >
                <div className="flex items-start">
                  <div className="bg-red-600/20 rounded-full p-2 mr-4">
                    <BookOpen className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">{course.name}</h4>
                    <p className="text-gray-400">{course.provider}</p>
                    <span className="inline-block mt-2 px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs">
                      {course.type}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="mb-20">
          <div className="flex items-center mb-8">
            <Code className="text-red-600 w-6 h-6 mr-3" />
            <h3 className="text-2xl font-bold text-white">Technical Skills</h3>
          </div>
          
          <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 mb-8">
            <div className="flex flex-wrap border-b border-gray-800">
              {Object.keys(skills).map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveSkillCategory(category as SkillCategory)}
                  className={`flex items-center px-6 py-4 text-sm font-medium transition-colors ${
                    activeSkillCategory === category
                      ? 'bg-red-600/10 text-red-500 border-b-2 border-red-600'
                      : 'text-gray-400 hover:text-gray-300 hover:bg-gray-800'
                  }`}
                >
                  {getCategoryIcon(category as SkillCategory)}
                  <span className="ml-2">{category}</span>
                </button>
              ))}
            </div>
            
            <div className="p-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSkillCategory}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
                >
                  {skills[activeSkillCategory].map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="group"
                    >
                      <div className="bg-gray-800 rounded-lg p-4 flex flex-col items-center hover:bg-gray-750 transition-colors">
                        <div className="relative w-12 h-12 mb-3 flex items-center justify-center">
                          <Image
                            src={skill.image || "/placeholder.svg"}
                            alt={`${skill.name} logo`}
                            width={48}
                            height={48}
                            className="object-contain"
                          />
                        </div>
                        <h4 className="text-sm font-medium text-white mb-2">{skill.name}</h4>
                        
                        {skill.proficiency && (
                          <div className="w-full bg-gray-700 rounded-full h-1.5 mt-1">
                            <div 
                              className="bg-gradient-to-r from-red-600 to-red-500 h-1.5 rounded-full"
                              style={{ width: `${skill.proficiency}%` }}
                            ></div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div>
          <div className="flex items-center mb-8">
            <Award className="text-red-600 w-6 h-6 mr-3" />
            <h3 className="text-2xl font-bold text-white">Certifications</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-red-600/50 transition-all duration-300 ${
                  expandedCert === index ? 'ring-2 ring-red-600' : ''
                }`}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">{cert.name}</h4>
                      <div className="flex flex-wrap items-center text-gray-400 mb-4">
                        <span className="mr-3">Issued by: {cert.issuedBy}</span>
                        <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs">
                          {cert.issuedDate}
                        </span>
                      </div>
                    </div>
                    <div className="bg-red-600/20 rounded-full p-2">
                      <Award className="w-5 h-5 text-red-500" />
                    </div>
                  </div>
                  
                  <div 
                    className={`overflow-hidden transition-all duration-300 ${
                      expandedCert === index ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <div className="mt-4 bg-black/30 rounded-lg overflow-hidden">
                      <Image
                        src={cert.image || "/placeholder.svg"}
                        alt={`${cert.name} Certificate`}
                        width={600}
                        height={400}
                        className="w-full object-contain"
                      />
                    </div>
                  </div>
                  
                  <div className="mt-4 flex items-center justify-between">
                    <button
                      onClick={() => setExpandedCert(expandedCert === index ? null : index)}
                      className="text-red-500 hover:text-red-400 transition-colors text-sm font-medium flex items-center"
                    >
                      {expandedCert === index ? 'Hide Certificate' : 'View Certificate'}
                      <ChevronRight className={`w-4 h-4 ml-1 transition-transform ${
                        expandedCert === index ? 'rotate-90' : ''
                      }`} />
                    </button>
                    
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-500 hover:text-blue-400 transition-colors text-sm"
                    >
                      Verify
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
