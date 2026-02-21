'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { MapPin, Calendar } from 'lucide-react'

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 80%', 'end 20%'],
  })

  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1])

  const experiences = [
    {
      company: 'DigiWell Marketing',
      position: 'AI/ML Engineer (Riipen)',
      period: 'January 2026 - Present',
      location: 'Remote',
      logo: '/images/Digiwell.png',
      skills: [],
      color: '#2ecc71',
    },
    {
      company: 'EdVisingU',
      position: 'Technical / Operations Lead (Riipen Labs)',
      period: 'January 2026 - February 2026',
      location: 'Remote',
      logo: '/images/EdVisingU.jpg',
      skills: [],
      color: '#3498db',
    },
    {
      company: 'CI-Tech',
      position: 'VP of External',
      period: 'November 2025 - Present',
      location: 'Oshawa, ON',
      logo: '/images/CiTech.jpg',
      skills: [],
      color: '#e05a3a',
    },
    {
      company: 'Wouessi Digital',
      position: 'Software Engineering Intern',
      period: 'March 2025 - May 2025',
      location: 'Remote',
      logo: '/images/Wouessi.webp',
      skills: ['HTML', 'CSS', 'JavaScript', 'Kubernetes', 'Jenkins'],
      color: '#e05a3a',
    },
    {
      company: 'OpenCore Group',
      position: 'Software Engineering Intern',
      period: 'January 2025 - September 2025',
      location: 'Remote',
      logo: '/images/OpenCore.png',
      skills: ['Next.js', 'React', 'JavaScript', 'Notion API'],
      color: '#e05a3a',
    },
    {
      company: 'Blueprint',
      position: 'Website / Software Developer',
      period: 'November 2024 - Present',
      location: 'Oshawa, ON',
      logo: '/images/Blueprint.png',
      skills: ['Next.js', 'React.js', 'Front-end Development', 'UI/UX'],
      color: '#9b59b6',
    },
    {
      company: 'Ontario Tech Space and Rocketry',
      position: 'Software Developer',
      period: 'October 2024 - March 2025',
      location: 'Oshawa, ON',
      logo: '/images/ot-space.png',
      skills: ['Data Storage', 'Predictive Modeling', 'Embedded Systems'],
      color: '#4a90d9',
    },
    {
      company: 'Ontario Tech Racing',
      position: 'Embedded Software Engineer',
      period: 'July 2024 - March 2025',
      location: 'Oshawa, ON',
      logo: '/images/otr-logo.png',
      skills: ['STM32', 'NXP S32K', 'CI/CD', 'GitHub Actions', 'ESP32', 'SolidWorks'],
      color: '#44cc88',
    },
    {
      company: 'SIGMA Metals Co.',
      position: 'Machine Programmer',
      period: 'March 2021 - September 2021',
      location: 'Brampton, ON',
      logo: '/images/SigmaMetals.jpg',
      skills: ['G-code', 'CNC Programming', 'Precision Machinery', 'Quality Control'],
      color: '#e67e22',
    },
  ]

  return (
    <section
      id="experience"
      className="section-pad"
      style={{ background: 'transparent' }}
      ref={sectionRef}
    >
      <div className="porto-container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '80px' }}
        >
          <span className="section-label">Career</span>
          <h2 className="section-heading">Experience</h2>
          <p
            style={{
              fontSize: '16px',
              fontWeight: 300,
              color: 'rgba(255,255,255,0.5)',
              maxWidth: '560px',
              lineHeight: '1.7',
              marginTop: '16px',
            }}
          >
            My journey through various roles and organizations, building expertise in software development and
            engineering.
          </p>
        </motion.div>

        {/* Timeline */}
        <div
          style={{
            position: 'relative',
          }}
        >
          {/* Center line — faint static track */}
          <div
            className="timeline-center-line"
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              width: '1px',
              background: 'rgba(255,255,255,0.08)',
            }}
          />

          {/* Animated fill line */}
          <motion.div
            style={{
              position: 'absolute',
              top: 0,
              width: '1px',
              background: 'linear-gradient(to bottom, #e05a3a, rgba(224,90,58,0.2))',
              scaleY: lineScaleY,
              transformOrigin: 'top',
              height: '100%',
            }}
            className="timeline-center-line"
          />

          {/* Entries */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0',
            }}
          >
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0

              return (
                <div
                  key={index}
                  className="timeline-entry"
                  style={{
                    position: 'relative',
                    display: 'grid',
                    paddingBottom: index < experiences.length - 1 ? '56px' : '0',
                  }}
                >
                  {/* Glowing dot on center line */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="timeline-dot-pulse"
                    style={{
                      position: 'absolute',
                      top: '28px',
                      width: '14px',
                      height: '14px',
                      borderRadius: '50%',
                      background: exp.color,
                      zIndex: 3,
                    }}
                    // Positioned via CSS class
                  />

                  {/* Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.55, ease: 'easeOut', delay: 0.05 }}
                    whileHover={{ boxShadow: '0 0 30px rgba(224,90,58,0.18)' }}
                    className={`timeline-card ${isLeft ? 'timeline-card-left' : 'timeline-card-right'}`}
                    style={{
                      background: 'rgba(0,0,0,0.5)',
                      backdropFilter: 'blur(8px)',
                      WebkitBackdropFilter: 'blur(8px)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: '12px',
                      overflow: 'hidden',
                      transition: 'box-shadow 0.3s ease',
                    }}
                  >
                    {/* Two-column header */}
                    <div className="exp-card-inner">
                      {/* Left — logo */}
                      <div className="exp-card-logo-col">
                        <div
                          style={{
                            position: 'relative',
                            width: '52px',
                            height: '52px',
                            borderRadius: '10px',
                            overflow: 'hidden',
                            background: 'rgba(255,255,255,0.06)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            flexShrink: 0,
                          }}
                        >
                          <Image
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>

                      {/* Divider */}
                      <div style={{ width: '1px', background: 'rgba(255,255,255,0.08)', alignSelf: 'stretch', flexShrink: 0 }} />

                      {/* Right — info */}
                      <div style={{ flex: 1, minWidth: 0, padding: '16px 18px' }}>
                        <h3
                          style={{
                            fontSize: '15px',
                            fontWeight: 600,
                            color: '#ffffff',
                            marginBottom: '3px',
                            lineHeight: '1.3',
                          }}
                        >
                          {exp.position}
                        </h3>
                        <p
                          style={{
                            fontSize: '13px',
                            fontWeight: 500,
                            color: '#e05a3a',
                            marginBottom: '8px',
                          }}
                        >
                          {exp.company}
                        </p>
                        <div
                          style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '10px',
                            fontSize: '11px',
                            color: 'rgba(255,255,255,0.38)',
                          }}
                        >
                          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                            <Calendar style={{ width: '11px', height: '11px' }} />
                            {exp.period}
                          </span>
                          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                            <MapPin style={{ width: '11px', height: '11px' }} />
                            {exp.location}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Skills — below header, full width */}
                    {exp.skills.length > 0 && (
                      <div
                        style={{
                          borderTop: '1px solid rgba(255,255,255,0.06)',
                          padding: '12px 18px',
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: '5px',
                        }}
                      >
                        {exp.skills.map((skill, i) => (
                          <span key={i} className="skill-tag">{skill}</span>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Timeline layout styles */}
      <style>{`
        .timeline-center-line {
          left: calc(50% - 0.5px);
        }

        .timeline-dot-pulse {
          left: calc(50% - 7px);
        }

        .timeline-entry {
          grid-template-columns: 1fr 1fr;
        }

        .timeline-card-left {
          grid-column: 1;
          margin-right: 40px;
        }

        .timeline-card-right {
          grid-column: 2;
          margin-left: 40px;
        }

        /* Card inner two-column layout */
        .exp-card-inner {
          display: flex;
          align-items: stretch;
        }

        .exp-card-logo-col {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 88px;
          flex-shrink: 0;
          padding: 16px;
        }

        @media (max-width: 768px) {
          .timeline-center-line {
            left: 14px;
          }

          .timeline-dot-pulse {
            left: 7px;
          }

          .timeline-entry {
            grid-template-columns: 1fr;
          }

          .timeline-card-left,
          .timeline-card-right {
            grid-column: 1;
            margin-left: 48px;
            margin-right: 0;
          }

          .exp-card-inner {
            flex-direction: column;
          }

          .exp-card-logo-col {
            width: 100%;
            justify-content: flex-start;
            padding: 16px 18px 0;
          }
        }
      `}</style>
    </section>
  )
}
