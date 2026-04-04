"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { CTABanner } from "@/components/CTABanner";
import { FAQSchema } from "@/components/FAQSchema";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { StatRow, Highlight, Checklist } from "@/components/ContentBlocks";

const insurancePlans = [
  "Delta Dental PPO",
  "Cigna DPPO",
  "MetLife PDP",
  "Aetna PPO",
  "Guardian",
  "United Healthcare",
  "BlueCross BlueShield",
  "Humana",
  "Lincoln Financial",
  "Principal",
  "And most other PPO plans",
];

const faqs = [
  { q: "Does Buchwald Family Dentistry accept my insurance?", a: "We accept most major PPO plans including Delta Dental, Cigna, MetLife, Aetna, and more. Our insurance coordinator Denielle will verify your specific plan and benefits before your visit — at no cost to you." },
  { q: "What if my insurance doesn't cover a procedure?", a: "We'll always tell you what's covered and what's not before we start. For anything not covered, we offer flexible financing through Cherry with 0% APR options." },
  { q: "Do you accept Medicaid or HMO plans?", a: "We're primarily a PPO-based office. Medicaid and most HMO plans have restrictions that limit the care we can provide. If you're unsure, call us and we'll help figure out your options." },
  { q: "How does the Essential Care Plan work?", a: "It's our in-house membership for patients without insurance. For $34/month, you get 2 cleanings, an annual exam, X-rays, and 20% off everything else. No waiting periods, no deductibles, no maximums." },
  { q: "Can I use my HSA or FSA at your office?", a: "Yes. All dental treatment at our office qualifies as an eligible medical expense for HSA and FSA accounts." },
  { q: "What does a first visit cost without insurance?", a: "Our new patient special is $149 and includes a comprehensive exam, digital X-rays, and a professional cleaning. We'll also discuss any recommended treatment and give you a clear cost breakdown." },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between py-4 text-left gap-4">
        <span className="font-semibold text-gray-900 text-[15px]">{q}</span>
        <motion.span animate={{ rotate: open ? 45 : 0 }} className="text-primary text-lg flex-shrink-0 font-bold">+</motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden">
            <p className="text-gray-500 text-sm leading-relaxed pb-4">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function InsurancePage() {
  return (
    <>
      {/* Hero */}
      <section className="py-10 sm:py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center">
            <p className="text-primary text-sm font-bold uppercase tracking-wider mb-3">Insurance & Financing</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-[1.1] mb-8">
              We Work With Your Insurance
            </h1>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-center max-w-3xl mx-auto">
            <p className="text-gray-500 text-lg leading-relaxed">
              Buchwald Family Dentistry accepts most major PPO dental plans. If you have insurance, we&apos;ll maximize your benefits. If you don&apos;t, we have affordable options.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats + Insurance Plans */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4">
          <StatRow stats={[
            { value: "Most PPOs", label: "Accepted" },
            { value: "$149", label: "New patient special" },
            { value: "$34/mo", label: "Essential Care Plan" },
          ]} />

          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-10 mb-4">Insurance Plans We Accept</h2>

          <Highlight>We&apos;re in-network with most major PPO plans and will file all claims on your behalf.</Highlight>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-6">
            {insurancePlans.map((plan) => (
              <div key={plan} className="bg-white rounded-xl p-4 text-center border border-gray-100">
                <p className="text-gray-700 text-sm font-medium">{plan}</p>
              </div>
            ))}
          </div>

          <p className="text-gray-500 text-sm mt-4">
            Don&apos;t see your plan? Call us at{" "}
            <a href="tel:972-644-3280" className="text-primary font-semibold hover:underline">(972) 644-3280</a>
            {" "}&mdash; we&apos;ll check your benefits for free.
          </p>
        </div>
      </section>

      {/* How Insurance Works */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="mx-auto max-w-3xl px-4">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">How Insurance Works at Our Office</h2>
            <Checklist items={[
              "Our coordinator Denielle verifies your benefits before your first visit",
              "We file all claims directly — you don't deal with paperwork",
              "We'll tell you your estimated out-of-pocket cost upfront",
              "No surprise bills — ever",
            ]} />
          </motion.div>
        </div>
      </section>

      {/* No Insurance */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-6">No Insurance? No Problem.</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {/* Essential Care Plan */}
            <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-white rounded-xl p-6 border border-gray-100">
              <div className="flex items-baseline gap-2 mb-4">
                <p className="text-3xl font-extrabold text-primary">$34</p>
                <p className="text-gray-400 text-sm font-medium">/month</p>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Essential Care Plan</h3>
              <Checklist items={[
                "2 cleanings per year",
                "Annual exam and X-rays",
                "20% off all other services",
                "No deductibles, no maximums, no waiting periods",
              ]} />
            </motion.div>

            {/* Flexible Financing */}
            <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-white rounded-xl p-6 border border-gray-100">
              <div className="flex items-baseline gap-2 mb-4">
                <p className="text-3xl font-extrabold text-primary">0%</p>
                <p className="text-gray-400 text-sm font-medium">APR options</p>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Flexible Financing</h3>
              <Checklist items={[
                "Cherry financing with 0% APR options",
                "Break treatment into monthly payments",
                "Apply in minutes, no impact on credit score",
              ]} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="mx-auto max-w-2xl px-4">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Common Questions</h2>
          </motion.div>
          <div className="bg-gray-50 rounded-xl p-6">
            {faqs.map((faq) => <FAQItem key={faq.q} q={faq.q} a={faq.a} />)}
          </div>
        </div>
      </section>

      <CTABanner />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={[{ name: "Insurance", href: "/insurance" }]} />
    </>
  );
}
