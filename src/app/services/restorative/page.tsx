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

const services = [
  { title: "Dental Implants", description: "Permanent, natural-looking replacements anchored into your jawbone. They function just like real teeth — eat, talk, and smile with confidence." },
  { title: "Dental Crowns", description: "Custom caps that restore the shape, size, and strength of a damaged tooth. Made to match your natural teeth perfectly." },
  { title: "Dental Bridges", description: "Fixed prosthetics that fill the gap left by missing teeth. No removable parts — they stay in place and look natural." },
  { title: "Dentures", description: "Full or partial dentures customized for comfort and a natural appearance. Modern dentures are lighter and more realistic than ever." },
  { title: "Inlays & Onlays", description: "Custom restorations for teeth that need more than a filling but less than a crown. Precisely crafted for a perfect fit." },
  { title: "Emergency Repair", description: "Fast solutions for chipped, cracked, or knocked-out teeth when you need help now. Call us and we'll get you in." },
];

const comparisons = [
  { vs: "Implants vs. Bridges", detail: "Implants don't rely on neighboring teeth for support and can last a lifetime with proper care. Bridges are less invasive and faster to place, but typically last 10–15 years. We'll help you weigh the pros and cons based on your situation." },
  { vs: "Implants vs. Dentures", detail: "Implants are fixed and permanent — they feel and function like natural teeth. Dentures are removable and more affordable upfront, but may need adjustments over time. Some patients combine both with implant-supported dentures." },
  { vs: "Crowns vs. Inlays/Onlays", detail: "Crowns cover the entire tooth and are best for significant damage. Inlays and onlays preserve more natural tooth structure and are ideal when the damage is moderate. We always choose the most conservative option that gets the job done." },
];

const whatToExpect = [
  { step: "01", title: "Evaluation", text: "We examine the area, take imaging, and discuss what happened and what you're feeling." },
  { step: "02", title: "Treatment Plan", text: "We walk you through your options, explain the pros and cons, and help you make the best decision for your situation." },
  { step: "03", title: "Restoration", text: "Using precise techniques and high-quality materials, we restore your tooth to its natural form and function." },
  { step: "04", title: "Follow-Up", text: "We check in to make sure everything feels right and your bite is comfortable. Adjustments are quick and easy." },
];

const faqs = [
  { q: "How long do dental implants last?", a: "With proper care, dental implants can last a lifetime. The crown on top may need replacement after 10–15 years, but the implant itself is designed to be permanent." },
  { q: "Am I a good candidate for implants?", a: "Most adults with healthy gums and adequate jawbone are candidates. We'll evaluate your specific situation during a consultation. Even if bone loss is a concern, bone grafting may be an option." },
  { q: "How long does the implant process take?", a: "From placement to final crown, it typically takes 3–6 months. The implant needs time to fuse with your jawbone (osseointegration). We'll provide a temporary solution in the meantime." },
  { q: "Will my crown match my other teeth?", a: "Yes. Every crown is custom-made to match the color, shape, and size of your natural teeth. Most people can't tell the difference." },
  { q: "What should I do if I chip or crack a tooth?", a: "Call us right away. Save any pieces if you can, rinse gently, and apply a cold compress if there's swelling. We'll get you in as quickly as possible." },
  { q: "Are dentures uncomfortable?", a: "Modern dentures are much more comfortable than older versions. There's an adjustment period, but we customize the fit and make adjustments until they feel right." },
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

export default function RestorativePage() {
  return (
    <>
      <section className="py-10 sm:py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center">
            <p className="text-primary text-sm font-bold uppercase tracking-wider mb-3">Rebuild &amp; Strengthen</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-[1.1] mb-8">Restorative Dentistry</h1>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.1 }} className="mb-10">
            <Image src="/images/stock/restorative.jpg" alt="Dr. Buchwald performing custom crown staining for a patient at Buchwald Family Dentistry" width={1200} height={600} className="rounded-2xl w-full object-cover aspect-video" priority />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-center max-w-3xl mx-auto">
            <p className="text-gray-500 text-lg leading-relaxed">Implants, crowns, bridges, and more — we rebuild smiles that look, feel, and function like the real thing. No matter what happened, we can fix it.</p>
          </motion.div>
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

      {/* What to Expect */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="mx-auto max-w-5xl px-4">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">What to Expect</h2>
            <p className="text-gray-400 text-sm mt-2">From evaluation to restoration — here&apos;s how it works.</p>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {whatToExpect.map((s, i) => (
              <motion.div key={s.step} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="bg-gray-50 rounded-xl p-6">
                <p className="text-primary text-3xl font-extrabold mb-2">{s.step}</p>
                <h3 className="font-bold text-gray-900 mb-1">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparisons */}
      <section className="py-20 sm:py-24 bg-gray-50">
        <div className="mx-auto max-w-3xl px-4">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">How Do They Compare?</h2>
            <p className="text-gray-400 text-sm mt-2">Not sure which option is best? Here&apos;s a breakdown.</p>
          </motion.div>
          <div className="space-y-4">
            {comparisons.map((c, i) => (
              <motion.div key={c.vs} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="bg-white rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-1.5">{c.vs}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{c.detail}</p>
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

      <RelatedServices keys={["general", "laser"]} />
      <Testimonials />
      <CTABanner />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={[{ name: "Services", href: "/services" }, { name: "Restorative Dentistry", href: "/services/restorative" }]} />
      <ServiceSchema name="Restorative Dentistry" description="Dental implants, crowns, bridges, dentures, and emergency repair at Buchwald Family Dentistry in Richardson, TX." url="/services/restorative" />
    </>
  );
}
