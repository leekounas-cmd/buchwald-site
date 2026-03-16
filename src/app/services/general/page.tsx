"use client";

import { motion } from "motion/react";
import { Testimonials } from "@/components/Testimonials";
import { CTABanner } from "@/components/CTABanner";

const BOOKING_URL = "https://book2.getweave.com/359c4bec-a0f0-4d62-9ea8-35a008305267/request-appointment?source=WEBSITE";

const services = [
  { title: "Fillings", description: "Tooth-colored composite fillings that blend naturally. No metal, no mercury." },
  { title: "Crowns", description: "Custom caps that restore strength and appearance to damaged teeth." },
  { title: "Bridges", description: "Fixed replacements for missing teeth that look and function naturally." },
  { title: "Root Canals", description: "Save an infected tooth with modern treatment — more comfortable than you think." },
  { title: "Extractions", description: "Safe, gentle removal of teeth beyond repair, including wisdom teeth." },
  { title: "Gum Treatment", description: "Periodontal care to treat and prevent gum disease before it gets worse." },
];

export default function GeneralPage() {
  return (
    <>
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="max-w-2xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <p className="text-primary text-sm font-bold uppercase tracking-wider mb-3">Everyday Dental Health</p>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-[1.1] mb-5">General Dentistry</h1>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">From fillings to root canals — the care you need to stay healthy and comfortable.</p>
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-primary px-7 py-3.5 text-sm font-bold text-white hover:bg-primary-dark transition-all">Request Appointment</a>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">What We Offer</h2>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-2">
            {services.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} className="bg-white rounded-xl p-6">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                  <h3 className="font-bold text-gray-900">{s.title}</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{s.description}</p>
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
