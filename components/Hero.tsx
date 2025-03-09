"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Script from "next/script"

export default function Hero() {
  const [vantaEffect, setVantaEffect] = useState(null)
  const vantaRef = useRef(null)
  const [vantaLoaded, setVantaLoaded] = useState(false)

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
        points: 10.0,
        maxDistance: 20.0,
        spacing: 16.0,
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
        className="relative min-h-screen justify-center flex flex-col md:flex-row bg-black pt-7 margin-black"
      >
        {/* Vanta.js container */}
        <div ref={vantaRef} className="absolute inset-0 z-0" />

        {/* Red Bottom Border */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-red-600 z-10"></div>

        {/* Content - full width on mobile and 1/3 width on medium screens */}
        <div className="w-full md:w-1/3 flex flex-col justify-center items-center p-8 rounded-lg shadow-lg text-center z-10 relative">
          {/* Name */}
          <h1 className="text-4xl font-bold mb-4 text-red-600">Krishna Mallick</h1>

          {/* Image - circular and centered */}
          <div className="relative w-72 h-72 mb-6">
            <Image
              src="/images/KrishnaMallick.jpeg"
              alt="Krishna Mallick"
              width={300}
              height={300}
              className="rounded-full object-cover"
            />
          </div>

          {/* Description */}
          <h2 className="text-2xl text-white mb-8">Software Engineering Student</h2>
          <p className="text-white mb-6">
            Passionate software engineering student with experience in embedded systems, web development, and machine
            programming. Skilled in multiple programming languages and frameworks, with a focus on creating efficient
            and innovative solutions.
          </p>

          {/* Social Links */}
          <div className="mt-1 flex justify-center space-x-4">
            <a href="mailto:krishnamallick46@hotmail.com" className="hover:opacity-80" aria-label="Email">
              <Image src="/images/EmailIcon.png" alt="Email Icon" width={40} height={40} />
            </a>
            <a
              href="https://www.linkedin.com/in/krishna-mallick-a558b6260/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80"
              aria-label="LinkedIn"
            >
              <Image src="/images/LinkedinIcon.webp" alt="LinkedIn Icon" width={40} height={40} />
            </a>
            <a
              href="https://github.com/KrishnaKMA"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80"
              aria-label="GitHub"
            >
              <Image src="/images/GithubIcon.png" alt="Github Icon" width={40} height={40} />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

