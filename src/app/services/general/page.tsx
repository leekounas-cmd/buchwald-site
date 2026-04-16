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

const serviceItems = [
  "Fillings — tooth-colored composite, no metal or mercury",
  "Crowns — custom caps that restore strength and appearance",
  "Bridges — fixed replacements for missing teeth",
  "Root Canals — save infected teeth with modern, comfortable treatment",
  "Extractions — safe, gentle removal including wisdom teeth",
  "Gum Treatment — periodontal care to prevent disease progression",
];

const concerns = [
  { title: "\"Will it hurt?\"", desc: "Modern anesthetics and gentle techniques. Most patients say it was easier than expected." },
  { title: "\"How much will it cost?\"", desc: "We're upfront about pricing before treatment. Lee will verify your insurance and walk you through options." },
  { title: "\"I haven't been in years\"", desc: "No lectures. We'll assess where you are and build a plan to get you back on track." },
  { title: "\"Do I really need this?\"", desc: "We'll show you what we see and explain why we're recommending it. No surprises, no pressure." },
];

const faqs = [
  { q: "How do I know if I need a filling or a crown?", a: "It depends on how much of the tooth is damaged. Small cavities usually need a filling. If the damage is larger or the tooth is cracked, a crown provides better long-term protection. We'll show you and explain our recommendation." },
  { q: "Are root canals painful?", a: "Modern root canals are nothing like the old reputation. With today's anesthetics and techniques, most patients say it feels similar to getting a filling. The infection causing the pain is what we're treating." },
  { q: "What happens if I don't treat a cavity?", a: "Untreated cavities grow. What starts as a small filling can become a crown, a root canal, or even an extraction. Catching it early saves you time, money, and discomfort." },
  { q: "How long do crowns and fillings last?", a: "Composite fillings typically last 5–10 years. Crowns can last 10–15+ years with good care. We use high-quality materials and precise techniques to maximize longevity." },
  { q: "Do you offer payment plans?", a: "Yes. We offer flexible payment options so cost doesn't stand in the way of the care you need. Ask Lee about your options." },
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
      <section className="py-10 sm:py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center">
            <p className="text-primary text-sm font-bold uppercase tracking-wider mb-3">Everyday Dental Health</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-[1.1] mb-8">General Dentistry</h1>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.1 }} className="mb-10">
            <Image src="/images/stock/general.jpg" alt="Dr. Buchwald examining a patient while reviewing X-rays at Buchwald Family Dentistry" width={1200} height={600} className="rounded-2xl w-full object-cover aspect-video" priority />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-center max-w-3xl mx-auto">
            <p className="text-gray-500 text-lg leading-relaxed">From fillings to root canals — the care you need to stay healthy and comfortable. Fixed right, the first time.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="mx-auto max-w-3xl px-4">
          <StatRow stats={[
            { value: "5-10yr", label: "Filling lifespan" },
            { value: "10-15yr", label: "Crown lifespan" },
            { value: "95%", label: "Root canal success" },
          ]} />

          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">What We Offer</h2>
            <Checklist items={serviceItems} />
          </motion.div>

          <Highlight>A small cavity today is a $200 filling. Left untreated, it becomes a $1,200 crown or a $2,000 root canal. Catching problems early saves you time, money, and pain.</Highlight>
        </div>
      </section>

      {/* We Hear You */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="mx-auto max-w-3xl px-4">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2">We Hear You</h2>
            <p className="text-gray-400 text-sm mb-6">Common concerns — and how we handle them.</p>
            <NumberedList items={concerns} />
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-16 bg-gray-50">
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
