"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { trackConversion } from "@/components/Analytics";

const FORMSPREE_ID = "xpqyyjkl";
const PHONE = "(972) 644-3280";
const PHONE_HREF = "tel:972-644-3280";

const includedItems = [
  { title: "Comprehensive Exam & Consultation", desc: "Dr. Buchwald walks you through everything he sees. No pressure, no upselling." },
  { title: "Digital X-Rays", desc: "Full set of digital X-rays with 80% less radiation than traditional film." },
  { title: "Professional Teeth Cleaning", desc: "Gentle cleaning with Melisa, our hygienist with 2,000+ cleanings under her belt." },
  { title: "BONUS: Jet Whitening", desc: "Stain removal treatment included free with your first visit." },
];

const dayOptions = ["Monday", "Tuesday", "Wednesday", "Thursday", "No Preference"];

function Check() {
  return (
    <svg className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function SpecialPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [firstName, setFirstName] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("_subject", "New $149 Voucher Claim");
    data.append("source", "voucher-landing-page");

    const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    setLoading(false);

    if (res.ok) {
      trackConversion(process.env.NEXT_PUBLIC_GADS_CONVERSION_LABEL);
      if (typeof window !== "undefined" && typeof (window as unknown as { fbq?: (...args: unknown[]) => void }).fbq === "function") {
        (window as unknown as { fbq: (...args: unknown[]) => void }).fbq("track", "Lead", {
          content_name: "$149 New Patient Voucher",
          value: 149,
          currency: "USD",
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
          <a href={PHONE_HREF} className="text-sm sm:text-base font-bold text-primary hover:underline">
            {PHONE}
          </a>
        </div>
      </header>

      {/* Scarcity bar */}
      <div className="bg-primary text-white text-center py-2 px-4 text-xs sm:text-sm font-semibold">
        Only 25 vouchers available this month — claim yours before they&apos;re gone
      </div>

      {!submitted ? (
        <main className="mx-auto max-w-5xl px-4 py-8 sm:py-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left column — offer */}
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
              <p className="text-primary text-xs sm:text-sm font-bold uppercase tracking-wider mb-3">Richardson, TX · New Patient Voucher</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-[1.1] mb-4">
                Claim Your <span className="text-primary">$149</span> New Patient Voucher
              </h1>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
                Experience the Buchwald difference with complete transparency and zero hidden fees. Typically valued at <span className="font-bold text-gray-900">$800+</span>.
              </p>

              {/* Stars */}
              <div className="flex items-center gap-3 mb-8">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-gray-600 font-medium">4.9 on Google · 433+ reviews</span>
              </div>

              {/* What's included */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-100 mb-6">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">What&apos;s Included</p>
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

              {/* Two-path */}
              <div className="grid sm:grid-cols-2 gap-3 mb-6">
                <div className="bg-primary/5 rounded-xl p-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-primary mb-2">Have Insurance?</p>
                  <p className="text-sm text-gray-700">Your visit may be fully covered. We&apos;ll verify your benefits and tell you your out-of-pocket cost before anything is scheduled.</p>
                </div>
                <div className="bg-gray-100 rounded-xl p-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">No Insurance?</p>
                  <p className="text-sm text-gray-700">No problem. Secure your visit for just $149 with the voucher. Membership plans and Cherry financing also available.</p>
                </div>
              </div>

              {/* Trust strip */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-gray-500">
                <div className="flex items-center gap-1.5">
                  <svg className="h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
                  </svg>
                  Lifetime warranty
                </div>
                <div className="flex items-center gap-1.5">
                  <svg className="h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                  </svg>
                  Same-day appointments
                </div>
                <div className="flex items-center gap-1.5">
                  <svg className="h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />
                  </svg>
                  Cherry financing
                </div>
              </div>
            </motion.div>

            {/* Right column — form */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="lg:sticky lg:top-4 self-start"
            >
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8">
                <div className="text-center mb-5">
                  <p className="text-primary text-xs font-bold uppercase tracking-wider mb-1">Claim Your Voucher</p>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900">Where should we send it?</h2>
                  <p className="text-gray-500 text-sm mt-1">We&apos;ll reach out within one business day.</p>
                </div>

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
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
                  <select
                    name="has_insurance"
                    required
                    defaultValue=""
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white appearance-none"
                  >
                    <option value="" disabled>Do you have insurance?</option>
                    <option value="Yes">Yes, I have dental insurance</option>
                    <option value="No">No insurance</option>
                    <option value="Unsure">Not sure</option>
                  </select>

                  {error && <p className="text-red-500 text-sm font-medium">{error}</p>}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-lg bg-primary px-5 py-3.5 text-base font-bold text-white hover:bg-primary-dark transition-colors disabled:opacity-50"
                  >
                    {loading ? "Submitting..." : "Claim My Voucher"}
                  </button>

                  <p className="text-[11px] text-gray-400 text-center leading-relaxed">
                    By submitting, you agree to be contacted at this email and phone. We respect your privacy. No spam.
                  </p>
                </form>

                <div className="mt-5 pt-5 border-t border-gray-100 text-center">
                  <p className="text-xs text-gray-500 mb-1">Prefer to call?</p>
                  <a href={PHONE_HREF} className="text-primary font-bold text-sm hover:underline">
                    {PHONE}
                  </a>
                </div>
              </div>

              {/* Doctor card */}
              <div className="mt-5 bg-white rounded-2xl border border-gray-100 p-5 flex items-center gap-4">
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

              <p className="mt-4 text-[11px] text-gray-400 text-center leading-relaxed">
                300 N Coit Rd #245, Richardson, TX 75080 · *New patients only. Covers a standard cleaning. A deep cleaning may be recommended if it has been a while since your last visit.
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
            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3">
              {firstName ? `You're in, ${firstName}.` : "You're in."}
            </h1>
            <p className="text-gray-600 text-base leading-relaxed mb-6">
              Your voucher is on the way. We&apos;ll reach out within one business day to schedule your visit and answer any questions.
            </p>
            <div className="bg-primary/5 rounded-xl p-5 mb-6 text-left">
              <p className="text-xs font-bold uppercase tracking-wider text-primary mb-2">What happens next</p>
              <ol className="space-y-2 text-sm text-gray-700">
                <li><span className="font-bold">1.</span> Check your email for your voucher</li>
                <li><span className="font-bold">2.</span> We&apos;ll call or text to confirm your appointment</li>
                <li><span className="font-bold">3.</span> Show up and enjoy the Buchwald experience</li>
              </ol>
            </div>
            <a
              href={PHONE_HREF}
              className="inline-block rounded-lg bg-primary px-6 py-3 text-sm font-bold text-white hover:bg-primary-dark transition-colors"
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
