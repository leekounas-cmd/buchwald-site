"use client";

import { motion } from "motion/react";

const BOOKING_URL =
  "https://book2.getweave.com/359c4bec-a0f0-4d62-9ea8-35a008305267/request-appointment?source=WEBSITE";

export function CTABanner() {
  return (
    <section className="bg-dark py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Ready to Love Your Smile?
          </h2>
          <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto">
            New patients welcome. Request an appointment online or give us a call.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-primary px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/20"
            >
              Request Appointment
            </a>
            <a
              href="tel:972-644-3280"
              className="rounded-xl bg-white/5 border border-white/10 px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-white/10"
            >
              Call (972) 644-3280
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
