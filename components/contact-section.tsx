"use client"

import type React from "react"

import { useState } from "react"
import { Phone, Mail, MapPin, Clock, Send, User, AtSign, MessageSquare } from "lucide-react"

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")
  const [focusedField, setFocusedField] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitMessage("Thank you! Your message has been sent. We will contact you shortly.")
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      })

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitMessage("")
      }, 5000)
    }, 1500)
  }

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-primary-blue/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-primary-red/10 rounded-full translate-x-1/3"></div>
      <div className="absolute bottom-1/3 left-1/4 w-20 h-20 bg-primary-blue/15 rounded-full"></div>
      <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-primary-red/15 rounded-full translate-y-1/2"></div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <div className="inline-block relative mb-2">
            <span className="inline-block w-12 h-1 bg-primary-blue absolute -left-16 top-1/2"></span>
            <span className="text-primary-red font-bold tracking-wider">GET IN TOUCH</span>
            <span className="inline-block w-12 h-1 bg-primary-red absolute -right-16 top-1/2"></span>
          </div>
          <h2 className="section-title text-center text-4xl md:text-5xl mb-6 relative">
            Contact Us
            <span className="absolute -z-10 opacity-10 text-primary-blue text-7xl md:text-8xl font-bold top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
              SABAHVAC
            </span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary-blue to-primary-red mx-auto mb-6 rounded-full"></div>
          <p className="text-lg max-w-3xl mx-auto relative z-10 bg-gradient-to-r from-secondary-dark to-secondary-dark bg-clip-text font-medium">
            Have questions or ready to schedule service? Contact us today for a free estimate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-lg shadow-lg border-t-4 border-primary-blue relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-blue/5 rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary-red/5 rounded-tr-full"></div>

            <div className="relative">
              <h3 className="text-2xl font-bold mb-2 text-secondary-dark">Get a Free Estimate</h3>
              <p className="text-gray-600 mb-6">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              <div className="h-1 w-16 bg-gradient-to-r from-primary-blue to-primary-red mb-6 rounded-full"></div>

              {submitMessage && (
                <div className="bg-green-50 border-l-4 border-green-500 text-green-700 p-4 rounded mb-6 animate-pulse">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium">{submitMessage}</p>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="relative">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name <span className="text-primary-red">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User
                          size={18}
                          className={`${focusedField === "name" ? "text-primary-blue" : "text-gray-400"} transition-colors duration-200`}
                        />
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("name")}
                        onBlur={() => setFocusedField("")}
                        required
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-primary-blue transition-all duration-200"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address <span className="text-primary-red">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <AtSign
                          size={18}
                          className={`${focusedField === "email" ? "text-primary-blue" : "text-gray-400"} transition-colors duration-200`}
                        />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("email")}
                        onBlur={() => setFocusedField("")}
                        required
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-primary-blue transition-all duration-200"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="relative">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number <span className="text-primary-red">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Phone
                          size={18}
                          className={`${focusedField === "phone" ? "text-primary-blue" : "text-gray-400"} transition-colors duration-200`}
                        />
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("phone")}
                        onBlur={() => setFocusedField("")}
                        required
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-primary-blue transition-all duration-200"
                        placeholder="(123) 456-7890"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                      Service Needed
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("service")}
                      onBlur={() => setFocusedField("")}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-primary-blue transition-all duration-200"
                    >
                      <option value="">Select a service</option>
                      <option value="AC Installation">AC Installation</option>
                      <option value="AC Repair">AC Repair & Maintenance</option>
                      <option value="Heating Systems">Heating Systems</option>
                      <option value="Ventilation">Ventilation Solutions</option>
                      <option value="Commercial HVAC">Commercial HVAC</option>
                      <option value="Emergency Service">Emergency Service</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-3 flex items-start pointer-events-none">
                      <MessageSquare
                        size={18}
                        className={`${focusedField === "message" ? "text-primary-blue" : "text-gray-400"} transition-colors duration-200`}
                      />
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField("")}
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-primary-blue transition-all duration-200"
                      placeholder="Tell us about your needs..."
                    ></textarea>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary-blue to-blue-700 hover:from-blue-700 hover:to-primary-blue text-white py-3 px-4 rounded-md transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      <>
                        Submit Request <Send size={18} className="ml-2" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <div className="bg-primary-blue text-white p-8 rounded-lg shadow-md mb-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <Phone size={24} className="mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-lg">(123) 456-7890</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Mail size={24} className="mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-lg">ayrton.saba@gmail.com</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <MapPin size={24} className="mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-lg">123 HVAC Street, Cooling City, AC 12345</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Clock size={24} className="mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Business Hours</p>
                    <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p>Saturday: 9:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6">Emergency Service</h3>
              <p className="mb-4">
                HVAC emergencies don't wait for business hours. Our emergency service is available 24/7.
              </p>
              <a
                href="tel:+1234567890"
                className="inline-flex items-center bg-primary-red text-white px-6 py-3 rounded-md hover:bg-red-700 transition-colors"
              >
                <Phone size={20} className="mr-2" />
                <span className="font-medium">Call for Emergency Service</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
