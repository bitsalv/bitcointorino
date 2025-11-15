import { Github, Linkedin, Twitter } from "lucide-react"

export function Team() {
  const teamMembers = [
    {
      name: "Marco Rossi",
      role: "Presidente",
      bio: "Bitcoin developer e appassionato di Lightning Network",
      image: "MR",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#"
      }
    },
    {
      name: "Laura Bianchi",
      role: "Vice Presidente",
      bio: "Educatrice Bitcoin e organizzatrice eventi",
      image: "LB",
      social: {
        twitter: "#",
        linkedin: "#"
      }
    },
    {
      name: "Giuseppe Verdi",
      role: "Tesoriere",
      bio: "Esperto di economia e finanza decentralizzata",
      image: "GV",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Andrea Neri",
      role: "Segretario",
      bio: "Community manager e content creator",
      image: "AN",
      social: {
        twitter: "#",
        github: "#"
      }
    }
  ]

  return (
    <section id="team" className="py-20 bg-white scroll-mt-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Il Nostro Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Un gruppo di appassionati dedicati a far crescere l&apos;ecosistema Bitcoin a Torino
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group bg-white rounded-lg border-2 border-gray-200 overflow-hidden hover:border-bitcoin-blue hover:shadow-lg transition-all duration-300"
              >
                {/* Avatar */}
                <div className="relative bg-gradient-to-br from-bitcoin-blue to-bitcoin-blue-light h-48 flex items-center justify-center">
                  <div className="text-white text-5xl font-bold">
                    {member.image}
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-sm text-bitcoin-blue font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>

                  {/* Social Links */}
                  <div className="flex gap-3">
                    {member.social.twitter && (
                      <a
                        href={member.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-gray-100 hover:bg-bitcoin-blue hover:text-white transition-colors"
                        aria-label={`Twitter di ${member.name}`}
                      >
                        <Twitter className="h-4 w-4" aria-hidden="true" />
                      </a>
                    )}
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-gray-100 hover:bg-bitcoin-blue hover:text-white transition-colors"
                        aria-label={`LinkedIn di ${member.name}`}
                      >
                        <Linkedin className="h-4 w-4" aria-hidden="true" />
                      </a>
                    )}
                    {member.social.github && (
                      <a
                        href={member.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-gray-100 hover:bg-bitcoin-blue hover:text-white transition-colors"
                        aria-label={`GitHub di ${member.name}`}
                      >
                        <Github className="h-4 w-4" aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              Vuoi far parte del team?
            </p>
            <a
              href="mailto:info@bitcointorino.it"
              className="inline-flex items-center text-bitcoin-blue font-bold hover:underline"
            >
              Contattaci →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

