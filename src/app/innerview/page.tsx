"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CTABanner } from "@/components/CTABanner";

const BOOKING_URL =
  "https://book2.getweave.com/359c4bec-a0f0-4d62-9ea8-35a008305267/request-appointment?source=WEBSITE";

const benefits = [
  "Helps spot small issues earlier — cracks, wear, inflammation",
  "More personalized care tailored to what your mouth needs",
  "Track changes from visit to visit to monitor progress",
  "Better conversations — you understand the 'why' behind any plan",
  "Quick, comfortable, and non-invasive — no needles, no discomfort",
];

const faqs = [
  { q: "What is InnerView?", a: "InnerView is a quick dental imaging scan that gives a detailed view of your teeth and bite so we can plan your care more precisely." },
  { q: "Does InnerView hurt?", a: "No. It's comfortable, non-invasive, and only takes a few minutes." },
  { q: "Why do you recommend InnerView?", a: "It helps us show you what we see, catch concerns earlier, and personalize your care." },
  { q: "Do I get to see the images?", a: "Yes. We review everything with you and explain it in simple terms." },
  { q: "How long does it take?", a: "Usually just a few minutes, and we can go over the results the same day." },
  { q: "Is InnerView safe?", a: "Yes. It's a non-invasive scan used to help us evaluate and plan with better detail." },
  { q: "Is InnerView only for new patients?", a: "Not at all. It's helpful for new patients, routine visits, and anyone who wants a clearer picture of their oral health." },
  { q: "Will InnerView replace X-rays?", a: "InnerView is a different type of imaging. If X-rays are needed, we'll let you know and explain why." },
  { q: "How much does InnerView cost?", a: "It depends on your visit and insurance. We'll always review any fees before we start." },
  { q: "Can InnerView help with bite or grinding issues?", a: "Yes. It can help us evaluate wear patterns and bite-related concerns so we can recommend the right next step." },
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
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="max-w-2xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <p className="text-primary text-sm font-bold uppercase tracking-wider mb-3">Advanced Technology</p>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-[1.1] mb-5">
                See Your Smile in Full Detail
              </h1>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                InnerView helps us capture a detailed view of your teeth and bite so we can explain what we see, spot concerns earlier, and personalize your care.
              </p>
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-primary px-7 py-3.5 text-sm font-bold text-white hover:bg-primary-dark transition-all">
                Request Appointment
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-gray-50">
        <div className="mx-auto max-w-3xl px-4">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">How InnerView Helps</h2>
          </motion.div>
          <div className="space-y-3">
            {benefits.map((b, i) => (
              <motion.div key={b} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} className="flex items-start gap-3 bg-white rounded-xl p-5">
                <span className="h-2 w-2 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                <p className="text-gray-700 text-[15px] font-medium">{b}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
    </>
  );
}
