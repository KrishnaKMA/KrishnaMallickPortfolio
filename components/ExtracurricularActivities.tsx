'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

interface ExtracurricularActivity {
  name: string
  description: string
  image: string
  additionalInfo: string
  mediaType: 'image' | 'video' | 'iframe'
  mediaSrc?: string
}

export default function ExtracurricularActivities() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const activities: ExtracurricularActivity[] = [
    {
      name: "Karate",
      description: "I have been practicing karate since grade 5, Coach, athlete, strong believer in the Kaizen philosophy",
      image: '',
      additionalInfo: "I am a coach at my Dojo at Kaizen martial arts where I spearhead the training of the competition team alongside my coach Rob Castro. I achieved 1st que brown belt status (One away from black). Multiple medals. Represented team Ontario at Nationals.",
      mediaType: 'video',
      mediaSrc: 'videos/KarateVid.mov',
    },
    {
      name: "Boxing",
      description: "Training in boxing for 1-2 years, Train regularly and always follow the sport.",
      image: '/images/GGG.webp',
      additionalInfo: "Boxing is something I have loved for a while, I train at my Dojo Kaizen martial arts and in the picture is my favourite boxer Triple GGG aka Gennady Gennadyevich Golovkin.",
      mediaType: 'image',
    },
    {
      name: "Gym",
      description: "WE GO JIM!!!",
      image: '/images/GymPhoto.jpeg',
      additionalInfo: "I go to the gym often to stay on top of my physical fitness, I mostly train for strength because I think being stronger and lifting heavy is impressive and it also helps keep my muscles flexible and loose for sports.",
      mediaType: 'image',
    },
    {
      name: "Gaming",
      description: "Passionate about gaming, exploring new titles, and competing in various online multiplayer games.",
      image: '',
      additionalInfo: "Gaming is a major hobby for me, and I enjoy playing various genres from strategy to FPS. I also participate in online tournaments and enjoy connecting with the gaming community.",
      mediaType: 'video',
      mediaSrc: 'videos/GamingClip.mp4',
    },
    {
      name: "Music",
      description: "I play various instruments and have a deep love for both creating and listening to music.",
      image: '',
      additionalInfo: "I play guitar and piano, and I also write and produce my own music. I love exploring different genres and experimenting with sounds in my free time, below is one of my favourite acoustic pieces.",
      mediaType: 'iframe',
      mediaSrc: "https://www.youtube.com/embed/TpTxdYHLYLo",
    },
    {
      name: "Astronomy",
      description: "Exploring the universe through stargazing, telescopes, and learning about celestial bodies.",
      image: '/images/Astronomy.jpg',
      additionalInfo: "Astronomy has always fascinated me. I enjoy stargazing and learning about the cosmos. I also have a telescope to observe planets, stars, and galaxies.",
      mediaType: 'image',
    },
  ]

  return (
    <section id="extracurricular" className="relative min-h-screen py-20 border-b-4 border-red-600 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="/videos/bg-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Expanded View with Animation */}
      <AnimatePresence>
        {expandedIndex !== null && (
          <motion.div
            key="expandedView"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center z-50 min-h-screen"
          >
            <div className="flex flex-col md:flex-row w-full h-full p-6">
              {/* Left - Text */}
              <div className="w-full md:w-1/2 flex flex-col justify-center text-white">
                <h3 className="text-3xl font-bold text-red-500">{activities[expandedIndex].name}</h3>
                <p className="mt-2">{activities[expandedIndex].description}</p>
                <p className="mt-4 text-gray-300">{activities[expandedIndex].additionalInfo}</p>
                <button
                  onClick={() => setExpandedIndex(null)}
                  className="mt-6 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                >
                  Close
                </button>
              </div>

              {/* Right - Media */}
              <div className="w-full md:w-1/2 flex items-center justify-center">
                {activities[expandedIndex].mediaType === 'video' && (
                  <video controls width="100%" height="auto" className="rounded-lg shadow-lg">
                    <source src={activities[expandedIndex].mediaSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
                {activities[expandedIndex].mediaType === 'iframe' && (
                  <iframe
                    width="100%"
                    height="300"
                    src={activities[expandedIndex].mediaSrc}
                    title={`${activities[expandedIndex].name} Video`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-lg shadow-lg"
                  ></iframe>
                )}
                {activities[expandedIndex].mediaType === 'image' && activities[expandedIndex].image && (
                  <Image src={activities[expandedIndex].image} alt={`${activities[expandedIndex].name} image`} width={400} height={400} className="rounded-lg shadow-lg" />
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Normal View */}
      <div className="relative container mx-auto px-4 z-10">
        <h2 className="text-3xl font-bold text-center mb-10 text-red-600">Extracurricular Activities</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className="w-[220px] h-[154px] flex flex-col justify-center items-center text-center bg-white bg-opacity-80 backdrop-blur-md rounded-lg shadow-md border-2 border-red-600 cursor-pointer p-4 transition-all"
              onClick={() => setExpandedIndex(index)}
            >
              <h3 className="text-xl font-semibold">{activity.name}</h3>
              <p className="text-black">{activity.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
