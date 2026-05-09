# GenZnames — Baby Names Website

A clean, glassmorphic baby-names site built with Next.js 15 + Tailwind. Browse curated **Indian** and **English** boy & girl names with meanings, search by name or meaning, and monetize via Google AdSense.

## Stack

- **Next.js 15** (App Router, TypeScript)
- **Tailwind CSS** (custom glassmorphic theme)
- **AdSense-ready** (drop in your publisher ID and slot IDs)
- Static-export friendly — every route prerenders to HTML

## Run locally

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Site flow

1. `/` — Pick a tradition: **Indian** or **English**
2. `/names/[origin]` — Pick **Boy** or **Girl**
3. `/names/[origin]/[gender]` — Browse all names in that combo, with sticky search

Search matches both the **name** and the **meaning**, so a parent can search "ocean" and get back **Arnav**.

## Adding more names

Open `src/data/names.ts` and add entries to the `NAMES` array:

```ts
{ name: "Vivaan", origin: "indian", gender: "boy", meaning: "Full of life; the rising sun." },
```

Names are auto-sorted alphabetically and auto-counted on the listing pages.

## Wiring up Google AdSense

Ad slots are already embedded in:

- The home page (top + bottom banners)
- Each origin page (top banner)
- Each names listing page (top + bottom + in-feed every 12 cards)

Until you provide a publisher ID, they show a stylish dashed "Sponsored placeholder" so the layout still breathes.

### Step 1 — Apply for AdSense

AdSense requires a **live, public site with real content** before approval. So **deploy first** (see below), then apply at https://www.google.com/adsense/.

### Step 2 — Add your publisher ID

Once approved, you'll have a publisher ID like `ca-pub-1234567890123456`.

Create `.env.local` for local dev:

```
NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-1234567890123456
```

On **Vercel**: Project Settings → Environment Variables → add the same key/value, then redeploy.

### Step 3 — Create ad units

In the AdSense dashboard, create ad units for each slot. The component already passes friendly slot names: `home_top`, `home_bottom`, `indian_top`, `english_boy_top`, `in_feed`, etc. You can either:

- **Easy path**: use one auto-responsive ad unit for everything and ignore the slot strings (AdSense will still serve ads — slot IDs are mostly for analytics).
- **Optimal path**: open `src/components/AdSlot.tsx`'s callsites and replace the `slot="home_top"` strings with the real numeric slot IDs from AdSense.

## Deploying — recommended: Vercel

Vercel is built by the team that makes Next.js, has a generous free tier, gives you a custom domain in two clicks, and AdSense-friendly HTTPS by default.

1. Push the project to GitHub:
   ```bash
   cd "/Users/basha/Documents/Project X"
   git init && git add . && git commit -m "Initial commit"
   gh repo create genznames --public --source=. --push   # or use the GitHub web UI
   ```
2. Go to https://vercel.com/new and import the repo. Click **Deploy** — no config needed.
3. You'll get a `genznames.vercel.app` URL within a minute.
4. (Optional) Add a custom domain — buy one on Namecheap/Porkbun (~₹800/year for `.com`), point it at Vercel.

> ⚠️ AdSense rejects subdomains of `.vercel.app` for high earnings — buy a real domain (`genznames.com`, `genznames.in`, etc.) before applying for AdSense to take this seriously.

## Customizing the theme

- **Colors**: edit `tailwind.config.ts` — bubble palette is under `theme.extend.colors.bubble`.
- **Glass intensity**: edit `src/app/globals.css` — adjust `.glass`, `.glass-strong`, `.glass-soft` blur values.
- **Background blobs**: edit `src/app/layout.tsx` — change `.blob` positions/sizes.
- **Branding**: change "GenZnames" wherever it appears (`layout.tsx`, `page.tsx`, `metadata` block).

## SEO checklist for monetization

- [ ] Buy a real `.com` or `.in` domain.
- [ ] Submit `https://yoursite.com/sitemap.xml` to Google Search Console (you'll want to add a sitemap — Next.js has built-in support via `app/sitemap.ts`).
- [ ] Add a privacy policy + cookie banner (AdSense requires them, especially for EU/India traffic).
- [ ] Wait until you have ~30 names live + a few weeks of organic traffic before applying for AdSense — they reject thin sites.
- [ ] Add more names (target 1,000+) and short blog posts ("Top 10 Indian names that mean 'star'") for SEO long-tail traffic.

## Project structure

```
src/
├── app/
│   ├── layout.tsx                       # Shell + nav + footer
│   ├── page.tsx                         # Home (Indian vs English)
│   ├── globals.css                      # Glassmorphic theme
│   ├── not-found.tsx                    # 404 page
│   └── names/
│       └── [origin]/
│           ├── page.tsx                 # Boy vs Girl picker
│           └── [gender]/
│               └── page.tsx             # Names list + search
├── components/
│   ├── AdSlot.tsx                       # AdSense slot + script loader
│   └── NameBrowser.tsx                  # Client-side search + cards
└── data/
    └── names.ts                         # The full names dataset
```

---

Made with 💜 for parents-to-be.
