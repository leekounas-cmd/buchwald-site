This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## July 2026 Ads Campaign Pages (/visit and /free-whitening)

Ad-traffic-only landing pages for the July 22-31 Google Search + Meta push. Both are `noindex, nofollow`, excluded from sitemap.xml, and render with no site nav or footer (via `BARE_ROUTES` in `src/components/SiteChrome.tsx`). Only exits: lead form, phone, Weave.

All offer copy and the $169 price live in one place: `src/lib/offer.ts`. Change it there, both pages update.

### Lead capture (Supabase)

The form posts to `/api/leads` (`src/app/api/leads/route.ts`), which inserts into the Supabase `leads` table over the REST API. No supabase-js package needed.

**Env vars required (Vercel + `.env.local`):**

```
SUPABASE_URL=https://<project-ref>.supabase.co
SUPABASE_SERVICE_ROLE_KEY=<service role key>   # server-only, never NEXT_PUBLIC
```

**Table setup (run in Supabase SQL editor):**

```sql
create table if not exists leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null,
  email text not null,
  has_insurance text not null,
  source text not null default 'google',
  page text not null,
  created_at timestamptz not null default now()
);
alter table leads enable row level security;
-- No public policies. The API route uses the service role key, which bypasses RLS.
```

The hidden `source` field is read from `utm_source` in the ad URL (defaults to `google`), so tag Meta ads with `utm_source=facebook` / `utm_source=instagram`.

### GA4 events

| Event | Params | Fires when |
|---|---|---|
| `form_submit` | `{ page }` | Lead form submits successfully (hero form, closing form, both pages) |
| `tel_click` | `{ page }` | Any phone link is tapped: hero, hours section, closing CTA, sticky mobile bar, success state |
| `booking_click` | `{ page }` | Any Weave "Book online" link is clicked: hero, closing CTA, success state |

`page` is `/visit` or `/free-whitening`. Events fire through the existing GA4 base tag (`src/components/Analytics.tsx`, `NEXT_PUBLIC_GA_ID`). Nothing is double-tagged. Weave links on these pages use `?source=ADS` so campaign bookings are separable from `?source=WEBSITE` in Weave.

### How to test each event manually

1. Run `pnpm dev`, open `http://localhost:3000/visit` (needs `NEXT_PUBLIC_GA_ID` set locally, or watch `dataLayer` instead of GA).
2. Open DevTools console and run: `window.dataLayer.filter(e => e[0] === 'event')` after each action, or just watch GA4 Realtime (Admin > DebugView with the GA debugger extension).
3. `form_submit`: fill out the form with test data, submit, confirm the success card replaces the form, then check the event and the new row in Supabase (Table Editor > leads).
4. `tel_click`: click any phone link (desktop just fires the event; nothing needs to answer).
5. `booking_click`: click "Prefer to pick a time? Book online" and confirm the Weave tab URL ends with `?source=ADS`.
6. Repeat on `/free-whitening`, confirming `page` is `/free-whitening` in each event payload.
