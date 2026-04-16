# Buchwald Family Dentistry - Website Redesign Project

> Drop this file in your repo root. Claude Code reads `CLAUDE.md` automatically on startup and uses it as persistent context for every session in this project.

## Project Overview

**Site:** buchwaldfamilydentistry.com
**Stack:** Next.js + Tailwind + Vercel + pnpm
**Repo:** under `buchwaldmarketing-svg` GitHub org
**Role:** Lee is CMO / Marketing Director AND Insurance Coordinator (took over from Denielle)

This project is a strategic redesign of the Buchwald homepage and pricing/membership pages, modeled on the proven conversion mechanics of Thrive Dental & Orthodontics (a successful Richardson competitor) and Waverly Dental (a Plano competitor running effective Facebook voucher campaigns), but executed in Buchwald's own brand voice and visual language.

## Strategic Context

We researched Thrive Dental's public marketing and identified the five-layer system driving their growth:

1. **Demand capture** via geo-specific location pages, service pages, and blog content
2. **Offer engineering** via insurance acceptance, a low-entry discount plan, and financing
3. **Experience branding** via hospitality language (blankets, headphones, TVs, explanation-first care)
4. **Trust compounding** via review volume, named doctors, and founder stories
5. **Low-friction conversion** via prominent CTAs, short forms, and multiple contact methods

We also analyzed Waverly Dental Plano's Facebook ad campaign. Key takeaways:
- They use a **voucher model** (claim a voucher vs. book an appointment) which reframes cost as a claim
- **Scarcity framing** ("50 vouchers this week only") drives urgency
- **Geo-targeted opening** ("Hey Plano!") stops the scroll
- **Value anchoring** ($149 against "$800+ value") makes the price feel like a steal
- **Two-path addressing** (insured + uninsured in same ad) widens audience
- **Lead capture before booking** builds a retargetable list and enables personal follow-up
- Whitening is positioned as a "BONUS" rather than the core offer

The biggest gaps on the current Buchwald site were:
- No objection-first copy flow (pain > cost > trust > booking)
- No dedicated campaign landing pages for Google/Facebook Ads
- Thin hospitality/experience storytelling
- No area pages for Plano, Allen, Garland, Murphy
- Insurance page is a list, not a conversion page
- Reviews appear once, not contextually placed near cost or service content
- No Meta Pixel audience segmentation by page intent
- No tiered membership plan or hygiene upsell package

## Design Decisions

### Colorway
Keep the existing blue palette. Do NOT switch to warm cream/teal variants explored in earlier mockups.

Core tokens:
```
blue-50:  #EFF6FF
blue-100: #DBEAFE
blue-500: #3B82F6
blue-600: #2563EB  (primary)
blue-700: #1D4ED8
blue-900: #1E3A5F
```

Supporting:
```
gray-50 through gray-900 for neutrals
green-50 / green-600 / green-700 for savings/success states
gold #D97706 for star ratings only
```

### Typography
- **Headlines:** Playfair Display (700-900 weight) for editorial/trustworthy feel
- **Body:** DM Sans (400-700) for clean modern readability
- Load via Google Fonts

### Layout Principles
- Max content width 1080px, generous vertical padding (72px section default)
- Card-based UI with 14-16px border radius
- 1px borders in gray-200, never heavy strokes
- Section alternation: white / gray-50 for visual rhythm
- Sticky bottom CTA bar on mobile (always-visible booking action)

## Pricing Structure (CURRENT)

### New Patient Special: $149
- Cleaning, Exam & X-rays
- This is the lead offer in the top bar, hero, ads, and voucher campaigns
- Value anchor: "$800+ value" (exam $150 + X-rays $150 + cleaning $220 + jet whitening $99 + fluoride $65 + InnerView $30 + laser $125 = $839)

### Hygiene Add-On Services (available to ALL patients, insured or not)
These are upsold at every cleaning visit. This is the hygiene department's revenue driver.

| Service | Price |
|---|---|
| InnerView Imaging | $30 |
| Fluoride | $65 |
| Jet Whitening (stain remover) | $99 |
| Laser Therapy | $125 |
| **Total a la carte** | **$319/visit** |

### Three Membership/Package Products

**1. Essential Care Plan - $400/year ($34/mo through Cherry)**
- For non-insured patients
- 2 cleanings per year
- 2 exams per year
- Full set of X-rays
- 20% off all other treatments
- No waiting period
- No annual maximums
- No deductibles

**2. Signature Care Plan - $899/year ($75/mo through Cherry)**
- For non-insured patients
- Everything in Essential Care Plan
- PLUS at each cleaning visit (2x/year): InnerView, Fluoride, Laser Therapy, Jet Whitening
- 20% off all other treatments
- No waiting period
- No annual maximums
- No deductibles
- Retail value: $1,233/year. Patient saves $334.

**3. Hygiene Upgrade Package - $249/visit (for ANYONE, insured or not)**
- InnerView ($30) + Fluoride ($65) + Laser ($125) + Jet Whitening ($99)
- Bundled at $249 vs $319 a la carte (22% savings)
- Available through Cherry financing
- This is the primary upsell for insured patients whose cleanings are already covered
- Can be split via Cherry: 2 visits/year ($498) = $84/mo for 6 months at 0% APR

### Cherry Financing Display
Show Cherry as a payment option on ALL plans and packages:

| Product | Total | Cherry Monthly | Term |
|---|---|---|---|
| Essential Care Plan | $400/yr | $34/mo | 12 mo |
| Signature Care Plan | $899/yr | $75/mo | 12 mo |
| Hygiene Upgrade (1 visit) | $249 | $42/mo | 6 mo |
| Hygiene Upgrade (2 visits) | $498 | $84/mo | 6 mo |

### Year-one math for Essential Plan (displayed on site):
```
2 Cleanings                Included
2 Exams                    Included
Full X-rays                Included
20% off all treatments     Included
---------------------
Your total                 $400/year
Without the plan           $690+ (typical retail)
YOU SAVE                   $290+
```

### Year-one math for Signature Plan (displayed on site):
```
Everything in Essential    Included
+ InnerView x2            Included ($60 value)
+ Fluoride x2             Included ($130 value)
+ Laser Therapy x2        Included ($250 value)
+ Jet Whitening x2        Included ($198 value)
---------------------
Your total                 $899/year
Retail value               $1,233+
YOU SAVE                   $334+
```

## Cherry Financing Integration

Cherry offers a hosted, branded web widget rather than a custom calculator. Implementation:

1. Log into Cherry Partner Portal
2. Navigate to **Marketing > Web Resources**
3. Set brand color (use Buchwald blue `#2563EB`) and font
4. Copy the web script
5. Create a new Next.js page at `/payment-plans` or `/financing`
6. Embed the script in a custom HTML block on that page
7. Link all "Check My Payment Options" CTAs across the site to this page

Cherry will maintain the content of that page automatically. We do NOT build a custom calculator.

**Display on homepage:** a static example table showing representative payment amounts, plus the plan-specific monthly breakdowns above. Single "Check My Payment Options" button linking to `/payment-plans`.

## Homepage Structure (Objection-First Flow)

The new homepage walks visitors through their fears in a specific order. Each section addresses one objection.

```
1. Top bar          - $149 new patient special (offer anchor)
2. Nav              - simple, 5 items + primary CTA
3. Hero             - OBJECTION #1: "This will be uncomfortable/judgmental"
                      Headline: "Dental Care That Feels Different"
                      Reassurance subtext, reviews badge, 2 CTAs
4. Trust strip      - ADA, Invisalign, Lifetime Warranty, Same-Day, Cherry
5. Stats grid       - 433+ reviews / 4.9 rating / $149 special / Free warranty
6. Three paths      - OBJECTION #2: "This will be expensive"
                      Insurance / Essential or Signature Plan / Cherry Financing
                      Show both membership tiers
7. Plan comparison  - Side-by-side Essential ($400) vs Signature ($899)
                      with savings math and Cherry monthly payments
8. Hygiene Upgrade  - The $249 add-on package for everyone
                      Position as "Upgrade Your Cleaning Visit"
                      Show Cherry split option
9. Cherry section   - Payment examples + CTA to /payment-plans
10. Reviews         - OBJECTION #3: "Can I trust them?"
                      3 contextual reviews (Richardson / Plano / Allen)
11. Experience      - OBJECTION #4: "What will it actually be like?"
                      6 comfort amenities grid (headphones, TVs, etc.)
12. Services grid   - 8 service cards with icons
13. Team            - 4 members: Dr. Max, Melisa, Cathy, Lee
                      Lee is "Marketing & Insurance"
14. Invisalign      - Blue band, $115/mo starting, 0% APR callout
15. Final CTA       - Dark section, "Ready to Love Your Smile?"
16. Footer          - 4 columns: Brand / Pages / Services / Contact
17. Sticky mobile   - Persistent Schedule + Call buttons
    bottom bar
```

## Team Roster (Current)

1. **Dr. Max Buchwald Jr.** - Dentist
2. **Melisa Kounas** - Hygienist
3. **Cathy Kounas** - Operations
4. **Lee Kounas** - Marketing & Insurance Coordinator

Denielle Thiel is no longer on the team. Remove her from `/meet-us`, the homepage team section, and any other references across the site.

## Voucher Campaign Strategy (Facebook/Instagram Ads)

Modeled after Waverly Dental Plano's successful Facebook campaign. This is a recurring monthly campaign targeting Richardson, Plano, Allen, and surrounding areas.

### The Offer
"Claim Your $149 New Patient Voucher" (not "Book an appointment")
- Cleaning, Exam, X-rays + Bonus Jet Whitening
- Anchored against "$800+ value"
- Scarcity: "We're giving away 25 vouchers this month"

### Ad Copy Framework
```
[City name]! Are you due for a dental checkup?

For the next [timeframe], Buchwald Family Dentistry is giving away
[number] New Patient Vouchers.

Your $149 voucher includes:
- Comprehensive Exam & Consultation
- Digital X-Rays
- Professional Teeth Cleaning
- BONUS: Jet Whitening (stain removal)

Normally over $800 in value.

Have insurance? Your visit may be fully covered.
No insurance? No problem. Secure your spot for just $149.

Click to claim your voucher before they're gone.
```

Swap [City name] for Richardson / Plano / Allen per ad set. Keep the copy SHORT for Facebook. The long-form details go on the landing page.

### Ad Creative
- Use real Buchwald office interior photos
- Banner overlay: "Complimentary Jet Whitening with New Patient Visit!"
- Clean, modern aesthetic matching the site

### Landing Page at `/special` or `/new-patient-voucher`

**Structure (NO main site navigation, single CTA focus):**

1. **Header** - Logo only, phone number, no nav links
2. **Headline** - "Claim Your $149 New Patient Voucher"
3. **Subhead** - "Experience the Buchwald difference with complete transparency and zero hidden fees."
4. **Scarcity line** - "Only [X] vouchers remaining this month"
5. **Value anchor** - "This complete new patient package is typically valued at over $800"
6. **What's included** (checklist with descriptions):
   - Comprehensive Exam & One-on-One Consultation
   - Digital X-Rays
   - Professional Teeth Cleaning (valid in absence of periodontal disease)
   - BONUS: Jet Whitening
7. **Two-path callout:**
   - "Have insurance? Your visit may be fully covered."
   - "No insurance? No problem. Take advantage of our $149 New Patient Special."
8. **Lead capture form** - "Where should we send your voucher?"
   - First name
   - Last name
   - Email
   - Phone
   - Preferred day (dropdown: Mon/Tue/Wed/Thu)
   - Submit button: "Claim My Voucher"
9. **Trust elements below form:**
   - "4.9 stars on Google - 433+ reviews"
   - "300 N Coit Rd #245, Richardson, TX"
   - Dr. Buchwald photo + brief intro
10. **Footer** - Minimal, phone number, address, copyright

**Form behavior:**
- On submit: store lead in a database or email to the front desk
- Show confirmation: "Your voucher is on the way! We'll reach out within 24 hours to schedule your visit."
- Fire Meta Pixel `Lead` event on submission
- Fire Google Ads conversion event on submission

**Technical notes:**
- This page should be a standalone layout with NO site header/footer nav
- Create a separate layout file (e.g., `app/(campaign)/layout.tsx`) to strip nav
- The page must load fast, no heavy animations, no lazy-loaded sections
- Mobile-first design, most traffic will come from Facebook/Instagram on phones

### Retargeting Audiences (from voucher page)
- Visited voucher page but didn't submit = "Warm leads" retarget audience
- Submitted form = exclude from acquisition ads, add to nurture/upsell audience
- Visited pricing/insurance page from voucher page = "Cost-sensitive" audience

## Insurance Page Updates

Rewrite the insurance page to be conversion-focused, not a carrier list. Structure:

1. **Hero:** "We Handle the Insurance Headache"
2. **Meet Lee section:** brief intro to Lee as the insurance coordinator, what Lee does for patients (verify benefits, file claims, break down out-of-pocket costs, maximize benefits)
3. **How it works:** 3-step explainer (call us with card / we verify / you show up)
4. **Accepted plans:** searchable/filterable list of PPO carriers
5. **Hygiene Upgrade upsell:** "Have insurance? Add the Hygiene Upgrade Package to every visit for $249" with Cherry payment option
6. **No insurance CTA:** link to Essential or Signature membership plans
7. **Contextual reviews:** reviews that mention billing clarity or helpful staff
8. **Primary CTA:** "Call to Verify" phone button

## Experience Section Copy

The six comfort amenities on the homepage:
- Noise-canceling headphones
- TVs at every chair
- Blankets and pillows
- Complimentary beverages
- On-time, no-wait visits
- We explain before we start

Heading: "A Visit You Won't Dread"
Body: "We designed every detail of this practice to make you feel at home. From the calm, modern office to a team that greets you by name, this isn't the dentist you grew up dreading."

## What to Build Next (Priority Order)

1. **Homepage updates** - Add Signature Care Plan alongside Essential, add Hygiene Upgrade Package section, add experience/amenities section, expand to 3 contextual reviews, confirm all pricing references show $149

2. **Membership/pricing page** - Dedicated page with side-by-side Essential ($400) vs Signature ($899) comparison, Hygiene Upgrade Package ($249) for insured patients, full savings tables for both plans, Cherry financing on all products, FAQ accordion

3. **Voucher landing page at `/special`** - Standalone campaign page, stripped nav, voucher lead capture form, scarcity/urgency elements, value anchoring, mobile-first. This is the destination for all Facebook/Instagram/Google ad traffic.

4. **Cherry financing page at `/payment-plans`** - Embed the Cherry web script in a custom HTML block. Header and footer wrap the embedded widget.

5. **Insurance page rewrite** - Conversion-focused copy with Lee as named coordinator, 3-step process, PPO carrier list, Hygiene Upgrade upsell for insured patients.

6. **Area pages** - `/plano`, `/allen`, `/garland`, `/murphy`. Each unique, geo-specific, with local reviews and a map. Use LocalBusiness schema with the correct areaServed.

7. **Meta Pixel audience segmentation** - Fire custom events on insurance page visits, financing page visits, voucher page visits, form abandoners. Build retargeting audiences per page type.

8. **Contextual review placement** - Add testimonials throughout service pages, insurance page, membership page. Match the review to the objection that page addresses.

## Writing Style Guidelines

- **No em dashes.** Use commas, periods, or parentheses instead. This is a hard rule.
- **Short, punchy copy.** No corporate fluff.
- **Objection-first.** Every section should address a specific visitor concern.
- **Specific over generic.** Name Lee, name Dr. Buchwald, name the amenities. Don't say "comfortable" when you can say "blankets and pillows."
- **"We" and "you"** language throughout, never third person.

## Schema & Tracking

Already implemented (do not duplicate):
- LocalBusiness schema markup
- Reviews carousel
- New patient popup
- Booking confirmation flow
- Urgency badges
- FAQ data/accordion

Add next:
- Google Tag Manager container (if not already via gtag)
- Meta Pixel with per-page custom events (`ViewContent` on insurance/financing/service pages, `Lead` on form submit and voucher claim, `Contact` on phone click)
- Custom tracking events: `phone_click`, `form_submit`, `schedule_click`, `pricing_page_visit`, `financing_page_visit`, `voucher_claim`, `voucher_page_view`

## Related External Context

- **Thrive Dental:** thrivedentist.com/locations/richardson (competitor benchmarked for site architecture and conversion mechanics)
- **Waverly Dental:** getwaverlydental.net (competitor benchmarked for Facebook voucher campaign and landing page strategy)
- **Cherry:** withcherry.com (financing partner, portal at provider.withcherry.com)
- **Weave booking:** already integrated via `book2.getweave.com/359c4bec-...`
- **Competing platforms evaluated:** NexHealth vs Weave (kept Weave), Dentrix Ascend Essentials (still being evaluated for practice management migration)

## Notes for Claude Code

- This project uses pnpm, not npm or yarn
- Deploy target is Vercel
- Fonts are loaded via next/font (Plus Jakarta Sans + Archivo Black)
- Keep all new pages as server components unless interactivity demands client components
- When generating new sections, match the existing component patterns already in use in the repo (check `/components` first)
- Do NOT use em dashes anywhere in user-facing copy
- The voucher landing page needs its own layout file with no site navigation
- All plan prices should show the Cherry monthly payment equivalent next to them
- The Hygiene Upgrade Package ($249) should appear on: homepage, pricing page, insurance page, and service pages where relevant
