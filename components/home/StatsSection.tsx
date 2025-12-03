"use client"
import React, { useEffect, useState, useRef } from 'react'
import CountUp from 'react-countup'

export const StatsSection = () => {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef<HTMLElement>(null)
  
    useEffect(() => {
      // Usar IntersectionObserver en lugar de scroll listener (mucho más eficiente)
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.disconnect() // Solo necesitamos detectar una vez
          }
        },
        { threshold: 0.3 }
      )

      if (sectionRef.current) {
        observer.observe(sectionRef.current)
      }

      return () => observer.disconnect()
    }, [])

    return (
        <section ref={sectionRef} className = "bg-gradient-to-r from-amber-500 to-amber-600 py-10" >
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="flex flex-col items-center">
                        <span className="text-5xl md:text-4xl font-bold text-white mb-2">
                            +{isVisible ? <CountUp end={100} duration={2.5} /> : 0}
                        </span>
                        <span className="text-lg text-amber-100 font-medium">Proyectos Realizados</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-5xl md:text-4xl font-bold text-white mb-2">
                            +{isVisible ? <CountUp end={10} duration={3} /> : 0}
                        </span>
                        <span className="text-lg text-amber-100 font-medium">Años de Experiencia</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-5xl md:text-4xl font-bold text-white mb-2">
                            +{isVisible ? <CountUp end={15} duration={2} /> : 0}
                        </span>
                        <span className="text-lg text-amber-100 font-medium">Sectores Cubiertos</span>
                    </div>
                </div>
            </div>
        </section >
  )
}
