"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { CTABanner } from "@/components/CTABanner";

const services = [
  {
    title: "Dental Cleaning & Exam",
    description: "Routine cleanings, comprehensive exams, and X-rays to keep your smile healthy and catch issues early.",
    href: "/services/cleaning",
  },
  {
    title: "General Dentistry",
    description: "Fillings, crowns, bridges, root canals, extractions, and everyday dental health.",
    href: "/services/general",
  },
  {
    title: "Cosmetic Dentistry",
    description: "Veneers, bonding, smile makeovers, and everything to help you love the way you look.",
    href: "/services/cosmetic",
  },
  {
    title: "Restorative Dentistry",
    description: "Implants, dentures, crowns, and restorations to rebuild and strengthen your smile.",
    href: "/services/restorative",
  },
  {
    title: "Teeth Whitening",
    description: "Professional in-office and custom take-home whitening for a brighter, more confident smile.",
    href: "/teeth-whitening",
  },
  {
    title: "Invisalign",
    description: "Clear aligners that straighten your teeth without brackets or wires. $1,000 off for a limited time.",
    href: "/invisalign",
  },
  {
    title: "InnerView Imaging",
    description: "High-definition intraoral imaging so you can see exactly what we see and make confident decisions.",
    href: "/innerview",
  },
  {
    title: "Laser Therapy",
    description: "Advanced laser treatment for gentler procedures, less discomfort, and faster recovery.",
    href: "/laser-therapy",
  },
];

export default function ServicesPage() {
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
              What We Offer
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
              Our Services
            </h1>
            <p className="text-white/50 text-base sm:text-lg max-w-xl mx-auto">
              From routine cleanings to complete smile transformations. Everything your family needs under one roof.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4">
          <div className="grid gap-3 sm:grid-cols-2">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
              >
                <Link href={service.href}>
                  <div className="group rounded-xl bg-light border border-gray-light p-6 transition-all hover:border-primary/30 hover:shadow-sm h-full">
                    <h3 className="font-heading text-lg font-semibold text-dark mb-1.5">
                      {service.title}
                    </h3>
                    <p className="text-gray text-sm leading-relaxed mb-3">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-primary text-xs font-semibold group-hover:gap-2 transition-all">
                      Learn more
                      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
