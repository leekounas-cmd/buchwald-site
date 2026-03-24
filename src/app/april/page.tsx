"use client";

import { useState } from "react";
import { motion } from "motion/react";

const FORMSPREE_ID = "xpqyyjkl";

const dayOptions = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "No Preference",
];

const timeOptions = [
  "Early Morning (7am-9am)",
  "Mid Morning (9am-11am)",
  "Late Morning (11am-1pm)",
  "Afternoon (1pm-3pm)",
  "No Preference",
];

export default function AprilBookingPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("source", "April Hygiene Text Blast");
    data.append("service", "Cleaning & Exam");

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
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">You&apos;re All Set!</h1>
            <p className="text-gray-500 text-lg leading-relaxed">
              We&apos;ll reach out shortly to confirm your April appointment. If you need us sooner, call{" "}
              <a href="tel:972-644-3280" className="text-primary font-bold">(972) 644-3280</a>.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-10 sm:py-20 bg-white">
      <div className="mx-auto max-w-lg px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-bold text-primary uppercase tracking-wider">April Openings</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
            Time for Your Cleaning
          </h1>
          <p className="text-gray-500 text-base max-w-sm mx-auto">
            We have openings in April. Pick a day and time that works and we&apos;ll get you on the schedule.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="grid grid-cols-3 gap-3 mb-8"
        >
          <div className="text-center rounded-xl bg-gray-50 py-3.5 px-2">
            <p className="text-lg font-extrabold text-gray-900">45-60</p>
            <p className="text-[11px] text-gray-500 font-medium mt-0.5">Min Visit</p>
          </div>
          <div className="text-center rounded-xl bg-gray-50 py-3.5 px-2">
            <p className="text-lg font-extrabold text-gray-900">Mon-Thu</p>
            <p className="text-[11px] text-gray-500 font-medium mt-0.5">7am - 3pm</p>
          </div>
          <div className="text-center rounded-xl bg-gray-50 py-3.5 px-2">
            <p className="text-lg font-extrabold text-gray-900">4.9</p>
            <p className="text-[11px] text-gray-500 font-medium mt-0.5">Google Rating</p>
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-4"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-1.5">Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              placeholder="Your name"
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

          <div className="grid gap-4 grid-cols-2">
            <div>
              <label htmlFor="preferred-day" className="block text-sm font-semibold text-gray-900 mb-1.5">Preferred Day</label>
              <select
                id="preferred-day"
                name="preferred-day"
                className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none bg-white"
              >
                <option value="">Any day</option>
                {dayOptions.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="preferred-time" className="block text-sm font-semibold text-gray-900 mb-1.5">Preferred Time</label>
              <select
                id="preferred-time"
                name="preferred-time"
                className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none bg-white"
              >
                <option value="">Any time</option>
                {timeOptions.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
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
            {loading ? "Sending..." : "Book My Cleaning"}
          </button>

          <p className="text-center text-gray-400 text-xs">
            Or call us at <a href="tel:972-644-3280" className="text-primary font-semibold">(972) 644-3280</a>
          </p>
        </motion.form>
      </div>
    </section>
  );
}
