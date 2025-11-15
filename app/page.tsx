import { Hero } from "@/components/home/hero"
import { Partners } from "@/components/home/partners"
import { AnimatedBackground } from "@/components/home/animated-background"
import { About } from "@/components/home/about"
import { generateOrganizationStructuredData } from "@/lib/seo"

export default function Home() {
  const structuredData = generateOrganizationStructuredData()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <AnimatedBackground />
      <div className="relative z-10">
        <Hero />
        <About />
        <Partners />
      </div>
    </>
  )
}

