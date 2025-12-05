export const SLIDES = [
  {
    image: "/home/hero.webp",
    alt: "Señalización vial profesional",
    badge: "Líderes en Seguridad Vial",
    title: "Soluciones Integrales en",
    highlight: "Señalización Vial",
    description: "Más de 25 años de experiencia brindando productos y servicios de calidad para la seguridad en rutas y caminos.",
  },
  {
    image: "/home/defensa.webp",
    alt: "Equipamiento de seguridad vial",
    title: "Defensas",
    description: "Sistemas de contención vial diseñados para proteger vidas y minimizar daños en accidentes de tránsito.",
  },
  {
    image: "/home/senalizacion_vertical.webp",
    alt: "Soluciones integrales",
    title: "Señalización Vertical",
    description: "Carteles y señales viales fabricados con materiales de primera calidad y alta durabilidad.",
  },
] as const

export type Slide = {
  image: string
  alt: string
  title: string
  description: string
  badge?: string
  highlight?: string
}
