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
    emoji: "🦷",
    title: "Dental Cleaning + Exam",
    description:
      "Routine cleanings and comprehensive exams to keep your smile healthy and catch issues early.",
  },
  {
    emoji: "🩺",
    title: "General Dentistry",
    description:
      "Fillings, crowns, bridges, and everything you need for everyday dental health.",
  },
  {
    emoji: "✨",
    title: "Cosmetic Dentistry",
    description:
      "Veneers, bonding, and smile makeovers to help you love the way you look.",
  },
  {
    emoji: "😁",
    title: "Teeth Whitening",
    description:
      "Professional in-office and take-home whitening for a brighter, more confident smile.",
    href: "/teeth-whitening",
  },
  {
    emoji: "🔬",
    title: "Invisalign",
    description:
      "Clear aligners that straighten your teeth without the hassle of traditional braces.",
    href: "/invisalign",
  },
  {
    emoji: "🧩",
    title: "Restorative Dentistry",
    description:
      "Implants, dentures, and restorations to rebuild and strengthen your smile.",
  },
];

const stats = [
  { value: "100+", label: "Families Served" },
  { value: "5.0", label: "Google Rating" },
  { value: "7+", label: "Services Offered" },
  { value: "Mon–Thu", label: "7am – 3pm" },
];

const team = [
  { name: "Dr. Buchwald", role: "Dentist", image: "/images/dr-buchwald.jpg" },
  { name: "Melisa", role: "Hygienist", image: "/images/melisa.jpg" },
  { name: "Juliet", role: "Lead Assistant", image: "/images/juliet.jpg" },
  { name: "Denielle", role: "Office Manager", image: "/images/denielle.jpg" },
  { name: "Lee", role: "Marketing", image: "/images/lee.jpg" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          poster="/images/office-1.jpg"
        >
          <source src="/video/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-dark/70 via-dark/50 to-dark/80" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-teal text-sm font-semibold tracking-wider uppercase mb-4">
              Buchwald Family Dentistry &amp; Orthodontics
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6">
              Modern Care. Comfortable Visits.
            </h1>
            <p className="text-white/70 text-lg sm:text-xl max-w-2xl mx-auto mb-10">
              Welcome to Buchwald Family Dentistry. Your local family and cosmetic dentist in Richardson, TX.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-teal px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-teal-dark hover:shadow-xl"
              >
                Request Appointment
              </a>
              <a
                href="tel:972-644-3280"
                className="rounded-full border-2 border-white px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-white hover:text-dark"
              >
                Call 972-644-3280
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Welcome */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-teal text-sm font-semibold tracking-wider uppercase mb-3">
                Welcome
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-dark mb-6">
                The Place Your Smile Belongs
              </h2>
              <p className="text-gray leading-relaxed mb-4">
                At Buchwald Family Dentistry, we know going to the dentist is not at the top of anyone&apos;s list. But we have worked hard to change that. From the moment you walk through our doors, you will be greeted with a smile, clean modern design, and a calm environment that feels nothing like a typical dental office.
              </p>
              <p className="text-gray leading-relaxed">
                Dr. Max Buchwald Jr. and our team take the time to explain every step so you feel confident in your care. Whether it is your first visit or your fiftieth, our goal is simple: make sure you leave comfortable, cared for, and proud of your smile.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Image
                src="/images/team-group.jpg"
                alt="Buchwald Family Dentistry team"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl w-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-light-bg py-16">
        <div className="mx-auto max-w-5xl px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <p className="font-heading text-3xl sm:text-4xl font-bold text-primary mb-1">
                  {stat.value}
                </p>
                <p className="text-gray text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-teal text-sm font-semibold tracking-wider uppercase mb-3">
              Our Services
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-dark">
              Comprehensive Care for Every Smile
            </h2>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => {
              const card = (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl bg-light-bg p-8 transition-shadow hover:shadow-xl cursor-pointer"
                >
                  <span className="text-4xl mb-4 block">{service.emoji}</span>
                  <h3 className="font-heading text-xl font-semibold text-dark mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray text-sm leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              );

              return service.href ? (
                <Link key={service.title} href={service.href}>
                  {card}
                </Link>
              ) : (
                <div key={service.title}>{card}</div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Office Photos */}
      <section className="py-20 bg-light-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-dark">
              Our Office
            </h2>
          </motion.div>
          <div className="grid gap-6 sm:grid-cols-3">
            {[1, 2, 3].map((n) => (
              <motion.div
                key={n}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: n * 0.1 }}
              >
                <Image
                  src={`/images/office-${n}.jpg`}
                  alt={`Buchwald office photo ${n}`}
                  width={500}
                  height={350}
                  className="rounded-2xl w-full h-64 object-cover shadow-lg"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-teal text-sm font-semibold tracking-wider uppercase mb-3">
              Our Team
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-dark mb-12">
              The People Behind Your Smile
            </h2>
          </motion.div>

          <Link href="/meet-us">
            <div className="flex flex-wrap justify-center gap-8 sm:gap-12">
              {team.map((member, i) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="group"
                >
                  <div className="h-24 w-24 sm:h-28 sm:w-28 rounded-full overflow-hidden border-3 border-light-bg-2 group-hover:border-teal transition-colors mb-3 mx-auto">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={112}
                      height={112}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <p className="font-heading font-semibold text-dark text-sm">
                    {member.name}
                  </p>
                  <p className="text-gray text-xs">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Membership */}
      <section className="py-20 sm:py-24 bg-light-bg">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-white p-10 sm:p-14 shadow-lg"
          >
            <p className="text-teal text-sm font-semibold tracking-wider uppercase mb-3">
              No Insurance? No Problem.
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-dark mb-4">
              In-Office Membership Plan
            </h2>
            <p className="text-gray leading-relaxed mb-8">
              Affordable, straightforward dental care without the hassle of insurance. Ask us about our 2026 membership plan for cleanings, exams, and exclusive discounts.
            </p>
            <a
              href="tel:972-644-3280"
              className="inline-block rounded-full bg-primary px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-primary/90 hover:shadow-xl"
            >
              Call for Details
            </a>
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner />

      {/* LocalBusiness Schema */}
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
