export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-balance md:text-6xl lg:text-7xl animate-fade-in-up">
            Transforma tu espacio de trabajo con diseño premium
          </h1>
          <p className="mt-6 text-lg text-muted-foreground text-balance md:text-xl animate-fade-in-up [animation-delay:200ms]">
            Muebles de diseño, accesorios gaming y soluciones ergonómicas para crear tu setup perfecto
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up [animation-delay:400ms]">
            <a
              href="#productos"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 transform hover:scale-105 transition-transform"
            >
              Ver Catálogo
            </a>
            <a
              href="https://wa.me/5491141613616"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-border bg-background px-8 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-muted transform hover:scale-105 transition-transform"
            >
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="mt-16 px-4 md:px-6">
        <div className="container mx-auto">
          <img
            src="/images/image.png"
            alt="Moderno escritorio con diseño ergonómico y madera natural"
            className="w-full rounded-xl object-cover shadow-2xl animate-fade-in-up [animation-delay:600ms]"
          />
        </div>
      </div>
    </section>
  )
}
