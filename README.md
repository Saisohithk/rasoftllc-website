# RA SOFT LLC — Website

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen)](https://rasoftllc.netlify.app/)

Live site: [https://rasoftllc.netlify.app/](https://rasoftllc.netlify.app/)

---

## Overview

This is the official website for **RA SOFT LLC**, an IT staffing and technology solutions company based in Laurel, Maryland. The project is a monorepo containing three independent applications:

| Application | Tech Stack | Dev Port | Directory |
|-------------|------------|----------|-----------|
| **Next.js Frontend** (primary) | Next.js 14, React 18, TypeScript, Tailwind CSS | 3000 | `/` (root) |
| **Express Backend** | Node.js, Express.js | 3003 | `backend/` |
| **Angular Frontend** (mirror) | Angular 17, TypeScript, Tailwind CSS | 4200 | `frontend/` |

---

## System Requirements

Before you begin, make sure the following tools are installed on your machine:

| Tool | Minimum Version | Download |
|------|----------------|---------|
| **Node.js** | 18.x or higher | https://nodejs.org/en/download |
| **npm** | 9.x or higher | Bundled with Node.js |
| **Angular CLI** | 17.x | `npm install -g @angular/cli` |
| **Git** | 2.x | https://git-scm.com/downloads |

Verify your installations:
```bash
node --version      # Should print v18.x.x or higher
npm --version       # Should print 9.x.x or higher
ng version          # Should print Angular CLI: 17.x.x
git --version       # Should print git version 2.x.x
```

---

## Project Structure

```
myproject/
├── app/                        # Next.js App Router pages & API routes
│   ├── api/
│   │   └── contact/
│   │       └── route.ts        # POST /api/contact — contact form handler
│   ├── layout.tsx              # Root HTML layout & metadata
│   ├── page.tsx                # Homepage (all page sections)
│   └── globals.css             # Global styles
│
├── components/
│   └── ui/                     # Shared React components
│       ├── banner.tsx          # Dismissible announcement bar
│       ├── button.tsx          # Reusable button component
│       ├── footer-section.tsx  # Footer
│       ├── glowing-effect.tsx  # Mouse-proximity glow borders
│       ├── google-gemini-effect.tsx  # Animated SVG scroll effect
│       ├── limelight-nav.tsx   # Tab navigation
│       └── shape-landing-hero.tsx   # Animated hero section
│
├── lib/
│   └── utils.ts                # Utility helpers (cn() classname merger)
│
├── backend/                    # Express.js API server
│   ├── server.js               # Main server entry point
│   └── package.json
│
├── frontend/                   # Angular 17 frontend (mirror implementation)
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/     # 12 Angular section components
│   │   │   ├── directives/     # Custom Angular directives
│   │   │   ├── services/       # Angular services (contact, etc.)
│   │   │   ├── app.component.ts
│   │   │   └── app.config.ts
│   │   ├── main.ts             # Angular bootstrap entry point
│   │   ├── index.html
│   │   └── styles.css
│   └── package.json
│
├── package.json                # Root (Next.js) dependencies
├── tsconfig.json               # TypeScript config for Next.js only
├── tailwind.config.ts          # Tailwind CSS configuration
├── next.config.js              # Next.js configuration
├── requirements.txt            # Full dependency reference
└── README.md                   # This file
```

---

## Setup Instructions

### Step 1 — Clone the Repository

```bash
git clone https://github.com/Saisohithk/rasoftllc-website.git
cd rasoftllc-website
```

---

### Step 2 — Install Dependencies

Each application has its own `node_modules`. Install them separately:

**Next.js (root):**
```bash
npm install
```

**Express Backend:**
```bash
cd backend
npm install
cd ..
```

**Angular Frontend:**
```bash
cd frontend
npm install
cd ..
```

---

### Step 3 — Run in Development Mode

You will need **3 terminal windows/tabs** — one for each application.

**Terminal 1 — Next.js frontend (port 3000):**
```bash
# From project root
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

**Terminal 2 — Express backend (port 3003):**
```bash
cd backend
npm run dev
```
API available at [http://localhost:3003](http://localhost:3003)

**Terminal 3 — Angular frontend (port 4200):**
```bash
cd frontend
ng serve
```
Open [http://localhost:4200](http://localhost:4200)

---

## API Endpoints (Backend)

Base URL in development: `http://localhost:3003`

| Method | Route | Description |
|--------|-------|-------------|
| `GET` | `/` | Server info & available endpoints |
| `GET` | `/api/health` | Health check — returns `{ status: "ok" }` |
| `POST` | `/api/contact` | Submit contact form |

**POST /api/contact — Request Body:**
```json
{
  "firstName": "John",          // required
  "email": "john@example.com",  // required
  "lastName": "Doe",            // optional
  "company": "Acme Corp",       // optional
  "serviceArea": "IT Staffing", // optional
  "clearanceLevel": "Secret",   // optional
  "message": "Hello..."         // optional
}
```

**Success Response:**
```json
{
  "success": true,
  "message": "Request received. A specialist will respond within 1 business day."
}
```

---

## Build for Production

**Next.js:**
```bash
# From project root
npm run build
npm start
```

**Angular:**
```bash
cd frontend
ng build
# Output is in frontend/dist/
```

---

## Deployment

### Next.js — Vercel (recommended)

1. Push your code to GitHub.
2. Go to [https://vercel.com](https://vercel.com) and import your repository.
3. Vercel auto-detects Next.js — click **Deploy**.
4. Set environment variables in the Vercel dashboard if needed.

### Express Backend — Railway / Render / Heroku

```bash
# Example: Heroku
cd backend
heroku create rasoft-api
git subtree push --prefix backend heroku main
```

Or deploy via [Railway](https://railway.app) or [Render](https://render.com) by pointing to the `backend/` folder.

### Angular — Netlify

1. Run `ng build` inside `frontend/`.
2. Drag and drop the `frontend/dist/rasoftllc-frontend/browser/` folder onto [https://app.netlify.com](https://app.netlify.com).
3. Or connect your GitHub repo and set the build command to `ng build` and publish directory to `frontend/dist/rasoftllc-frontend/browser`.

---

## Common Issues & Fixes

**`ng` command not found:**
```bash
npm install -g @angular/cli
```

**Port already in use:**
```bash
# Kill process on port 3000 (Windows)
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Kill process on port 3000 (Mac/Linux)
lsof -ti:3000 | xargs kill
```

**TypeScript errors in `frontend/` or `backend/` showing up in Next.js:**
The root `tsconfig.json` already excludes `frontend/` and `backend/` from compilation. If errors appear, verify your editor is using the workspace TypeScript version.

**CORS errors from Angular to backend:**
The backend CORS config allows `http://localhost:3000`, `http://localhost:4200`, and `http://localhost:4201`. If you use a different port, update the `origin` array in `backend/server.js`.

---

## Contact

- **Phone:** (720) 560-3742
- **Email:** talent@rasoftllc.com
- **Address:** Laurel, Maryland, USA
