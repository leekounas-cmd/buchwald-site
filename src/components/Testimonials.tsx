"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const reviews = [
  {
    quote: "Dr. Buchwald and his team are amazing! They made me feel so comfortable during my visit. The office is modern and clean, and the staff is incredibly friendly.",
    name: "Sarah M.",
    city: "Richardson",
    rating: 5,
  },
  {
    quote: "Best dental experience I've ever had. They explained everything clearly and were so gentle. My kids actually look forward to their cleanings now!",
    name: "James T.",
    city: "Plano",
    rating: 5,
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <section className="py-20 sm:py-24 bg-gray-50">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <a
            href="https://share.google/9gal12WjpTrHj1b4V"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mb-10 hover:opacity-80 transition-opacity"
          >
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="h-5 w-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm text-gray-500 font-medium">
              4.9 on Google &middot; 433 reviews
            </span>
          </a>

          <div className="relative min-h-[160px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <blockquote className="text-xl sm:text-2xl font-medium text-gray-900 leading-relaxed mb-6 max-w-2xl mx-auto">
                  &ldquo;{reviews[current].quote}&rdquo;
                </blockquote>
                <p className="text-gray-900 font-semibold text-sm">
                  {reviews[current].name}
                </p>
                <p className="text-gray-400 text-sm">{reviews[current].city}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-1.5 mt-8">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === current ? "bg-primary w-6" : "bg-gray-200 w-1.5 hover:bg-gray-300"
                }`}
                aria-label={`Review ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Review Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Dentist",
            name: "Buchwald Family Dentistry & Orthodontics",
            review: reviews.map((r) => ({
              "@type": "Review",
              reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5 },
              author: { "@type": "Person", name: r.name },
              reviewBody: r.quote,
            })),
          }),
        }}
      />
    </>
  );
}
