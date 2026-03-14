"use client";

import { motion } from "motion/react";
import { Testimonials } from "@/components/Testimonials";
import { CTABanner } from "@/components/CTABanner";

const BOOKING_URL =
  "https://book2.getweave.com/359c4bec-a0f0-4d62-9ea8-35a008305267/request-appointment?source=WEBSITE";

const benefits = [
  {
    emoji: "👁️",
    title: "Virtually Invisible",
    description:
      "Clear aligners that are nearly undetectable. Straighten your teeth without anyone knowing.",
  },
  {
    emoji: "🔄",
    title: "Removable Trays",
    description:
      "Eat, drink, brush, and floss like normal. Pop them out when you need to, put them back when you're ready.",
  },
  {
    emoji: "⚡",
    title: "Faster Results",
    description:
      "Many patients see results in as little as 6 months. Custom treatment plans designed for efficiency.",
  },
  {
    emoji: "🏅",
    title: "Expert Care",
    description:
      "Dr. Buchwald has advanced Invisalign training. You're in experienced hands from start to finish.",
  },
];

export default function InvisalignPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-dark via-dark to-primary/30 pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-teal text-sm font-semibold tracking-wider uppercase mb-4">
              Invisalign Provider
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Straighten Your Smile with Invisalign
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10">
              Clear, comfortable, and custom-made aligners that fit your lifestyle. No metal brackets. No wires. Just a straighter smile.
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-teal px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-teal-dark hover:shadow-xl"
            >
              Book Free Consult
            </a>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-teal text-sm font-semibold tracking-wider uppercase mb-3">
              Why Invisalign
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-dark">
              The Clear Choice for a Better Smile
            </h2>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="rounded-2xl bg-light-bg p-8 text-center transition-shadow hover:shadow-xl"
              >
                <span className="text-4xl mb-4 block">{b.emoji}</span>
                <h3 className="font-heading text-lg font-semibold text-dark mb-2">
                  {b.title}
                </h3>
                <p className="text-gray text-sm leading-relaxed">
                  {b.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Promo */}
      <section className="bg-dark py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-teal text-7xl sm:text-8xl lg:text-9xl font-bold font-heading mb-4">
              $1,000 OFF
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
              Invisalign Special
            </h2>
            <p className="text-white/60 text-lg max-w-xl mx-auto mb-10">
              For a limited time, get $1,000 off your Invisalign treatment. Schedule your free consultation today.
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-teal px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-teal-dark hover:shadow-xl"
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
