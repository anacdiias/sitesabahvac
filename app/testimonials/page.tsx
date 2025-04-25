import type { Metadata } from "next"
import TestimonialsSection from "@/components/testimonials-section"

export const metadata: Metadata = {
  title: "Testimonials - Sabahvac",
  description: "See what our clients say about our HVAC services",
}

export default function TestimonialsPage() {
  return (
    <div className="pt-24">
      <TestimonialsSection />
    </div>
  )
}
