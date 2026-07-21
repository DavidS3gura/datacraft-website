import * as React from "react"
import { Link } from "wouter"
import { ArrowRight, Rocket, MonitorSmartphone, Settings } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Reveal, StaggerGroup, StaggerItem, staggerItem } from "@/components/motion/reveal"

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background pt-16 md:pt-24 lg:pt-32 pb-16 md:pb-24 lg:pb-32">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/50 to-background/90" />
          <img 
            src="/images/hero.jpg" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-30 dark:opacity-40 object-center"
          />
          {/* Noise overlay */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZUZpbHRlciI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgibm9pc2VGaWx0ZXIpIi8+PC9zdmc+')] opacity-20 pointer-events-none mix-blend-overlay"></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm text-primary mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
            Agencia de desarrollo web en Colombia
          </div>
          
          <h1 className="max-w-4xl font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
            Creamos sitios web y soluciones digitales que <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">impulsan tu negocio</span>
          </h1>
          
          <p className="mt-6 max-w-2xl text-lg sm:text-xl text-muted-foreground animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            En DataCraft diseñamos páginas web, tiendas virtuales y sistemas personalizados pensados para hacer crecer tu marca, automatizar procesos y mejorar la experiencia de tus clientes.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            <Link href="/contacto">
              <Button size="lg" className="w-full sm:w-auto text-base rounded-full shadow-lg shadow-primary/25 hover:shadow-primary/40 px-8 h-12">
                Solicitar cotización
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/servicios">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-base rounded-full px-8 h-12">
                Ver nuestros servicios
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              ¿Por qué elegir DataCraft?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              No solo hacemos páginas bonitas, construimos herramientas digitales que generan resultados.
            </p>
          </Reveal>
          
          <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <StaggerItem variants={staggerItem} className="group rounded-2xl border bg-card p-8 hover-elevate-2 transition-all duration-300">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                <Rocket className="h-7 w-7" />
              </div>
              <h3 className="mb-3 text-xl font-bold font-display">Alto Rendimiento</h3>
              <p className="text-muted-foreground leading-relaxed">
                Sitios web optimizados para cargar rápido, mejorar tu posicionamiento SEO y retener a tus visitantes.
              </p>
            </StaggerItem>
            
            <StaggerItem variants={staggerItem} className="group rounded-2xl border bg-card p-8 hover-elevate-2 transition-all duration-300">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent group-hover:scale-110 transition-transform duration-300">
                <MonitorSmartphone className="h-7 w-7" />
              </div>
              <h3 className="mb-3 text-xl font-bold font-display">Diseño Responsivo</h3>
              <p className="text-muted-foreground leading-relaxed">
                Experiencias perfectas en móviles, tablets y escritorio. Tus clientes te verán bien desde cualquier dispositivo.
              </p>
            </StaggerItem>
            
            <StaggerItem variants={staggerItem} className="group rounded-2xl border bg-card p-8 hover-elevate-2 transition-all duration-300">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-secondary/10 text-secondary group-hover:scale-110 transition-transform duration-300">
                <Settings className="h-7 w-7" />
              </div>
              <h3 className="mb-3 text-xl font-bold font-display">Autogestionable</h3>
              <p className="text-muted-foreground leading-relaxed">
                Te entregamos el control total. Actualiza tu contenido fácilmente sin depender de terceros.
              </p>
            </StaggerItem>
          </StaggerGroup>
        </div>
      </section>

      {/* Services Summary */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
                Soluciones digitales completas
              </h2>
              <p className="text-lg text-muted-foreground">
                Desde landing pages efectivas hasta sistemas complejos. Tenemos la tecnología adecuada para tu próximo paso.
              </p>
            </div>
            <Link href="/servicios" className="shrink-0">
              <Button variant="ghost" className="group font-medium">
                Ver todos los servicios
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </Reveal>

          <StaggerGroup className="grid md:grid-cols-2 gap-8">
            <StaggerItem variants={staggerItem} className="rounded-2xl border bg-card overflow-hidden group">
              <div className="p-8 pb-0">
                <h3 className="text-2xl font-bold font-display mb-3">Sitios Web Corporativos</h3>
                <p className="text-muted-foreground mb-6">Proyecta confianza y profesionalismo con una página web a la medida de tu empresa.</p>
              </div>
              <div className="h-48 bg-muted relative overflow-hidden mt-6 flex items-center justify-center p-8">
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10"></div>
                <div className="w-full h-full bg-background rounded-t-xl shadow-xl border border-b-0 p-4 transform translate-y-4 group-hover:-translate-y-2 transition-transform duration-500 flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary/20"></div>
                    <div className="h-4 w-32 bg-muted rounded"></div>
                  </div>
                  <div className="h-2 w-full bg-muted rounded mt-2"></div>
                  <div className="h-2 w-3/4 bg-muted rounded"></div>
                  <div className="h-24 w-full bg-muted/50 rounded mt-2"></div>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem variants={staggerItem} className="rounded-2xl border bg-card overflow-hidden group">
              <div className="p-8 pb-0">
                <h3 className="text-2xl font-bold font-display mb-3">E-commerce</h3>
                <p className="text-muted-foreground mb-6">Tu tienda abierta 24/7. Vende tus productos en línea con pasarelas de pago integradas.</p>
              </div>
              <div className="h-48 bg-muted relative overflow-hidden mt-6 flex items-center justify-center p-8">
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10"></div>
                <div className="w-full h-full bg-background rounded-t-xl shadow-xl border border-b-0 p-4 transform translate-y-4 group-hover:-translate-y-2 transition-transform duration-500">
                  <div className="grid grid-cols-2 gap-3 h-full">
                    <div className="bg-muted/50 rounded-lg h-full"></div>
                    <div className="bg-muted/50 rounded-lg h-full"></div>
                  </div>
                </div>
              </div>
            </StaggerItem>
          </StaggerGroup>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-foreground text-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl text-background">
              ¿Cómo trabajamos?
            </h2>
            <p className="mt-4 text-lg text-background/70">
              Un proceso ágil, transparente y orientado a resultados.
            </p>
          </Reveal>

          <StaggerGroup className="grid md:grid-cols-4 gap-8">
            {[
              { num: "01", title: "Descubrimiento", desc: "Entendemos tu negocio, tus objetivos y tu competencia." },
              { num: "02", title: "Diseño UI/UX", desc: "Creamos interfaces atractivas y enfocadas en la conversión." },
              { num: "03", title: "Desarrollo", desc: "Programamos con tecnologías modernas, seguras y escalables." },
              { num: "04", title: "Lanzamiento", desc: "Desplegamos tu proyecto y te enseñamos a gestionarlo." }
            ].map((step, i) => (
              <StaggerItem key={i} variants={staggerItem} className="relative">
                {i !== 3 && <div className="hidden md:block absolute top-6 left-[60%] w-[80%] h-px bg-background/20" />}
                <div className="text-5xl font-display font-bold text-background/10 mb-4">{step.num}</div>
                <h3 className="text-xl font-bold font-display mb-3 text-background">{step.title}</h3>
                <p className="text-background/70">{step.desc}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -skew-y-2 transform origin-top-left z-0"></div>
        <Reveal className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6 max-w-2xl mx-auto">
            ¿Listo para llevar tu negocio al siguiente nivel?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-xl mx-auto">
            Agenda una consulta gratuita con nuestro equipo y descubre cómo podemos ayudarte.
          </p>
          <Link href="/contacto">
            <Button size="lg" className="rounded-full shadow-lg shadow-primary/20 px-10 h-14 text-lg font-semibold">
              Hablemos de tu proyecto
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </Reveal>
      </section>
    </main>
  )
}
