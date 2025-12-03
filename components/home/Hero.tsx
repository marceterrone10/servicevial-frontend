import React from 'react'
import Image from 'next/image'

export const Hero = () => {
    return (
        <section className = "relative h-screen w-full" >
          <Image
            src="/home/hero.webp"
            alt="Hero background"
            fill
            priority
            quality={75}
            className="object-cover brightness-[0.4]"
            sizes="100vw"
          />
          <div className="relative z-10 h-full flex flex-col items-center justify-center px-6">
            <div className="container mx-auto text-center">
              <span className="inline-block px-4 py-2 mb-6 text-sm font-medium text-amber-400 bg-amber-400/10 rounded-full border border-amber-400/20">
                Líderes en Seguridad Vial
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Soluciones Integrales en
                <span className="block text-amber-400">Señalización Vial</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10">
                Protegemos vidas a través de infraestructura vial de calidad. 
                Más de una década de experiencia nos respalda.
              </p>
            </div>
          </div>
        </section >
  )
}
