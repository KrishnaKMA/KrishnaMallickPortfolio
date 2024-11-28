'use client'

import { useState } from 'react'
import Image from 'next/image'

type SkillCategory = 'Languages' | 'Tools' | 'DevOps'

interface Skill {
  name: string
  image: string
}

export default function Education() {
  const [activeSkillCategory, setActiveSkillCategory] = useState<SkillCategory>('Languages')

  const education = [
    {
      degree: 'Bachelor of Software Engineering Honours Co-op',
      school: 'Ontario Tech University',
      location: 'Oshawa, ON',
      period: 'Expected April 2027',
    },
  ]

  const courses = [
    'Data Structures & Algorithms',
    'Deep Learning (Stanford)',
    'Relational Database Management',
    'iOS App Development (Stanford)',
    'Advanced Web Developer Bootcamp (Udemy)',
    'Object-Oriented Programming',
  ]

  const skills: Record<SkillCategory, Skill[]> = {
    Languages: [
      { name: 'C', image: '/images/C.png' },
      { name: 'C++', image: '/images/cpp.png' },
      { name: 'Swift', image: '/images/swift.png' },
      { name: 'Flutter', image: '/images/Flutter.png' },
      { name: 'Java', image: '/images/Java.png' },
      { name: 'JavaScript', image: '/images/JavaScript.png' },
      { name: 'TypeScript', image: '/images/TypeScript.png' },
      { name: 'Python', image: '/images/Python.png' },
      { name: 'HTML', image: '/images/HTML.png' },
      { name: 'CSS', image: '/images/CSS.svg' },
      { name: 'SQL', image: '/images/SQL.png' },
      { name: 'Bash', image: '/images/Bash.png' },
      { name: 'PHP', image: '/images/PHP.png' },
    ],
    Tools: [
      { name: 'SwiftUI', image: '/images/SwiftUI.png' },
      { name: 'UIKit', image: '/images/UIkit.webp' },
      { name: 'Charles', image: '/images/Charles.webp' },
      { name: 'Node.js', image: '/images/NodeJS.webp' },
      { name: 'Express', image: '/images/Express.png' },
      { name: 'Firebase', image: '/images/Firebase.svg' },
      { name: 'Angular', image: '/images/Angular.png' },
      { name: 'React', image: '/images/React.png' },
      { name: 'Nextion', image: '/images/Nextion.png' },
      { name: 'Next.js', image: '/images/NextJS.svg' },
    ],
    DevOps: [
      { name: 'Git', image: '/images/GIT.png' },
      { name: 'GitHub Actions', image: '/images/GithubActions.png' },
      { name: 'Docker', image: '/images/Docker.svg' },
      { name: 'CI/CD Pipelines', image: '/images/CICDPipelines.png' },
      { name: 'AWS', image: '/images/AWS.png' },
    ],
  }

  const certifications = [
    {
      name: 'Software Development Certification',
      issuedBy: 'Sertifier',
      url: 'https://verified.sertifier.com/en/verify/84258725943850/?ref=email',
      issuedDate: 'November 2024',
      image: '/images/BrilliantCatalystCerti.png',
    },
  ]

  return (
    <section id="education" className="py-20 bg-blue-300">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Education</h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between min-h-[100px]">
              <div>
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                <p className="text-gray-600">
                  {edu.school}, {edu.location}
                </p>
                <p className="text-gray-500">{edu.period}</p>
              </div>
              <div className="ml-4">
                <Image
                  src="/images/otu.png"
                  alt="Ontario Tech University logo"
                  width={300}
                  height={300}
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-4">Relevant Coursework</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {courses.map((course, index) => (
              <li key={index} className="bg-white p-4 rounded-lg shadow-md min-h-[70px]">
                {course}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-4">Skills</h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {Object.keys(skills).map((category) => (
              <button
                key={category}
                onClick={() => setActiveSkillCategory(category as SkillCategory)}
                className={`px-5 py-3 rounded-md text-sm ${activeSkillCategory === category
                    ? 'bg-blue-500 text-white'
                    : 'bg-white text-blue-500'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
            {skills[activeSkillCategory].map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-white p-4 rounded-full shadow-md justify-center min-h-[100px] max-h-[100px] w-full"
              >
                <Image
                  src={skill.image}
                  alt={`${skill.name} logo`}
                  width={40}
                  height={40}
                  className="mb-2"
                />
                <span className="text-xs text-center">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-4">Certifications</h3>
          {certifications.map((cert, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md min-h-[200px]">
              <h4 className="text-xl font-semibold">{cert.name}</h4>
              <p className="text-gray-600">Issued by: {cert.issuedBy}</p>
              <p className="text-gray-500">Issued on: {cert.issuedDate}</p>
              <Image
                src={cert.image}
                alt={`${cert.name} Certificate`}
                width={200}
                height={120}
                className="rounded-lg mt-4"
              />
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 mt-2 inline-block"
              >
                Verify Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


