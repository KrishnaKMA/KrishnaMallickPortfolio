"use client"

import { useState, useEffect } from "react"
import { Link } from "react-scroll"
import { Menu, X, ChevronRight } from "lucide-react"

export default function Header() {
  const [isVisible, setIsVisible] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("about")

  const handleScroll = () => {
    // Hide header on scroll down, show on scroll up
    if (window.scrollY === 0) {
      setIsVisible(true)
    } else if (window.scrollY > 0) {
      setIsVisible(false)
    }

    // Determine active section
    const sections = ["about", "experience", "education", "projects", "contact"]
    for (const section of sections) {
      const element = document.getElementById(section)
      if (element) {
        const rect = element.getBoundingClientRect()
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(section)
          break
        }
      }
    }
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (e.clientY < 100) {
      setIsVisible(true)
    } else if (window.scrollY > 0) {
      setIsVisible(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    document.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const navItems = [
    { name: "About", icon: "👤" },
    { name: "Experience", icon: "💼" },
    { name: "Education", icon: "🎓" },
    { name: "Projects", icon: "🚀" },
    { name: "Contact", icon: "📧" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-sm ${
        isVisible ? "transform translate-y-0" : "transform -translate-y-full"
      }`}
    >
      <div className="bg-black/90 border-b-2 border-red-600 shadow-lg shadow-red-600/20">
        <nav className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            {/* Logo/Name */}
            <div className="flex items-center">
              <span className="text-xl font-bold bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
                Krishna Mallick
              </span>
              <span className="ml-2 text-xs text-gray-400 hidden sm:inline-block">Software Engineer</span>
            </div>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex space-x-1 lg:space-x-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.name.toLowerCase()}
                    spy={true}
                    smooth={true}
                    duration={500}
                    className={`relative group cursor-pointer px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center
                      ${
                        activeSection === item.name.toLowerCase()
                          ? "bg-red-600/20 text-white"
                          : "text-gray-300 hover:text-white hover:bg-red-600/10"
                      }`}
                  >
                    <span className="hidden lg:inline-block mr-1">{item.icon}</span>
                    <span>{item.name}</span>
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 bg-red-600 transition-all duration-300 
                      ${activeSection === item.name.toLowerCase() ? "w-full" : "w-0 group-hover:w-full"}`}
                    ></span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Navigation Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-full bg-red-600/20 text-white hover:bg-red-600/30 transition-colors duration-300 focus:outline-none"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              isMobileMenuOpen ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0"
            }`}
          >
            <ul className="space-y-2 py-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.name.toLowerCase()}
                    spy={true}
                    smooth={true}
                    duration={500}
                    className={`flex items-center justify-between p-3 rounded-lg text-sm font-medium transition-all duration-200
                      ${
                        activeSection === item.name.toLowerCase()
                          ? "bg-gradient-to-r from-red-700 to-red-600 text-white shadow-md shadow-red-600/30"
                          : "bg-gray-900 text-gray-300 hover:bg-gray-800"
                      }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="flex items-center">
                      <span className="mr-3">{item.icon}</span>
                      <span>{item.name}</span>
                    </div>
                    <ChevronRight
                      className={`h-4 w-4 transition-transform ${
                        activeSection === item.name.toLowerCase() ? "rotate-90" : ""
                      }`}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}

