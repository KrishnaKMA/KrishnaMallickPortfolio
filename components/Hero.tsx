"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Script from "next/script"
import { ArrowRight, Mail, Github, Linkedin } from 'lucide-react'

export default function Hero() {
  const [vantaEffect, setVantaEffect] = useState(null)
  const vantaRef = useRef(null)
  const [vantaLoaded, setVantaLoaded] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Fade in animation
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!vantaLoaded) return

    // Only initialize if not already initialized
    if (!vantaEffect) {
      // @ts-ignore - Vanta is loaded via script tags
      const effect = window.VANTA.NET({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        backgroundColor: 0x0,
        color: 0xff0000,
        points: 14.0,
        maxDistance: 25.0,
        spacing: 18.0,
        showDots: true,
      })
      setVantaEffect(effect)
    }

    // Cleanup function
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect, vantaLoaded])

  return (
    <>
      {/* Load required scripts */}
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
        onLoad={() => console.log("Three.js loaded")}
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js"
        onLoad={() => setVantaLoaded(true)}
      />

      <section
        id="about"
        className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden"
      >
        {/* Vanta.js container */}
        <div ref={vantaRef} className="absolute inset-0 z-0" />
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70 z-0"></div>

        {/* Red accent lines */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-800 via-red-600 to-red-800 z-10"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-800 via-red-600 to-red-800 z-10"></div>
        
        {/* Content container */}
        <div 
          className={`container mx-auto px-4 z-10 transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
            {/* Left column - Image */}
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-red-800 rounded-full blur opacity-70"></div>
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden border-2 border-red-600 p-1 bg-black">
                <Image
                  src="/images/KrishnaMallick.jpeg"
                  alt="Krishna Mallick"
                  fill
                  className="rounded-full object-cover"
                  priority
                />
              </div>
            </div>
            
            {/* Right column - Content */}
            <div className="max-w-xl text-center lg:text-left">
              <div className="space-y-4">
                <div>
                  <p className="text-red-500 font-medium mb-2">Hello, I'm</p>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2">
                    Krishna <span className="text-red-600">Mallick</span>
                  </h1>
                  <div className="h-1 w-20 bg-red-600 mx-auto lg:mx-0 mb-4"></div>
                  <h2 className="text-xl sm:text-2xl text-gray-300 font-light">
                    Software Engineering Student
                  </h2>
                </div>
                
                <p className="text-gray-300 leading-relaxed">
                  Passionate software engineering student with experience in embedded systems, web development, and machine
                  programming. Skilled in multiple programming languages and frameworks, with a focus on creating efficient
                  and innovative solutions.
                </p>
                
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start mt-6">
                  <a 
                    href="#projects" 
                    className="px-6 py-3 bg-gradient-to-r from-red-700 to-red-600 text-white rounded-full font-medium flex items-center gap-2 hover:shadow-lg hover:shadow-red-600/20 transition-all duration-300 group"
                  >
                    View My Work
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a 
                    href="#contact" 
                    className="px-6 py-3 bg-transparent border border-red-600 text-red-500 rounded-full font-medium hover:bg-red-600/10 transition-all duration-300"
                  >
                    Contact Me
                  </a>
                </div>
                
                {/* Social Links */}
                <div className="flex justify-center lg:justify-start space-x-5 mt-6">
                  <a 
                    href="mailto:krishnamallick46@hotmail.com" 
                    className="p-3 bg-gray-900/80 rounded-full hover:bg-red-600/20 hover:text-red-500 transition-all duration-300 text-gray-300"
                    aria-label="Email"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/krishna-mallick-a558b6260/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-900/80 rounded-full hover:bg-red-600/20 hover:text-red-500 transition-all duration-300 text-gray-300"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://github.com/KrishnaKMA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-900/80 rounded-full hover:bg-red-600/20 hover:text-red-500 transition-all duration-300 text-gray-300"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
