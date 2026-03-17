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

const BOOKING_URL = "/book";

const benefits = [
  "Virtually invisible — most people won't notice",
  "Removable — eat and brush like normal",
  "Many patients see results in 6 months",
  "No metal brackets or wires",
  "Custom-made for your teeth",
  "Advanced Invisalign training by Dr. Buchwald",
];

const steps = [
  { step: "01", title: "Free Consult", description: "We evaluate your smile, take digital impressions, and discuss your goals. No cost, no commitment." },
  { step: "02", title: "Custom Plan", description: "Your personalized treatment plan shows you exactly how your teeth will move — you see your future smile before you start." },
  { step: "03", title: "Wear Aligners", description: "Swap trays every 1–2 weeks. Quick check-ins every 6–8 weeks to monitor progress." },
  { step: "04", title: "Love Your Smile", description: "Treatment complete. We fit you with retainers to keep your results — then show off that new smile." },
];

const comparison = [
  { feature: "Appearance", invisalign: "Nearly invisible clear trays", braces: "Visible metal brackets and wires" },
  { feature: "Comfort", invisalign: "Smooth plastic, no sharp edges", braces: "Brackets can irritate cheeks and gums" },
  { feature: "Eating", invisalign: "Remove to eat anything you want", braces: "Avoid sticky, hard, and crunchy foods" },
  { feature: "Brushing", invisalign: "Remove to brush and floss normally", braces: "Requires special tools to clean around wires" },
  { feature: "Treatment Time", invisalign: "6–18 months for most cases", braces: "12–36 months typically" },
  { feature: "Office Visits", invisalign: "Quick check-ins every 6–8 weeks", braces: "Monthly adjustments required" },
];

const faqs = [
  { q: "Does Invisalign hurt?", a: "You'll feel some pressure when you switch to a new tray — that means it's working. Most patients describe it as mild tightness, not pain. It goes away within a day or two." },
  { q: "How long does treatment take?", a: "Most cases take 6–18 months depending on complexity. Minor alignment issues can be done in as few as 6 months. We'll give you a clear timeline at your consultation." },
  { q: "Can Invisalign fix my bite?", a: "Yes. Invisalign treats overbites, underbites, crossbites, open bites, and crowding. Dr. Buchwald has advanced Invisalign training and can handle complex cases." },
  { q: "How many hours a day do I wear them?", a: "20–22 hours per day for best results. You only take them out to eat, drink (anything besides water), brush, and floss." },
  { q: "What if I lose a tray?", a: "Call us. Depending on where you are in treatment, we may have you move to the next tray or order a replacement. It's not a big deal — it happens." },
  { q: "Is Invisalign covered by insurance?", a: "Many dental insurance plans cover Invisalign the same way they cover braces. Denielle will check your benefits and let you know exactly what's covered." },
  { q: "Am I too old for Invisalign?", a: "Nope. There's no upper age limit. We treat patients of all ages. If your teeth and gums are healthy, you're likely a candidate." },
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

export default function InvisalignPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-10 sm:py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center">
            <p className="text-primary text-sm font-bold uppercase tracking-wider mb-3">Invisalign Provider</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-[1.1] mb-8">
              Straighten Your Smile with Clear Aligners
            </h1>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.1 }} className="mb-10">
            <Image src="/images/stock/invisalign.jpg" alt="Clear aligners for straighter teeth" width={1200} height={600} className="rounded-2xl w-full object-cover aspect-video" priority />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-center max-w-3xl mx-auto">
            <p className="text-gray-500 text-lg leading-relaxed mb-4">
              Custom-made, virtually invisible aligners that fit your lifestyle. No metal. No wires. Just a straighter smile you&apos;re proud to show off.
            </p>
            <p className="text-primary text-lg font-bold">
              Get started for as low as $115/month with financing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 sm:py-24 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Why Invisalign?</h2>
          </motion.div>
          <div className="grid gap-3 sm:grid-cols-2">
            {benefits.map((b, i) => (
              <motion.div key={b} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} className="flex items-start gap-3 bg-white rounded-xl p-5">
                <span className="h-2 w-2 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                <p className="text-gray-700 text-[15px] font-medium">{b}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="mx-auto max-w-5xl px-4">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">How It Works</h2>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <motion.div key={s.step} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="bg-gray-50 rounded-xl p-6">
                <p className="text-primary text-3xl font-extrabold mb-2">{s.step}</p>
                <h3 className="font-bold text-gray-900 mb-1">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Invisalign vs Braces */}
      <section className="py-20 sm:py-24 bg-gray-50">
        <div className="mx-auto max-w-3xl px-4">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Invisalign vs. Braces</h2>
            <p className="text-gray-400 text-sm mt-2">See how they stack up side by side.</p>
          </motion.div>
          <div className="space-y-3">
            {comparison.map((row, i) => (
              <motion.div key={row.feature} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} className="bg-white rounded-xl p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-primary mb-2">{row.feature}</p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs font-bold text-gray-400 mb-0.5">Invisalign</p>
                    <p className="text-sm text-gray-700 font-medium">{row.invisalign}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 mb-0.5">Traditional Braces</p>
                    <p className="text-sm text-gray-500">{row.braces}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Promo */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-primary text-sm font-bold uppercase tracking-wider mb-3">Flexible Financing</p>
            <p className="text-5xl sm:text-7xl font-extrabold text-gray-900 mb-2">$115<span className="text-2xl sm:text-3xl text-gray-400">/mo</span></p>
            <p className="text-xl font-bold text-gray-900 mb-3">As low as — with 0% APR available</p>
            <p className="text-gray-400 text-base max-w-md mx-auto mb-8">
              Schedule your free consultation. Financing through Cherry — no hard credit check, instant approval.
            </p>
            <a href={BOOKING_URL} className="inline-block rounded-lg bg-primary px-7 py-3.5 text-sm font-bold text-white hover:bg-primary-dark transition-all">
              Book Free Consultation
            </a>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-24 bg-gray-50">
        <div className="mx-auto max-w-2xl px-4">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Common Questions</h2>
          </motion.div>
          <div className="bg-white rounded-xl p-6">
            {faqs.map((faq) => <FAQItem key={faq.q} q={faq.q} a={faq.a} />)}
          </div>
        </div>
      </section>

      <RelatedServices keys={["cosmetic", "whitening"]} />
      <Testimonials />
      <CTABanner />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={[{ name: "Invisalign", href: "/invisalign" }]} />
      <ServiceSchema name="Invisalign Clear Aligners" description="Invisalign clear aligner treatment starting at $115/month at Buchwald Family Dentistry in Richardson, TX. 0% APR financing available." url="/invisalign" />
    </>
  );
}
