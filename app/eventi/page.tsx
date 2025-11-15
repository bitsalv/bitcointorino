import type { Metadata } from "next"
import { Calendar, MapPin, Users, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Eventi - Bitcoin Torino",
  description: "Scopri tutti gli eventi organizzati da Bitcoin Torino: meetup, workshop, conferenze e molto altro.",
}

// Mock events data
const upcomingEvents = [
  {
    id: 1,
    title: "Bitcoin Meetup Mensile",
    date: "2025-11-15",
    time: "19:00 - 22:00",
    location: "Toolbox Coworking, Via Agostino da Montefeltro 2, Torino",
    description: "Incontro mensile della community per discutere delle ultime novità nel mondo Bitcoin, fare networking e scambiare idee.",
    type: "Meetup",
    attendees: 45,
    maxAttendees: 80,
  },
  {
    id: 2,
    title: "Lightning Network Workshop",
    date: "2025-11-22",
    time: "15:00 - 18:00",
    location: "Online (Zoom)",
    description: "Workshop pratico su come utilizzare e configurare un nodo Lightning Network. Imparerai a creare canali, gestire liquidità e molto altro.",
    type: "Workshop",
    attendees: 32,
    maxAttendees: 50,
  },
  {
    id: 3,
    title: "Bitcoin Security Deep Dive",
    date: "2025-11-29",
    time: "14:00 - 18:00",
    location: "Politecnico di Torino, Aula Magna",
    description: "Conferenza sulla sicurezza Bitcoin con esperti del settore. Topics: multi-sig, hardware wallets, best practices per la custodia.",
    type: "Conferenza",
    attendees: 78,
    maxAttendees: 150,
  },
  {
    id: 4,
    title: "Bitcoin Pizza Party",
    date: "2025-12-06",
    time: "20:00 - 23:00",
    location: "Da annunciare",
    description: "Evento sociale per celebrare la community Bitcoin di Torino. Cena insieme pagando in Bitcoin!",
    type: "Social",
    attendees: 25,
    maxAttendees: 60,
  },
]

const pastEvents = [
  {
    id: 5,
    title: "Bitcoin Basics Workshop",
    date: "2025-10-18",
    location: "Toolbox Coworking, Torino",
    description: "Workshop introduttivo per chi vuole avvicinarsi al mondo Bitcoin.",
    attendees: 55,
  },
  {
    id: 6,
    title: "Meetup Settembre",
    date: "2025-09-20",
    location: "Toolbox Coworking, Torino",
    description: "Meetup mensile della community con presentazioni e networking.",
    attendees: 62,
  },
]

export default function EventiPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-bitcoin-blue to-bitcoin-blue-dark text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Eventi Bitcoin Torino
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Partecipa ai nostri eventi per imparare, fare networking e contribuire 
              alla crescita della community Bitcoin.
            </p>
            <Button asChild size="lg" variant="secondary">
              <a href="#upcoming-events">
                Scopri i Prossimi Eventi
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Luma Calendar Integration */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Calendario Completo</h2>
              <p className="text-lg text-muted-foreground">
                Tutti gli eventi in un colpo d&apos;occhio
              </p>
            </div>
            
            {/* Luma Embed - In production this would be the actual embed */}
            <div className="rounded-lg border-2 border-gray-200 bg-gray-50 p-8 text-center min-h-[400px] flex items-center justify-center">
              <div>
                <p className="text-lg text-muted-foreground mb-4">
                  📅 Calendario Luma integrato
                </p>
                <p className="text-sm text-muted-foreground">
                  Qui verrà visualizzato il calendario completo degli eventi tramite Luma embed
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section id="upcoming-events" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Prossimi Eventi
            </h2>

            <div className="space-y-6">
              {upcomingEvents.map((event) => (
                <Card key={event.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="px-3 py-1 bg-bitcoin-blue/10 text-bitcoin-blue text-sm font-bold rounded-full">
                            {event.type}
                          </span>
                          <span className="flex items-center text-sm text-muted-foreground">
                            <Users className="h-4 w-4 mr-1" aria-hidden="true" />
                            {event.attendees}/{event.maxAttendees} partecipanti
                          </span>
                        </div>
                        <CardTitle className="text-2xl mb-2">{event.title}</CardTitle>
                        <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2" aria-hidden="true" />
                            <time dateTime={event.date}>
                              {new Date(event.date).toLocaleDateString('it-IT', {
                                weekday: 'long',
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                              })}
                            </time>
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-2" aria-hidden="true" />
                            {event.time}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-2" aria-hidden="true" />
                            {event.location}
                          </div>
                        </div>
                      </div>
                      <Button className="md:mt-0">
                        Registrati
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {event.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Eventi Passati
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pastEvents.map((event) => (
                <Card key={event.id}>
                  <CardHeader>
                    <CardTitle className="text-xl">{event.title}</CardTitle>
                    <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" aria-hidden="true" />
                        <time dateTime={event.date}>
                          {new Date(event.date).toLocaleDateString('it-IT', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </time>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" aria-hidden="true" />
                        {event.location}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{event.description}</CardDescription>
                  </CardContent>
                  <CardFooter className="text-sm text-muted-foreground">
                    <Users className="h-4 w-4 mr-1" aria-hidden="true" />
                    {event.attendees} partecipanti
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-bitcoin-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Non perdere nessun evento
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Iscriviti alla newsletter per ricevere aggiornamenti sui prossimi eventi 
              e le ultime novità dalla community.
            </p>
            <Button asChild size="lg" variant="secondary">
              <a href="#newsletter">
                Iscriviti Ora
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

