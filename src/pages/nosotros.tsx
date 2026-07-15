import * as React from "react"
import { Link } from "wouter"
import { CheckCircle2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Reveal, StaggerGroup, StaggerItem, staggerItem } from "@/components/motion/reveal"

export default function Nosotros() {
  const valores = [
    {
      title: "Innovación",
      desc: "Buscamos siempre la forma más eficiente y moderna de resolver problemas técnicos."
    },
    {
      title: "Compromiso",
      desc: "Nos adueñamos de tus objetivos. Tu éxito en el mundo digital es también el nuestro."
    },
    {
      title: "Diseño funcional",
      desc: "La estética importa, pero la usabilidad y la conversión son nuestra prioridad."
    },
    {
      title: "Tecnología a medida",
      desc: "No usamos plantillas genéricas; creamos soluciones específicas para cada necesidad."
    },
    {
      title: "Acompañamiento cercano",
      desc: "No desaparecemos al entregar el proyecto. Te guiamos y soportamos a largo plazo."
    }
  ]

  return (
    <main className="flex-1">
      <section className="py-20 md:py-32 relative overflow-hidden bg-foreground text-background">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/2 opacity-30 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/20 rounded-full blur-3xl -translate-x-1/3 translate-y-1/2 opacity-20 pointer-events-none"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Reveal className="max-w-4xl mx-auto text-center">
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
          <Reveal className="max-w-3xl mx-auto" direction="left">
            <p className="text-xl md:text-2xl leading-relaxed text-muted-foreground mb-12 border-l-4 border-primary pl-6 py-2">
              Nos enfocamos en crear herramientas tecnológicas que ayuden a negocios, emprendedores y empresas a tener presencia digital, vender más y optimizar sus procesos.
            </p>
          </Reveal>
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
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold font-display mb-3 text-foreground">{valor.title}</h3>
                <p className="text-muted-foreground">{valor.desc}</p>
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
          <Link href="/contacto">
            <Button size="lg" className="rounded-full shadow-lg shadow-primary/20 px-8">
              Iniciar proyecto
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </Reveal>
      </section>
    </main>
  )
}
