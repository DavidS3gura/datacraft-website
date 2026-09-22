import * as React from "react"
import { ArrowRight, Lightbulb, HeartHandshake, Palette, Code2, Users, Target, Eye, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Reveal, StaggerGroup, StaggerItem, staggerItem } from "@/components/motion/reveal"

export default function Nosotros() {
  const valores = [
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Innovación",
      desc: "Buscamos siempre la forma más eficiente y moderna de resolver problemas técnicos."
    },
    {
      icon: <HeartHandshake className="h-8 w-8" />,
      title: "Compromiso",
      desc: "Nos adueñamos de tus objetivos. Tu éxito en el mundo digital es también el nuestro."
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Diseño funcional",
      desc: "La estética importa, pero la usabilidad y la conversión son nuestra prioridad."
    },
    {
      icon: <Code2 className="h-8 w-8" />,
      title: "Tecnología a medida",
      desc: "No usamos plantillas genéricas; creamos soluciones específicas para cada necesidad."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Acompañamiento cercano",
      desc: "No desaparecemos al entregar el proyecto. Te guiamos y soportamos a largo plazo."
    }
  ]

  const productos = [
    {
      title: "DataCraft Booking",
      desc: "Plataforma de reservas en línea: agenda, clientes, comunicaciones y analíticas para negocios que trabajan con citas.",
      image: "/images/booking-cover.png",
      url: "https://booking-staging.datacraft.website/planes",
      urlLabel: "Ver planes"
    },
    {
      title: "POS DataCraft",
      desc: "Punto de venta para restaurantes: comandas en tiempo real, pagos, facturación, inventario y control de personal.",
      image: "/images/pos-datacraft.png",
      url: `https://wa.me/573181865120?text=${encodeURIComponent("Hola DataCraft, quiero solicitar una demo del POS DataCraft")}`,
      urlLabel: "Solicitar demo"
    }
  ]

  return (
    <main className="flex-1">
      <section className="py-20 md:py-32 relative overflow-hidden bg-foreground text-background">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/2 opacity-30 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/20 rounded-full blur-3xl -translate-x-1/3 translate-y-1/2 opacity-20 pointer-events-none"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Reveal className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary mb-8">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
              Agencia de software hecha en Colombia
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-8">
              Sobre <span className="text-primary">DataCraft</span>
            </h1>
            <p className="text-xl md:text-3xl font-light leading-relaxed text-background/90 font-display">
              "DataCraft nace con el propósito de transformar ideas en soluciones digitales funcionales, modernas y escalables."
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl mx-auto mb-16" direction="left">
            <p className="text-xl md:text-2xl leading-relaxed text-muted-foreground border-l-4 border-primary pl-6 py-2">
              Nos enfocamos en crear herramientas tecnológicas que ayuden a negocios, emprendedores y empresas a tener presencia digital, vender más y optimizar sus procesos.
            </p>
          </Reveal>

          <StaggerGroup className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <StaggerItem variants={staggerItem} className="bg-card border rounded-2xl p-8 hover-elevate transition-all duration-300">
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Target className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-bold font-display mb-3 text-foreground">Nuestra Misión</h3>
              <p className="text-muted-foreground leading-relaxed">
                Democratizar el acceso a la tecnología: llevar software de calidad profesional — antes reservado para grandes empresas — a negocios y emprendedores que quieren crecer.
              </p>
            </StaggerItem>
            <StaggerItem variants={staggerItem} className="bg-card border rounded-2xl p-8 hover-elevate transition-all duration-300">
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Eye className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-bold font-display mb-3 text-foreground">Nuestra Visión</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ser el aliado tecnológico de referencia para pymes y emprendedores en Latinoamérica, reconocidos por construir software que realmente funciona y genera resultados.
              </p>
            </StaggerItem>
          </StaggerGroup>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
              Nuestros Valores
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Los pilares sobre los que construimos cada proyecto y cada relación con nuestros clientes.
            </p>
          </Reveal>

          <StaggerGroup className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {valores.map((valor, i) => (
              <StaggerItem key={i} variants={staggerItem} className="bg-card border rounded-2xl p-8 hover-elevate transition-all duration-300">
                <div className="mb-4 text-primary">
                  {valor.icon}
                </div>
                <h3 className="text-xl font-bold font-display mb-3 text-foreground">{valor.title}</h3>
                <p className="text-muted-foreground">{valor.desc}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
              No solo construimos para clientes
            </h2>
            <p className="text-lg text-muted-foreground">
              También desarrollamos nuestros propios productos. Cada solución que ves aquí nace de la misma tecnología y dedicación que pondríamos en tu proyecto.
            </p>
          </Reveal>

          <StaggerGroup className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {productos.map((producto, i) => (
              <StaggerItem key={i} variants={staggerItem} className="bg-card border rounded-2xl overflow-hidden hover-elevate transition-all duration-300 flex flex-col">
                <div className="aspect-[16/9] bg-muted overflow-hidden">
                  <img
                    src={producto.image}
                    alt={producto.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold font-display mb-2 text-foreground">{producto.title}</h3>
                  <p className="text-muted-foreground text-sm flex-1 mb-5">{producto.desc}</p>
                  <a href={producto.url} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="gap-1.5">
                      <ExternalLink className="h-3.5 w-3.5" />
                      {producto.urlLabel}
                    </Button>
                  </a>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="py-24 text-center">
        <Reveal className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold mb-6">Trabajemos juntos</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Estamos listos para escuchar tus ideas y convertirlas en una realidad digital.
          </p>
          <a
            href={`https://wa.me/573181865120?text=${encodeURIComponent("Hola DataCraft, quiero iniciar un proyecto con ustedes")}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="rounded-full shadow-lg shadow-primary/20 px-8">
              Iniciar proyecto
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </Reveal>
      </section>
    </main>
  )
}
