import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { SkipToContent } from "@/components/accessibility/skip-to-content"

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}

export const metadata: Metadata = {
  title: "Bitcoin Torino - Associazione Bitcoin Torino",
  description: "Associazione dedicata alla promozione e sviluppo dell'ecosistema Bitcoin a Torino e dintorni. Eventi, risorse e community.",
  keywords: ["Bitcoin", "Torino", "Criptovalute", "Blockchain", "Associazione", "Eventi", "Community"],
  authors: [{ name: "Bitcoin Torino" }],
  openGraph: {
    title: "Bitcoin Torino",
    description: "Associazione dedicata alla promozione e sviluppo dell'ecosistema Bitcoin a Torino",
    type: "website",
    locale: "it_IT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bitcoin Torino",
    description: "Associazione dedicata alla promozione e sviluppo dell'ecosistema Bitcoin a Torino",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" className={inter.variable}>
      <body className="min-h-screen flex flex-col">
        <SkipToContent />
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

