import Link from "next/link";
import { FAQSchema } from "@/components/FAQSchema";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { InkHero, TickerBand, SectionHeading, NumberedRows, Ledger, Pills, FaqRows, InkCTA } from "@/components/v8";

const insurancePlans = [
  "Delta Dental PPO",
  "Cigna DPPO",
  "MetLife PDP",
  "Aetna PPO",
  "Guardian",
  "United Healthcare",
  "BlueCross BlueShield",
  "Humana",
  "Lincoln Financial",
  "Principal",
  "And most other PPO plans",
];

const howItWorks = [
  {
    n: "01",
    title: "We run your numbers",
    body: "Send us your insurance card and we verify your exact benefits before your first visit, free. You'll know what's covered before you ever sit in the chair.",
  },
  {
    n: "02",
    title: "We file everything",
    body: "Claims, paperwork, follow-ups with your insurance company. You never touch a form.",
  },
  {
    n: "03",
    title: "Your cost, in writing, upfront",
    body: "Before any treatment starts, you get your estimated out-of-pocket cost in writing. No mystery invoices, ever.",
  },
];

const faqs = [
  { q: "Does Buchwald Family Dentistry accept my insurance?", a: "We accept most major PPO plans including Delta Dental, Cigna, MetLife, Aetna, and more. Our team will verify your specific plan and benefits before your visit, at no cost to you." },
  { q: "What if my insurance doesn't cover a procedure?", a: "We'll always tell you what's covered and what's not before we start. For anything not covered, we offer flexible financing through Cherry with 0% APR options." },
  { q: "Do you accept Medicaid or HMO plans?", a: "We're primarily a PPO-based office. Medicaid and most HMO plans have restrictions that limit the care we can provide. If you're unsure, call us and we'll help figure out your options." },
  { q: "How does the Essential Care Plan work?", a: "It's our in-house membership for patients without insurance. For $400/year ($34/mo through Cherry), you get 2 cleanings, 2 exams, full X-rays, and 20% off all other treatments. No waiting periods, no deductibles, no maximums. Want more? The Signature Plan at $899/year adds InnerView imaging, fluoride, laser therapy, and jet whitening at every visit." },
  { q: "Can I use my HSA or FSA at your office?", a: "Yes. All dental treatment at our office qualifies as an eligible medical expense for HSA and FSA accounts." },
  { q: "What does a first visit cost without insurance?", a: "Without insurance, ask about our Essential Care Plan at $400/year. It covers 2 cleanings, 2 exams, full X-rays, and 20% off all other treatments, with no waiting periods, no deductibles, and no annual maximums. Cherry financing is available too. We'll walk you through any recommended treatment and give you a clear cost breakdown before anything is scheduled." },
];

export default function InsurancePage() {
  return (
    <>
      <InkHero
        eyebrow="Insurance & Financing"
        title={
          <>
            We handle the <span className="text-primary">insurance headache.</span>
          </>
        }
        intro="Most major PPO plans accepted. We run your benefits, file your claims, and put your out-of-pocket cost in writing before anything is scheduled."
      >
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="tel:972-644-3280"
            className="rounded-full bg-primary px-8 py-4 text-sm font-bold text-white text-center hover:bg-primary-dark transition-colors"
          >
            Call to Verify My Benefits
          </a>
          <Link
            href="/membership"
            className="rounded-full border border-white/25 px-8 py-4 text-sm font-semibold text-white text-center hover:border-white/60 transition-colors"
          >
            No Insurance? See Plans
          </Link>
        </div>
      </InkHero>

      <TickerBand
        items={["Most PPOs accepted", "$0 cleanings for most insured patients", "Claims filed for you", "No surprise bills"]}
      />

      {/* Plans accepted */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24">
          <SectionHeading
            eyebrow="In-network with most major PPOs"
            title="Plans we accept."
            intro="We're in-network with most major PPO plans and file all claims on your behalf."
          />
          <Pills items={insurancePlans} />
          <p className="text-gray-500 text-sm mt-6">
            Don&apos;t see your plan? Call us at{" "}
            <a href="tel:972-644-3280" className="text-primary-dark font-semibold hover:underline">
              (972) 644-3280
            </a>{" "}
            and we&apos;ll check your benefits for free.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-[#F2F7F8]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24">
          <SectionHeading
            eyebrow="How it works here"
            title="Three steps. Zero paperwork for you."
          />
          <NumberedRows rows={howItWorks} />
        </div>
      </section>

      {/* No insurance */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-x-16 gap-y-12">
            <div className="lg:sticky lg:top-24 self-start">
              <SectionHeading
                eyebrow="No insurance?"
                title="Still no problem."
                intro="Our in-house plans cover your preventive care and discount everything else. No insurance company involved."
              />
              <Link
                href="/membership"
                className="inline-flex rounded-full bg-[#0C1820] px-7 py-3.5 text-sm font-bold text-white hover:bg-[#1A2E3B] transition-colors"
              >
                Compare Both Plans
              </Link>
            </div>
            <Ledger
              rows={[
                {
                  title: "Essential Care Plan",
                  price: "$400/yr",
                  body: "2 cleanings, 2 exams, full X-rays, and 20% off all other treatments. No deductibles, no maximums, no waiting periods. $34 a month with Cherry.",
                  href: "/membership",
                  link: "See plan details",
                },
                {
                  title: "Signature Care Plan",
                  price: "$899/yr",
                  body: "Everything in Essential, plus InnerView imaging, fluoride, laser therapy, and jet whitening at every visit. Retail value $1,233+. $75 a month with Cherry.",
                  href: "/membership",
                  link: "Compare plans",
                },
                {
                  title: "Bigger treatment",
                  price: "0% APR",
                  body: "Cherry splits any treatment into monthly payments. Apply in minutes, no credit score impact.",
                  href: "/payment-plans",
                  link: "Check payment options",
                },
              ]}
              footnote="Cherry financing available on both plans. Apply in minutes, no impact on credit score."
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F2F7F8]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24">
          <SectionHeading eyebrow="Before you ask" title="Common questions." />
          <div className="max-w-3xl">
            <FaqRows faqs={faqs} />
          </div>
        </div>
      </section>

      <InkCTA
        title="Not sure what your plan covers?"
        intro="Call with your insurance card handy and we'll run your exact benefits, free."
        primary={{ label: "Call (972) 644-3280", href: "tel:972-644-3280" }}
        secondary={{ label: "See Membership Plans", href: "/membership" }}
        footnote="300 N Coit Rd #245, Richardson, TX · Mon to Thu, 7am to 3pm"
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={[{ name: "Insurance", href: "/insurance" }]} />
    </>
  );
}
