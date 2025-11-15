import { Metadata } from "next"
import Link from "next/link"
import { Calendar, Building2, Store, MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Ecosystem - Bitcoin Torino",
  description: "Esplora l'ecosistema Bitcoin di Torino: meetup, aziende, merchant e spazi che accettano Bitcoin",
}

const ecosystemSections = [
  {
    title: "Community",
    description: "Community e gruppi Bitcoin attivi a Torino e in Piemonte",
    icon: Calendar,
    href: "/ecosystem/meetup",
    color: "text-bitcoin-blue",
    bgColor: "bg-bitcoin-blue/10",
  },
  {
    title: "Aziende",
    description: "Imprese e startup che utilizzano Bitcoin e Lightning Network",
    icon: Building2,
    href: "/ecosystem/aziende",
    color: "text-bitcoin-blue",
    bgColor: "bg-bitcoin-blue/10",
  },
  {
    title: "Merchant",
    description: "Negozi e attività commerciali che accettano Bitcoin",
    icon: Store,
    href: "/ecosystem/merchant",
    color: "text-bitcoin-blue",
    bgColor: "bg-bitcoin-blue/10",
  },
  {
    title: "Spazi",
    description: "Location e coworking Bitcoin-friendly a Torino",
    icon: MapPin,
    href: "/ecosystem/spazi",
    color: "text-bitcoin-blue",
    bgColor: "bg-bitcoin-blue/10",
  },
]

export default function EcosystemPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-bitcoin-blue to-bitcoin-blue-dark text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Ecosystem Bitcoin Torino
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8">
              Scopri la rete di persone, aziende e spazi che stanno costruendo 
              l&apos;economia Bitcoin a Torino
            </p>
          </div>
        </div>
      </section>

      {/* Ecosystem Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {ecosystemSections.map((section) => {
              const Icon = section.icon
              return (
                <Link
                  key={section.href}
                  href={section.href}
                  className="group bg-white rounded-lg p-8 border-2 border-gray-200 hover:border-bitcoin-blue transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`${section.bgColor} p-4 rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`h-8 w-8 ${section.color}`} aria-hidden="true" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold mb-2 group-hover:text-bitcoin-blue transition-colors">
                        {section.title}
                      </h2>
                      <p className="text-muted-foreground mb-4">
                        {section.description}
                      </p>
                      <div className="flex items-center text-bitcoin-blue font-medium">
                        Esplora
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" aria-hidden="true" />
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Vuoi far parte dell&apos;ecosystem?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Se sei un&apos;azienda, un merchant o gestisci uno spazio e vuoi essere inserito 
              nella nostra mappa dell&apos;ecosystem Bitcoin di Torino, contattaci!
            </p>
            <Button asChild size="lg">
              <a href="mailto:info@bitcointorino.org">
                Contattaci
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

