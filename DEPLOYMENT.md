# Deployment Guide

## 🚀 Deployment su Vercel (Consigliato)

Vercel è la piattaforma ideale per Next.js, creata dal team stesso di Next.js.

### Setup Iniziale

1. **Crea account su Vercel**
   - Vai su [vercel.com](https://vercel.com)
   - Registrati con GitHub

2. **Import del Repository**
   ```bash
   # Prima, carica il progetto su GitHub
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo>
   git push -u origin main
   ```

3. **Deploy su Vercel**
   - Vai su [vercel.com/new](https://vercel.com/new)
   - Import il repository GitHub
   - Vercel rileverà automaticamente Next.js
   - Clicca "Deploy"

### Configurazione Dominio

1. **In Vercel Dashboard**
   - Vai su Settings → Domains
   - Aggiungi `bitcointorino.it`
   - Segui le istruzioni per configurare i DNS

2. **Configurazione DNS**
   ```
   Type: A
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

### Variabili d'Ambiente

Nel dashboard Vercel, vai su Settings → Environment Variables:

```bash
NEXT_PUBLIC_SITE_URL=https://bitcointorino.it
# Aggiungi altre variabili quando necessario
```

## 🐳 Deployment con Docker (Alternativo)

### Dockerfile

```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app
ENV NODE_ENV production
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
USER nextjs
EXPOSE 3000
ENV PORT 3000
CMD ["node", "server.js"]
```

### Build & Run

```bash
# Build
docker build -t bitcoin-torino .

# Run
docker run -p 3000:3000 bitcoin-torino
```

## 📦 Deployment su VPS (Linux)

### Prerequisiti

```bash
# Installa Node.js 18+
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Installa PM2 per process management
sudo npm install -g pm2
```

### Deploy

```bash
# Clone repository
git clone <your-repo> /var/www/bitcoin-torino
cd /var/www/bitcoin-torino

# Install dependencies
npm install

# Build
npm run build

# Start with PM2
pm2 start npm --name "bitcoin-torino" -- start
pm2 save
pm2 startup
```

### Nginx Configuration

```nginx
server {
    listen 80;
    server_name bitcointorino.it www.bitcointorino.it;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```bash
# Enable SSL with Certbot
sudo certbot --nginx -d bitcointorino.it -d www.bitcointorino.it
```

## 🔄 CI/CD con GitHub Actions

Crea `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--prod'
```

## 🔍 Post-Deployment Checklist

### Testing

- [ ] Tutte le pagine caricano correttamente
- [ ] Form newsletter funziona
- [ ] Link interni ed esterni funzionano
- [ ] Responsive su mobile/tablet/desktop
- [ ] Performance: Lighthouse score > 90
- [ ] SEO: Sitemap e robots.txt accessibili
- [ ] SSL certificate attivo (HTTPS)

### Monitoring

- [ ] Configura Google Analytics (opzionale)
- [ ] Configura error tracking (Sentry, opzionale)
- [ ] Setup uptime monitoring
- [ ] Configura backup automatici

### SEO

- [ ] Submit sitemap a Google Search Console
- [ ] Verifica proprietà su Google Search Console
- [ ] Submit a Bing Webmaster Tools
- [ ] Verifica Open Graph con Facebook Debugger
- [ ] Verifica Twitter Cards con Twitter Validator

## 🛠️ Troubleshooting

### Build fails

```bash
# Clear cache e reinstalla
rm -rf .next node_modules package-lock.json
npm install
npm run build
```

### Port already in use

```bash
# Find process
lsof -i :3000

# Kill process
kill -9 <PID>
```

### PM2 issues

```bash
# Restart app
pm2 restart bitcoin-torino

# View logs
pm2 logs bitcoin-torino

# Monitor
pm2 monit
```

## 📊 Performance Optimization

### Vercel Analytics

```bash
npm install @vercel/analytics
```

```typescript
// app/layout.tsx
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

### CDN Optimization

- Static assets automaticamente su CDN con Vercel
- Images: usa `next/image` per ottimizzazione automatica
- Fonts: già ottimizzati con `next/font`

## 🔐 Security

### Headers

Aggiungi in `next.config.js`:

```javascript
module.exports = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          }
        ]
      }
    ];
  }
};
```

## 📞 Support

Per problemi di deployment, contatta:
- Email: tech@bitcointorino.it
- Documentazione Next.js: [nextjs.org/docs](https://nextjs.org/docs)
- Vercel Support: [vercel.com/support](https://vercel.com/support)

---

**Last Updated**: November 2025

