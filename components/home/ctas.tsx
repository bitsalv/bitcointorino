import { Button } from "@/components/ui/button"
import { Calendar, Send, Users, Mail } from "lucide-react"

export function CTAs() {
  return (
    <section className="py-16 bg-white border-y">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Unisciti alla Community
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Scopri i nostri eventi, resta aggiornato e connettiti con gli altri membri
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* LUMA Eventi */}
            <a
              href="https://luma.com/user/bitcointorino"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-lg border-2 border-gray-200 bg-white p-6 hover:border-bitcoin-blue hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-4 rounded-full bg-bitcoin-blue/10 group-hover:bg-bitcoin-blue group-hover:scale-110 transition-all duration-300">
                  <Calendar className="h-8 w-8 text-bitcoin-blue group-hover:text-white transition-colors" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold mb-2">Eventi</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Scopri i prossimi meetup e workshop
                </p>
                <span className="text-bitcoin-blue font-medium group-hover:underline">
                  Vai agli eventi →
                </span>
              </div>
            </a>

            {/* Newsletter */}
            <a
              href="#newsletter"
              className="group relative overflow-hidden rounded-lg border-2 border-gray-200 bg-white p-6 hover:border-bitcoin-blue hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-4 rounded-full bg-bitcoin-blue/10 group-hover:bg-bitcoin-blue group-hover:scale-110 transition-all duration-300">
                  <Mail className="h-8 w-8 text-bitcoin-blue group-hover:text-white transition-colors" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold mb-2">Newsletter</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Ricevi aggiornamenti mensili via email
                </p>
                <span className="text-bitcoin-blue font-medium group-hover:underline">
                  Iscriviti →
                </span>
              </div>
            </a>

            {/* Canale Telegram */}
            <a
              href="https://t.me/bitcointorino"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-lg border-2 border-gray-200 bg-white p-6 hover:border-bitcoin-blue hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-4 rounded-full bg-bitcoin-blue/10 group-hover:bg-bitcoin-blue group-hover:scale-110 transition-all duration-300">
                  <Send className="h-8 w-8 text-bitcoin-blue group-hover:text-white transition-colors" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold mb-2">Canale</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Segui gli annunci su Telegram
                </p>
                <span className="text-bitcoin-blue font-medium group-hover:underline">
                  Segui il canale →
                </span>
              </div>
            </a>

            {/* Gruppo Telegram */}
            <a
              href="https://t.me/bitcointorinogroup"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-lg border-2 border-gray-200 bg-white p-6 hover:border-bitcoin-blue hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-4 rounded-full bg-bitcoin-blue/10 group-hover:bg-bitcoin-blue group-hover:scale-110 transition-all duration-300">
                  <Users className="h-8 w-8 text-bitcoin-blue group-hover:text-white transition-colors" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold mb-2">Gruppo</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Partecipa alle discussioni
                </p>
                <span className="text-bitcoin-blue font-medium group-hover:underline">
                  Entra nel gruppo →
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

