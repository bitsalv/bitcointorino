import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { Twitter, Send, Mail, MapPin } from "lucide-react"

export function Footer() {

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="text-2xl mr-2">₿</span> Bitcoin Torino
            </h3>
            <p className="text-gray-300 mb-4">
              Associazione dedicata alla promozione e sviluppo dell&apos;ecosistema Bitcoin 
              a Torino e dintorni.
            </p>
            <div className="flex items-start space-x-2 text-gray-300">
              <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <span>Torino, Italia</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Link Rapidi</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-bitcoin-blue-light transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/eventi" className="text-gray-300 hover:text-bitcoin-blue-light transition-colors">
                  Eventi
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-bitcoin-blue-light transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xl font-bold mb-4">Seguici</h3>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com/bitcointorino"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:bg-bitcoin-blue transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href="https://t.me/bitcointorino"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:bg-bitcoin-blue transition-colors"
                aria-label="Telegram"
              >
                <Send className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href="mailto:info@bitcointorino.it"
                className="p-3 bg-gray-800 rounded-full hover:bg-bitcoin-blue transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <Separator className="bg-gray-700 mb-6" />

        {/* Copyright */}
        <div className="text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Bitcoin Torino. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  )
}

