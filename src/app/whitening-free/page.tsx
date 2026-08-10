"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { trackConversion } from "@/components/Analytics";
import { FORMSPREE_WHITENING } from "@/lib/formspree";
const PHONE = "(972) 644-3280";
const PHONE_HREF = "tel:972-644-3280";

const includedItems = [
  { title: "Comprehensive Exam & Consultation", desc: "Dr. Buchwald walks you through everything he sees. No pressure, no upselling." },
  { title: "Digital X-Rays", desc: "Full set of digital X-rays with 80% less radiation than traditional film." },
  { title: "Professional Cleaning", desc: "A gentle, thorough cleaning. Nervous at the dentist? Tell us up front and we'll adjust to your comfort." },
  { title: "Insurance Verified Before You Come In", desc: "Lee verifies your benefits and tells you exactly what (if anything) you owe. No surprise bills." },
];

const dayOptions = ["Monday", "Tuesday", "Wednesday", "Thursday", "No Preference"];

function trackTelClick() {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "tel_click", {
      page_path: "/whitening-free",
    });
  }
}

function Check() {
  return (
    <svg className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function WhiteningFreePage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [firstName, setFirstName] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("_subject", "New Patient Lead");
    data.append("source", "whitening-free-landing");

    const res = await fetch(`https://formspree.io/f/${FORMSPREE_WHITENING}`, {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    setLoading(false);

    if (res.ok) {
      trackConversion(process.env.NEXT_PUBLIC_GADS_CONVERSION_LABEL);
      if (typeof window !== "undefined" && typeof window.gtag === "function") {
        window.gtag("event", "form_submit", {
          form_name: "new_patient_form",
          page_path: "/whitening-free",
        });
      }
      if (typeof window !== "undefined" && typeof (window as unknown as { fbq?: (...args: unknown[]) => void }).fbq === "function") {
        (window as unknown as { fbq: (...args: unknown[]) => void }).fbq("track", "Lead", {
          content_name: "New Patient Lead",
        });
      }
      const fn = data.get("first_name");
      if (fn) setFirstName(String(fn));
      setSubmitted(true);
    } else {
      setError("Something went wrong. Please call us at " + PHONE + ".");
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Minimal header */}
      <header className="bg-white border-b border-gray-100">
        <div className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo-color.png"
              alt="Buchwald Family Dentistry"
              width={140}
              height={40}
              className="h-8 w-auto sm:h-10"
              priority
            />
          </Link>
          <a href={PHONE_HREF} onClick={trackTelClick} className="text-sm sm:text-base font-bold text-primary hover:underline">
            {PHONE}
          </a>
        </div>
      </header>

      {/* Top bar */}
      <div className="bg-primary text-white text-center py-2 px-4 text-xs sm:text-sm font-semibold">
        Now accepting new patients — Richardson, TX
      </div>

      {!submitted ? (
        <main className="mx-auto max-w-5xl px-4 py-8 sm:py-12">
          {/* Hero — full width on all screens */}
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="mb-8 lg:mb-12 max-w-3xl">
            <p className="text-primary text-xs sm:text-sm font-bold uppercase tracking-wider mb-3">Now Accepting New Patients · Richardson, TX</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-[1.1] mb-4">
              Your new patient visit, <span className="text-primary">covered by insurance.</span>
            </h1>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-5">
              Cleaning, exam, and X-rays are typically covered at <span className="font-bold text-gray-900">100% under preventive care</span> by most PPO plans. We verify your benefits before your visit so you know exactly what (if anything) you owe.
            </p>

            {/* Stars */}
            <div className="flex items-center gap-3">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-gray-600 font-medium">4.9 on Google · 441 reviews</span>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Details column — order-2 on mobile (after form), order-1 on desktop (left) */}
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="order-2 lg:order-1">

              {/* What's included */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-100 mb-6">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">What&apos;s Included With Your Cleaning</p>
                <ul className="space-y-4">
                  {includedItems.map((item) => (
                    <li key={item.title} className="flex items-start gap-3">
                      <Check />
                      <div>
                        <p className="text-sm font-bold text-gray-900">{item.title}</p>
                        <p className="text-sm text-gray-500 mt-0.5">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Clinical honesty block */}
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 sm:p-7 mb-6">
                <p className="text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">How This Actually Works</p>
                <p className="text-gray-700 text-sm leading-relaxed mb-3">
                  Every new patient gets a thorough exam first. No surprises, no upsells.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-700 font-bold mt-0.5">•</span>
                    <span>If your mouth is healthy, you get your standard cleaning the same visit.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-700 font-bold mt-0.5">•</span>
                    <span>If your hygienist finds significant buildup below the gumline, you&apos;ll need a deep cleaning first. It&apos;s what keeps gum disease from progressing, and we explain costs before any work happens.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-700 font-bold mt-0.5">•</span>
                    <span>Final clinical decisions always belong to Dr. Buchwald and your hygienist.</span>
                  </li>
                </ul>
                <p className="text-xs text-gray-500 mt-3">
                  <Link href="/blog/what-is-a-deep-cleaning" className="text-primary font-semibold underline">
                    Why deep cleanings matter →
                  </Link>
                </p>
              </div>

              {/* Payment options note */}
              <div className="bg-gray-100 rounded-xl p-4 mb-6">
                <p className="text-sm text-gray-700">
                  <span className="font-bold">No insurance?</span> We accept Cherry financing and offer membership plans starting at <span className="font-bold">$34/mo</span>.
                </p>
              </div>

              {/* Trust strip */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-gray-500">
                <div className="flex items-center gap-1.5">
                  <svg className="h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                  </svg>
                  Same-day appointments
                </div>
                <div className="flex items-center gap-1.5">
                  <svg className="h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l2.39 7.36H22l-6.19 4.5L18.2 21 12 16.5 5.8 21l2.39-7.14L2 9.36h7.61z" />
                  </svg>
                  Most PPO plans accepted
                </div>
                <div className="flex items-center gap-1.5">
                  <svg className="h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />
                  </svg>
                  Cherry financing
                </div>
              </div>

              {/* Doctor card — bottom of details column */}
              <div className="mt-8 bg-white rounded-2xl border border-gray-100 p-5 flex items-center gap-4">
                <Image
                  src="/images/dr-buchwald.jpg"
                  alt="Dr. Max Buchwald Jr."
                  width={56}
                  height={56}
                  className="h-14 w-14 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold text-gray-900 text-sm">Dr. Max Buchwald Jr.</p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Family dentist in Richardson, TX. Serving patients across Plano, Allen, and Garland.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Form column — order-1 on mobile (first), order-2 on desktop (right) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="order-1 lg:order-2 lg:sticky lg:top-4 self-start"
            >
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8">
                <div className="text-center mb-5">
                  <p className="text-primary text-xs font-bold uppercase tracking-wider mb-1">Get Started</p>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900">Save your spot</h2>
                  <p className="text-gray-500 text-sm mt-1">Lee will reach out within one business day.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      name="first_name"
                      required
                      placeholder="First name"
                      className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                    <input
                      type="text"
                      name="last_name"
                      required
                      placeholder="Last name"
                      className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                  </div>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Email address"
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="Phone number"
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                  <input
                    type="text"
                    name="insurance_provider"
                    placeholder="Insurance provider (optional)"
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                  <select
                    name="preferred_day"
                    required
                    defaultValue=""
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white appearance-none"
                  >
                    <option value="" disabled>Preferred day</option>
                    {dayOptions.map((d) => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>

                  {error && <p className="text-red-500 text-sm font-medium">{error}</p>}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-full bg-primary px-5 py-3.5 text-base font-bold text-white hover:bg-primary-dark transition-colors disabled:opacity-50"
                  >
                    {loading ? "Submitting..." : "Save My Spot"}
                  </button>

                  <p className="text-[11px] text-gray-400 text-center leading-relaxed">
                    By submitting, you agree to be contacted at this email and phone. No spam. If you share insurance info, we use it only to verify your benefits before your visit.
                  </p>
                </form>

                <div className="mt-5 pt-5 border-t border-gray-100 text-center">
                  <p className="text-xs text-gray-500 mb-1">Prefer to call?</p>
                  <a href={PHONE_HREF} onClick={trackTelClick} className="text-primary font-bold text-sm hover:underline">
                    {PHONE}
                  </a>
                </div>
              </div>

              <p className="mt-4 text-[11px] text-gray-400 text-center leading-relaxed">
                300 N Coit Rd #245, Richardson, TX 75080 · New patients welcome. Coverage subject to your plan. Treatment determined by clinical evaluation.
              </p>
            </motion.div>
          </div>
        </main>
      ) : (
        /* Confirmation */
        <main className="mx-auto max-w-xl px-4 py-16 sm:py-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl border border-gray-100 p-8 sm:p-12 text-center"
          >
            <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
              <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="font-archivo text-2xl sm:text-3xl text-gray-900 mb-3">
              {firstName ? `You're in, ${firstName}.` : "You're in."}
            </h1>
            <p className="text-gray-600 text-base leading-relaxed mb-6">
              Lee will reach out within one business day to schedule your visit.
            </p>
            <div className="bg-primary/5 rounded-xl p-5 mb-6 text-left">
              <p className="text-xs font-bold uppercase tracking-wider text-primary mb-2">What happens next</p>
              <ol className="space-y-2 text-sm text-gray-700">
                <li><span className="font-bold">1.</span> Lee reaches out to confirm a time</li>
                <li><span className="font-bold">2.</span> If you have insurance, Lee verifies your benefits before the visit</li>
                <li><span className="font-bold">3.</span> Show up, get your cleaning, meet the team</li>
              </ol>
            </div>
            <a
              href={PHONE_HREF}
              onClick={trackTelClick}
              className="inline-block rounded-full bg-primary px-6 py-3 text-sm font-bold text-white hover:bg-primary-dark transition-colors"
            >
              Or call us now: {PHONE}
            </a>
          </motion.div>
        </main>
      )}

      {/* Minimal footer */}
      <footer className="mt-12 border-t border-gray-100 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Buchwald Family Dentistry</p>
          <p>300 N Coit Rd #245, Richardson, TX 75080 · {PHONE}</p>
        </div>
      </footer>
    </div>
  );
}
