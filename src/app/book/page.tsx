"use client";

import { useState } from "react";
import { motion } from "motion/react";

const FORMSPREE_ID = "xpqyyjkl";

const serviceOptions = [
  "$99 New Patient Cleaning",
  "Cleaning & Exam",
  "General Dentistry",
  "Cosmetic Dentistry",
  "Restorative Dentistry",
  "Invisalign Consultation",
  "Teeth Whitening",
  "InnerView Imaging",
  "Laser Therapy",
  "Emergency / Pain",
  "Other",
];

const dayOptions = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "No Preference",
];

const timeOptions = [
  "Early Morning (7am–9am)",
  "Mid Morning (9am–11am)",
  "Late Morning (11am–1pm)",
  "Afternoon (1pm–3pm)",
  "No Preference",
];

export default function BookPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);

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
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Request Received</h1>
            <p className="text-gray-500 text-lg leading-relaxed">
              We&apos;ll get back to you within 1 business day to confirm your appointment. If you need immediate help, call us at{" "}
              <a href="tel:972-644-3280" className="text-primary font-bold">(972) 644-3280</a>.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-10 sm:py-20 bg-white">
      <div className="mx-auto max-w-2xl px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center mb-10">
          <p className="text-primary text-sm font-bold uppercase tracking-wider mb-3">Get Started</p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">Request an Appointment</h1>
          <p className="text-gray-500 text-base">Fill out the form below and we&apos;ll reach out to confirm your visit.</p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-5"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-1.5">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                placeholder="John Smith"
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
            <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-1.5">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label htmlFor="patient-type" className="block text-sm font-semibold text-gray-900 mb-1.5">Patient Type *</label>
            <select
              id="patient-type"
              name="patient-type"
              required
              className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none bg-white"
            >
              <option value="">Are you a new or existing patient?</option>
              <option value="New Patient">New Patient</option>
              <option value="Existing Patient">Existing Patient</option>
            </select>
          </div>

          <div>
            <label htmlFor="service" className="block text-sm font-semibold text-gray-900 mb-1.5">Service Interested In *</label>
            <select
              id="service"
              name="service"
              required
              className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none bg-white"
            >
              <option value="">Select a service</option>
              {serviceOptions.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="preferred-date" className="block text-sm font-semibold text-gray-900 mb-1.5">Preferred Date</label>
            <input
              type="date"
              id="preferred-date"
              name="preferred-date"
              className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="preferred-day" className="block text-sm font-semibold text-gray-900 mb-1.5">Preferred Day</label>
              <select
                id="preferred-day"
                name="preferred-day"
                className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none bg-white"
              >
                <option value="">Select a day</option>
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
                <option value="">Select a time</option>
                {timeOptions.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="insurance" className="block text-sm font-semibold text-gray-900 mb-1.5">Insurance Provider</label>
            <input
              type="text"
              id="insurance"
              name="insurance"
              className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              placeholder="e.g. Delta Dental, Cigna, No Insurance"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-1.5">Additional Details</label>
            <textarea
              id="message"
              name="message"
              rows={3}
              className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
              placeholder="Any concerns, pain, or anything else we should know..."
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm font-medium">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-primary px-7 py-3.5 text-sm font-bold text-white hover:bg-primary-dark transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : "Submit Request"}
          </button>

          <p className="text-center text-gray-400 text-xs">
            Or call us directly at <a href="tel:972-644-3280" className="text-primary font-semibold">(972) 644-3280</a>
          </p>
        </motion.form>
      </div>
    </section>
  );
}
