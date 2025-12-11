import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-lg bg-primary" />
            <span className="ml-2 text-xl font-bold tracking-tight">DesignARG</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#productos" className="text-sm font-medium transition-colors hover:text-primary">
            Productos
          </Link>
          <Link href="#ofertas" className="text-sm font-medium transition-colors hover:text-primary">
            Ofertas
          </Link>
          <Link href="#nosotros" className="text-sm font-medium transition-colors hover:text-primary">
            Nosotros
          </Link>
        </nav>

        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </div>
    </header>
  )
}
