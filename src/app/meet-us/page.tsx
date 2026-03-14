"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { Testimonials } from "@/components/Testimonials";
import { CTABanner } from "@/components/CTABanner";

const teamMembers = [
  {
    name: "Dr. Max Buchwald Jr.",
    role: "Dentist",
    image: "/images/dr-buchwald.jpg",
    bio: "Dr. Max Buchwald Jr. earned his dental degree from UT Health San Antonio and is a proud member of the American Dental Association. He has completed advanced training in Invisalign, endodontics, and implantology. Outside the office, Dr. Buchwald is a triathlete and volunteers at local shelters. He is passionate about providing modern, comfortable dental care to every patient who walks through the door.",
  },
  {
    name: "Melisa Kounas, RDH",
    role: "Registered Dental Hygienist",
    image: "/images/melisa.jpg",
    bio: "Melisa is a UNT alumna who graduated summa cum laude and received the prestigious Golden Scaler Award. She brings precision, warmth, and genuine care to every cleaning. A marathon finisher and mom of two boys, Melisa balances her passion for dental hygiene with an active family life.",
  },
  {
    name: "Cathy Kounas",
    role: "Operations Leader",
    image: "/images/cathy.jpg",
    bio: "With over 30 years of dental experience, Cathy keeps the office running smoothly behind the scenes. She is a marathon runner and proud grandmother of four. Her decades of expertise and attention to detail ensure every patient has a seamless experience from check-in to checkout.",
  },
  {
    name: "Denielle Thiel",
    role: "Insurance Coordinator",
    image: "/images/denielle.jpg",
    bio: "Denielle handles all things insurance so you don't have to. She breaks down benefits, files claims, and makes sure you get the most out of your coverage. A mom of two and lover of the outdoors, she spends her free time exploring trails with her family.",
  },
  {
    name: "Lee Kounas",
    role: "Chief Marketing Officer",
    image: "/images/lee.jpg",
    bio: "Lee brings a decade of content creation and brand-building experience to the team. He handles everything from digital marketing to patient experience strategy. When he is not behind the camera or computer, you will find him mountain biking or coaching his kids' soccer games.",
  },
];

const highlights = [
  {
    emoji: "🏢",
    title: "Modern Environment",
    description:
      "A clean, contemporary office designed to make you feel relaxed and comfortable from the moment you arrive.",
  },
  {
    emoji: "🔬",
    title: "Advanced Technology",
    description:
      "We invest in the latest dental technology so you get the most precise, efficient, and comfortable care possible.",
  },
  {
    emoji: "❤️",
    title: "Genuine Connection",
    description:
      "We take the time to know your name, your story, and your goals. You are not just a patient number here.",
  },
];

const awards = [
  "ADA Golden Apple Award",
  "Teaching Honors ACE Award",
  "Humanitarian Award",
  "Academic Excellence Award",
];

function TeamCard({ member, index }: { member: (typeof teamMembers)[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="rounded-2xl bg-white overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
    >
      <div className="aspect-[4/5] relative overflow-hidden">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="font-heading text-xl font-semibold text-dark">
          {member.name}
        </h3>
        <p className="text-teal text-sm font-medium mb-3">{member.role}</p>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="text-gray text-sm leading-relaxed mb-3">
                {member.bio}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={() => setExpanded(!expanded)}
          className="text-primary text-sm font-medium hover:text-teal transition-colors"
        >
          {expanded ? "Read Less" : "Read More"}
        </button>
      </div>
    </motion.div>
  );
}

export default function MeetUsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
        <Image
          src="/images/team-group.jpg"
          alt="Buchwald team"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-dark/70" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-teal text-sm font-semibold tracking-wider uppercase mb-4">
              Our Team
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Meet the Team Behind Your Smile
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Real people who genuinely care about your comfort, your health, and your smile.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 sm:py-28 bg-light-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, i) => (
              <TeamCard key={member.name} member={member} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-teal text-sm font-semibold tracking-wider uppercase mb-3">
              Why Us
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-dark">
              What Sets Us Apart
            </h2>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-3 max-w-5xl mx-auto">
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="rounded-2xl bg-light-bg p-8 text-center transition-shadow hover:shadow-xl"
              >
                <span className="text-4xl mb-4 block">{h.emoji}</span>
                <h3 className="font-heading text-lg font-semibold text-dark mb-2">
                  {h.title}
                </h3>
                <p className="text-gray text-sm leading-relaxed">
                  {h.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Honors */}
      <section className="py-16 bg-light-bg">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-teal text-sm font-semibold tracking-wider uppercase mb-3">
              Honors & Awards
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-dark mb-8">
              Dr. Buchwald&apos;s Achievements
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {awards.map((award) => (
                <span
                  key={award}
                  className="rounded-full bg-primary/10 text-primary px-5 py-2.5 text-sm font-medium"
                >
                  {award}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Testimonials />
      <CTABanner />
    </>
  );
}
