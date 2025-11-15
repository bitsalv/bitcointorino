import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"

// Mock blog posts
const blogPosts = [
  {
    id: 1,
    title: "Bitcoin Torino annuncia partnership con il Politecnico",
    excerpt: "Siamo orgogliosi di annunciare la nostra collaborazione con il Politecnico di Torino per portare l'educazione Bitcoin in università.",
    date: "2025-11-10",
    slug: "partnership-politecnico"
  },
  {
    id: 2,
    title: "Resoconto Meetup Ottobre 2025",
    excerpt: "Grande successo per il nostro ultimo meetup con oltre 80 partecipanti. Ecco i momenti salienti dell'evento.",
    date: "2025-11-05",
    slug: "resoconto-meetup-ottobre"
  },
  {
    id: 3,
    title: "Come accettare Bitcoin nella tua attività a Torino",
    excerpt: "Guida pratica per commercianti che vogliono iniziare ad accettare Bitcoin come metodo di pagamento.",
    date: "2025-10-28",
    slug: "guida-commercianti-bitcoin"
  }
]

export function BlogCards() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ultime Notizie
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Resta aggiornato sulle attività dell&apos;associazione, eventi passati e 
            risorse utili per la community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post) => (
            <Card key={post.id} className="flex flex-col h-full hover:border-bitcoin-blue transition-colors">
              <CardHeader>
                <div className="flex items-center text-sm text-muted-foreground mb-3">
                  <Calendar className="h-4 w-4 mr-2" aria-hidden="true" />
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('it-IT', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                </div>
                <CardTitle className="text-xl">{post.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <CardDescription className="text-base">{post.excerpt}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button asChild variant="link" className="px-0">
                  <Link href={`/blog/${post.slug}`}>
                    Leggi di più →
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link href="/blog">
              Vedi Tutti gli Articoli
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

