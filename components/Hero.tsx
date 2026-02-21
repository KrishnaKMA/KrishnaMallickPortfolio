"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Mail, LucideLinkedin, LucideGithub } from "lucide-react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 150)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      id="about"
      style={{
        position: "relative",
        minHeight: "100vh",
        background: "transparent",
        display: "flex",
        alignItems: "flex-end",
      }}
    >
      {/* Profile image — viewport-centered on the right */}
      <div
        className="hidden lg:block"
        style={{
          position: "absolute",
          top: "50%",
          right: "60px",
          transform: "translateY(-50%)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      >
        <div style={{ position: "relative", pointerEvents: "auto" }}>
          {/* Glow behind the box */}
          <div
            style={{
              position: "absolute",
              inset: "-10px",
              borderRadius: "26px",
              background: "linear-gradient(135deg, #e05a3a, #c0392b)",
              filter: "blur(22px)",
              opacity: 0.4,
            }}
          />
          {/* Rounded-corner photo */}
          <div
            style={{
              position: "relative",
              width: "380px",
              height: "500px",
              borderRadius: "20px",
              overflow: "hidden",
              border: "1.5px solid rgba(224,90,58,0.35)",
            }}
          >
            <Image
              src="/images/KrishnaMallick.jpg"
              alt="Krishna Mallick"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </div>
      </div>

      {/* Main content — anchored to bottom */}
      <div
        className="porto-container"
        style={{
          position: "relative",
          zIndex: 2,
          paddingTop: "90px",
          paddingBottom: "80px",
          width: "100%",
        }}
      >
        <div
          style={{
            transition: "opacity 1s ease, transform 1s ease",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            textShadow: "0 2px 12px rgba(0,0,0,0.9)",
          }}
        >
          {/* Sub-label */}
          <span className="section-label" style={{ color: "#e05a3a", marginBottom: "12px" }}>
            Hello, I&apos;m
          </span>

          {/* Massive name */}
          <h1 className="hero-heading" style={{ marginBottom: "20px" }}>
            Krishna
            <br />
            Mallick
          </h1>

          {/* Role */}
          <p
            style={{
              fontSize: "clamp(16px, 2vw, 22px)",
              fontWeight: 300,
              color: "rgba(255,255,255,0.55)",
              letterSpacing: "0.04em",
              marginBottom: "20px",
            }}
          >
            Software Engineering Student
          </p>

          {/* Description */}
          <p
            style={{
              fontSize: "16px",
              fontWeight: 300,
              color: "rgba(255,255,255,0.6)",
              maxWidth: "520px",
              lineHeight: "1.75",
              marginBottom: "36px",
            }}
          >
            Passionate software engineering student with experience in embedded systems, web development, and machine
            programming. Skilled in multiple programming languages and frameworks, with a focus on creating efficient
            and innovative solutions.
          </p>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-6">
            <a href="#projects" className="btn-text">
              View My Work
            </a>
            <a href="#contact" className="btn-text">
              Contact Me
            </a>

            <div
              style={{
                width: "1px",
                height: "22px",
                background: "rgba(255,255,255,0.18)",
                flexShrink: 0,
              }}
            />

            {/* Social icons */}
            <div className="flex gap-2">
              <a href="mailto:krishnamallick46@hotmail.com" className="social-icon" aria-label="Email">
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/krishna-mallick-a558b6260/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="LinkedIn"
              >
                <LucideLinkedin className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/KrishnaKMA"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="GitHub"
              >
                <LucideGithub className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
