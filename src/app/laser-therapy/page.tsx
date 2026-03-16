"use client";

import { motion } from "motion/react";
import { Testimonials } from "@/components/Testimonials";
import { CTABanner } from "@/components/CTABanner";

const BOOKING_URL =
  "https://book2.getweave.com/359c4bec-a0f0-4d62-9ea8-35a008305267/request-appointment?source=WEBSITE";

const benefits = [
  "Minimally invasive — no drills, no buzz",
  "Less discomfort — many procedures need little to no anesthesia",
  "Enhanced precision — targets damaged tissue without harming healthy gums",
  "Faster recovery — less swelling and bleeding",
  "Delivered by our experienced hygiene team using proven technology",
];

export default function LaserTherapyPage() {
  return (
    <>
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="max-w-2xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <p className="text-primary text-sm font-bold uppercase tracking-wider mb-3">Advanced Treatment</p>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-[1.1] mb-5">
                Advanced Laser Therapy
              </h1>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                Faster recovery, less discomfort, and stronger oral health — all without traditional drills and needles.
              </p>
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-primary px-7 py-3.5 text-sm font-bold text-white hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/25 transition-all">
                Book Free Consult
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-gray-50">
        <div className="mx-auto max-w-3xl px-4">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Why Patients Prefer Laser</h2>
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

      {/* Mid CTA */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3">
              Curious if laser therapy is right for you?
            </h2>
            <p className="text-gray-500 mb-6">Book a free consult and we&apos;ll walk you through it.</p>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-block rounded-lg bg-primary px-7 py-3.5 text-sm font-bold text-white hover:bg-primary-dark transition-all">
              Request Appointment
            </a>
          </motion.div>
        </div>
      </section>

      <Testimonials />
      <CTABanner />
    </>
  );
}
