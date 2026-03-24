# RA SOFT LLC — IT Staffing Website
## Implementation Plan (Current State)

---

## Project Overview
**Company:** RA SOFT LLC
**Type:** IT Staffing & Technology Solutions
**Location:** Laurel, Maryland, USA
**Phone:** (720) 560-3742
**Email:** talent@rasoftllc.com

---

## Tech Stack

### Next.js App (Primary Website)
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Library:** shadcn/ui structure
- **Animations:** Framer Motion, Motion
- **Icons:** Lucide React
- **URL:** http://localhost:3000

### Angular App (Alternative Frontend)
- **Framework:** Angular 17 (Standalone Components)
- **Styling:** Tailwind CSS
- **URL:** http://localhost:4200

### Node.js Backend (API)
- **Framework:** Express.js
- **URL:** http://localhost:3003
- **Endpoints:**
  - `GET /` — API info
  - `GET /api/health` — Health check
  - `POST /api/contact` — Contact form submission

---

## File Structure

```
D:/myproject/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx               ← Main page (all sections)
├── components/
│   └── ui/
│       ├── banner.tsx          ← Top announcement banner
│       ├── button.tsx          ← shadcn Button
│       ├── footer-section.tsx  ← Footer with links & contact
│       ├── glowing-effect.tsx  ← Mouse-tracking glow on cards
│       ├── google-gemini-effect.tsx ← Scroll-animated SVG paths
│       ├── limelight-nav.tsx   ← (kept, not used in page)
│       ├── shape-landing-hero.tsx   ← Animated hero with shapes
│       └── [button, utils, etc.]
├── lib/
│   └── utils.ts               ← cn() utility
├── frontend/                  ← Angular 17 app
│   └── src/app/components/    ← 14 Angular components
├── backend/                   ← Node.js/Express API
│   └── server.js
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── plan.md
```

---

## Page Sections (Next.js — Current State)

| # | Section | Component/Notes | Status |
|---|---------|-----------------|--------|
| 1 | Top Banner | `Banner` — dismissible Q2 2025 announcement | ✅ |
| 2 | Sticky Navbar | Custom — logo, nav links, mobile menu | ✅ |
| 3 | Hero | `HeroGeometric` — animated floating shapes, gradient text | ✅ |
| 4 | Stats Bar | 500+ placements, 48hr submit, 95% retention, 10+ years | ✅ |
| 5 | Marquee | Red ticker — AI, Cloud, DoD, Healthcare, Fintech, Cyber | ✅ |
| 6 | Services | 6 cards with `GlowingEffect` — AI/ML, Cloud, DoD, Fintech, Healthcare, Cyber | ✅ |
| 7 | Gemini Scroll | `GoogleGeminiEffect` — scroll-animated SVG paths, 3-viewport height | ✅ |
| 8 | Clearance | Security clearance levels — Public Trust → Full Scope Poly, 2,500+ candidates | ✅ |
| 9 | Industries | 6 industry cards — Defense, Federal, Finance, Healthcare, Energy, Telecom | ✅ |
| 10 | Process | 4-step grid — Discovery → Search → Vetting → Onboarding | ✅ |
| 11 | Why Us | 6-item grid — Vertical Recruiters, Pipeline, 48hr, Compliance, Flex, Teams | ✅ |
| 12 | Testimonials | 3 client quotes — Defense PM, Health VP, Fintech CTO | ✅ |
| 13 | Contact Form | Form with HTTP POST to backend — name, email, company, service, clearance, message | ✅ |
| 14 | Footer | `Footer` — links, contact info, copyright | ✅ |

### Removed Sections
- ~~LimelightNav (section dock)~~ — removed per user request
- ~~Final CTA ("Your Next Critical Hire")~~ — removed per user request

---

## Contact Info (Current)
| Field | Value |
|-------|-------|
| Phone | (720) 560-3742 |
| Address | Laurel, Maryland, USA |
| Email | talent@rasoftllc.com |

---

## Components Used
| Component | File | Where Used |
|-----------|------|------------|
| Banner | `components/ui/banner.tsx` | Top announcement bar |
| HeroGeometric | `components/ui/shape-landing-hero.tsx` | Hero section |
| GlowingEffect | `components/ui/glowing-effect.tsx` | Service cards |
| GoogleGeminiEffect | `components/ui/google-gemini-effect.tsx` | Scroll animation section |
| Footer | `components/ui/footer-section.tsx` | Page footer |

---

## Running the Project

### Next.js (primary)
```bash
cd D:/myproject
npm run dev
# → http://localhost:3000
```

### Angular frontend
```bash
cd D:/myproject/frontend
npx ng serve --host 0.0.0.0 --port 4200
# → http://localhost:4200
# → http://127.0.0.1:4200
```

### Node.js backend
```bash
cd D:/myproject/backend
PORT=3003 node server.js
# → http://localhost:3003
```

---

## Pending / Future Work
- [ ] Replace placeholder email with real company email
- [ ] Connect contact form email delivery (Nodemailer / SendGrid)
- [ ] Add real case studies / portfolio
- [ ] SEO metadata per page
- [ ] Deploy to production (Vercel for Next.js, Railway/Render for backend)
