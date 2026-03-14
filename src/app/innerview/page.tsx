"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CTABanner } from "@/components/CTABanner";

const benefits = [
  {
    title: "Helps Spot Small Issues Earlier",
    description: "Early wear, cracks, inflammation, and bite changes are easier to catch before they become bigger problems.",
  },
  {
    title: "More Personalized Care",
    description: "Your cleaning, prevention plan, and treatment options are tailored to what your mouth needs.",
  },
  {
    title: "Track Changes Over Time",
    description: "We can compare images from visit to visit to monitor areas and show progress.",
  },
  {
    title: "Better Conversations, Fewer Surprises",
    description: "You'll understand the 'why' behind any plan — so you can decide confidently.",
  },
  {
    title: "Quick, Comfortable, and Non-Invasive",
    description: "No needles, no discomfort — just better information in a simple scan.",
  },
];

const faqs = [
  {
    q: "What is InnerView?",
    a: "InnerView is a quick dental imaging scan that gives a detailed view of your teeth and bite so we can plan your care more precisely.",
  },
  {
    q: "Does InnerView hurt?",
    a: "No. It's comfortable, non-invasive, and only takes a few minutes.",
  },
  {
    q: "Why do you recommend InnerView?",
    a: "It helps us show you what we see, catch concerns earlier, and personalize your care.",
  },
  {
    q: "Do I get to see the images?",
    a: "Yes. We review everything with you and explain it in simple terms.",
  },
  {
    q: "How long does it take?",
    a: "Usually just a few minutes, and we can go over the results the same day.",
  },
  {
    q: "Is InnerView safe?",
    a: "Yes. It's a non-invasive scan used to help us evaluate and plan with better detail.",
  },
  {
    q: "Is InnerView only for new patients?",
    a: "Not at all. It's helpful for new patients, routine visits, and anyone who wants a clearer picture of their oral health.",
  },
  {
    q: "Will InnerView replace X-rays?",
    a: "InnerView is a different type of imaging. If X-rays are needed, we'll let you know and explain why.",
  },
  {
    q: "How much does InnerView cost?",
    a: "It depends on your visit and insurance. We'll always review any fees before we start.",
  },
  {
    q: "Can InnerView help with bite or grinding issues?",
    a: "Yes. It can help us evaluate wear patterns and bite-related concerns so we can recommend the right next step.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-light last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-4 text-left gap-4"
      >
        <span className="font-semibold text-dark text-[15px]">{q}</span>
        <motion.svg
          animate={{ rotate: open ? 45 : 0 }}
          className="h-4 w-4 text-primary flex-shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </motion.svg>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="text-gray text-sm leading-relaxed pb-4">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function InnerViewPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dark pt-16 pb-20 sm:pt-20 sm:pb-28">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">
              Advanced Technology
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
              See Your Smile in Full Detail
            </h1>
            <p className="text-white/50 text-base sm:text-lg max-w-xl mx-auto">
              InnerView helps us capture a detailed view of your teeth and bite so we can explain what we see, spot concerns earlier, and personalize your care with confidence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-dark">
              How InnerView Helps You
            </h2>
          </motion.div>

          <div className="space-y-3">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-xl bg-light border border-gray-light p-6 flex gap-4 items-start"
              >
                <div className="h-8 w-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-dark mb-1">{b.title}</h3>
                  <p className="text-gray text-sm leading-relaxed">{b.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-24 bg-light">
        <div className="mx-auto max-w-2xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-dark">
              Common Questions
            </h2>
          </motion.div>

          <div className="bg-white rounded-xl border border-gray-light p-6">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
