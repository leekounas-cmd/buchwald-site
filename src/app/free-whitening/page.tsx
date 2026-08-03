"use client";

import { ReviewsCarousel } from "@/components/ReviewsCarousel";
import { StickyCallBar } from "@/components/StickyCallBar";
import {
  CampaignFooter,
  CampaignHero,
  ClosingCta,
  HoursSection,
  PricingCards,
  TrustRow,
} from "@/components/CampaignSections";
import { offer } from "@/lib/offer";

const PAGE = "/free-whitening";

const whoForItems = [
  "Coffee drinkers",
  "Tea drinkers",
  "Wine drinkers",
  "Anyone seeing staining in the mirror",
  "Anyone overdue for a cleaning",
];

const steps = [
  { title: "Exam and cleaning", desc: "Dr. Buchwald and Melisa take care of your checkup and a gentle, thorough cleaning." },
  { title: "Jet Whitening added", desc: "About ten minutes, right in the same chair. It lifts coffee, tea, and wine staining." },
  { title: "Leave with your trays", desc: "You go home with custom Opalescence trays and professional gel to keep whitening on your schedule." },
];

export default function FreeWhiteningPage() {
  return (
    <>
      <CampaignHero
        page={PAGE}
        title="Free Whitening for New Patients"
        subtitle={`Jet Whitening plus take-home trays, included with your first exam and cleaning. Ends ${offer.expiresShort}.`}
        badge={`Ends ${offer.expiresShort}`}
      />

      <TrustRow />

      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="font-archivo text-center text-3xl text-gray-900">
            What You Get
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border-2 border-primary bg-primary-light p-7">
              <p className="text-sm font-bold uppercase tracking-wide text-primary">In the chair</p>
              <h3 className="mt-2 text-xl font-bold text-gray-900">Jet Whitening ($99 value, free)</h3>
              <p className="mt-3 text-gray-700">
                A ten-minute high-pressure polish that lifts coffee, tea, and wine staining. Normally
                $99 as an add-on.
              </p>
            </div>
            <div className="rounded-2xl border-2 border-gray-200 bg-white p-7">
              <p className="text-sm font-bold uppercase tracking-wide text-primary">At home</p>
              <h3 className="mt-2 text-xl font-bold text-gray-900">Take-home whitening trays (free)</h3>
              <p className="mt-3 text-gray-700">
                Custom Opalescence trays and professional gel to whiten at home on your schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-14 md:py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-archivo text-3xl text-gray-900">
            Who This Is For
          </h2>
          <ul className="mt-6 flex flex-wrap justify-center gap-3">
            {whoForItems.map((item) => (
              <li
                key={item}
                className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 ring-1 ring-gray-200"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="font-archivo text-center text-3xl text-gray-900">
            How It Works
          </h2>
          <ol className="mt-10 grid gap-8 md:grid-cols-3">
            {steps.map((step, i) => (
              <li key={step.title} className="text-center">
                <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-primary text-base font-bold text-white">
                  {i + 1}
                </span>
                <p className="mt-4 font-bold text-gray-900">{step.title}</p>
                <p className="mt-2 text-gray-600">{step.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <PricingCards />

      <ReviewsCarousel limit={4} />

      <section className="bg-white pb-4 pt-10">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-center text-xs leading-relaxed text-gray-400">
            {offer.finePrint.join(" · ")}
          </p>
        </div>
      </section>

      <HoursSection page={PAGE} />

      <ClosingCta page={PAGE} heading="Claim Your Free Whitening" />

      <CampaignFooter />
      <StickyCallBar page={PAGE} />
    </>
  );
}
