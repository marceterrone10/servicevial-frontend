import { ContactInfoCard } from "./ContactInfoCard"
import { CONTACT_INFO } from "@/lib/constants/contact"

export function ContactInfoSidebar() {
  return (
    <div className="lg:col-span-2 space-y-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Información de Contacto</h2>
        <p className="text-muted-foreground">
          Comunicate con nosotros por cualquiera de estos medios.
        </p>
      </div>

      {CONTACT_INFO.map((info) => (
        <ContactInfoCard
          key={info.title}
          icon={info.icon}
          title={info.title}
          lines={info.lines}
        />
      ))}
    </div>
  )
}

