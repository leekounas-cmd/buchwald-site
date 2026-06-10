# DESIGN.md — Buchwald Family Dentistry (current shipped system)

## Typography
- Body: Plus Jakarta Sans via next/font, CSS var --font-plus-jakarta (applied on body)
- Display accent: Archivo Black via next/font, CSS var --font-archivo-black (loaded site-wide, underused on the current homepage)
- Current homepage scale is conservative; headings around text-4xl/5xl

## Color tokens (Tailwind defaults in use)
- blue-50 #EFF6FF, blue-100 #DBEAFE, blue-500 #3B82F6, blue-600 #2563EB (primary CTA), blue-700 #1D4ED8, blue-900 #1E3A5F (deep navy, brand-specified)
- Neutrals: gray-50..900
- green-50/600/700 for savings and success states
- gold #D97706 (amber-600) for star ratings only

## Current layout system
- Max content width ~1080px, ~72px vertical section padding
- Card-based UI, 14-16px radius, 1px gray-200 borders
- Section alternation white / gray-50
- Sticky mobile bottom bar (Schedule + Call) via StickyBottomBar
- Top utility bar + Navbar + Footer composed in SiteChrome (SiteChromeTop / SiteChromeBottom)

## Components in /src/components
Analytics, BusinessSchema (JSON-LD with real reviews), Navbar, Footer, SiteChrome, StickyBottomBar, QuickBookModal (QuickBookCTA), CTABanner, UrgencyBadge, ReviewsCarousel (avoid: owner hates carousels), Testimonials, TextUsCTA, GoogleMapEmbed, FAQSchema, BreadcrumbSchema

## Motion
- motion/react (framer-motion v12) available; current homepage uses simple fade/slide reveals
- Prefer CSS transitions and IntersectionObserver-style reveals; ease-out curves, no bounce

## Preview-route convention
- Design mocks live at /preview-vN as standalone routes (preview-v3 and preview-v4 exist from the cream/teal exploration era, both rejected). Mocks should be self-contained (own header/footer) and noindexed.
