# WF Uwais Enterprise — Website

Marketing website and quote request system for **WF Uwais Enterprise**, a professional cleaning services company based in Seremban, Negeri Sembilan, serving residential, commercial and industrial clients across Negeri Sembilan and Melaka.

Built as a real client project during a 20-week industrial training internship at Politeknik Ungku Omar.

---

## Live Demo

> (https://wf-uwais-website.vercel.app/)

---

## Features

- **Marketing pages** — Home, Services, Gallery, About, Contact
- **Quote request system** — form saves to PostgreSQL database, then redirects to WhatsApp with a pre-filled message matching how the client communicates
- **Admin dashboard** — login-protected, view/filter/update quote requests add internal notes, archive old requests
- **Spam protection** — honeypot field on the quote form
- **SEO ready** — meta tags, Open Graph, local keywords (Seremban, Melaka)
- **Fully responsive** — mobile-first, tested on phone and desktop

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS + custom CSS design system |
| Database | PostgreSQL (Supabase) |
| ORM | Prisma 7 |
| Auth | JWT via `jose`, HTTP-only cookies |
| Deployment | Vercel |
| Version Control | GitHub |

**Design system:**
- Typography: Playfair Display (display/serif) + DM Sans (body)
- Palette: Forest `#0E2318` · Moss `#1C5C35` · Sage `#E4EFE7` · Gold `#C9943A`
- Motion: Emil Kowalski animation principles — specified transitions, `ease-out` curves, `scale(0.97)` press feedback, `prefers-reduced-motion` respected

---

## Project Structure

```
src/
  app/                    → Pages (Next.js App Router)
    page.tsx              → Homepage
    services/             → Services page
    gallery/              → Gallery page
    about/                → About page
    contact/              → Contact / quote request page
    admin/
      login/              → Admin login page
      dashboard/          → Admin dashboard (protected)
    api/
      quotes/             → POST — save quote request + return WhatsApp URL
      admin/
        login/            → POST — admin authentication
        logout/           → POST — clear session cookie
        quotes/           → GET — list quote requests
        quotes/[id]/      → PATCH/DELETE — update status, note, archive
  components/
    layout/
      Navbar.tsx          → Sticky navbar, scroll-aware blur, animated hamburger
      Footer.tsx          → 3-column footer
    QuoteForm.tsx         → Quote request form with validation + WhatsApp redirect
  lib/
    constants.ts          → Company data, services, clients, WhatsApp link builder
    prisma.ts             → Prisma client singleton (driver adapter pattern)
    auth.ts               → JWT sign/verify helpers
  proxy.ts                → Route protection for /admin/* (Next.js 16 proxy)
prisma/
  schema.prisma           → Database schema
  seed.ts                 → Seeds services, clients, and admin user
prisma.config.ts          → Prisma 7 CLI config (connection URLs)
```

---

## Getting Started

### Prerequisites

- Node.js 22+
- A free [Supabase](https://supabase.com) PostgreSQL database

### Setup

```bash
# 1. Install dependencies
npm install

# 2. Copy env file and fill in your values
cp .env.example .env

# 3. Generate Prisma client
npx prisma generate

# 4. Push schema to database
npx prisma db push

# 5. Seed database (services, clients, admin user)
npx prisma db seed

# 6. Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Admin panel: [http://localhost:3000/admin/login](http://localhost:3000/admin/login)

### Environment Variables

| Variable | Description |
|---|---|
| `DATABASE_URL` | Supabase pooled connection string (port 6543) |
| `DIRECT_URL` | Supabase direct connection string (port 5432, for migrations) |
| `JWT_SECRET` | Long random string for signing admin session tokens |
| `ADMIN_EMAIL` | Admin login email (created by seed script) |
| `ADMIN_PASSWORD` | Admin login password (created by seed script) |

> **Note:** Special characters in your database password must be URL-encoded in the connection string (`@` -> `%40`, `#` -> `%23`, `!` -> `%21`, etc.)

---

## Key Architecture Decisions

**WhatsApp-first quote flow** — the form saves to the database for a permanent record, then redirects to `wa.me` with a pre-filled message. This matches how the business already communicates with customers instead of forcing an email-based workflow on them.

**Free-text location field** — the company serves Seremban and Melaka but takes jobs outside those areas "upon request." A fixed dropdown would lose those leads. Free text keeps it open.

**Prisma 7 driver adapter pattern** — connection URLs live in `prisma.config.ts`, not `schema.prisma`. `PrismaClient` is instantiated with `@prisma/adapter-pg` instead of a bare constructor. Already set up in this repo.

**Two database URLs** — `DATABASE_URL` (port 6543, pgbouncer pooled) for runtime queries; `DIRECT_URL` (port 5432, direct) for migrations only. Required by Supabase's connection pooler.

---

## Useful Commands

| Command | What it does |
|---|---|
| `npm run dev` | Start local dev server |
| `npm run build` | Build for production |
| `npx prisma studio` | Open database GUI |
| `npx prisma db push` | Sync schema changes to database |
| `npx prisma db seed` | Re-seed services and admin user |

---

## Status

Built during 20-week industrial training — Politeknik Ungku Omar, 2026.

## Author

[Ayet (Muhammad Izzarith)](https://ayet.me) — Diploma in Information Technology, Politeknik Ungku Omar