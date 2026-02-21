'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronRight, Dumbbell, Gamepad, Music, Star, Award, BoxIcon as Boxing } from 'lucide-react'

interface ExtracurricularActivity {
  name: string
  description: string
  image: string
  additionalInfo: string
  mediaType: 'image' | 'video' | 'iframe'
  mediaSrc?: string
  icon: React.ReactNode
  color: string
}

export default function ExtracurricularActivities() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  const activities: ExtracurricularActivity[] = [
    {
      name: 'Karate',
      description: 'Practicing since grade 5, Coach, athlete, believer in Kaizen philosophy',
      image: '/images/karate-bg.jpg',
      additionalInfo:
        'I am a coach at my Dojo at Kaizen martial arts where I spearhead the training of the competition team alongside my coach Rob Castro. I achieved 1st que brown belt status (One away from black). Multiple medals. Represented team Ontario at Nationals.',
      mediaType: 'video',
      mediaSrc: 'videos/KarateVid.mp4',
      icon: <Award className="w-5 h-5" />,
      color: '#e05a3a',
    },
    {
      name: 'Boxing',
      description: 'Training for 1-2 years, regular practice and following the sport',
      image: '/images/GGG.webp',
      additionalInfo:
        'Boxing is something I have loved for a while, I train at my Dojo Kaizen martial arts and in the picture is my favourite boxer Triple GGG aka Gennady Gennadyevich Golovkin.',
      mediaType: 'image',
      icon: <Boxing className="w-5 h-5" />,
      color: '#4a90d9',
    },
    {
      name: 'Gym',
      description: 'Regular fitness training focused on strength and flexibility',
      image: '/images/GymPhoto.jpeg',
      additionalInfo:
        'I go to the gym often to stay on top of my physical fitness, I mostly train for strength because I think being stronger and lifting heavy is impressive and it also helps keep my muscles flexible and loose for sports.',
      mediaType: 'image',
      icon: <Dumbbell className="w-5 h-5" />,
      color: '#44cc88',
    },
    {
      name: 'Gaming',
      description: 'Passionate gamer exploring new titles and competing online',
      image: '/images/gaming-bg.jpg',
      additionalInfo:
        'Gaming is a major hobby for me, and I enjoy playing various genres from strategy to FPS. I also participate in online tournaments and enjoy connecting with the gaming community.',
      mediaType: 'video',
      mediaSrc: 'videos/GamingClip.mp4',
      icon: <Gamepad className="w-5 h-5" />,
      color: '#9b59b6',
    },
    {
      name: 'Music',
      description: 'Playing instruments and creating music across different genres',
      image: '/images/music-bg.jpg',
      additionalInfo:
        'I play guitar and piano, and I also write and produce my own music. I love exploring different genres and experimenting with sounds in my free time, below is one of my favourite acoustic pieces.',
      mediaType: 'iframe',
      mediaSrc: 'https://www.youtube.com/embed/TpTxdYHLYLo',
      icon: <Music className="w-5 h-5" />,
      color: '#f0c040',
    },
    {
      name: 'Astronomy',
      description: 'Exploring the universe through stargazing and learning about celestial bodies',
      image: '/images/Astronomy.jpg',
      additionalInfo:
        'Astronomy has always fascinated me. I enjoy stargazing and learning about the cosmos. I also have a telescope to observe planets, stars, and galaxies.',
      mediaType: 'image',
      icon: <Star className="w-5 h-5" />,
      color: '#40c0d0',
    },
  ]

  const handleVideoLoad = () => setIsLoading(false)

  return (
    <section
      id="extracurricular"
      className="section-pad"
      style={{ background: 'transparent', position: 'relative' }}
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
          <span className="section-label">Life Outside Work</span>
          <h2 className="section-heading">Extracurricular</h2>
          <p style={{ fontSize: '16px', fontWeight: 300, color: 'rgba(255,255,255,0.5)', maxWidth: '560px', lineHeight: '1.7', marginTop: '16px' }}>
            Exploring my passions and interests outside of academics and professional work.
          </p>
        </motion.div>

        {/* 3-col activity cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: '24px' }}>
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              className="porto-card"
              style={{ cursor: 'pointer' }}
              onClick={() => setExpandedIndex(index)}
            >
              {/* Card image */}
              <div style={{ position: 'relative', height: '180px', overflow: 'hidden' }}>
                <Image
                  src={activity.image || '/images/placeholder.jpg'}
                  alt={activity.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 60%)' }} />
                {/* Icon badge top-right */}
                <div
                  style={{
                    position: 'absolute',
                    top: '14px',
                    right: '14px',
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px',
                    background: 'rgba(255,255,255,0.92)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#000000',
                  }}
                >
                  {activity.icon}
                </div>
              </div>

              {/* Card body */}
              <div style={{ padding: '20px' }}>
                <h3
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: '22px',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    color: '#ffffff',
                    marginBottom: '8px',
                  }}
                >
                  {activity.name}
                </h3>
                <p style={{ fontSize: '13px', fontWeight: 300, color: 'rgba(255,255,255,0.55)', lineHeight: '1.6', marginBottom: '16px' }}>
                  {activity.description}
                </p>
                <span className="btn-text" style={{ fontSize: '12px', display: 'inline-flex', alignItems: 'center', gap: '4px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  Learn more
                  <ChevronRight className="w-3 h-3" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {expandedIndex !== null && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0,0,0,0.88)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              zIndex: 100,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px',
              overflowY: 'auto',
            }}
            onClick={() => setExpandedIndex(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 24 }}
              transition={{ duration: 0.3, delay: 0.05 }}
              style={{
                background: '#111111',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '16px',
                overflow: 'hidden',
                maxWidth: '900px',
                width: '100%',
                boxShadow: '0 24px 80px rgba(0,0,0,0.8)',
                position: 'relative',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setExpandedIndex(null)}
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  zIndex: 10,
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'rgba(0,0,0,0.6)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                }}
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex flex-col md:flex-row">
                {/* Media */}
                <div
                  style={{ background: '#000000', minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}
                  className="w-full md:w-1/2"
                >
                  {activities[expandedIndex].mediaType === 'video' && (
                    <>
                      {isLoading && (
                        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <div style={{ width: '36px', height: '36px', border: '3px solid #e05a3a', borderTopColor: 'transparent', borderRadius: '50%' }} className="animate-spin" />
                        </div>
                      )}
                      <video ref={videoRef} controls style={{ width: '100%', maxHeight: '480px', objectFit: 'cover' }} onLoadedData={handleVideoLoad}>
                        <source src={activities[expandedIndex].mediaSrc} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </>
                  )}
                  {activities[expandedIndex].mediaType === 'iframe' && (
                    <iframe
                      width="100%"
                      height="300"
                      src={activities[expandedIndex].mediaSrc}
                      title={`${activities[expandedIndex].name} Video`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{ border: 'none' }}
                    />
                  )}
                  {activities[expandedIndex].mediaType === 'image' && activities[expandedIndex].image && (
                    <Image
                      src={activities[expandedIndex].image || '/placeholder.svg'}
                      alt={activities[expandedIndex].name}
                      width={800}
                      height={600}
                      style={{ width: '100%', maxHeight: '480px', objectFit: 'cover' }}
                    />
                  )}
                </div>

                {/* Content */}
                <div style={{ padding: '40px 32px', display: 'flex', flexDirection: 'column' }} className="w-full md:w-1/2">
                  <div
                    style={{
                      width: '48px', height: '48px', borderRadius: '50%',
                      background: activities[expandedIndex].color,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: '#ffffff', marginBottom: '20px',
                    }}
                  >
                    {activities[expandedIndex].icon}
                  </div>

                  <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '36px', letterSpacing: '0.04em', textTransform: 'uppercase', color: '#ffffff', marginBottom: '4px' }}>
                    {activities[expandedIndex].name}
                  </h3>
                  <div style={{ width: '40px', height: '2px', background: '#e05a3a', marginBottom: '20px' }} />

                  <p style={{ fontSize: '15px', fontWeight: 300, color: 'rgba(255,255,255,0.7)', lineHeight: '1.7', marginBottom: '16px' }}>
                    {activities[expandedIndex].description}
                  </p>

                  <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '16px', marginBottom: '24px' }}>
                    <p style={{ fontSize: '14px', fontWeight: 300, color: 'rgba(255,255,255,0.6)', lineHeight: '1.7' }}>
                      {activities[expandedIndex].additionalInfo}
                    </p>
                  </div>

                  <button
                    onClick={() => setExpandedIndex(null)}
                    className="btn-text"
                    style={{ marginTop: 'auto', alignSelf: 'flex-start', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                  >
                    Close
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
