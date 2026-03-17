"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CTABanner } from "@/components/CTABanner";
import { FAQSchema } from "@/components/FAQSchema";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { ServiceSchema } from "@/components/ServiceSchema";
import { StatRow, Highlight, Checklist, NumberedList } from "@/components/ContentBlocks";

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
      <section className="py-10 sm:py-16 bg-white">
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

      {/* Stats + Emergencies */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4">
          <StatRow stats={[
            { value: "Same-Day", label: "Appointments" },
            { value: "30min", label: "Window for Knocked-Out Tooth" },
            { value: "24/7", label: "Call Line" },
          ]} />

          <Highlight>If a tooth gets knocked out, get to us within 30 minutes — there&apos;s a good chance we can save it. Call immediately.</Highlight>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-10 mb-2">What Counts as a Dental Emergency?</h2>
          <p className="text-gray-400 text-sm mb-4">If you&apos;re dealing with any of these, call us right away.</p>
          <NumberedList items={[
            { title: "Severe Toothache", desc: "Persistent, throbbing pain that won't go away — could signal infection or decay that needs immediate attention." },
            { title: "Knocked-Out Tooth", desc: "Time matters. If you can get to us within 30 minutes, there's a good chance we can save the tooth." },
            { title: "Cracked or Broken Tooth", desc: "Whether it's a small chip or a major fracture, we'll assess the damage and protect the tooth from further harm." },
            { title: "Lost Filling or Crown", desc: "A missing filling or crown leaves your tooth exposed and vulnerable. We'll get it covered and comfortable fast." },
            { title: "Swollen Gums or Abscess", desc: "Swelling, pus, or a bump on your gums can mean infection. This needs treatment before it spreads." },
            { title: "Bleeding That Won't Stop", desc: "If bleeding from your mouth doesn't stop after 15-20 minutes of pressure, it's time to come in." },
          ]} />
        </div>
      </section>

      {/* First Aid */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2">What to Do Before You Get Here</h2>
          <p className="text-gray-400 text-sm mb-4">Quick first-aid steps while you&apos;re on the way.</p>
          <NumberedList items={[
            { title: "Toothache", desc: "Rinse with warm salt water. Floss gently to remove anything stuck. Take over-the-counter pain relief. Avoid putting aspirin directly on the gum." },
            { title: "Knocked-Out Tooth", desc: "Pick up the tooth by the crown — never the root. Rinse gently, don't scrub. Try to place it back in the socket. If you can't, keep it in milk and get here fast." },
            { title: "Cracked or Broken Tooth", desc: "Rinse your mouth with warm water. Apply a cold compress to reduce swelling. If there's a sharp edge, cover it with dental wax or sugar-free gum." },
            { title: "Swelling or Abscess", desc: "Rinse with salt water several times a day. Don't pop or squeeze the abscess. Take over-the-counter pain relief and call us immediately." },
          ]} />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">Why Choose Us for Emergency Care</h2>
          <Checklist items={[
            "Same-day appointments — we prioritize emergencies and work to get you in the day you call",
            "Modern equipment — digital X-rays, 3D imaging, and advanced tools for fast diagnosis",
            "Experienced team — Dr. Buchwald has handled every type of dental emergency",
            "Comfortable environment — we keep things calm, clear, and comfortable when you're stressed",
          ]} />
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
      <BreadcrumbSchema items={[{ name: "Emergency", href: "/emergency" }]} />
      <ServiceSchema name="Emergency Dentistry" description="Same-day emergency dental care for toothaches, broken teeth, infections, and dental trauma at Buchwald Family Dentistry in Richardson, TX." url="/emergency" />
    </>
  );
}
