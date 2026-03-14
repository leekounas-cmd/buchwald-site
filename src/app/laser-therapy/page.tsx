"use client";

import { motion } from "motion/react";
import { Testimonials } from "@/components/Testimonials";
import { CTABanner } from "@/components/CTABanner";

const benefits = [
  {
    emoji: "🎯",
    title: "Minimally Invasive",
    description:
      "Laser therapy targets only the affected tissue, preserving more of your healthy tooth structure and gum tissue.",
  },
  {
    emoji: "😌",
    title: "Less Discomfort",
    description:
      "Most patients experience significantly less pain compared to traditional methods. Many procedures require little to no anesthesia.",
  },
  {
    emoji: "🔬",
    title: "Enhanced Precision",
    description:
      "Advanced laser technology allows Dr. Buchwald to work with pinpoint accuracy for cleaner, more effective treatment.",
  },
  {
    emoji: "⚡",
    title: "Faster Recovery",
    description:
      "Laser-treated areas typically heal quicker with less swelling and bleeding, so you can get back to your day sooner.",
  },
];

export default function LaserTherapyPage() {
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
              Advanced Treatment
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Advanced Laser Therapy
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Cutting-edge laser technology for gentler, more precise dental treatments with faster recovery times.
            </p>
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
              Benefits
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-dark">
              Why Patients Prefer Laser Treatment
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

      <Testimonials />
      <CTABanner />
    </>
  );
}
