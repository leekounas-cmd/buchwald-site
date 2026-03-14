"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const reviews = [
  {
    quote:
      "Dr. Buchwald and his team are amazing! They made me feel so comfortable during my visit. The office is modern and clean, and the staff is incredibly friendly.",
    name: "Sarah M.",
    city: "Richardson",
  },
  {
    quote:
      "Best dental experience I've ever had. They explained everything clearly and were so gentle. My kids actually look forward to their cleanings now!",
    name: "James T.",
    city: "Plano",
  },
  {
    quote:
      "I got my Invisalign here and the results are incredible. The team was supportive throughout the entire process. Worth every penny!",
    name: "Michelle R.",
    city: "Richardson",
  },
  {
    quote:
      "Needed a crown and was nervous, but Dr. Buchwald made it completely painless. The whole process was quick and professional. 10/10!",
    name: "David K.",
    city: "Allen",
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-dark py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-teal text-sm font-semibold tracking-wider uppercase mb-3">
            What Our Patients Say
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-12">
            Real Stories, Real Smiles
          </h2>
        </motion.div>

        <div className="relative min-h-[200px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <blockquote className="font-heading text-lg sm:text-xl italic text-white/90 leading-relaxed mb-6 max-w-2xl mx-auto">
                &ldquo;{reviews[current].quote}&rdquo;
              </blockquote>
              <p className="text-teal font-semibold">
                {reviews[current].name}
              </p>
              <p className="text-white/50 text-sm">{reviews[current].city}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2.5 w-2.5 rounded-full transition-all ${
                i === current ? "bg-teal w-6" : "bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to review ${i + 1}`}
            />
          ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-8">
          <span className="inline-block rounded-full bg-white/10 px-5 py-2 text-xs font-medium text-white/70">
            5.0 on Google &middot; Trusted by 100+ Families
          </span>
        </div>
      </div>
    </section>
  );
}
