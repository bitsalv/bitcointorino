export function Partners() {
  // Mock partner logos (in production, these would be actual logo images)
  const partners = [
    { name: "Politecnico di Torino", logo: "PT" },
    { name: "Toolbox Coworking", logo: "TB" },
    { name: "Bitcoin Italia", logo: "BI" },
    { name: "Lightning Labs", logo: "LL" },
    { name: "Blockstream", logo: "BS" },
    { name: "Casa", logo: "CA" },
    { name: "Swan Bitcoin", logo: "SB" },
    { name: "Ledger", logo: "LD" },
  ]

  return (
    <section id="partner" className="py-16 bg-white border-t border-b scroll-mt-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Partner & Supporter
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Collaboriamo con aziende e organizzazioni leader nell&apos;ecosistema Bitcoin.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center p-6 bg-gray-50 rounded-lg border-2 border-gray-200 hover:border-bitcoin-blue transition-colors group"
            >
              <div className="text-center">
                {/* Placeholder logo - in production, use actual images */}
                <div className="w-20 h-20 mx-auto mb-3 bg-gradient-to-br from-bitcoin-blue to-bitcoin-blue-light rounded-full flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform">
                  {partner.logo}
                </div>
                <div className="text-sm font-medium text-muted-foreground">
                  {partner.name}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Vuoi diventare partner dell&apos;associazione?
          </p>
          <a
            href="mailto:info@bitcointorino.it"
            className="inline-flex items-center text-bitcoin-blue font-bold hover:underline"
          >
            Contattaci →
          </a>
        </div>
      </div>
    </section>
  )
}

