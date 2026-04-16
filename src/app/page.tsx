"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ReviewsCarousel } from "@/components/ReviewsCarousel";
import { CTABanner } from "@/components/CTABanner";
import { UrgencyBadge } from "@/components/UrgencyBadge";

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
    description: "Implants, bridges, dentures — we rebuild smiles that look and feel natural.",
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

const experienceItems = [
  { icon: "🎧", label: "Noise-canceling headphones" },
  { icon: "📺", label: "TVs at every chair" },
  { icon: "🧣", label: "Blankets and pillows" },
  { icon: "☕", label: "Complimentary beverages" },
  { icon: "🕐", label: "On-time, no-wait visits" },
  { icon: "💬", label: "We explain before we start" },
];

const savingsRows = [
  { treatment: "Comprehensive Exam", withPlan: "Included", typical: "$150", save: "$150" },
  { treatment: "Full X-rays", withPlan: "Included", typical: "$150", save: "$150" },
  { treatment: "Cleaning (each)", withPlan: "$150", typical: "$220", save: "$70" },
];

export default function HomePage() {
  return (
    <>
      {/* OBJECTION #1: "This will be uncomfortable / judgmental" */}
      <section className="relative overflow-hidden bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 sm:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <p className="text-primary text-sm font-bold uppercase tracking-wider mb-4">Richardson&apos;s Most-Loved Family Dentist</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.1] mb-8">
              Dental Care That<br />
              <span className="text-primary">Feels Different</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-10"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              poster="/images/office-1.jpg"
              className="rounded-2xl w-full object-cover aspect-video"
            >
              <source src="/video/hero.mp4" type="video/mp4" />
            </video>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-gray-500 text-lg sm:text-xl leading-relaxed mb-10">
              Richardson&apos;s most-trusted family and cosmetic dentist. We built a practice around making you feel at ease, not on edge.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={BOOKING_URL}
                className="rounded-lg bg-primary px-7 py-3.5 text-sm font-bold text-white transition-all hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/25 text-center"
              >
                Schedule My Visit
              </a>
              <a
                href="tel:972-644-3280"
                className="rounded-lg bg-gray-100 px-7 py-3.5 text-sm font-semibold text-gray-900 transition-all hover:bg-gray-200 text-center"
              >
                Call (972) 644-3280
              </a>
            </div>

            <div className="flex flex-col items-center gap-4 mt-8">
              <UrgencyBadge />
              <a
                href="https://share.google/9gal12WjpTrHj1b4V"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 justify-center hover:opacity-80 transition-opacity"
              >
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-4 w-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-gray-400">
                  4.9 on Google &middot; 433 reviews
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="py-8 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {[
              { icon: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z", label: "ADA Member" },
              { icon: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z", label: "Invisalign Provider" },
              { icon: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z", label: "Lifetime Warranty" },
              { icon: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z", label: "Same-Day Appointments" },
              { icon: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z", label: "Cherry Financing" },
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
              { value: "$99", label: "New Patient Special" },
              { value: "Lifetime", label: "Warranty" },
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
              Real People. Real Care.
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
              Insurance, no insurance, or tight on budget — we have a path that works.
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

            {/* Membership - Most Popular */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.06 }}
              className="bg-primary rounded-2xl p-7 flex flex-col relative"
            >
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-600 text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                Most Popular
              </span>
              <p className="text-white/70 text-xs font-bold uppercase tracking-wider mb-2">No Insurance</p>
              <h3 className="text-xl font-extrabold text-white mb-3">Essential Care Plan</h3>
              <p className="text-white/70 text-sm leading-relaxed flex-1 mb-6">
                $99/year gets you a full exam and X-rays. Add cleanings at $150 each. Better care than most insurance plans, with no waiting periods or annual maximums.
              </p>
              <a
                href={BOOKING_URL}
                className="rounded-lg bg-white px-5 py-2.5 text-sm font-bold text-primary hover:bg-gray-50 transition-colors text-center"
              >
                Join the Plan
              </a>
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

      {/* Membership Breakdown */}
      <section className="py-14 sm:py-20 bg-gray-50">
        <div className="mx-auto max-w-5xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <p className="text-primary text-sm font-bold uppercase tracking-wider mb-3">Essential Care Plan</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              $99/Year. No Insurance Needed.
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left: breakdown */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8"
            >
              <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">What you get</p>
              <ul className="space-y-3 mb-8">
                {[
                  "Comprehensive exam (included in $99)",
                  "Full set of X-rays (included in $99)",
                  "20% off all other treatments",
                  "Add cleanings at $150 each",
                  "No waiting periods",
                  "No annual maximums",
                  "No deductibles",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <svg className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="bg-green-50 rounded-xl p-5 border border-green-100">
                <p className="text-xs font-bold text-green-700 uppercase tracking-wider mb-3">Year-one math</p>
                <div className="space-y-1.5 text-sm">
                  <div className="flex justify-between text-gray-700">
                    <span>Exam Membership</span>
                    <span className="font-semibold">$99</span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>2 Cleanings ($150 each)</span>
                    <span className="font-semibold">$300</span>
                  </div>
                  <div className="border-t border-green-200 pt-1.5 mt-1.5 flex justify-between text-gray-900 font-bold">
                    <span>Your total</span>
                    <span>$399</span>
                  </div>
                  <div className="flex justify-between text-gray-400 text-xs">
                    <span>Without the plan</span>
                    <span>$565+</span>
                  </div>
                  <div className="flex justify-between text-green-700 font-extrabold text-base pt-1">
                    <span>You save</span>
                    <span>$166+</span>
                  </div>
                </div>
              </div>

              <a
                href={BOOKING_URL}
                className="mt-6 w-full inline-block rounded-lg bg-primary px-6 py-3 text-sm font-bold text-white hover:bg-primary-dark transition-colors text-center"
              >
                Join the Plan
              </a>
            </motion.div>

            {/* Right: savings table */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.06 }}
            >
              <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Treatment savings</p>
              <div className="bg-white rounded-2xl overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-100">
                      <th className="text-left px-5 py-3 font-semibold text-gray-500 text-xs uppercase tracking-wide">Treatment</th>
                      <th className="text-right px-5 py-3 font-semibold text-primary text-xs uppercase tracking-wide">With Plan</th>
                      <th className="text-right px-5 py-3 font-semibold text-gray-400 text-xs uppercase tracking-wide">Typical</th>
                      <th className="text-right px-5 py-3 font-semibold text-green-600 text-xs uppercase tracking-wide">Save</th>
                    </tr>
                  </thead>
                  <tbody>
                    {savingsRows.map((row, i) => (
                      <tr key={row.treatment} className={i % 2 === 1 ? "bg-gray-50/50" : ""}>
                        <td className="px-5 py-3.5 text-gray-900 font-medium">{row.treatment}</td>
                        <td className="px-5 py-3.5 text-primary font-semibold text-right">{row.withPlan}</td>
                        <td className="px-5 py-3.5 text-gray-400 text-right">{row.typical}</td>
                        <td className="px-5 py-3.5 text-green-600 font-bold text-right">{row.save}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-400 mt-3 px-1">Typical costs based on national dental averages. Actual savings vary by treatment.</p>
            </motion.div>
          </div>
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
              From routine cleanings to full smile makeovers — all under one roof.
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
