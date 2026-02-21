"use client"

import { useState, useEffect, useRef } from "react"
import { Link } from "react-scroll"
import { Menu, X, Mail, LucideLinkedin, LucideGithub } from "lucide-react"

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("about")
  const [isVisible, setIsVisible] = useState(true)

  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY

      // Track active section
      const sections = ["about", "extracurricular", "education", "experience", "projects", "contact"]
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 80 && rect.bottom >= 80) {
            setActiveSection(section)
            break
          }
        }
      }

      // Hide on scroll down (only when not at very top)
      if (currentY > 80) {
        if (currentY > lastScrollY.current) {
          setIsVisible(false) // scrolling down → hide
        }
      } else {
        setIsVisible(true) // at top → always show
      }

      lastScrollY.current = currentY
    }

    const handleMouseMove = (e: MouseEvent) => {
      // Reveal when mouse is within 80px of the top of the viewport
      if (e.clientY < 80) {
        setIsVisible(true)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const navItems = [
    { name: "About", id: "about" },
    { name: "Experience", id: "experience" },
    { name: "Education", id: "education" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ]

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        height: "70px",
        // Fully transparent — no background, no blur
        background: "transparent",
        border: "none",
        boxShadow: "none",
        // Slide up/down based on isVisible
        transform: isVisible ? "translateY(0)" : "translateY(-100%)",
        transition: "transform 0.35s ease",
      }}
    >
      <div className="h-full flex items-center justify-between porto-container">
        {/* Brand */}
        <Link to="about" smooth={true} duration={500} className="cursor-pointer flex-shrink-0">
          <span
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "20px",
              letterSpacing: "0.1em",
              color: "#ffffff",
              textTransform: "uppercase",
              textShadow: "0 1px 8px rgba(0,0,0,0.6)",
            }}
          >
            Krishna Mallick
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-7">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.id}
                spy={true}
                smooth={true}
                duration={500}
                className={`nav-link${activeSection === item.id ? " active" : ""}`}
                style={{ textShadow: "0 1px 6px rgba(0,0,0,0.7)" }}
              >
                {item.name}
                {activeSection === item.id && (
                  <span
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: "100%",
                      height: "1px",
                      background: "#e05a3a",
                    }}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Social icons — keep dark circles so they're visible over any background */}
        <div className="hidden md:flex items-center gap-2 flex-shrink-0">
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

        {/* Mobile toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-white hover:text-gray-300 transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu — dark background for readability */}
      {isMobileMenuOpen && (
        <div
          style={{
            background: "rgba(10,10,10,0.97)",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
          }}
        >
          <div className="porto-container py-5 space-y-4">
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.id}
                    spy={true}
                    smooth={true}
                    duration={500}
                    className={`nav-link block${activeSection === item.id ? " active" : ""}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex gap-2 pt-2 border-t border-white/5">
              <a href="mailto:krishnamallick46@hotmail.com" className="social-icon">
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/krishna-mallick-a558b6260/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <LucideLinkedin className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/KrishnaKMA"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <LucideGithub className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
