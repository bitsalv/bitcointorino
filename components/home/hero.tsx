import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-bitcoin-blue/10 text-bitcoin-blue font-medium text-sm mb-6">
            <span className="mr-2">₿</span>
            Associazione Bitcoin Torino
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            La Community Bitcoin di{" "}
            <span className="text-bitcoin-blue">Torino</span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Promuoviamo l&apos;adozione e lo sviluppo dell&apos;ecosistema Bitcoin attraverso 
            eventi, educazione e networking.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="text-base">
              <a href="https://t.me/bitcointorino" target="_blank" rel="noopener noreferrer">
                Unisciti alla Community
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base">
              <a href="https://luma.com/user/bitcointorino" target="_blank" rel="noopener noreferrer">
                Scopri gli Eventi
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-10" aria-hidden="true">
        <div className="absolute top-20 left-10 text-9xl font-bold text-bitcoin-blue">₿</div>
        <div className="absolute bottom-20 right-10 text-9xl font-bold text-bitcoin-blue">₿</div>
      </div>
    </section>
  )
}

