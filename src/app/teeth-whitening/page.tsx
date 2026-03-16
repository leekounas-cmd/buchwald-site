"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Testimonials } from "@/components/Testimonials";
import { CTABanner } from "@/components/CTABanner";

const BOOKING_URL =
  "https://book2.getweave.com/359c4bec-a0f0-4d62-9ea8-35a008305267/request-appointment?source=WEBSITE";

export default function TeethWhiteningPage() {
  return (
    <>
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="max-w-2xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <p className="text-primary text-sm font-bold uppercase tracking-wider mb-3">Cosmetic Dentistry</p>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-[1.1] mb-5">
                Professional Teeth Whitening
              </h1>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                Brighten your smile with safe, effective whitening treatments customized to your needs. In-office or at home.
              </p>
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-primary px-7 py-3.5 text-sm font-bold text-white hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/25 transition-all">
                Book Whitening Consult
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Options */}
      <section className="py-20 sm:py-24 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Two Ways to a Brighter Smile</h2>
          </motion.div>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                title: "In-Office Whitening",
                description: "Walk in, relax, walk out dramatically brighter. Professional-grade treatment in a single visit.",
                features: ["One-visit results", "Professional-grade formula", "Supervised by our team"],
              },
              {
                title: "Custom Take-Home Trays",
                description: "Custom-fitted trays and professional gel so you can whiten on your own schedule from home.",
                features: ["Custom-fitted trays", "Professional-grade gel", "Whiten at your pace"],
              },
            ].map((opt, i) => (
              <motion.div key={opt.title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="bg-white rounded-xl p-7">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{opt.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{opt.description}</p>
                <ul className="space-y-2">
                  {opt.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-gray-700 font-medium">
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
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4">
          <div className="grid gap-10 md:grid-cols-2 items-center">
            <motion.div initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="text-primary text-sm font-bold uppercase tracking-wider mb-3">Expected Results</p>
              <p className="text-7xl sm:text-8xl font-extrabold text-gray-900 mb-1">5–7</p>
              <p className="text-xl font-bold text-gray-900 mb-3">Shade Improvement</p>
              <p className="text-gray-500 text-base leading-relaxed">
                Our professional treatments can lighten your teeth by 5 to 7 shades — a noticeably brighter, more confident smile.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex justify-center">
              <Image src="/images/tooth-icon.svg" alt="Tooth" width={200} height={240} className="w-40 sm:w-48 h-auto" />
            </motion.div>
          </div>
        </div>
      </section>

      <Testimonials />
      <CTABanner />
    </>
  );
}
