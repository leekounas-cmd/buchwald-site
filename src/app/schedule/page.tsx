"use client";

import { useState } from "react";
import { motion } from "motion/react";

const FORMSPREE_ID = "xpqyyjkl";

const dayOptions = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Any Day",
];

export default function SchedulePage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("form-type", "April Schedule Request");

    const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    setLoading(false);

    if (res.ok) {
      setSubmitted(true);
    } else {
      setError("Something went wrong. Please call us at (972) 644-3280.");
    }
  }

  if (submitted) {
    return (
      <section className="py-20 sm:py-32 bg-white">
        <div className="mx-auto max-w-lg px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">You&apos;re All Set</h1>
            <p className="text-gray-500 text-lg leading-relaxed mb-2">
              We&apos;ll send you a text to confirm your appointment.
            </p>
            <p className="text-gray-500 text-base">
              Keep an eye out — just reply to confirm and you&apos;re locked in.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-10 sm:py-20 bg-white">
      <div className="mx-auto max-w-xl px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center mb-8">
          <p className="text-primary text-sm font-bold uppercase tracking-wider mb-3">April Appointments</p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">Time to Get on the Schedule</h1>
          <p className="text-gray-500 text-base max-w-md mx-auto">
            April is filling up fast. Pick what works for you and we&apos;ll get you locked in.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 mb-8 text-center"
        >
          <p className="text-amber-800 text-sm font-semibold">Spots are limited — don&apos;t wait until they&apos;re gone.</p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="space-y-5"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-1.5">Your Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                placeholder="First & Last"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-1.5">Phone *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                placeholder="(555) 123-4567"
              />
            </div>
          </div>

          <div>
            <label htmlFor="preferred-date" className="block text-sm font-semibold text-gray-900 mb-1.5">What Day Works Best? *</label>
            <input
              type="date"
              id="preferred-date"
              name="preferred-date"
              required
              min="2026-04-01"
              max="2026-04-30"
              className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="backup-day" className="block text-sm font-semibold text-gray-900 mb-1.5">Backup Day of Week</label>
              <select
                id="backup-day"
                name="backup-day"
                className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none bg-white"
              >
                <option value="">If that date doesn&apos;t work...</option>
                {dayOptions.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="preferred-time" className="block text-sm font-semibold text-gray-900 mb-1.5">Morning or Afternoon? *</label>
              <select
                id="preferred-time"
                name="preferred-time"
                required
                className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none bg-white"
              >
                <option value="">Select</option>
                <option value="Morning">Morning</option>
                <option value="Afternoon">Afternoon</option>
                <option value="Either">Either works</option>
              </select>
            </div>
          </div>

          {error && (
            <p className="text-red-500 text-sm font-medium">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-primary px-7 py-3.5 text-sm font-bold text-white hover:bg-primary-dark transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : "Lock In My Spot"}
          </button>

          <div className="bg-gray-50 rounded-lg px-4 py-3 text-center">
            <p className="text-gray-500 text-xs">
              We&apos;ll send you a text to confirm your appointment. Just reply to lock it in.
            </p>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
