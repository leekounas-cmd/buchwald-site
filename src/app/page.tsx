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
    title: "Dental Cleaning & Exam",
    description: "Routine cleanings, comprehensive exams, and X-rays to keep your smile healthy.",
    href: "/services/cleaning",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611l-.772.136A18.36 18.36 0 0112 21a18.36 18.36 0 01-7.363-1.051l-.772-.136c-1.717-.293-2.3-2.379-1.067-3.611L5 14.5" />
      </svg>
    ),
  },
  {
    title: "General Dentistry",
    description: "Fillings, crowns, bridges, root canals, and everyday dental health.",
    href: "/services/general",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.049.58.025 1.192-.14 1.743" />
      </svg>
    ),
  },
  {
    title: "Cosmetic Dentistry",
    description: "Veneers, bonding, and smile makeovers to transform the way you look.",
    href: "/services/cosmetic",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
      </svg>
    ),
  },
  {
    title: "Teeth Whitening",
    description: "Professional in-office and take-home options for a noticeably brighter smile.",
    href: "/teeth-whitening",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
  },
  {
    title: "Invisalign",
    description: "Clear aligners that straighten your teeth without brackets or wires.",
    href: "/invisalign",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
      </svg>
    ),
  },
  {
    title: "Restorative Dentistry",
    description: "Implants, dentures, and restorations to rebuild and strengthen your smile.",
    href: "/services/restorative",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
  },
];

const specialtyServices = [
  {
    title: "InnerView Imaging",
    description: "See your smile in full detail with high-definition intraoral imaging.",
    href: "/innerview",
  },
  {
    title: "Laser Therapy",
    description: "Advanced laser treatment for gentler procedures and faster recovery.",
    href: "/laser-therapy",
  },
];

const stats = [
  { value: "100+", label: "Families Served" },
  { value: "5.0", label: "Google Rating" },
  { value: "7+", label: "Services" },
  { value: "Mon–Thu", label: "7am – 3pm" },
];

const team = [
  { name: "Dr. Buchwald", role: "Dentist", image: "/images/dr-buchwald.jpg" },
  { name: "Melisa", role: "Hygienist", image: "/images/melisa.jpg" },
  { name: "Denielle", role: "Insurance Coordinator", image: "/images/denielle.jpg" },
  { name: "Lee", role: "Marketing", image: "/images/lee.jpg" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[85vh] min-h-[550px] flex items-center justify-center overflow-hidden">
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
        <div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-dark/40 to-dark/70" />

        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
              Modern Care.<br />Comfortable Visits.
            </h1>
            <p className="text-white/60 text-base sm:text-lg max-w-lg mx-auto mb-8">
              Your local family and cosmetic dentist in Richardson, TX.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/25"
              >
                Request Appointment
              </a>
              <a
                href="tel:972-644-3280"
                className="rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/20"
              >
                (972) 644-3280
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-b border-gray-light">
        <div className="mx-auto max-w-5xl px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="text-center"
              >
                <p className="font-heading text-2xl sm:text-3xl font-bold text-dark mb-0.5">
                  {stat.value}
                </p>
                <p className="text-gray text-xs">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Welcome */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">
                Welcome
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-dark mb-5">
                The Place Your Smile Belongs
              </h2>
              <p className="text-gray leading-relaxed mb-4 text-[15px]">
                At Buchwald Family Dentistry, we know going to the dentist is not at the top of anyone&apos;s list. But we have worked hard to change that. From the moment you walk through our doors, you will be greeted with a smile, clean modern design, and a calm environment that feels nothing like a typical dental office.
              </p>
              <p className="text-gray leading-relaxed text-[15px]">
                Dr. Max Buchwald Jr. and our team take the time to explain every step so you feel confident in your care. Whether it is your first visit or your fiftieth, our goal is simple: make sure you leave comfortable, cared for, and proud of your smile.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Image
                src="/images/team-group.jpg"
                alt="Buchwald Family Dentistry team"
                width={600}
                height={400}
                className="rounded-2xl w-full object-cover aspect-[4/3]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 sm:py-24 bg-light">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">
              Our Services
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-dark mb-3">
              Comprehensive Care for Every Smile
            </h2>
            <p className="text-gray text-[15px] max-w-lg mx-auto">
              From routine cleanings to complete smile transformations, we have you covered.
            </p>
          </motion.div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link href={service.href}>
                  <div className="group rounded-xl bg-white p-6 transition-all hover:shadow-md border border-transparent hover:border-gray-light">
                    <div className="h-10 w-10 rounded-lg bg-primary/5 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                      {service.icon}
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-dark mb-1.5">
                      {service.title}
                    </h3>
                    <p className="text-gray text-sm leading-relaxed">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-primary text-xs font-semibold mt-3 group-hover:gap-2 transition-all">
                      Learn more
                      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Specialty Services */}
          <div className="grid gap-3 sm:grid-cols-2 mt-3">
            {specialtyServices.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link href={service.href}>
                  <div className="group rounded-xl bg-dark p-6 transition-all hover:bg-dark/90">
                    <h3 className="font-heading text-lg font-semibold text-white mb-1.5">
                      {service.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed mb-3">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-primary text-xs font-semibold group-hover:gap-2 transition-all">
                      Learn more
                      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-xl bg-white border border-gray-light px-6 py-3 text-sm font-semibold text-dark transition-all hover:border-primary hover:text-primary"
            >
              View All Services
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Office Photo */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-dark">
              Our Office
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/office-1.jpg"
              alt="Buchwald Family Dentistry office"
              width={900}
              height={500}
              className="rounded-2xl w-full aspect-[16/9] object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Invisalign Promo */}
      <section className="bg-dark py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-white/5 border border-white/10 p-8 sm:p-12 flex flex-col sm:flex-row items-center gap-8"
          >
            <div className="flex-1">
              <p className="text-orange text-xs font-semibold uppercase tracking-wider mb-2">
                Limited Time Offer
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-3">
                $1,000 OFF Invisalign
              </h2>
              <p className="text-white/50 text-sm leading-relaxed">
                Straighten your teeth with clear aligners. Schedule a free consultation to see if Invisalign is right for you.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Link
                href="/invisalign"
                className="inline-block rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-primary-dark"
              >
                Book Free Consult
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">
              Our Team
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-dark mb-10">
              The People Behind Your Smile
            </h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-10 sm:gap-14">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Link href="/meet-us" className="group block">
                  <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-full overflow-hidden border-2 border-light-2 group-hover:border-primary transition-colors mb-3 mx-auto">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={96}
                      height={96}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <p className="font-semibold text-dark text-sm">{member.name}</p>
                  <p className="text-gray text-xs">{member.role}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Membership */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="mx-auto max-w-xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-light border border-gray-light p-8 sm:p-12"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">
              No Insurance? No Problem.
            </p>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-dark mb-3">
              In-Office Membership Plan
            </h2>
            <p className="text-gray text-sm leading-relaxed mb-6">
              Affordable, straightforward dental care without the hassle of insurance. Ask about our membership plan for cleanings, exams, and exclusive discounts.
            </p>
            <a
              href="tel:972-644-3280"
              className="inline-block rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-primary-dark"
            >
              Call for Details
            </a>
          </motion.div>
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
