import Link from "next/link";
import Image from "next/image";
import { FAQSchema } from "@/components/FAQSchema";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { ServiceSchema } from "@/components/ServiceSchema";
import { InkHero, TickerBand, SectionHeading, NumberedRows, Pills, FaqRows, InkCTA } from "@/components/v8";

const BOOKING_URL = "https://book2.getweave.com/359c4bec-a0f0-4d62-9ea8-35a008305267/request-appointment?source=WEBSITE";

const steps = [
  {
    n: "01",
    title: "Check-in and paperwork",
    body: (
      <>
        Arrive a few minutes early, or knock the forms out from your couch ahead of time on our{" "}
        <Link href="/forms" className="text-primary-dark font-semibold underline">
          new patient forms page
        </Link>
        . Either way, no clipboard marathon.
      </>
    ),
  },
  {
    n: "02",
    title: "Meet Melisa, your hygienist",
    body: "Melisa is who you'll spend most of your visit with. She'll get to know you, answer your questions, and walk you through everything before she starts.",
  },
  {
    n: "03",
    title: "Cleaning, X-rays, and exam",
    body: "Melisa does a gentle cleaning, takes digital X-rays, and does an oral cancer screening. Known for being genuinely gentle across 2,000+ cleanings.",
  },
  {
    n: "04",
    title: "Your care plan with Dr. Buchwald",
    body: "Dr. Buchwald joins to walk you through everything Melisa found. No surprises, no pressure. Just a clear plan forward.",
  },
];

const bringList = [
  "Photo ID",
  "Insurance card",
  "Current medications list",
  "Old dental records, if you have them",
  "Any questions for us",
];

const faqs = [
  { q: "Is my cleaning covered by insurance?", a: "Almost always, yes. Most PPO dental plans cover preventive care (cleaning, exam, X-rays) at 100% with no copay. Our coordinator Lee will verify your benefits before your visit and tell you exactly what's covered and what (if anything) you owe." },
  { q: "What if I don't have insurance?", a: "No problem. Ask about our membership plans. Essential is $400/year (2 cleanings, 2 exams, X-rays, 20% off other treatments). Signature is $899/year and adds InnerView imaging, fluoride, laser therapy, and jet whitening at every visit. No waiting periods, no deductibles, no annual maximums." },
  { q: "How long is the first visit?", a: "Plan for about 60 to 90 minutes. We take our time with new patients to make sure we get a complete picture of your oral health." },
  { q: "Can I bring my kids?", a: "Absolutely. We're a family practice and love seeing patients of all ages. You can schedule appointments for the whole family on the same day." },
  { q: "What if I haven't been to a dentist in years?", a: "No judgment, seriously. We see patients in every situation and our only goal is to help you move forward with a plan that works for you." },
  { q: "Do you offer payment plans?", a: "Yes. We offer flexible payment options so cost never gets in the way of your care. Ask our team about what works best for your situation." },
];

export default function NewPatientPage() {
  return (
    <>
      <InkHero
        eyebrow="Welcome to Buchwald Family Dentistry"
        title={
          <>
            Your first visit, minus <span className="text-primary">the nerves.</span>
          </>
        }
        intro="We know switching dentists can feel like a big deal. Our goal is to make you feel welcome from the moment you walk in. No judgment, no pressure."
      >
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-primary px-8 py-4 text-sm font-bold text-white text-center hover:bg-primary-dark transition-colors"
          >
            Book My First Visit
          </a>
          <a
            href="tel:972-644-3280"
            className="rounded-full border border-white/25 px-8 py-4 text-sm font-semibold text-white text-center hover:border-white/60 transition-colors"
          >
            Call (972) 644-3280
          </a>
        </div>
      </InkHero>

      <TickerBand
        items={["$0 with most insurance", "60 to 90 minutes", "4.9 stars on Google", "Same-day appointments"]}
      />

      {/* What to expect */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24">
          <SectionHeading eyebrow="What to expect" title="Your first visit, start to finish." />
          <NumberedRows rows={steps} />
        </div>
      </section>

      {/* Meet Melisa */}
      <section className="bg-[#F2F7F8]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24">
          <div className="grid sm:grid-cols-[200px_1fr] gap-10 items-center max-w-4xl">
            <div className="h-40 w-40 sm:h-48 sm:w-48 rounded-full overflow-hidden ring-1 ring-[#0C1820]/10 mx-auto sm:mx-0">
              <Image
                src="/images/melisa.jpg"
                alt="Melisa Kounas, hygienist"
                width={192}
                height={192}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary-dark mb-4">Your hygienist</p>
              <h2 className="font-archivo text-3xl sm:text-4xl leading-[1.05] mb-5">
                You&apos;ll spend most of your visit with Melisa.
              </h2>
              <p className="text-gray-500 leading-relaxed mb-5">
                Melisa Kounas does your cleaning, X-rays, and the full exam prep. She&apos;s genuinely gentle (over
                2,000 cleanings and counting) and patients consistently tell us it&apos;s the most comfortable cleaning
                they have ever had. Nervous about the dentist? Tell Melisa up front. She will adjust everything to your
                comfort.
              </p>
              <Link
                href="/meet-us"
                className="group inline-flex items-center gap-2 text-sm font-bold text-primary-dark hover:text-[#0C1820] transition-colors"
              >
                Meet the whole team
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Insured / not insured */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24">
          <SectionHeading eyebrow="The money part" title="Insured or not, you're covered." />
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
            <div className="bg-[#0C1820] text-white rounded-3xl p-8 flex flex-col">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary mb-3">Have insurance?</p>
              <h3 className="text-2xl font-extrabold mb-2">Your cleaning is covered.</h3>
              <p className="text-sm text-[#8FA9B5] mb-6">Most PPO plans cover preventive care at 100%.</p>
              <ul className="space-y-2.5 flex-1 mb-7 text-sm text-[#B9CBD4]">
                <li>Professional cleaning</li>
                <li>Comprehensive exam</li>
                <li>Full set of digital X-rays</li>
                <li>Benefits verified before your visit</li>
              </ul>
              <a
                href="tel:972-644-3280"
                className="rounded-full bg-primary px-5 py-3.5 text-sm font-bold text-white hover:bg-primary-dark transition-colors text-center"
              >
                Call to Verify Benefits
              </a>
            </div>
            <div className="bg-white rounded-3xl p-8 ring-1 ring-[#0C1820]/10 flex flex-col">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary-dark mb-3">No insurance?</p>
              <h3 className="text-2xl font-extrabold text-gray-900 mb-2">Join a membership plan.</h3>
              <p className="text-sm text-gray-500 mb-6">No waiting periods, no deductibles, no maximums.</p>
              <ul className="space-y-2.5 flex-1 mb-7 text-sm text-gray-700">
                <li>Essential at $400/year (2 cleanings, exams, X-rays)</li>
                <li>Signature at $899/year (adds InnerView, fluoride, laser)</li>
                <li>20% off all other treatments</li>
                <li>Cherry financing from $34/mo</li>
              </ul>
              <Link
                href="/membership"
                className="rounded-full bg-[#0C1820] px-5 py-3.5 text-sm font-bold text-white hover:bg-[#1A2E3B] transition-colors text-center"
              >
                See Membership Plans
              </Link>
            </div>
          </div>
          <p className="text-gray-500 text-xs mt-6 max-w-2xl">
            If it has been a while since your last dental visit, a deep cleaning may be recommended first.{" "}
            <Link href="/blog/what-is-a-deep-cleaning" className="text-primary-dark font-semibold underline">
              Why deep cleanings matter
            </Link>
            .
          </p>
        </div>
      </section>

      {/* What to bring + office details */}
      <section className="bg-[#F2F7F8]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24">
          <div className="grid lg:grid-cols-2 gap-x-16 gap-y-14">
            <div>
              <SectionHeading eyebrow="Day of your visit" title="Toss these in the car." />
              <Pills items={bringList} />
            </div>
            <div>
              <SectionHeading eyebrow="Office details" title="Finding us." />
              <div>
                {[
                  { label: "Address", value: "300 N Coit Rd #245", sub: "Richardson, TX 75080" },
                  { label: "Hours", value: "Monday to Thursday", sub: "7:00 AM to 3:00 PM" },
                  { label: "Call or text", value: "(972) 644-3280", sub: "Same-day when possible", href: "tel:972-644-3280" },
                ].map((row) => (
                  <div key={row.label} className="border-t border-[#0C1820]/10 py-5">
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary-dark mb-1.5">{row.label}</p>
                    {row.href ? (
                      <a href={row.href} className="font-extrabold text-gray-900 hover:text-primary-dark">
                        {row.value}
                      </a>
                    ) : (
                      <p className="font-extrabold text-gray-900">{row.value}</p>
                    )}
                    <p className="text-gray-500 text-sm">{row.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24">
          <SectionHeading eyebrow="Before you ask" title="Common questions." />
          <div className="max-w-3xl">
            <FaqRows faqs={faqs} />
          </div>
        </div>
      </section>

      <InkCTA
        title="Come say hi, Richardson."
        intro="Book online in two minutes, or call and Cathy will find a time that works."
        primary={{ label: "Book My First Visit", href: BOOKING_URL, external: true }}
        secondary={{ label: "Call (972) 644-3280", href: "tel:972-644-3280" }}
        footnote="300 N Coit Rd #245, Richardson, TX · Mon to Thu, 7am to 3pm"
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={[{ name: "New Patient", href: "/new-patient" }]} />
      <ServiceSchema
        name="New Patient Visit"
        description="New patient cleaning, exam, and X-rays at Buchwald Family Dentistry in Richardson, TX. Covered at 100% by most PPO insurance. Serving Plano, Allen, and Garland."
        url="/new-patient"
      />
    </>
  );
}
