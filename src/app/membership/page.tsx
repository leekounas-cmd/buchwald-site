"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CTABanner } from "@/components/CTABanner";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";

const BOOKING_URL = "https://book2.getweave.com/359c4bec-a0f0-4d62-9ea8-35a008305267/request-appointment?source=WEBSITE";

const essentialItems = [
  "2 professional cleanings per year",
  "2 comprehensive exams per year",
  "Full set of digital X-rays",
  "20% off all other treatments",
  "No waiting periods",
  "No annual maximums",
  "No deductibles",
];

const signatureItems = [
  "Everything in Essential",
  "InnerView imaging at every visit",
  "Fluoride at every visit",
  "Laser therapy at every visit",
  "Jet whitening at every visit",
  "20% off all other treatments",
  "No waiting periods, maximums, or deductibles",
];

const essentialSavings = [
  { treatment: "2 Cleanings", plan: "Included", retail: "$440", save: "$440" },
  { treatment: "2 Exams", plan: "Included", retail: "$300", save: "$300" },
  { treatment: "Full X-rays", plan: "Included", retail: "$150", save: "$150" },
  { treatment: "Filling (20% off)", plan: "$320", retail: "$400", save: "$80" },
  { treatment: "Crown (20% off)", plan: "$960", retail: "$1,200", save: "$240" },
];

const signatureSavings = [
  { treatment: "2 Cleanings", plan: "Included", retail: "$440", save: "$440" },
  { treatment: "2 Exams", plan: "Included", retail: "$300", save: "$300" },
  { treatment: "Full X-rays", plan: "Included", retail: "$150", save: "$150" },
  { treatment: "InnerView x2", plan: "Included", retail: "$60", save: "$60" },
  { treatment: "Fluoride x2", plan: "Included", retail: "$130", save: "$130" },
  { treatment: "Laser Therapy x2", plan: "Included", retail: "$250", save: "$250" },
  { treatment: "Jet Whitening x2", plan: "Included", retail: "$198", save: "$198" },
];

const faqs = [
  {
    q: "Do I need to have insurance to join?",
    a: "No. These plans are designed specifically for patients without dental insurance. They give you the same level of preventive care — without the middleman.",
  },
  {
    q: "Can I join the plan at my first visit?",
    a: "Yes. You can sign up at any time, including your first appointment. The plan starts immediately with no waiting period.",
  },
  {
    q: "What if I need a filling or crown?",
    a: "Both plans include 20% off all other treatments, including fillings, crowns, root canals, and more. You'll always know your cost before we start anything.",
  },
  {
    q: "Can I pay monthly instead of annually?",
    a: "Yes. Both plans are available through Cherry financing. Essential is $34/mo and Signature is $75/mo, both on a 12-month term at 0% APR.",
  },
  {
    q: "What is the Hygiene Upgrade Package?",
    a: "It's a per-visit bundle available to anyone — insured or not. For $249, you add InnerView imaging, fluoride, laser therapy, and jet whitening to any cleaning visit. The Signature Plan includes this automatically at both visits each year.",
  },
  {
    q: "Is there a contract?",
    a: "The plans are annual. If you pay through Cherry, payments are spread over 12 months. There's no long-term contract beyond the plan year.",
  },
];

function Check({ white }: { white?: boolean }) {
  return (
    <svg className={`h-4 w-4 flex-shrink-0 mt-0.5 ${white ? "text-white" : "text-primary"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

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

export default function MembershipPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-10 sm:py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="text-primary text-sm font-bold uppercase tracking-wider mb-3">No Insurance Needed</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-[1.1] mb-5">
              In-House Discount Plans
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto">
              Two plans designed for patients without insurance. Get preventive care, big discounts on treatment, and pay monthly through Cherry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Plan Cards */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4">
          <div className="grid sm:grid-cols-2 gap-6">

            {/* Essential */}
            <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-2xl p-7 border border-gray-100 flex flex-col">
              <p className="text-primary text-xs font-bold uppercase tracking-wider mb-2">Essential Care Plan</p>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-4xl font-extrabold text-gray-900">$400</span>
                <span className="text-gray-400 text-sm">/year</span>
              </div>
              <p className="text-xs text-gray-400 mb-6">or $34/mo through Cherry</p>
              <ul className="space-y-2.5 flex-1 mb-8">
                {essentialItems.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <Check />
                    {item}
                  </li>
                ))}
              </ul>
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="w-full rounded-lg bg-primary px-5 py-3 text-sm font-bold text-white hover:bg-primary-dark transition-colors text-center">
                Get Started
              </a>
              <p className="text-xs text-gray-400 text-center mt-3">Call (972) 644-3280 to sign up at your visit</p>
            </motion.div>

            {/* Signature */}
            <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-primary rounded-2xl p-7 flex flex-col relative">
              <span className="absolute -top-3 left-6 bg-green-500 text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">Best Value</span>
              <p className="text-white/70 text-xs font-bold uppercase tracking-wider mb-2">Signature Care Plan</p>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-4xl font-extrabold text-white">$899</span>
                <span className="text-white/60 text-sm">/year</span>
              </div>
              <p className="text-xs text-white/60 mb-6">or $75/mo through Cherry</p>
              <ul className="space-y-2.5 flex-1 mb-8">
                {signatureItems.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-white/90">
                    <Check white />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="bg-white/10 rounded-xl px-4 py-3 mb-6 text-center">
                <p className="text-white/70 text-xs">Retail value <span className="line-through">$1,233+</span></p>
                <p className="text-white font-extrabold text-sm">You save $334+ per year</p>
              </div>
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="w-full rounded-lg bg-white px-5 py-3 text-sm font-bold text-primary hover:bg-gray-50 transition-colors text-center">
                Get Started
              </a>
              <p className="text-xs text-white/50 text-center mt-3">Call (972) 644-3280 to sign up at your visit</p>
            </motion.div>
          </div>

          {/* Cherry note */}
          <p className="text-center text-gray-400 text-xs mt-5">
            Cherry financing available on both plans. Apply in minutes, no impact to credit score, 0% APR.
          </p>
        </div>
      </section>

      {/* Savings Tables */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="mx-auto max-w-5xl px-4">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Year-One Math</h2>
            <p className="text-gray-500 text-sm mt-2">What you pay vs. what you would have paid without a plan.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-8">
            {/* Essential savings */}
            <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">Essential Plan — $400/yr</p>
              <div className="bg-gray-50 rounded-2xl overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left px-4 py-3 font-semibold text-gray-400 text-xs uppercase tracking-wide">Item</th>
                      <th className="text-right px-4 py-3 font-semibold text-primary text-xs uppercase tracking-wide">Your Cost</th>
                      <th className="text-right px-4 py-3 font-semibold text-gray-400 text-xs uppercase tracking-wide">Retail</th>
                    </tr>
                  </thead>
                  <tbody>
                    {essentialSavings.map((row, i) => (
                      <tr key={row.treatment} className={i % 2 === 1 ? "bg-white" : ""}>
                        <td className="px-4 py-3 text-gray-700">{row.treatment}</td>
                        <td className="px-4 py-3 text-primary font-semibold text-right">{row.plan}</td>
                        <td className="px-4 py-3 text-gray-400 text-right">{row.retail}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="px-4 py-4 border-t border-gray-200 bg-green-50">
                  <div className="flex justify-between text-sm font-bold text-gray-900 mb-1">
                    <span>Plan cost</span><span>$400/year</span>
                  </div>
                  <div className="flex justify-between text-xs text-gray-400 mb-2">
                    <span>Retail value of included items</span><span>$890+</span>
                  </div>
                  <div className="flex justify-between text-green-700 font-extrabold">
                    <span>You save</span><span>$290+</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Signature savings */}
            <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">Signature Plan — $899/yr</p>
              <div className="bg-gray-50 rounded-2xl overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left px-4 py-3 font-semibold text-gray-400 text-xs uppercase tracking-wide">Item</th>
                      <th className="text-right px-4 py-3 font-semibold text-primary text-xs uppercase tracking-wide">Your Cost</th>
                      <th className="text-right px-4 py-3 font-semibold text-gray-400 text-xs uppercase tracking-wide">Retail</th>
                    </tr>
                  </thead>
                  <tbody>
                    {signatureSavings.map((row, i) => (
                      <tr key={row.treatment} className={i % 2 === 1 ? "bg-white" : ""}>
                        <td className="px-4 py-3 text-gray-700">{row.treatment}</td>
                        <td className="px-4 py-3 text-primary font-semibold text-right">{row.plan}</td>
                        <td className="px-4 py-3 text-gray-400 text-right">{row.retail}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="px-4 py-4 border-t border-gray-200 bg-green-50">
                  <div className="flex justify-between text-sm font-bold text-gray-900 mb-1">
                    <span>Plan cost</span><span>$899/year</span>
                  </div>
                  <div className="flex justify-between text-xs text-gray-400 mb-2">
                    <span>Retail value of included items</span><span>$1,233+</span>
                  </div>
                  <div className="flex justify-between text-green-700 font-extrabold">
                    <span>You save</span><span>$334+</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hygiene Upgrade */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="mx-auto max-w-3xl px-4">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-2xl p-8 border border-gray-100">
            <p className="text-primary text-xs font-bold uppercase tracking-wider mb-2">For Everyone, Insured or Not</p>
            <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Hygiene Upgrade Package</h2>
            <p className="text-gray-500 text-sm mb-6">Add these four services to any cleaning visit for one bundled price. Available to any patient.</p>

            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {[
                { name: "InnerView Imaging", price: "$30" },
                { name: "Fluoride Treatment", price: "$65" },
                { name: "Laser Therapy", price: "$125" },
                { name: "Jet Whitening", price: "$99" },
              ].map((item) => (
                <div key={item.name} className="flex justify-between items-center bg-gray-50 rounded-xl px-4 py-3">
                  <span className="text-sm text-gray-700 font-medium">{item.name}</span>
                  <span className="text-sm text-gray-400 line-through">{item.price} a la carte</span>
                </div>
              ))}
            </div>

            <div className="bg-primary/5 rounded-xl px-5 py-4 flex items-center justify-between mb-6">
              <div>
                <p className="text-xs text-gray-500 mb-1">Bundled price (save 22%)</p>
                <p className="text-3xl font-extrabold text-primary">$249 <span className="text-base font-normal text-gray-400">/visit</span></p>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-400">Split via Cherry</p>
                <p className="text-sm font-bold text-gray-700">$84/mo for 2 visits/year</p>
              </div>
            </div>

            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="w-full rounded-lg bg-gray-900 px-5 py-3 text-sm font-bold text-white hover:bg-gray-800 transition-colors text-center block">
              Add to My Next Visit
            </a>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="mx-auto max-w-2xl px-4">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900">Common Questions</h2>
          </motion.div>
          <div className="bg-gray-50 rounded-xl p-6">
            {faqs.map((faq) => <FAQItem key={faq.q} q={faq.q} a={faq.a} />)}
          </div>
        </div>
      </section>

      <CTABanner />
      <BreadcrumbSchema items={[{ name: "Membership Plans", href: "/membership" }]} />
    </>
  );
}
