# Ramayana Productions — Website

> **Stories That Stay With You.**
> Premium film, media & creative production house — React · TypeScript · Vite · React Router · Framer Motion · Lucide.

A complete, responsive, cinematic website: company and founder pages, 6 service detail pages, a production-process gallery, a validated contact form, pre-rendered route-specific SEO metadata, structured data, code splitting and reduced-motion support.

---

## Validation

The production build type-checks the app, generates the production bundle, and pre-renders every public route with route-specific metadata and structured data into `dist/`:

```bash
npm run build
```

Also: the founder's name/photograph, the official email, address, phone, social accounts and domain were **not supplied**, so they are clearly marked placeholders (list below). The two source documents were not attached as files — only the master prompt was — so all copy is drawn from the content quoted in that prompt (company introduction, six services with taglines, Founder's Vision ideas, capabilities).

---

## Quick start

Requires **Node.js 18+**.

```bash
npm install
npm run dev        # http://localhost:5173
```

## Production build

```bash
npm run build      # type-checks, then outputs to /dist
npm run preview    # serves /dist locally to test the production build
```

## Deployment

The site is a single-page app using client-side routing, so the host must serve `index.html` for unknown paths.

| Host | What to do |
| --- | --- |
| **Netlify** | Build command `npm run build`, publish directory `dist`. `public/_redirects` is already included. |
| **Vercel** | Framework preset *Vite*, build command `npm run build`, output directory `dist`. The root `vercel.json` contains the SPA rewrite. |
| **Cloudflare Pages** | Build `npm run build`, output `dist`. `_redirects` is honoured. |
| **Any static host / cPanel** | Upload the contents of `dist/`. Add a rewrite of all paths to `/index.html` (Apache: `FallbackResource /index.html`, nginx: `try_files $uri /index.html;`). |

`npm run build` pre-renders the public routes and generates `dist/sitemap.xml`. Update route titles and descriptions in `src/data/seo.ts`; service pages are generated from `src/data/services.ts`. After deploying, submit `https://ramayanaproductions.com/sitemap.xml` in Google Search Console and verify the domain there.

## Contact form

The form validates name, email, optional phone, service and description (min. 20 characters).

* **With a backend:** create a free endpoint (e.g. [Formspree](https://formspree.io), Getform, Basin) and set it before building:
  ```bash
  cp .env.example .env
  # VITE_ENQUIRY_ENDPOINT=https://formspree.io/f/xxxxxxxx
  ```
  The enquiry is POSTed as JSON. The success message is shown **only** if the server confirms success.
* **Without a backend:** the form opens the visitor's email app with the enquiry pre-filled and states clearly that *nothing has been sent yet*. It never pretends a message was delivered.

---

## Where to edit things

| What | File |
| --- | --- |
| Company name, tagline, email, phone, address, social links, legal details, optional hero video | `src/data/company.ts` |
| Founder name, designation, photo, quote and vision text | `src/data/founder.ts` |
| The six services (copy, workflow, layout, palette, optional photo) | `src/data/services.ts` |
| Page titles, descriptions and canonical routes | `src/data/seo.ts` |
| Operational strengths / why choose / team roles | `src/data/pillars.ts` |
| Colours, spacing, fonts | `src/styles/tokens.css` |

### Replacing the generated visuals with photography

The home page production-process gallery and service pages use the photographs in `public/images/`. Replace or update the image paths in `src/sections/home/ProductionGallery.tsx` and `src/data/services.ts` as needed. Recommended: 1600px+ wide, JPG/WebP, compressed.

The additional `stock-*.webp` photographs are downloaded from Unsplash and used in distinct page and service-card slots. Their source IDs and the Unsplash License link are recorded in [IMAGE-SOURCES.md](./IMAGE-SOURCES.md).

### Founder photograph

Copy the approved portrait to `public/images/founder.jpg`, then in `src/data/founder.ts` set `photo: '/images/founder.jpg'`, `name` and `designation`.

---

## Placeholders requiring official company information

- [ ] **Founder name** and **designation** — `src/data/founder.ts`
- [ ] **Founder photograph** — `public/images/founder.jpg` + `founder.photo`
- [x] **Official email address** (`contact@ramayanaproductions.com`) — `src/data/company.ts` (`email`, `legal.privacyContact`)
- [x] **Domain** — `https://ramayanaproductions.com` is configured in `src/data/company.ts`, `index.html`, `public/robots.txt` and `public/sitemap.xml`
- [ ] **Phone number** and **business address** — `src/data/company.ts` (hidden while empty)
- [ ] **Social media URLs** — `src/data/company.ts` (each link is hidden while empty)
- [ ] **Legal details** (registered legal name, registered address, governing law, last-updated date) — `company.legal`. The Privacy Policy and Terms pages are structured templates, **not legal advice** — have them reviewed by a qualified professional.
- [ ] **Open Graph image** — `public/og-image.svg` is a branded placeholder; most social networks prefer a 1200×630 PNG/JPG. Add one and update the `og:image` URL in `index.html` and `src/hooks/useSEO.ts`.
- [ ] **Contact form endpoint** — `.env` → `VITE_ENQUIRY_ENDPOINT`
- [ ] **Optional hero video** — `company.heroVideoUrl`

## Pages & routes

| Route | Page |
| --- | --- |
| `/` | Home — hero, introduction, philosophy, founder preview, services showcase, capabilities, production-process gallery, why choose, team, CTA |
| `/about` | About Us |
| `/founders-vision` | Founder's Vision |
| `/services` | Our Services (all six) |
| `/services/:slug` | Six service detail pages |
| `/capabilities` | Production Capabilities |
| `/contact` | Contact / project enquiry (`?service=<slug>` pre-selects a service) |
| `/privacy-policy` | Privacy Policy |
| `/terms-and-conditions` | Terms & Conditions |
| `*` | Custom 404 |

## Project structure

```
src/
  assets/       static imports (empty by default)
  components/   Navbar, Footer, Button, CinematicImage, PageHero, CTASection, service cards, …
  layouts/      MainLayout (nav, animated page transitions, footer, back-to-top)
  pages/        one file per route (lazy-loaded except Home)
  sections/     home page sections (Hero, Intro, Philosophy, ProductionGallery, …)
  data/         typed, editable content (company, founder, SEO, services, pillars)
  hooks/        useSEO (per-page title, description, canonical, Open Graph)
  styles/       tokens.css, base.css, components.css, pages.css
  types/        shared TypeScript models
  utils/        enquiry validation + submission
public/         favicon, robots.txt, sitemap.xml, SPA redirects, og-image
scripts/        production route pre-rendering and sitemap generation
```

## Design, accessibility & performance notes

* Palette: `#0B0B0B` · `#171717` · `#F3F0E9` · `#C6A36B` · `#967447` · `#A8A49C`; Playfair Display, Cormorant Garamond, Manrope, DM Sans (loaded from Google Fonts).
* Framer Motion: page transitions, scroll reveals, word-by-word headline reveals, image wipes, hero parallax, animated mobile menu. `MotionConfig reducedMotion="user"` plus CSS fallbacks respect the visitor's reduced-motion setting.
* Accessible: skip link, semantic landmarks, one `h1` per page, labelled form controls with `aria-invalid`/error text, keyboard-operable menu (Esc closes), visible focus states, alt text on all imagery.
* Performance: route-level code splitting, vendor chunks (React / Framer Motion), lazy-loaded images, no heavy image assets by default.
* Responsive: mobile-first layouts from small phones to ultra-wide; no horizontal scrolling; touch targets ≥ 44px; iOS-safe 16px inputs.
