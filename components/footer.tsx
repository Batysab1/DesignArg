import Link from "next/link"
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container px-4 py-12 md:px-6 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="h-8 w-8 rounded-lg bg-primary" />
              <span className="ml-2 text-xl font-bold">DesignARG</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Muebles de diseño premium para tu espacio de trabajo perfecto
            </p>
            <div className="space-y-2 pt-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Buenos Aires, Argentina</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <a href="tel:+5491141613616" className="hover:text-foreground transition-colors">
                  +54 9 1141613616
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Productos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#productos" className="text-muted-foreground hover:text-foreground transition-colors">
                  Escritorios
                </Link>
              </li>
              <li>
                <Link href="#productos" className="text-muted-foreground hover:text-foreground transition-colors">
                  Accesorios Gaming
                </Link>
              </li>
              <li>
                <Link href="#productos" className="text-muted-foreground hover:text-foreground transition-colors">
                  Soportes
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Empresa</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#nosotros" className="text-muted-foreground hover:text-foreground transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Envíos
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Garantía
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Redes Sociales</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="mailto:contacto@designarg.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 DesignARG. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
