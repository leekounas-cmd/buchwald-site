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

const services = [
  { title: "Fillings", description: "Tooth-colored composite fillings that blend naturally. No metal, no mercury — just a strong, invisible repair." },
  { title: "Crowns", description: "Custom caps that restore strength and appearance to damaged teeth. Made to match your natural smile." },
  { title: "Bridges", description: "Fixed replacements for missing teeth that look and function naturally — no removable parts." },
  { title: "Root Canals", description: "Save an infected tooth with modern treatment. We use advanced techniques that make the process quicker and more comfortable than you'd expect." },
  { title: "Extractions", description: "Safe, gentle removal of teeth beyond repair, including wisdom teeth. We prioritize your comfort throughout." },
  { title: "Gum Treatment", description: "Periodontal care to treat and prevent gum disease before it affects your teeth and overall health." },
];

const concerns = [
  { title: "\"Will it hurt?\"", text: "We use modern anesthetics, gentle techniques, and take our time. Most patients say it was way easier than they expected." },
  { title: "\"How much will it cost?\"", text: "We're upfront about pricing before any treatment begins. Denielle will verify your insurance and walk you through your options." },
  { title: "\"I haven't been in years\"", text: "You're not alone — and we're not here to lecture. We'll assess where you are and create a plan to get you back on track." },
  { title: "\"Do I really need this?\"", text: "We'll always explain why we're recommending something and show you what we see. No surprises, no pressure." },
];

const faqs = [
  { q: "How do I know if I need a filling or a crown?", a: "It depends on how much of the tooth is damaged. Small cavities usually need a filling. If the damage is larger or the tooth is cracked, a crown provides better long-term protection. We'll show you and explain our recommendation." },
  { q: "Are root canals painful?", a: "Modern root canals are nothing like the old reputation. With today's anesthetics and techniques, most patients say it feels similar to getting a filling. The infection causing the pain is what we're treating." },
  { q: "What happens if I don't treat a cavity?", a: "Untreated cavities grow. What starts as a small filling can become a crown, a root canal, or even an extraction. Catching it early saves you time, money, and discomfort." },
  { q: "How long do crowns and fillings last?", a: "Composite fillings typically last 5–10 years. Crowns can last 10–15+ years with good care. We use high-quality materials and precise techniques to maximize longevity." },
  { q: "Do you offer payment plans?", a: "Yes. We offer flexible payment options so cost doesn't stand in the way of the care you need. Ask Denielle about your options." },
  { q: "What are the signs of gum disease?", a: "Bleeding when brushing, red or swollen gums, persistent bad breath, and receding gum lines are common signs. Early-stage gum disease is very treatable — that's why regular visits matter." },
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

export default function GeneralPage() {
  return (
    <>
      <section className="py-10 sm:py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center">
            <p className="text-primary text-sm font-bold uppercase tracking-wider mb-3">Everyday Dental Health</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-[1.1] mb-8">General Dentistry</h1>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.1 }} className="mb-10">
            <Image src="/images/stock/general.jpg" alt="Dr. Buchwald examining a patient while reviewing X-rays at Buchwald Family Dentistry" width={1200} height={600} className="rounded-2xl w-full object-cover aspect-video" priority />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-center max-w-3xl mx-auto">
            <p className="text-gray-500 text-lg leading-relaxed">From fillings to root canals — the care you need to stay healthy and comfortable. We fix problems the right way, the first time.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">What We Offer</h2>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-2">
            {services.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} className="bg-white rounded-xl p-6">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                  <h3 className="font-bold text-gray-900">{s.title}</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{s.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* We Get It */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">We Hear You</h2>
            <p className="text-gray-400 text-sm mt-2">Common concerns — and how we handle them.</p>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-2">
            {concerns.map((c, i) => (
              <motion.div key={c.title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-1.5">{c.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{c.text}</p>
              </motion.div>
            ))}
          </div>
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

      <RelatedServices keys={["cleaning", "restorative"]} />
      <Testimonials />
      <CTABanner />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={[{ name: "Services", href: "/services" }, { name: "General Dentistry", href: "/services/general" }]} />
      <ServiceSchema name="General Dentistry" description="Fillings, crowns, root canals, extractions, and gum treatment at Buchwald Family Dentistry in Richardson, TX." url="/services/general" />
    </>
  );
}
