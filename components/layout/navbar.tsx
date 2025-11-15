"use client"

import Link from "next/link"
import { useState, useRef } from "react"
import { Menu, X, ChevronDown } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [ecosystemOpen, setEcosystemOpen] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const toggleMenu = () => setIsOpen(!isOpen)

  const handleEcosystemEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setEcosystemOpen(true)
  }

  const handleEcosystemLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setEcosystemOpen(false)
    }, 200)
  }

  const ecosystemLinks = [
    { href: "/ecosystem/meetup", label: "Community" },
    { href: "/ecosystem/aziende", label: "Aziende" },
    { href: "/ecosystem/merchant", label: "Merchant" },
    { href: "/ecosystem/spazi", label: "Spazi" },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="flex items-center">
              <span className="text-2xl font-bold">₿</span>
              <span className="ml-2 text-xl font-bold text-bitcoin-blue">Bitcoin Torino</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <a
              href="#chi-siamo"
              className="text-foreground font-medium hover:text-bitcoin-blue transition-colors cursor-pointer"
              onClick={(e) => {
                e.preventDefault()
                const element = document.querySelector('#chi-siamo')
                element?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              About
            </a>

            <div 
              className="relative"
              onMouseEnter={handleEcosystemEnter}
              onMouseLeave={handleEcosystemLeave}
            >
              <Link
                href="/ecosystem"
                className="text-foreground font-medium hover:text-bitcoin-blue transition-colors inline-flex items-center py-2"
              >
                Ecosystem
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${ecosystemOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
              </Link>
              
              {ecosystemOpen && (
                <div 
                  className="absolute top-full left-0 pt-2"
                  onMouseEnter={handleEcosystemEnter}
                  onMouseLeave={handleEcosystemLeave}
                >
                  <div className="w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                    {ecosystemLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block px-4 py-2 text-foreground hover:bg-bitcoin-blue/10 hover:text-bitcoin-blue transition-colors"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a
              href="#partner"
              className="text-foreground font-medium hover:text-bitcoin-blue transition-colors cursor-pointer"
              onClick={(e) => {
                e.preventDefault()
                const element = document.querySelector('#partner')
                element?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Partner
            </a>

            <Link
              href="/faq"
              className="text-foreground font-medium hover:text-bitcoin-blue transition-colors"
            >
              FAQ
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md hover:bg-accent transition-colors"
            aria-label={isOpen ? "Chiudi menu" : "Apri menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t py-4 space-y-4">
            <a
              href="#chi-siamo"
              className="block py-2 text-foreground font-medium hover:text-bitcoin-blue transition-colors"
              onClick={(e) => {
                e.preventDefault()
                const element = document.querySelector('#chi-siamo')
                element?.scrollIntoView({ behavior: 'smooth' })
                setIsOpen(false)
              }}
            >
              About
            </a>

            <div>
              <button
                onClick={() => setEcosystemOpen(!ecosystemOpen)}
                className="flex items-center justify-between w-full py-2 text-foreground font-medium hover:text-bitcoin-blue transition-colors"
              >
                Ecosystem
                <ChevronDown className={`h-4 w-4 transition-transform ${ecosystemOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
              </button>
              {ecosystemOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  {ecosystemLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block py-2 text-sm text-muted-foreground hover:text-bitcoin-blue transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <a
              href="#partner"
              className="block py-2 text-foreground font-medium hover:text-bitcoin-blue transition-colors"
              onClick={(e) => {
                e.preventDefault()
                const element = document.querySelector('#partner')
                element?.scrollIntoView({ behavior: 'smooth' })
                setIsOpen(false)
              }}
            >
              Partner
            </a>

            <Link
              href="/faq"
              className="block py-2 text-foreground font-medium hover:text-bitcoin-blue transition-colors"
              onClick={() => setIsOpen(false)}
            >
              FAQ
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

