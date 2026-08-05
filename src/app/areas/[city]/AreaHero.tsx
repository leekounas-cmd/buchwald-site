"use client";

import { motion } from "motion/react";

export function AreaHero({ name, description }: { name: string; description: string }) {
  return (
    <section className="py-10 sm:py-16 bg-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-primary-dark text-xs font-bold uppercase tracking-[0.22em] mb-3">
              Dentist Near {name}, TX
            </p>
            <h1 className="font-archivo text-4xl sm:text-5xl text-gray-900 leading-[1.1] mb-5">
              {name}, TX Dentist — Buchwald Family Dentistry
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed">{description}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
