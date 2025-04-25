import type { Metadata } from "next"
import ContactSection from "@/components/contact-section"

export const metadata: Metadata = {
  title: "Contact Us - Sabahvac",
  description: "Get in touch with Sabahvac for all your HVAC needs",
}

export default function ContactPage() {
  return (
    <div className="pt-24">
      <ContactSection />
    </div>
  )
}
