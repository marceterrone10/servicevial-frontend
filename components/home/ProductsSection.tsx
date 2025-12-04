import { Shield, Users, TrendingUp, Wrench, ShieldCheck, Signpost, ShowerHead, Wheat } from 'lucide-react'
import React from 'react'


const services = [
    {
      icon: Signpost,
      title: "Señalización Vertical",
      description: "Implementación de señalética vertical y horizontal cumpliendo normativas vigentes."
    },
    {
      icon: ShieldCheck,
      title: "Defensas Viales",
      description: "Servicios de mantenimiento preventivo y correctivo de infraestructura vial."
    },
    {
      icon: ShowerHead,
      title: "Drenajes",
      description: "Asesoramiento técnico especializado en proyectos de seguridad vial."
    },
    {
      icon: Wheat,
      title: "Agro",
      description: "Programas de formación en seguridad vial para empresas y organizaciones."
    }
  ]


export const ProductsSection = () => {
    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">Nuestros Productos</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
                        Soluciones Profesionales
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Ofrecemos una amplia gama de productos especializados en seguridad e infraestructura vial.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-amber-200 hover:-translate-y-1"
                        >
                            <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-500 transition-colors duration-300">
                                <service.icon className="w-7 h-7 text-amber-600 group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
