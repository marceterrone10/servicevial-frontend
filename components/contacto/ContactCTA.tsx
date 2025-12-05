import { Button } from "@/components/ui/button"
import { Mail, Phone } from "lucide-react"

export function ContactCTA() {
  return (
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
  )
}

