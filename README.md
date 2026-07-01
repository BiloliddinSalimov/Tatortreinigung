# Tatortreinigung – Next.js App

A 1:1 port of the HTML prototype (`Notfall App.dc.html`) to a real **Next.js 14 (App Router)** application. Same design, fonts, animations, and four modals (Über uns, Portfolio, FAQ, KI-Assistent chat). The AI chat is wired to the real **Google Gemini API**.

## Requirements
- Node.js 18.18+ (or 20+)
- A Google Gemini API key (for the chat) — the free tier is enough

## Setup

```bash
cd nextjs-app
npm install
cp .env.example .env.local        # then put your real key in .env.local
npm run dev
```

Open http://localhost:3000

## Gemini API key
The KI-Assistent chat calls `/api/chat`, which talks to Google Gemini server-side.
Get a free key at https://aistudio.google.com/apikey and set it in `.env.local`:

```
GEMINI_API_KEY=AIza...
```

How the AI works (`app/api/chat/route.js`):
- The **system prompt is built dynamically** from `lib/knowledge.js` (services, area, prices, limits), the FAQs in `data/content.js`, and the contact data in `lib/siteConfig.js`. Edit those files and the AI answers with the new info — no code change needed.
- It tries several free-tier Gemini models in order (`gemini-2.5-flash` → `gemini-2.5-flash-lite` → `gemini-flash-latest`); if one is busy (429/503) it falls back to the next. Dynamic "thinking" is enabled.
- Without a key, or if all models are busy, the chat falls back to a calm keyword-based **offline triage** (`lib/triage.js`) that always points the user to the 24h phone line — it never invents information.

## Project structure

```
nextjs-app/
├── app/
│   ├── layout.js          # <html>, next/font (self-hosted), metadata + OpenGraph + LocalBusiness JSON-LD
│   ├── globals.css        # body reset, @keyframes, scrollbar, responsive rules, reduced-motion
│   ├── page.js            # slim orchestrator: state + composition (client component)
│   ├── sitemap.js         # /sitemap.xml
│   ├── robots.js          # /robots.txt (disallows /api/)
│   └── api/chat/route.js  # Gemini chat endpoint (dynamic prompt, model fallback, offline triage)
├── components/
│   ├── BackgroundLayers.js# ambient video + gradient/glow/noise layers
│   ├── HomeCard.js        # the glass card (logo, headline, WhatsApp/E-Mail, AI bar, nav)
│   ├── ModalShell.js      # shared modal frame (role=dialog, Escape, scroll-lock, focus-trap)
│   ├── Hover.js           # style-hover wrapper
│   ├── icons.js           # all SVG icons
│   └── modals/            # AboutModal, PortfolioModal (Instagram carousel), FaqModal, ChatModal
├── data/
│   └── content.js         # German copy (services, steps, portfolio, FAQ) — swap for a CMS later
├── lib/
│   ├── style.js           # tiny CSS-string → React-style-object helper (keeps styles 1:1)
│   ├── siteConfig.js      # central business data (phone, email, addresses) + site URL
│   ├── knowledge.js       # AI knowledge base — feeds the dynamic system prompt
│   ├── triage.js          # offline keyword fallback when no key / models busy
│   └── uiStyles.js        # shared CSS-string snippets
└── public/
    ├── mond-hero.jpg      # ambient background still / video poster / OG image
    ├── bg-video.mp4       # looping background video
    └── portfolio/         # portfolio photos (referenced from data/content.js)
```

## SEO, security & accessibility
- **SEO:** rich metadata, Open Graph/Twitter cards, `LocalBusiness` JSON-LD, `sitemap.xml`, `robots.txt`.
- **Fonts:** `next/font` self-hosts Source Serif 4 + Public Sans at build time — faster, no layout shift, and GDPR-friendly for AT/DE visitors (no runtime request to Google's servers).
- **Security:** `/api/chat` has per-IP rate-limiting and input validation/length caps; the Gemini key stays server-side only.
- **Accessibility:** modals use `role="dialog"`, close on `Escape`, lock body scroll, trap & restore focus; FAQ items are real `<button aria-expanded>`; `prefers-reduced-motion` respected.
- **Responsive:** full-bleed background with a floating centered card layout on desktop; app-style column on mobile.

## Configuration
Business contact details live in `lib/siteConfig.js`. Set the public URL for metadata/sitemap via `NEXT_PUBLIC_SITE_URL` (defaults to `https://css-reinigung-salzburg.at`).

## Notes on fidelity
- All inline styles from the prototype are preserved verbatim via the `s()` helper in `lib/style.js`, so the look is identical.
- Hover states (`style-hover` in the prototype) are handled by the small `<Hover>` wrapper in `page.js`.
- **Portfolio (Instagram-style):** the Portfolio button opens one continuous swipeable carousel (`PortfolioModal`) — the image on top and the caption below both change per slide, with dots, arrows and a counter. Each slide is an entry in `PORTFOLIO` (`data/content.js`): `{ image, title, loc, desc, tags }`. Drop photos into `public/portfolio/` and point `image` at them; portrait/square photos frame best.
- Contact details (phone `+43 660 8313103`, email, addresses) live in `lib/siteConfig.js` — edit there.

## Production
```bash
npm run build && npm run start
```
Deploys cleanly to Vercel; set `GEMINI_API_KEY` as an environment variable in your host.
