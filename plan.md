# RA SOFT LLC — Project Plan & Architecture Guide

## What Is This Project?

This is the official website for **RA SOFT LLC**, an IT staffing and technology solutions company
based in Laurel, Maryland. The site markets the company's services to federal, commercial, and
cleared-environment clients.

The project has **three separate parts** that all work together:

```
D:/myproject/
├── app/                  ← Next.js (primary website, goes to production)
├── components/           ← Shared UI components used by Next.js
├── backend/              ← Node.js/Express API server (local dev only)
└── frontend/             ← Angular 17 frontend (mirror of Next.js site)
```

---

## Part 1 — Next.js (Primary Site)

**Location:** `D:/myproject/`
**Running at:** http://localhost:3000
**Goes live at:** https://rasoftllc.com (via Vercel)

This is the **real production site**. It uses:
- **Next.js 14** with App Router
- **TypeScript**
- **Tailwind CSS** for styling
- **Framer Motion** for animations

### Key Files

| File | Purpose |
|------|---------|
| `app/page.tsx` | Main page — assembles all sections in order |
| `app/layout.tsx` | HTML shell, loads Google Fonts (Bebas Neue + Outfit) |
| `app/globals.css` | Global styles, Tailwind base |
| `app/api/contact/route.ts` | Contact form API endpoint (built into Next.js) |

### UI Components (`components/ui/`)

| File | What It Does |
|------|-------------|
| `banner.tsx` | Dismissible amber warning/announcement bar at top |
| `shape-landing-hero.tsx` | Hero section with animated floating geometric shapes |
| `glowing-effect.tsx` | Mouse-proximity glowing border on cards |
| `google-gemini-effect.tsx` | Animated SVG wave lines (scroll-driven animation) |
| `footer-section.tsx` | Site footer with links, contact info, copyright |
| `limelight-nav.tsx` | Tab navigation bar (exists but not used on the page) |
| `button.tsx` | Reusable button component |

### Page Sections (top to bottom)

1. **Banner** — "Now Hiring" or announcement bar
2. **Navbar** — logo + navigation links
3. **Hero** — headline, subtext, CTA buttons, floating shapes
4. **Marquee** — scrolling ticker of tech stack / keywords
5. **Services** — cards for each service offering (with glowing effect)
6. **Gemini Scroll** — animated SVG lines that draw as you scroll
7. **Clearance** — security clearance levels supported
8. **Industries** — sectors served (Federal, Defense, Healthcare, etc.)
9. **Process** — how the hiring process works (steps)
10. **Why Us** — differentiators / value propositions
11. **Testimonials** — client quotes
12. **Contact** — form + contact info (phone, email, address)
13. **Footer** — links, social, copyright

### Contact Info
- **Phone:** (720) 560-3742
- **Email:** talent@rasoftllc.com
- **Address:** Laurel, Maryland, USA

### Contact Form API
The form at the bottom submits to `/api/contact` (same Next.js server).
File: `app/api/contact/route.ts`
- Accepts POST with: `firstName`, `lastName`, `email`, `company`, `serviceArea`, `clearanceLevel`, `message`
- Validates: `firstName` and `email` are required
- Currently logs to console (replace with Resend/SendGrid for real emails)

---

## Part 2 — Node.js Backend

**Location:** `D:/myproject/backend/`
**Running at:** http://localhost:3003
**Purpose:** Standalone API server for local development / Angular frontend use

### Files

| File | Purpose |
|------|---------|
| `server.js` | Express server with CORS, health check, contact endpoint |
| `package.json` | Dependencies: express, cors, nodemon |

### API Endpoints

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/` | API info page (company name, available endpoints) |
| GET | `/api/health` | Health check — returns `{ status: "ok" }` |
| POST | `/api/contact` | Contact form submission |

### How to Start

```bash
cd D:/myproject/backend
node server.js
# OR for auto-restart on changes:
npm run dev
```

### CORS Origins Allowed
- http://localhost:3000 (Next.js)
- http://localhost:4200 (Angular default)
- http://localhost:4201 (Angular alternate port)

---

## Part 3 — Angular 17 Frontend

**Location:** `D:/myproject/frontend/`
**Running at:** http://localhost:4201
**Purpose:** Angular version of the same website (mirrors Next.js exactly)

This is a full rebuild of the Next.js site using Angular 17 standalone components.
It talks to the Node.js backend (`localhost:3003`) for form submissions.

### How to Start

```bash
cd D:/myproject/frontend
npm install                              # first time only
npx ng serve --host 0.0.0.0 --port 4201
```

### File Structure

```
frontend/src/
├── main.ts                             ← Angular bootstrap entry point
├── index.html                          ← HTML shell
├── styles.css                          ← Tailwind + custom CSS keyframes
└── app/
    ├── app.component.ts                ← Root component, assembles all sections
    ├── app.config.ts                   ← Angular app config
    ├── services/
    │   └── contact.service.ts          ← HTTP service for form submission
    ├── directives/
    │   └── glowing-effect.directive.ts ← Mouse-proximity glow (Angular equivalent)
    └── components/
        ├── banner/
        ├── navbar/
        ├── hero/
        ├── marquee/
        ├── services/
        ├── gemini-scroll/
        ├── clearance/
        ├── industries/
        ├── process/
        ├── why-us/
        ├── testimonials/
        ├── contact/
        └── footer/
```

Each component is a single `.ts` file using Angular's **inline template** style
(no separate HTML files). All use `standalone: true`.

### Angular vs Next.js Differences

| Feature | Next.js | Angular |
|---------|---------|---------|
| Animations | Framer Motion | CSS keyframes |
| State | React `useState` | Angular `signal()` |
| Loops | `{items.map(...)}` | `@for (item of items)` |
| Conditionals | `{condition && <X/>}` | `@if (condition)` |
| HTTP calls | `fetch()` | `HttpClient` service |
| Email `@` in template | Works normally | Must use `&#64;` (NG5002 error) |

---

## How Everything Connects

```
Browser
  │
  ├─→ localhost:3000  (Next.js)
  │     ├── serves the website
  │     └── POST /api/contact  ← contact form goes here directly
  │
  ├─→ localhost:4201  (Angular)
  │     └── POST to localhost:3003/api/contact  ← Angular uses Express backend
  │
  └─→ localhost:3003  (Express API)
        └── POST /api/contact  ← used by Angular
```

---

## Deployment Plan

The **Next.js site** is what gets deployed to `rasoftllc.com`.
The Angular and Express backend are **local development tools only**.

### Step 1 — Push to GitHub (required for all options)

```bash
cd D:/myproject
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/rasoftllc.git
git push -u origin main
```

---

### Option A — Netlify (Recommended, Free)

Netlify fully supports Next.js with API routes and is very beginner-friendly.

1. Go to https://www.netlify.com and sign up / log in
2. Click **"Add new site" → "Import an existing project"**
3. Connect your GitHub account and select the repository
4. Build settings (Netlify auto-detects Next.js):
   - Build command: `npm run build`
   - Publish directory: `.next`
5. Click **Deploy**
6. Add custom domain:
   - Site settings → Domain management → Add domain → `rasoftllc.com`
   - Add these DNS records at your domain registrar:
     ```
     Type    Name    Value
     A       @       75.2.60.5
     CNAME   www     YOUR-SITE-NAME.netlify.app
     ```

---

### Option B — Railway (Simple, Paid ~$5/mo)

Good if you also want to host the Express backend on the same platform.

1. Go to https://railway.app and sign up
2. Click **"New Project" → "Deploy from GitHub repo"**
3. Select your repository
4. Railway auto-detects Next.js and builds it
5. Go to Settings → Domains → Add custom domain `rasoftllc.com`
6. Add the DNS record shown by Railway at your domain registrar

---

### Option C — Render (Free tier available)

1. Go to https://render.com and sign up
2. Click **"New" → "Web Service"**
3. Connect GitHub and select your repository
4. Settings:
   - Environment: `Node`
   - Build command: `npm install && npm run build`
   - Start command: `npm start`
5. Click **Create Web Service**
6. Go to Settings → Custom Domains → Add `rasoftllc.com`

---

### Option D — DigitalOcean App Platform (~$5/mo)

1. Go to https://www.digitalocean.com and sign up
2. Click **"Create" → "Apps"**
3. Connect GitHub and select your repository
4. DigitalOcean detects Next.js automatically
5. Choose the Basic plan ($5/mo)
6. After deploy: Settings → Domains → Add `rasoftllc.com`

---

### What Gets Deployed vs What Stays Local

| Part | Deployed? | Where |
|------|-----------|-------|
| Next.js (`app/`, `components/`) | YES | Netlify / Railway / Render / DigitalOcean |
| Angular (`frontend/`) | NO | Local dev only |
| Express backend (`backend/`) | NO | Local dev only |

### Comparison Table

| Platform | Free Tier | Next.js Support | Ease | Best For |
|----------|-----------|-----------------|------|----------|
| Netlify | Yes | Full | Easy | Best free option |
| Railway | No ($5/mo) | Full | Easy | Also hosting backend |
| Render | Yes (slow) | Full | Medium | Budget option |
| DigitalOcean | No ($5/mo) | Full | Medium | More control |

**Recommendation: Use Netlify** — free, fast, full Next.js support, easy custom domain.

---

## Quick Reference: Starting Everything

```bash
# Start Next.js (primary site)
cd D:/myproject
npm run dev
# → http://localhost:3000

# Start Angular frontend
cd D:/myproject/frontend
npx ng serve --host 0.0.0.0 --port 4201
# → http://localhost:4201

# Start Express backend
cd D:/myproject/backend
node server.js
# → http://localhost:3003
```

---

## Tech Stack Summary

| Technology | Version | Used For |
|------------|---------|---------|
| Next.js | 14 | Primary website framework |
| React | 18 | UI rendering (via Next.js) |
| TypeScript | 5 | Type safety across all TS files |
| Tailwind CSS | 3 | Styling (both Next.js and Angular) |
| Framer Motion | latest | Animations in Next.js |
| Angular | 17 | Alternative frontend |
| Express | 4 | Local API server |
| Node.js | 24 | Runtime for backend + Angular CLI |
| Vercel | - | Production hosting |

---

## Important Notes

- The `@` symbol in email addresses inside **Angular templates** must be written as
  `&#64;` (e.g., `talent&#64;rasoftllc.com`) to avoid Angular error NG5002.
- The `.gitignore` excludes `node_modules/`, `.env`, `.next/`, `frontend/dist/`,
  and `frontend/.angular/` — never commit these.
- All three servers can run simultaneously without conflict as long as they use
  different ports (3000, 3003, 4201).
