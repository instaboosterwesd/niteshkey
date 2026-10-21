# KidSpark Academy - Deploy to Vercel

## Quick Deploy (One Command)

```bash
npx vercel --prod
```

## Project Details
- **Vercel Project ID**: `project-bcggmqpy3-instaboosterwesds-projects`
- **Domain**: `demokidsweb.vercel.app`
- **Framework**: Vite (React + TypeScript)

## Environment Variables (MUST set in Vercel Dashboard)

Go to Vercel Dashboard > Project > Settings > Environment Variables and add:

1. `VITE_SUPABASE_URL` - Your Supabase project URL
2. `VITE_SUPABASE_ANON_KEY` - Your Supabase anon key

## White Screen Fix

The `vercel.json` file is already configured with SPA rewrites:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

This ensures React Router works correctly - without it, refreshing any page shows a white screen.

## Step-by-Step Deploy

1. Install Vercel CLI: `npm i -g vercel`
2. Login: `vercel login`
3. Link project: `vercel link` (select existing project: `project-bcggmqpy3-instaboosterwesds-projects`)
4. Set env vars in Vercel dashboard (see above)
5. Deploy: `vercel --prod`

## Database Setup

Run the SQL schema in Supabase SQL Editor. The schema is available in the Admin Dashboard after logging in.
