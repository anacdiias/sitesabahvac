import type { Metadata } from "next"
import AboutSection from "@/components/about-section"

export const metadata: Metadata = {
  title: "About Us - Sabahvac",
  description: "Learn about Sabahvac, your trusted HVAC service provider",
}

export default function AboutPage() {
  return (
    <div className="pt-24">
      <AboutSection />
    </div>
  )
}
