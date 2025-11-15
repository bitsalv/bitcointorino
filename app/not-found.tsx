import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <span className="text-9xl font-bold text-bitcoin-blue">404</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Pagina non trovata
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8">
            Spiacenti, la pagina che stai cercando non esiste o è stata spostata.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg">
              <Link href="/">
                <Home className="mr-2 h-5 w-5" aria-hidden="true" />
                Torna alla Home
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-5 w-5" aria-hidden="true" />
                Vai al Blog
              </Link>
            </Button>
          </div>

          {/* Decorative Bitcoin symbol */}
          <div className="mt-16 opacity-20" aria-hidden="true">
            <span className="text-8xl">₿</span>
          </div>
        </div>
      </div>
    </div>
  )
}

