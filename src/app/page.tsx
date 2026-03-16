"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Testimonials } from "@/components/Testimonials";
import { CTABanner } from "@/components/CTABanner";

const BOOKING_URL =
  "https://book2.getweave.com/359c4bec-a0f0-4d62-9ea8-35a008305267/request-appointment?source=WEBSITE";

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
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.1] mb-6">
                Modern Care.<br />
                <span className="text-primary">Comfortable Visits.</span>
              </h1>
              <p className="text-gray-500 text-lg sm:text-xl leading-relaxed mb-8 max-w-lg">
                Your family and cosmetic dentist in Richardson, TX. We make going to the dentist something you actually don&apos;t mind.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
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
              <div className="flex items-center gap-3 mt-8">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-4 w-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-gray-400">
                  5.0 on Google &middot; 100+ families
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative"
            >
              <Image
                src="/images/team-group.jpg"
                alt="Buchwald Family Dentistry team"
                width={700}
                height={500}
                className="rounded-2xl w-full object-cover aspect-[4/3]"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-gray-100 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "100+", label: "Families Served" },
              { value: "5.0", label: "Google Rating" },
              { value: "8+", label: "Services" },
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
                alt="Buchwald Family Dentistry office"
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
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
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

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
              >
                <Link href={service.href}>
                  <div className="group bg-white rounded-xl p-6 h-full transition-all hover:shadow-md">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                      <h3 className="font-bold text-gray-900 text-[15px]">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <span className="text-primary text-xs font-bold group-hover:underline">
                      Learn more →
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Invisalign Promo */}
      <section className="py-16 sm:py-20 bg-white">
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
              Book Free Consult
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="py-16 bg-gray-50">
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
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg bg-primary px-7 py-3.5 text-sm font-bold text-white transition-all hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/25"
            >
              Request Appointment
            </a>
          </motion.div>
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

      {/* Testimonials */}
      <Testimonials />

      {/* Membership + Insurance */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="mx-auto max-w-5xl px-4">
          <div className="grid gap-4 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8 sm:p-10"
            >
              <p className="text-primary text-sm font-bold uppercase tracking-wider mb-2">
                No Insurance?
              </p>
              <h3 className="text-2xl font-extrabold text-gray-900 mb-3">
                In-Office Membership Plan
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Affordable dental care without the hassle. Cleanings, exams, and exclusive discounts — no insurance company in the middle.
              </p>
              <a
                href="tel:972-644-3280"
                className="inline-block rounded-lg bg-primary px-6 py-3 text-sm font-bold text-white hover:bg-primary-dark transition-colors"
              >
                Call for Details
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
            image: "/images/logo-color.png",
            address: {
              "@type": "PostalAddress",
              streetAddress: "300 N Coit Rd #245",
              addressLocality: "Richardson",
              addressRegion: "TX",
              postalCode: "75080",
            },
            telephone: "972-644-3280",
            openingHours: "Mo-Th 07:00-15:00",
            url: "https://buchwaldfamilydentist.com",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "5.0",
              reviewCount: "100",
            },
          }),
        }}
      />
    </>
  );
}
