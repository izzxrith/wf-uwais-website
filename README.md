# WF Uwais Enterprise — Website

Marketing website + quote request system for WF Uwais Enterprise, a cleaning
services company serving Seremban and Melaka.

## Tech Stack

- **Framework:** Next.js 15 (App Router) + TypeScript
- **Styling:** Tailwind CSS
- **Database:** PostgreSQL
- **ORM:** Prisma

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Set up your database

You need a PostgreSQL database. Easiest free option for development:
[Supabase](https://supabase.com) or [Neon](https://neon.tech) — both have
free tiers and give you a connection string in under 2 minutes.

Copy the example env file and fill in your real database URL:

```bash
cp .env.example .env
```

Edit `.env` and paste your connection string into `DATABASE_URL`.

### 3. Push the database schema

This creates the tables defined in `prisma/schema.prisma`:

```bash
npx prisma generate
npx prisma db push
```

> **Note on Prisma 7:** connection URLs live in `prisma.config.ts` (not
> `schema.prisma`), and `PrismaClient` is instantiated with a driver adapter
> (`@prisma/adapter-pg`) instead of a bare constructor. This is already set
> up in this project — you only need to fill in `.env`.

### 4. Seed the database

This loads the 4 real services and client list into the database:

```bash
npx prisma db seed
```

### 5. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
  app/              -> pages and routes (App Router)
    page.tsx        -> homepage
    services/       -> services page
    gallery/        -> gallery page
    about/          -> about page
    contact/        -> contact / get a quote page
    api/quotes/     -> API route that handles quote form submissions
  components/       -> reusable UI components
  lib/
    prisma.ts       -> Prisma client setup
    constants.ts    -> company info, services, clients (real data, single source of truth)
prisma/
  schema.prisma     -> database schema (tables)
  seed.ts           -> seeds the database with real company data
```

## Useful Commands

| Command | What it does |
|---|---|
| `npm run dev` | Start local dev server |
| `npm run build` | Build for production |
| `npx prisma studio` | Open a GUI to view/edit your database |
| `npx prisma db push` | Sync schema changes to the database |

## Status

In active development — Week 1 of 20.
