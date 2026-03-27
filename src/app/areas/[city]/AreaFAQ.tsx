"use client";

import { motion } from "motion/react";
import { useState } from "react";

type FAQ = { q: string; a: string };

export function AreaFAQ({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full text-left bg-white rounded-xl p-5 transition-all hover:shadow-sm"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-bold text-gray-900 text-sm">{faq.q}</h3>
                <span className="text-primary text-lg flex-shrink-0 leading-none">
                  {isOpen ? "\u2212" : "+"}
                </span>
              </div>
              {isOpen && (
                <p className="text-gray-500 text-sm leading-relaxed mt-3">{faq.a}</p>
              )}
            </button>
          </motion.div>
        );
      })}
    </div>
  );
}
