import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Wrench, Scissors, Hammer, PackageCheck, TestTube, Truck } from "lucide-react"

const services = [
  {
    icon: Scissors,
    title: "Precision Cutting",
    description:
      'Advanced laser, plasma, and waterjet cutting services for precise metal fabrication with tolerances up to ±0.001".',
    features: ["Laser Cutting", "Plasma Cutting", "Waterjet Cutting", "Sheet Metal Shearing"],
  },
  {
    icon: Wrench,
    title: "Custom Fabrication",
    description:
      "Complete metal fabrication services from design to finished product, including welding, bending, and assembly.",
    features: ["MIG/TIG Welding", "CNC Bending", "Assembly", "Finishing"],
  },
  {
    icon: Hammer,
    title: "Metal Forming",
    description: "State-of-the-art forming capabilities for complex geometries and high-volume production runs.",
    features: ["Press Brake", "Roll Forming", "Stamping", "Deep Drawing"],
  },
  {
    icon: TestTube,
    title: "Material Testing",
    description: "Comprehensive metallurgical testing and analysis to ensure material integrity and compliance.",
    features: ["Tensile Testing", "Hardness Testing", "Chemical Analysis", "X-Ray Inspection"],
  },
  {
    icon: PackageCheck,
    title: "Surface Treatment",
    description: "Professional finishing services to enhance appearance, durability, and corrosion resistance.",
    features: ["Powder Coating", "Anodizing", "Galvanizing", "Polishing"],
  },
  {
    icon: Truck,
    title: "Logistics & Delivery",
    description: "Reliable delivery and logistics services ensuring safe transport of materials to your facility.",
    features: ["Just-in-Time Delivery", "Custom Packaging", "Freight Management", "Warehousing"],
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="border-b border-border pt-24">
        <div className="container mx-auto px-6 py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-balance">Our Services</h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed text-pretty">
              Comprehensive metallurgical services backed by cutting-edge technology and decades of industry expertise.
              From precision cutting to final delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <Card key={service.title} className="p-8">
                  <Icon className="h-12 w-12 text-accent" />
                  <h3 className="mt-6 text-xl font-bold">{service.title}</h3>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{service.description}</p>
                  <ul className="mt-6 space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="border-t border-border bg-card py-16">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-balance">Our Process</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              A streamlined approach to delivering exceptional results
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-4">
            {[
              { step: "01", title: "Consultation", desc: "Discuss project requirements" },
              { step: "02", title: "Design", desc: "Engineering and material selection" },
              { step: "03", title: "Production", desc: "Precision fabrication and testing" },
              { step: "04", title: "Delivery", desc: "Quality assurance and shipment" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-sm bg-accent text-2xl font-bold text-accent-foreground">
                  {item.step}
                </div>
                <h3 className="mt-4 text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
