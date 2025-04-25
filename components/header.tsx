"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/80 backdrop-blur-md shadow-lg py-2" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image 
            src={isScrolled ? "/images/logo.png" : "/images/logo-white.png"} 
            alt="Sabahvac Logo" 
            width={180} 
            height={60} 
            className="h-12 w-auto transition-all duration-300 hover:scale-105"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            href="/" 
            className={`font-medium transition-all duration-300 animated-link ${
              isScrolled 
                ? "text-secondary-dark hover:text-primary-blue" 
                : "text-white hover:text-primary-blue"
            }`}
          >
            Home
          </Link>
          <Link 
            href="/services" 
            className={`font-medium transition-all duration-300 animated-link ${
              isScrolled 
                ? "text-secondary-dark hover:text-primary-blue" 
                : "text-white hover:text-primary-blue"
            }`}
          >
            Services
          </Link>
          <Link 
            href="/about" 
            className={`font-medium transition-all duration-300 animated-link ${
              isScrolled 
                ? "text-secondary-dark hover:text-primary-blue" 
                : "text-white hover:text-primary-blue"
            }`}
          >
            About Us
          </Link>
          <Link 
            href="/testimonials" 
            className={`font-medium transition-all duration-300 animated-link ${
              isScrolled 
                ? "text-secondary-dark hover:text-primary-blue" 
                : "text-white hover:text-primary-blue"
            }`}
          >
            Testimonials
          </Link>
          <Link 
            href="/contact" 
            className={`font-medium transition-all duration-300 animated-link ${
              isScrolled 
                ? "text-secondary-dark hover:text-primary-blue" 
                : "text-white hover:text-primary-blue"
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Call Now Button */}
        <div className="hidden md:flex items-center">
          <a
            href="tel:+1234567890"
            className="flex items-center bg-primary-red text-white px-5 py-2.5 rounded hover:bg-red-700 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1"
          >
            <Phone size={18} className="mr-2" />
            <span className="font-medium">Call Now</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={`md:hidden transition-colors duration-300 ${
            isScrolled ? "text-secondary-dark" : "text-white"
          } hover:text-primary-blue`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/80 backdrop-blur-md shadow-lg absolute top-full left-0 w-full">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              href="/"
              className="text-secondary-dark hover:text-primary-blue font-medium py-2 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-secondary-dark hover:text-primary-blue font-medium py-2 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/about"
              className="text-secondary-dark hover:text-primary-blue font-medium py-2 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/testimonials"
              className="text-secondary-dark hover:text-primary-blue font-medium py-2 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              href="/contact"
              className="text-secondary-dark hover:text-primary-blue font-medium py-2 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <a
              href="tel:+1234567890"
              className="flex items-center bg-primary-red text-white px-4 py-2.5 rounded hover:bg-red-700 transition-all duration-300 w-fit shadow-md hover:shadow-lg hover:-translate-y-1"
              onClick={() => setIsMenuOpen(false)}
            >
              <Phone size={18} className="mr-2" />
              <span className="font-medium">Call Now</span>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header