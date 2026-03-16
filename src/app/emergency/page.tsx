"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CTABanner } from "@/components/CTABanner";
import { FAQSchema } from "@/components/FAQSchema";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { ServiceSchema } from "@/components/ServiceSchema";

const emergencies = [
  { title: "Severe Toothache", text: "Persistent, throbbing pain that won't go away — could signal infection or decay that needs immediate attention." },
  { title: "Knocked-Out Tooth", text: "Time matters. If you can get to us within 30 minutes, there's a good chance we can save the tooth." },
  { title: "Cracked or Broken Tooth", text: "Whether it's a small chip or a major fracture, we'll assess the damage and protect the tooth from further harm." },
  { title: "Lost Filling or Crown", text: "A missing filling or crown leaves your tooth exposed and vulnerable. We'll get it covered and comfortable fast." },
  { title: "Swollen Gums or Abscess", text: "Swelling, pus, or a bump on your gums can mean infection. This needs treatment before it spreads." },
  { title: "Bleeding That Won't Stop", text: "If bleeding from your mouth doesn't stop after 15–20 minutes of pressure, it's time to come in." },
];

const firstAid = [
  { step: "01", title: "Toothache", text: "Rinse with warm salt water. Floss gently to remove anything stuck. Take over-the-counter pain relief. Avoid putting aspirin directly on the gum." },
  { step: "02", title: "Knocked-Out Tooth", text: "Pick up the tooth by the crown — never the root. Rinse gently, don't scrub. Try to place it back in the socket. If you can't, keep it in milk and get here fast." },
  { step: "03", title: "Cracked or Broken Tooth", text: "Rinse your mouth with warm water. Apply a cold compress to reduce swelling. If there's a sharp edge, cover it with dental wax or sugar-free gum." },
  { step: "04", title: "Swelling or Abscess", text: "Rinse with salt water several times a day. Don't pop or squeeze the abscess. Take over-the-counter pain relief and call us immediately." },
];

const reasons = [
  { title: "Same-Day Appointments", text: "We prioritize emergencies and work to get you in the same day you call." },
  { title: "Modern Equipment", text: "Digital X-rays, 3D imaging, and advanced tools help us diagnose and treat quickly." },
  { title: "Experienced Team", text: "Dr. Buchwald has handled every type of dental emergency. You're in good hands." },
  { title: "Comfortable Environment", text: "We know emergencies are stressful. Our team keeps things calm, clear, and comfortable." },
];

const faqs = [
  { q: "Do you take walk-ins?", a: "We do our best to accommodate walk-ins, but calling ahead ensures we have a spot ready for you. Call (972) 644-3280 and we'll get you in as fast as possible." },
  { q: "How fast can I be seen?", a: "In most cases, we can see emergency patients the same day — often within a few hours of your call." },
  { q: "Will it be painful?", a: "We'll make sure you're comfortable before we start any treatment. If you're in pain when you arrive, relieving that pain is our first priority." },
  { q: "How much does emergency care cost?", a: "It depends on what's needed. We'll give you a clear breakdown of costs before starting any treatment — no surprises." },
  { q: "What if it's after hours?", a: "Call our office number and follow the prompts for after-hours emergencies. If it's a life-threatening situation, go to your nearest emergency room." },
  { q: "Should I go to the ER or the dentist?", a: "For most dental issues — toothaches, broken teeth, lost fillings — a dentist is the better choice. Go to the ER if you have uncontrolled bleeding, difficulty breathing, or a jaw injury." },
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

export default function EmergencyPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-10 sm:py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center">
            <p className="text-primary text-sm font-bold uppercase tracking-wider mb-3">Emergency Care</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-[1.1] mb-8">Dental Emergency? Call Now.</h1>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-center max-w-3xl mx-auto">
            <p className="text-gray-500 text-lg leading-relaxed">Pain doesn&apos;t wait — and neither do we. Call <a href="tel:9726443280" className="text-primary font-semibold hover:underline">(972) 644-3280</a> and we&apos;ll work to get you a same-day appointment.</p>
          </motion.div>
        </div>
      </section>

      {/* What Counts as a Dental Emergency */}
      <section className="py-20 sm:py-24 bg-gray-50">
        <div className="mx-auto max-w-5xl px-4">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">What Counts as a Dental Emergency?</h2>
            <p className="text-gray-400 text-sm mt-2">If you&apos;re dealing with any of these, call us right away.</p>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {emergencies.map((e, i) => (
              <motion.div key={e.title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="bg-white rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-1">{e.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{e.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Do Before You Get Here */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="mx-auto max-w-5xl px-4">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">What to Do Before You Get Here</h2>
            <p className="text-gray-400 text-sm mt-2">Quick first-aid steps while you&apos;re on the way.</p>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {firstAid.map((s, i) => (
              <motion.div key={s.step} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="bg-gray-50 rounded-xl p-6">
                <p className="text-primary text-3xl font-extrabold mb-2">{s.step}</p>
                <h3 className="font-bold text-gray-900 mb-1">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 sm:py-24 bg-gray-50">
        <div className="mx-auto max-w-5xl px-4">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Why Choose Us for Emergency Care</h2>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((r, i) => (
              <motion.div key={r.title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="bg-white rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-1">{r.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{r.text}</p>
              </motion.div>
            ))}
          </div>
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

      <CTABanner />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={[{ name: "Emergency", href: "/emergency" }]} />
      <ServiceSchema name="Emergency Dentistry" description="Same-day emergency dental care for toothaches, broken teeth, infections, and dental trauma at Buchwald Family Dentistry in Richardson, TX." url="/emergency" />
    </>
  );
}
