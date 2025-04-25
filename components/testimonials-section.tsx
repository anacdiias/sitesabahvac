"use client"

import { useState, useEffect } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    name: "John Smith",
    location: "Miami, FL",
    rating: 5,
    text: "Sabahvac provided exceptional service when installing our new AC system. The technicians were professional, knowledgeable, and completed the job ahead of schedule. Our home has never been more comfortable!",
  },
  {
    name: "Sarah Johnson",
    location: "Orlando, FL",
    rating: 5,
    text: "I've been using Sabahvac for all my HVAC needs for the past 3 years. Their maintenance service is top-notch, and their team is always responsive and helpful. Highly recommend!",
  },
  {
    name: "Michael Brown",
    location: "Tampa, FL",
    rating: 4,
    text: "When my AC broke down during the hottest week of summer, Sabahvac came to the rescue. They responded quickly, diagnosed the issue accurately, and had my system up and running the same day. Great service!",
  },
  {
    name: "Emily Davis",
    location: "Jacksonville, FL",
    rating: 5,
    text: "The team at Sabahvac installed a new heating system in our home last winter. The difference in comfort and our energy bills has been remarkable. Professional service from start to finish.",
  },
]

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleTestimonials, setVisibleTestimonials] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleTestimonials(1)
      } else if (window.innerWidth < 1024) {
        setVisibleTestimonials(2)
      } else {
        setVisibleTestimonials(3)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + visibleTestimonials >= testimonials.length ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex <= 0 ? Math.max(0, testimonials.length - visibleTestimonials) : prevIndex - 1,
    )
  }

  return (
    <section id="testimonials" className="section-padding bg-secondary-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title text-center">What Our Clients Say</h2>
          <p className="text-lg max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about our services.
          </p>
        </div>

        <div className="relative">
          <div className="flex overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / visibleTestimonials)}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4">
                  <div className="bg-white p-6 rounded-lg shadow-md h-full flex flex-col">
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={20}
                          className={i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}
                        />
                      ))}
                    </div>
                    <p className="italic mb-4 flex-grow">{testimonial.text}</p>
                    <div>
                      <p className="font-bold">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className="absolute top-1/2 left-0 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
            onClick={prevSlide}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            className="absolute top-1/2 right-0 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
            onClick={nextSlide}
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
