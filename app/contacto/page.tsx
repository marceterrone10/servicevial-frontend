import { ContactInfoSidebar } from "@/components/contacto/ContactInfoSidebar"
import { ContactForm } from "@/components/contacto/ContactForm"
import { MapSection } from "@/components/contacto/MapSection"
import { ContactCTA } from "@/components/contacto/ContactCTA"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Main Contact Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 pt-12">
          <div className="grid gap-12 lg:grid-cols-5">
            <ContactInfoSidebar />
            <ContactForm />
          </div>
        </div>
      </section>

      <MapSection />
      <ContactCTA />
    </div>
  )
}
