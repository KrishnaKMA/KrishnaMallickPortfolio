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
      name: "Karate",
      description: "Practicing since grade 5, Coach, athlete, believer in Kaizen philosophy",
      image: '/images/karate-bg.jpg',
      additionalInfo: "I am a coach at my Dojo at Kaizen martial arts where I spearhead the training of the competition team alongside my coach Rob Castro. I achieved 1st que brown belt status (One away from black). Multiple medals. Represented team Ontario at Nationals.",
      mediaType: 'video',
      mediaSrc: 'videos/KarateVid.mp4',
      icon: <Award className="w-8 h-8" />,
      color: "from-orange-600 to-red-600"
    },
    {
      name: "Boxing",
      description: "Training for 1-2 years, regular practice and following the sport",
      image: '/images/GGG.webp',
      additionalInfo: "Boxing is something I have loved for a while, I train at my Dojo Kaizen martial arts and in the picture is my favourite boxer Triple GGG aka Gennady Gennadyevich Golovkin.",
      mediaType: 'image',
      icon: <Boxing className="w-8 h-8" />,
      color: "from-blue-600 to-indigo-600"
    },
    {
      name: "Gym",
      description: "Regular fitness training focused on strength and flexibility",
      image: '/images/GymPhoto.jpeg',
      additionalInfo: "I go to the gym often to stay on top of my physical fitness, I mostly train for strength because I think being stronger and lifting heavy is impressive and it also helps keep my muscles flexible and loose for sports.",
      mediaType: 'image',
      icon: <Dumbbell className="w-8 h-8" />,
      color: "from-green-600 to-emerald-600"
    },
    {
      name: "Gaming",
      description: "Passionate gamer exploring new titles and competing online",
      image: '/images/gaming-bg.jpg',
      additionalInfo: "Gaming is a major hobby for me, and I enjoy playing various genres from strategy to FPS. I also participate in online tournaments and enjoy connecting with the gaming community.",
      mediaType: 'video',
      mediaSrc: 'videos/GamingClip.mp4',
      icon: <Gamepad className="w-8 h-8" />,
      color: "from-purple-600 to-violet-600"
    },
    {
      name: "Music",
      description: "Playing instruments and creating music across different genres",
      image: '/images/music-bg.jpg',
      additionalInfo: "I play guitar and piano, and I also write and produce my own music. I love exploring different genres and experimenting with sounds in my free time, below is one of my favourite acoustic pieces.",
      mediaType: 'iframe',
      mediaSrc: "https://www.youtube.com/embed/TpTxdYHLYLo",
      icon: <Music className="w-8 h-8" />,
      color: "from-yellow-600 to-amber-600"
    },
    {
      name: "Astronomy",
      description: "Exploring the universe through stargazing and learning about celestial bodies",
      image: '/images/Astronomy.jpg',
      additionalInfo: "Astronomy has always fascinated me. I enjoy stargazing and learning about the cosmos. I also have a telescope to observe planets, stars, and galaxies.",
      mediaType: 'image',
      icon: <Star className="w-8 h-8" />,
      color: "from-sky-600 to-cyan-600"
    },
  ]

  const handleVideoLoad = () => {
    setIsLoading(false)
  }

  return (
    <section id="extracurricular" className="relative min-h-screen py-20 bg-black overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
      
      {/* Red accent lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-800 via-red-600 to-red-800"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-800 via-red-600 to-red-800"></div>

      {/* Expanded View with Animation */}
      <AnimatePresence>
        {expandedIndex !== null && (
          <motion.div
            key="expandedView"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setExpandedIndex(null)}
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-gray-900 rounded-xl overflow-hidden max-w-5xl w-full shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setExpandedIndex(null)}
                className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-red-600 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="flex flex-col md:flex-row">
                {/* Media Section */}
                <div className="w-full md:w-1/2 relative bg-black min-h-[300px] flex items-center justify-center">
                  {activities[expandedIndex].mediaType === 'video' && (
                    <>
                      {isLoading && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-10 h-10 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
                        </div>
                      )}
                      <video 
                        ref={videoRef}
                        controls 
                        className="w-full h-full object-cover max-h-[500px]"
                        onLoadedData={handleVideoLoad}
                      >
                        <source src={activities[expandedIndex].mediaSrc} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </>
                  )}
                  {activities[expandedIndex].mediaType === 'iframe' && (
                    <iframe
                      width="100%"
                      height="100%"
                      style={{ minHeight: '300px' }}
                      src={activities[expandedIndex].mediaSrc}
                      title={`${activities[expandedIndex].name} Video`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="border-0"
                    ></iframe>
                  )}
                  {activities[expandedIndex].mediaType === 'image' && activities[expandedIndex].image && (
                    <Image 
                      src={activities[expandedIndex].image || "/placeholder.svg"} 
                      alt={`${activities[expandedIndex].name}`} 
                      width={800} 
                      height={600} 
                      className="w-full h-full object-cover max-h-[500px]"
                    />
                  )}
                </div>
                
                {/* Content Section */}
                <div className="w-full md:w-1/2 p-8 flex flex-col">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${activities[expandedIndex].color} mb-4 p-3 text-white`}>
                    {activities[expandedIndex].icon}
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white mb-2">{activities[expandedIndex].name}</h3>
                  
                  <div className="w-20 h-1 bg-red-600 mb-6"></div>
                  
                  <p className="text-gray-300 text-lg mb-4">{activities[expandedIndex].description}</p>
                  
                  <div className="bg-black/30 p-4 rounded-lg mb-6">
                    <p className="text-gray-300">{activities[expandedIndex].additionalInfo}</p>
                  </div>
                  
                  <button
                    onClick={() => setExpandedIndex(null)}
                    className="mt-auto px-6 py-3 bg-gradient-to-r from-red-700 to-red-600 text-white rounded-lg hover:from-red-800 hover:to-red-700 transition-all duration-300 flex items-center justify-center gap-2 group"
                  >
                    Close
                    <X className="w-4 h-4 group-hover:rotate-90 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Normal View */}
      <div className="relative container mx-auto px-4 z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Extracurricular <span className="text-red-600">Activities</span></h2>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">Exploring my passions and interests outside of academics and professional work.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 rounded-xl blur-sm opacity-70 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative h-full bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-800 group-hover:border-red-600 transition-colors">
                {/* Card Header with Image */}
                <div className="h-40 relative overflow-hidden">
                  <Image 
                    src={activity.image || '/images/placeholder.jpg'} 
                    alt={activity.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                  
                  {/* Icon */}
                  <div className={`absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-to-r ${activity.color} flex items-center justify-center text-white shadow-lg`}>
                    {activity.icon}
                  </div>
                </div>
                
                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{activity.name}</h3>
                  <p className="text-gray-300 mb-4">{activity.description}</p>
                  
                  <button 
                    onClick={() => setExpandedIndex(index)}
                    className="flex items-center text-red-500 hover:text-red-400 transition-colors font-medium group/btn"
                  >
                    Learn more
                    <ChevronRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
