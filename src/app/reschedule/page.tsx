import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Welcome Back | Buchwald Family Dentistry",
  description:
    "It's time to get you back in the chair. Book online and we'll add a free whitening tray to your next visit.",
  robots: {
    index: false,
    follow: false,
  },
};

const BOOKING_URL =
  "https://book2.getweave.com/359c4bec-a0f0-4d62-9ea8-35a008305267/request-appointment?source=WEBSITE";
const PHONE = "972-644-3280";
const PHONE_DISPLAY = "(972) 644-3280";

export default function ReschedulePage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-cream to-white pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-brand-teal">
            A Little Nudge From Your Dental Team
          </p>
          <h1 className="mb-6 text-4xl font-semibold leading-tight text-brand-navy md:text-6xl">
            It's been a minute. Let's get you back in.
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600 md:text-xl">
            Life gets busy. We get it. No guilt trip, no lecture. Just an easy
            way to slide back onto the schedule and get your smile handled.
          </p>

          {/* Offer badge */}
          <div className="mx-auto mb-8 inline-flex items-center gap-3 rounded-full border-2 border-brand-gold bg-white px-6 py-3 shadow-sm">
            <span className="text-2xl">🦷</span>
            <span className="text-base font-semibold text-brand-navy md:text-lg">
              Book online and we'll add a{" "}
              <span className="text-brand-teal">free whitening tray</span> to
              your visit.
            </span>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-brand-teal px-8 py-4 text-base font-semibold text-white shadow-md transition hover:bg-brand-teal-dark hover:shadow-lg md:text-lg"
            >
              Book Online & Claim My Tray
            </a>
            <a
              href={`tel:${PHONE}`}
              className="rounded-full border-2 border-brand-navy px-8 py-4 text-base font-semibold text-brand-navy transition hover:bg-brand-navy hover:text-white md:text-lg"
            >
              Call {PHONE_DISPLAY}
            </a>
          </div>

          <p className="mt-6 text-sm text-gray-500">
            Same-day appointments often available. Takes about 60 seconds to
            book.
          </p>
        </div>
      </section>

      {/* Why Book Online */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-semibold text-brand-navy md:text-4xl">
              Here's the deal on the whitening tray
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              We'd rather have you on the books than chasing you down with
              reminders. So if you book online right now, we'll include a
              custom take-home whitening tray at your next cleaning. No extra
              charge.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-100 bg-cream p-8 text-center">
              <div className="mb-3 text-3xl">✨</div>
              <h3 className="mb-2 font-semibold text-brand-navy">
                Custom-Fitted Tray
              </h3>
              <p className="text-sm text-gray-600">
                Not a one-size-fits-all strip. A tray molded to your smile.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-100 bg-cream p-8 text-center">
              <div className="mb-3 text-3xl">🏠</div>
              <h3 className="mb-2 font-semibold text-brand-navy">
                Use It At Home
              </h3>
              <p className="text-sm text-gray-600">
                Whiten on your couch. Your pace, your schedule.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-100 bg-cream p-8 text-center">
              <div className="mb-3 text-3xl">💰</div>
              <h3 className="mb-2 font-semibold text-brand-navy">
                Normally $199
              </h3>
              <p className="text-sm text-gray-600">
                Yours free when you book your cleaning online today.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Friction killers */}
      <section className="bg-cream py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-semibold text-brand-navy md:text-4xl">
              Whatever's holding you up, we've got you.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <p className="mb-2 text-sm font-medium uppercase tracking-wider text-brand-teal">
                Insurance
              </p>
              <h3 className="mb-3 text-xl font-semibold text-brand-navy">
                We handle it for you
              </h3>
              <p className="text-sm text-gray-600">
                Lee verifies your benefits and files everything. You'll know
                your out-of-pocket before you sit down.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <p className="mb-2 text-sm font-medium uppercase tracking-wider text-brand-teal">
                No Insurance
              </p>
              <h3 className="mb-3 text-xl font-semibold text-brand-navy">
                Membership from $34/mo
              </h3>
              <p className="text-sm text-gray-600">
                Two cleanings, two exams, X-rays, and 20% off anything else.
                That simple.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <p className="mb-2 text-sm font-medium uppercase tracking-wider text-brand-teal">
                Need Flexibility
              </p>
              <h3 className="mb-3 text-xl font-semibold text-brand-navy">
                0% APR through Cherry
              </h3>
              <p className="text-sm text-gray-600">
                Break any treatment into monthly payments. No credit impact to
                apply.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <div className="mb-6 flex items-center justify-center gap-2">
            <span className="text-2xl">⭐⭐⭐⭐⭐</span>
          </div>
          <p className="mb-4 text-xl font-medium text-brand-navy md:text-2xl">
            4.9 stars. 433+ Google reviews. The same team you remember.
          </p>
          <p className="text-gray-600">
            Dr. Buchwald, Melisa, Cathy, and Lee are all still here. Same
            chairs, same easy energy.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-brand-navy py-16 text-white md:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
            Ready when you are.
          </h2>
          <p className="mb-8 text-lg text-gray-200">
            Pick a time that works. We'll take it from there.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-brand-gold px-8 py-4 text-base font-semibold text-brand-navy shadow-md transition hover:bg-white hover:shadow-lg md:text-lg"
            >
              Book Online & Get My Free Tray
            </a>
            <a
              href={`sms:${PHONE}`}
              className="rounded-full border-2 border-white px-8 py-4 text-base font-semibold text-white transition hover:bg-white hover:text-brand-navy md:text-lg"
            >
              Text Us Instead
            </a>
          </div>
          <p className="mt-6 text-sm text-gray-400">
            Whitening tray offer is for existing patients booking online. One
            per patient. Redeemed at your next completed cleaning visit.
          </p>
        </div>
      </section>
    </main>
  );
}
