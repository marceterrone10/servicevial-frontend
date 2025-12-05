import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { StatsSection } from "@/components/home/StatsSection"
import { Hero } from "@/components/home/Hero"
import { ProductsSection } from "@/components/home/ProductsSection"
import { ContactSection } from "@/components/home/ContactSection"

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsSection />
      <ProductsSection />
      <ContactSection />
    </>
  )
}
