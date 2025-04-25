"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

const EstimateForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Lógica de envio do formulário aqui
    console.log("Formulário enviado:", formData)
  }

  return (
    <div className="bg-blue-900 bg-opacity-90 text-white p-8 rounded shadow-md max-w-md mx-auto" style={{ 
      backgroundImage: `linear-gradient(to bottom, rgba(17, 24, 39, 0.95), rgba(30, 58, 138, 0.95))`,
      backgroundSize: "cover" 
    }}>
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold mb-2">Obtenha sua Estimativa Gratuita</h2>
        <p className="text-gray-300 text-sm">
          Preencha o formulário abaixo e entraremos em contato dentro de 24 horas.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="fullName" className="block text-sm mb-1 text-gray-300">Nome Completo</label>
          <input
            type="text"
            id="fullName"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full py-2 px-3 bg-transparent border border-gray-600 rounded text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
            placeholder="Seu nome"
            required
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm mb-1 text-gray-300">Telefone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full py-2 px-3 bg-transparent border border-gray-600 rounded text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
            placeholder="(123) 456-7890"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm mb-1 text-gray-300">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full py-2 px-3 bg-transparent border border-gray-600 rounded text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
            placeholder="seu@email.com"
            required
          />
        </div>

        <div>
          <label htmlFor="service" className="block text-sm mb-1 text-gray-300">Serviço Necessário</label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full py-2 px-3 bg-transparent border border-gray-600 rounded text-white focus:outline-none focus:border-blue-400 appearance-none"
            style={{ backgroundImage: "url('data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"white\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"%3e%3cpolyline points=\"6 9 12 15 18 9\"%3e%3c/polyline%3e%3c/svg%3e')", 
              backgroundRepeat: "no-repeat", 
              backgroundPosition: "right 0.5rem center", 
              backgroundSize: "1.5em 1.5em",
              paddingRight: "2.5rem" 
            }}
          >
            <option value="">Selecione um serviço</option>
            <option value="AC Installation">Instalação de Ar Condicionado</option>
            <option value="AC Repair">Reparo e Manutenção de Ar Condicionado</option>
            <option value="Heating">Sistemas de Aquecimento</option>
            <option value="Ventilation">Soluções de Ventilação</option>
            <option value="Commercial">HVAC Comercial</option>
            <option value="Emergency">Serviço de Emergência</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm mb-1 text-gray-300">Mensagem (Opcional)</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full py-2 px-3 bg-transparent border border-gray-600 rounded text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
            placeholder="Descreva suas necessidades"
          ></textarea>
        </div>

        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded transition duration-300 flex items-center justify-center"
          >
            Solicitar Orçamento Gratuito <ArrowRight size={16} className="ml-2" />
          </button>
        </div>
      </form>
    </div>
  )
}

export default EstimateForm 