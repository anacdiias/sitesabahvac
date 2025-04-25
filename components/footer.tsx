import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gradient-primary text-white pt-20 pb-8">
      <div className="container mx-auto px-4">
        {/* Newsletter Section */}
        <div className="bg-white/10 backdrop-blur-md p-8 rounded-lg border border-white/20 shadow-xl mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">Subscribe to Our Newsletter</h3>
              <p className="text-white/80">Stay updated with our latest offers, tips and news</p>
            </div>
            <div>
              <form className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-1 px-4 py-3 bg-white/20 border border-white/30 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue/50 text-white placeholder-white/50"
                  required
                />
                <button 
                  type="submit" 
                  className="bg-primary-red text-white px-6 py-3 rounded-md font-medium hover:bg-red-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <Image
              src="/images/logo-white.png"
              alt="Sabahvac Logo"
              width={180}
              height={60}
              className="h-14 w-auto mb-6"
            />
            <p className="mb-6 text-white/80 leading-relaxed">
              Professional heating, ventilation, and air conditioning services for residential and commercial
              properties. Quality service since 2005.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-blue hover:text-white transition-all duration-300"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-blue hover:text-white transition-all duration-300"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-blue hover:text-white transition-all duration-300"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-blue hover:text-white transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative pb-3 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1 after:w-16 after:bg-primary-red after:rounded-full">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/" 
                  className="hover:text-primary-blue transition-colors duration-300 flex items-center group"
                >
                  <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-1" />
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="#services" 
                  className="hover:text-primary-blue transition-colors duration-300 flex items-center group"
                >
                  <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-1" />
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  href="#about" 
                  className="hover:text-primary-blue transition-colors duration-300 flex items-center group"
                >
                  <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-1" />
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  href="#testimonials" 
                  className="hover:text-primary-blue transition-colors duration-300 flex items-center group"
                >
                  <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-1" />
                  Testimonials
                </Link>
              </li>
              <li>
                <Link 
                  href="#contact" 
                  className="hover:text-primary-blue transition-colors duration-300 flex items-center group"
                >
                  <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-1" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative pb-3 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1 after:w-16 after:bg-primary-red after:rounded-full">
              Our Services
            </h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="#" 
                  className="hover:text-primary-blue transition-colors duration-300 flex items-center group"
                >
                  <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-1" />
                  AC Installation
                </Link>
              </li>
              <li>
                <Link 
                  href="#" 
                  className="hover:text-primary-blue transition-colors duration-300 flex items-center group"
                >
                  <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-1" />
                  AC Repair & Maintenance
                </Link>
              </li>
              <li>
                <Link 
                  href="#" 
                  className="hover:text-primary-blue transition-colors duration-300 flex items-center group"
                >
                  <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-1" />
                  Heating Systems
                </Link>
              </li>
              <li>
                <Link 
                  href="#" 
                  className="hover:text-primary-blue transition-colors duration-300 flex items-center group"
                >
                  <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-1" />
                  Ventilation Solutions
                </Link>
              </li>
              <li>
                <Link 
                  href="#" 
                  className="hover:text-primary-blue transition-colors duration-300 flex items-center group"
                >
                  <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-1" />
                  Commercial HVAC
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative pb-3 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1 after:w-16 after:bg-primary-red after:rounded-full">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone size={20} className="mr-3 mt-1 flex-shrink-0 text-primary-blue" />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-start">
                <Mail size={20} className="mr-3 mt-1 flex-shrink-0 text-primary-blue" />
                <span>ayrton.saba@gmail.com</span>
              </li>
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 mt-1 flex-shrink-0 text-primary-blue" />
                <span>123 HVAC Street, Cooling City, AC 12345</span>
              </li>
              <li className="flex items-start">
                <Clock size={20} className="mr-3 mt-1 flex-shrink-0 text-primary-blue" />
                <div>
                  <p>Mon-Fri: 8:00 AM - 6:00 PM</p>
                  <p>Sat: 9:00 AM - 4:00 PM</p>
                  <p>Sun: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/70">&copy; {new Date().getFullYear()} Sabahvac. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
