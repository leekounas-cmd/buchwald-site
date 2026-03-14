"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CTABanner } from "@/components/CTABanner";

const benefits = [
  {
    emoji: "👁️",
    title: "See What We See",
    description:
      "High-definition intraoral images let you see exactly what's happening in your mouth — no guessing.",
  },
  {
    emoji: "🔍",
    title: "Catch Issues Earlier",
    description:
      "Detailed imaging helps us spot cavities, cracks, and other problems before they become painful or expensive.",
  },
  {
    emoji: "🎯",
    title: "Personalized Care",
    description:
      "With a clear picture of your dental health, we can create a treatment plan that's tailored to you.",
  },
  {
    emoji: "📊",
    title: "Track Changes",
    description:
      "We save your images so we can monitor changes over time and keep you informed about your progress.",
  },
  {
    emoji: "💬",
    title: "Better Conversations",
    description:
      "When you can see what we see, it's easier to understand your options and make confident decisions.",
  },
  {
    emoji: "⏱️",
    title: "Quick and Comfortable",
    description:
      "The scan takes just minutes, is completely painless, and gives us a detailed look at your oral health.",
  },
];

const faqs = [
  {
    q: "What is InnerView?",
    a: "InnerView is our advanced intraoral imaging system that captures high-definition photos and video of the inside of your mouth. It gives both you and our team a clear, detailed view of your dental health.",
  },
  {
    q: "Does it hurt?",
    a: "Not at all. The InnerView scan is completely non-invasive and painless. It's a small camera that takes detailed images — you won't feel a thing.",
  },
  {
    q: "Do I get to see the images?",
    a: "Absolutely. We walk you through every image so you can see exactly what we see. It's one of the best ways to understand your oral health.",
  },
  {
    q: "Will it replace X-rays?",
    a: "InnerView complements X-rays but doesn't replace them. X-rays show what's happening below the surface, while InnerView gives us a detailed look at the visible surfaces of your teeth and gums.",
  },
  {
    q: "Can it detect bite or grinding issues?",
    a: "Yes. The detailed imaging can reveal signs of wear, grinding, and bite alignment issues that might not be obvious during a standard exam.",
  },
  {
    q: "How much does it cost?",
    a: "InnerView imaging is included as part of your comprehensive exam at no additional charge. We believe every patient deserves to see and understand their dental health.",
  },
  {
    q: "Is it only for new patients?",
    a: "No. We use InnerView for all patients — new and existing. It's part of how we provide thorough, transparent care at every visit.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-light">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="font-heading text-lg font-semibold text-dark pr-4">
          {q}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          className="text-teal text-2xl flex-shrink-0"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-gray text-sm leading-relaxed pb-5">{a}</p>
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
      <section className="relative bg-gradient-to-br from-dark via-dark to-primary/30 pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-teal text-sm font-semibold tracking-wider uppercase mb-4">
              Advanced Technology
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              InnerView: See Your Smile in Full Detail
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Our high-definition intraoral imaging gives you and our team a crystal-clear view of your dental health.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-teal text-sm font-semibold tracking-wider uppercase mb-3">
              How It Helps
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-dark">
              A Better Way to Understand Your Care
            </h2>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ y: -4 }}
                className="rounded-2xl bg-light-bg p-8 transition-shadow hover:shadow-xl"
              >
                <span className="text-4xl mb-4 block">{b.emoji}</span>
                <h3 className="font-heading text-lg font-semibold text-dark mb-2">
                  {b.title}
                </h3>
                <p className="text-gray text-sm leading-relaxed">
                  {b.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-28 bg-light-bg">
        <div className="mx-auto max-w-3xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-teal text-sm font-semibold tracking-wider uppercase mb-3">
              FAQ
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-dark">
              Common Questions
            </h2>
          </motion.div>

          <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm">
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
