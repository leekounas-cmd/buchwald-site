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
    description: "Walk in, relax, and walk out with a dramatically brighter smile in just one visit. Professional-grade treatment under expert supervision.",
    features: ["One-visit results", "Professional-grade formula", "Supervised by our team"],
  },
  {
    title: "Custom Take-Home Trays",
    description: "Prefer to whiten on your own schedule? Custom-fitted trays and professional whitening gel so you can brighten at home.",
    features: ["Custom-fitted trays", "Professional-grade gel", "Whiten at your pace"],
  },
];

export default function TeethWhiteningPage() {
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
              Cosmetic Dentistry
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
              Professional Teeth Whitening
            </h1>
            <p className="text-white/50 text-base sm:text-lg max-w-xl mx-auto mb-8">
              Brighten your smile with safe, effective whitening treatments customized to your needs.
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-primary-dark"
            >
              Book Whitening Consult
            </a>
          </motion.div>
        </div>
      </section>

      {/* Options */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">
              Your Options
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-dark">
              Two Ways to a Brighter Smile
            </h2>
          </motion.div>

          <div className="grid gap-3 md:grid-cols-2">
            {options.map((opt, i) => (
              <motion.div
                key={opt.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-xl bg-light border border-gray-light p-7"
              >
                <h3 className="font-heading text-xl font-semibold text-dark mb-2">
                  {opt.title}
                </h3>
                <p className="text-gray text-sm leading-relaxed mb-5">{opt.description}</p>
                <ul className="space-y-2">
                  {opt.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-dark">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 bg-light">
        <div className="mx-auto max-w-4xl px-4">
          <div className="grid gap-10 md:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">
                Expected Results
              </p>
              <p className="font-heading text-6xl sm:text-7xl font-bold text-dark mb-1">
                5–7
              </p>
              <p className="font-heading text-xl font-semibold text-dark mb-3">
                Shade Improvement
              </p>
              <p className="text-gray text-sm leading-relaxed">
                Our professional whitening treatments can lighten your teeth by 5 to 7 shades, giving you a noticeably brighter and more confident smile.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <Image
                src="/images/tooth-icon.svg"
                alt="Tooth illustration"
                width={200}
                height={240}
                className="w-40 sm:w-48 h-auto"
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
