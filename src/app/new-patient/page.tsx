"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CTABanner } from "@/components/CTABanner";
import { FAQSchema } from "@/components/FAQSchema";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { ServiceSchema } from "@/components/ServiceSchema";
import { StatRow, Highlight, Checklist, NumberedList } from "@/components/ContentBlocks";

const steps = [
  { title: "Check-In & Paperwork", desc: "Arrive a few minutes early. We keep forms quick and simple so you can get settled in." },
  { title: "Meet the Team", desc: "You'll meet Dr. Buchwald and our team. We'll learn about your history, concerns, and goals." },
  { title: "Comprehensive Exam", desc: "Digital X-rays, oral cancer screening, and a thorough check of your teeth, gums, and bite." },
  { title: "Your Care Plan", desc: "Dr. Buchwald walks you through everything — no surprises, no pressure. Just a clear plan forward." },
];

const bringList = [
  "Photo ID",
  "Insurance card",
  "List of current medications",
  "Dental records from your previous dentist (if available)",
  "Any questions you have for us",
];

const faqs = [
  { q: "Do I need insurance?", a: "Nope. We welcome patients with and without insurance. We offer affordable payment options and will always be upfront about costs before any treatment." },
  { q: "How long is the first visit?", a: "Plan for about 60–90 minutes. We take our time with new patients to make sure we get a complete picture of your oral health." },
  { q: "Can I bring my kids?", a: "Absolutely. We're a family practice and love seeing patients of all ages. You can schedule appointments for the whole family on the same day." },
  { q: "What if I haven't been to a dentist in years?", a: "No judgment — seriously. We see patients in every situation and our only goal is to help you move forward with a plan that works for you." },
  { q: "Do you offer payment plans?", a: "Yes. We offer flexible payment options so cost never gets in the way of your care. Ask our team about what works best for your situation." },
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

export default function NewPatientPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-10 sm:py-16 bg-white">
        <div className="mx-auto max-w-5xl px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center mb-8">
            <p className="text-primary text-sm font-bold uppercase tracking-wider mb-3">Welcome to Buchwald Family Dentistry</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-[1.1]">Your First Visit</h1>
          </motion.div>

          <StatRow stats={[
            { value: "$149", label: "New Patient Special" },
            { value: "60–90 min", label: "First Visit" },
            { value: "4.9★", label: "Google Reviews" },
            { value: "Free", label: "Lifetime Warranty" },
          ]} />

          <Highlight>We know switching dentists can feel like a big deal. Our goal is to make you feel welcome from the moment you walk in — no judgment, no pressure.</Highlight>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-14 sm:py-18 bg-gray-50">
        <div className="mx-auto max-w-5xl px-4">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">What to Expect</h2>
            <p className="text-gray-400 text-sm mt-1">Your first visit from start to finish.</p>
          </motion.div>
          <NumberedList items={steps} />
        </div>
      </section>

      {/* $149 New Patient Special */}
      <section className="py-14 sm:py-18 bg-white">
        <div className="mx-auto max-w-3xl px-4">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-primary/10 rounded-2xl p-8 sm:p-12 text-center">
            <p className="text-primary text-sm font-bold uppercase tracking-wider mb-3">Limited-Time Offer</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">$149 New Patient Special</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">Professional cleaning, comprehensive exam, and digital X-rays — all for just $149. No insurance required.</p>
            <Checklist items={["Professional cleaning", "Comprehensive exam", "Digital X-rays", "Free lifetime warranty on all dental work"]} />
          </motion.div>
        </div>
      </section>

      {/* What to Bring */}
      <section className="py-14 sm:py-18 bg-gray-50">
        <div className="mx-auto max-w-5xl px-4">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">What to Bring</h2>
          </motion.div>
          <Checklist items={bringList} />
        </div>
      </section>

      {/* Office Details */}
      <section className="py-14 sm:py-18 bg-white">
        <div className="mx-auto max-w-5xl px-4">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Office Details</h2>
          </motion.div>
          <StatRow stats={[
            { value: "300 N Coit Rd #245", label: "Richardson, TX 75080" },
            { value: "Mon–Thu", label: "7:00 AM – 3:00 PM" },
            { value: "(972) 644-3280", label: "Call or Text" },
          ]} />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 sm:py-18 bg-gray-50">
        <div className="mx-auto max-w-2xl px-4">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Common Questions</h2>
          </motion.div>
          <div className="bg-white rounded-xl p-6">
            {faqs.map((faq) => <FAQItem key={faq.q} q={faq.q} a={faq.a} />)}
          </div>
        </div>
      </section>

      <CTABanner />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={[{ name: "New Patient", href: "/new-patient" }]} />
      <ServiceSchema name="New Patient Visit" description="$149 new patient cleaning, exam, and X-rays at Buchwald Family Dentistry in Richardson, TX. Serving Plano, Allen, and Garland." url="/new-patient" />
    </>
  );
}
