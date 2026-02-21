"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Trophy, ExternalLink } from 'lucide-react'

const skills = {
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
    { name: 'Tailwind', image: '/images/Tailwind.png' },
    { name: 'Figma', image: '/images/Figma.png' },
    { name: 'Supabase', image: '/images/Supabase.png' },
    { name: 'Notion', image: '/images/Notion.png' },
  ],
  DevOps: [
    { name: 'Git', image: '/images/Git.png' },
    { name: 'GitHub Actions', image: '/images/GithubActions.png' },
    { name: 'Docker', image: '/images/Docker.svg' },
    { name: 'CI/CD Pipelines', image: '/images/CICDPipelines.png' },
    { name: 'AWS', image: '/images/AWS.png' },
  ],
}

type SkillCategory = keyof typeof skills
type Skill = { name: string; image: string }

const getTechnologyIcon = (tech: string): string | null => {
  for (const category in skills) {
    const key = category as SkillCategory
    const skill = (skills[key] as Skill[]).find((item) => item.name === tech)
    if (skill) return skill.image
  }
  return null
}

// Distinct gradient backgrounds per project
const PROJECT_GRADIENTS = [
  'linear-gradient(135deg, #020b18 0%, #0a1628 50%, #0e2040 100%)',   // NeuroDetect — deep midnight blue
  'linear-gradient(135deg, #0d1a0d 0%, #122912 50%, #1a3d1a 100%)',   // Straights — forest green
]

export default function Projects() {
  const projects: Array<{
    title: string
    description: string
    technologies: string[]
    date: string
    award?: string
    link?: string
    image?: string
  }> = [
    {
      title: 'NeuroDetect',
      description:
        'AI-powered brain MRI diagnostic assistant that classifies tumor types in real-time with confidence scores and Grad-CAM visual heatmaps, designed to augment radiologist workflows.',
      technologies: ['Python', 'JavaScript', 'HTML'],
      date: 'February 2026',
      award: 'MLH HackHive 2026 · 1st Place Overall',
      link: 'https://devpost.com/software/neurodetect-rst574',
      image: '/images/NeuroDetect.png',
    },
    {
      title: 'Straights',
      description:
        'An interactive and fully automated poker-like game playable by 0 to 4 players. Developed in C++ using strict object-oriented programming techniques and the Model-View-Controller (MVC) design pattern.',
      technologies: ['C++'],
      date: 'May 2024',
      link: 'https://github.com/KrishnaKMA/Straights',
    },
  ]

  return (
    <section
      id="projects"
      className="section-pad"
      style={{ background: 'transparent' }}
    >
      <div className="porto-container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '64px' }}
        >
          <span className="section-label">Portfolio</span>
          <h2 className="section-heading">Projects</h2>
        </motion.div>

        {/* 3-column card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: '24px' }}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              className="porto-card"
              style={{ aspectRatio: '3 / 4', position: 'relative' }}
            >
              {/* Background — image if available, otherwise gradient */}
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-center"
                  style={{ zIndex: 0 }}
                />
              ) : (
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: PROJECT_GRADIENTS[index],
                    zIndex: 0,
                  }}
                />
              )}

              {/* Award badge — top left */}
              {project.award && (
                <div
                  style={{
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                    zIndex: 2,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '5px 10px',
                    background: 'rgba(224,90,58,0.15)',
                    border: '1px solid rgba(224,90,58,0.4)',
                    borderRadius: '6px',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  <Trophy style={{ width: '12px', height: '12px', color: '#e05a3a' }} />
                  <span style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.06em', color: '#e05a3a', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
                    {project.award}
                  </span>
                </div>
              )}

              {/* Tech icons — top right */}
              <div
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  zIndex: 2,
                  display: 'flex',
                  gap: '8px',
                }}
              >
                {project.technologies.slice(0, 2).map((tech, idx) => {
                  const icon = getTechnologyIcon(tech)
                  return icon ? (
                    <div
                      key={idx}
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '10px',
                        background: 'rgba(255,255,255,0.92)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <Image
                        src={icon}
                        alt={tech}
                        width={22}
                        height={22}
                        className="object-contain"
                      />
                    </div>
                  ) : null
                })}
              </div>

              {/* Bottom-up overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.45) 45%, transparent 100%)',
                  zIndex: 1,
                }}
              />

              {/* Content — bottom center */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '24px 20px',
                  zIndex: 2,
                  textAlign: 'center',
                }}
              >
                <p
                  style={{
                    fontSize: '11px',
                    fontWeight: 500,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: '#e05a3a',
                    marginBottom: '6px',
                  }}
                >
                  {project.date}
                </p>

                <h3
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: '26px',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    color: '#ffffff',
                    lineHeight: '1.1',
                    marginBottom: '10px',
                  }}
                >
                  {project.title}
                </h3>

                <p
                  style={{
                    fontSize: '13px',
                    fontWeight: 300,
                    color: 'rgba(255,255,255,0.6)',
                    lineHeight: '1.55',
                    marginBottom: '14px',
                  }}
                >
                  {project.description}
                </p>

                {/* Tech tags */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '6px',
                    justifyContent: 'center',
                    marginBottom: '14px',
                  }}
                >
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="skill-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Link button */}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '7px 16px',
                      background: 'rgba(224,90,58,0.12)',
                      border: '1px solid rgba(224,90,58,0.35)',
                      borderRadius: '6px',
                      fontSize: '12px',
                      fontWeight: 500,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      color: '#e05a3a',
                      textDecoration: 'none',
                      transition: 'background 0.2s ease, border-color 0.2s ease',
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(224,90,58,0.22)'
                      ;(e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(224,90,58,0.65)'
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(224,90,58,0.12)'
                      ;(e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(224,90,58,0.35)'
                    }}
                  >
                    View Project
                    <ExternalLink style={{ width: '11px', height: '11px' }} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
