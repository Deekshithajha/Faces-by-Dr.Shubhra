# AUREA Website (Next.js + Supabase)

Premium editorial-style website for AUREA aesthetics clinic.

## Environment Variables

Create `.env.local` with:

```bash
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
```

## Supabase Setup

Run `supabase_restore_aurea.sql` in Supabase SQL Editor to create:

- `consultations`
- `treatments`
- `testimonials`
- `before_after_cases`
- `site_settings`

The script also creates indexes, triggers, row-level security policies, and seed content.

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build + Lint

```bash
npm run lint
npm run build
```
