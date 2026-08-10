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

const PAGE = "/visit";

export default function VisitPage() {
  return (
    <>
      <CampaignHero
        page={PAGE}
        title="Your First Visit, Made Easy"
        subtitle="Exam, x-rays, and cleaning, plus free Jet Whitening and take-home whitening trays. Most PPO plans cover it at 100%. No insurance? $169 covers everything."
        badge={`Ends ${offer.expiresShort}`}
      />

      <TrustRow />

      <PricingCards />

      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="font-archivo text-center text-3xl text-gray-900">
            What&rsquo;s Included
          </h2>
          <ol className="mx-auto mt-8 max-w-2xl space-y-5">
            {offer.included.map((item, i) => (
              <li key={item.title} className="flex gap-4">
                <span className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary-light text-sm font-bold text-primary">
                  {i + 1}
                </span>
                <div>
                  <p className="font-bold text-gray-900">{item.title}</p>
                  <p className="mt-0.5 text-gray-600">{item.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-gray-50 py-14 md:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-archivo text-3xl text-gray-900">
            Gentle Cleanings, No Rush
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            If it&rsquo;s been a while or you get nervous at the dentist, tell us. Your hygienist
            will take it slow and explain everything before they start.
          </p>
        </div>
      </section>

      <ReviewsCarousel limit={4} />

      <HoursSection page={PAGE} />

      <ClosingCta page={PAGE} heading="Ready to Get It Scheduled?" />

      <CampaignFooter />
      <StickyCallBar page={PAGE} />
    </>
  );
}
