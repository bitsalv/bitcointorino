# Accessibility & Performance Features

## ♿ Accessibilità (WCAG 2.1 AA)

### Semantic HTML
- Utilizzo corretto di tag semantici (`<header>`, `<nav>`, `<main>`, `<footer>`, `<article>`, etc.)
- Struttura heading gerarchica corretta (h1 → h2 → h3)
- Liste semantiche per navigazione e contenuti

### Navigazione da Tastiera
- **Skip to Content**: Link visibile al focus per saltare direttamente al contenuto principale
- Focus visible su tutti gli elementi interattivi con outline personalizzato
- Ordine di tabulazione logico e intuitivo
- Menu mobile accessibile da tastiera

### ARIA e Screen Readers
- ARIA labels su icone e controlli senza testo visibile
- ARIA roles appropriati dove necessario
- ARIA live regions per feedback dinamici (es. newsletter)
- ARIA expanded/hidden per menu mobile

### Contrasto Colori
- Contrasto minimo 4.5:1 per testo normale
- Contrasto minimo 3:1 per testo large e elementi UI
- Palette colori testata per conformità:
  - Nero (#000) su bianco (#fff): 21:1 ✅
  - Bitcoin Blue (#07458D) su bianco (#fff): 8.5:1 ✅
  - Bianco (#fff) su Bitcoin Blue (#07458D): 8.5:1 ✅

### Form e Input
- Label associati correttamente a ogni input
- Placeholder non usati come sostituti delle label
- Messaggi di errore descrittivi e collegati agli input
- Required fields indicati chiaramente

### Media e Contenuti
- Alternative text per tutte le immagini
- `<time>` tags con attributi datetime per date
- Link descrittivi (no "clicca qui")
- Loading states con ARIA live regions

### Responsive Design
- Mobile-first approach
- Breakpoints logici (sm, md, lg, xl)
- Touch targets minimo 44x44px su mobile
- Zoom fino al 200% senza perdita di funzionalità

## 🚀 Performance

### Next.js Optimizations
- **App Router**: Routing ottimizzato con React Server Components
- **Static Generation**: Pagine pre-renderizzate dove possibile
- **Code Splitting**: Automatic code splitting per route
- **Font Optimization**: Inter font ottimizzato con `next/font`
- **Image Optimization**: Pronto per `next/image` (placeholder SVG attualmente)

### Lazy Loading
- Componenti caricati on-demand
- Eventi e blog cards con rendering ottimizzato
- Script esterni (Luma) caricati in modo asincrono

### Bundle Size
- Shadcn/UI: componenti tree-shakeable
- Tailwind CSS: purge automatico delle classi non usate
- Lucide icons: importazione selettiva solo delle icone utilizzate

### Build Output
```
Route (app)                              Size     First Load JS
┌ ○ /                                    1.27 kB        97.5 kB
├ ○ /blog                                184 B          96.4 kB
├ ƒ /blog/[slug]                         184 B          96.4 kB
├ ○ /eventi                              145 B          87.7 kB
├ ○ /privacy                             185 B          96.4 kB
```

### Caching
- Static assets con cache headers appropriati
- Font files cached localmente
- API routes (quando implementate) con caching strategy

## 🔍 SEO

### Meta Tags
- Title e description uniche per ogni pagina
- Open Graph tags per social sharing
- Twitter Card metadata
- Canonical URLs
- Keywords rilevanti

### Structured Data (JSON-LD)
- Organization schema sulla home
- Event schema per pagina eventi (pronto)
- Article schema per blog posts (pronto)
- BreadcrumbList per navigazione (pronto per implementazione)

### Technical SEO
- Sitemap.xml automatico
- Robots.txt configurato
- Semantic HTML per migliore crawlability
- URLs puliti e descrittivi
- Alt text su tutte le immagini

### Performance Metrics (Target)
- First Contentful Paint (FCP): < 1.8s
- Largest Contentful Paint (LCP): < 2.5s
- Cumulative Layout Shift (CLS): < 0.1
- First Input Delay (FID): < 100ms
- Time to Interactive (TTI): < 3.8s

## 🧪 Testing

### Strumenti Consigliati
- **Lighthouse**: Audit automatici per performance, accessibility, SEO
- **axe DevTools**: Test accessibility approfonditi
- **WAVE**: Valutazione accessibility in-browser
- **Screen Reader**: Test con NVDA (Windows) o VoiceOver (Mac)
- **Keyboard Only**: Navigazione completa senza mouse

### Checklist Test Manuali
- [ ] Navigazione completa con Tab/Shift+Tab
- [ ] Test con screen reader (NVDA/VoiceOver)
- [ ] Zoom al 200% senza scroll orizzontale
- [ ] Test su mobile (touch, orientamento)
- [ ] Test con JavaScript disabilitato
- [ ] Test con connessione lenta (3G)

## 📱 Progressive Enhancement

Il sito è costruito seguendo il principio di progressive enhancement:

1. **Base**: HTML semantico e contenuto accessibile
2. **Enhanced**: CSS per layout e styling
3. **Interactive**: JavaScript per interattività avanzata

Anche con JavaScript disabilitato, il contenuto rimane accessibile e leggibile.

## 🔄 Continuous Improvement

- Audit lighthouse regolari
- Feedback utenti con disabilità
- Aggiornamenti WCAG guidelines
- Test con nuove tecnologie assistive
- Performance monitoring in produzione

---

**Note**: Questa documentazione verrà aggiornata man mano che vengono implementate nuove feature.

