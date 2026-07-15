import * as React from "react"
import { Link, useLocation } from "wouter"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [location] = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  const links = [
    { href: "/", label: "Inicio" },
    { href: "/servicios", label: "Servicios" },
    { href: "/portafolio", label: "Portafolio" },
    { href: "/nosotros", label: "Nosotros" },
  ]

  // Close mobile menu on navigate
  React.useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <img
                src="/images/logo.png"
                alt="DataCraft"
                className="h-11 w-11 object-contain transition-transform duration-300 group-hover:scale-110"
              />
              <span className="font-display text-xl font-bold tracking-tight text-foreground">
                DataCraft
              </span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  location === link.href
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contacto">
              <Button className="rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all font-semibold">
                Solicitar cotización
              </Button>
            </Link>
          </nav>
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">Toggle menu</span>
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="space-y-1 px-4 pb-3 pt-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "block rounded-md px-3 py-2 text-base font-medium",
                  location === link.href
                    ? "bg-primary/10 text-primary"
                    : "text-foreground hover:bg-muted hover:text-primary"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contacto" className="block mt-4">
              <Button className="w-full justify-center">
                Solicitar cotización
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
