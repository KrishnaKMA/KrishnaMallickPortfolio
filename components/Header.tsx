'use client';

import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

export default function Header() {
  // State to track the visibility of the navbar
  const [isVisible, setIsVisible] = useState(true); // Initially visible when at the top

  // Function to track scroll position
  const handleScroll = () => {
    if (window.scrollY === 0) {
      setIsVisible(true); // Show navbar at the top
    } else if (window.scrollY > 0) {
      setIsVisible(false); // Hide navbar when scrolling down
    }
  };

  // Function to check cursor position and update navbar visibility
  const handleMouseMove = (e: MouseEvent) => {
    if (e.clientY < 100) {
      setIsVisible(true); // Show navbar
    } else if (window.scrollY > 0) {
      setIsVisible(false); // Hide navbar
    }
  };

  useEffect(() => {
    // Listen for scroll and mousemove events
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousemove', handleMouseMove);

    // Clean up event listeners on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-md transition-transform duration-300 ${
        isVisible ? 'transform translate-y-0' : 'transform -translate-y-full'
      }`}
    >
      <nav className="container mx-auto px-6 py-3">
        <ul className="flex justify-center space-x-6">
          {['About', 'Experience', 'Education', 'Projects', 'Contact'].map((item) => (
            <li key={item}>
              <Link
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                className="bg-gray-800 text-white cursor-pointer rounded-lg p-2 shadow-md hover:bg-gray-600 transition-colors"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
