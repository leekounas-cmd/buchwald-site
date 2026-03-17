"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { CTABanner } from "@/components/CTABanner";

const services = [
  { title: "Cleaning & Exam", description: "Routine cleanings, X-rays, and comprehensive exams.", href: "/services/cleaning" },
  { title: "General Dentistry", description: "Fillings, crowns, root canals, extractions, gum care.", href: "/services/general" },
  { title: "Cosmetic Dentistry", description: "Veneers, bonding, smile makeovers, gum contouring.", href: "/services/cosmetic" },
  { title: "Restorative", description: "Implants, bridges, dentures, emergency repair.", href: "/services/restorative" },
  { title: "Teeth Whitening", description: "In-office and take-home professional whitening.", href: "/teeth-whitening" },
  { title: "Invisalign", description: "Clear aligners starting at $115/month with financing.", href: "/invisalign" },
  { title: "InnerView Imaging", description: "High-def imaging so you see what we see.", href: "/innerview" },
  { title: "Laser Therapy", description: "Advanced lasers for gentler, faster treatment.", href: "/laser-therapy" },
];

export default function ServicesPage() {
  return (
    <>
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="max-w-2xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <p className="text-primary text-sm font-bold uppercase tracking-wider mb-3">What We Offer</p>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-[1.1] mb-5">Our Services</h1>
              <p className="text-gray-500 text-lg leading-relaxed">
                From routine cleanings to full smile transformations. Everything your family needs under one roof.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-gray-50">
        <div className="mx-auto max-w-5xl px-4">
          <div className="grid gap-4 sm:grid-cols-2">
            {services.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }}>
                <Link href={s.href}>
                  <div className="group bg-white rounded-xl p-6 h-full transition-all hover:shadow-md">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                      <h3 className="font-bold text-gray-900">{s.title}</h3>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed mb-3">{s.description}</p>
                    <span className="text-primary text-xs font-bold group-hover:underline">Learn more →</span>
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
