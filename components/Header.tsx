'use client';

import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY === 0) {
      setIsVisible(true);
    } else if (window.scrollY > 0) {
      setIsVisible(false);
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (e.clientY < 100) {
      setIsVisible(true);
    } else if (window.scrollY > 0) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const navItems = ['About', 'Experience', 'Education', 'Projects', 'Contact'];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-black shadow-md transition-transform duration-300 border-b-4 border-red-500 pb-2 ${
        isVisible ? 'transform translate-y-0 border-b-4 border-red-500 pb-2' : 'transform -translate-y-full'
      }`}
    >
      <nav className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-white">Krishna&apos;s Portfolio</span>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <li key={item}>
                <Link
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={500}
                  className="relative bg-gray-400 text-black cursor-pointer rounded-lg px-6 py-3 text-sm shadow-md transition-all
                  before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-transparent before:transition-all before:duration-300
                  hover:before:border-red-500 hover:before:shadow-[0_0_10px_rgba(255,0,0,0.8)]"
                >
                  <span className="relative z-10">{item}</span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-white hover:text-gray-500 focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-2">
            <ul className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <li key={item}>
                  <Link
                    to={item.toLowerCase()}
                    smooth={true}
                    duration={500}
                    className="relative block bg-gray-700 text-white cursor-pointer rounded-lg px-3 py-2 text-sm shadow-md transition-all
                    before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-transparent before:transition-all before:duration-300
                    hover:before:border-red-500 hover:before:shadow-[0_0_10px_rgba(255,0,0,0.8)]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="relative z-10">{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
