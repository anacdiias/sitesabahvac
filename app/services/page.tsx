import type { Metadata } from "next"
import ServicesSection from "@/components/services-section"

export const metadata: Metadata = {
  title: "Services - Sabahvac",
  description: "Professional HVAC services including installation, repair, and maintenance",
}

export default function ServicesPage() {
  return (
    <div className="pt-24">
      <ServicesSection />
    </div>
  )
}
