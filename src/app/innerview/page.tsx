"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { CTABanner } from "@/components/CTABanner";
import { FAQSchema } from "@/components/FAQSchema";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { ServiceSchema } from "@/components/ServiceSchema";

const detects = [
  { title: "Cracks", description: "Detects all types of tooth cracks — including hairline fractures that are invisible on X-rays — before they cause pain or tooth loss." },
  { title: "Failing Restorations", description: "Identifies loss of cement seal on crowns, veneers, and fillings so we can fix them before they fail completely." },
  { title: "Loose Implant Components", description: "Catches loose abutment screws and early implant fractures before they show up on imaging." },
  { title: "Implant Stability", description: "Monitors osseointegration quality to determine exactly when an implant is ready for restoration." },
];

const howItWorks = [
  { step: "01", title: "Gentle Taps", text: "The handheld device applies 4 micro-taps to each tooth — each lasting just 2.5 milliseconds. No pain, no pressure." },
  { step: "02", title: "AI Analysis", text: "Sensors capture the energy response from inside the tooth. Cloud-based AI analyzes the data in near real-time." },
  { step: "03", title: "Objective Results", text: "The system converts readings into clear internal mobility values — giving us objective data instead of guesswork." },
  { step: "04", title: "Review Together", text: "We walk through the results with you, explain what we found, and discuss next steps if anything needs attention." },
];

const faqs = [
  { q: "What is InnerView?", a: "InnerView is an FDA-cleared, AI-powered diagnostic device that detects cracks, failing restorations, and implant issues inside your teeth — things that X-rays and visual exams often miss. It's the first and only device cleared to measure 'internal mobility' in teeth." },
  { q: "Does it hurt?", a: "Not at all. The device applies 4 gentle micro-taps per tooth, each lasting just 2.5 milliseconds. Most patients don't even feel it. No radiation, no needles, no discomfort." },
  { q: "How long does a full scan take?", a: "About 3 seconds per tooth, roughly 90 seconds for your entire mouth. It's done by our hygienist during your regular exam — no extra appointment needed." },
  { q: "How is this different from X-rays?", a: "X-rays show bone and tooth structure from the outside. InnerView measures what's happening inside the tooth — detecting micro-movements that indicate cracks, loose restorations, or implant issues that X-rays can't see. They complement each other." },
  { q: "Can it detect cavities?", a: "InnerView is specifically designed to detect structural issues like cracks and failing restorations. For cavities, we use X-rays and visual exams. Together, they give us a complete picture." },
  { q: "Will my insurance cover it?", a: "Coverage varies by plan. We'll review any fees with you before the scan. Ask Denielle about your specific benefits." },
  { q: "Is InnerView safe?", a: "Yes. It's FDA-cleared, uses no radiation, and is backed by 29+ clinical studies. It's completely non-invasive — just gentle taps on each tooth." },
  { q: "Do I need InnerView at every visit?", a: "Not necessarily, but regular scans let us track changes over time. Think of it like a health trendline for each tooth — we can spot early warning signs and intervene before problems get serious." },
  { q: "Can it check my existing crowns and implants?", a: "Yes — that's one of its biggest strengths. It can detect loose cement seals, failing restorations, and implant stability issues that are impossible to see with traditional methods." },
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

export default function InnerViewPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-10 sm:py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center">
            <p className="text-primary text-sm font-bold uppercase tracking-wider mb-3">AI-Powered Diagnostics</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-[1.1] mb-8">
              See What X-Rays Can&apos;t
            </h1>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.1 }} className="mb-10">
            <Image src="/images/stock/innerview.jpg" alt="InnerView AI dental diagnostics at Buchwald Family Dentistry" width={1200} height={600} className="rounded-2xl w-full object-cover aspect-video" priority />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-center max-w-3xl mx-auto">
            <p className="text-gray-500 text-lg leading-relaxed">
              InnerView uses AI and micro-percussion technology to detect cracks, failing restorations, and implant issues that traditional exams miss. FDA-cleared, pain-free, and done in under 90 seconds.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What It Detects */}
      <section className="py-20 sm:py-24 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">What InnerView Detects</h2>
            <p className="text-gray-500 text-base mt-3 max-w-lg mx-auto">Problems that are invisible to X-rays, CBCT, and visual exams — caught before they become emergencies.</p>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-2">
            {detects.map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} className="bg-white rounded-xl p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                  <h3 className="font-bold text-gray-900 text-[15px]">{item.title}</h3>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="mx-auto max-w-3xl px-4">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">How It Works</h2>
            <p className="text-gray-500 text-base mt-3">3 seconds per tooth. 90 seconds for your entire mouth. Done during your regular visit.</p>
          </motion.div>
          <div className="space-y-4">
            {howItWorks.map((item, i) => (
              <motion.div key={item.step} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} className="flex items-start gap-5 bg-gray-50 rounded-xl p-5">
                <span className="text-primary/20 text-3xl font-extrabold flex-shrink-0">{item.step}</span>
                <div>
                  <h3 className="font-bold text-gray-900 text-[15px] mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "FDA", label: "Cleared" },
              { value: "3 sec", label: "Per Tooth" },
              { value: "29+", label: "Clinical Studies" },
              { value: "0", label: "Radiation" },
            ].map((stat, i) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
                <p className="text-2xl sm:text-3xl font-extrabold text-gray-900">{stat.value}</p>
                <p className="text-gray-400 text-sm mt-0.5">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
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

      <CTABanner />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={[{ name: "InnerView", href: "/innerview" }]} />
      <ServiceSchema name="InnerView AI Diagnostics" description="FDA-cleared AI-powered dental diagnostics detecting cracks, failing restorations, and implant issues at Buchwald Family Dentistry." url="/innerview" />
    </>
  );
}
