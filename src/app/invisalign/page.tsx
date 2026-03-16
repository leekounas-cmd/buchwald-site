"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Testimonials } from "@/components/Testimonials";
import { CTABanner } from "@/components/CTABanner";

const BOOKING_URL =
  "https://book2.getweave.com/359c4bec-a0f0-4d62-9ea8-35a008305267/request-appointment?source=WEBSITE";

const benefits = [
  "Virtually invisible — most people won't notice",
  "Removable — eat and brush like normal",
  "Many patients see results in 6 months",
  "No metal brackets or wires",
  "Custom-made for your teeth",
  "Advanced Invisalign training by Dr. Buchwald",
];

const steps = [
  { step: "01", title: "Free Consult", description: "We evaluate your smile, take digital impressions, and discuss your goals." },
  { step: "02", title: "Custom Plan", description: "Your personalized treatment plan shows you exactly how your teeth will move." },
  { step: "03", title: "Wear Aligners", description: "Swap trays every 1–2 weeks. Quick check-ins to monitor progress." },
  { step: "04", title: "Love Your Smile", description: "Treatment complete. Show off that new smile." },
];

export default function InvisalignPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <p className="text-primary text-sm font-bold uppercase tracking-wider mb-3">Invisalign Provider</p>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-[1.1] mb-5">
                Straighten Your Smile with Clear Aligners
              </h1>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                Custom-made, virtually invisible aligners that fit your lifestyle. No metal. No wires. Just a straighter smile you&apos;re proud to show off.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-primary px-7 py-3.5 text-sm font-bold text-white hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/25 transition-all text-center">
                  Book Free Consult
                </a>
                <a href="tel:972-644-3280" className="rounded-lg bg-gray-100 px-7 py-3.5 text-sm font-semibold text-gray-900 hover:bg-gray-200 transition-all text-center">
                  Call (972) 644-3280
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 sm:py-24 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Why Invisalign?</h2>
          </motion.div>
          <div className="grid gap-3 sm:grid-cols-2">
            {benefits.map((b, i) => (
              <motion.div key={b} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} className="flex items-start gap-3 bg-white rounded-xl p-5">
                <span className="h-2 w-2 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                <p className="text-gray-700 text-[15px] font-medium">{b}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="mx-auto max-w-5xl px-4">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">How It Works</h2>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <motion.div key={s.step} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="bg-gray-50 rounded-xl p-6">
                <p className="text-primary text-3xl font-extrabold mb-2">{s.step}</p>
                <h3 className="font-bold text-gray-900 mb-1">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Promo */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-orange text-sm font-bold uppercase tracking-wider mb-3">Limited Time Offer</p>
            <p className="text-6xl sm:text-8xl font-extrabold text-gray-900 mb-2">$1,000 OFF</p>
            <p className="text-xl font-bold text-gray-900 mb-3">Invisalign Treatment</p>
            <p className="text-gray-400 text-base max-w-md mx-auto mb-8">
              Schedule your free consultation and take the first step toward a straighter smile.
            </p>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-block rounded-lg bg-primary px-7 py-3.5 text-sm font-bold text-white hover:bg-primary-dark transition-all">
              Claim Your Offer
            </a>
          </motion.div>
        </div>
      </section>

      <Testimonials />
      <CTABanner />
    </>
  );
}
