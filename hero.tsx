export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-balance md:text-6xl lg:text-7xl">
            Transforma tu espacio de trabajo con diseño premium
          </h1>
          <p className="mt-6 text-lg text-muted-foreground text-balance md:text-xl">
            Muebles de diseño, accesorios gaming y soluciones ergonómicas para crear tu setup perfecto
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#productos"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              Ver Catálogo
            </a>
            <a
              href="https://wa.me/5491112345678"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-border bg-background px-8 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-muted"
            >
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="mt-16 px-4 md:px-6">
        <div className="container mx-auto">
          <img
            src="https://placehold.co/1400x600?text=Modern+minimalist+home+office+setup+with+wooden+desk+ergonomic+chair+and+natural+lighting"
            alt="Modern minimalist home office setup with wooden desk ergonomic chair and natural lighting"
            className="w-full rounded-xl object-cover shadow-2xl"
          />
        </div>
      </div>
    </section>
  )
}
