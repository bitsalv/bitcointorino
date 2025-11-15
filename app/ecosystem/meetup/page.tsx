import { Metadata } from "next"
import Link from "next/link"
import { Users, ArrowLeft, ExternalLink, MessageCircle, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Community - Ecosystem Bitcoin Torino",
  description: "Community e gruppi Bitcoin attivi a Torino e in Piemonte",
}

const communities = [
  {
    name: "Bitcoin Torino",
    description: "La community principale di Bitcoin a Torino. Organizziamo meetup mensili, workshop educativi e eventi per promuovere l'adozione di Bitcoin nella città.",
    type: "Community Principale",
    members: "200+",
    frequency: "Meetup mensile",
    links: [
      { type: "telegram", label: "Gruppo Telegram", url: "https://t.me/bitcointorino" },
      { type: "luma", label: "Eventi Luma", url: "https://luma.com/user/bitcointorino" },
    ],
    color: "bg-bitcoin-blue",
  },
  {
    name: "Bitcoin Italia",
    description: "La community Bitcoin italiana più grande, con sezione dedicata al Piemonte. Discussioni su tecnologia, economia e adozione di Bitcoin in Italia.",
    type: "Community Nazionale",
    members: "5000+",
    frequency: "Attiva quotidianamente",
    links: [
      { type: "telegram", label: "Gruppo Telegram", url: "https://t.me/bitcoinita" },
      { type: "website", label: "Sito Web", url: "https://bitcoin-italia.org" },
    ],
    color: "bg-orange-500",
  },
  {
    name: "Lightning Network Italia",
    description: "Community dedicata a Lightning Network in Italia. Discussioni tecniche, guide pratiche e supporto per l'uso di LN.",
    type: "Community Tecnica",
    members: "1000+",
    frequency: "Attiva settimanalmente",
    links: [
      { type: "telegram", label: "Gruppo Telegram", url: "https://t.me/lightningnetworkita" },
    ],
    color: "bg-purple-600",
  },
  {
    name: "Bitcoin Piemonte",
    description: "Network regionale che connette le community Bitcoin di tutto il Piemonte. Coordinamento eventi e iniziative regionali.",
    type: "Community Regionale",
    members: "300+",
    frequency: "Eventi trimestrali",
    links: [
      { type: "telegram", label: "Gruppo Telegram", url: "https://t.me/bitcoinpiemonte" },
    ],
    color: "bg-green-600",
  },
  {
    name: "Satoshi Spritz Torino",
    description: "Incontri informali e aperitivi Bitcoin. Un modo rilassato per conoscere altri bitcoiner e discutere in libertà.",
    type: "Meetup Informale",
    members: "150+",
    frequency: "Mensile",
    links: [
      { type: "telegram", label: "Gruppo Telegram", url: "https://t.me/satoshispritzto" },
    ],
    color: "bg-amber-500",
  },
  {
    name: "Women in Bitcoin Italia",
    description: "Community dedicata alle donne interessate a Bitcoin. Spazio inclusivo per educazione, networking e supporto.",
    type: "Community Tematica",
    members: "500+",
    frequency: "Eventi mensili",
    links: [
      { type: "telegram", label: "Gruppo Telegram", url: "https://t.me/womeninbitcoinit" },
      { type: "website", label: "Sito Web", url: "https://womeninbitcoin.it" },
    ],
    color: "bg-pink-500",
  },
]

export default function MeetupPage() {
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
                <Users className="h-8 w-8" aria-hidden="true" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">Community</h1>
            </div>
            <p className="text-xl text-gray-100">
              Le community e i gruppi Bitcoin attivi a Torino e in Piemonte
            </p>
          </div>
        </div>
      </section>

      {/* Communities Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {communities.map((community, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 border-2 border-gray-200 hover:border-bitcoin-blue transition-all duration-300 hover:shadow-lg"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className={`w-3 h-3 rounded-full ${community.color}`} />
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">
                          {community.type}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{community.name}</h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-4">
                    {community.description}
                  </p>

                  {/* Stats */}
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4 pb-4 border-b">
                    <div className="flex items-center">
                      <Users className="mr-2 h-4 w-4" aria-hidden="true" />
                      <span>{community.members} membri</span>
                    </div>
                    <div className="flex items-center">
                      <MessageCircle className="mr-2 h-4 w-4" aria-hidden="true" />
                      <span>{community.frequency}</span>
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex flex-col gap-2">
                    {community.links.map((link, linkIndex) => (
                      <Button
                        key={linkIndex}
                        asChild
                        variant={linkIndex === 0 ? "default" : "outline"}
                        size="sm"
                        className="w-full"
                      >
                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                          {link.type === "telegram" && <MessageCircle className="mr-2 h-4 w-4" aria-hidden="true" />}
                          {link.type === "website" && <Globe className="mr-2 h-4 w-4" aria-hidden="true" />}
                          {link.type === "luma" && <ExternalLink className="mr-2 h-4 w-4" aria-hidden="true" />}
                          {link.label}
                        </a>
                      </Button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Create Community Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Users className="h-12 w-12 text-bitcoin-blue mx-auto mb-4" aria-hidden="true" />
            <h2 className="text-3xl font-bold mb-4">Vuoi creare una nuova community?</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Se stai pensando di avviare una nuova community Bitcoin a Torino o in Piemonte, 
              possiamo aiutarti a promuoverla e metterti in contatto con altri organizzatori.
            </p>
            <Button asChild size="lg">
              <a href="mailto:info@bitcointorino.org">
                Contattaci
                <ExternalLink className="ml-2 h-5 w-5" aria-hidden="true" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
