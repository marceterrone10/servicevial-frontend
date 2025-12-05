import { Mail, Phone, MapPin, Clock } from "lucide-react"

export const CONTACT_INFO = [
  {
    icon: Mail,
    title: "Email",
    lines: ["info@servicevial.com.ar", "ventas@servicevial.com.ar"],
  },
  {
    icon: Phone,
    title: "Teléfono",
    lines: ["+54 11 4000-0000", "+54 11 4000-0001"],
  },
  {
    icon: MapPin,
    title: "Dirección",
    lines: ["Buenos Aires, Argentina"],
  },
  {
    icon: Clock,
    title: "Horario de Atención",
    lines: ["Lunes a Viernes: 8:00 - 17:00", "Sábados: 8:00 - 12:00"],
  },
] as const

export const INITIAL_FORM_DATA = {
  nombre: "",
  email: "",
  telefono: "",
  compania: "",
  asunto: "",
  mensaje: "",
}

export const API_ENDPOINT = "http://localhost:3300/api/consults"
export const API_ENDPOINT_CONTACT = "https://servicevial-backend.onrender.com/api/consults" //produccion

