"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs: FAQItem[] = [
    {
      question: "Cos'è Bitcoin Torino?",
      answer: "Bitcoin Torino è un'associazione no-profit dedicata alla promozione e sviluppo dell'ecosistema Bitcoin a Torino e dintorni. Organizziamo eventi, workshop e meetup per educare e connettere appassionati, sviluppatori e imprenditori."
    },
    {
      question: "Come posso partecipare agli eventi?",
      answer: "Puoi iscriverti ai nostri eventi tramite la piattaforma Luma. Basta cliccare sul link 'Eventi' nella navbar o nella sezione 'Unisciti alla Community'. La partecipazione è gratuita per i membri dell'associazione."
    },
    {
      question: "Devo essere un esperto di Bitcoin per partecipare?",
      answer: "Assolutamente no! I nostri eventi sono pensati per tutti i livelli di conoscenza, dai principianti assoluti agli esperti. Offriamo workshop introduttivi, seminari tecnici e momenti di networking aperti a tutti."
    },
    {
      question: "Come posso diventare membro dell'associazione?",
      answer: "Per diventare membro, partecipa ad almeno un nostro evento e poi contattaci via email a info@bitcointorino.it. Ti forniremo tutte le informazioni sulla quota associativa e i benefici riservati ai membri."
    },
    {
      question: "Organizzate eventi online o solo in presenza?",
      answer: "Organizziamo sia eventi in presenza a Torino sia workshop online per permettere la partecipazione anche a chi non può raggiungerci fisicamente. Ogni evento specifica la modalità nella descrizione."
    },
    {
      question: "Posso proporre un intervento o un workshop?",
      answer: "Certo! Siamo sempre alla ricerca di speaker e contenuti di qualità. Se hai un'idea per un workshop o una presentazione, scrivici a info@bitcointorino.it con la tua proposta."
    },
    {
      question: "Come posso supportare l'associazione?",
      answer: "Ci sono diversi modi: diventare membro, partecipare agli eventi, aiutare nell'organizzazione, proporre partnership o fare una donazione. Contattaci per scoprire come puoi contribuire alla crescita della community."
    },
    {
      question: "L'associazione ha una sede fisica?",
      answer: "Non abbiamo una sede fissa, ma i nostri eventi si tengono in varie location a Torino, come coworking, università e spazi dedicati. La location specifica viene comunicata per ogni evento."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-white scroll-mt-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Domande Frequenti
            </h2>
            <p className="text-xl text-muted-foreground">
              Tutto quello che devi sapere su Bitcoin Torino
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-2 border-gray-200 rounded-lg overflow-hidden hover:border-bitcoin-blue transition-colors"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors"
                  aria-expanded={openIndex === index}
                >
                  <span className="font-bold text-lg pr-8">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-bitcoin-blue flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="p-6 pt-0 text-muted-foreground">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-12 text-center p-8 bg-gray-50 rounded-lg border-2 border-gray-200">
            <h3 className="text-xl font-bold mb-2">Hai altre domande?</h3>
            <p className="text-muted-foreground mb-4">
              Non esitare a contattarci, saremo felici di risponderti
            </p>
            <a
              href="mailto:info@bitcointorino.it"
              className="inline-flex items-center text-bitcoin-blue font-bold hover:underline"
            >
              Scrivici →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

