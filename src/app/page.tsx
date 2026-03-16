"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Testimonials } from "@/components/Testimonials";
import { CTABanner } from "@/components/CTABanner";

const BOOKING_URL = "/book";

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
  { name: "Denielle Thiel", role: "Insurance Coordinator", image: "/images/denielle.jpg" },
  { name: "Lee Kounas", role: "Marketing", image: "/images/lee.jpg" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 sm:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.1] mb-8">
              Modern Care.<br />
              <span className="text-primary">Comfortable Visits.</span>
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
              Your family and cosmetic dentist in Richardson, TX. We make going to the dentist something you actually don&apos;t mind.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={BOOKING_URL}
                className="rounded-lg bg-primary px-7 py-3.5 text-sm font-bold text-white transition-all hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/25 text-center"
              >
                Book Appointment
              </a>
              <a
                href="tel:972-644-3280"
                className="rounded-lg bg-gray-100 px-7 py-3.5 text-sm font-semibold text-gray-900 transition-all hover:bg-gray-200 text-center"
              >
                Call (972) 644-3280
              </a>
            </div>

            {/* Trust */}
            <a
              href="https://share.google/9gal12WjpTrHj1b4V"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 mt-8 justify-center hover:opacity-80 transition-opacity"
            >
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className={`h-4 w-4 ${i < 4 ? "text-gold" : "text-gold"}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-gray-400">
                4.9 on Google &middot; 433 reviews
              </span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-gray-100 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "433+", label: "Google Reviews" },
              { value: "4.9", label: "Google Rating" },
              { value: "$99", label: "New Patient Cleaning" },
              { value: "Mon–Thu", label: "7am – 3pm" },
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

      {/* Trust Badges */}
      <section className="py-8 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            <div className="flex items-center gap-2 text-gray-400">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
              </svg>
              <span className="text-sm font-semibold">ADA Member</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
              </svg>
              <span className="text-sm font-semibold">Invisalign Provider</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
              </svg>
              <span className="text-sm font-semibold">Same-Day Appointments</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
              <span className="text-sm font-semibold">Most Insurance Accepted</span>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <Image
                src="/images/office-1.jpg"
                alt="Front of Buchwald Family Dentistry office in Richardson, TX"
                width={600}
                height={450}
                className="rounded-2xl w-full object-cover aspect-[4/3]"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-primary text-sm font-bold uppercase tracking-wider mb-3">
                About Us
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-5">
                We get it — nobody loves going to the dentist.
              </h2>
              <p className="text-gray-500 text-base leading-relaxed mb-4">
                That&apos;s why we built a practice that actually feels different. Clean, modern, and calm — with a team that takes the time to explain what&apos;s going on and makes sure you&apos;re comfortable before, during, and after.
              </p>
              <p className="text-gray-500 text-base leading-relaxed mb-6">
                Dr. Buchwald and our team have been serving families in Richardson, Plano, and Allen since day one. Whether it&apos;s your first visit or your fiftieth, the goal is simple — leave proud of your smile.
              </p>
              <Link
                href="/meet-us"
                className="inline-flex items-center gap-2 text-primary text-sm font-bold hover:gap-3 transition-all"
              >
                Meet the Team
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 sm:py-20 bg-gray-50">
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
                className="rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-primary hover:text-white transition-all shadow-sm"
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

      {/* Membership + Insurance */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-5xl px-4">
          <div className="grid gap-4 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8 sm:p-10"
            >
              <p className="text-primary text-sm font-bold uppercase tracking-wider mb-2">
                No Insurance? No Problem.
              </p>
              <h3 className="text-2xl font-extrabold text-gray-900 mb-3">
                In-Office Membership Plans
              </h3>
              <div className="space-y-4 mb-6">
                <div className="bg-white rounded-xl p-4">
                  <div className="flex items-baseline justify-between mb-1">
                    <p className="font-bold text-gray-900 text-sm">Essential Care Plan</p>
                    <p className="text-primary font-extrabold text-lg">$400<span className="text-gray-400 text-xs font-medium">/yr</span></p>
                  </div>
                  <p className="text-gray-400 text-xs">2 cleanings, 2 exams, X-rays, and discounts on all treatments</p>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <div className="flex items-baseline justify-between mb-1">
                    <p className="font-bold text-gray-900 text-sm">Perio Maintenance Plan</p>
                    <p className="text-primary font-extrabold text-lg">$500<span className="text-gray-400 text-xs font-medium">/yr</span></p>
                  </div>
                  <p className="text-gray-400 text-xs">For patients with gum disease — includes perio maintenance visits and discounts</p>
                </div>
              </div>
              <p className="text-gray-400 text-xs mb-4">Flexible payments available through Cherry Financing</p>
              <a
                href={BOOKING_URL}
                className="inline-block rounded-lg bg-primary px-6 py-3 text-sm font-bold text-white hover:bg-primary-dark transition-colors"
              >
                Request Appointment
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.06 }}
              className="bg-gray-50 rounded-2xl p-8 sm:p-10"
            >
              <p className="text-primary text-sm font-bold uppercase tracking-wider mb-2">
                Insurance
              </p>
              <h3 className="text-2xl font-extrabold text-gray-900 mb-3">
                We Work With Your Plan
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Our insurance coordinator Denielle handles the details so you don&apos;t have to. We&apos;ll break down your benefits, file claims, and make sure you get the most out of your coverage.
              </p>
              <a
                href="tel:972-644-3280"
                className="inline-block rounded-lg bg-gray-900 px-6 py-3 text-sm font-bold text-white hover:bg-gray-800 transition-colors"
              >
                Call to Verify
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 sm:py-28 bg-white">
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

      {/* Invisalign Promo */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="mx-auto max-w-5xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary rounded-2xl p-8 sm:p-12 flex flex-col sm:flex-row items-center gap-8"
          >
            <div className="flex-1">
              <p className="text-white/60 text-xs font-bold uppercase tracking-wider mb-2">
                Limited Time Offer
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
                $1,000 OFF Invisalign
              </h2>
              <p className="text-white/60 text-sm leading-relaxed">
                Straighten your teeth with clear aligners. No brackets, no wires. Book your free consultation today.
              </p>
            </div>
            <Link
              href="/invisalign"
              className="flex-shrink-0 rounded-lg bg-white px-7 py-3.5 text-sm font-bold text-primary transition-all hover:bg-gray-50 hover:shadow-lg"
            >
              Request Appointment
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3">
              New patient? We make it easy.
            </h2>
            <p className="text-gray-500 text-base mb-6 max-w-md mx-auto">
              Book online in 30 seconds or give us a call. We&apos;ll handle the rest.
            </p>
            <a
              href={BOOKING_URL}
              className="inline-block rounded-lg bg-primary px-7 py-3.5 text-sm font-bold text-white transition-all hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/25"
            >
              Request Appointment
            </a>
          </motion.div>
        </div>
      </section>

      {/* Google Reviews */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="mx-auto max-w-5xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-primary text-sm font-bold uppercase tracking-wider mb-3">
              Patient Reviews
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
              What Our Patients Say
            </h2>
            <a
              href="https://share.google/9gal12WjpTrHj1b4V"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-gray-400 font-medium">4.9 on Google &middot; 433 reviews</span>
            </a>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Sarah M.", city: "Richardson", text: "Dr. Buchwald and his team are amazing! They made me feel so comfortable during my visit. The office is modern and clean, and the staff is incredibly friendly.", date: "2 weeks ago" },
              { name: "James T.", city: "Plano", text: "Best dental experience I've ever had. They explained everything clearly and were so gentle. My kids actually look forward to their cleanings now!", date: "1 month ago" },
              { name: "Michelle R.", city: "Richardson", text: "I got my Invisalign here and the results are incredible. The team was supportive throughout the entire process. Worth every penny!", date: "3 weeks ago" },
              { name: "David K.", city: "Allen", text: "Needed a crown and was nervous, but Dr. Buchwald made it completely painless. The whole process was quick and professional. 10/10!", date: "2 months ago" },
              { name: "Jessica L.", city: "Garland", text: "Denielle is a rockstar with insurance. She got everything sorted before my appointment so I knew exactly what to expect. No surprises.", date: "1 month ago" },
              { name: "Robert P.", city: "Plano", text: "Melisa did an amazing job on my cleaning. She was thorough but gentle, and took the time to explain proper brushing techniques. Highly recommend!", date: "3 weeks ago" },
            ].map((review, i) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="bg-gray-50 rounded-xl p-6"
              >
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="h-4 w-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">&ldquo;{review.text}&rdquo;</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-900 font-semibold text-sm">{review.name}</p>
                    <p className="text-gray-400 text-xs">{review.city}</p>
                  </div>
                  <p className="text-gray-300 text-xs">{review.date}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href="https://share.google/9gal12WjpTrHj1b4V"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary text-sm font-bold hover:gap-3 transition-all"
            >
              See All Reviews on Google
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* CTA */}
      <CTABanner />

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Dentist",
            name: "Buchwald Family Dentistry & Orthodontics",
            image: "https://buchwaldfamilydentist.com/images/logo-color.png",
            "@id": "https://buchwaldfamilydentist.com",
            url: "https://buchwaldfamilydentist.com",
            telephone: "+1-972-644-3280",
            priceRange: "$$",
            address: {
              "@type": "PostalAddress",
              streetAddress: "300 N Coit Rd #245",
              addressLocality: "Richardson",
              addressRegion: "TX",
              postalCode: "75080",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 32.9601,
              longitude: -96.7295,
            },
            openingHoursSpecification: [
              { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"], opens: "07:00", closes: "15:00" },
            ],
            areaServed: [
              { "@type": "City", name: "Richardson", "@id": "https://en.wikipedia.org/wiki/Richardson,_Texas" },
              { "@type": "City", name: "Plano" },
              { "@type": "City", name: "Allen" },
              { "@type": "City", name: "Garland" },
              { "@type": "City", name: "Coppell" },
              { "@type": "City", name: "Carrollton" },
            ],
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              bestRating: "5",
              reviewCount: "433",
            },
            sameAs: [
              "https://www.facebook.com/MaxBuchwaldFamilyDentist/",
              // TODO: Add YouTube, X (Twitter), and LinkedIn URLs when available
            ],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Dental Services",
              itemListElement: [
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dental Cleaning & Exam" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "General Dentistry" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cosmetic Dentistry" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Restorative Dentistry" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Invisalign" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Teeth Whitening" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dental Implants" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Laser Therapy" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "InnerView AI Diagnostics" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Emergency Dentistry" } },
              ],
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoObject",
            name: "Buchwald Family Dentistry Office Tour",
            description: "See inside Buchwald Family Dentistry & Orthodontics in Richardson, TX. Modern office, comfortable care.",
            thumbnailUrl: "https://buchwaldfamilydentist.com/images/office-1.jpg",
            contentUrl: "https://buchwaldfamilydentist.com/video/hero.mp4",
            uploadDate: "2025-01-01",
          }),
        }}
      />
    </>
  );
}
