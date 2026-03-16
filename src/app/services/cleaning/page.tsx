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

const included = [
  "Professional cleaning — plaque and tartar removal",
  "Comprehensive exam by Dr. Buchwald",
  "Digital X-rays — low-radiation imaging",
  "Oral cancer screening",
  "Personalized care plan based on your needs",
];

const addons = [
  { title: "Fluoride Treatment", price: "$65", description: "Professional enamel strengthening to help prevent decay." },
  { title: "JET Whitening", price: "$150", description: "Professional-grade air polish whitening — perfect after a cleaning." },
  { title: "InnerView Scan", price: "$30", description: "Digital scan to identify concealed issues and assess oral health." },
];

const whatToExpect = [
  { step: "01", title: "Check-In & Chat", text: "We start with a quick conversation about your dental history, any concerns, and what you're hoping to get out of your visit." },
  { step: "02", title: "X-Rays & Imaging", text: "Low-radiation digital X-rays give us a clear picture of what's happening below the surface — catching issues early." },
  { step: "03", title: "Professional Cleaning", text: "Melisa removes plaque and tartar buildup, polishes your teeth, and flosses — leaving your mouth feeling fresh and clean." },
  { step: "04", title: "Exam & Care Plan", text: "Dr. Buchwald does a thorough exam, reviews your X-rays, checks for cavities, gum issues, and oral cancer — then walks you through a personalized plan." },
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
      <section className="py-10 sm:py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center">
            <p className="text-primary text-sm font-bold uppercase tracking-wider mb-3">Preventive Care</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-[1.1] mb-8">Dental Cleaning &amp; Exam</h1>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.1 }} className="mb-10">
            <Image src="/images/stock/cleaning.jpg" alt="Melisa performing a professional teeth cleaning at Buchwald Family Dentistry" width={1200} height={600} className="rounded-2xl w-full object-cover aspect-video" priority />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-center max-w-3xl mx-auto">
            <p className="text-gray-500 text-lg leading-relaxed">The foundation of a healthy smile. Routine cleanings and exams keep your teeth strong and catch problems early — before they become painful or expensive.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-gray-50">
        <div className="mx-auto max-w-3xl px-4">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">What&apos;s Included</h2>
          </motion.div>
          <div className="space-y-3">
            {included.map((item, i) => (
              <motion.div key={item} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} className="flex items-start gap-3 bg-white rounded-xl p-5">
                <span className="h-2 w-2 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                <p className="text-gray-700 text-[15px] font-medium">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="mx-auto max-w-5xl px-4">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">What to Expect</h2>
            <p className="text-gray-400 text-sm mt-2">Your visit from start to finish.</p>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {whatToExpect.map((s, i) => (
              <motion.div key={s.step} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="bg-gray-50 rounded-xl p-6">
                <p className="text-primary text-3xl font-extrabold mb-2">{s.step}</p>
                <h3 className="font-bold text-gray-900 mb-1">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-Ons */}
      <section className="py-20 sm:py-24 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2">Popular Add-Ons</h2>
            <p className="text-gray-400 text-sm">Enhance your cleaning with these premium treatments.</p>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-3">
            {addons.map((a, i) => (
              <motion.div key={a.title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="bg-white rounded-xl p-6">
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="font-bold text-gray-900">{a.title}</h3>
                  <span className="text-primary font-extrabold text-lg">{a.price}</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{a.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-24 bg-white">
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
