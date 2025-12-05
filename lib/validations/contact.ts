export interface FormErrors {
  nombre?: string
  email?: string
  telefono?: string
  compania?: string
  asunto?: string
  mensaje?: string
}

export const validateNombre = (value: string): string | undefined => {
  if (!value.trim()) return "El nombre es requerido"
  if (value.trim().length < 2) return "El nombre debe tener al menos 2 caracteres"
  if (value.trim().length > 100) return "El nombre no puede exceder 100 caracteres"
  if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/.test(value.trim())) {
    return "El nombre solo puede contener letras y espacios"
  }
  return undefined
}

export const validateEmail = (value: string): string | undefined => {
  if (!value.trim()) return "El email es requerido"
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(value.trim())) return "Por favor ingresa un email válido"
  return undefined
}

export const validateTelefono = (value: string): string | undefined => {
  if (!value.trim()) return "El teléfono es requerido"
  if (value.trim().length > 20) return "El teléfono no puede exceder 20 caracteres"
  const phoneRegex = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/
  if (!phoneRegex.test(value.trim().replace(/\s/g, ""))) {
    return "Por favor ingresa un teléfono válido"
  }
  return undefined
}

export const validateCompania = (value: string): string | undefined => {
  if (value.trim() && value.trim().length < 2) {
    return "El nombre de la compañía debe tener al menos 2 caracteres"
  }
  if (value.trim().length > 100) return "El nombre de la compañía no puede exceder 100 caracteres"
  return undefined
}

export const validateAsunto = (value: string): string | undefined => {
  if (!value.trim()) return "El asunto es requerido"
  if (value.trim().length < 3) return "El asunto debe tener al menos 3 caracteres"
  if (value.trim().length > 200) return "El asunto no puede exceder 200 caracteres"
  return undefined
}

export const validateMensaje = (value: string): string | undefined => {
  if (!value.trim()) return "El mensaje es requerido"
  if (value.trim().length < 10) return "El mensaje debe tener al menos 10 caracteres"
  if (value.trim().length > 2000) return "El mensaje no puede exceder 2000 caracteres"
  return undefined
}

export const validateField = (name: string, value: string): string | undefined => {
  const validators: Record<string, (v: string) => string | undefined> = {
    nombre: validateNombre,
    email: validateEmail,
    telefono: validateTelefono,
    compania: validateCompania,
    asunto: validateAsunto,
    mensaje: validateMensaje,
  }
  return validators[name]?.(value)
}

