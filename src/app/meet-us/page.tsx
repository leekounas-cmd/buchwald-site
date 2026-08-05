"use client";

import { useState } from "react";
import Image from "next/image";
import { Testimonials } from "@/components/Testimonials";
import { InkHero, TickerBand, SectionHeading, NumberedRows, Pills, InkCTA } from "@/components/v8";

const BOOKING_URL = "https://book2.getweave.com/359c4bec-a0f0-4d62-9ea8-35a008305267/request-appointment?source=WEBSITE";

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

const differences = [
  {
    n: "01",
    title: "Modern environment",
    body: "Clean, contemporary, and calm. Designed to make you feel relaxed from the moment you walk in.",
  },
  {
    n: "02",
    title: "Advanced technology",
    body: "We invest in the latest tech so you get the most precise, efficient care possible.",
  },
  {
    n: "03",
    title: "Genuine connection",
    body: "We know your name, your story, and your goals. You're not a patient number here.",
  },
];

function TeamCard({ member }: { member: (typeof teamMembers)[0] }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white rounded-3xl overflow-hidden ring-1 ring-[#0C1820]/10">
      <div className="aspect-[4/5] relative overflow-hidden bg-gray-100">
        <Image
          src={member.image}
          alt={`${member.name}, ${member.role} at Buchwald Family Dentistry`}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-extrabold text-gray-900">{member.name}</h3>
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary-dark mb-3">{member.role}</p>
        {expanded && <p className="text-gray-500 text-sm leading-relaxed mb-3">{member.bio}</p>}
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-sm font-bold text-primary-dark hover:text-[#0C1820] transition-colors"
        >
          {expanded ? "Read less" : "Read more"}
        </button>
      </div>
    </div>
  );
}

export default function MeetUsPage() {
  return (
    <>
      <InkHero
        eyebrow="Our team"
        title={
          <>
            Same four faces, <span className="text-primary">every visit.</span>
          </>
        }
        intro="We're a team that genuinely cares about your comfort, your health, and your smile. Get to know the people behind it."
      />

      {/* Team photo, full width under hero */}
      <section className="bg-[#0C1820]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 pb-16 sm:pb-20 -mt-2">
          <div className="rounded-3xl overflow-hidden">
            <Image
              src="/images/team-group.jpg"
              alt="Buchwald Family Dentistry team in Richardson, TX"
              width={1200}
              height={600}
              className="w-full object-cover aspect-video"
              priority
            />
          </div>
        </div>
      </section>

      <TickerBand items={["One dentist", "One hygienist", "One front desk", "Zero rotating strangers"]} />

      {/* Team cards */}
      <section className="bg-[#F2F7F8]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24">
          <SectionHeading eyebrow="The people" title="Meet everyone." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* What sets us apart */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24">
          <SectionHeading eyebrow="Why people stay" title="What sets us apart." />
          <NumberedRows rows={differences} />
        </div>
      </section>

      {/* Awards */}
      <section className="bg-[#F2F7F8]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24">
          <SectionHeading eyebrow="Honors" title="Dr. Buchwald's awards." />
          <Pills items={awards} />
        </div>
      </section>

      <Testimonials />

      <InkCTA
        title="Come meet us in person."
        intro="Book online in two minutes, or call and Cathy will find a time that works."
        primary={{ label: "Book My Visit", href: BOOKING_URL, external: true }}
        secondary={{ label: "Call (972) 644-3280", href: "tel:972-644-3280" }}
        footnote="300 N Coit Rd #245, Richardson, TX · Mon to Thu, 7am to 3pm"
      />
    </>
  );
}
