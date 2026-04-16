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
    bio: "Dr. Max Buchwald Jr. earned his dental degree from UT Health San Antonio and is a proud member of the American Dental Association. He has completed advanced training in Invisalign, endodontics, and implantology. Outside the office, Dr. Buchwald is a triathlete and volunteers at local shelters.",
  },
  {
    name: "Melisa Kounas, RDH",
    role: "Registered Dental Hygienist",
    image: "/images/melisa.jpg",
    bio: "Melisa is a UNT alumna who graduated summa cum laude and received the prestigious Golden Scaler Award. She brings precision, warmth, and genuine care to every cleaning. A marathon finisher and mom of two boys.",
  },
  {
    name: "Cathy Kounas",
    role: "Operations Leader",
    image: "/images/cathy.jpg",
    bio: "With over 30 years of dental experience, Cathy keeps the office running smoothly behind the scenes. She is a marathon runner and proud grandmother of four.",
  },
  {
    name: "Lee Kounas",
    role: "Marketing & Insurance Coordinator",
    image: "/images/lee.jpg",
    bio: "Lee handles marketing and insurance coordination for the practice. He verifies benefits, files claims, breaks down out-of-pocket costs before treatment, and makes sure patients get the most from their coverage. Mountain biker and soccer dad.",
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
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
      className="bg-white rounded-xl overflow-hidden"
    >
      <div className="aspect-[4/5] relative overflow-hidden bg-gray-100">
        <Image src={member.image} alt={`${member.name}, ${member.role} at Buchwald Family Dentistry`} fill className="object-cover" />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
        <p className="text-primary text-xs font-bold uppercase tracking-wider mb-3">{member.role}</p>

        <AnimatePresence>
          {expanded && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden">
              <p className="text-gray-500 text-sm leading-relaxed mb-3">{member.bio}</p>
            </motion.div>
          )}
        </AnimatePresence>

        <button onClick={() => setExpanded(!expanded)} className="text-primary text-xs font-bold hover:underline">
          {expanded ? "Read Less" : "Read More"}
        </button>
      </div>
    </motion.div>
  );
}

export default function MeetUsPage() {
  return (
    <>
      <section className="py-10 sm:py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center">
            <p className="text-primary text-sm font-bold uppercase tracking-wider mb-3">Our Team</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-[1.1] mb-8">
              Real People.<br />Real Care.
            </h1>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.1 }} className="mb-10">
            <Image src="/images/team-group.jpg" alt="Buchwald Family Dentistry team in Richardson, TX" width={1200} height={600} className="rounded-2xl w-full object-cover aspect-video" priority />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-center max-w-3xl mx-auto">
            <p className="text-gray-500 text-lg leading-relaxed">
              We&apos;re not just a dental office — we&apos;re a team that genuinely cares about your comfort, your health, and your smile. Get to know the people behind it.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-gray-50">
        <div className="mx-auto max-w-5xl px-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, i) => (
              <TeamCard key={member.name} member={member} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">What Sets Us Apart</h2>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { title: "Modern Environment", description: "Clean, contemporary, and calm — designed to make you feel relaxed from the moment you walk in." },
              { title: "Advanced Technology", description: "We invest in the latest tech so you get the most precise, efficient care possible." },
              { title: "Genuine Connection", description: "We know your name, your story, and your goals. You're not a patient number here." },
            ].map((h, i) => (
              <motion.div key={h.title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="bg-gray-50 rounded-xl p-6 text-center">
                <h3 className="font-bold text-gray-900 mb-1.5">{h.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{h.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-primary text-sm font-bold uppercase tracking-wider mb-3">Honors</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8">Dr. Buchwald&apos;s Awards</h2>
            <div className="flex flex-wrap justify-center gap-2">
              {awards.map((a) => (
                <span key={a} className="rounded-lg bg-white px-4 py-2 text-xs font-bold text-gray-700">{a}</span>
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
