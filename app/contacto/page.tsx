"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Clock, Send, Building2, MessageSquare } from "lucide-react"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"

interface FormErrors {
  nombre?: string
  email?: string
  telefono?: string
  compania?: string
  asunto?: string
  mensaje?: string
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    compania: "",
    asunto: "",
    mensaje: "",
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  // Validation functions
  const validateNombre = (value: string): string | undefined => {
    if (!value.trim()) {
      return "El nombre es requerido"
    }
    if (value.trim().length < 2) {
      return "El nombre debe tener al menos 2 caracteres"
    }
    if (value.trim().length > 100) {
      return "El nombre no puede exceder 100 caracteres"
    }
    if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/.test(value.trim())) {
      return "El nombre solo puede contener letras y espacios"
    }
    return undefined
  }

  const validateEmail = (value: string): string | undefined => {
    if (!value.trim()) {
      return "El email es requerido"
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(value.trim())) {
      return "Por favor ingresa un email válido"
    }
    return undefined
  }

  const validateTelefono = (value: string): string | undefined => {
    if (!value.trim()) {
      return "El teléfono es requerido"
    }
    if (value.trim().length > 20) {
      return "El teléfono no puede exceder 20 caracteres"
    }
    // Allow various phone formats: +54 11 4000-0000, 11-4000-0000, (11) 4000-0000, etc.
    const phoneRegex = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/
    if (!phoneRegex.test(value.trim().replace(/\s/g, ""))) {
      return "Por favor ingresa un teléfono válido"
    }
    return undefined
  }

  const validateCompania = (value: string): string | undefined => {
    if (value.trim() && value.trim().length < 2) {
      return "El nombre de la compañía debe tener al menos 2 caracteres"
    }
    if (value.trim().length > 100) {
      return "El nombre de la compañía no puede exceder 100 caracteres"
    }
    return undefined
  }

  const validateAsunto = (value: string): string | undefined => {
    if (!value.trim()) {
      return "El asunto es requerido"
    }
    if (value.trim().length < 3) {
      return "El asunto debe tener al menos 3 caracteres"
    }
    if (value.trim().length > 200) {
      return "El asunto no puede exceder 200 caracteres"
    }
    return undefined
  }

  const validateMensaje = (value: string): string | undefined => {
    if (!value.trim()) {
      return "El mensaje es requerido"
    }
    if (value.trim().length < 10) {
      return "El mensaje debe tener al menos 10 caracteres"
    }
    if (value.trim().length > 2000) {
      return "El mensaje no puede exceder 2000 caracteres"
    }
    return undefined
  }

  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case "nombre":
        return validateNombre(value)
      case "email":
        return validateEmail(value)
      case "telefono":
        return validateTelefono(value)
      case "compania":
        return validateCompania(value)
      case "asunto":
        return validateAsunto(value)
      case "mensaje":
        return validateMensaje(value)
      default:
        return undefined
    }
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}
    
    newErrors.nombre = validateNombre(formData.nombre)
    newErrors.email = validateEmail(formData.email)
    newErrors.telefono = validateTelefono(formData.telefono)
    newErrors.compania = validateCompania(formData.compania)
    newErrors.asunto = validateAsunto(formData.asunto)
    newErrors.mensaje = validateMensaje(formData.mensaje)

    setErrors(newErrors)
    return !Object.values(newErrors).some((error) => error !== undefined)
  }

  const isFormValid = (): boolean => {
    const tempErrors: FormErrors = {}
    tempErrors.nombre = validateNombre(formData.nombre)
    tempErrors.email = validateEmail(formData.email)
    tempErrors.telefono = validateTelefono(formData.telefono)
    tempErrors.compania = validateCompania(formData.compania)
    tempErrors.asunto = validateAsunto(formData.asunto)
    tempErrors.mensaje = validateMensaje(formData.mensaje)
    
    return !Object.values(tempErrors).some((error) => error !== undefined)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Mark all fields as touched
    setTouched({
      nombre: true,
      email: true,
      telefono: true,
      compania: true,
      asunto: true,
      mensaje: true,
    })

    // Validate form
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    
    try {
      // Transform form data to match backend DTO (Spanish to English field names)
      const requestData = {
        name: formData.nombre,
        email: formData.email,
        phone: formData.telefono || undefined,
        company: formData.compania || undefined,
        subject: formData.asunto,
        message: formData.mensaje,
      }

      const response = await fetch("http://localhost:3300/api/consults", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ message: "Error al enviar el formulario" }))
        
        // Handle validation errors from class-validator (array of messages)
        let errorMessage = "Error al enviar el formulario"
        if (errorData.message) {
          if (Array.isArray(errorData.message)) {
            // Join multiple validation errors
            errorMessage = errorData.message.join(". ")
          } else {
            errorMessage = errorData.message
          }
        } else if (errorData.error) {
          errorMessage = errorData.error
        }
        
        throw new Error(errorMessage)
      }

      const data = await response.json()
      
      // Show success message
      toast({
        title: "¡Mensaje enviado!",
        description: "Tu consulta ha sido enviada correctamente. Te responderemos a la brevedad.",
        variant: "default",
      })

      // Reset form
      setFormData({ nombre: "", email: "", telefono: "", compania: "", asunto: "", mensaje: "" })
      setErrors({})
      setTouched({})
    } catch (error) {
      // Show error message
      toast({
        title: "Error al enviar",
        description: error instanceof Error ? error.message : "Ocurrió un error al enviar tu mensaje. Por favor, intenta nuevamente.",
        variant: "destructive",
      })
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    
    // Validate field in real-time if it has been touched
    if (touched[name]) {
      const error = validateField(name, value)
      setErrors((prev) => ({ ...prev, [name]: error }))
    } else {
      // Clear error when user starts typing in untouched field
      if (errors[name as keyof FormErrors]) {
        setErrors((prev) => ({ ...prev, [name]: undefined }))
      }
    }
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setTouched((prev) => ({ ...prev, [name]: true }))
    
    // Validate field on blur
    const error = validateField(name, value)
    setErrors((prev) => ({ ...prev, [name]: error }))
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Main Contact Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 pt-12">
          <div className="grid gap-12 lg:grid-cols-5">
            
            {/* Contact Information Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-2">Información de Contacto</h2>
                <p className="text-muted-foreground">
                  Comunicate con nosotros por cualquiera de estos medios.
                </p>
              </div>

              <Card className="group p-6 transition-all duration-300 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-sm text-muted-foreground">info@servicevial.com.ar</p>
                    <p className="text-sm text-muted-foreground">ventas@servicevial.com.ar</p>
                  </div>
                </div>
              </Card>

              <Card className="group p-6 transition-all duration-300 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Teléfono</h3>
                    <p className="text-sm text-muted-foreground">+54 11 4000-0000</p>
                    <p className="text-sm text-muted-foreground">+54 11 4000-0001</p>
                  </div>
                </div>
              </Card>

              <Card className="group p-6 transition-all duration-300 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Dirección</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Buenos Aires, Argentina
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="group p-6 transition-all duration-300 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Horario de Atención</h3>
                    <p className="text-sm text-muted-foreground">Lunes a Viernes: 8:00 - 17:00</p>
                    <p className="text-sm text-muted-foreground">Sábados: 8:00 - 12:00</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <Card className="p-8 md:p-10 border-2">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                    <Send className="h-5 w-5" />
                  </div>
                  <h2 className="text-2xl font-bold">Envianos un Mensaje</h2>
                </div>
                <p className="text-muted-foreground mb-8">
                  Completá el formulario y te responderemos a la brevedad.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="nombre" className={`text-sm font-medium ${errors.nombre && touched.nombre ? "text-destructive" : ""}`}>
                        Nombre <span className="text-accent">*</span>
                      </Label>
                      <Input
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Tu nombre completo"
                        className={`h-11 transition-all focus:ring-2 focus:ring-accent/20 ${
                          errors.nombre && touched.nombre ? "border-destructive focus:ring-destructive/20" : ""
                        }`}
                      />
                      {errors.nombre && touched.nombre && (
                        <p className="text-sm text-destructive mt-1">{errors.nombre}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className={`text-sm font-medium ${errors.email && touched.email ? "text-destructive" : ""}`}>
                        Email <span className="text-accent">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="tu@email.com"
                        className={`h-11 transition-all focus:ring-2 focus:ring-accent/20 ${
                          errors.email && touched.email ? "border-destructive focus:ring-destructive/20" : ""
                        }`}
                      />
                      {errors.email && touched.email && (
                        <p className="text-sm text-destructive mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="compania" className={`text-sm font-medium flex items-center gap-2 ${errors.compania && touched.compania ? "text-destructive" : ""}`}>
                        <Building2 className="h-4 w-4 text-muted-foreground" />
                        Compañía
                      </Label>
                      <Input
                        id="compania"
                        name="compania"
                        value={formData.compania}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Nombre de tu empresa"
                        className={`h-11 transition-all focus:ring-2 focus:ring-accent/20 ${
                          errors.compania && touched.compania ? "border-destructive focus:ring-destructive/20" : ""
                        }`}
                      />
                      {errors.compania && touched.compania && (
                        <p className="text-sm text-destructive mt-1">{errors.compania}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="telefono" className={`text-sm font-medium ${errors.telefono && touched.telefono ? "text-destructive" : ""}`}>
                        <Phone className="h-4 w-4 text-muted-foreground inline mr-2" />
                        Teléfono <span className="text-accent">*</span>
                      </Label>
                      <Input
                        id="telefono"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="+54 11 4000-0000"
                        className={`h-11 transition-all focus:ring-2 focus:ring-accent/20 ${
                          errors.telefono && touched.telefono ? "border-destructive focus:ring-destructive/20" : ""
                        }`}
                      />
                      {errors.telefono && touched.telefono && (
                        <p className="text-sm text-destructive mt-1">{errors.telefono}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                      <Label htmlFor="asunto" className={`text-sm font-medium ${errors.asunto && touched.asunto ? "text-destructive" : ""}`}>
                        Asunto <span className="text-accent">*</span>
                      </Label>
                      <Input
                        id="asunto"
                        name="asunto"
                        value={formData.asunto}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="¿En qué podemos ayudarte?"
                        className={`h-11 transition-all focus:ring-2 focus:ring-accent/20 ${
                          errors.asunto && touched.asunto ? "border-destructive focus:ring-destructive/20" : ""
                        }`}
                      />
                      {errors.asunto && touched.asunto && (
                        <p className="text-sm text-destructive mt-1">{errors.asunto}</p>
                      )}
                    </div>

                  <div className="space-y-2">
                    <Label htmlFor="mensaje" className={`text-sm font-medium ${errors.mensaje && touched.mensaje ? "text-destructive" : ""}`}>
                      Mensaje <span className="text-accent">*</span>
                    </Label>
                    <Textarea
                      id="mensaje"
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      rows={5}
                      placeholder="Contanos sobre tu proyecto o consulta..."
                      className={`resize-none transition-all focus:ring-2 focus:ring-accent/20 ${
                        errors.mensaje && touched.mensaje ? "border-destructive focus:ring-destructive/20" : ""
                      }`}
                    />
                    {errors.mensaje && touched.mensaje && (
                      <p className="text-sm text-destructive mt-1">{errors.mensaje}</p>
                    )}
                  </div>
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full md:w-auto px-8 h-12 text-base font-semibold gap-2 group"
                    disabled={isSubmitting || !isFormValid()}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar Mensaje
                        <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="border-t border-border bg-muted/30">
        <div className="container mx-auto px-6 py-16 md:py-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Nuestra Ubicación</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Visitanos en nuestras instalaciones o contactanos para coordinar una visita.
            </p>
          </div>
          
          <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-black/10 border border-border">
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none z-10" />
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.6320153812544!2d-58.39118612520779!3d-34.68923576201806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a33351f74b9f81%3A0x156f75b050432252!2sService%20Vial%20S.A.!5e0!3m2!1ses!2sar!4v1764850305559!5m2!1ses!2sar" 
              width="100%" 
              height="500" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
              title="Ubicación de Service Vial S.A."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border bg-gradient-to-br from-accent/5 via-background to-accent/10 py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              ¿Listo para comenzar tu proyecto?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Nuestro equipo de profesionales está disponible para brindarte el mejor asesoramiento en soluciones de seguridad vial.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="h-12 px-8 gap-2">
                <Phone className="h-4 w-4" />
                Llamanos Ahora
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 gap-2">
                <Mail className="h-4 w-4" />
                Escribinos por Email
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
