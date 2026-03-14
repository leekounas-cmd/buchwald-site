"use client";

import { motion } from "motion/react";
import { Testimonials } from "@/components/Testimonials";
import { CTABanner } from "@/components/CTABanner";

const BOOKING_URL =
  "https://book2.getweave.com/359c4bec-a0f0-4d62-9ea8-35a008305267/request-appointment?source=WEBSITE";

const services = [
  { title: "Dental Implants", description: "Permanent, natural-looking replacements for missing teeth that function just like the real thing." },
  { title: "Dental Crowns", description: "Custom-made caps that restore the shape, size, and strength of a damaged tooth." },
  { title: "Dental Bridges", description: "Fixed prosthetics that fill the gap left by one or more missing teeth." },
  { title: "Dentures", description: "Full or partial dentures customized for a comfortable fit and natural appearance." },
  { title: "Inlays & Onlays", description: "Custom restorations for teeth that need more than a filling but less than a crown." },
  { title: "Emergency Repair", description: "Fast, effective solutions for chipped, cracked, or knocked-out teeth when you need help now." },
];

export default function RestorativePage() {
  return (
    <>
      <section className="bg-dark pt-16 pb-20 sm:pt-20 sm:pb-28">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">
              Rebuild &amp; Strengthen
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
              Restorative Dentistry
            </h1>
            <p className="text-white/50 text-base sm:text-lg max-w-xl mx-auto mb-8">
              Implants, crowns, bridges, and more — we rebuild smiles that look and feel natural.
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-primary-dark"
            >
              Request Appointment
            </a>
          </motion.div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-dark">
              What We Offer
            </h2>
          </motion.div>

          <div className="grid gap-3 sm:grid-cols-2">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-xl bg-light border border-gray-light p-6"
              >
                <h3 className="font-semibold text-dark mb-1.5">{s.title}</h3>
                <p className="text-gray text-sm leading-relaxed">{s.description}</p>
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
