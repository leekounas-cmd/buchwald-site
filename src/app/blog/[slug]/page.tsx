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
        <Link href="/book" className="text-primary font-semibold underline">Book an appointment</Link> — Dr. Buchwald can spot the signs during a routine exam.
      </p>
    </>
  );
}

function FirstDentalVisit() {
  return (
    <>
      <div className="grid grid-cols-3 gap-3 mb-6">
        <Stat value="60-90" label="minutes, first visit" />
        <Stat value="$129" label="new patient special" />
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
        <Link href="/book" className="text-primary font-semibold underline">Request your first appointment</Link> — we&apos;ll take it from there.
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
        <Link href="/book" className="text-primary font-semibold underline">book a free consultation</Link>.
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
        "Our coordinator Denielle checks your benefits before you commit",
      ]} />

      <p>
        <Link href="/dental-implants" className="text-primary font-semibold underline">Learn about our implant process</Link> or{" "}
        <Link href="/book" className="text-primary font-semibold underline">request a consultation</Link>.
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
        <Link href="/book" className="text-primary font-semibold underline">Request an appointment</Link> — we&apos;ll get you taken care of.
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
        <Link href="/book" className="text-primary font-semibold underline">book a consultation</Link>.
      </p>
    </>
  );
}

/* ─── Content map ─── */

const contentMap: Record<string, () => React.ReactNode> = {
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
              <span>{post.date}</span>
              <span>&middot;</span>
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
    </>
  );
}
