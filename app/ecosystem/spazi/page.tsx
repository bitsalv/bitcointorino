import { Metadata } from "next"
import Link from "next/link"
import { MapPin, ArrowLeft, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Spazi - Ecosystem Bitcoin Torino",
  description: "Location e coworking Bitcoin-friendly a Torino",
}

const spaces = [
  {
    name: "Coworking Bitcoin",
    type: "Coworking",
    address: "Via esempio 10, Torino",
    description: "Spazio di lavoro condiviso con pagamenti in Bitcoin e community crypto",
    features: ["WiFi", "Sale Riunioni", "Caffè", "Eventi Bitcoin"],
    availability: "Postazioni disponibili",
  },
  {
    name: "Bitcoin Hub",
    type: "Event Space",
    address: "Corso esempio 20, Torino",
    description: "Spazio per eventi, meetup e workshop sulla tecnologia Bitcoin",
    features: ["Sala Eventi", "Proiettore", "Streaming", "Catering"],
    availability: "Prenotabile",
  },
  {
    name: "Crypto Café",
    type: "Caffetteria & Workspace",
    address: "Piazza esempio 30, Torino",
    description: "Caffetteria con postazioni di lavoro e pagamenti Lightning",
    features: ["WiFi", "Power Outlets", "Bitcoin ATM", "Caffè Lightning"],
    availability: "Aperto al pubblico",
  },
]

export default function SpaziPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-bitcoin-blue to-bitcoin-blue-dark text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link 
              href="/ecosystem"
              className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
              Torna all&apos;Ecosystem
            </Link>
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-white/10 p-4 rounded-lg">
                <MapPin className="h-8 w-8" aria-hidden="true" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">Spazi</h1>
            </div>
            <p className="text-xl text-gray-100">
              Location e coworking Bitcoin-friendly a Torino
            </p>
          </div>
        </div>
      </section>

      {/* Spaces List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Spazi Disponibili</h2>
            <div className="bg-bitcoin-blue/10 border-2 border-bitcoin-blue rounded-lg p-8 mb-8 text-center">
              <p className="text-lg">
                Stiamo mappando gli spazi Bitcoin-friendly di Torino. 
                Se gestisci uno spazio che accetta Bitcoin o vuoi ospitare eventi 
                della community, contattaci!
              </p>
            </div>
            <div className="space-y-6">
              {spaces.map((space, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 border-2 border-gray-200 hover:border-bitcoin-blue transition-colors"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="px-3 py-1 bg-bitcoin-blue/10 text-bitcoin-blue text-sm font-medium rounded-full">
                          {space.type}
                        </span>
                        <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">
                          {space.availability}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{space.name}</h3>
                      <div className="flex items-center text-sm text-muted-foreground mb-3">
                        <MapPin className="mr-2 h-4 w-4" aria-hidden="true" />
                        <span>{space.address}</span>
                      </div>
                      <p className="text-muted-foreground mb-4">{space.description}</p>
                    </div>
                  </div>
                  <div className="border-t pt-4">
                    <p className="text-sm font-semibold mb-2">Servizi disponibili:</p>
                    <div className="flex flex-wrap gap-2">
                      {space.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Hai uno spazio da condividere?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Se gestisci un coworking, una location per eventi o uno spazio 
              che potrebbe ospitare la community Bitcoin di Torino, parliamone!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <a href="mailto:info@bitcointorino.org">
                  Proponi il tuo spazio
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="https://t.me/bitcointorino" target="_blank" rel="noopener noreferrer">
                  Chiedi alla community
                  <ExternalLink className="ml-2 h-5 w-5" aria-hidden="true" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

