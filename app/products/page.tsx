import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const products = [
  {
    category: "Steel Alloys",
    description: "High-strength steel products for structural and industrial applications",
    items: [
      { name: "Carbon Steel", spec: "ASTM A36", applications: "Construction, Manufacturing" },
      { name: "Stainless Steel", spec: "304/316", applications: "Food, Chemical, Marine" },
      { name: "Tool Steel", spec: "D2/O1", applications: "Dies, Tooling, Cutting" },
      { name: "Alloy Steel", spec: "4140/4340", applications: "Automotive, Aerospace" },
    ],
    image: "/steel-metal-sheets-stacked.jpg",
  },
  {
    category: "Aluminum",
    description: "Lightweight and corrosion-resistant aluminum products",
    items: [
      { name: "Aluminum 6061", spec: "T6", applications: "Aircraft, Marine, Structures" },
      { name: "Aluminum 7075", spec: "T6", applications: "Aerospace, Military" },
      { name: "Aluminum 5052", spec: "H32", applications: "Sheet Metal, Fuel Tanks" },
      { name: "Aluminum 2024", spec: "T3", applications: "Aviation, Fasteners" },
    ],
    image: "/aluminum-metal-profiles.jpg",
  },
  {
    category: "Copper & Brass",
    description: "Conductive and decorative copper-based alloys",
    items: [
      { name: "Pure Copper", spec: "C110", applications: "Electrical, Plumbing" },
      { name: "Brass", spec: "C260/C360", applications: "Fittings, Hardware" },
      { name: "Bronze", spec: "C932", applications: "Bearings, Marine" },
      { name: "Beryllium Copper", spec: "C172", applications: "Springs, Electronics" },
    ],
    image: "/copper-brass-metal-rods.jpg",
  },
  {
    category: "Specialty Metals",
    description: "Exotic alloys for demanding applications",
    items: [
      { name: "Titanium", spec: "Grade 5", applications: "Aerospace, Medical" },
      { name: "Inconel", spec: "718", applications: "High-temp, Turbines" },
      { name: "Monel", spec: "400", applications: "Marine, Chemical" },
      { name: "Hastelloy", spec: "C-276", applications: "Corrosive Environments" },
    ],
    image: "/titanium-specialty-metal.jpg",
  },
]

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="border-b border-border pt-24">
        <div className="container mx-auto px-6 py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-balance">Our Products</h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed text-pretty">
              Comprehensive range of metallurgical products engineered for performance, durability, and precision in
              demanding industrial applications.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="space-y-24">
            {products.map((product, index) => (
              <div
                key={product.category}
                className={`grid items-center gap-8 lg:grid-cols-2 ${index % 2 === 1 ? "lg:grid-flow-dense" : ""}`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <Badge className="mb-4">{product.category}</Badge>
                  <h2 className="text-3xl font-bold tracking-tight">{product.category}</h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{product.description}</p>

                  <div className="mt-8 space-y-4">
                    {product.items.map((item) => (
                      <Card key={item.name} className="p-4">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h3 className="font-bold">{item.name}</h3>
                            <p className="mt-1 text-sm text-muted-foreground">Spec: {item.spec}</p>
                          </div>
                          <Badge variant="outline" className="shrink-0">
                            {item.applications}
                          </Badge>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>

                <div
                  className={`relative aspect-[3/2] overflow-hidden rounded-sm bg-muted ${
                    index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                  }`}
                >
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.category}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
