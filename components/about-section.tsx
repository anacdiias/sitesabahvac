import Image from "next/image"
import { CheckCircle } from "lucide-react"

const features = [
  "Licensed and certified HVAC technicians",
  "Over 15 years of industry experience",
  "Energy-efficient solutions",
  "Transparent pricing with no hidden fees",
  "Satisfaction guaranteed on all services",
  "24/7 emergency service availability",
]

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title">About Sabahvac</h2>
            <p className="text-lg mb-6">
              Sabahvac is a leading provider of heating, ventilation, and air conditioning services, dedicated to
              ensuring your comfort in any season. With our team of experienced professionals, we deliver reliable and
              efficient HVAC solutions for both residential and commercial properties.
            </p>
            <p className="text-lg mb-6">
              Our commitment to quality service, technical expertise, and customer satisfaction has made us the trusted
              choice for HVAC needs across the region. We pride ourselves on using the latest technology and best
              practices to provide energy-efficient solutions that save you money while keeping you comfortable.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle size={20} className="text-primary-blue mr-2 mt-1 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative h-[500px] w-full rounded-lg overflow-hidden shadow-xl">
              <Image src="/images/about-image.jpg" alt="HVAC Technician" fill className="object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary-blue text-white p-6 rounded-lg shadow-lg max-w-xs">
              <p className="text-2xl font-bold mb-2">15+</p>
              <p className="text-lg">Years of Experience in HVAC Industry</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
