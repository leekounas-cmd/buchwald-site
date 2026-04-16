"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CTABanner } from "@/components/CTABanner";
import { FAQSchema } from "@/components/FAQSchema";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { ServiceSchema } from "@/components/ServiceSchema";
import { StatRow, Checklist, Versus, NumberedList, Highlight } from "@/components/ContentBlocks";

const BOOKING_URL = "https://book2.getweave.com/359c4bec-a0f0-4d62-9ea8-35a008305267/request-appointment?source=WEBSITE";

const faqs = [
  { q: "How much do dental implants cost?", a: "The cost varies depending on how many implants you need and whether additional procedures like bone grafting are required. We'll give you a detailed estimate during your consultation." },
  { q: "Does insurance cover implants?", a: "Some insurance plans cover a portion of implant treatment. Lee, our insurance coordinator, will check your benefits and let you know exactly what's covered." },
  { q: "How long do implants last?", a: "With proper care, dental implants can last 25 years or more. Many patients keep them for the rest of their lives." },
  { q: "Is the procedure painful?", a: "Most patients are surprised by how comfortable the procedure is. We use local anesthesia during placement, and any post-procedure discomfort is typically managed with over-the-counter pain relief." },
  { q: "How long is recovery?", a: "Most patients return to normal activities within a day or two. The full healing process (osseointegration) takes 3–6 months, but you'll have a temporary restoration during that time." },
  { q: "Can I get implants if I have bone loss?", a: "Often, yes. A bone graft can rebuild the jawbone to support an implant. We'll assess your bone density during the consultation and discuss your options." },
  { q: "What's the success rate?", a: "Dental implants have a success rate of over 95%. They're one of the most predictable and reliable procedures in modern dentistry." },
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

export default function DentalImplantsPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-10 sm:py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center">
            <p className="text-primary text-sm font-bold uppercase tracking-wider mb-3">Permanent Solution</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-[1.1] mb-8">Dental Implants That Look &amp; Feel Real</h1>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-center max-w-3xl mx-auto">
            <p className="text-gray-500 text-lg leading-relaxed">Missing a tooth shouldn&apos;t mean missing out. Dental implants are the gold standard for permanent tooth replacement — designed to look, feel, and function like the real thing.</p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="mx-auto max-w-3xl px-4">
          <StatRow stats={[
            { value: "$3-5K", label: "Per Implant" },
            { value: "25+", label: "Years Lifespan" },
            { value: "98%", label: "Success Rate" },
          ]} />

          <Highlight>
            Implants are the closest thing to getting your real tooth back. They preserve your jawbone, protect neighboring teeth, and let you eat, talk, and smile without thinking twice.
          </Highlight>
        </div>
      </section>

      {/* Why Choose Implants */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="mx-auto max-w-3xl px-4">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Why Choose Implants?</h2>
          </motion.div>
          <Checklist items={[
            "Look natural — custom-made to match your existing teeth in shape, size, and color",
            "Last a lifetime — with proper care, implants can last 25+ years",
            "Preserve jawbone — stimulate bone and prevent the loss that happens after tooth loss",
            "Eat anything — no food restrictions, no slipping, no adhesives",
            "No impact on adjacent teeth — unlike bridges, implants stand on their own",
            "Brush and floss normally — no special maintenance required",
          ]} />
        </div>
      </section>

      {/* The Implant Process */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="mx-auto max-w-3xl px-4">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">The Implant Process</h2>
            <p className="text-gray-400 text-sm mt-2">From consultation to your new smile.</p>
          </motion.div>
          <NumberedList items={[
            { title: "Consultation & Planning", desc: "3D scans of your jaw, health history review, and a personalized treatment plan." },
            { title: "Implant Placement", desc: "A small titanium post is placed into your jawbone — acts as the root for your new tooth." },
            { title: "Healing & Integration", desc: "Over 3-6 months, the implant fuses with your jawbone (osseointegration). Temporary restoration provided." },
            { title: "Crown Placement", desc: "Custom-made crown attached that looks and feels just like a natural tooth. You're done." },
          ]} />
        </div>
      </section>

      {/* Implants vs Other Options */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="mx-auto max-w-3xl px-4">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Implants vs. Other Options</h2>
            <p className="text-gray-400 text-sm mt-2">See how implants compare to bridges and dentures.</p>
          </motion.div>

          <Versus
            leftLabel="Implants"
            rightLabel="Bridges"
            left={[
              "Last 25+ years / lifetime",
              "Look and feel like a real tooth",
              "Preserve jawbone",
              "Brush and floss normally",
              "Don't affect neighboring teeth",
            ]}
            right={[
              "Last 5-15 years",
              "Good appearance, less natural feel",
              "Don't prevent bone loss",
              "Need special flossing",
              "Require healthy adjacent teeth",
            ]}
          />

          <Versus
            leftLabel="Implants"
            rightLabel="Dentures"
            left={[
              "Fixed and permanent",
              "No slipping or movement",
              "No adhesives needed",
              "Preserve jawbone density",
              "Higher upfront, lower long-term cost",
            ]}
            right={[
              "Removable daily",
              "Can slip or feel bulky",
              "May need adhesives",
              "Don't prevent bone loss",
              "Lower upfront, higher long-term cost",
            ]}
          />
        </div>
      </section>

      {/* Am I a Candidate */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="mx-auto max-w-3xl px-4">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Am I a Candidate?</h2>
            <p className="text-gray-400 text-sm mt-2">Most adults are good candidates for implants. Here&apos;s what we look for.</p>
          </motion.div>
          <Checklist items={[
            "Healthy gums (or willing to treat gum disease first)",
            "Adequate jawbone density (or willing to do a bone graft)",
            "Non-smoker (or willing to quit during healing)",
            "Committed to good oral hygiene",
            "Looking for a permanent, long-term solution",
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
      <BreadcrumbSchema items={[{ name: "Services", href: "/services" }, { name: "Dental Implants", href: "/dental-implants" }]} />
      <ServiceSchema name="Dental Implants" description="Permanent dental implant solutions — single tooth, multiple teeth, and full-arch restorations at Buchwald Family Dentistry in Richardson, TX." url="/dental-implants" />
    </>
  );
}
