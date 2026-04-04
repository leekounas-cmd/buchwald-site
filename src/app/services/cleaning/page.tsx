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
import { StatRow, Highlight, Checklist, NumberedList } from "@/components/ContentBlocks";

const BOOKING_URL = "https://book2.getweave.com/359c4bec-a0f0-4d62-9ea8-35a008305267/request-appointment?source=WEBSITE";

const included = [
  "Professional cleaning — plaque and tartar removal",
  "Comprehensive exam by Dr. Buchwald",
  "Digital X-rays — low-radiation imaging",
  "Oral cancer screening",
  "Personalized care plan based on your needs",
];

const addons = [
  { title: "Fluoride Treatment", price: "$65", description: "Professional enamel strengthening to prevent decay." },
  { title: "JET Whitening", price: "$150", description: "Air polish whitening — perfect after a cleaning." },
  { title: "InnerView Scan", price: "$30", description: "Digital scan to identify concealed issues." },
];

const whatToExpect = [
  { title: "Check-In & Chat", desc: "Quick conversation about your dental history and any concerns." },
  { title: "X-Rays & Imaging", desc: "Low-radiation digital X-rays to catch issues below the surface." },
  { title: "Professional Cleaning", desc: "Melisa removes plaque, polishes your teeth, and flosses." },
  { title: "Exam & Care Plan", desc: "Dr. Buchwald reviews everything and walks you through a personalized plan." },
];

const faqs = [
  { q: "How often should I get a cleaning?", a: "Most patients benefit from a cleaning every 6 months. If you have gum disease or other concerns, we may recommend every 3–4 months." },
  { q: "Will the cleaning hurt?", a: "Most patients experience little to no discomfort. If you have sensitive teeth or it's been a while since your last visit, let us know — we'll make adjustments to keep you comfortable." },
  { q: "How long does a cleaning take?", a: "A typical cleaning and exam takes about 45–60 minutes. If you're adding on fluoride or whitening, plan for a little extra time." },
  { q: "What if it's been years since my last visit?", a: "No judgment — we see this all the time. We'll do a thorough evaluation and create a plan to get your oral health back on track." },
  { q: "Do you accept my insurance?", a: "We work with most major dental insurance plans. Denielle, our insurance coordinator, will verify your benefits and explain your coverage before any treatment." },
  { q: "What's the difference between a regular cleaning and a deep cleaning?", a: "A regular cleaning removes plaque and tartar above the gum line. A deep cleaning (scaling and root planing) goes below the gum line to treat early-stage gum disease. We'll let you know which one you need." },
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

export default function CleaningPage() {
  return (
    <>
      <section className="py-10 sm:py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center">
            <p className="text-primary text-sm font-bold uppercase tracking-wider mb-3">Preventive Care</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-[1.1] mb-8">Dental Cleaning &amp; Exam</h1>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.1 }} className="mb-10">
            <Image src="/images/stock/cleaning.jpg" alt="Melisa performing a professional teeth cleaning at Buchwald Family Dentistry" width={1200} height={600} className="rounded-2xl w-full object-cover aspect-video" priority />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-center max-w-3xl mx-auto">
            <p className="text-gray-500 text-lg leading-relaxed">The foundation of a healthy smile. Routine cleanings catch problems early — before they become painful or expensive.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="mx-auto max-w-3xl px-4">
          <StatRow stats={[
            { value: "45-60", label: "Minute visit" },
            { value: "$129", label: "New patient" },
            { value: "6mo", label: "Recommended frequency" },
          ]} />

          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">What&apos;s Included</h2>
            <Checklist items={included} />
          </motion.div>

          <Highlight>Every cleaning includes a full exam by Dr. Buchwald — not just a hygienist visit. You see the dentist every time.</Highlight>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="mx-auto max-w-3xl px-4">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2">What to Expect</h2>
            <p className="text-gray-400 text-sm mb-6">Your visit from start to finish.</p>
            <NumberedList items={whatToExpect} />
          </motion.div>
        </div>
      </section>

      {/* Add-Ons */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="mx-auto max-w-3xl px-4">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2">Popular Add-Ons</h2>
            <p className="text-gray-400 text-sm mb-6">Enhance your cleaning with these premium treatments.</p>
          </motion.div>
          <div className="grid gap-3 sm:grid-cols-3">
            {addons.map((a, i) => (
              <motion.div key={a.title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="bg-white rounded-xl p-5">
                <div className="flex items-baseline justify-between mb-1">
                  <h3 className="font-bold text-gray-900 text-sm">{a.title}</h3>
                  <span className="text-primary font-extrabold">{a.price}</span>
                </div>
                <p className="text-gray-400 text-xs leading-relaxed">{a.description}</p>
              </motion.div>
            ))}
          </div>
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

      <RelatedServices keys={["general", "whitening"]} />
      <Testimonials />
      <CTABanner />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={[{ name: "Services", href: "/services" }, { name: "Dental Cleaning & Exam", href: "/services/cleaning" }]} />
      <ServiceSchema name="Dental Cleaning & Exam" description="Professional teeth cleaning, digital X-rays, oral cancer screening, and comprehensive exam by Dr. Buchwald in Richardson, TX." url="/services/cleaning" />
    </>
  );
}
