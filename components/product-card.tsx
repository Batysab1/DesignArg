"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MessageCircle } from "lucide-react"
import { useState } from "react"
import type { Product } from "@/lib/products"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const [isClicking, setIsClicking] = useState(false)

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
      minimumFractionDigits: 0,
    }).format(price)
  }

  const handleWhatsAppClick = () => {
    setIsClicking(true)

    setTimeout(() => {
      const phoneNumber = "5491141613616"
      const message = `Hola! Me interesa el producto: *${product.name}*\nPrecio: ${formatPrice(product.price)}\n\n¿Podrían darme más información?`
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
      window.open(whatsappUrl, "_blank")
      setIsClicking(false)
    }, 300)
  }

  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300 hover:translate-y-[-8px]">
      <div className="relative overflow-hidden aspect-square bg-muted">
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          {product.oferta && <Badge className="bg-red-600 text-white hover:bg-red-700">EN OFERTA</Badge>}
          <Badge className="bg-background/90 text-foreground backdrop-blur-sm">{product.category}</Badge>
        </div>
      </div>

      <CardHeader>
        <CardTitle className="text-xl">{product.name}</CardTitle>
        <CardDescription className="line-clamp-2">{product.description}</CardDescription>
      </CardHeader>

      <CardContent>
        <div className="text-2xl font-bold text-primary">{formatPrice(product.price)}</div>
      </CardContent>

      <CardFooter>
        <Button
          onClick={handleWhatsAppClick}
          className={`w-full gap-2 transition-all duration-300 ${
            isClicking ? "scale-95 opacity-75" : "hover:scale-105"
          }`}
          size="lg"
        >
          <MessageCircle className={`h-5 w-5 transition-transform duration-300 ${isClicking ? "rotate-12" : ""}`} />
          Consultar por WhatsApp
        </Button>
      </CardFooter>
    </Card>
  )
}
