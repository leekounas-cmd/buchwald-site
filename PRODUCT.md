# PRODUCT.md — Buchwald Family Dentistry

## What this is
Marketing site for a real dental practice in Richardson, TX (300 N Coit Rd #245). The site's one job: turn local searches and ad clicks into booked new-patient appointments. Conversion mechanics modeled on Thrive Dental (Richardson) and Waverly Dental (Plano), executed in Buchwald's own voice.

register: brand

## Users
- Richardson / Plano / Allen / Garland families, 25-55, searching "dentist near me" on their phones, often at night.
- The anxious returner: hasn't been to a dentist in years, afraid of judgment and surprise bills.
- The cost-checker: insured (wants to know what's covered) or uninsured (needs a plan that isn't insurance).
- Mobile-first traffic from Google and Facebook/Instagram ads.

## Brand voice
Warm, direct, hospitality-first. "We" and "you," never third person. Specific over generic: name Lee, name Dr. Buchwald, name the blankets and headphones. Objection-first flow: discomfort, cost, trust, then booking. Short punchy sentences. NO em dashes anywhere in user-facing copy (hard client rule).

Three brand-voice words: looked-after, plainspoken, unhurried.

## Trust assets (real, use them)
- 4.9 stars, 433+ Google reviews
- Free lifetime warranty on all dental work
- Most PPO insurance covers new-patient cleaning, exam, and X-rays at 100% (current lead offer; the $149 special and free-whitening offers were REMOVED site-wide, do not resurrect them)
- Named team: Dr. Max Buchwald Jr. (dentist), Lee Kounas (marketing + insurance coordinator). Melisa and Cathy left Aug 2026; no set hygienist right now, so never name a hygienist in copy
- Membership plans: Essential $400/yr, Signature $899/yr, Hygiene Upgrade $249/visit; Cherry financing on everything
- Invisalign from $115/mo, 0% APR
- Comfort amenities: noise-canceling headphones, TVs at every chair, blankets and pillows, complimentary beverages, on-time visits, explain-before-we-start
- Real photography in /public/images: office-1.jpg, dr-buchwald.jpg, lee.jpg (melisa.jpg, cathy.jpg, and team-group.jpg show former staff, do not use)

## Conversion plumbing
- Booking: Weave (book2.getweave.com/359c4bec-.../request-appointment)
- Phone: (972) 644-3280 (tel + sms)
- Sticky mobile bottom bar with Schedule + Call is non-negotiable
- GA4 G-68PGS591ZE + Meta pixel already wired via <Analytics />

## Locked constraints (client decisions, do not revisit)
- KEEP the blue palette. Primary blue-600 #2563EB, deep blue-900 #1E3A5F, gold #D97706 for star ratings only, green for savings math. Do NOT switch to warm cream/teal (explored in preview-v3/v4 era and rejected).
- pnpm, Next.js App Router, Tailwind, server components unless interactivity demands otherwise.

## Anti-references
- The cookie-cutter dental template: white + teal, stock photo of a laughing family, icon card grid of 8 services, testimonial carousel. The owner of this project also personally hates carousels and uniform icon-card grids.
- Corporate dental-group tone ("Exceptional dentistry, exceptional you").
