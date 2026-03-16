"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CTABanner } from "@/components/CTABanner";
import { FAQSchema } from "@/components/FAQSchema";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { ServiceSchema } from "@/components/ServiceSchema";

const benefits = [
  { title: "Look Natural", text: "Implants are custom-made to match your existing teeth in shape, size, and color. No one will know the difference." },
  { title: "Last a Lifetime", text: "With proper care, dental implants can last 25+ years — many patients keep them for life." },
  { title: "Preserve Jawbone", text: "Unlike bridges or dentures, implants stimulate your jawbone and prevent the bone loss that happens after tooth loss." },
  { title: "Eat Anything You Want", text: "Implants function like real teeth. No food restrictions, no slipping, no adhesives — just bite and chew normally." },
];

const processSteps = [
  { step: "01", title: "Consultation & Planning", text: "We take 3D scans of your jaw, review your health history, and create a personalized treatment plan tailored to your needs." },
  { step: "02", title: "Implant Placement", text: "A small titanium post is placed into your jawbone. This acts as the root for your new tooth. Most patients say it's easier than expected." },
  { step: "03", title: "Healing & Integration", text: "Over 3–6 months, the implant fuses with your jawbone in a process called osseointegration. You'll wear a temporary restoration during this time." },
  { step: "04", title: "Crown Placement", text: "Once healed, we attach a custom-made crown that looks and feels just like a natural tooth. You're done — enjoy your new smile." },
];

const comparison = {
  categories: ["Longevity", "Look & Feel", "Maintenance", "Bone Preservation", "Cost"],
  options: [
    { name: "Implants", values: ["25+ years / lifetime", "Looks and feels like a real tooth", "Brush and floss normally", "Preserves jawbone", "Higher upfront, lower long-term"] },
    { name: "Bridges", values: ["5–15 years", "Good appearance, less natural feel", "Special flossing required", "Does not preserve bone", "Moderate upfront cost"] },
    { name: "Dentures", values: ["5–10 years", "Can slip or feel bulky", "Daily removal and cleaning", "Does not preserve bone", "Lowest upfront cost"] },
  ],
};

const candidateChecklist = [
  "Healthy gums (or willing to treat gum disease first)",
  "Adequate jawbone density (or willing to do a bone graft)",
  "Non-smoker (or willing to quit during healing)",
  "Committed to good oral hygiene",
  "Looking for a permanent, long-term solution",
];

const faqs = [
  { q: "How much do dental implants cost?", a: "The cost varies depending on how many implants you need and whether additional procedures like bone grafting are required. We'll give you a detailed estimate during your consultation." },
  { q: "Does insurance cover implants?", a: "Some insurance plans cover a portion of implant treatment. Denielle, our insurance coordinator, will check your benefits and let you know exactly what's covered." },
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
      <section className="py-10 sm:py-20 bg-white">
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

      {/* Why Choose Implants */}
      <section className="py-20 sm:py-24 bg-gray-50">
        <div className="mx-auto max-w-5xl px-4">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Why Choose Implants?</h2>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b, i) => (
              <motion.div key={b.title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="bg-white rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-1">{b.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{b.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Implant Process */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="mx-auto max-w-5xl px-4">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">The Implant Process</h2>
            <p className="text-gray-400 text-sm mt-2">From consultation to your new smile.</p>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((s, i) => (
              <motion.div key={s.step} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="bg-gray-50 rounded-xl p-6">
                <p className="text-primary text-3xl font-extrabold mb-2">{s.step}</p>
                <h3 className="font-bold text-gray-900 mb-1">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implants vs Other Options */}
      <section className="py-20 sm:py-24 bg-gray-50">
        <div className="mx-auto max-w-5xl px-4">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Implants vs. Other Options</h2>
            <p className="text-gray-400 text-sm mt-2">See how implants compare to bridges and dentures.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl overflow-hidden">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left p-4 text-sm font-bold text-gray-900" />
                  {comparison.options.map((opt) => (
                    <th key={opt.name} className="text-left p-4 text-sm font-bold text-gray-900">{opt.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparison.categories.map((cat, ci) => (
                  <tr key={cat} className={ci < comparison.categories.length - 1 ? "border-b border-gray-100" : ""}>
                    <td className="p-4 text-sm font-semibold text-gray-700">{cat}</td>
                    {comparison.options.map((opt) => (
                      <td key={opt.name} className="p-4 text-sm text-gray-500">{opt.values[ci]}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Am I a Candidate */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="mx-auto max-w-3xl px-4">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Am I a Candidate?</h2>
            <p className="text-gray-400 text-sm mt-2">Most adults are good candidates for implants. Here&apos;s what we look for.</p>
          </motion.div>
          <div className="space-y-3">
            {candidateChecklist.map((item, i) => (
              <motion.div key={item} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} className="flex items-start gap-3 bg-gray-50 rounded-xl p-5">
                <span className="h-2 w-2 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                <p className="text-gray-700 text-[15px] font-medium">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-24 bg-gray-50">
        <div className="mx-auto max-w-2xl px-4">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Common Questions</h2>
          </motion.div>
          <div className="bg-white rounded-xl p-6">
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
