"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ReviewsCarousel } from "@/components/ReviewsCarousel";
import { CTABanner } from "@/components/CTABanner";
import { UrgencyBadge } from "@/components/UrgencyBadge";
import { QuickBookCTA } from "@/components/QuickBookModal";

const BOOKING_URL = "https://book2.getweave.com/359c4bec-a0f0-4d62-9ea8-35a008305267/request-appointment?source=WEBSITE";

const services = [
  {
    title: "Cleaning & Exam",
    description: "Routine cleanings, X-rays, and comprehensive exams to keep your smile healthy.",
    href: "/services/cleaning",
  },
  {
    title: "General Dentistry",
    description: "Fillings, crowns, root canals, extractions, and everyday dental care.",
    href: "/services/general",
  },
  {
    title: "Cosmetic Dentistry",
    description: "Veneers, bonding, and smile makeovers that transform the way you look.",
    href: "/services/cosmetic",
  },
  {
    title: "Teeth Whitening",
    description: "In-office and take-home options for a brighter, more confident smile.",
    href: "/teeth-whitening",
  },
  {
    title: "Invisalign",
    description: "Clear aligners that straighten your teeth without brackets or wires.",
    href: "/invisalign",
  },
  {
    title: "Restorative",
    description: "Implants, bridges, dentures. We rebuild smiles that look and feel natural.",
    href: "/services/restorative",
  },
  {
    title: "InnerView Imaging",
    description: "High-definition imaging so you can see exactly what we see.",
    href: "/innerview",
  },
  {
    title: "Laser Therapy",
    description: "Gentler procedures, less discomfort, and faster recovery with advanced lasers.",
    href: "/laser-therapy",
  },
];

const team = [
  { name: "Dr. Max Buchwald Jr.", role: "Dentist", image: "/images/dr-buchwald.jpg" },
  { name: "Melisa Kounas", role: "Hygienist", image: "/images/melisa.jpg" },
  { name: "Cathy Kounas", role: "Operations", image: "/images/cathy.jpg" },
  { name: "Lee Kounas", role: "Marketing & Insurance", image: "/images/lee.jpg" },
];

const savingsRows = [
  { treatment: "Comprehensive Exam", withPlan: "Included", typical: "$150", save: "$150" },
  { treatment: "Full X-rays", withPlan: "Included", typical: "$150", save: "$150" },
  { treatment: "Cleaning (each)", withPlan: "$150", typical: "$220", save: "$70" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-0 items-start">

            {/* Badge pill — left col, row 1 */}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="order-1 lg:col-start-1 lg:row-start-1 inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold text-primary uppercase tracking-wider mb-6"
            >
              Richardson&apos;s Most-Loved Family Dentist
            </motion.span>

            {/* Headline + subhead — left col, row 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="order-2 lg:col-start-1 lg:row-start-2 mb-6 lg:mb-8"
            >
              <h1 className="font-archivo text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-gray-900 mb-6">
                Dental Care<br />
                That Feels<br />
                <span className="text-primary">Different.</span>
              </h1>
              <p className="text-gray-500 text-lg leading-relaxed max-w-md">
                Richardson&apos;s most-trusted family dentist. We built a practice around making you feel at ease, not on edge.
              </p>
            </motion.div>

            {/* Video card — desktop: right col spanning rows 1-5; mobile: order 3 (between subhead and CTAs) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="order-3 lg:col-start-2 lg:row-start-1 lg:row-span-5 lg:self-center relative mb-8 lg:mb-0"
            >
              {/* Glow */}
              <div className="absolute -inset-4 rounded-[2.5rem] bg-primary/20 blur-2xl" />

              {/* Video card */}
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
                {/* Floating badge — top left */}
                <div className="absolute top-4 left-4 z-10 rounded-full bg-white/90 backdrop-blur-sm px-4 py-2 shadow-md">
                  <p className="text-xs font-bold text-gray-900 leading-tight">FREE Whitening</p>
                  <p className="text-xs text-gray-500 leading-tight">New Patients Only</p>
                </div>
                {/* Floating badge — top right */}
                <div className="absolute top-4 right-4 z-10 rounded-full bg-primary text-white px-4 py-2 shadow-md">
                  <p className="text-xs font-bold leading-tight text-center">Same-Day</p>
                  <p className="text-xs leading-tight text-center opacity-90">Appointments</p>
                </div>

                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster="/images/office-1.jpg"
                  className="w-full object-cover aspect-[4/3]"
                >
                  <source src="/video/hero.mp4" type="video/mp4" />
                </video>
              </div>

              {/* Stat sub-cards */}
              <div className="relative grid grid-cols-3 gap-3 mt-4">
                {[
                  { value: "433+", label: "5-Star Reviews" },
                  { value: "4.9★", label: "Google Rating" },
                  { value: "20+", label: "Yrs Experience" },
                ].map((s) => (
                  <div key={s.label} className="rounded-2xl bg-gray-50 border border-gray-100 px-3 py-3 text-center">
                    <p className="text-lg font-extrabold text-gray-900">{s.value}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTAs — left col, row 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="order-4 lg:col-start-1 lg:row-start-3 mb-6"
            >
              <div className="flex flex-col sm:flex-row gap-3">
                <QuickBookCTA className="rounded-full bg-gray-900 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-gray-800 text-center cursor-pointer">
                  Quick Book, We&apos;ll Call You
                </QuickBookCTA>
                <a
                  href="/whitening-free"
                  className="rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-white transition-all hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/25 text-center"
                >
                  Claim My Free Whitening
                </a>
              </div>
              <p className="text-xs text-gray-400 mt-3">
                Prefer to call? <a href="tel:972-644-3280" className="font-semibold text-gray-700 hover:text-primary transition-colors">(972) 644-3280</a>
              </p>
            </motion.div>

            {/* Stars — left col, row 4 */}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              href="https://share.google/9gal12WjpTrHj1b4V"
              target="_blank"
              rel="noopener noreferrer"
              className="order-5 lg:col-start-1 lg:row-start-4 inline-flex w-fit items-center gap-3 hover:opacity-80 transition-opacity mb-5"
            >
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-4 w-4 text-gold" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-gray-400">4.9 on Google · 433 reviews</span>
            </motion.a>

            {/* Urgency — left col, row 5 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="order-6 lg:col-start-1 lg:row-start-5"
            >
              <UrgencyBadge />
            </motion.div>

          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="py-8 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {[
              // ADA: verified check in shield
              { icon: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z", label: "ADA Member" },
              // Invisalign: sparkle / tooth-align star
              { icon: "M12 2l2.39 7.36H22l-6.19 4.5L18.2 21 12 16.5 5.8 21l2.39-7.14L2 9.36h7.61z", label: "Invisalign Provider" },
              // Lifetime warranty: check_circle (verified, for life)
              { icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z", label: "Free Lifetime Warranty" },
              // Same-day: clock
              { icon: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z", label: "Same-Day Appointments" },
              // Cherry financing: credit card
              { icon: "M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z", label: "Cherry Financing" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2 text-gray-400">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d={item.icon} />
                </svg>
                <span className="text-sm font-semibold">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-gray-100 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "433+", label: "Google Reviews" },
              { value: "4.9", label: "Google Rating" },
              { value: "$600", label: "Free Whitening Bonus" },
              { value: "Lifetime", label: "Free Warranty" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <p className="text-2xl sm:text-3xl font-extrabold text-gray-900">{stat.value}</p>
                <p className="text-gray-400 text-sm mt-0.5">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-14 sm:py-20 bg-gray-50">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-primary text-sm font-bold uppercase tracking-wider mb-3">
              Our Team
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-12">
              Same four people. Every visit.
            </h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-10 sm:gap-14">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <Link href="/meet-us" className="group block">
                  <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-full overflow-hidden mb-3 mx-auto ring-2 ring-gray-100 group-hover:ring-primary transition-all">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={96}
                      height={96}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <p className="font-bold text-gray-900 text-sm">{member.name}</p>
                  <p className="text-gray-400 text-xs">{member.role}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OBJECTION #2: "This will be expensive" — Three Paths */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="mx-auto max-w-5xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <p className="text-primary text-sm font-bold uppercase tracking-wider mb-3">No Matter Your Situation</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
              We&apos;ve Made It Easy to Say Yes
            </h2>
            <p className="text-gray-500 text-base max-w-lg mx-auto">
              Insurance, no insurance, or tight on budget. We have a path that works.
            </p>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-3">
            {/* Insurance */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
              className="bg-gray-50 rounded-2xl p-7 flex flex-col"
            >
              <p className="text-primary text-xs font-bold uppercase tracking-wider mb-2">Have Insurance</p>
              <h3 className="text-xl font-extrabold text-gray-900 mb-3">We Handle the Headache</h3>
              <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-6">
                Lee verifies your benefits, files all claims, and breaks down your out-of-pocket cost before anything is scheduled. You show up, we handle the rest.
              </p>
              <div className="flex flex-col gap-2">
                <a href="tel:972-644-3280" className="rounded-lg bg-gray-900 px-5 py-2.5 text-sm font-bold text-white hover:bg-gray-800 transition-colors text-center">
                  Call to Verify Benefits
                </a>
                <Link href="/insurance" className="rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-100 transition-colors text-center">
                  See Accepted Plans
                </Link>
              </div>
            </motion.div>

            {/* Membership */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.06 }}
              className="bg-gray-50 rounded-2xl p-7 flex flex-col"
            >
              <p className="text-primary text-xs font-bold uppercase tracking-wider mb-2">No Insurance</p>
              <h3 className="text-xl font-extrabold text-gray-900 mb-3">Membership Plans</h3>
              <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-6">
                Skip the insurance hassle with our in-house discount plans. Two cleanings, two exams, X-rays, and 20% off everything else. Starting at $34/mo through Cherry.
              </p>
              <Link
                href="/membership"
                className="rounded-lg bg-gray-900 px-5 py-2.5 text-sm font-bold text-white hover:bg-gray-800 transition-colors text-center"
              >
                See Membership Plans
              </Link>
            </motion.div>

            {/* Financing */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.12 }}
              className="bg-gray-50 rounded-2xl p-7 flex flex-col"
            >
              <p className="text-primary text-xs font-bold uppercase tracking-wider mb-2">Need Flexibility</p>
              <h3 className="text-xl font-extrabold text-gray-900 mb-3">0% APR Financing</h3>
              <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-6">
                Break any treatment into monthly payments through Cherry. Apply in minutes, no impact on credit score, and 0% APR options available.
              </p>
              <Link
                href="/payment-plans"
                className="rounded-lg bg-gray-900 px-5 py-2.5 text-sm font-bold text-white hover:bg-gray-800 transition-colors text-center"
              >
                Check My Payment Options
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hygiene Upgrade Package — for ALL patients, insured or not */}
      <section className="py-14 sm:py-18 bg-white">
        <div className="mx-auto max-w-5xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-8 sm:p-12"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-primary text-xs font-bold uppercase tracking-wider mb-3">For Everyone, Insured or Not</p>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
                  Upgrade Your Cleaning Visit
                </h2>
                <p className="text-gray-600 text-base leading-relaxed mb-6">
                  Add four premium services to any cleaning visit for one bundled price. If your insurance already covers your preventive visit, this is how you get the full experience.
                </p>
                <ul className="space-y-2 mb-6">
                  {[
                    { name: "InnerView Imaging", retail: "$30" },
                    { name: "Fluoride Treatment", retail: "$65" },
                    { name: "Laser Therapy", retail: "$125" },
                    { name: "Jet Whitening", retail: "$99" },
                  ].map((item) => (
                    <li key={item.name} className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-2 text-gray-700">
                        <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {item.name}
                      </span>
                      <span className="text-gray-400 line-through">{item.retail}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm">
                <div className="text-center mb-5">
                  <p className="text-xs text-gray-400 line-through mb-1">$319 a la carte</p>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-5xl font-extrabold text-primary">$249</span>
                    <span className="text-gray-400 text-sm">/visit</span>
                  </div>
                  <p className="text-xs text-green-700 font-semibold mt-1">Save 22%</p>
                </div>
                <div className="bg-gray-50 rounded-xl px-4 py-3 mb-5 flex justify-between items-center">
                  <span className="text-xs text-gray-500">Split via Cherry</span>
                  <span className="text-sm font-bold text-gray-700">$42/mo</span>
                </div>
                <div className="flex flex-col gap-2">
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full rounded-lg bg-primary px-5 py-3 text-sm font-bold text-white hover:bg-primary-dark transition-colors text-center"
                  >
                    Add to My Next Visit
                  </a>
                  <Link
                    href="/membership"
                    className="w-full rounded-lg bg-white border border-gray-200 px-5 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors text-center"
                  >
                    See Plan Details
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* OBJECTION #3: "Can I trust them?" */}
      <ReviewsCarousel />

      {/* Services */}
      <section className="py-14 sm:py-18 bg-white">
        <div className="mx-auto max-w-4xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <p className="text-primary text-sm font-bold uppercase tracking-wider mb-3">
              Our Services
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
              Everything Your Smile Needs
            </h2>
            <p className="text-gray-500 text-base max-w-lg mx-auto">
              From routine cleanings to full smile makeovers. All under one roof.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-2 mb-8"
          >
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="rounded-full bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-primary hover:text-white transition-all shadow-sm"
              >
                {service.title}
              </Link>
            ))}
          </motion.div>

          <div className="text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-primary text-sm font-bold hover:gap-3 transition-all"
            >
              View All Services
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Invisalign Promo */}
      <section className="py-14 sm:py-18 bg-white">
        <div className="mx-auto max-w-5xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary rounded-2xl p-8 sm:p-12 flex flex-col sm:flex-row items-center gap-8"
          >
            <div className="flex-1">
              <p className="text-white/60 text-xs font-bold uppercase tracking-wider mb-2">
                Invisalign Provider
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
                Invisalign Starting at $115/mo
              </h2>
              <p className="text-white/60 text-sm leading-relaxed">
                Straighten your teeth with clear aligners. No brackets, no wires. 0% APR financing available.
              </p>
            </div>
            <Link
              href="/invisalign"
              className="flex-shrink-0 rounded-lg bg-white px-7 py-3.5 text-sm font-bold text-primary transition-all hover:bg-gray-50 hover:shadow-lg"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </section>

      <CTABanner />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoObject",
            name: "Buchwald Family Dentistry Office Tour",
            description: "See inside Buchwald Family Dentistry & Orthodontics in Richardson, TX. Modern office, comfortable care.",
            thumbnailUrl: "https://buchwaldfamilydentistry.com/images/office-1.jpg",
            contentUrl: "https://buchwaldfamilydentistry.com/video/hero.mp4",
            uploadDate: "2025-01-01",
          }),
        }}
      />
    </>
  );
}
