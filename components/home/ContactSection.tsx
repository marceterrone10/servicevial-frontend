import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export const ContactSection = () => {
    return (
        <section className = "py-20 bg-gray-900" >
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    ¿Como podemos ayudarte?
                </h2>
                <p className="text-gray-400 max-w-xl mx-auto mb-10">
                    Contáctanos hoy y recibe una cotización personalizada sin compromiso.
                    Nuestro equipo está listo para ayudarte.
                </p>
                <Link
                    href="/contacto"
                    className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                >
                    Contactar Ahora
                    <ArrowRight className="w-5 h-5" />
                </Link>
            </div>
        </section >
  )
}
