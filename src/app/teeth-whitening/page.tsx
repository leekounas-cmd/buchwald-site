"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Testimonials } from "@/components/Testimonials";
import { CTABanner } from "@/components/CTABanner";

const BOOKING_URL =
  "https://book2.getweave.com/359c4bec-a0f0-4d62-9ea8-35a008305267/request-appointment?source=WEBSITE";

const options = [
  {
    title: "In-Office Whitening",
    description:
      "Walk in, relax, and walk out with a dramatically brighter smile in just one visit. Our professional-grade treatment delivers instant results under expert supervision.",
    features: ["One-visit results", "Professional-grade formula", "Supervised by our team"],
  },
  {
    title: "Custom Take-Home Trays",
    description:
      "Prefer to whiten on your own schedule? We create custom-fitted trays and provide professional whitening gel so you can brighten your smile from the comfort of home.",
    features: ["Custom-fitted trays", "Professional-grade gel", "Whiten at your pace"],
  },
];

export default function TeethWhiteningPage() {
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
              Cosmetic Dentistry
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Professional Teeth Whitening
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10">
              Brighten your smile with safe, effective whitening treatments customized to your needs.
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-teal px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-teal-dark hover:shadow-xl"
            >
              Book Whitening Consult
            </a>
          </motion.div>
        </div>
      </section>

      {/* Options */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-teal text-sm font-semibold tracking-wider uppercase mb-3">
              Your Options
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-dark">
              Two Ways to a Brighter Smile
            </h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            {options.map((opt, i) => (
              <motion.div
                key={opt.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="rounded-2xl bg-light-bg p-8 sm:p-10 transition-shadow hover:shadow-xl"
              >
                <h3 className="font-heading text-2xl font-semibold text-dark mb-3">
                  {opt.title}
                </h3>
                <p className="text-gray text-sm leading-relaxed mb-6">
                  {opt.description}
                </p>
                <ul className="space-y-2">
                  {opt.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-dark">
                      <span className="text-teal">✓</span> {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 bg-light-bg">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <p className="text-teal text-sm font-semibold tracking-wider uppercase mb-3">
                Expected Results
              </p>
              <p className="font-heading text-7xl sm:text-8xl font-bold text-primary mb-2">
                5–7
              </p>
              <p className="font-heading text-2xl font-semibold text-dark mb-4">
                Shade Improvement
              </p>
              <p className="text-gray leading-relaxed">
                Our professional whitening treatments can lighten your teeth by 5 to 7 shades, giving you a noticeably brighter and more confident smile.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <Image
                src="/images/tooth-icon.png"
                alt="Tooth illustration"
                width={300}
                height={300}
                className="w-48 sm:w-64 h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <Testimonials />
      <CTABanner />
    </>
  );
}
