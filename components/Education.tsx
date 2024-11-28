'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Education() {
  const [activeSkillCategory, setActiveSkillCategory] = useState('Languages')

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

  const skills = {
    Languages: [
      { name: 'C', image: '/Images/C.png' },
      { name: 'C++', image: '/Images/cpp.png' },
      { name: 'Swift', image: '/Images/swift.png' },
      { name: 'Flutter', image: '/Images/flutter.png' },
      { name: 'Java', image: '/Images/Java.png' },
      { name: 'JavaScript', image: '/Images/JavaScript.png' },
      { name: 'TypeScript', image: '/Images/TypeScript.png' },
      { name: 'Python', image: '/Images/Python.png' },
      { name: 'HTML', image: '/Images/HTML.png' },
      { name: 'CSS', image: '/Images/CSS.svg' },
      { name: 'SQL', image: '/Images/SQL.png' },
      { name: 'Bash', image: '/Images/Bash.png' },
      { name: 'PHP', image: '/Images/PHP.png' },
    ],
    Tools: [
      { name: 'SwiftUI', image: '/Images/SwiftUI.png' },
      { name: 'UIKit', image: '/Images/UIkit.webp' },
      { name: 'Charles', image: '/Images/Charles.webp' },
      { name: 'Node.js', image: '/Images/NodeJS.webp' },
      { name: 'Express', image: '/Images/Express.png' },
      { name: 'Firebase', image: '/Images/Firebase.svg' },
      { name: 'Angular', image: '/Images/Angular.png' },
      { name: 'React', image: '/Images/React.png' },
      { name: 'Nextion', image: '/Images/Nextion.png' },
      { name: 'Next.js', image: '/Images/NextJS.svg' },
    ],
    DevOps: [
      { name: 'Git', image: '/Images/Git.png' },
      { name: 'GitHub Actions', image: '/Images/GithubActions.png' },
      { name: 'Docker', image: '/Images/Docker.svg' },
      { name: 'CI/CD Pipelines', image: '/Images/CICDPipelines.png' },
      { name: 'AWS', image: '/Images/AWS.png' },
    ],
  }

  const certifications = [
    {
      name: 'Software Development Certification',
      issuedBy: 'Sertifier',
      url: 'https://verified.sertifier.com/en/verify/84258725943850/?ref=email',
      issuedDate: 'November 2024',
      image: '/Images/BrilliantCatalystCerti.png',
    },
  ]

  return (
    <section id="education" className="py-20 bg-blue-300">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Education</h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">{edu.degree}</h3>
              <p className="text-gray-600">
                {edu.school}, {edu.location}
              </p>
              <p className="text-gray-500">{edu.period}</p>
              <p className="text-gray-700 mt-4">
                Expected to graduate in {edu.period}, focusing on software engineering and development.
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-4">Relevant Coursework</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {courses.map((course, index) => (
              <li key={index} className="bg-white p-4 rounded-lg shadow-md">
                {course}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-4">Skills</h3>
          <div className="flex space-x-4 mb-4">
            {Object.keys(skills).map((category) => (
              <button
                key={category}
                onClick={() => setActiveSkillCategory(category)}
                className={`px-4 py-2 rounded-md ${
                  activeSkillCategory === category
                    ? 'bg-blue-500 text-white'
                    : 'bg-white text-blue-500'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {skills[activeSkillCategory].map((skill, index) => (
              <div key={index} className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
                <Image
                  src={skill.image}
                  alt={`${skill.name} logo`}
                  width={50}
                  height={50}
                  className="mb-2"
                />
                <span className="text-sm text-center">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-4">Certifications</h3>
          {certifications.map((cert, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
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




