"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const navigation = [
    { name: "Inicio", href: "/" },
    { name: "Productos", href: "/productos" },
    { name: "Servicios", href: "/servicios" },
    { name: "Obras", href: "/obras" },
    { name: "Contacto", href: "/contacto" },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-white/80 backdrop-blur-md shadow-md py-2" 
        : "bg-white py-4"
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold transition-all duration-500">
            <Image
              src="/brand/LOGO_SERV.png"
              alt="MetalForge"
              width={scrolled ? 70 : 100}
              height={scrolled ? 70 : 100}
              className="transition-all duration-500"
            />
          </Link>
          
          { /* TODO: Add mobile menu */ }

          <div className="hidden md:flex items-center gap-4">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} className={`text-md transition-colors  ${
                scrolled 
                  ? "text-gray-700 hover:text-gray-900 text-sm" 
                  : "text-black hover:text-foreground"
              }`}>
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
