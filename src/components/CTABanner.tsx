"use client";

import { motion } from "motion/react";

const BOOKING_URL =
  "https://book2.getweave.com/359c4bec-a0f0-4d62-9ea8-35a008305267/request-appointment?source=WEBSITE";

export function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-primary to-[#0d3b6e] py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,191,165,0.15),transparent_70%)]" />
      <div className="relative mx-auto max-w-4xl px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8"
        >
          Ready to Love Your Smile?
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-teal px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-teal-dark hover:shadow-xl"
          >
            Request Appointment
          </a>
          <a
            href="tel:972-644-3280"
            className="rounded-full border-2 border-white px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-white hover:text-primary"
          >
            Call 972-644-3280
          </a>
        </motion.div>
      </div>
    </section>
  );
}
