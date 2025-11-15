# 🚀 Quick Start Guide

## Avvio Rapido

```bash
# 1. Installa le dipendenze
npm install

# 2. Avvia il server di sviluppo
npm run dev

# 3. Apri il browser
# Il sito sarà disponibile su http://localhost:3000
```

## 📋 Comandi Principali

```bash
# Sviluppo
npm run dev          # Avvia server di sviluppo (http://localhost:3000)

# Build e Produzione
npm run build        # Compila il progetto per produzione
npm start            # Avvia il server di produzione

# Qualità del Codice
npm run lint         # Controlla errori con ESLint
```

## 🗂️ Struttura File Principali

```
bitcoin-torino/
├── app/                    # Pagine e routing (Next.js App Router)
│   ├── layout.tsx         # Layout principale
│   ├── page.tsx           # Home page
│   ├── eventi/            # Pagina eventi
│   ├── blog/              # Pagina blog e post
│   └── privacy/           # Privacy policy
├── components/            # Componenti React riutilizzabili
│   ├── ui/               # Componenti UI base (Shadcn)
│   ├── layout/           # Navbar e Footer
│   └── home/             # Componenti specifici home
├── lib/                  # Utility e helper functions
├── public/               # File statici (immagini, fonts, ecc.)
└── styles/               # Stili globali (già in app/globals.css)
```

## 🎨 Personalizzazione

### Colori

Modifica i colori brand in `tailwind.config.ts`:

```typescript
'bitcoin-blue': {
  DEFAULT: "#07458D",  // Colore primario
  dark: "#053666",
  light: "#0955a5",
}
```

### Logo

Sostituisci il simbolo Bitcoin (₿) nel navbar e footer con il tuo logo:

```typescript
// In components/layout/navbar.tsx
<span className="text-2xl font-bold">₿</span>
// Sostituisci con:
<Image src="/logo.png" alt="Bitcoin Torino" width={32} height={32} />
```

### Contenuti

#### Eventi
Modifica gli eventi in `app/eventi/page.tsx`:
- Array `upcomingEvents` per eventi futuri
- Array `pastEvents` per eventi passati

#### Blog
Aggiungi/modifica post in:
- `app/blog/page.tsx` - Lista post
- `app/blog/[slug]/page.tsx` - Contenuto dei post

#### Partner
Modifica i partner in `components/home/partners.tsx`:
- Array `partners` con nome e logo

## 🔌 Integrazioni

### Newsletter

Per integrare un servizio newsletter (Mailchimp, ConvertKit, ecc.):

1. Crea un endpoint API:
```typescript
// app/api/newsletter/route.ts
export async function POST(request: Request) {
  const { email } = await request.json()
  // Integra con il tuo servizio
  return Response.json({ success: true })
}
```

2. Aggiorna il form in `components/layout/footer.tsx`

### Luma Calendar

Per integrare il calendario Luma:

1. Ottieni il codice embed da [lu.ma](https://lu.ma)
2. Sostituisci il placeholder in `components/home/luma-calendar.tsx`
3. Inserisci lo script embed fornito da Luma

### Google Analytics

1. Installa il pacchetto:
```bash
npm install @next/third-parties
```

2. Aggiungi in `app/layout.tsx`:
```typescript
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
      </body>
    </html>
  )
}
```

## 📝 Content Management

### Aggiungere un Post al Blog

1. Apri `app/blog/[slug]/page.tsx`
2. Aggiungi il post nell'oggetto `blogPosts`:

```typescript
"nuovo-slug": {
  title: "Titolo del Post",
  excerpt: "Breve descrizione...",
  date: "2025-11-15",
  author: "Nome Autore",
  category: "Categoria",
  content: `
# Contenuto del Post

Scrivi qui il contenuto in Markdown...
  `,
}
```

3. Aggiorna anche la lista in `app/blog/page.tsx`

### Aggiungere un Evento

Apri `app/eventi/page.tsx` e aggiungi nell'array `upcomingEvents`:

```typescript
{
  id: 99,
  title: "Nome Evento",
  date: "2025-12-01",
  time: "19:00 - 22:00",
  location: "Indirizzo, Torino",
  description: "Descrizione evento...",
  type: "Tipo",
  attendees: 0,
  maxAttendees: 100,
}
```

## 🎯 Best Practices

### Performance
- Usa `next/image` per tutte le immagini
- Mantieni i componenti piccoli e riutilizzabili
- Lazy load per componenti pesanti

### Accessibilità
- Usa sempre alt text sulle immagini
- Mantieni la gerarchia heading corretta
- Testa con keyboard navigation

### SEO
- Aggiorna metadata per ogni nuova pagina
- Usa URL descrittivi
- Mantieni aggiornato il sitemap

## 🐛 Troubleshooting

### Porta già in uso

```bash
# Trova il processo sulla porta 3000
lsof -i :3000

# Terminalo
kill -9 <PID>
```

### Errori di build

```bash
# Pulisci tutto e reinstalla
rm -rf .next node_modules package-lock.json
npm install
npm run build
```

### Hot reload non funziona

```bash
# Riavvia il server
# Ctrl+C per fermare
npm run dev
```

## 📚 Risorse

- **Next.js Docs**: [nextjs.org/docs](https://nextjs.org/docs)
- **Tailwind CSS**: [tailwindcss.com/docs](https://tailwindcss.com/docs)
- **Shadcn/UI**: [ui.shadcn.com](https://ui.shadcn.com)
- **React**: [react.dev](https://react.dev)

## 🤝 Contribuire

1. Fork del repository
2. Crea branch per la feature: `git checkout -b feature/nome`
3. Commit: `git commit -m 'Aggiungi feature'`
4. Push: `git push origin feature/nome`
5. Apri una Pull Request

## 📞 Supporto

- **Email**: tech@bitcointorino.it
- **Issues**: Usa GitHub Issues per bug e feature requests
- **Documentazione completa**: Vedi README.md

---

**Tip**: Inizia personalizzando i contenuti (eventi, blog, partner) prima di modificare il codice!

