import EstimateForm from "@/components/estimate-form"

export default function FormDemo() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Demonstração do Formulário
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Abaixo está o formulário de estimativa gratuita para SABAHVAC
          </p>
        </div>
        
        <div>
          <EstimateForm />
        </div>
      </div>
    </div>
  )
} 