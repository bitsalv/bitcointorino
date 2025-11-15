"use client"

export function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-6 focus:py-3 focus:bg-bitcoin-blue focus:text-white focus:rounded-md focus:font-bold focus:shadow-lg"
    >
      Salta al contenuto principale
    </a>
  )
}

