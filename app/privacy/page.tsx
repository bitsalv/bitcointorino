import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Policy - Bitcoin Torino",
  description: "Informativa sulla privacy dell'Associazione Bitcoin Torino",
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Button asChild variant="ghost" className="mb-6">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
              Torna alla Home
            </Link>
          </Button>

          <h1 className="text-4xl md:text-5xl font-bold mb-8">Privacy Policy</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-8">
              Ultimo aggiornamento: 15 Novembre 2025
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">1. Introduzione</h2>
              <p className="mb-4">
                L&apos;Associazione Bitcoin Torino (&quot;noi&quot;, &quot;ci&quot; o &quot;nostro&quot;) rispetta la tua privacy 
                e si impegna a proteggere i tuoi dati personali. Questa privacy policy ti informerà 
                su come trattiamo i tuoi dati personali quando visiti il nostro sito web.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">2. Dati che raccogliamo</h2>
              <p className="mb-4">Possiamo raccogliere, utilizzare e memorizzare i seguenti dati:</p>
              <ul className="list-disc ml-6 mb-4 space-y-2">
                <li><strong>Dati di identità:</strong> nome, cognome</li>
                <li><strong>Dati di contatto:</strong> indirizzo email</li>
                <li><strong>Dati tecnici:</strong> indirizzo IP, tipo di browser, fuso orario</li>
                <li><strong>Dati di utilizzo:</strong> informazioni su come utilizzi il nostro sito web</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">3. Come utilizziamo i tuoi dati</h2>
              <p className="mb-4">Utilizziamo i tuoi dati personali per:</p>
              <ul className="list-disc ml-6 mb-4 space-y-2">
                <li>Inviarti la newsletter (se richiesto)</li>
                <li>Comunicare informazioni sugli eventi</li>
                <li>Migliorare il nostro sito web</li>
                <li>Rispondere alle tue richieste</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">4. Newsletter</h2>
              <p className="mb-4">
                Se ti iscrivi alla nostra newsletter, utilizzeremo il tuo indirizzo email per 
                inviarti aggiornamenti periodici su eventi, notizie e risorse relative a Bitcoin. 
                Puoi disiscriverti in qualsiasi momento cliccando sul link presente in fondo 
                a ogni newsletter.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">5. Cookie</h2>
              <p className="mb-4">
                Il nostro sito utilizza cookie per migliorare l&apos;esperienza dell&apos;utente. 
                I cookie sono piccoli file di testo memorizzati sul tuo dispositivo. Puoi 
                configurare il tuo browser per rifiutare tutti i cookie o per indicare quando 
                un cookie viene inviato.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">6. Condivisione dei dati</h2>
              <p className="mb-4">
                Non vendiamo, scambiamo o trasferiamo in altro modo a terzi i tuoi dati 
                personali, eccetto quando necessario per fornire i servizi richiesti 
                (es. servizio di newsletter) o quando richiesto dalla legge.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">7. I tuoi diritti</h2>
              <p className="mb-4">Ai sensi del GDPR, hai diritto a:</p>
              <ul className="list-disc ml-6 mb-4 space-y-2">
                <li>Accedere ai tuoi dati personali</li>
                <li>Rettificare i tuoi dati personali</li>
                <li>Cancellare i tuoi dati personali</li>
                <li>Limitare il trattamento dei tuoi dati</li>
                <li>Opporti al trattamento dei tuoi dati</li>
                <li>Portabilità dei dati</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">8. Sicurezza</h2>
              <p className="mb-4">
                Abbiamo implementato misure di sicurezza appropriate per prevenire che i tuoi 
                dati personali vengano accidentalmente persi, utilizzati o consultati in modo 
                non autorizzato.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">9. Modifiche a questa policy</h2>
              <p className="mb-4">
                Potremmo aggiornare questa privacy policy periodicamente. Ti informeremo di 
                eventuali modifiche pubblicando la nuova privacy policy su questa pagina.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">10. Contatti</h2>
              <p className="mb-4">
                Per qualsiasi domanda riguardo questa privacy policy o per esercitare i tuoi 
                diritti, puoi contattarci a:
              </p>
              <p className="mb-2">
                <strong>Email:</strong>{" "}
                <a href="mailto:privacy@bitcointorino.it" className="text-bitcoin-blue hover:underline">
                  privacy@bitcointorino.it
                </a>
              </p>
              <p>
                <strong>Indirizzo:</strong> Associazione Bitcoin Torino, Torino, Italia
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

