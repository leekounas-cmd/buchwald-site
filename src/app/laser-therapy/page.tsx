"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { Testimonials } from "@/components/Testimonials";
import { CTABanner } from "@/components/CTABanner";
import { RelatedServices } from "@/components/RelatedServices";
import { FAQSchema } from "@/components/FAQSchema";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { ServiceSchema } from "@/components/ServiceSchema";

const BOOKING_URL = "/book";

const benefits = [
  "Minimally invasive — no drills, no buzz",
  "Less discomfort — many procedures need little to no anesthesia",
  "Enhanced precision — targets damaged tissue without harming healthy gums",
  "Faster recovery — less swelling and bleeding",
  "Delivered by our experienced hygiene team using proven technology",
];

const treatments = [
  { title: "Gum Disease Treatment", description: "Laser targets and removes infected tissue while promoting regeneration of healthy gums — without cutting or sutures." },
  { title: "Cold Sore Treatment", description: "Laser therapy can reduce healing time for cold sores and provide immediate relief from discomfort." },
  { title: "Gum Reshaping", description: "Precisely reshape your gum line for a more balanced, symmetrical smile with minimal discomfort and fast healing." },
  { title: "Bacterial Reduction", description: "Laser decontamination during cleanings kills bacteria below the gum line that traditional tools can't reach." },
];

const faqs = [
  { q: "Is laser therapy painful?", a: "Most patients experience little to no pain. Many laser procedures require minimal or no anesthesia. You might feel some warmth or pressure, but it's far more comfortable than traditional methods." },
  { q: "How long does recovery take?", a: "Recovery is significantly faster compared to traditional surgery. Most patients can return to normal activities the same day. Swelling and discomfort are minimal." },
  { q: "Is laser therapy safe?", a: "Yes. Dental lasers have been FDA-approved and used safely for decades. The precision of the laser means less damage to surrounding tissue, which actually makes it safer than some traditional approaches." },
  { q: "Does insurance cover laser therapy?", a: "Coverage varies by plan and procedure. Some laser treatments are covered under periodontal care. Denielle will check your specific benefits before any treatment." },
  { q: "Who is a good candidate for laser therapy?", a: "Patients with gum disease, those who need gum reshaping, or anyone who wants a less invasive alternative to traditional procedures. We'll evaluate your specific situation during a consultation." },
  { q: "How does it compare to traditional gum surgery?", a: "Laser therapy is less invasive, causes less bleeding, requires fewer sutures (often none), and has a faster recovery time. It also promotes tissue regeneration rather than just removing damaged tissue." },
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

export default function LaserTherapyPage() {
  return (
    <>
      <section className="py-10 sm:py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center">
            <p className="text-primary text-sm font-bold uppercase tracking-wider mb-3">Advanced Treatment</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-[1.1] mb-8">
              Advanced Laser Therapy
            </h1>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.1 }} className="mb-10">
            <Image src="/images/stock/laser.jpg" alt="Modern dental technology" width={1200} height={600} className="rounded-2xl w-full object-cover aspect-video" priority />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-center max-w-3xl mx-auto">
            <p className="text-gray-500 text-lg leading-relaxed">
              Faster recovery, less discomfort, and stronger oral health — all without traditional drills and needles. Modern laser dentistry that makes a real difference.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-gray-50">
        <div className="mx-auto max-w-3xl px-4">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Why Patients Prefer Laser</h2>
          </motion.div>
          <div className="space-y-3">
            {benefits.map((b, i) => (
              <motion.div key={b} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} className="flex items-start gap-3 bg-white rounded-xl p-5">
                <span className="h-2 w-2 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                <p className="text-gray-700 text-[15px] font-medium">{b}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Treat */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">What We Treat with Laser</h2>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-2">
            {treatments.map((t, i) => (
              <motion.div key={t.title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                  <h3 className="font-bold text-gray-900">{t.title}</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{t.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid CTA */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3">
              Curious if laser therapy is right for you?
            </h2>
            <p className="text-gray-500 mb-6">Book a free consult and we&apos;ll walk you through it.</p>
            <a href={BOOKING_URL} className="inline-block rounded-lg bg-primary px-7 py-3.5 text-sm font-bold text-white hover:bg-primary-dark transition-all">
              Request Appointment
            </a>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="mx-auto max-w-2xl px-4">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Common Questions</h2>
          </motion.div>
          <div className="bg-gray-50 rounded-xl p-6">
            {faqs.map((faq) => <FAQItem key={faq.q} q={faq.q} a={faq.a} />)}
          </div>
        </div>
      </section>

      <RelatedServices keys={["general", "restorative"]} />
      <Testimonials />
      <CTABanner />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={[{ name: "Laser Therapy", href: "/laser-therapy" }]} />
      <ServiceSchema name="Laser Therapy" description="Advanced dental laser therapy for gum disease, cold sores, gum reshaping, and bacterial reduction at Buchwald Family Dentistry." url="/laser-therapy" />
    </>
  );
}
