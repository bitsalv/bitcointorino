import { Store, Building2, MapPin, ExternalLink } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function Ecosystem() {
  const merchants = [
    { name: "Pizzeria da Marco", location: "Via Roma 10", accepts: "Bitcoin & Lightning" },
    { name: "Caffè Centrale", location: "Piazza Castello 5", accepts: "Lightning Network" },
    { name: "Libreria Moderna", location: "Via Garibaldi 23", accepts: "Bitcoin" },
  ]

  const companies = [
    { name: "TechStart SRL", sector: "Software Development", description: "Sviluppo applicazioni Bitcoin" },
    { name: "CryptoConsulting", sector: "Consulenza", description: "Servizi di consulenza blockchain" },
    { name: "BitPay Italia", sector: "Payments", description: "Soluzioni di pagamento" },
  ]

  const spaces = [
    { name: "Toolbox Coworking", address: "Via Agostino da Montefeltro 2", features: "Coworking accetta BTC" },
    { name: "Politecnico di Torino", address: "Corso Duca degli Abruzzi", features: "Partner educativo" },
    { name: "Bitcoin Space", address: "Da definire", features: "Spazio dedicato community" },
  ]

  return (
    <>
      {/* Merchant */}
      <section id="merchant" className="py-20 bg-white scroll-mt-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Store className="h-10 w-10 text-bitcoin-blue" aria-hidden="true" />
                <h2 className="text-3xl md:text-4xl font-bold">Merchant</h2>
              </div>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Negozi e attività a Torino che accettano Bitcoin
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {merchants.map((merchant, index) => (
                <Card key={index} className="hover:border-bitcoin-blue transition-colors">
                  <CardHeader>
                    <CardTitle>{merchant.name}</CardTitle>
                    <CardDescription className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      {merchant.location}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="inline-flex px-3 py-1 bg-bitcoin-blue/10 text-bitcoin-blue text-sm font-medium rounded-full">
                      {merchant.accepts}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <p className="text-muted-foreground mb-4">Sei un commerciante e vuoi accettare Bitcoin?</p>
              <a
                href="mailto:merchants@bitcointorino.it"
                className="inline-flex items-center text-bitcoin-blue font-bold hover:underline"
              >
                Contattaci per essere aggiunto alla lista →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Aziende */}
      <section id="aziende" className="py-20 bg-gray-50 scroll-mt-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Building2 className="h-10 w-10 text-bitcoin-blue" aria-hidden="true" />
                <h2 className="text-3xl md:text-4xl font-bold">Aziende</h2>
              </div>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Imprese del territorio che operano nell&apos;ecosistema Bitcoin
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {companies.map((company, index) => (
                <Card key={index} className="hover:border-bitcoin-blue transition-colors">
                  <CardHeader>
                    <div className="inline-flex px-3 py-1 bg-bitcoin-blue/10 text-bitcoin-blue text-xs font-medium rounded-full mb-3 w-fit">
                      {company.sector}
                    </div>
                    <CardTitle>{company.name}</CardTitle>
                    <CardDescription>{company.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <p className="text-muted-foreground mb-4">La tua azienda lavora con Bitcoin?</p>
              <a
                href="mailto:business@bitcointorino.it"
                className="inline-flex items-center text-bitcoin-blue font-bold hover:underline"
              >
                Entra nell&apos;ecosistema →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Spazi */}
      <section id="spazi" className="py-20 bg-white scroll-mt-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <MapPin className="h-10 w-10 text-bitcoin-blue" aria-hidden="true" />
                <h2 className="text-3xl md:text-4xl font-bold">Spazi</h2>
              </div>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Location e spazi dove organizziamo eventi e incontri
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {spaces.map((space, index) => (
                <Card key={index} className="hover:border-bitcoin-blue transition-colors">
                  <CardHeader>
                    <CardTitle>{space.name}</CardTitle>
                    <CardDescription className="flex items-start gap-2 mb-3">
                      <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      {space.address}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{space.features}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <p className="text-muted-foreground mb-4">Hai uno spazio da proporre per i nostri eventi?</p>
              <a
                href="mailto:spaces@bitcointorino.it"
                className="inline-flex items-center text-bitcoin-blue font-bold hover:underline"
              >
                Proponi uno spazio →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

