import * as React from "react"
import { Link } from "wouter"
import { ExternalLink, Code2, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Reveal, StaggerGroup, StaggerItem, staggerItem } from "@/components/motion/reveal"

type Project = {
  id: string
  title: string
  description: string
  image: string
  fit?: "cover" | "contain"
  imageBg?: string
  links?: { label: string; url: string }[]
  tags: string[]
  techStack: string[]
  fullDesc: string
}

const projects: Project[] = [
  {
    id: "web",
    title: "Sitios Web para Negocios",
    description: "Páginas web modernas y a la medida para cualquier tipo de negocio: salones, restaurantes, consultorios, tiendas y más.",
    image: "/images/portfolio-web.png",
    tags: ["Página Web", "Diseño UI/UX"],
    techStack: ["React", "Tailwind CSS", "Framer Motion"],
    fullDesc: "Diseñamos sitios web que reflejan la identidad de cada negocio: catálogo de servicios, galería de trabajos, contacto directo por WhatsApp y diseño 100% responsivo. Adaptable a cualquier industria."
  },
  {
    id: "ecommerce",
    title: "Tiendas Virtuales (E-commerce)",
    description: "Tiendas online con pasarela de pagos, catálogo de productos y gestión de inventario. Vende lo que quieras: joyería, moda, tecnología, alimentos y más.",
    image: "/images/portfolio-ecommerce.png",
    tags: ["E-commerce", "Tienda Virtual"],
    techStack: ["Next.js", "Stripe", "PostgreSQL", "Zustand"],
    fullDesc: "Desarrollamos e-commerce completos con rendimiento impecable en la carga de imágenes, carrito de compras dinámico, pasarelas de pago y un panel de administración personalizado para gestionar productos e inventario."
  },
  {
    id: "professional",
    title: "Landing Pages de Alta Conversión",
    description: "Páginas de aterrizaje (One-Pagers) orientadas a captar clientes para cualquier servicio profesional: abogados, médicos, consultores, agencias y más.",
    image: "/images/portfolio-landing.png",
    tags: ["Landing Page", "Conversión"],
    techStack: ["React", "Vite", "HubSpot CRM", "Tailwind CSS"],
    fullDesc: "Estrategia digital y desarrollo de landing page enfocada en resultados. Se aplicaron técnicas de copywriting y jerarquía visual para guiar al usuario hacia el formulario de contacto, logrando aumentar la tasa de conversión en un 40%."
  },
  {
    id: "booking",
    title: "Sistemas de Reserva y Agendamiento",
    description: "Plataformas de reservas en línea para cualquier negocio que trabaje con citas: clínicas, salones, talleres, consultorios. Notificaciones automáticas y calendario dinámico.",
    image: "/images/booking-hero.png",
    links: [
      { label: "Ver planes", url: "https://booking-staging.datacraft.website/planes" },
    ],
    tags: ["Sistema Web", "Automatización"],
    techStack: ["React", "Node.js", "PostgreSQL", "Twilio API"],
    fullDesc: "Sistema web a medida que elimina las agendas de papel. Tus clientes agendan solos según tu disponibilidad y tu equipo gestiona el calendario desde un solo panel, con recordatorios automáticos por correo y WhatsApp."
  },
  {
    id: "pos",
    title: "POS DataCraft — Punto de Venta",
    description: "Sistema POS para restaurantes y negocios: comandas en tiempo real, pagos, facturación, inventario y control de personal en una sola plataforma.",
    image: "/images/pos-datacraft.png",
    tags: ["POS", "Sistema Web"],
    techStack: ["React", "Node.js", "PostgreSQL", "NestJS"],
    fullDesc: "POS DataCraft centraliza la operación de restaurantes: comandas en tiempo real, múltiples métodos de pago, propinas, documentos de venta, inventario y control de personal (meseros, cajeros y cocina) en un solo flujo."
  },
  {
    id: "dashboard",
    title: "Software y Paneles a Medida",
    description: "Plataformas internas, dashboards y sistemas de gestión diseñados a la medida de los procesos de tu empresa, con reportes en tiempo real.",
    image: "/images/portfolio-dashboard.png",
    tags: ["Dashboard", "Desarrollo a Medida"],
    techStack: ["React", "Recharts", "Express", "MongoDB"],
    fullDesc: "Desarrollo de herramientas internas para centralizar la información de tu negocio. Visualización de datos complejos, exportación de reportes a PDF/Excel y gestión de usuarios con diferentes niveles de permisos."
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
                  <div className={cn("aspect-[4/3] relative overflow-hidden", project.imageBg ?? "bg-muted")}>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className={cn(
                        "w-full h-full transition-transform duration-700 group-hover:scale-105",
                        project.fit === "contain" ? "object-contain" : "object-cover"
                      )}
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
              <DialogContent className="sm:max-w-[700px] p-0 overflow-y-auto border-0 max-h-[90vh]">
                <div className={cn("aspect-[16/9] max-h-[300px] w-full relative", project.imageBg ?? "bg-muted")}>
                  <img src={project.image} alt={project.title} className={cn("w-full h-full", project.fit === "contain" ? "object-contain" : "object-cover")} />
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
                  
                  <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-2">
                      {project.links?.map(link => (
                        <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" size="sm" className="gap-1.5">
                            <ExternalLink className="h-3.5 w-3.5" />
                            {link.label}
                          </Button>
                        </a>
                      ))}
                    </div>
                    <div className="flex justify-end ml-auto">
                      <DialogClose asChild>
                        <Button variant="outline" className="mr-2">Cerrar</Button>
                      </DialogClose>
                      <a
                        href={`https://wa.me/573181865120?text=${encodeURIComponent(`Hola DataCraft, me interesa cotizar un proyecto similar a: ${project.title}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button>Cotizar un proyecto similar</Button>
                      </a>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </StaggerGroup>

        <Reveal className="mt-20 text-center max-w-3xl mx-auto">
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground mb-4">
            ¿No ves lo que necesitas en nuestro portafolio?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Diseñamos software a la medida de tus necesidades. Cuéntanos tu idea y la hacemos realidad.
          </p>
          <Link href="/contacto">
            <Button size="lg" className="rounded-full shadow-lg shadow-primary/20 px-10 h-14 text-lg font-semibold">
              Solicitar cotización
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </Reveal>
      </div>
    </main>
  )
}
