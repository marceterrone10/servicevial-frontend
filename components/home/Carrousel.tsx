"use client"

import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import { SLIDES, Slide } from '@/lib/constants/home'

export const Carrousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const pauseAutoPlay = () => {
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 5000)
  }

  // Autoplay
  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(nextSlide, 10000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, nextSlide])

  return (
    <>
      {/* Carousel Slides with Images */}
      <div className="absolute inset-0">
        {SLIDES.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={index === 0}
              quality={85}
              className="object-cover brightness-[0.4]"
              sizes="100vw"
            />
          </div>
        ))}
      </div>

      {/* Slide Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center px-6">
        <div className="container mx-auto text-center">
          {(SLIDES as readonly Slide[]).map((slide, index) => (
            <div
              key={index}
              className={`transition-all duration-500 ${
                index === currentSlide
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4 absolute inset-0 pointer-events-none'
              }`}
            >
              {index === currentSlide && (
                <>
                  {slide.badge && (
                    <span className="inline-block px-4 py-2 mb-6 text-sm font-medium text-amber-400 bg-amber-400/10 rounded-full border border-amber-400/20">
                      {slide.badge}
                    </span>
                  )}
                  <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                    {slide.title}
                    {slide.highlight && (
                      <span className="block text-amber-400">{slide.highlight}</span>
                    )}
                  </h1>
                  <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8">
                    {slide.description}
                  </p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        type="button"
        onClick={() => { prevSlide(); pauseAutoPlay() }}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 group"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
      </button>

      <button
        type="button"
        onClick={() => { nextSlide(); pauseAutoPlay() }}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 group"
        aria-label="Siguiente slide"
      >
        <ChevronRight className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
      </button>

      {/* Dots Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white/80 w-8'
                : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-current={index === currentSlide}
            aria-label={`Ir al slide ${index + 1}`}
          />
        ))}
      </div>
    </>
  )
}
