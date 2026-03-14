"use client";

import { motion } from "motion/react";
import { Testimonials } from "@/components/Testimonials";
import { CTABanner } from "@/components/CTABanner";

const BOOKING_URL =
  "https://book2.getweave.com/359c4bec-a0f0-4d62-9ea8-35a008305267/request-appointment?source=WEBSITE";

const included = [
  { title: "Professional Cleaning", description: "Thorough removal of plaque and tartar to prevent cavities and gum disease." },
  { title: "Comprehensive Exam", description: "Dr. Buchwald evaluates your teeth, gums, bite, and overall oral health." },
  { title: "Digital X-Rays", description: "Low-radiation imaging to detect issues below the surface that aren't visible to the eye." },
  { title: "Oral Cancer Screening", description: "Quick visual and physical screening to catch early signs of oral cancer." },
  { title: "Personalized Care Plan", description: "Custom recommendations based on your specific needs and goals." },
];

const addons = [
  { title: "Fluoride Treatment", price: "$65", description: "Professional enamel strengthening to help prevent decay. Quick, painless, and highly effective." },
  { title: "JET Whitening", price: "$150", description: "Professional-grade teeth whitening using our advanced Prophy Air Polisher — the perfect finishing touch." },
  { title: "InnerView Scan", price: "$30", description: "Digital scanning to identify concealed problems and provide a comprehensive oral health assessment." },
];

export default function CleaningPage() {
  return (
    <>
      <section className="bg-dark pt-16 pb-20 sm:pt-20 sm:pb-28">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">
              Preventive Care
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
              Dental Cleaning &amp; Exam
            </h1>
            <p className="text-white/50 text-base sm:text-lg max-w-xl mx-auto mb-8">
              The foundation of a healthy smile. Routine cleanings and exams keep your teeth strong and catch problems early.
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-primary-dark"
            >
              Schedule Your Cleaning
            </a>
          </motion.div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-dark">
              What&apos;s Included
            </h2>
          </motion.div>

          <div className="space-y-3">
            {included.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-xl bg-light border border-gray-light p-6 flex gap-4 items-start"
              >
                <div className="h-8 w-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-dark mb-1">{item.title}</h3>
                  <p className="text-gray text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-Ons */}
      <section className="py-20 sm:py-24 bg-light">
        <div className="mx-auto max-w-4xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-dark mb-3">
              Popular Add-Ons
            </h2>
            <p className="text-gray text-sm">Enhance your cleaning with these premium treatments.</p>
          </motion.div>

          <div className="grid gap-3 sm:grid-cols-3">
            {addons.map((addon, i) => (
              <motion.div
                key={addon.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="rounded-xl bg-white border border-gray-light p-6"
              >
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="font-semibold text-dark">{addon.title}</h3>
                  <span className="text-primary font-heading font-bold text-lg">{addon.price}</span>
                </div>
                <p className="text-gray text-sm leading-relaxed">{addon.description}</p>
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
