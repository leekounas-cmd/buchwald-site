"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { CTABanner } from "@/components/CTABanner";
import { FAQSchema } from "@/components/FAQSchema";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { ServiceSchema } from "@/components/ServiceSchema";
import { StatRow, Highlight, Checklist, NumberedList } from "@/components/ContentBlocks";

const steps = [
  { title: "Check-In & Paperwork", desc: "Arrive a few minutes early. We keep forms quick and simple so you can get settled in." },
  { title: "Meet Melisa, Your Hygienist", desc: "Melisa is who you'll spend most of your visit with. She'll get to know you, answer your questions, and walk you through everything before she starts." },
  { title: "Cleaning, X-Rays & Exam", desc: "Melisa does a gentle cleaning, takes digital X-rays, and does an oral cancer screening. Known for being genuinely gentle across 2,000+ cleanings." },
  { title: "Your Care Plan with Dr. Buchwald", desc: "Dr. Buchwald joins to walk you through everything Melisa found. No surprises, no pressure. Just a clear plan forward." },
];

const bringList = [
  "Photo ID",
  "Insurance card",
  "List of current medications",
  "Dental records from your previous dentist (if available)",
  "Any questions you have for us",
];

const faqs = [
  { q: "Do I need insurance?", a: "Nope. The $149 special is designed for patients without insurance. If you DO have dental insurance, your cleaning, exam, and X-rays are usually covered at 100% under preventive care, so you may not need the $149 package at all. Our coordinator Lee will verify your benefits before your visit and tell you exactly what's covered." },
  { q: "How long is the first visit?", a: "Plan for about 60–90 minutes. We take our time with new patients to make sure we get a complete picture of your oral health." },
  { q: "Can I bring my kids?", a: "Absolutely. We're a family practice and love seeing patients of all ages. You can schedule appointments for the whole family on the same day." },
  { q: "What if I haven't been to a dentist in years?", a: "No judgment — seriously. We see patients in every situation and our only goal is to help you move forward with a plan that works for you." },
  { q: "Do you offer payment plans?", a: "Yes. We offer flexible payment options so cost never gets in the way of your care. Ask our team about what works best for your situation." },
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

export default function NewPatientPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-10 sm:py-16 bg-white">
        <div className="mx-auto max-w-5xl px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center mb-8">
            <p className="text-primary text-sm font-bold uppercase tracking-wider mb-3">Welcome to Buchwald Family Dentistry</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-[1.1]">Your First Visit</h1>
          </motion.div>

          <StatRow stats={[
            { value: "$149", label: "New Patient Special" },
            { value: "60–90 min", label: "First Visit" },
            { value: "4.9★", label: "Google Reviews" },
            { value: "Same-Day", label: "Appointments" },
          ]} />

          <Highlight>We know switching dentists can feel like a big deal. Our goal is to make you feel welcome from the moment you walk in — no judgment, no pressure.</Highlight>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-14 sm:py-18 bg-gray-50">
        <div className="mx-auto max-w-5xl px-4">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">What to Expect</h2>
            <p className="text-gray-400 text-sm mt-1">Your first visit from start to finish.</p>
          </motion.div>
          <NumberedList items={steps} />
        </div>
      </section>

      {/* Meet Melisa — your hygienist */}
      <section className="py-14 sm:py-18 bg-white">
        <div className="mx-auto max-w-4xl px-4">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gray-50 rounded-3xl p-8 sm:p-10">
            <div className="grid sm:grid-cols-[180px_1fr] gap-6 items-center">
              <div className="relative mx-auto sm:mx-0">
                <div className="h-32 w-32 sm:h-40 sm:w-40 rounded-full overflow-hidden ring-4 ring-white shadow-lg">
                  <Image
                    src="/images/melisa.jpg"
                    alt="Melisa Kounas, hygienist"
                    width={160}
                    height={160}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="text-center sm:text-left">
                <p className="text-primary text-xs font-bold uppercase tracking-wider mb-2">Your Hygienist</p>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2">
                  You&apos;ll Spend Most of Your Visit with Melisa
                </h2>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                  Melisa Kounas does your cleaning, X-rays, and the full exam prep. She&apos;s genuinely gentle (over 2,000 cleanings and counting) and patients consistently tell us it&apos;s the most comfortable cleaning they have ever had. Nervous about the dentist? Tell Melisa up front. She will adjust everything to your comfort.
                </p>
                <Link href="/meet-us" className="text-primary font-semibold text-sm hover:underline">
                  Meet the whole team →
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Insurance callout + $149 New Patient Special */}
      <section className="py-14 sm:py-18 bg-white">
        <div className="mx-auto max-w-4xl px-4">
          <div className="grid md:grid-cols-2 gap-5">

            {/* Have insurance */}
            <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gray-50 rounded-2xl p-7 sm:p-8 flex flex-col">
              <p className="text-primary text-xs font-bold uppercase tracking-wider mb-2">Have Insurance?</p>
              <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-3">Your Cleaning Is Likely Covered</h3>
              <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-5">
                Most PPO plans cover preventive care (cleaning, exam, X-rays) at 100%. If that&apos;s you, skip the $149 package. Lee verifies your benefits before you come in and tells you exactly what&apos;s covered and what (if anything) you owe.
              </p>
              <a href="tel:972-644-3280" className="rounded-lg bg-gray-900 px-5 py-3 text-sm font-bold text-white hover:bg-gray-800 transition-colors text-center">
                Call to Verify Benefits
              </a>
            </motion.div>

            {/* No insurance — $149 */}
            <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-primary/10 rounded-2xl p-7 sm:p-8 flex flex-col">
              <p className="text-primary text-xs font-bold uppercase tracking-wider mb-2">No Insurance?</p>
              <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-1">$149 New Patient Special</h3>
              <p className="text-xs text-gray-500 mb-4">Cleaning*, comprehensive exam, and digital X-rays.</p>
              <ul className="space-y-2 flex-1 mb-5 text-sm text-gray-700">
                <li className="flex items-start gap-2"><span className="text-primary font-bold">✓</span> Professional cleaning*</li>
                <li className="flex items-start gap-2"><span className="text-primary font-bold">✓</span> Comprehensive exam</li>
                <li className="flex items-start gap-2"><span className="text-primary font-bold">✓</span> Full set of digital X-rays</li>
                <li className="flex items-start gap-2"><span className="text-primary font-bold">✓</span> Personalized care plan</li>
              </ul>
              <a href="https://book2.getweave.com/359c4bec-a0f0-4d62-9ea8-35a008305267/request-appointment?source=WEBSITE" target="_blank" rel="noopener noreferrer" className="rounded-lg bg-primary px-5 py-3 text-sm font-bold text-white hover:bg-primary-dark transition-colors text-center">
                Book My $149 Visit
              </a>
            </motion.div>

          </div>

          <p className="text-gray-500 text-xs mt-6 leading-relaxed text-center max-w-2xl mx-auto">
            *Covers a standard (prophylaxis) cleaning. If it has been a while since your last dental visit, a deep cleaning may be recommended first.{" "}
            <Link href="/blog/what-is-a-deep-cleaning" className="text-primary font-semibold underline">
              Why deep cleanings matter
            </Link>.
          </p>
        </div>
      </section>

      {/* What to Bring */}
      <section className="py-14 sm:py-18 bg-gray-50">
        <div className="mx-auto max-w-5xl px-4">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">What to Bring</h2>
          </motion.div>
          <Checklist items={bringList} />
        </div>
      </section>

      {/* Office Details */}
      <section className="py-14 sm:py-18 bg-white">
        <div className="mx-auto max-w-5xl px-4">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Office Details</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="bg-primary/5 rounded-xl p-5">
              <p className="text-primary text-xs font-bold uppercase tracking-wider mb-2">Address</p>
              <p className="text-gray-900 font-bold text-base leading-snug">300 N Coit Rd #245</p>
              <p className="text-gray-500 text-sm mt-0.5">Richardson, TX 75080</p>
            </div>
            <div className="bg-primary/5 rounded-xl p-5">
              <p className="text-primary text-xs font-bold uppercase tracking-wider mb-2">Hours</p>
              <p className="text-gray-900 font-bold text-base leading-snug">Monday–Thursday</p>
              <p className="text-gray-500 text-sm mt-0.5">7:00 AM – 3:00 PM</p>
            </div>
            <div className="bg-primary/5 rounded-xl p-5">
              <p className="text-primary text-xs font-bold uppercase tracking-wider mb-2">Call or Text</p>
              <a href="tel:972-644-3280" className="text-gray-900 font-bold text-base leading-snug hover:text-primary">(972) 644-3280</a>
              <p className="text-gray-500 text-sm mt-0.5">Same-day when possible</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 sm:py-18 bg-gray-50">
        <div className="mx-auto max-w-2xl px-4">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Common Questions</h2>
          </motion.div>
          <div className="bg-white rounded-xl p-6">
            {faqs.map((faq) => <FAQItem key={faq.q} q={faq.q} a={faq.a} />)}
          </div>
        </div>
      </section>

      <CTABanner />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={[{ name: "New Patient", href: "/new-patient" }]} />
      <ServiceSchema name="New Patient Visit" description="$149 new patient cleaning, exam, and X-rays at Buchwald Family Dentistry in Richardson, TX. Serving Plano, Allen, and Garland." url="/new-patient" />
    </>
  );
}
