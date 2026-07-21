"use client";

import Image from "next/image";
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
        subtitle="Exam, x-rays, and cleaning, plus free Jet Whitening and take-home whitening trays."
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
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 px-6 md:flex-row md:gap-12">
          <Image
            src="/images/melisa.jpg"
            alt="Melisa, hygienist at Buchwald Family Dentistry"
            width={280}
            height={280}
            className="h-56 w-56 flex-shrink-0 rounded-2xl object-cover md:h-64 md:w-64"
          />
          <div className="text-center md:text-left">
            <h2 className="font-archivo text-3xl text-gray-900">
              Your Cleaning Is with Melisa
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Melisa has done 2,000+ cleanings and is known for being genuinely gentle. If it&rsquo;s
              been a while or you get nervous at the dentist, tell her. She&rsquo;ll take it slow and
              explain everything before she starts.
            </p>
          </div>
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
