import { Metadata } from "next"
import { HelpCircle, Plus, Minus } from "lucide-react"

export const metadata: Metadata = {
  title: "FAQ - Bitcoin Torino",
  description: "Domande frequenti su Bitcoin Torino e l'ecosistema Bitcoin",
}

const faqs = [
  {
    category: "Generale",
    questions: [
      {
        question: "Cos'è Bitcoin Torino?",
        answer: "Bitcoin Torino è un'associazione dedicata alla promozione e sviluppo dell'ecosistema Bitcoin nella città di Torino e dintorni. Organizziamo eventi, meetup, workshop e supportiamo la crescita della community locale.",
      },
      {
        question: "Come posso partecipare agli eventi?",
        answer: "Tutti i nostri eventi sono pubblicati su Luma. Puoi iscriverti gratuitamente visitando il nostro calendario eventi su luma.com/user/bitcointorino. La maggior parte degli eventi sono gratuiti e aperti a tutti.",
      },
      {
        question: "Devo essere un esperto di Bitcoin per partecipare?",
        answer: "Assolutamente no! I nostri eventi sono aperti a tutti, dai principianti agli esperti. Organizziamo workshop specifici per chi si avvicina per la prima volta a Bitcoin e meetup per discussioni più tecniche.",
      },
      {
        question: "Come posso unirmi alla community?",
        answer: "Puoi unirti al nostro gruppo Telegram per rimanere aggiornato su eventi e novità, seguirci su Luma per gli eventi, e partecipare ai nostri meetup mensili. Trova tutti i link nella homepage.",
      },
    ],
  },
  {
    category: "Per Aziende e Merchant",
    questions: [
      {
        question: "Come posso iniziare ad accettare Bitcoin nella mia attività?",
        answer: "Ti possiamo aiutare a integrare i pagamenti Bitcoin e Lightning Network nella tua attività. Contattaci a info@bitcointorino.org per una consulenza gratuita e per essere inserito nella directory dei merchant Bitcoin-friendly di Torino.",
      },
      {
        question: "Quali sono i vantaggi per un merchant che accetta Bitcoin?",
        answer: "I principali vantaggi includono: commissioni ridotte rispetto ai circuiti tradizionali, pagamenti istantanei con Lightning Network, nessun rischio di chargeback, accesso a una community di clienti appassionati e visibilità attraverso il nostro network.",
      },
      {
        question: "Come posso essere inserito nella directory merchant?",
        answer: "Invia una email a info@bitcointorino.org con il nome della tua attività, indirizzo, tipologia di servizi e informazioni su come accetti Bitcoin. Verificheremo i dettagli e ti inseriremo nella nostra mappa dei merchant Bitcoin-friendly.",
      },
      {
        question: "La mia azienda vuole integrare Bitcoin nel proprio business. Chi posso contattare?",
        answer: "Contattaci a info@bitcointorino.org. Possiamo metterti in contatto con esperti della community per consulenze su Lightning Network, Bitcoin treasury, pagamenti B2B e altre soluzioni enterprise.",
      },
    ],
  },
  {
    category: "Eventi e Meetup",
    questions: [
      {
        question: "Con che frequenza organizzate eventi?",
        answer: "Organizziamo un meetup mensile principale (generalmente il primo giovedì del mese) e vari workshop ed eventi speciali durante l'anno. Consulta il calendario Luma per gli eventi aggiornati.",
      },
      {
        question: "Dove si svolgono gli eventi?",
        answer: "Gli eventi si svolgono in diverse location di Torino. L'indirizzo specifico viene comunicato al momento della pubblicazione dell'evento su Luma. Stiamo anche costruendo una rete di spazi Bitcoin-friendly.",
      },
      {
        question: "Posso proporre un intervento o un workshop?",
        answer: "Certamente! Siamo sempre alla ricerca di speaker e relatori. Se hai competenze da condividere con la community, contattaci a info@bitcointorino.org con una proposta del tuo intervento.",
      },
      {
        question: "Gli eventi sono a pagamento?",
        answer: "La maggior parte dei nostri eventi sono gratuiti. Alcuni workshop specialistici potrebbero richiedere un contributo per coprire i costi organizzativi. Il costo è sempre indicato nella descrizione dell'evento su Luma.",
      },
    ],
  },
  {
    category: "Tecnico",
    questions: [
      {
        question: "Cos'è Lightning Network?",
        answer: "Lightning Network è un protocollo di secondo livello costruito su Bitcoin che permette transazioni istantanee a costi minimi. È ideale per micropagamenti e uso quotidiano. Organizziamo workshop dedicati per imparare a usarlo.",
      },
      {
        question: "Offrite supporto tecnico per wallet e sicurezza?",
        answer: "Durante i nostri workshop e meetup offriamo supporto e consigli su wallet, best practices di sicurezza e utilizzo di Bitcoin. Per questioni specifiche, puoi chiedere nel gruppo Telegram dove la community è sempre disponibile ad aiutare.",
      },
      {
        question: "Posso contribuire tecnicamente al progetto?",
        answer: "Sì! Siamo sempre alla ricerca di sviluppatori, designer e volontari che vogliano contribuire. Contattaci per sapere come puoi aiutare a far crescere l'ecosistema Bitcoin a Torino.",
      },
    ],
  },
  {
    category: "Partnership e Collaborazioni",
    questions: [
      {
        question: "Come posso diventare partner di Bitcoin Torino?",
        answer: "Se sei un'azienda, un'associazione o un'organizzazione interessata a collaborare con noi, contattaci a info@bitcointorino.org. Valutiamo diverse forme di partnership per supportare e promuovere l'ecosistema Bitcoin.",
      },
      {
        question: "Collaborate con università o enti di formazione?",
        answer: "Sì, siamo aperti a collaborazioni con università, scuole e centri di formazione per organizzare corsi, seminari e workshop su Bitcoin e blockchain technology. Contattaci per discutere possibili progetti.",
      },
      {
        question: "Posso sponsorizzare un evento?",
        answer: "Sì, accettiamo sponsorizzazioni per i nostri eventi. Le sponsorizzazioni ci aiutano a organizzare eventi di qualità e a far crescere la community. Contattaci per conoscere le opportunità disponibili.",
      },
    ],
  },
]

export default function FAQPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-bitcoin-blue to-bitcoin-blue-dark text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 p-4 rounded-full">
                <HelpCircle className="h-12 w-12" aria-hidden="true" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Domande Frequenti
            </h1>
            <p className="text-xl md:text-2xl text-gray-100">
              Trova le risposte alle domande più comuni su Bitcoin Torino
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-bitcoin-blue">
                  {category.category}
                </h2>
                <div className="space-y-4">
                  {category.questions.map((faq, faqIndex) => (
                    <details
                      key={faqIndex}
                      className="group bg-white rounded-lg border-2 border-gray-200 hover:border-bitcoin-blue transition-colors overflow-hidden"
                    >
                      <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-lg list-none">
                        <span className="pr-4">{faq.question}</span>
                        <span className="flex-shrink-0 text-bitcoin-blue">
                          <Plus className="h-5 w-5 group-open:hidden" aria-hidden="true" />
                          <Minus className="h-5 w-5 hidden group-open:block" aria-hidden="true" />
                        </span>
                      </summary>
                      <div className="px-6 pb-6 text-muted-foreground border-t pt-4">
                        <p>{faq.answer}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Non hai trovato la risposta che cercavi?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Contattaci direttamente o unisciti al gruppo Telegram per fare le tue domande alla community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:info@bitcointorino.org"
                className="inline-flex items-center justify-center px-6 py-3 bg-bitcoin-blue text-white font-medium rounded-lg hover:bg-bitcoin-blue-dark transition-colors"
              >
                Invia una Email
              </a>
              <a
                href="https://t.me/bitcointorino"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-bitcoin-blue text-bitcoin-blue font-medium rounded-lg hover:bg-bitcoin-blue hover:text-white transition-colors"
              >
                Unisciti su Telegram
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

