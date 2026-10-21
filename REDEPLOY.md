# Learn Infinity - Quick Deploy Guide

## Deploy Steps
```bash
# 1. Build the project
npm run build

# 2. Deploy to Vercel (requires login first)
vercel login
npx vercel --prod --yes
```

## Project Info
- **Vercel Project**: `project` (prj_RQ7g9jgRjA2tTGXLeubQ4RW5y4Ty)
- **Supabase URL**: Configured in .env

## Environment Variables (Set in Vercel Dashboard)
```
VITE_SUPABASE_URL=<from .env>
VITE_SUPABASE_ANON_KEY=<from .env>
```

## Tech Stack
- Vite + React + TypeScript
- Tailwind CSS v4 (OKLCH colors)
- Supabase (Auth + Database)
- Vercel (Hosting)

## File Structure
```
src/
  components/     # Reusable components
    ui/           # Base UI (Card, Button, Input...)
  pages/          # Route pages (Home, Login, Dashboard...)
  contexts/       # React contexts (Auth)
  lib/            # Utilities (supabase client, cn())
  types/          # TypeScript types
```

## Commands
```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run preview  # Preview build
```
