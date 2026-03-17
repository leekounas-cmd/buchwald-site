"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { Testimonials } from "@/components/Testimonials";
import { CTABanner } from "@/components/CTABanner";
import { RelatedServices } from "@/components/RelatedServices";
import { FAQSchema } from "@/components/FAQSchema";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { ServiceSchema } from "@/components/ServiceSchema";
import { StatRow, Checklist, Versus, Highlight } from "@/components/ContentBlocks";

const BOOKING_URL = "/book";

const faqs = [
  { q: "How long do veneers last?", a: "Porcelain veneers typically last 10–15+ years with proper care. They're stain-resistant and extremely durable." },
  { q: "Does teeth whitening damage enamel?", a: "No. Professional whitening is safe for your enamel when done correctly. We use controlled formulas and monitor the process to protect your teeth." },
  { q: "Can bonding fix gaps between teeth?", a: "Yes. Dental bonding is a great option for closing small gaps, repairing chips, and improving the shape of teeth — all in one visit." },
  { q: "Is cosmetic dentistry covered by insurance?", a: "Most cosmetic procedures aren't covered, but some (like bonding for a chipped tooth) may be partially covered. Denielle will check your benefits and explain your options." },
  { q: "How do I know which treatment is right for me?", a: "That's what the consultation is for. We'll look at your teeth, listen to your goals, and walk you through the best options — no pressure, just honest guidance." },
  { q: "Will cosmetic work look natural?", a: "Absolutely. We match color, shape, and translucency to your natural teeth. The goal is always a result that looks like you — just the best version." },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between py-4 text-left gap-4">
        <span className="font-semibold text-gray-900 text-[15px]">{q}</span>
        <motion.span animate={{ rotate: open ? 45 : 0 }} className="text-primary text-lg flex-shrink-0 font-bold">+</motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden">
            <p className="text-gray-500 text-sm leading-relaxed pb-4">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function CosmeticPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-10 sm:py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center">
            <p className="text-primary text-sm font-bold uppercase tracking-wider mb-3">Smile Transformations</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-[1.1] mb-8">Cosmetic Dentistry</h1>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.1 }} className="mb-10">
            <Image src="/images/stock/cosmetic.jpg" alt="Beautiful confident smile" width={1200} height={600} className="rounded-2xl w-full object-cover aspect-video" priority />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-center max-w-3xl mx-auto">
            <p className="text-gray-500 text-lg leading-relaxed">Love the way your smile looks. From whitening to veneers, we offer a full range of cosmetic treatments designed to help you feel confident every time you smile.</p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="mx-auto max-w-3xl px-4">
          <StatRow stats={[
            { value: "10-15yr", label: "Veneer Lifespan" },
            { value: "1 Visit", label: "Bonding Turnaround" },
            { value: "5-7", label: "Shades Brighter" },
          ]} />

          <Highlight>
            Not sure where to start? Most patients walk in with a goal and leave with a clear plan. No pressure — just honest guidance from a team that does this every day.
          </Highlight>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="mx-auto max-w-3xl px-4">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">What We Offer</h2>
          </motion.div>
          <Checklist items={[
            "Porcelain Veneers — custom shells for a flawless, natural look. Fix chips, gaps, and discoloration in two visits",
            "Dental Bonding — quick, same-day repairs for chips, cracks, and gaps using tooth-colored resin",
            "Smile Makeovers — a personalized combination of treatments planned together to transform your smile",
            "Teeth Whitening — professional in-office and take-home options, 5-7 shades brighter",
            "Gum Contouring — reshape your gum line with laser technology for a balanced, symmetrical smile",
            "Tooth Reshaping — subtle adjustments to length, shape, or surface for a more uniform look",
          ]} />
        </div>
      </section>

      {/* Comparisons */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="mx-auto max-w-3xl px-4">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">How Do They Compare?</h2>
            <p className="text-gray-400 text-sm mt-2">Picking the right treatment can feel overwhelming. Here&apos;s a quick breakdown.</p>
          </motion.div>

          <Versus
            leftLabel="Veneers"
            rightLabel="Bonding"
            left={[
              "Last 10-15+ years",
              "Stain-resistant porcelain",
              "Best for full smile makeovers",
              "Custom lab-crafted",
            ]}
            right={[
              "Lasts 5-7 years",
              "Can stain over time",
              "Best for small, targeted fixes",
              "Done in a single visit",
            ]}
          />

          <Versus
            leftLabel="Professional Whitening"
            rightLabel="OTC Whitening"
            left={[
              "Custom-fitted trays",
              "Stronger, supervised formula",
              "5-7 shades brighter",
              "Controlled sensitivity",
            ]}
            right={[
              "Generic one-size trays",
              "Weaker over-the-counter formula",
              "1-2 shades brighter",
              "Can cause uneven results",
            ]}
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="mx-auto max-w-2xl px-4">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Common Questions</h2>
          </motion.div>
          <div className="bg-gray-50 rounded-xl p-6">
            {faqs.map((faq) => <FAQItem key={faq.q} q={faq.q} a={faq.a} />)}
          </div>
        </div>
      </section>

      <RelatedServices keys={["whitening", "invisalign"]} />
      <Testimonials />
      <CTABanner />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={[{ name: "Services", href: "/services" }, { name: "Cosmetic Dentistry", href: "/services/cosmetic" }]} />
      <ServiceSchema name="Cosmetic Dentistry" description="Veneers, dental bonding, smile makeovers, gum contouring, and teeth whitening at Buchwald Family Dentistry in Richardson, TX." url="/services/cosmetic" />
    </>
  );
}
