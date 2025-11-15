import { Metadata } from "next"
import Link from "next/link"
import { Building2, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Aziende - Ecosystem Bitcoin Torino",
  description: "Imprese e startup che utilizzano Bitcoin e Lightning Network a Torino",
}

const companies = [
  {
    name: "Azienda Bitcoin 1",
    description: "Descrizione dell'azienda e del suo utilizzo di Bitcoin",
    category: "Tecnologia",
    services: ["Lightning Network", "Wallet Development", "Consulenza"],
  },
  {
    name: "Azienda Bitcoin 2",
    description: "Descrizione dell'azienda e del suo utilizzo di Bitcoin",
    category: "Finanza",
    services: ["Bitcoin Treasury", "Pagamenti B2B", "Mining"],
  },
  {
    name: "Startup Bitcoin 1",
    description: "Descrizione della startup e del suo progetto",
    category: "Innovazione",
    services: ["Smart Contracts", "DeFi", "Education"],
  },
]

export default function AziendePage() {
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
                <Building2 className="h-8 w-8" aria-hidden="true" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">Aziende</h1>
            </div>
            <p className="text-xl text-gray-100">
              Imprese e startup che utilizzano Bitcoin e Lightning Network a Torino
            </p>
          </div>
        </div>
      </section>

      {/* Companies List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Aziende dell&apos;Ecosystem</h2>
            <div className="bg-bitcoin-blue/10 border-2 border-bitcoin-blue rounded-lg p-8 mb-8 text-center">
              <p className="text-lg">
                Stiamo costruendo la directory delle aziende Bitcoin di Torino. 
                Se la tua azienda utilizza Bitcoin, contattaci per essere inserito!
              </p>
            </div>
            <div className="space-y-6">
              {companies.map((company, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 border-2 border-gray-200 hover:border-bitcoin-blue transition-colors"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <span className="px-3 py-1 bg-bitcoin-blue/10 text-bitcoin-blue text-sm font-medium rounded-full">
                        {company.category}
                      </span>
                      <h3 className="text-2xl font-bold mt-3 mb-2">{company.name}</h3>
                      <p className="text-muted-foreground mb-4">{company.description}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {company.services.map((service, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                      >
                        {service}
                      </span>
                    ))}
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
              La tua azienda usa Bitcoin?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Unisciti all&apos;ecosystem Bitcoin di Torino e fai parte della rete 
              di aziende innovative che stanno costruendo il futuro dell&apos;economia.
            </p>
            <Button asChild size="lg">
              <a href="mailto:info@bitcointorino.org">
                Contattaci per essere inserito
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

