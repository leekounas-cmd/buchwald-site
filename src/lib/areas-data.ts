export type AreaData = {
  slug: string;
  name: string;
  state: string;
  description: string;
  distance: string;
  neighborhoods: string[];
  population: string;
  highlights: string[];
  faqs: { q: string; a: string }[];
};

export const areasData: AreaData[] = [
  {
    slug: "richardson",
    name: "Richardson",
    state: "TX",
    description:
      "Richardson is home base for Buchwald Family Dentistry. Located right on N Coit Road, we've been serving Richardson families with modern, comfortable dental care since day one. If you live here, you're minutes from a better dental experience.",
    distance: "0 minutes",
    neighborhoods: ["Canyon Creek", "Prairie Creek", "Arapaho Heights", "Berkner Area"],
    population: "~120,000",
    highlights: [
      "Our home base since day one — the office is right here in Richardson on N Coit Road",
      "Same-day and early morning appointments available for Richardson residents",
      "Active in the Richardson community with local partnerships and events",
    ],
    faqs: [
      {
        q: "Where exactly is Buchwald Family Dentistry in Richardson?",
        a: "We're located at 300 N Coit Rd #245, Richardson, TX 75080 — right off Highway 75, easy to get to from anywhere in Richardson.",
      },
      {
        q: "Do you accept new patients in Richardson?",
        a: "Absolutely. We welcome new patients of all ages. Our new patient special starts at $149 for a cleaning and exam.",
      },
      {
        q: "What hours is your Richardson dental office open?",
        a: "We're open Monday through Thursday from 7am to 3pm. Early morning appointments are perfect for getting in before work or school.",
      },
    ],
  },
  {
    slug: "plano",
    name: "Plano",
    state: "TX",
    description:
      "Plano is our most popular neighboring city for patients. Just a quick 12-minute drive from Legacy West, Willow Bend, or anywhere in Plano — Buchwald Family Dentistry offers the modern, personal dental experience that Plano families deserve.",
    distance: "12 minutes",
    neighborhoods: ["Legacy West", "Willow Bend", "Parker Road", "West Plano"],
    population: "~290,000",
    highlights: [
      "Our most popular neighboring city — hundreds of Plano families trust Buchwald",
      "Quick 12-minute drive with easy access via Highway 75 or the Dallas North Tollway",
      "Many Plano patients say the short drive is worth it for the care they receive",
    ],
    faqs: [
      {
        q: "How far is Buchwald Family Dentistry from Plano?",
        a: "Just about 12 minutes by car. We're right off Highway 75 in Richardson, making it an easy drive from Legacy West, Willow Bend, or anywhere in Plano.",
      },
      {
        q: "Why do so many Plano residents choose Buchwald?",
        a: "Patients love our modern technology, comfortable environment, and the personal attention from Dr. Buchwald. Many say it's worth the short drive from Plano for a dental experience that actually feels good.",
      },
      {
        q: "Do you offer Invisalign for Plano patients?",
        a: "Yes — Invisalign is one of our most popular services. Plano patients can start from $115/month with financing. Schedule a free consultation to see if you're a candidate.",
      },
    ],
  },
  {
    slug: "allen",
    name: "Allen",
    state: "TX",
    description:
      "Allen is one of the fastest-growing cities in North Texas, and more Allen families are making the 20-minute drive to Buchwald Family Dentistry. Modern care, a comfortable office, and a team that treats you like family — not just a number.",
    distance: "20 minutes",
    neighborhoods: ["Twin Creeks", "The Village at Allen", "Stacy Ridge", "Waterford Parks"],
    population: "~110,000",
    highlights: [
      "Growing community, growing smiles — Allen families are choosing Buchwald in record numbers",
      "Straight shot down Highway 75 — 20 minutes door to door",
      "Family-friendly scheduling with early morning availability for the Allen commute",
    ],
    faqs: [
      {
        q: "Is it worth driving from Allen to Buchwald Family Dentistry?",
        a: "Our Allen patients consistently say yes. The 20-minute drive down 75 is easy, and the quality of care, technology, and personal attention make it well worth it.",
      },
      {
        q: "What services are most popular with Allen patients?",
        a: "Allen families love our cleanings, Invisalign, and cosmetic services like teeth whitening. We offer everything under one roof — no referrals needed.",
      },
      {
        q: "Do you see kids from Allen?",
        a: "We see patients of all ages, including kids. Dr. Buchwald is great with children and makes dental visits comfortable and even fun for younger patients.",
      },
    ],
  },
  {
    slug: "garland",
    name: "Garland",
    state: "TX",
    description:
      "Garland residents have easy access to Buchwald Family Dentistry thanks to the 75 and 635 interchange. In just 15 minutes, you can trade a routine dental visit for a modern, comfortable experience with a team that genuinely cares.",
    distance: "15 minutes",
    neighborhoods: ["Duck Creek", "Firewheel", "Eastern Hills", "Oakridge"],
    population: "~240,000",
    highlights: [
      "Easy access off 75 and 635 — most Garland patients are here in 15 minutes",
      "Serving Garland families who want modern dental care without the corporate feel",
      "Convenient early morning hours so you can get back to your day quickly",
    ],
    faqs: [
      {
        q: "How do I get to Buchwald Family Dentistry from Garland?",
        a: "Take 635 West to Highway 75 North and exit at Arapaho or Belt Line. We're at 300 N Coit Rd #245 — about 15 minutes from most parts of Garland.",
      },
      {
        q: "Do you accept dental insurance for Garland patients?",
        a: "We accept most major dental insurance plans and also offer in-house financing. Call us at (972) 644-3280 and we'll verify your coverage before your first visit.",
      },
      {
        q: "What makes Buchwald different from dental offices in Garland?",
        a: "We combine advanced technology like intraoral cameras and laser therapy with a warm, personal approach. No assembly-line dentistry — just modern care in a comfortable environment.",
      },
    ],
  },
  {
    slug: "coppell",
    name: "Coppell",
    state: "TX",
    description:
      "Coppell families know the value of quality — and that's exactly what they find at Buchwald Family Dentistry. A 25-minute drive for a dental experience that's personal, modern, and built around your comfort.",
    distance: "25 minutes",
    neighborhoods: ["Coppell Town Center", "Northlake Woodlands", "Riverchase", "Denton Tap Area"],
    population: "~42,000",
    highlights: [
      "Top-rated schools, top-rated smiles — Coppell families choose quality in everything",
      "Worth the drive for families who want more than a cookie-cutter dental experience",
      "Comprehensive family care including Invisalign, whitening, and cosmetic dentistry",
    ],
    faqs: [
      {
        q: "Why would I drive from Coppell to Richardson for a dentist?",
        a: "Coppell patients tell us it's the personal care, modern technology, and Dr. Buchwald's approach that make the 25-minute drive a no-brainer. Once you experience it, you won't go back.",
      },
      {
        q: "What cosmetic services do Coppell patients love?",
        a: "Teeth whitening and Invisalign are the most popular cosmetic services among our Coppell patients. We also offer veneers, bonding, and full smile makeovers.",
      },
      {
        q: "Can my whole family be seen at Buchwald?",
        a: "Yes — we see patients of all ages from kids to grandparents. One office for your entire family means simpler scheduling and consistent care.",
      },
    ],
  },
  {
    slug: "carrollton",
    name: "Carrollton",
    state: "TX",
    description:
      "Carrollton residents are just a short drive away from a completely different dental experience. Buchwald Family Dentistry brings modern technology, genuine personal care, and a team that remembers your name every time you walk in.",
    distance: "20 minutes",
    neighborhoods: ["Old Downtown Carrollton", "Castle Hills", "Indian Creek", "Hebron Area"],
    population: "~140,000",
    highlights: [
      "A short drive for a big upgrade in dental care — Carrollton patients love the difference",
      "Easy to reach via the Tollway or Bush Turnpike from anywhere in Carrollton",
      "Modern office with advanced imaging, laser therapy, and a genuinely comfortable environment",
    ],
    faqs: [
      {
        q: "How long does it take to get to Buchwald from Carrollton?",
        a: "About 20 minutes. You can take the Dallas North Tollway or the George Bush Turnpike to get here quickly from Old Downtown Carrollton, Castle Hills, or the Hebron area.",
      },
      {
        q: "Do you offer emergency dental care for Carrollton patients?",
        a: "Yes — if you're having a dental emergency, call us at (972) 644-3280. We do our best to see emergency patients the same day, including patients coming from Carrollton.",
      },
      {
        q: "What technology does Buchwald use that I won't find at most offices?",
        a: "We use InnerView intraoral cameras so you can see exactly what we see, plus advanced laser therapy for gentler treatments and digital imaging for faster, more accurate diagnoses.",
      },
    ],
  },
];
