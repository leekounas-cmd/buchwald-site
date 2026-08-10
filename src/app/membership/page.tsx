import Link from "next/link";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { InkHero, TickerBand, SectionHeading, FaqRows, InkCTA } from "@/components/v8";

const BOOKING_URL = "https://book2.getweave.com/359c4bec-a0f0-4d62-9ea8-35a008305267/request-appointment?source=WEBSITE";

const essentialItems = [
  "2 professional cleanings per year*",
  "2 comprehensive exams per year",
  "Full set of digital X-rays",
  "20% off all other treatments (fillings, crowns, and more)",
  "No waiting periods",
  "No annual maximums",
  "No deductibles",
];

const signatureItems = [
  "Everything in Essential",
  "InnerView imaging at every visit",
  "Fluoride at every visit",
  "Laser therapy at every visit",
  "20% off all other treatments",
  "No waiting periods, maximums, or deductibles",
];

const essentialSavings = [
  { treatment: "2 Cleanings*", plan: "Included", retail: "$440" },
  { treatment: "2 Exams", plan: "Included", retail: "$300" },
  { treatment: "Full X-rays", plan: "Included", retail: "$150" },
];

const signatureSavings = [
  { treatment: "2 Cleanings", plan: "Included", retail: "$440" },
  { treatment: "2 Exams", plan: "Included", retail: "$300" },
  { treatment: "Full X-rays", plan: "Included", retail: "$150" },
  { treatment: "InnerView x2", plan: "Included", retail: "$60" },
  { treatment: "Fluoride x2", plan: "Included", retail: "$130" },
  { treatment: "Laser Therapy x2", plan: "Included", retail: "$250" },
];

const faqs = [
  {
    q: "Do I need to have insurance to join?",
    a: "No. These plans are designed specifically for patients without dental insurance. They give you the same level of preventive care, without the middleman.",
  },
  {
    q: "Can I join the plan at my first visit?",
    a: "Yes. You can sign up at any time, including your first appointment. The plan starts immediately with no waiting period.",
  },
  {
    q: "What if I need a filling or crown?",
    a: "Both plans include 20% off all other treatments, including fillings, crowns, root canals, and more. You'll always know your cost before we start anything.",
  },
  {
    q: "Can I pay monthly instead of annually?",
    a: "Yes. Both plans are available through Cherry financing. Essential is $34/mo and Signature is $75/mo, both on a 12-month term at 0% APR.",
  },
  {
    q: "Is there a contract?",
    a: "The plans are annual. If you pay through Cherry, payments are spread over 12 months. There's no long-term contract beyond the plan year.",
  },
  {
    q: "What if I haven't been to the dentist in a while? Will I still get a regular cleaning?",
    a: "Maybe. The plan covers standard (prophylaxis) cleanings. If there's significant buildup below the gumline, a deep cleaning (scaling and root planing) may be recommended first to get you healthy. We'll walk you through what's needed and your options before anything is scheduled.",
  },
];

function Check({ white }: { white?: boolean }) {
  return (
    <svg className={`h-4 w-4 flex-shrink-0 mt-0.5 ${white ? "text-primary" : "text-primary"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function SavingsTable({
  label,
  rows,
  planCost,
  retailValue,
  savings,
}: {
  label: string;
  rows: { treatment: string; plan: string; retail: string }[];
  planCost: string;
  retailValue: string;
  savings: string;
}) {
  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary-dark mb-4">{label}</p>
      <div className="bg-white rounded-3xl overflow-hidden ring-1 ring-[#0C1820]/10">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left px-5 py-3.5 font-bold text-gray-400 text-xs uppercase tracking-wider">Item</th>
              <th className="text-right px-5 py-3.5 font-bold text-primary-dark text-xs uppercase tracking-wider">Your Cost</th>
              <th className="text-right px-5 py-3.5 font-bold text-gray-400 text-xs uppercase tracking-wider">Retail</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.treatment} className="border-b border-gray-100 last:border-0">
                <td className="px-5 py-3.5 text-gray-700">{row.treatment}</td>
                <td className="px-5 py-3.5 text-primary-dark font-bold text-right">{row.plan}</td>
                <td className="px-5 py-3.5 text-gray-400 text-right">{row.retail}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="px-5 py-5 bg-[#0C1820] text-white">
          <div className="flex justify-between text-sm font-bold mb-1">
            <span>Plan cost</span>
            <span className="font-archivo">{planCost}</span>
          </div>
          <div className="flex justify-between text-xs text-[#8FA9B5] mb-2">
            <span>Retail value of included items</span>
            <span>{retailValue}</span>
          </div>
          <div className="flex justify-between font-extrabold text-primary">
            <span>You save</span>
            <span className="font-archivo">{savings}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MembershipPage() {
  return (
    <>
      <InkHero
        eyebrow="No insurance? No problem."
        title={
          <>
            Two plans. Zero <span className="text-primary">insurance games.</span>
          </>
        }
        intro="Preventive care, big discounts on treatment, and monthly payments through Cherry. Built for patients without insurance."
      >
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-primary px-8 py-4 text-sm font-bold text-white text-center hover:bg-primary-dark transition-colors"
          >
            Book and Join at Your Visit
          </a>
          <a
            href="tel:972-644-3280"
            className="rounded-full border border-white/25 px-8 py-4 text-sm font-semibold text-white text-center hover:border-white/60 transition-colors"
          >
            Call (972) 644-3280
          </a>
        </div>
      </InkHero>

      <TickerBand items={["No waiting periods", "No deductibles", "No annual maximums", "0% APR with Cherry"]} />

      {/* Plan cards */}
      <section className="bg-[#F2F7F8]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24">
          <SectionHeading
            eyebrow="Pick your plan"
            title="The money part, in plain English."
          />
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
            {/* Essential */}
            <div className="bg-white rounded-3xl p-8 ring-1 ring-[#0C1820]/10 flex flex-col">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary-dark mb-3">Essential Care Plan</p>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="font-archivo text-4xl text-[#0C1820]">$400</span>
                <span className="text-gray-400 text-sm">/year</span>
              </div>
              <p className="text-xs text-gray-400 mb-7">or $34/mo through Cherry</p>
              <ul className="space-y-2.5 flex-1 mb-8">
                {essentialItems.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <Check />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-full bg-primary px-5 py-3.5 text-sm font-bold text-white hover:bg-primary-dark transition-colors text-center"
              >
                Get Started
              </a>
              <p className="text-xs text-gray-400 text-center mt-3">Call (972) 644-3280 to sign up at your visit</p>
            </div>

            {/* Signature */}
            <div className="bg-[#0C1820] text-white rounded-3xl p-8 flex flex-col relative">
              <span className="absolute -top-3 left-8 bg-primary text-white text-[11px] font-bold uppercase tracking-wider px-4 py-1 rounded-full">
                Best Value
              </span>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary mb-3">Signature Care Plan</p>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="font-archivo text-4xl">$899</span>
                <span className="text-[#8FA9B5] text-sm">/year</span>
              </div>
              <p className="text-xs text-[#8FA9B5] mb-7">or $75/mo through Cherry</p>
              <ul className="space-y-2.5 flex-1 mb-8">
                {signatureItems.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-[#B9CBD4]">
                    <Check white />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="rounded-2xl bg-white/[0.06] border border-white/10 px-4 py-3 mb-7 text-center">
                <p className="text-[#8FA9B5] text-xs">
                  Retail value <span className="line-through">$1,330+</span>
                </p>
                <p className="font-extrabold text-sm text-primary">You save $431+ per year</p>
              </div>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-full bg-primary px-5 py-3.5 text-sm font-bold text-white hover:bg-primary-dark transition-colors text-center"
              >
                Get Started
              </a>
              <p className="text-xs text-[#8FA9B5] text-center mt-3">Call (972) 644-3280 to sign up at your visit</p>
            </div>
          </div>

          <p className="text-gray-400 text-xs mt-6 max-w-4xl">
            Cherry financing available on both plans. Apply in minutes, no impact to credit score, 0% APR.
          </p>
          <p className="text-gray-500 text-xs mt-2 max-w-2xl">
            *Covers standard (prophylaxis) cleanings. If it has been a while since your last dental visit, a deep
            cleaning may be recommended first.{" "}
            <Link href="/blog/what-is-a-deep-cleaning" className="text-primary-dark font-semibold underline">
              Learn why deep cleanings matter
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Gentle cleanings */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24">
          <SectionHeading
            eyebrow="Gentle cleanings"
            title="A cleaning that doesn't hurt."
            intro="A lot of people put off the dentist because their last cleaning was painful. Gentle is the standard here. Patients consistently tell us it was the most comfortable cleaning they have ever had."
          />
          <div className="grid sm:grid-cols-3 max-w-3xl">
            {[
              { stat: "Explained", label: "Every step, before it happens" },
              { stat: "Gentle", label: "Hand and technique" },
              { stat: "No rush", label: "We take our time" },
            ].map((s) => (
              <div key={s.stat} className="border-t border-gray-200 py-6 sm:pr-10">
                <p className="font-archivo text-3xl text-primary">{s.stat}</p>
                <p className="text-gray-500 text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-sm mt-4 max-w-2xl">
            Nervous about cleanings?{" "}
            <Link href="/meet-us" className="text-primary-dark font-semibold underline">
              Meet the team
            </Link>{" "}
            or{" "}
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="text-primary-dark font-semibold underline">
              book your visit
            </a>{" "}
            and tell us up front. We will adjust everything to your comfort.
          </p>
        </div>
      </section>

      {/* Year-one math */}
      <section className="bg-[#F2F7F8]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24">
          <SectionHeading
            eyebrow="Do the math"
            title="Year-one math."
            intro="What you pay vs. what you would have paid without a plan."
          />
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
            <SavingsTable
              label="Essential Plan, $400/yr"
              rows={essentialSavings}
              planCost="$400/year"
              retailValue="$890+"
              savings="$290+"
            />
            <SavingsTable
              label="Signature Plan, $899/yr"
              rows={signatureSavings}
              planCost="$899/year"
              retailValue="$1,330+"
              savings="$431+"
            />
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
        title="Ready to skip the insurance maze?"
        intro="Book online in two minutes, or call and we'll get you signed up."
        primary={{ label: "Book My Visit", href: BOOKING_URL, external: true }}
        secondary={{ label: "Call (972) 644-3280", href: "tel:972-644-3280" }}
        footnote="300 N Coit Rd #245, Richardson, TX · Mon to Thu, 7am to 3pm"
      />
      <BreadcrumbSchema items={[{ name: "Membership Plans", href: "/membership" }]} />
    </>
  );
}
