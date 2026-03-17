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
import { StatRow, Highlight, Checklist, Versus } from "@/components/ContentBlocks";

const faqs = [
  { q: "Does whitening damage my teeth?", a: "No. Professional whitening is safe for your enamel when done under dental supervision. We use controlled concentrations and protect your gums throughout the process." },
  { q: "How long do whitening results last?", a: "Results typically last 6 months to 2 years depending on your diet and habits. Coffee, wine, and tobacco can cause re-staining faster. Touch-up treatments help maintain your results." },
  { q: "Will whitening make my teeth sensitive?", a: "Some temporary sensitivity is normal, especially with in-office treatments. We use desensitizing agents and adjust the treatment if needed. Sensitivity usually goes away within a day or two." },
  { q: "Can I whiten my teeth if I have fillings or crowns?", a: "Whitening works on natural tooth enamel only — fillings, crowns, and veneers won't change color. We'll discuss this during your consult and may recommend replacing visible restorations after whitening to match your new shade." },
  { q: "What's the difference between in-office and take-home?", a: "In-office gives you dramatic results in about an hour. Take-home kits use custom trays with professional gel for gradual whitening over 1–2 weeks. Some patients do both for maximum results." },
  { q: "Is over-the-counter whitening the same thing?", a: "No. OTC products use weaker formulas and generic trays that don't fit your teeth properly. Professional whitening is stronger, more even, and supervised — so you get better results without risking sensitivity or gum irritation." },
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

export default function TeethWhiteningPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-10 sm:py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center">
            <p className="text-primary text-sm font-bold uppercase tracking-wider mb-3">Cosmetic Dentistry</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-[1.1] mb-8">
              Professional Teeth Whitening
            </h1>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.1 }} className="mb-10">
            <Image src="/images/stock/whitening.jpg" alt="Bright white smile" width={1200} height={600} className="rounded-2xl w-full object-cover aspect-video" priority />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-center max-w-3xl mx-auto">
            <p className="text-gray-500 text-lg leading-relaxed">
              Brighten your smile with safe, effective whitening treatments customized to your teeth. In-office or at home — dramatically whiter in days, not months.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats + Content */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4">
          <StatRow stats={[
            { value: "5-7", label: "Shades Brighter" },
            { value: "1hr", label: "In-Office Visit" },
            { value: "1-3yr", label: "Results Last" },
          ]} />

          <Highlight>Most patients walk out of their first visit noticeably brighter — no sensitivity, no downtime.</Highlight>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-10 mb-4">In-Office vs. Take-Home</h2>
          <Versus
            leftLabel="In-Office"
            rightLabel="Take-Home"
            left={[
              "Up to 7 shades in one visit",
              "Professional-grade formula",
              "Supervised by our team",
              "Gum protection throughout",
            ]}
            right={[
              "Gradual results over 1-2 weeks",
              "Custom-fitted trays",
              "Whiten on your schedule",
              "Great for touch-ups",
            ]}
          />
        </div>
      </section>

      {/* Results */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <motion.div initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="text-primary text-sm font-bold uppercase tracking-wider mb-3">Expected Results</p>
              <p className="text-7xl sm:text-8xl font-extrabold text-gray-900 mb-1">5–7</p>
              <p className="text-xl font-bold text-gray-900 mb-3">Shade Improvement</p>
              <p className="text-gray-500 text-base leading-relaxed">
                Our professional treatments can lighten your teeth by 5 to 7 shades — a noticeably brighter, more confident smile.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex justify-center">
              <Image src="/images/tooth-icon.svg" alt="Tooth" width={200} height={240} className="w-40 sm:w-48 h-auto" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Good Candidate */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2">Is Whitening Right for You?</h2>
          <p className="text-gray-400 text-sm mb-4">Whitening works great if you&apos;re dealing with any of these.</p>
          <Checklist items={[
            "Staining from coffee, tea, wine, or tobacco",
            "Natural yellowing over time",
            "Wanting a brighter smile for a special event",
            "Uneven tooth color after dental work",
            "Feeling self-conscious about your smile color",
          ]} />
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

      <RelatedServices keys={["cosmetic", "cleaning"]} />
      <Testimonials />
      <CTABanner />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={[{ name: "Teeth Whitening", href: "/teeth-whitening" }]} />
      <ServiceSchema name="Teeth Whitening" description="Professional in-office and take-home teeth whitening options at Buchwald Family Dentistry in Richardson, TX." url="/teeth-whitening" />
    </>
  );
}
