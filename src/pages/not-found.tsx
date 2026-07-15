import { useLocation } from "wouter";
import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  const [, setLocation] = useLocation();

  return (
    <div className="flex w-full flex-1 items-center justify-center bg-background py-16">
      <div className="flex max-w-md flex-col items-center text-center">
        <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-primary/10 text-primary">
          <AlertCircle className="h-12 w-12" />
        </div>
        <h1 className="mb-4 text-4xl font-bold font-display text-foreground">
          Página no encontrada
        </h1>
        <p className="mb-8 text-lg text-muted-foreground">
          Lo sentimos, la página que estás buscando no existe o ha sido movida.
        </p>
        <Button onClick={() => setLocation("/")} size="lg" className="rounded-full">
          Volver al inicio
        </Button>
      </div>
    </div>
  );
}