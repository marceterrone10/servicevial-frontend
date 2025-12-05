"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Send, Building2, Phone } from "lucide-react"
import { useContactForm } from "@/hooks/useContactForm"

export function ContactForm() {
  const {
    formData,
    errors,
    touched,
    isSubmitting,
    isFormValid,
    handleSubmit,
    handleChange,
    handleBlur,
  } = useContactForm()

  const getFieldClasses = (fieldName: keyof typeof errors) =>
    `h-11 transition-all focus:ring-2 focus:ring-accent/20 ${
      errors[fieldName] && touched[fieldName] ? "border-destructive focus:ring-destructive/20" : ""
    }`

  const getLabelClasses = (fieldName: keyof typeof errors) =>
    `text-sm font-medium ${errors[fieldName] && touched[fieldName] ? "text-destructive" : ""}`

  return (
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
          {/* Nombre y Email */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="nombre" className={getLabelClasses("nombre")}>
                Nombre <span className="text-accent">*</span>
              </Label>
              <Input
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Tu nombre completo"
                className={getFieldClasses("nombre")}
              />
              {errors.nombre && touched.nombre && (
                <p className="text-sm text-destructive mt-1">{errors.nombre}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className={getLabelClasses("email")}>
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
                className={getFieldClasses("email")}
              />
              {errors.email && touched.email && (
                <p className="text-sm text-destructive mt-1">{errors.email}</p>
              )}
            </div>
          </div>

          {/* Compañía y Teléfono */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="compania" className={`${getLabelClasses("compania")} flex items-center gap-2`}>
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
                className={getFieldClasses("compania")}
              />
              {errors.compania && touched.compania && (
                <p className="text-sm text-destructive mt-1">{errors.compania}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="telefono" className={getLabelClasses("telefono")}>
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
                className={getFieldClasses("telefono")}
              />
              {errors.telefono && touched.telefono && (
                <p className="text-sm text-destructive mt-1">{errors.telefono}</p>
              )}
            </div>
          </div>

          {/* Asunto */}
          <div className="space-y-2">
            <Label htmlFor="asunto" className={getLabelClasses("asunto")}>
              Asunto <span className="text-accent">*</span>
            </Label>
            <Input
              id="asunto"
              name="asunto"
              value={formData.asunto}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="¿En qué podemos ayudarte?"
              className={getFieldClasses("asunto")}
            />
            {errors.asunto && touched.asunto && (
              <p className="text-sm text-destructive mt-1">{errors.asunto}</p>
            )}
          </div>

          {/* Mensaje */}
          <div className="space-y-2">
            <Label htmlFor="mensaje" className={getLabelClasses("mensaje")}>
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
  )
}

