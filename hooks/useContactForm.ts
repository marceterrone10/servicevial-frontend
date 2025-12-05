"use client"

import { useState } from "react"
import { useToast } from "@/hooks/use-toast"
import { 
  FormErrors, 
  validateField, 
  validateNombre, 
  validateEmail, 
  validateTelefono,
  validateCompania,
  validateAsunto,
  validateMensaje 
} from "@/lib/validations/contact"
import { INITIAL_FORM_DATA, API_ENDPOINT } from "@/lib/constants/contact"

export type FormData = typeof INITIAL_FORM_DATA

export function useContactForm() {
  const [formData, setFormData] = useState<FormData>({ ...INITIAL_FORM_DATA })
  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {
      nombre: validateNombre(formData.nombre),
      email: validateEmail(formData.email),
      telefono: validateTelefono(formData.telefono),
      compania: validateCompania(formData.compania),
      asunto: validateAsunto(formData.asunto),
      mensaje: validateMensaje(formData.mensaje),
    }
    setErrors(newErrors)
    return !Object.values(newErrors).some(Boolean)
  }

  const isFormValid = (): boolean => {
    const tempErrors: FormErrors = {
      nombre: validateNombre(formData.nombre),
      email: validateEmail(formData.email),
      telefono: validateTelefono(formData.telefono),
      compania: validateCompania(formData.compania),
      asunto: validateAsunto(formData.asunto),
      mensaje: validateMensaje(formData.mensaje),
    }
    return !Object.values(tempErrors).some(Boolean)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    setTouched({
      nombre: true, email: true, telefono: true,
      compania: true, asunto: true, mensaje: true,
    })

    if (!validateForm()) return

    setIsSubmitting(true)
    
    try {
      const requestData = {
        name: formData.nombre,
        email: formData.email,
        phone: formData.telefono || undefined,
        company: formData.compania || undefined,
        subject: formData.asunto,
        message: formData.mensaje,
      }

      const response = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestData),
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ message: "Error al enviar el formulario" }))
        let errorMessage = "Error al enviar el formulario"
        if (errorData.message) {
          errorMessage = Array.isArray(errorData.message) 
            ? errorData.message.join(". ") 
            : errorData.message
        } else if (errorData.error) {
          errorMessage = errorData.error
        }
        throw new Error(errorMessage)
      }

      toast({
        title: "¡Mensaje enviado!",
        description: "Tu consulta ha sido enviada correctamente. Te responderemos a la brevedad.",
      })

      setFormData({ ...INITIAL_FORM_DATA })
      setErrors({})
      setTouched({})
    } catch (error) {
      toast({
        title: "Error al enviar",
        description: error instanceof Error ? error.message : "Ocurrió un error. Por favor, intenta nuevamente.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    
    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }))
    } else if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setTouched((prev) => ({ ...prev, [name]: true }))
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }))
  }

  return {
    formData,
    errors,
    touched,
    isSubmitting,
    isFormValid,
    handleSubmit,
    handleChange,
    handleBlur,
  }
}

