"use client";

import { motion } from "motion/react";
import { Testimonials } from "@/components/Testimonials";
import { CTABanner } from "@/components/CTABanner";

const BOOKING_URL =
  "https://book2.getweave.com/359c4bec-a0f0-4d62-9ea8-35a008305267/request-appointment?source=WEBSITE";

const benefits = [
  {
    title: "Virtually Invisible",
    description: "Clear aligners that are nearly undetectable. Straighten your teeth without anyone knowing.",
  },
  {
    title: "Removable Trays",
    description: "Eat, drink, brush, and floss like normal. Pop them out when you need to.",
  },
  {
    title: "Faster Results",
    description: "Many patients see results in as little as 6 months with custom treatment plans.",
  },
  {
    title: "Expert Care",
    description: "Dr. Buchwald has advanced Invisalign training. You are in experienced hands.",
  },
];

const steps = [
  { step: "01", title: "Free Consultation", description: "We evaluate your smile and discuss your goals." },
  { step: "02", title: "Custom Plan", description: "Digital impressions create your personalized treatment plan." },
  { step: "03", title: "Wear Your Aligners", description: "Swap trays every 1–2 weeks as your teeth shift." },
  { step: "04", title: "Love Your Smile", description: "Reveal your new, straighter smile." },
];

export default function InvisalignPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dark pt-16 pb-20 sm:pt-20 sm:pb-28">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">
              Invisalign Provider
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
              Straighten Your Smile with Invisalign
            </h1>
            <p className="text-white/50 text-base sm:text-lg max-w-xl mx-auto mb-8">
              Clear, comfortable, and custom-made aligners that fit your lifestyle. No metal brackets. No wires.
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-primary-dark"
            >
              Book Free Consult
            </a>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">
              Why Invisalign
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-dark">
              The Clear Choice for a Better Smile
            </h2>
          </motion.div>

          <div className="grid gap-3 sm:grid-cols-2">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="rounded-xl bg-light border border-gray-light p-6"
              >
                <h3 className="font-heading text-lg font-semibold text-dark mb-1.5">
                  {b.title}
                </h3>
                <p className="text-gray text-sm leading-relaxed">{b.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 sm:py-24 bg-light">
        <div className="mx-auto max-w-4xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-dark">
              How It Works
            </h2>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-xl bg-white p-6 border border-gray-light"
              >
                <p className="text-primary font-heading text-2xl font-bold mb-2">{s.step}</p>
                <h3 className="font-semibold text-dark text-sm mb-1">{s.title}</h3>
                <p className="text-gray text-xs leading-relaxed">{s.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Promo */}
      <section className="bg-dark py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-orange text-xs font-semibold uppercase tracking-wider mb-3">
              Limited Time Offer
            </p>
            <p className="font-heading text-5xl sm:text-7xl font-bold text-white mb-3">
              $1,000 OFF
            </p>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white/80 mb-4">
              Invisalign Treatment
            </h2>
            <p className="text-white/40 text-sm max-w-md mx-auto mb-8">
              Schedule your free consultation today and take the first step toward a straighter smile.
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-primary-dark"
            >
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
