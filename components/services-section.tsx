import { Snowflake, Flame, Fan, Building2, Wrench, ThermometerSnowflake } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const services = [
  {
    icon: <Snowflake size={48} className="text-primary-blue mb-4" />,
    image: "/images/service1.jpg",
    title: "AC Installation",
    description:
      "Professional installation of energy-efficient air conditioning systems for optimal cooling performance.",
    link: "/services/ac-installation"
  },
  {
    icon: <Wrench size={48} className="text-primary-red mb-4" />,
    image: "/images/service2.jpg",
    title: "AC Repair & Maintenance",
    description:
      "Expert repair and regular maintenance services to keep your AC running efficiently and extend its lifespan.",
    link: "/services/ac-repair"
  },
  {
    icon: <Flame size={48} className="text-primary-red mb-4" />,
    image: "/images/service3.jpg",
    title: "Heating Systems",
    description: "Installation, repair, and maintenance of heating systems to ensure your comfort during cold weather.",
    link: "/services/heating"
  },
  {
    icon: <Fan size={48} className="text-primary-blue mb-4" />,
    image: "/images/service4.jpg",
    title: "Ventilation Solutions",
    description:
      "Improve indoor air quality with our professional ventilation services for residential and commercial spaces.",
    link: "/services/ventilation"
  },
  {
    icon: <Building2 size={48} className="text-primary-blue mb-4" />,
    image: "/images/service5.jpg",
    title: "Commercial HVAC",
    description:
      "Specialized HVAC solutions for businesses, ensuring optimal climate control for your commercial property.",
    link: "/services/commercial"
  },
  {
    icon: <ThermometerSnowflake size={48} className="text-primary-red mb-4" />,
    image: "/images/service6.jpg",
    title: "Emergency Services",
    description:
      "24/7 emergency HVAC services to address urgent issues and restore your comfort as quickly as possible.",
    link: "/services/emergency"
  },
]

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-primary-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title text-center">Our Services</h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-600">
            We provide comprehensive HVAC solutions to meet all your heating, cooling, and ventilation needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card overflow-hidden transition-all duration-300 hover:-translate-y-3 hover:shadow-hover group">
              <div className="h-52 relative overflow-hidden">
                {/* Nota: Certifique-se de ter estas imagens no diretório public/images */}
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70"></div>
              </div>
              <div className="p-6">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-blue/10 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-primary-dark">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  href={service.link}
                  className="text-primary-blue font-medium inline-flex items-center transition-all duration-300 hover:text-primary-red group"
                >
                  Learn More <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/services" className="btn btn-primary inline-flex items-center gap-2">
            View All Services <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
