"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import React from "react"

const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  })

  const [focusedField, setFocusedField] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          name: "",
          phone: "",
          email: "",
          service: "",
          message: "",
        })
      }, 3000)
    }, 1500)
  }

  return (
    <section className="relative min-h-[650px] md:min-h-[750px] lg:min-h-[850px] flex items-center py-24 md:py-28">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/images/hero-bg.jpg')",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay mais escuro e com mais contraste */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 to-black/75"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-white">
        {/* Centered Title - Melhorada */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-5 md:mb-7 transition-all duration-300 hover:text-primary-blue leading-tight font-display">
            Expert HVAC Solutions for Your Comfort
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Providing reliable heating, ventilation, and air conditioning services for homes and businesses
          </p>
          {/* Botões de call-to-action */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <a href="#contact" className="btn btn-primary shadow-xl hover:shadow-2xl">
              Get Free Estimate
            </a>
            <a href="#services" className="btn btn-secondary shadow-xl hover:shadow-2xl">
              Our Services
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start mt-16">
          {/* Form Column - Com o novo formulário */}
          <div className="order-2 lg:order-1 lg:col-span-5 glass-effect p-6 md:p-8 rounded-lg border border-white/20 shadow-2xl transition-all duration-300 hover:border-primary-blue/30 mx-auto lg:mx-0 max-w-xl w-full">
            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white">Get your <span className="text-primary-blue">Free Estimate</span></h2>
              <p className="text-white/80">Fill out the form below and we'll contact you within 24 hours.</p>
            </div>

            {isSubmitted ? (
              <div className="py-10 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary-blue/20 mb-6">
                  <CheckCircle size={40} className="text-primary-blue" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Thank you!</h3>
                <p className="text-white/90">Your request has been sent successfully. We will contact you soon.</p>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1.5 text-white/90">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField("")}
                    className={`w-full px-4 py-2.5 bg-transparent border rounded-md focus:outline-none focus:ring-2 text-white placeholder-white/50 transition-all duration-300 ${
                      focusedField === "name"
                        ? "border-primary-blue focus:ring-primary-blue/50 shadow-lg shadow-primary-blue/10"
                        : "border-white/30"
                    }`}
                    placeholder="Seu nome"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1.5 text-white/90">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("phone")}
                    onBlur={() => setFocusedField("")}
                    className={`w-full px-4 py-2.5 bg-transparent border rounded-md focus:outline-none focus:ring-2 text-white placeholder-white/50 transition-all duration-300 ${
                      focusedField === "phone"
                        ? "border-primary-blue focus:ring-primary-blue/50 shadow-lg shadow-primary-blue/10"
                        : "border-white/30"
                    }`}
                    placeholder="(123) 456-7890"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1.5 text-white/90">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField("")}
                    className={`w-full px-4 py-2.5 bg-transparent border rounded-md focus:outline-none focus:ring-2 text-white placeholder-white/50 transition-all duration-300 ${
                      focusedField === "email"
                        ? "border-primary-blue focus:ring-primary-blue/50 shadow-lg shadow-primary-blue/10"
                        : "border-white/30"
                    }`}
                    placeholder="seu@email.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-1.5 text-white/90">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("service")}
                    onBlur={() => setFocusedField("")}
                    className={`w-full px-4 py-2.5 bg-transparent border rounded-md focus:outline-none focus:ring-2 text-white transition-all duration-300 ${
                      focusedField === "service"
                        ? "border-primary-blue focus:ring-primary-blue/50 shadow-lg shadow-primary-blue/10"
                        : "border-white/30"
                    }`}
                    style={{ 
                      backgroundImage: "url('data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"white\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"%3e%3cpolyline points=\"6 9 12 15 18 9\"%3e%3c/polyline%3e%3c/svg%3e')", 
                      backgroundRepeat: "no-repeat", 
                      backgroundPosition: "right 0.5rem center", 
                      backgroundSize: "1.5em 1.5em",
                      paddingRight: "2.5rem",
                      appearance: "none"
                    }}
                    required
                  >
                    <option value="" className="bg-secondary-dark">
                      Select a service
                    </option>
                    <option value="AC Installation" className="bg-secondary-dark">
                      AC Installation
                    </option>
                    <option value="AC Repair" className="bg-secondary-dark">
                      AC Repair & Maintenance
                    </option>
                    <option value="Heating Systems" className="bg-secondary-dark">
                      Heating Systems
                    </option>
                    <option value="Ventilation" className="bg-secondary-dark">
                      Ventilation Solutions
                    </option>
                    <option value="Commercial HVAC" className="bg-secondary-dark">
                      Commercial HVAC
                    </option>
                    <option value="Other" className="bg-secondary-dark">
                      Other
                    </option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1.5 text-white/90">
                    Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField("")}
                    className={`w-full px-4 py-2.5 bg-transparent border rounded-md focus:outline-none focus:ring-2 text-white placeholder-white/50 transition-all duration-300 ${
                      focusedField === "message"
                        ? "border-primary-blue focus:ring-primary-blue/50 shadow-lg shadow-primary-blue/10"
                        : "border-white/30"
                    }`}
                    placeholder="Tell us more about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-primary-blue text-white py-3 px-4 rounded-md font-medium hover:bg-blue-600 transition-all duration-300 flex items-center justify-center ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:shadow-lg hover:-translate-y-1"
                  }`}
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
                      Get Free Estimate <ArrowRight size={18} className="ml-2" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Features Column */}
          <div className="order-1 lg:order-2 lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Feature Cards - estilo melhorado */}
              <div className="glass-effect p-6 rounded-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-primary-blue/20 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary-blue"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Licensed & Insured</h3>
                <p className="text-white/80">Fully certified professionals to meet all your HVAC needs safely and effectively.</p>
              </div>

              <div className="glass-effect p-6 rounded-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-primary-blue/20 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary-blue"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">24/7 Service</h3>
                <p className="text-white/80">24-hour support for unexpected HVAC emergencies, whenever you need it.</p>
              </div>

              <div className="glass-effect p-6 rounded-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-primary-blue/20 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary-blue"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Customer Satisfaction</h3>
                <p className="text-white/80">Our priority is your comfort and satisfaction with every service we provide.</p>
              </div>

              <div className="glass-effect p-6 rounded-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-primary-blue/20 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary-blue"
                  >
                    <path d="M20.91 8.84 8.56 2.23a1.93 1.93 0 0 0-1.81 0L3.1 4.13a2.12 2.12 0 0 0-.05 3.69l12.22 6.93a2 2 0 0 0 1.94 0L21 12.51a2.12 2.12 0 0 0-.09-3.67Z" />
                    <path d="m3.09 8.84 12.35-6.61a1.93 1.93 0 0 1 1.81 0l3.65 1.9a2.12 2.12 0 0 1 .1 3.69L8.73 14.75a2 2 0 0 1-1.94 0L3 12.51a2.12 2.12 0 0 1 .09-3.67Z" />
                    <line x1="12" y1="22" x2="12" y2="13" />
                    <path d="M20 13.5v3.37a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13.5" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Free Estimates</h3>
                <p className="text-white/80">Transparent pricing with no hidden fees. Get a free, no-obligation estimate today.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection