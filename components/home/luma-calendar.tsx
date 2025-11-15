"use client"

import { useEffect } from "react"

export function LumaCalendar() {
  useEffect(() => {
    // This would be the actual Luma embed script
    // For now, we'll create a placeholder that simulates it
    const script = document.createElement('script')
    script.src = 'https://lu.ma/embed/checkout/button.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Cleanup
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [])

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prossimi Eventi
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Partecipa ai nostri meetup, workshop e conferenze per imparare e fare networking 
            con la community Bitcoin di Torino.
          </p>
        </div>

        {/* Luma Calendar Embed Placeholder */}
        <div className="w-full max-w-6xl mx-auto">
          <div 
            className="rounded-lg border-2 border-gray-200 bg-gray-50 overflow-hidden shadow-lg"
            style={{ minHeight: '600px' }}
          >
            {/* Simulated Events - In production, this would be the actual Luma embed */}
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Event 1 */}
                <div className="bg-white rounded-lg p-6 border-l-4 border-garnet shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-sm font-bold text-bitcoin-blue">15 NOV 2025</div>
                    <span className="px-3 py-1 bg-bitcoin-blue/10 text-bitcoin-blue text-xs font-medium rounded-full">
                      Meetup
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Bitcoin Meetup Mensile</h3>
                  <p className="text-muted-foreground mb-4">
                    Incontro mensile della community per discutere delle ultime novità e fare networking.
                  </p>
                  <div className="text-sm text-muted-foreground">
                    📍 Toolbox Coworking, Torino
                  </div>
                </div>

                {/* Event 2 */}
                <div className="bg-white rounded-lg p-6 border-l-4 border-bitcoin-blue shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-sm font-bold text-garnet">22 NOV 2025</div>
                    <span className="px-3 py-1 bg-bitcoin-blue/10 text-bitcoin-blue text-xs font-medium rounded-full">
                      Workshop
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Lightning Network Workshop</h3>
                  <p className="text-muted-foreground mb-4">
                    Workshop pratico su come utilizzare e configurare un nodo Lightning Network.
                  </p>
                  <div className="text-sm text-muted-foreground">
                    📍 Online
                  </div>
                </div>

                {/* Event 3 */}
                <div className="bg-white rounded-lg p-6 border-l-4 border-bitcoin-blue shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-sm font-bold text-bitcoin-blue">29 NOV 2025</div>
                    <span className="px-3 py-1 bg-bitcoin-blue/10 text-bitcoin-blue text-xs font-medium rounded-full">
                      Conferenza
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Bitcoin Security Deep Dive</h3>
                  <p className="text-muted-foreground mb-4">
                    Conferenza sulla sicurezza Bitcoin con esperti del settore.
                  </p>
                  <div className="text-sm text-muted-foreground">
                    📍 Politecnico di Torino
                  </div>
                </div>

                {/* Event 4 */}
                <div className="bg-white rounded-lg p-6 border-l-4 border-bitcoin-blue shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-sm font-bold text-bitcoin-blue">06 DIC 2025</div>
                    <span className="px-3 py-1 bg-bitcoin-blue/10 text-bitcoin-blue text-xs font-medium rounded-full">
                      Social
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Bitcoin Pizza Party</h3>
                  <p className="text-muted-foreground mb-4">
                    Evento sociale per celebrare la community e pagare in Bitcoin!
                  </p>
                  <div className="text-sm text-muted-foreground">
                    📍 Da annunciare
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA to full events page */}
          <div className="text-center mt-8">
            <a
            href="/eventi"
            className="inline-flex items-center text-bitcoin-blue font-bold hover:underline"
            >
              Vedi tutti gli eventi →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

