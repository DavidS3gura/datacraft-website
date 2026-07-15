import * as React from "react"
import { ExternalLink, Code2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Reveal, StaggerGroup, StaggerItem, staggerItem } from "@/components/motion/reveal"

const projects = [
  {
    id: "beauty",
    title: "Sitio web para Salón de Belleza",
    description: "Una página web elegante y moderna para un salón de belleza premium, enfocada en mostrar servicios, galería de trabajos y facilitar el contacto por WhatsApp.",
    image: "/images/beauty-salon.jpg",
    tags: ["Página Web", "Diseño UI/UX"],
    techStack: ["React", "Tailwind CSS", "Framer Motion"],
    fullDesc: "Este proyecto consistió en diseñar una experiencia digital que reflejara la elegancia del espacio físico. Se implementó un catálogo visual de servicios, integración directa con WhatsApp para reservas rápidas y un diseño 100% responsivo."
  },
  {
    id: "jewelry",
    title: "E-commerce para Joyería",
    description: "Tienda virtual de lujo con pasarela de pagos integrada, filtros avanzados de búsqueda y un diseño oscuro y sofisticado.",
    image: "/images/jewelry-store.jpg",
    tags: ["E-commerce", "Tienda Virtual"],
    techStack: ["Next.js", "Stripe", "PostgreSQL", "Zustand"],
    fullDesc: "Desarrollo completo de un e-commerce para una marca de joyería fina. El reto principal fue lograr un rendimiento impecable en la carga de imágenes de alta resolución, implementando un carrito de compras dinámico y un panel de administración personalizado para la gestión de inventario."
  },
  {
    id: "professional",
    title: "Landing Page - Servicios Profesionales",
    description: "Sitio de una sola página (One-Pager) de alta conversión para un despacho de abogados, orientado a la captación de leads (clientes potenciales).",
    image: "/images/prof-services.jpg",
    tags: ["Landing Page", "Conversión"],
    techStack: ["React", "Vite", "HubSpot CRM", "Tailwind CSS"],
    fullDesc: "Estrategia digital y desarrollo de landing page enfocada en resultados. Se aplicaron técnicas de copywriting y jerarquía visual para guiar al usuario hacia el formulario de contacto, logrando aumentar la tasa de conversión en un 40%."
  },
  {
    id: "booking",
    title: "Sistema de Reservas",
    description: "Plataforma web personalizada para la gestión de citas de una clínica médica, con notificaciones automatizadas y calendarios dinámicos.",
    image: "/images/booking-system.jpg",
    tags: ["Sistema Web", "Automatización"],
    techStack: ["React", "Node.js", "PostgreSQL", "Twilio API"],
    fullDesc: "Un sistema web a medida que eliminó el uso de agendas de papel. Permite a los pacientes agendar sus propias citas según disponibilidad, y al personal médico gestionar su calendario, enviando recordatorios automáticos por SMS y correo."
  },
  {
    id: "dashboard",
    title: "Plataforma Interna Empresarial",
    description: "Un panel de control (Dashboard) robusto para el análisis de datos de ventas e inventario, con reportes en tiempo real y gráficos interactivos.",
    image: "/images/internal-platform.jpg",
    tags: ["Dashboard", "Desarrollo a Medida"],
    techStack: ["React", "Recharts", "Express", "MongoDB"],
    fullDesc: "Desarrollo de una herramienta interna para centralizar la información de múltiples sucursales. Cuenta con visualización de datos complejos, exportación de reportes a PDF/Excel y gestión de usuarios con diferentes niveles de permisos."
  }
]

export default function Portafolio() {
  return (
    <main className="flex-1 py-16 md:py-24 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl mb-16">
          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-6">
            Nuestro Portafolio
          </h1>
          <p className="text-xl text-muted-foreground">
            Una muestra del trabajo que realizamos. Transformamos requerimientos de negocio en productos digitales excepcionales.
          </p>
        </Reveal>

        <StaggerGroup className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Dialog key={project.id}>
              <DialogTrigger asChild>
                <StaggerItem variants={staggerItem} className="group cursor-pointer rounded-2xl border bg-card overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
                  <div className="aspect-[4/3] bg-muted relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="bg-primary text-primary-foreground font-medium px-4 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2">
                        <ExternalLink className="h-4 w-4" />
                        Ver detalles
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[10px] uppercase tracking-wider font-bold bg-muted text-muted-foreground px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold font-display mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-muted-foreground text-sm flex-1 line-clamp-3">
                      {project.description}
                    </p>
                  </div>
                </StaggerItem>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[700px] p-0 overflow-hidden border-0">
                <div className="aspect-[16/9] w-full relative bg-muted">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 sm:p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs font-semibold bg-primary/10 text-primary px-2.5 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-display mb-2">{project.title}</DialogTitle>
                    <DialogDescription className="text-base text-foreground/80 leading-relaxed">
                      {project.fullDesc}
                    </DialogDescription>
                  </DialogHeader>
                  
                  <div className="mt-8 pt-6 border-t">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4 flex items-center gap-2">
                      <Code2 className="h-4 w-4" />
                      Tecnologías utilizadas
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map(tech => (
                        <span key={tech} className="px-3 py-1.5 border bg-muted/50 rounded-md text-sm font-medium text-foreground">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-8 flex justify-end">
                    <Button variant="outline" className="mr-2">Cerrar</Button>
                    <Button>Cotizar un proyecto similar</Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </StaggerGroup>
      </div>
    </main>
  )
}
