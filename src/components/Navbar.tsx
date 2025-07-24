'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, MapPin } from 'lucide-react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <nav className="bg-sanctuary-light-blue w-full shadow-sm relative z-50" role="navigation" aria-label="Main navigation">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 lg:h-24">
          
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-3"
            aria-label="Sanctuary - Home"
          >
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-sanctuary-navy rounded-full flex items-center justify-center">
              <span className="text-white text-lg lg:text-xl font-bold">🕊️</span>
            </div>
            <h1 className="font-jacques text-3xl lg:text-4xl xl:text-5xl text-sanctuary-navy">
              Sanctuary
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 xl:space-x-12">
            <Link 
              href="/" 
              className="font-poppins font-semibold text-lg xl:text-xl text-black hover:text-sanctuary-navy transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/browse" 
              className="font-poppins font-semibold text-lg xl:text-xl text-black hover:text-sanctuary-navy transition-colors"
            >
              Browse Resources
            </Link>
            <Link 
              href="/map" 
              className="font-poppins font-semibold text-lg xl:text-xl text-black hover:text-sanctuary-navy transition-colors flex items-center gap-2"
            >
              <MapPin className="w-4 h-4" />
              Resource Map
            </Link>
            <Link 
              href="/get-involved" 
              className="font-poppins font-semibold text-lg xl:text-xl text-black hover:text-sanctuary-navy transition-colors"
            >
              Get Involved
            </Link>
            
            {/* Emergency Button */}
            <Link 
              href="/emergency" 
              className="bg-sanctuary-teal hover:bg-sanctuary-navy transition-colors text-black hover:text-white font-poppins font-semibold text-lg xl:text-xl px-6 py-3 rounded-30"
              aria-label="Emergency resources - immediate help"
            >
              Emergency
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-sanctuary-navy hover:bg-sanctuary-sky-blue rounded-md transition-colors"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div 
            id="mobile-menu"
            className="lg:hidden absolute top-full left-0 right-0 bg-sanctuary-light-blue border-t border-sanctuary-sky-blue shadow-lg z-40"
          >
            <div className="px-4 py-6 space-y-4">
              <Link 
                href="/" 
                className="block font-poppins font-semibold text-xl text-black hover:text-sanctuary-navy transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/browse" 
                className="block font-poppins font-semibold text-xl text-black hover:text-sanctuary-navy transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Browse Resources
              </Link>
              <Link 
                href="/map" 
                className="block font-poppins font-semibold text-xl text-black hover:text-sanctuary-navy transition-colors py-2 flex items-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <MapPin className="w-5 h-5" />
                Resource Map
              </Link>
              <Link 
                href="/get-involved" 
                className="block font-poppins font-semibold text-xl text-black hover:text-sanctuary-navy transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Involved
              </Link>
              <Link 
                href="/emergency" 
                className="block bg-sanctuary-teal hover:bg-sanctuary-navy transition-colors text-black hover:text-white font-poppins font-semibold text-xl px-6 py-3 rounded-30 text-center mt-4"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Emergency resources - immediate help"
              >
                Emergency
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar