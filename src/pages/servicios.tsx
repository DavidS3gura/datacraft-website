import * as React from "react"
import { Link } from "wouter"
import { Globe, LayoutTemplate, ShoppingBag, Code, GitBranch, Wrench, Search, MessageSquare, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Reveal, StaggerGroup, StaggerItem, staggerItem } from "@/components/motion/reveal"

const services = [
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Página web corporativa",
    description: "Ideal para empresas que buscan establecer presencia digital, ganar confianza y mostrar sus servicios de forma profesional.",
    benefits: ["Diseño exclusivo y moderno", "Optimizada para móviles", "Formulario de contacto", "Panel autoadministrable"],
    price: "Desde $1.200.000 COP",
    color: "bg-primary/10 text-primary"
  },
  {
    icon: <LayoutTemplate className="h-6 w-6" />,
    title: "Landing page",
    description: "Una página de aterrizaje enfocada 100% en conversión. Perfecta para captar leads, vender un solo producto o campañas de marketing.",
    benefits: ["Alta tasa de conversión", "Copywriting persuasivo", "Integración con CRM/Email", "Velocidad de carga extrema"],
    price: "Desde $800.000 COP",
    color: "bg-primary/10 text-primary"
  },
  {
    icon: <ShoppingBag className="h-6 w-6" />,
    title: "Tienda virtual / e-commerce",
    description: "Vende 24/7 con una tienda online robusta. Gestión de inventario, pasarelas de pago y carrito de compras intuitivo.",
    benefits: ["Pasarelas de pago (Wompi, MercadoPago)", "Gestión de envíos e inventario", "Catálogo ilimitado", "Cupones y descuentos"],
    price: "Desde $2.500.000 COP",
    color: "bg-accent/10 text-accent"
  },
  {
    icon: <Code className="h-6 w-6" />,
    title: "Sistema web personalizado",
    description: "Software a la medida para resolver problemas específicos de tu negocio. Intranets, CRMs, portales de clientes, etc.",
    benefits: ["Arquitectura escalable", "Bases de datos seguras", "Roles y permisos", "APIs y automatizaciones"],
    price: "Desde $4.500.000 COP",
    color: "bg-secondary/10 text-secondary"
  },
  {
    icon: <GitBranch className="h-6 w-6" />,
    title: "Automatización de procesos",
    description: "Conecta tus herramientas y elimina el trabajo manual. Haz que tus sistemas hablen entre sí de forma automática.",
    benefits: ["Reducción de costos", "Cero errores humanos", "Integración Zapier/Make", "Ahorro de tiempo"],
    price: "Desde $900.000 COP",
    color: "bg-secondary/10 text-secondary"
  },
  {
    icon: <Wrench className="h-6 w-6" />,
    title: "Mantenimiento web",
    description: "Mantén tu sitio seguro, actualizado y rápido. Nos encargamos de la parte técnica para que te enfoques en vender.",
    benefits: ["Backups semanales", "Actualizaciones de seguridad", "Monitoreo 24/7", "Soporte técnico prioritario"],
    price: "Desde $250.000 COP / mes",
    color: "bg-accent/10 text-accent"
  },
  {
    icon: <Search className="h-6 w-6" />,
    title: "Optimización SEO básica",
    description: "Aparece en los primeros resultados de Google. Optimizamos la estructura técnica y el contenido de tu web.",
    benefits: ["Auditoría técnica", "Búsqueda de palabras clave", "Optimización de velocidad", "Configuración Google Analytics"],
    price: "Desde $600.000 COP",
    color: "bg-primary/10 text-primary"
  },
  {
    icon: <MessageSquare className="h-6 w-6" />,
    title: "Integración con WhatsApp/Redes",
    description: "Canaliza a tus visitantes directamente a WhatsApp, Messenger o formularios inteligentes conectados a tu correo.",
    benefits: ["Chat flotante de WhatsApp", "Formularios dinámicos", "Enlaces a redes sociales", "Mensajes pre-configurados"],
    price: "Desde $150.000 COP",
    color: "bg-[#25D366]/10 text-[#25D366]"
  }
]

export default function Servicios() {
  return (
    <main className="flex-1 py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl mb-16">
          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-6">
            Soluciones a la medida de tus objetivos
          </h1>
          <p className="text-xl text-muted-foreground">
            Desde la presencia básica hasta sistemas complejos. Utilizamos tecnología moderna para crear herramientas que tu negocio realmente necesita.
          </p>
        </Reveal>

        <StaggerGroup className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mb-16">
          {services.map((service, i) => (
            <StaggerItem key={i} variants={staggerItem} className="flex flex-col rounded-2xl border bg-card p-6 hover:shadow-lg transition-all duration-300">
              <div className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl ${service.color}`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold font-display mb-2">{service.title}</h3>
              <p className="text-muted-foreground mb-6 flex-1 text-sm leading-relaxed">
                {service.description}
              </p>
              
              <div className="mb-6">
                <ul className="space-y-2">
                  {service.benefits.map((benefit, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-foreground/80">
                      <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="font-bold text-foreground bg-muted px-3 py-1.5 rounded-md text-sm whitespace-nowrap">
                  {service.price}
                </span>
                <Link href={`/contacto?servicio=${encodeURIComponent(service.title)}`} className="w-full sm:w-auto">
                  <Button variant="default" className="w-full sm:w-auto text-sm group rounded-full">
                    Cotizar
                    <ArrowRight className="ml-2 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal className="rounded-xl bg-accent/10 border border-accent/20 p-6 flex items-start gap-4 max-w-4xl mx-auto">
          <div className="mt-1 flex-shrink-0 text-accent">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
          </div>
          <div>
            <h4 className="font-bold text-foreground mb-1">Nota importante sobre los precios</h4>
            <p className="text-sm text-muted-foreground">
              Los valores presentados son referencias iniciales. <strong className="text-foreground">Los valores pueden variar según el alcance, funcionalidades y necesidades específicas del cliente.</strong> Cada negocio es único, por lo que recomendamos solicitar una cotización formal para obtener un presupuesto exacto.
            </p>
          </div>
        </Reveal>
      </div>
    </main>
  )
}
