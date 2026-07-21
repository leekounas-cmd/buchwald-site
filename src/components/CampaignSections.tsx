"use client";

import { CampaignForm } from "@/components/CampaignForm";
import { offer, PHONE_DISPLAY, PHONE_HREF, WEAVE_ADS_URL } from "@/lib/offer";

export function fireCampaignEvent(name: string, page: string) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", name, { page });
  }
}

export function CampaignHero({
  page,
  title,
  subtitle,
  badge,
}: {
  page: string;
  title: string;
  subtitle: string;
  badge?: string;
}) {
  return (
    <section className="bg-ink text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-2 md:items-center md:py-20">
        <div>
          {badge && (
            <span className="mb-4 inline-block rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
              {badge}
            </span>
          )}
          <h1 className="font-archivo text-4xl leading-tight md:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-lg text-gray-200">{subtitle}</p>
          <div className="mt-6 hidden flex-col gap-3 md:flex">
            <HeroSecondaryLinks page={page} light />
          </div>
        </div>
        <div>
          <CampaignForm page={page} formId="lead-form" />
          <div className="mt-4 flex flex-col gap-3 md:hidden">
            <HeroSecondaryLinks page={page} light />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroSecondaryLinks({ page, light }: { page: string; light?: boolean }) {
  return (
    <>
      <a
        href={WEAVE_ADS_URL}
        onClick={() => fireCampaignEvent("booking_click", page)}
        className={`text-sm font-semibold underline underline-offset-4 ${
          light ? "text-gray-200 hover:text-white" : "text-gray-600 hover:text-gray-900"
        }`}
      >
        Prefer to pick a time? Book online
      </a>
      <a
        href={PHONE_HREF}
        onClick={() => fireCampaignEvent("tel_click", page)}
        className={`text-sm font-semibold ${light ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"}`}
      >
        Or call {PHONE_DISPLAY} (Mon to Thu, 7am to 3pm)
      </a>
    </>
  );
}

export function TrustRow() {
  return (
    <section className="border-b border-gray-100 bg-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-2 px-6 py-5 text-sm font-semibold text-gray-700">
        {offer.trustRow.map((item) => (
          <span key={item} className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}

export function PricingCards() {
  return (
    <section className="bg-gray-50 py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-archivo text-center text-3xl text-gray-900">
          What It Costs
        </h2>
        <div className="mx-auto mt-8 grid max-w-4xl gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-gray-200">
            <p className="text-sm font-bold uppercase tracking-wide text-primary">{offer.insuredCard.title}</p>
            <p className="mt-3 text-2xl font-bold text-gray-900">Covered at 100% by most PPO plans*</p>
            <p className="mt-3 text-gray-600">{offer.insuredCard.body}</p>
          </div>
          <div className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-gray-200">
            <p className="text-sm font-bold uppercase tracking-wide text-primary">{offer.uninsuredCard.title}</p>
            <p className="mt-3 text-2xl font-bold text-gray-900">{offer.uninsuredPrice} for the full visit*</p>
            <p className="mt-3 text-gray-600">{offer.uninsuredCard.body}</p>
          </div>
        </div>
        <p className="mx-auto mt-6 max-w-4xl text-center text-base text-gray-600">
          *{offer.deepCleaningDisclosure} {offer.deepCleaningFollowup}
        </p>
        <div className="mx-auto mt-8 max-w-4xl rounded-2xl border border-primary/30 bg-primary-light p-7">
          <p className="font-bold text-gray-900">{offer.deepCleaning.heading}</p>
          <p className="mt-2 text-gray-700">{offer.deepCleaning.body}</p>
          <p className="mt-3 text-lg font-bold text-gray-900">
            About $117 to $146 a month
            <span className="font-normal text-gray-700"> over 12 months through Cherry, with as little as $117 down.</span>
          </p>
          <p className="mt-3 text-sm text-gray-600">{offer.deepCleaning.insuredNote}</p>
        </div>
      </div>
    </section>
  );
}

export function HoursSection({ page }: { page: string }) {
  return (
    <section className="bg-white py-14 md:py-16">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-archivo text-2xl text-gray-900">
          Office Hours
        </h2>
        <p className="mt-4 text-lg font-semibold text-gray-900">
          {offer.hours.days}, {offer.hours.time}
        </p>
        <p className="mt-1 text-gray-500">Closed Friday through Sunday</p>
        <p className="mx-auto mt-5 max-w-xl rounded-xl bg-primary-light px-6 py-4 text-gray-700">
          {offer.hours.afterHoursLine}
        </p>
        <a
          href={PHONE_HREF}
          onClick={() => fireCampaignEvent("tel_click", page)}
          className="mt-5 inline-block text-sm font-semibold text-primary hover:text-primary-dark"
        >
          Call {PHONE_DISPLAY}
        </a>
      </div>
    </section>
  );
}

export function ClosingCta({ page, heading }: { page: string; heading: string }) {
  return (
    <section className="bg-ink py-14 md:py-20">
      <div className="mx-auto max-w-xl px-6">
        <h2 className="font-archivo text-center text-3xl text-white">
          {heading}
        </h2>
        <div className="mt-8">
          <CampaignForm page={page} />
        </div>
        <div className="mt-6 flex flex-col items-center gap-3">
          <HeroSecondaryLinks page={page} light />
        </div>
      </div>
    </section>
  );
}

export function CampaignFooter() {
  return (
    <footer className="border-t border-gray-100 bg-white px-6 py-8 pb-24 text-center text-sm text-gray-500 lg:pb-8">
      <p className="font-semibold text-gray-700">Buchwald Family Dentistry</p>
      <p className="mt-1">300 N Coit Rd #245, Richardson, TX</p>
      <p className="mt-1">&copy; {new Date().getFullYear()} Buchwald Family Dentistry</p>
    </footer>
  );
}
