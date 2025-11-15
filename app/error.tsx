"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { AlertCircle } from "lucide-react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <AlertCircle className="h-20 w-20 text-bitcoin-blue" aria-hidden="true" />
          </div>
          
          <h1 className="text-4xl font-bold mb-4">
            Qualcosa è andato storto
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8">
            Ci scusiamo per l&apos;inconveniente. Si è verificato un errore imprevisto.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={reset}
              size="lg"
            >
              Riprova
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
            >
              <a href="/">Torna alla Home</a>
            </Button>
          </div>

          {process.env.NODE_ENV === 'development' && (
            <details className="mt-8 p-4 bg-gray-100 rounded-lg text-left">
              <summary className="cursor-pointer font-medium mb-2">
                Dettagli errore (solo in sviluppo)
              </summary>
              <pre className="text-sm overflow-auto">
                {error.message}
              </pre>
            </details>
          )}
        </div>
      </div>
    </div>
  )
}

