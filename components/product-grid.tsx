"use client"

import { ProductCard } from "@/components/product-card"
import { products } from "@/lib/products"

export function ProductGrid() {
  return (
    <section id="productos" className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">Nuestros Productos</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Selecciona el producto que te interesa y contáctanos directamente por WhatsApp
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
