"use client";

import { motion } from "motion/react";
import { Testimonials } from "@/components/Testimonials";
import { CTABanner } from "@/components/CTABanner";

const BOOKING_URL = "https://book2.getweave.com/359c4bec-a0f0-4d62-9ea8-35a008305267/request-appointment?source=WEBSITE";

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

export default function CleaningPage() {
  return (
    <>
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="max-w-2xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <p className="text-primary text-sm font-bold uppercase tracking-wider mb-3">Preventive Care</p>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-[1.1] mb-5">Dental Cleaning &amp; Exam</h1>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">The foundation of a healthy smile. Routine cleanings and exams keep your teeth strong and catch problems early.</p>
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-primary px-7 py-3.5 text-sm font-bold text-white hover:bg-primary-dark transition-all">Schedule Your Cleaning</a>
            </motion.div>
          </div>
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

      <section className="py-20 sm:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2">Popular Add-Ons</h2>
            <p className="text-gray-400 text-sm">Enhance your cleaning with these premium treatments.</p>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-3">
            {addons.map((a, i) => (
              <motion.div key={a.title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="bg-gray-50 rounded-xl p-6">
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

      <Testimonials />
      <CTABanner />
    </>
  );
}
