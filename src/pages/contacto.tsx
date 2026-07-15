import * as React from "react"
import { useLocation } from "wouter"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { MapPin, Mail, Phone, Clock, MessageCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Reveal } from "@/components/motion/reveal"

const contactFormSchema = z.object({
  nombre: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  correo: z.string().email("Debe ser un correo electrónico válido"),
  telefono: z.string().min(7, "El teléfono debe tener al menos 7 caracteres"),
  servicio: z.string().min(1, "Debes seleccionar un servicio"),
  mensaje: z.string().min(10, "El mensaje debe ser más detallado"),
})

type ContactFormValues = z.infer<typeof contactFormSchema>

export default function Contacto() {
  const [location] = useLocation()
  
  // Extract servicio from URL if present (e.g. ?servicio=Landing%20page)
  const queryParams = new URLSearchParams(window.location.search)
  const defaultServicio = queryParams.get("servicio") || ""

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      nombre: "",
      correo: "",
      telefono: "",
      servicio: defaultServicio,
      mensaje: "",
    },
  })

  function onSubmit(data: ContactFormValues) {
    const text = `Hola, quiero solicitar información sobre los servicios de DataCraft.\n\nNombre: ${data.nombre}\nCorreo: ${data.correo}\nTeléfono: ${data.telefono}\nServicio de interés: ${data.servicio}\nMensaje: ${data.mensaje}\n\nPor favor, quisiera recibir una cotización.`
    
    const encodedText = encodeURIComponent(text)
    window.open(`https://wa.me/573015999122?text=${encodedText}`, "_blank")
    
    // Optional: reset form after sending
    // form.reset()
  }

  return (
    <main className="flex-1 py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl mb-16">
          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-6">
            Ponte en contacto
          </h1>
          <p className="text-xl text-muted-foreground">
            Cuéntanos sobre tu proyecto. Estamos listos para asesorarte y enviarte una cotización a la medida de tus necesidades.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8">
          <Reveal className="lg:col-span-2 space-y-8" direction="left">
            <div className="bg-card border rounded-2xl p-8">
              <h3 className="font-display text-xl font-bold mb-6">Información de contacto</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 text-primary rounded-lg shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Teléfono / WhatsApp</p>
                    <a href="https://wa.me/573015999122" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      +57 301 599 9122
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 text-primary rounded-lg shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Correo Electrónico</p>
                    <a href="mailto:hola@datacraft.co" className="text-muted-foreground hover:text-primary transition-colors">
                      hola@datacraft.co
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 text-primary rounded-lg shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Ubicación</p>
                    <p className="text-muted-foreground">
                      Colombia (Atención 100% remota)
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 text-primary rounded-lg shrink-0">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Horario de atención</p>
                    <p className="text-muted-foreground">
                      Lunes a Viernes: 8:00 AM - 6:00 PM<br/>
                      Sábados: 9:00 AM - 1:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#25D366]/10 border border-[#25D366]/20 rounded-2xl p-8 text-center">
              <MessageCircle className="h-10 w-10 text-[#25D366] mx-auto mb-4" />
              <h3 className="font-bold mb-2">¿Respuesta más rápida?</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Escríbenos directamente a nuestro WhatsApp y hablemos en tiempo real.
              </p>
              <Button 
                onClick={() => window.open("https://wa.me/573015999122", "_blank")}
                className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white border-0"
              >
                Escribir al WhatsApp
              </Button>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-3" direction="right" delay={0.1}>
            <div className="bg-card border rounded-2xl p-8 md:p-10 shadow-sm">
              <h3 className="font-display text-2xl font-bold mb-6">Solicitar cotización</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="nombre"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nombre completo</FormLabel>
                          <FormControl>
                            <Input placeholder="Ej. Juan Pérez" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="telefono"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Teléfono / WhatsApp</FormLabel>
                          <FormControl>
                            <Input placeholder="Ej. 301 234 5678" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="correo"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Correo electrónico</FormLabel>
                        <FormControl>
                          <Input placeholder="juan@empresa.com" type="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="servicio"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Servicio de interés</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecciona un servicio..." />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Página web corporativa">Página web corporativa</SelectItem>
                            <SelectItem value="Landing page">Landing page</SelectItem>
                            <SelectItem value="Tienda virtual / e-commerce">Tienda virtual / e-commerce</SelectItem>
                            <SelectItem value="Sistema web personalizado">Sistema web personalizado</SelectItem>
                            <SelectItem value="Automatización de procesos">Automatización de procesos</SelectItem>
                            <SelectItem value="Mantenimiento web">Mantenimiento web</SelectItem>
                            <SelectItem value="Optimización SEO básica">Optimización SEO básica</SelectItem>
                            <SelectItem value="Integración con WhatsApp/Redes">Integración con WhatsApp/Redes</SelectItem>
                            <SelectItem value="Otro (especificar en mensaje)">Otro (especificar en mensaje)</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="mensaje"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Cuéntanos sobre tu proyecto</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Describe brevemente de qué trata tu negocio y qué te gustaría lograr con este servicio..." 
                            className="min-h-[120px] resize-y" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" size="lg" className="w-full text-base font-semibold">
                    Enviar solicitud por WhatsApp
                  </Button>
                  <p className="text-xs text-center text-muted-foreground mt-4">
                    Al enviar, se abrirá WhatsApp con los datos completados para confirmar el envío.
                  </p>
                </form>
              </Form>
            </div>
          </Reveal>
        </div>
      </div>
    </main>
  )
}
