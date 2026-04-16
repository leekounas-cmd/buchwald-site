"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { CTABanner } from "@/components/CTABanner";
import { FAQSchema } from "@/components/FAQSchema";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { blogPosts } from "@/lib/blog-data";

/* ─── Reusable blog components ─── */

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-primary/5 rounded-xl p-5 text-center">
      <p className="text-3xl sm:text-4xl font-extrabold text-primary">{value}</p>
      <p className="text-gray-500 text-xs font-medium mt-1">{label}</p>
    </div>
  );
}

function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gray-50 border-l-4 border-primary rounded-r-xl p-4 my-5">
      <p className="text-gray-700 text-sm font-semibold leading-relaxed">{children}</p>
    </div>
  );
}

function Checklist({ items }: { items: string[] }) {
  return (
    <div className="space-y-2 my-4">
      {items.map((item) => (
        <div key={item} className="flex items-start gap-2.5">
          <span className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
            <svg className="h-3 w-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          <p className="text-gray-600 text-sm">{item}</p>
        </div>
      ))}
    </div>
  );
}

function Versus({ left, right, leftLabel, rightLabel }: { left: string[]; right: string[]; leftLabel: string; rightLabel: string }) {
  return (
    <div className="grid grid-cols-2 gap-3 my-5">
      <div className="bg-primary/5 rounded-xl p-4">
        <p className="text-primary text-xs font-bold uppercase tracking-wider mb-3">{leftLabel}</p>
        <ul className="space-y-2">
          {left.map((item) => (
            <li key={item} className="text-gray-600 text-sm flex items-start gap-2">
              <span className="text-primary mt-0.5">+</span>{item}
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-gray-50 rounded-xl p-4">
        <p className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-3">{rightLabel}</p>
        <ul className="space-y-2">
          {right.map((item) => (
            <li key={item} className="text-gray-500 text-sm flex items-start gap-2">
              <span className="text-gray-300 mt-0.5">&ndash;</span>{item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ─── Blog post content ─── */

function WhyYouNeedNightGuard() {
  return (
    <>
      <div className="grid grid-cols-3 gap-3 mb-6">
        <Stat value="250+" label="lbs of force while grinding" />
        <Stat value="70%" label="of adults grind at some point" />
        <Stat value="5-10yr" label="custom guard lifespan" />
      </div>

      <h2>Signs You Might Be Grinding</h2>
      <Checklist items={[
        "Waking up with jaw soreness or headaches",
        "Teeth that look flat, chipped, or worn",
        "New tooth sensitivity with no obvious cause",
        "Your partner hears you grinding at night",
        "Jaw tension or tightness throughout the day",
      ]} />

      <h2>What Grinding Does to Your Teeth</h2>
      <Checklist items={[
        "Cracks and fractures — leading to crowns or extractions",
        "Worn enamel — once gone, it doesn't come back",
        "TMJ problems — jaw pain, clicking, limited mobility",
        "Chronic headaches and neck pain",
        "Damaged dental work — fillings and crowns can crack",
      ]} />

      <Highlight>A night guard costs a fraction of a single crown. It&apos;s prevention that pays for itself.</Highlight>

      <h2>Custom vs. Store-Bought</h2>
      <Versus
        leftLabel="Custom (Dentist)"
        left={["Exact fit from your impressions", "Comfortable enough to wear nightly", "Lasts 5-10 years", "Protects your bite alignment"]}
        rightLabel="Store-Bought"
        right={["Bulky, one-size-fits-all", "Most people quit in weeks", "Wears out in months", "Can actually shift your bite"]}
      />

      <h2>How It Works</h2>
      <p><strong>Visit 1:</strong> Digital impressions (no gooey molds) — sent to the lab.</p>
      <p><strong>Visit 2:</strong> Pick up your guard, we check the fit. Done.</p>
      <p>
        Think you might be grinding?{" "}
        <a href="https://book2.getweave.com/359c4bec-a0f0-4d62-9ea8-35a008305267/request-appointment?source=WEBSITE" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold underline">Book an appointment</a> — Dr. Buchwald can spot the signs during a routine exam.
      </p>
    </>
  );
}

function FirstDentalVisit() {
  return (
    <>
      <div className="grid grid-cols-3 gap-3 mb-6">
        <Stat value="60-90" label="minutes, first visit" />
        <Stat value="$99" label="new patient special" />
        <Stat value="4.9" label="stars on Google" />
      </div>

      <h2>What to Bring</h2>
      <Checklist items={[
        "Photo ID",
        "Insurance card (if you have one — totally fine without)",
        "List of current medications",
        "Dental records from previous dentist (optional)",
      ]} />

      <h2>What Happens</h2>
      <Checklist items={[
        "Comprehensive exam — teeth, gums, jaw, and bite",
        "Digital X-rays (way more comfortable than old-school)",
        "Professional cleaning by our hygienist",
        "Dr. Buchwald walks you through findings — no pressure, no upselling",
      ]} />

      <Highlight>Haven&apos;t been to a dentist in years? No judgment. We&apos;re just glad you&apos;re here.</Highlight>

      <h2>Nervous? We Get It.</h2>
      <Checklist items={[
        "Tell us upfront — we'll adjust our approach",
        "Bring headphones for music or a podcast",
        "We explain everything before we do it",
        "Our team is genuinely great at putting people at ease",
      ]} />

      <p>
        <a href="https://book2.getweave.com/359c4bec-a0f0-4d62-9ea8-35a008305267/request-appointment?source=WEBSITE" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold underline">Request your first appointment</a> — we&apos;ll take it from there.
      </p>
    </>
  );
}

function InvisalignVsBraces() {
  return (
    <>
      <div className="grid grid-cols-3 gap-3 mb-6">
        <Stat value="6-18" label="months, Invisalign" />
        <Stat value="$115" label="/mo with financing" />
        <Stat value="22hr" label="daily wear time" />
      </div>

      <h2>Quick Comparison</h2>
      <Versus
        leftLabel="Invisalign"
        left={[
          "Nearly invisible",
          "Removable — eat anything",
          "Smooth plastic, no wires",
          "6-18 months for most cases",
          "Quick check-ins every 6-8 weeks",
        ]}
        rightLabel="Traditional Braces"
        right={[
          "Visible metal brackets",
          "Food restrictions apply",
          "Can irritate cheeks/gums",
          "12-24 months typically",
          "Monthly adjustments needed",
        ]}
      />

      <Highlight>Cost is comparable — both range $3,500-$6,000. Insurance often covers a portion of either.</Highlight>

      <h2>Which One?</h2>
      <Checklist items={[
        "Want discreet? Invisalign",
        "Complex case? Braces might be more effective",
        "Worried about compliance? Braces work 24/7",
        "Want to eat whatever? Invisalign",
      ]} />

      <p>
        <Link href="/invisalign" className="text-primary font-semibold underline">Learn about Invisalign at our office</Link> or{" "}
        <a href="https://book2.getweave.com/359c4bec-a0f0-4d62-9ea8-35a008305267/request-appointment?source=WEBSITE" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold underline">book a free consultation</a>.
      </p>
    </>
  );
}

function DentalImplantsCost() {
  return (
    <>
      <div className="grid grid-cols-3 gap-3 mb-6">
        <Stat value="$3-5K" label="per implant in Texas" />
        <Stat value="25+" label="years average lifespan" />
        <Stat value="98%" label="success rate" />
      </div>

      <h2>What&apos;s Included</h2>
      <Checklist items={[
        "Implant post (titanium screw into jawbone)",
        "Abutment (connector piece)",
        "Crown (the visible tooth — looks completely natural)",
      ]} />

      <h2>What Affects Price</h2>
      <Checklist items={[
        "Bone grafting — adds $500-$2K if bone loss is present",
        "Number of implants — multiples may get bundled pricing",
        "Location — front teeth vs. molars differ in complexity",
        "Crown material — porcelain costs more but looks the most natural",
      ]} />

      <Highlight>Implants last 25+ years. A bridge lasts 5-15, dentures 5-10. Long-term, implants win on cost.</Highlight>

      <h2>Paying for It</h2>
      <Checklist items={[
        "Many insurance plans cover 25-50% of implant treatment",
        "Flexible monthly financing through Cherry (0% APR available)",
        "Our coordinator Lee checks your benefits before you commit",
      ]} />

      <p>
        <Link href="/dental-implants" className="text-primary font-semibold underline">Learn about our implant process</Link> or{" "}
        <a href="https://book2.getweave.com/359c4bec-a0f0-4d62-9ea8-35a008305267/request-appointment?source=WEBSITE" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold underline">request a consultation</a>.
      </p>
    </>
  );
}

function SignsYouNeedDentist() {
  return (
    <>
      <div className="grid grid-cols-3 gap-3 mb-6">
        <Stat value="42%" label="of adults skip the dentist" />
        <Stat value="90%" label="of dental issues are preventable" />
        <Stat value="2x" label="yearly visits recommended" />
      </div>

      <h2>5 Red Flags</h2>
      <div className="space-y-4 my-4">
        {[
          { num: "01", title: "Toothache that won't go away", desc: "Could be a deep cavity, infection, or crack. Pain meds mask it — the problem isn't going anywhere." },
          { num: "02", title: "Swollen or bleeding gums", desc: "Not normal — even if it happens often. Early gum disease is treatable. Left alone, it leads to tooth loss." },
          { num: "03", title: "Sensitivity to hot or cold", desc: "Worn enamel, exposed roots, cavities, or cracks. Worth checking before it gets worse." },
          { num: "04", title: "Chipped, cracked, or broken tooth", desc: "Even if it doesn't hurt. Cracks deepen, bacteria gets in, simple fixes become big ones." },
          { num: "05", title: "Persistent bad breath", desc: "Despite brushing and flossing? Could signal gum disease, infection, or decay." },
        ].map((item) => (
          <div key={item.num} className="flex gap-4 items-start">
            <span className="text-primary text-2xl font-extrabold flex-shrink-0">{item.num}</span>
            <div>
              <p className="font-bold text-gray-900 text-sm">{item.title}</p>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <Highlight>Dental problems never fix themselves. The longer you wait, the more it costs.</Highlight>

      <p>
        Any of these sound familiar?{" "}
        <a href="https://book2.getweave.com/359c4bec-a0f0-4d62-9ea8-35a008305267/request-appointment?source=WEBSITE" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold underline">Request an appointment</a> — we&apos;ll get you taken care of.
      </p>
    </>
  );
}

function TeethWhiteningSafe() {
  return (
    <>
      <div className="grid grid-cols-3 gap-3 mb-6">
        <Stat value="1-3yr" label="results last" />
        <Stat value="2-8" label="shades brighter" />
        <Stat value="1hr" label="in-office treatment" />
      </div>

      <h2>Professional vs. Store-Bought</h2>
      <Versus
        leftLabel="Professional"
        left={[
          "Controlled whitening concentration",
          "Gums protected throughout",
          "Customized to your sensitivity",
          "Dramatic, consistent results",
        ]}
        rightLabel="Over-the-Counter"
        right={[
          "One-size-fits-all",
          "Can irritate gums",
          "Less predictable results",
          "Takes longer to see change",
        ]}
      />

      <h2>Good to Know</h2>
      <Checklist items={[
        "Some sensitivity after is normal — goes away in 1-2 days",
        "We do an exam first to make sure teeth and gums are healthy",
        "Results last 1-3 years depending on diet and habits",
        "Coffee, tea, red wine, and tobacco stain fastest",
        "Touch-ups available to extend results",
      ]} />

      <h2>Not Recommended If</h2>
      <Checklist items={[
        "Pregnant or breastfeeding",
        "Untreated cavities or gum disease",
        "Under 16 years old",
        "Severe untreated sensitivity",
      ]} />

      <p>
        Curious?{" "}
        <Link href="/teeth-whitening" className="text-primary font-semibold underline">See our whitening services</Link> or{" "}
        <a href="https://book2.getweave.com/359c4bec-a0f0-4d62-9ea8-35a008305267/request-appointment?source=WEBSITE" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold underline">book a consultation</a>.
      </p>
    </>
  );
}

function ChooseDentistRichardson() {
  return (
    <>
      <div className="grid grid-cols-3 gap-3 mb-6">
        <Stat value="4.9" label="stars on Google" />
        <Stat value="20+" label="years in Richardson" />
        <Stat value="$99" label="new patient special" />
      </div>

      <h2>What to Look For</h2>
      <Checklist items={[
        "Strong reviews — check Google, Yelp, and Nextdoor",
        "Modern technology — digital X-rays, intraoral cameras, same-day options",
        "Transparent pricing — no surprise bills after treatment",
        "A team that actually listens and doesn&apos;t pressure you",
        "Convenient location and hours that work with your schedule",
      ]} />

      <h2>Red Flags to Avoid</h2>
      <Versus
        leftLabel="Green Flags"
        left={[
          "Takes time to explain your options",
          "Shows you X-rays and walks through findings",
          "Friendly, organized front desk",
          "Clean, modern office",
        ]}
        rightLabel="Red Flags"
        right={[
          "Pushes expensive treatment right away",
          "Rushes through your appointment",
          "Hard to reach or schedule with",
          "Outdated equipment and decor",
        ]}
      />

      <Highlight>A good dentist earns your trust on the first visit — not by selling you on treatment you don&apos;t need.</Highlight>

      <h2>Why Patients Choose Buchwald</h2>
      <Checklist items={[
        "Family-owned practice serving Richardson, Plano, Allen, and Garland",
        "Advanced tech — InnerView scanner, digital X-rays, laser therapy",
        "No-pressure approach — Dr. Buchwald explains everything before you decide",
        "Insurance-friendly with flexible financing through Cherry",
      ]} />

      <p>
        <Link href="/meet-us" className="text-primary font-semibold underline">Meet our team</Link> or{" "}
        <Link href="/new-patient" className="text-primary font-semibold underline">start as a new patient</Link>.
      </p>
    </>
  );
}

function InsuranceCoverInvisalign() {
  return (
    <>
      <div className="grid grid-cols-3 gap-3 mb-6">
        <Stat value="$1-2K" label="typical insurance coverage" />
        <Stat value="$115" label="/mo with financing" />
        <Stat value="6-18" label="months of treatment" />
      </div>

      <h2>What Most Plans Cover</h2>
      <Checklist items={[
        "Many PPO plans include orthodontic benefits — including Invisalign",
        "Typical coverage ranges from $1,000 to $2,000 toward treatment",
        "Some plans have age limits (often 18 or 19) — but many don&apos;t",
        "HMO plans rarely cover Invisalign unless the provider is in-network for ortho",
      ]} />

      <h2>PPO vs. HMO Coverage</h2>
      <Versus
        leftLabel="PPO Plans"
        left={[
          "More likely to cover Invisalign",
          "Choose your own provider",
          "$1,000-$2,000 typical benefit",
          "Lifetime ortho max (one-time use)",
        ]}
        rightLabel="HMO Plans"
        right={[
          "Limited orthodontic coverage",
          "Must use in-network provider",
          "Lower monthly premiums",
          "May not cover clear aligners at all",
        ]}
      />

      <Highlight>Don&apos;t assume your plan won&apos;t cover it. Our coordinator Lee checks your benefits for free — no commitment needed.</Highlight>

      <h2>Other Ways to Pay</h2>
      <Checklist items={[
        "Monthly financing through Cherry — 0% APR options available",
        "HSA and FSA funds — Invisalign is a qualified expense",
        "Tax-free dollars through your employer&apos;s flex spending",
        "We break down your total cost before you start — no surprises",
      ]} />

      <p>
        <Link href="/invisalign" className="text-primary font-semibold underline">Learn about Invisalign at our office</Link> or{" "}
        <a href="https://book2.getweave.com/359c4bec-a0f0-4d62-9ea8-35a008305267/request-appointment?source=WEBSITE" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold underline">book a free consultation</a>.
      </p>
    </>
  );
}

function KidsStartDentist() {
  return (
    <>
      <div className="grid grid-cols-3 gap-3 mb-6">
        <Stat value="Age 1" label="ADA recommended first visit" />
        <Stat value="42%" label="of kids have cavities by age 11" />
        <Stat value="20" label="baby teeth to care for" />
      </div>

      <h2>When to Schedule That First Visit</h2>
      <Checklist items={[
        "By age 1 or within 6 months of the first tooth — whichever comes first",
        "Early visits catch issues like decay, bite problems, and thumb-sucking effects",
        "It&apos;s more about building comfort than doing major work",
        "Most kids who start early grow up without dental anxiety",
      ]} />

      <h2>What Happens at a Kid&apos;s Visit</h2>
      <Checklist items={[
        "Gentle exam of teeth, gums, and jaw development",
        "Basic cleaning if the child is comfortable",
        "Fluoride treatment to strengthen enamel",
        "Chat with parents about brushing, diet, and milestones to watch",
      ]} />

      <Highlight>The goal of the first visit isn&apos;t perfection — it&apos;s making your child feel safe so they grow up comfortable at the dentist.</Highlight>

      <h2>Tips to Make It Fun</h2>
      <Versus
        leftLabel="Do"
        left={[
          "Keep it positive and simple",
          "Read a book about the dentist beforehand",
          "Let them bring a favorite toy",
          "Celebrate after — make it a good memory",
        ]}
        rightLabel="Don&apos;t"
        right={[
          "Use words like &quot;pain&quot; or &quot;shot&quot;",
          "Share your own dental fears",
          "Bribe with candy (ironic, right?)",
          "Wait until there&apos;s a problem to go",
        ]}
      />

      <p>
        We see kids of all ages at our Richardson office — families come from Plano, Allen, Garland, and across DFW.{" "}
        <Link href="/services/cleaning" className="text-primary font-semibold underline">See our cleaning services</Link> or{" "}
        <a href="https://book2.getweave.com/359c4bec-a0f0-4d62-9ea8-35a008305267/request-appointment?source=WEBSITE" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold underline">book your child&apos;s first visit</a>.
      </p>
    </>
  );
}

function FiveStarDentalExperience() {
  return (
    <>
      <div className="grid grid-cols-3 gap-3 mb-6">
        <Stat value="4.9" label="stars on Google" />
        <Stat value="20+" label="years serving Richardson" />
        <Stat value="100s" label="of 5-star reviews" />
      </div>

      <h2>What Sets a Great Office Apart</h2>
      <Checklist items={[
        "You feel welcome the moment you walk in — not like a number",
        "The team explains your options without pressuring you into treatment",
        "Modern technology means less discomfort and better results",
        "They respect your time — minimal wait, efficient appointments",
        "Communication is clear before, during, and after treatment",
      ]} />

      <h2>Green Flags vs. Red Flags</h2>
      <Versus
        leftLabel="5-Star Office"
        left={[
          "Shows you X-rays and explains findings",
          "Gives you options, not ultimatums",
          "Organized, friendly front desk",
          "Modern equipment and clean space",
        ]}
        rightLabel="Average Office"
        right={[
          "Rushes through your appointment",
          "Pushes expensive treatment immediately",
          "Hard to reach or schedule with",
          "Outdated equipment and tired decor",
        ]}
      />

      <Highlight>A great dentist earns your trust by being honest — not by selling you on treatment you don&apos;t need.</Highlight>

      <h2>What Our Patients Say</h2>
      <Checklist items={[
        "\"Best dental experience I've ever had\" — heard more than anything else",
        "Families from Richardson, Plano, Allen, and Garland choose us for a reason",
        "Dr. Buchwald takes the time to explain everything — no rushed visits",
        "Our team remembers your name, your story, and your goals",
      ]} />

      <p>
        <Link href="/meet-us" className="text-primary font-semibold underline">Meet the team</Link> or{" "}
        <a href="https://book2.getweave.com/359c4bec-a0f0-4d62-9ea8-35a008305267/request-appointment?source=WEBSITE" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold underline">book your visit</a> and see the difference for yourself.
      </p>
    </>
  );
}

function DentalInsurance101() {
  return (
    <>
      <div className="grid grid-cols-3 gap-3 mb-6">
        <Stat value="100%" label="preventive coverage (most plans)" />
        <Stat value="80%" label="basic procedures" />
        <Stat value="50%" label="major procedures" />
      </div>

      <h2>How Coverage Breaks Down</h2>
      <Checklist items={[
        "Preventive (100%): cleanings, exams, X-rays — the stuff that keeps you healthy",
        "Basic (80%): fillings, simple extractions, root planing",
        "Major (50%): crowns, bridges, root canals, implants",
        "Orthodontic: some plans include a lifetime benefit of $1,000-$2,000",
      ]} />

      <h2>What&apos;s Usually NOT Covered</h2>
      <Checklist items={[
        "Cosmetic whitening and veneers",
        "Adult orthodontics on some plans",
        "Implants on older plans (though this is changing)",
        "Anything above your annual maximum (typically $1,000-$2,000/year)",
      ]} />

      <Highlight>Most plans reset January 1. Unused benefits don&apos;t roll over — use them or lose them.</Highlight>

      <h2>How to Maximize Your Benefits</h2>
      <Checklist items={[
        "Use both covered cleanings every year — they're free to you",
        "Schedule major work before your annual max resets",
        "Split big treatment plans across two benefit years if possible",
        "Use HSA or FSA funds to cover your out-of-pocket portion",
      ]} />

      <p>
        Not sure what your plan covers? Our coordinator Lee will check for you.{" "}
        <Link href="/insurance" className="text-primary font-semibold underline">See our insurance info</Link> or{" "}
        <a href="https://book2.getweave.com/359c4bec-a0f0-4d62-9ea8-35a008305267/request-appointment?source=WEBSITE" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold underline">book an appointment</a>.
      </p>
    </>
  );
}

function CostOfSkippingDentist() {
  return (
    <>
      <div className="grid grid-cols-3 gap-3 mb-6">
        <Stat value="$200" label="avg cleaning (often $0)" />
        <Stat value="$1,500" label="avg root canal" />
        <Stat value="$4,000" label="avg implant" />
      </div>

      <h2>The Math Is Simple</h2>
      <Versus
        leftLabel="Prevention"
        left={[
          "Cleaning: $200 (usually $0 with insurance)",
          "Small filling: $150-$300",
          "Fluoride treatment: $30-$50",
          "Total: under $500/year",
        ]}
        rightLabel="Neglect"
        right={[
          "Root canal + crown: $2,000-$3,000",
          "Extraction + implant: $4,000-$6,000",
          "Gum disease treatment: $1,000-$4,000",
          "Total: thousands in one visit",
        ]}
      />

      <h2>What Happens When You Skip</h2>
      <Checklist items={[
        "Year 1: Plaque hardens into tartar you can't brush away",
        "Year 2: Small cavities form between teeth — no symptoms yet",
        "Year 3: Gum disease starts — inflammation, bleeding, bone loss begins",
        "Year 5+: Cavities reach the nerve, teeth crack, extraction becomes likely",
      ]} />

      <Highlight>90% of dental problems are preventable with regular visits. The cleaning you skip today could cost you thousands tomorrow.</Highlight>

      <h2>Getting Back on Track</h2>
      <Checklist items={[
        "No judgment — we see patients who haven't been in years",
        "We'll do a full assessment and prioritize what matters most",
        "Treatment plans are broken into phases so nothing feels overwhelming",
        "Flexible financing through Cherry if cost is a concern",
      ]} />

      <p>
        Ready to get back on track?{" "}
        <Link href="/services/cleaning" className="text-primary font-semibold underline">See our cleaning services</Link> or{" "}
        <a href="https://book2.getweave.com/359c4bec-a0f0-4d62-9ea8-35a008305267/request-appointment?source=WEBSITE" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold underline">book your visit</a>.
      </p>
    </>
  );
}

function EmergencyDentistRichardson() {
  return (
    <>
      <div className="grid grid-cols-3 gap-3 mb-6">
        <Stat value="Same Day" label="emergency appointments" />
        <Stat value="(972)" label="644-3280 — call now" />
        <Stat value="20+" label="years in Richardson" />
      </div>

      <h2>What Counts as a Dental Emergency</h2>
      <Checklist items={[
        "Severe toothache that won't go away",
        "Knocked-out or loose tooth",
        "Cracked or broken tooth",
        "Swelling in your face, jaw, or gums",
        "Uncontrolled bleeding from the mouth",
        "Lost filling or crown",
      ]} />

      <h2>What to Do Before You Get Here</h2>
      <Checklist items={[
        "Knocked-out tooth: keep it moist — place in milk or hold in your cheek",
        "Toothache: rinse with warm salt water, take ibuprofen for pain",
        "Swelling: cold compress on the outside of your cheek, 20 minutes on/off",
        "Broken tooth: save any pieces, rinse gently, avoid chewing on that side",
        "Bleeding: apply gentle pressure with clean gauze",
      ]} />

      <Highlight>Call us at (972) 644-3280 — we accommodate emergencies and do our best to get you in the same day.</Highlight>

      <h2>Dentist vs. ER</h2>
      <Versus
        leftLabel="Call Your Dentist"
        left={[
          "Toothache or dental pain",
          "Broken, cracked, or knocked-out tooth",
          "Lost filling or crown",
          "Swollen gums or abscess",
        ]}
        rightLabel="Go to the ER"
        right={[
          "Uncontrolled bleeding",
          "Difficulty breathing or swallowing",
          "Jaw fracture or dislocation",
          "Facial trauma from an accident",
        ]}
      />

      <p>
        We serve Richardson, Plano, Allen, Garland, and the surrounding DFW area.{" "}
        <Link href="/emergency" className="text-primary font-semibold underline">Learn about our emergency care</Link> or{" "}
        <a href="https://book2.getweave.com/359c4bec-a0f0-4d62-9ea8-35a008305267/request-appointment?source=WEBSITE" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold underline">request an appointment</a>.
      </p>
    </>
  );
}

function ImplantsVsDentures() {
  return (
    <>
      <div className="grid grid-cols-3 gap-3 mb-6">
        <Stat value="25+" label="year implant lifespan" />
        <Stat value="5-10yr" label="denture lifespan" />
        <Stat value="98%" label="implant success rate" />
      </div>

      <h2>Side-by-Side Comparison</h2>
      <Versus
        leftLabel="Dental Implants"
        left={[
          "Look and feel like real teeth",
          "Last 25+ years (often a lifetime)",
          "Preserve jawbone density",
          "No adhesives or removal needed",
          "Eat anything — no restrictions",
        ]}
        rightLabel="Dentures"
        right={[
          "Lower upfront cost",
          "Non-surgical option",
          "Replace every 5-10 years",
          "Can slip or cause discomfort",
          "Bone loss continues over time",
        ]}
      />

      <h2>Cost Comparison</h2>
      <Checklist items={[
        "Single implant: $3,000-$5,000 (lasts 25+ years)",
        "Full dentures: $1,000-$3,000 (replaced every 5-10 years)",
        "Over 20 years, implants often cost less total",
        "Many insurance plans cover a portion of either option",
        "Financing available through Cherry — 0% APR options",
      ]} />

      <Highlight>Implants aren&apos;t just about appearance — they protect your jawbone and prevent the facial changes that come with tooth loss.</Highlight>

      <h2>Which One Is Right for You?</h2>
      <Checklist items={[
        "Good bone density and overall health? Implants are likely the best investment",
        "Need a more affordable option right now? Dentures get you functional fast",
        "Considering both? Implant-supported dentures combine stability with coverage",
        "Not sure? That's what consultations are for — no pressure, just information",
      ]} />

      <p>
        <Link href="/dental-implants" className="text-primary font-semibold underline">Learn about our implant process</Link> or{" "}
        <a href="https://book2.getweave.com/359c4bec-a0f0-4d62-9ea8-35a008305267/request-appointment?source=WEBSITE" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold underline">book a consultation</a> — Dr. Buchwald will give you an honest recommendation.
      </p>
    </>
  );
}

function WhyDentistRecommendsXrays() {
  return (
    <>
      <div className="grid grid-cols-3 gap-3 mb-6">
        <Stat value="0.005" label="mSv per dental X-ray" />
        <Stat value="0.04" label="mSv on a 3-hr flight" />
        <Stat value="80%" label="less radiation with digital" />
      </div>

      <h2>What X-Rays Catch That Exams Can&apos;t</h2>
      <Checklist items={[
        "Cavities between teeth — invisible to the naked eye",
        "Bone loss from gum disease — often no symptoms until advanced",
        "Infections at the tooth root — can spread without pain",
        "Impacted teeth — especially wisdom teeth hiding under the gum",
        "Cysts, tumors, and other abnormalities — rare but critical to catch early",
      ]} />

      <h2>Radiation: Real Numbers</h2>
      <Versus
        leftLabel="Dental X-Ray"
        left={[
          "Single X-ray: 0.005 mSv",
          "Full mouth series: 0.17 mSv",
          "Less than a day of natural background radiation",
          "Digital sensors reduce exposure 80%",
        ]}
        rightLabel="Everyday Comparison"
        right={[
          "3-hour flight: 0.04 mSv",
          "Chest X-ray: 0.1 mSv",
          "Daily background radiation: 0.01 mSv",
          "Annual background: 3.0 mSv",
        ]}
      />

      <Highlight>A single dental X-ray exposes you to less radiation than eating a banana. The risk of missing a hidden problem is far greater than the X-ray itself.</Highlight>

      <h2>How Often You Need Them</h2>
      <Checklist items={[
        "Bitewings (cavity check): once a year for most adults",
        "Full mouth series: every 3-5 years",
        "Panoramic: as needed for implants, wisdom teeth, or orthodontics",
        "New patient: a full set so Dr. Buchwald has a complete baseline",
      ]} />

      <p>
        Questions about X-rays at your next visit?{" "}
        <Link href="/services/cleaning" className="text-primary font-semibold underline">See what our checkups include</Link> or{" "}
        <a href="https://book2.getweave.com/359c4bec-a0f0-4d62-9ea8-35a008305267/request-appointment?source=WEBSITE" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold underline">book your appointment</a>.
      </p>
    </>
  );
}

function HowOftenDentist() {
  return (
    <>
      <div className="grid grid-cols-3 gap-3 mb-6">
        <Stat value="2x" label="yearly visits recommended" />
        <Stat value="47%" label="of adults have gum disease" />
        <Stat value="$200" label="avg cleaning cost (often $0 with insurance)" />
      </div>

      <h2>The 6-Month Rule</h2>
      <Checklist items={[
        "Twice a year is the standard recommendation for healthy adults",
        "Cleanings remove plaque and tartar that brushing misses",
        "Exams catch cavities, gum disease, and oral cancer early",
        "Most insurance plans cover two preventive visits at 100%",
      ]} />

      <h2>When You Might Need to Go More Often</h2>
      <Checklist items={[
        "History of gum disease — every 3-4 months is common",
        "Diabetes — higher risk for infections and slow healing",
        "Smokers — more prone to gum disease and buildup",
        "Pregnancy — hormonal changes increase gum sensitivity",
        "History of frequent cavities",
      ]} />

      <Highlight>Skipping visits doesn&apos;t save money — it usually costs more. A $200 cleaning is a lot cheaper than a $1,500 crown.</Highlight>

      <h2>What Happens When You Skip</h2>
      <Versus
        leftLabel="Regular Visits"
        left={[
          "Small issues caught early",
          "Simple, affordable fixes",
          "Healthy gums and fresh breath",
          "Peace of mind",
        ]}
        rightLabel="Skipping Visits"
        right={[
          "Problems grow silently",
          "Root canals, crowns, extractions",
          "Gum disease and bone loss",
          "More time and money in the chair",
        ]}
      />

      <p>
        Patients from Richardson, Plano, Garland, and Allen trust us to keep their smiles on track.{" "}
        <Link href="/services/cleaning" className="text-primary font-semibold underline">Learn about our cleanings</Link> or{" "}
        <a href="https://book2.getweave.com/359c4bec-a0f0-4d62-9ea8-35a008305267/request-appointment?source=WEBSITE" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold underline">book your next visit</a>.
      </p>
    </>
  );
}

/* ─── Content map ─── */

const contentMap: Record<string, () => React.ReactNode> = {
  "what-makes-5-star-dental-experience": FiveStarDentalExperience,
  "dental-insurance-101-whats-covered": DentalInsurance101,
  "cost-of-skipping-the-dentist": CostOfSkippingDentist,
  "emergency-dentist-richardson-tx": EmergencyDentistRichardson,
  "dental-implants-vs-dentures": ImplantsVsDentures,
  "why-dentist-recommends-xrays": WhyDentistRecommendsXrays,
  "how-to-choose-dentist-richardson-tx": ChooseDentistRichardson,
  "does-insurance-cover-invisalign": InsuranceCoverInvisalign,
  "when-should-kids-start-dentist": KidsStartDentist,
  "how-often-should-you-go-to-dentist": HowOftenDentist,
  "what-to-expect-first-dental-visit": FirstDentalVisit,
  "invisalign-vs-braces": InvisalignVsBraces,
  "dental-implants-cost-texas": DentalImplantsCost,
  "signs-you-need-dentist": SignsYouNeedDentist,
  "is-teeth-whitening-safe": TeethWhiteningSafe,
  "why-you-need-a-night-guard": WhyYouNeedNightGuard,
};

/* ─── FAQ Accordion ─── */

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-4 text-left gap-4"
      >
        <span className="font-semibold text-gray-900 text-[15px]">{q}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          className="text-primary text-lg flex-shrink-0 font-bold"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="text-gray-500 text-sm leading-relaxed pb-4">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Page Component ─── */

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;

  const post = blogPosts.find((p) => p.slug === slug);
  const Content = contentMap[slug];

  if (!post || !Content) {
    notFound();
  }

  return (
    <>
      {/* Hero */}
      <section className="py-10 sm:py-16 bg-white">
        <div className="mx-auto max-w-3xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/blog"
              className="text-primary text-sm font-semibold hover:underline mb-6 inline-block"
            >
              &larr; Back to Blog
            </Link>
            <div className="flex items-center gap-3 text-xs text-gray-400 mb-4">
              <span>{post.readTime}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-[1.1] mb-4">
              {post.title}
            </h1>
            <p className="text-gray-500 text-base leading-relaxed">
              {post.excerpt}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-10 sm:py-14 bg-gray-50">
        <div className="mx-auto max-w-3xl px-4">
          <motion.article
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-xl p-6 sm:p-10 prose prose-gray max-w-none
              prose-headings:font-extrabold prose-headings:text-gray-900 prose-headings:mt-6 prose-headings:mb-3
              prose-p:text-gray-500 prose-p:text-sm prose-p:leading-relaxed prose-p:mb-3
              prose-li:text-gray-500 prose-li:text-sm
              prose-ul:mb-3 prose-ul:space-y-1
              prose-strong:text-gray-700"
          >
            <Content />
          </motion.article>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 sm:py-18 bg-white">
        <div className="mx-auto max-w-2xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
              Common Questions
            </h2>
          </motion.div>
          <div className="bg-gray-50 rounded-xl p-6">
            {post.faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
      <FAQSchema faqs={post.faqs} />
      <BreadcrumbSchema
        items={[
          { name: "Blog", href: "/blog" },
          { name: post.title, href: `/blog/${post.slug}` },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            datePublished: post.date,
            dateModified: post.date,
            url: `https://buchwaldfamilydentistry.com/blog/${post.slug}`,
            author: {
              "@type": "Organization",
              name: "Buchwald Family Dentistry",
              url: "https://buchwaldfamilydentistry.com",
            },
            publisher: {
              "@type": "Organization",
              name: "Buchwald Family Dentistry",
              logo: {
                "@type": "ImageObject",
                url: "https://buchwaldfamilydentistry.com/images/logo-color.png",
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://buchwaldfamilydentistry.com/blog/${post.slug}`,
            },
          }),
        }}
      />
    </>
  );
}
