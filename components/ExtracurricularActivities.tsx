'use client'

import { Activity } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

// You no longer need to import images, just use the path directly
// Images should be in the 'public/images' directory

interface ExtracurricularActivity {
  name: string
  description: string
  icon: React.ReactNode
  image: string
  additionalInfo: string
  mediaType: 'image' | 'video' | 'iframe'
  mediaSrc?: string
}

export default function ExtracurricularActivities() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const activities: ExtracurricularActivity[] = [
    {
      name: "Karate",
      description: "I have been practicing karate since grade 5, Coach, athlete, strong believer in the Kaizen philosophy",
      icon: <Activity className="w-6 h-6" />,
      image: '/images/KaratePhoto.png', // Use relative path from 'public' folder
      additionalInfo: "I am a coach at my Dojo at Kaizen martial arts where I spearhead the training of the competition team alongside my coach Rob Castro. I achieved 1st que brown belt status (One away from black). Multiple medals. Represented team Ontario at Nationals.",
      mediaType: 'image',
    },
    {
      name: "Boxing",
      description: "Training in boxing for 1-2 years, Train regularly and always follow the sport.",
      icon: <Activity className="w-6 h-6" />,
      image: '/images/GGG.webp', // Use relative path from 'public' folder
      additionalInfo: "Boxing is something I have loved for a while, I train at my Dojo Kaizen martial arts and in the picture is my favourite boxer Triple GGG aka Gennady Gennadyevich Golovkin.",
      mediaType: 'image',
    },
    {
      name: "Gym",
      description: "WE GO JIM!!!",
      icon: <Activity className="w-6 h-6" />,
      image: '/images/GymPhoto.jpeg', // Use relative path from 'public' folder
      additionalInfo: "I go to the gym often to stay on top of my physical fitness, I mostly train for strength because I think being stronger and lifting heavy is impressive and it also helps keep my muscles flexible and loose for sports.",
      mediaType: 'image',
    },
    {
      name: "Gaming",
      description: "Passionate about gaming, exploring new titles, and competing in various online multiplayer games.",
      icon: <Activity className="w-6 h-6" />,
      image: '',
      additionalInfo: "Gaming is a major hobby for me, and I enjoy playing various genres from strategy to FPS. I also participate in online tournaments and enjoy connecting with the gaming community.",
      mediaType: 'video',
      mediaSrc: 'videos/GamingClip.mp4',
    },
    {
      name: "Music",
      description: "I play various instruments and have a deep love for both creating and listening to music.",
      icon: <Activity className="w-6 h-6" />,
      image: '',
      additionalInfo: "I play guitar and piano, and I also write and produce my own music. I love exploring different genres and experimenting with sounds in my free time, below is one of my favourite acoustic pieces.",
      mediaType: 'iframe',
      mediaSrc: "https://www.youtube.com/embed/TpTxdYHLYLo",
    },
    {
      name: "Astronomy",
      description: "Exploring the universe through stargazing, telescopes, and learning about celestial bodies.",
      icon: <Activity className="w-6 h-6" />,
      image: '/images/Astronomy.jpg', // Use relative path from 'public' folder
      additionalInfo: "Astronomy has always fascinated me. I enjoy stargazing and learning about the cosmos. I also have a telescope to observe planets, stars, and galaxies.",
      mediaType: 'image',
    },
  ]

  return (
    <section id="extracurricular" className="py-20 bg-blue-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Extracurricular Activities</h2>
        <div className="space-y-6 md:space-y-0 grid grid-cols-1 md:grid-cols-3 gap-6">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="relative overflow-hidden bg-white rounded-lg shadow-md transition-all duration-300 ease-in-out"
              style={{ height: hoveredIndex === index ? '700px' : '120px' }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="p-2 flex items-start space-x-4 m">
                {/* Commenting out the icon part */}
                {/* <div className="flex-shrink-0">
                  {activity.icon}
                </div> */}
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold">{activity.name}</h3>
                  <p className="text-gray-600">{activity.description}</p>
                </div>
              </div>
              <div
                className={`absolute inset-0 bg-white p-6 transition-all duration-300 ease-in-out ${hoveredIndex === index ? 'translate-y-[120px]' : 'translate-y-full'}`}
              >
                <p className="text-gray-700">{activity.additionalInfo}</p>
                {activity.mediaType === 'video' && (
                  <video
                    controls
                    width="100%"
                    height="400"
                    className="rounded-lg"
                  >
                    <source src={activity.mediaSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
                {activity.mediaType === 'iframe' && (
                  <iframe
                    width="100%"
                    height="400"
                    src={activity.mediaSrc}
                    title={`${activity.name} Video`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                )}
                {activity.mediaType === 'image' && activity.image && (
                  <Image
                    src={activity.image} // The image path should now work properly
                    alt={`${activity.name} image`}
                    width={400}
                    height={400}
                    className="rounded-lg"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
