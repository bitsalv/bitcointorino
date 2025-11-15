import { Target, Lightbulb, Heart, Zap, GraduationCap, Users, Rocket } from "lucide-react"

export function About() {
  const values = [
    {
      icon: Target,
      title: "Mission",
      description: "Promuovere l'adozione di Bitcoin a Torino attraverso educazione, eventi e supporto alla community locale."
    },
    {
      icon: Lightbulb,
      title: "Educazione",
      description: "Organizzare workshop, seminari e meetup per diffondere la conoscenza su Bitcoin e le tecnologie correlate."
    },
    {
      icon: Heart,
      title: "Community",
      description: "Creare una rete solida di appassionati, sviluppatori e imprenditori interessati all'ecosistema Bitcoin."
    },
    {
      icon: Zap,
      title: "Innovazione",
      description: "Supportare progetti e iniziative che utilizzano Bitcoin per creare valore nel territorio torinese."
    }
  ]

  return (
    <section id="chi-siamo" className="py-20 bg-gray-50 scroll-mt-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-8 border-2 border-gray-200 hover:border-bitcoin-blue hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-bitcoin-blue/10 flex-shrink-0">
                    <value.icon className="h-6 w-6 text-bitcoin-blue" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* What We Do */}
          <div className="bg-white rounded-lg p-8 md:p-12 border-2 border-gray-200">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
              Cosa Facciamo
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-lg bg-bitcoin-blue/10">
                    <GraduationCap className="h-8 w-8 text-bitcoin-blue" aria-hidden="true" />
                  </div>
                </div>
                <h4 className="font-bold mb-2">Formazione</h4>
                <p className="text-sm text-muted-foreground">
                  Workshop, seminari e corsi per tutti i livelli di conoscenza
                </p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-lg bg-bitcoin-blue/10">
                    <Users className="h-8 w-8 text-bitcoin-blue" aria-hidden="true" />
                  </div>
                </div>
                <h4 className="font-bold mb-2">Networking</h4>
                <p className="text-sm text-muted-foreground">
                  Meetup mensili per connettere professionisti e appassionati
                </p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-lg bg-bitcoin-blue/10">
                    <Rocket className="h-8 w-8 text-bitcoin-blue" aria-hidden="true" />
                  </div>
                </div>
                <h4 className="font-bold mb-2">Progetti</h4>
                <p className="text-sm text-muted-foreground">
                  Supporto a iniziative locali che integrano Bitcoin
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

