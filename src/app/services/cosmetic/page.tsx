"use client";

import { motion } from "motion/react";
import { Testimonials } from "@/components/Testimonials";
import { CTABanner } from "@/components/CTABanner";

const BOOKING_URL =
  "https://book2.getweave.com/359c4bec-a0f0-4d62-9ea8-35a008305267/request-appointment?source=WEBSITE";

const services = [
  { title: "Porcelain Veneers", description: "Custom-crafted shells that cover the front of your teeth for a flawless, natural-looking smile." },
  { title: "Dental Bonding", description: "Quick, affordable repairs for chips, cracks, and gaps using tooth-colored composite resin." },
  { title: "Smile Makeovers", description: "A personalized combination of treatments designed to completely transform your smile." },
  { title: "Teeth Whitening", description: "Professional in-office and take-home whitening options for a dramatically brighter smile.", href: "/teeth-whitening" },
  { title: "Gum Contouring", description: "Reshape your gum line for a more balanced, symmetrical smile using advanced laser technology." },
  { title: "Tooth Reshaping", description: "Subtle adjustments to tooth length, shape, or surface to create a more uniform look." },
];

export default function CosmeticPage() {
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
              Smile Transformations
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
              Cosmetic Dentistry
            </h1>
            <p className="text-white/50 text-base sm:text-lg max-w-xl mx-auto mb-8">
              Love the way your smile looks. We offer a full range of cosmetic treatments to help you feel confident.
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-primary-dark"
            >
              Book Cosmetic Consult
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
