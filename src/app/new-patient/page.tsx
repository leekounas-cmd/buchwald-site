"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CTABanner } from "@/components/CTABanner";
import { FAQSchema } from "@/components/FAQSchema";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { ServiceSchema } from "@/components/ServiceSchema";

const steps = [
  { step: "01", title: "Check-In & Paperwork", text: "Arrive a few minutes early to fill out your new patient forms. We keep it quick and simple so you can get settled in." },
  { step: "02", title: "Meet the Team", text: "You'll meet Dr. Buchwald and our team. We'll learn about your dental history, any concerns, and what matters most to you." },
  { step: "03", title: "Comprehensive Exam", text: "A full exam including digital X-rays, oral cancer screening, and a thorough check of your teeth, gums, and bite." },
  { step: "04", title: "Your Care Plan", text: "Dr. Buchwald walks you through everything he found and lays out a personalized plan — no surprises, no pressure." },
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
      <section className="py-10 sm:py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center">
            <p className="text-primary text-sm font-bold uppercase tracking-wider mb-3">Welcome to Buchwald Family Dentistry</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-[1.1] mb-8">Your First Visit</h1>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-center max-w-3xl mx-auto">
            <p className="text-gray-500 text-lg leading-relaxed">We know switching dentists or visiting one for the first time can feel like a big deal. Our goal is to make you feel welcome from the moment you walk in.</p>
          </motion.div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 sm:py-24 bg-gray-50">
        <div className="mx-auto max-w-5xl px-4">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">What to Expect</h2>
            <p className="text-gray-400 text-sm mt-2">Your first visit from start to finish.</p>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <motion.div key={s.step} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="bg-white rounded-xl p-6">
                <p className="text-primary text-3xl font-extrabold mb-2">{s.step}</p>
                <h3 className="font-bold text-gray-900 mb-1">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* $129 New Patient Special */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="mx-auto max-w-3xl px-4">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-primary/10 rounded-2xl p-8 sm:p-12 text-center">
            <p className="text-primary text-sm font-bold uppercase tracking-wider mb-3">Limited-Time Offer</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">$129 New Patient Special</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">Get a professional cleaning, comprehensive exam, and digital X-rays — all for just $129. No insurance required.</p>
            <div className="inline-flex flex-col sm:flex-row gap-3 text-sm text-gray-500">
              <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-primary flex-shrink-0" />Professional cleaning</span>
              <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-primary flex-shrink-0" />Comprehensive exam</span>
              <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-primary flex-shrink-0" />Digital X-rays</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What to Bring */}
      <section className="py-20 sm:py-24 bg-gray-50">
        <div className="mx-auto max-w-3xl px-4">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">What to Bring</h2>
          </motion.div>
          <div className="space-y-3">
            {bringList.map((item, i) => (
              <motion.div key={item} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} className="flex items-start gap-3 bg-white rounded-xl p-5">
                <span className="h-2 w-2 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                <p className="text-gray-700 text-[15px] font-medium">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Details */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Office Details</h2>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-3">
            <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0 }} className="bg-gray-50 rounded-xl p-6 text-center">
              <h3 className="font-bold text-gray-900 mb-2">Address</h3>
              <p className="text-gray-500 text-sm leading-relaxed">300 N Coit Rd #245<br />Richardson, TX 75080</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.06 }} className="bg-gray-50 rounded-xl p-6 text-center">
              <h3 className="font-bold text-gray-900 mb-2">Hours</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Monday – Thursday<br />7:00 AM – 3:00 PM</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.12 }} className="bg-gray-50 rounded-xl p-6 text-center">
              <h3 className="font-bold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-500 text-sm leading-relaxed"><a href="tel:9726443280" className="text-primary font-semibold hover:underline">(972) 644-3280</a></p>
            </motion.div>
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

      <CTABanner />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={[{ name: "New Patient", href: "/new-patient" }]} />
      <ServiceSchema name="New Patient Visit" description="$129 new patient cleaning, exam, and X-rays at Buchwald Family Dentistry in Richardson, TX. Serving Plano, Allen, and Garland." url="/new-patient" />
    </>
  );
}
