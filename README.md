# Bitcoin Torino - Sito Web Ufficiale

Sito web dell'Associazione Bitcoin Torino, dedicato alla promozione e sviluppo dell'ecosistema Bitcoin a Torino e dintorni.

## 🚀 Tecnologie Utilizzate

- **Framework:** Next.js 14 (App Router)
- **Linguaggio:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Shadcn/UI
- **Icons:** Lucide React

## 📋 Funzionalità

### Pagine Principali

- **Home:** Hero section, calendario eventi Luma, ultime notizie dal blog, partner
- **Eventi:** Lista completa degli eventi con integrazione calendario Luma
- **Blog:** Articoli, press release e aggiornamenti dall'associazione
- **Privacy:** Informativa sulla privacy

### Componenti Chiave

- Navbar responsive con menu mobile
- Footer con form newsletter
- Cards per eventi, blog post e partner
- Sistema di routing dinamico per i post del blog
- Pagina 404 personalizzata

## 🎨 Brand Identity

### Colori

- **Nero:** `#000000` - Testo principale
- **Bianco:** `#FFFFFF` - Sfondo
- **Bitcoin Blue:** `#07458D` - Colore primario (CTA, accenti)

### Tipografia

- **Font:** Inter (Google Fonts)
- **Peso:** Medium per testi, Bold per headline e CTA

### Stile

- Design minimal e tech-oriented
- Alto contrasto per accessibilità
- Cards con bordi arrotondati e shadow
- Effetti hover su elementi interattivi

## 🚀 Getting Started

### Installazione

```bash
# Installa le dipendenze
npm install

# Avvia il server di sviluppo
npm run dev

# Build per produzione
npm run build

# Avvia il server di produzione
npm start
```

Il sito sarà disponibile su [http://localhost:3000](http://localhost:3000)

## 📁 Struttura del Progetto

```
bitcoin-torino/
├── app/
│   ├── layout.tsx          # Layout principale
│   ├── page.tsx            # Home page
│   ├── globals.css         # Stili globali
│   ├── not-found.tsx       # Pagina 404
│   ├── eventi/
│   │   └── page.tsx        # Pagina eventi
│   ├── blog/
│   │   ├── page.tsx        # Lista blog
│   │   └── [slug]/
│   │       └── page.tsx    # Dettaglio post
│   └── privacy/
│       └── page.tsx        # Privacy policy
├── components/
│   ├── ui/                 # Componenti Shadcn/UI
│   ├── layout/
│   │   ├── navbar.tsx      # Navbar
│   │   └── footer.tsx      # Footer
│   └── home/
│       ├── hero.tsx        # Hero section
│       ├── luma-calendar.tsx
│       ├── blog-cards.tsx
│       └── partners.tsx
├── lib/
│   └── utils.ts            # Utilities
└── public/                 # Assets statici
```

## ♿ Accessibilità

Il sito è sviluppato seguendo le linee guida WCAG 2.1 AA:

- Contrasto colori conforme
- Navigazione da tastiera
- ARIA labels e roles appropriati
- Focus visible su elementi interattivi
- Semantica HTML corretta
- Responsive e mobile-first

## 🔍 SEO

- Metadata ottimizzati per ogni pagina
- Open Graph tags per social sharing
- Sitemap automatica (Next.js)
- Robots.txt configurato
- Performance ottimizzate (lazy loading, code splitting)

## 🌐 Integrazione Luma

Il sito include placeholder per l'integrazione con Luma per la gestione eventi. Per attivare l'integrazione reale:

1. Crea un account su [lu.ma](https://lu.ma)
2. Ottieni il codice embed del calendario
3. Sostituisci il placeholder in `components/home/luma-calendar.tsx`

## 📧 Newsletter

Il form newsletter è attualmente configurato con una simulazione. Per attivare l'integrazione reale:

1. Scegli un provider (es. Mailchimp, ConvertKit, Sendinblue)
2. Crea un endpoint API in `app/api/newsletter/route.ts`
3. Collega il form al tuo servizio

## 🤝 Contribuire

Per contribuire al progetto:

1. Fork il repository
2. Crea un branch per la tua feature (`git checkout -b feature/AmazingFeature`)
3. Commit le modifiche (`git commit -m 'Add some AmazingFeature'`)
4. Push al branch (`git push origin feature/AmazingFeature`)
5. Apri una Pull Request

## 📄 Licenza

Questo progetto è proprietà dell'Associazione Bitcoin Torino. Tutti i diritti riservati.

## 📞 Contatti

- **Email:** info@bitcointorino.it
- **Twitter:** [@bitcointorino](https://twitter.com/bitcointorino)
- **Telegram:** [t.me/bitcointorino](https://t.me/bitcointorino)

---

Sviluppato con ❤️ per la community Bitcoin di Torino

