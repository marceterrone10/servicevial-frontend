import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const builds = [
  {
    title: "Aerospace Wing Component",
    client: "Major Aviation Manufacturer",
    category: "Aerospace",
    description:
      "High-precision aluminum 7075 wing structural components for commercial aircraft. Involved complex CNC machining and certified welding procedures.",
    specs: ["Material: Aluminum 7075-T6", "Weight: 450kg", "Tolerance: ±0.05mm", "Finish: Anodized"],
    image: "/aircraft-wing-metal-structure.jpg",
  },
  {
    title: "Industrial Bridge Framework",
    client: "State Infrastructure Department",
    category: "Construction",
    description:
      "Structural steel framework for pedestrian bridge spanning 120 meters. Included custom fabrication and on-site installation support.",
    specs: ["Material: ASTM A992 Steel", "Length: 120m", "Load Capacity: 500 tons", "Coating: Hot-dip Galvanized"],
    image: "/steel-bridge-structure-construction.jpg",
  },
  {
    title: "Chemical Processing Tank",
    client: "Petrochemical Corporation",
    category: "Industrial",
    description:
      "Corrosion-resistant stainless steel pressure vessel for chemical processing. Met ASME pressure vessel code requirements.",
    specs: ["Material: SS 316L", "Capacity: 50,000L", "Pressure: 150 PSI", "Finish: Electropolished"],
    image: "/stainless-steel-industrial-tank.jpg",
  },
  {
    title: "Marine Propeller Shaft",
    client: "Commercial Shipping Company",
    category: "Marine",
    description:
      "Custom machined propeller shaft assembly from Monel alloy for saltwater resistance. Precision balanced for high-speed operation.",
    specs: ["Material: Monel 400", "Length: 8m", "Diameter: 450mm", "Surface: Polished"],
    image: "/marine-propeller-shaft-metal.jpg",
  },
  {
    title: "Medical Equipment Housing",
    client: "Healthcare Device Manufacturer",
    category: "Medical",
    description:
      "Titanium housing for implantable medical devices. Biocompatible finish with FDA-compliant manufacturing processes.",
    specs: ["Material: Titanium Grade 5", "Finish: Biocompatible", "Tolerance: ±0.02mm", "Sterilizable"],
    image: "/titanium-medical-equipment.jpg",
  },
  {
    title: "Automotive Chassis Components",
    client: "Electric Vehicle Startup",
    category: "Automotive",
    description:
      "Lightweight aluminum chassis components for electric vehicle prototype. Optimized for strength-to-weight ratio.",
    specs: ["Material: Aluminum 6061-T6", "Weight Reduction: 30%", "Crash Tested", "Powder Coated"],
    image: "/aluminum-car-chassis-automotive.jpg",
  },
]

export default function BuildsPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="border-b border-border pt-24">
        <div className="container mx-auto px-6 py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-balance">Featured Builds</h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed text-pretty">
              Explore our portfolio of completed projects showcasing precision engineering, innovative solutions, and
              commitment to excellence across diverse industries.
            </p>
          </div>
        </div>
      </section>

      {/* Builds Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {builds.map((build) => (
              <Card key={build.title} className="overflow-hidden">
                <div className="relative aspect-video overflow-hidden bg-muted">
                  <img
                    src={build.image || "/placeholder.svg"}
                    alt={build.title}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <Badge className="mb-3">{build.category}</Badge>
                  <h3 className="text-xl font-bold text-balance">{build.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{build.client}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{build.description}</p>
                  <div className="mt-6 space-y-2 border-t border-border pt-4">
                    {build.specs.map((spec) => (
                      <div key={spec} className="flex items-start gap-2">
                        <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        <span className="text-xs text-muted-foreground">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-t border-border bg-card py-16">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 md:grid-cols-4">
            {[
              { value: "500+", label: "Completed Projects" },
              { value: "30+", label: "Years Experience" },
              { value: "15", label: "Industry Sectors" },
              { value: "98%", label: "Client Satisfaction" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-accent">{stat.value}</div>
                <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
