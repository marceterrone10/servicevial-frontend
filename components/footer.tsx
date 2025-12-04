import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-6 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-accent">
                <span className="text-xl font-bold text-accent-foreground">SV</span>
              </div>
              <span className="text-xl font-bold tracking-tight">Service Vial S.A.</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Soluciones integrales en el area de la seguridad vial
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider">Navegación</h3>
            <ul className="space-y-3">
              {["Inicio", "Productos", "Servicios", "Obras", "Contacto"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase() === "inicio" ? "" : item.toLowerCase()}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div >
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider">Productos</h3>
            <ul className="space-y-3">
              {["Defensas Viales", "Señalización Vertical", "Drenajes", "Agro"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                <span>Email</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                <span>Teléfono</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>Dirección</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Service Vial S.A. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
