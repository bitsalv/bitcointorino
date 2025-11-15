/**
 * SEO utility functions
 */

export interface SEOConfig {
  title: string
  description: string
  canonical?: string
  ogImage?: string
  ogType?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
  author?: string
  tags?: string[]
}

/**
 * Generate structured data for articles (JSON-LD)
 */
export function generateArticleStructuredData(config: {
  title: string
  description: string
  author: string
  datePublished: string
  dateModified?: string
  url: string
  imageUrl?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: config.title,
    description: config.description,
    author: {
      '@type': 'Person',
      name: config.author,
    },
    datePublished: config.datePublished,
    dateModified: config.dateModified || config.datePublished,
    url: config.url,
    image: config.imageUrl,
    publisher: {
      '@type': 'Organization',
      name: 'Bitcoin Torino',
      logo: {
        '@type': 'ImageObject',
        url: 'https://bitcointorino.it/logo.png',
      },
    },
  }
}

/**
 * Generate structured data for events (JSON-LD)
 */
export function generateEventStructuredData(config: {
  name: string
  description: string
  startDate: string
  endDate?: string
  location: string
  url: string
  imageUrl?: string
  isOnline?: boolean
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: config.name,
    description: config.description,
    startDate: config.startDate,
    endDate: config.endDate,
    location: config.isOnline
      ? {
          '@type': 'VirtualLocation',
          url: config.url,
        }
      : {
          '@type': 'Place',
          name: config.location,
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Torino',
            addressCountry: 'IT',
          },
        },
    image: config.imageUrl,
    organizer: {
      '@type': 'Organization',
      name: 'Bitcoin Torino',
      url: 'https://bitcointorino.it',
    },
  }
}

/**
 * Generate structured data for organization (JSON-LD)
 */
export function generateOrganizationStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Bitcoin Torino',
    alternateName: 'Associazione Bitcoin Torino',
    url: 'https://bitcointorino.it',
    logo: 'https://bitcointorino.it/logo.png',
    description:
      'Associazione dedicata alla promozione e sviluppo dell\'ecosistema Bitcoin a Torino e dintorni',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Torino',
      addressCountry: 'IT',
    },
    sameAs: [
      'https://twitter.com/bitcointorino',
      'https://t.me/bitcointorino',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'info@bitcointorino.it',
      contactType: 'customer support',
    },
  }
}

