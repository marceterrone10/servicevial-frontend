export function MapSection() {
  return (
    <section className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-6 py-16 md:py-20">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Nuestra Ubicación</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Visitanos en nuestras instalaciones o contactanos para coordinar una visita.
          </p>
        </div>
        
        <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-black/10 border border-border">
          <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none z-10" />
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.6320153812544!2d-58.39118612520779!3d-34.68923576201806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a33351f74b9f81%3A0x156f75b050432252!2sService%20Vial%20S.A.!5e0!3m2!1ses!2sar!4v1764850305559!5m2!1ses!2sar" 
            width="100%" 
            height="500" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
            title="Ubicación de Service Vial S.A."
          />
        </div>
      </div>
    </section>
  )
}

