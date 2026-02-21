'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { BookOpen, Award, Code, ExternalLink, ChevronRight } from 'lucide-react'

type SkillCategory = 'Languages' | 'Tools' | 'DevOps'

interface Skill {
  name: string
  image: string
  proficiency?: number
}

interface Certification {
  name: string
  issuedBy: string
  url: string
  issuedDate: string
  image: string
}

export default function Education() {
  const [expandedCert, setExpandedCert] = useState<number | null>(null)
  const [pausedRow, setPausedRow] = useState<number | null>(null)

  const education = [
    {
      degree: 'Bachelor of Software Engineering Honours Co-op',
      school: 'Ontario Tech University',
      location: 'Oshawa, ON',
      period: 'Expected April 2027',
      description:
        'Focusing on software design, development, and engineering principles with hands-on co-op experience.',
      courses: [
        'Data Structures & Algorithms',
        'Object-Oriented Programming',
        'Software Design Patterns',
        'Database Systems',
      ],
    },
  ]

  const additionalCourses = [
    { name: 'Deep Learning', provider: 'Stanford University', type: 'Online Course' },
    { name: 'iOS App Development', provider: 'Stanford University', type: 'Online Course' },
    { name: 'Advanced Web Developer Bootcamp', provider: 'Udemy', type: 'Certificate Course' },
    { name: 'Relational Database Management', provider: 'Online Learning Platform', type: 'Self-paced Course' },
    { name: 'Data Structures & Algorithms', provider: 'University Course', type: 'Academic Course' },
    { name: 'Object-Oriented Programming', provider: 'University Course', type: 'Academic Course' },
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

  return (
    <section id="education" className="section-pad" style={{ background: 'transparent' }}>
      <div className="porto-container">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '64px' }}
        >
          <span className="section-label">Background</span>
          <h2 className="section-heading">Education &amp; Skills</h2>
          <p style={{ fontSize: '16px', fontWeight: 300, color: 'rgba(255,255,255,0.5)', maxWidth: '560px', lineHeight: '1.7', marginTop: '16px' }}>
            My academic background, technical skills, and professional certifications.
          </p>
        </motion.div>

        {/* Formal Education */}
        <div style={{ marginBottom: '72px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '28px' }}>
            <BookOpen style={{ color: '#e05a3a', width: '20px', height: '20px' }} />
            <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '28px', letterSpacing: '0.05em', color: '#ffffff' }}>
              Formal Education
            </h3>
          </div>

          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="porto-card-flat"
            >
              <div className="flex flex-col md:flex-row">
                <div
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    padding: '32px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRight: '1px solid rgba(255,255,255,0.06)',
                    flexShrink: 0,
                  }}
                  className="md:w-48"
                >
                  <Image
                    src="/images/otu.png"
                    alt="Ontario Tech University logo"
                    width={140}
                    height={140}
                    className="object-contain"
                  />
                </div>
                <div style={{ padding: '28px' }}>
                  <h4 style={{ fontSize: '18px', fontWeight: 600, color: '#ffffff', marginBottom: '10px' }}>
                    {edu.degree}
                  </h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                    <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.55)' }}>
                      {edu.school}, {edu.location}
                    </span>
                    <span style={{ padding: '3px 12px', background: 'rgba(224,90,58,0.12)', border: '1px solid rgba(224,90,58,0.25)', borderRadius: '4px', fontSize: '12px', color: '#e05a3a', letterSpacing: '0.05em' }}>
                      {edu.period}
                    </span>
                  </div>
                  <p style={{ fontSize: '14px', fontWeight: 300, color: 'rgba(255,255,255,0.5)', marginBottom: '16px', lineHeight: '1.65' }}>
                    {edu.description}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {edu.courses.map((course, idx) => (
                      <span key={idx} className="skill-tag">{course}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Courses */}
        <div style={{ marginBottom: '72px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '28px' }}>
            <BookOpen style={{ color: '#e05a3a', width: '20px', height: '20px' }} />
            <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '28px', letterSpacing: '0.05em', color: '#ffffff' }}>
              Additional Coursework
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: '16px' }}>
            {additionalCourses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.07 }}
                className="porto-card-flat"
                style={{ padding: '20px' }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(224,90,58,0.1)', border: '1px solid rgba(224,90,58,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <BookOpen style={{ width: '16px', height: '16px', color: '#e05a3a' }} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '15px', fontWeight: 500, color: '#ffffff', marginBottom: '4px' }}>{course.name}</h4>
                    <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)', marginBottom: '8px' }}>{course.provider}</p>
                    <span className="skill-tag">{course.type}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technical Skills */}
        <div style={{ marginBottom: '72px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '48px' }}>
            <Code style={{ color: '#e05a3a', width: '20px', height: '20px' }} />
            <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '28px', letterSpacing: '0.05em', color: '#ffffff' }}>
              Technical Skills
            </h3>
          </div>

          {(
            [
              { key: 'Languages' as SkillCategory, direction: 'left', duration: '35s' },
              { key: 'Tools' as SkillCategory, direction: 'right', duration: '28s' },
              { key: 'DevOps' as SkillCategory, direction: 'left', duration: '22s' },
            ] as Array<{ key: SkillCategory; direction: 'left' | 'right'; duration: string }>
          ).map(({ key, direction, duration }, rowIndex) => {
            const categorySkills = skills[key]
            // Ensure enough copies so the total track width >> container width for seamless loop
            const rawMult = Math.ceil(3000 / (categorySkills.length * 104))
            const multiplier = rawMult % 2 === 0 ? Math.max(2, rawMult) : Math.max(2, rawMult + 1)
            const items = Array.from({ length: multiplier }, () => categorySkills).flat()

            return (
              <div key={key} style={{ marginBottom: '32px' }}>
                {/* Category label */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                  <Code style={{ color: '#e05a3a', width: '14px', height: '14px' }} />
                  <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '18px', letterSpacing: '0.12em', color: '#e05a3a', textTransform: 'uppercase' }}>
                    {key}
                  </span>
                </div>

                {/* Marquee row */}
                <div
                  style={{
                    overflow: 'hidden',
                    WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
                    maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
                  }}
                  onMouseEnter={() => setPausedRow(rowIndex)}
                  onMouseLeave={() => setPausedRow(null)}
                >
                  <div
                    style={{
                      display: 'flex',
                      gap: '16px',
                      width: 'max-content',
                      animation: `${direction === 'left' ? 'marquee-left' : 'marquee-right'} ${duration} linear infinite`,
                      animationPlayState: pausedRow === rowIndex ? 'paused' : 'running',
                      paddingBottom: '4px',
                    }}
                  >
                    {items.map((skill, i) => (
                      <div
                        key={i}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '72px',
                          height: '72px',
                          flexShrink: 0,
                          userSelect: 'none',
                        }}
                      >
                        <Image
                          src={skill.image || '/placeholder.svg'}
                          alt={skill.name}
                          width={56}
                          height={56}
                          className="object-contain"
                          style={{ width: '56px', height: '56px' }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Certifications */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '28px' }}>
            <Award style={{ color: '#e05a3a', width: '20px', height: '20px' }} />
            <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '28px', letterSpacing: '0.05em', color: '#ffffff' }}>
              Certifications
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '20px' }}>
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="porto-card-flat"
                style={expandedCert === index ? { borderColor: 'rgba(224,90,58,0.4)' } : {}}
              >
                <div style={{ padding: '24px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                    <div>
                      <h4 style={{ fontSize: '17px', fontWeight: 600, color: '#ffffff', marginBottom: '6px' }}>
                        {cert.name}
                      </h4>
                      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '8px' }}>
                        <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)' }}>Issued by: {cert.issuedBy}</span>
                        <span className="skill-tag">{cert.issuedDate}</span>
                      </div>
                    </div>
                    <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(224,90,58,0.1)', border: '1px solid rgba(224,90,58,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Award style={{ width: '16px', height: '16px', color: '#e05a3a' }} />
                    </div>
                  </div>

                  <div style={{ overflow: 'hidden', maxHeight: expandedCert === index ? '400px' : '0', transition: 'max-height 0.35s ease', marginBottom: expandedCert === index ? '16px' : '0' }}>
                    <div style={{ borderRadius: '8px', overflow: 'hidden', background: 'rgba(0,0,0,0.3)' }}>
                      <Image src={cert.image || '/placeholder.svg'} alt={`${cert.name} Certificate`} width={600} height={400} className="w-full object-contain" />
                    </div>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <button
                      onClick={() => setExpandedCert(expandedCert === index ? null : index)}
                      className="btn-text"
                      style={{ fontSize: '13px', display: 'flex', alignItems: 'center', gap: '4px' }}
                    >
                      {expandedCert === index ? 'Hide Certificate' : 'View Certificate'}
                      <ChevronRight style={{ width: '14px', height: '14px', transform: expandedCert === index ? 'rotate(90deg)' : 'none', transition: 'transform 0.2s ease' }} />
                    </button>
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '13px', color: '#4a90d9', textDecoration: 'none' }}
                    >
                      Verify
                      <ExternalLink style={{ width: '12px', height: '12px' }} />
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
