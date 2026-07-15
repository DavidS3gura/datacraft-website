import { Link } from "wouter"

export function Footer() {
  return (
    <footer className="border-t bg-card text-card-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <img
                src="/images/logo.png"
                alt="DataCraft"
                className="h-9 w-9 object-contain"
              />
              <span className="font-display text-lg font-bold tracking-tight">
                DataCraft
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Soluciones digitales funcionales, modernas y escalables para negocios que buscan crecer en internet.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 font-display text-foreground">Enlaces útiles</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/" className="hover:text-primary transition-colors">Inicio</Link></li>
              <li><Link href="/servicios" className="hover:text-primary transition-colors">Servicios</Link></li>
              <li><Link href="/portafolio" className="hover:text-primary transition-colors">Portafolio</Link></li>
              <li><Link href="/nosotros" className="hover:text-primary transition-colors">Nosotros</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 font-display text-foreground">Servicios</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/servicios" className="hover:text-primary transition-colors">Páginas Web</Link></li>
              <li><Link href="/servicios" className="hover:text-primary transition-colors">Tiendas Virtuales</Link></li>
              <li><Link href="/servicios" className="hover:text-primary transition-colors">Desarrollo a Medida</Link></li>
              <li><Link href="/servicios" className="hover:text-primary transition-colors">Automatización</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 font-display text-foreground">Contacto</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Colombia (Atención remota)</li>
              <li><a href="mailto:hola@datacraft.co" className="hover:text-primary transition-colors">hola@datacraft.co</a></li>
              <li><a href="https://wa.me/573015999122" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">+57 301 599 9122</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} DataCraft. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <span className="text-primary font-medium">Hecho en Colombia</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
