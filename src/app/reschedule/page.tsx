import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Welcome Back | Buchwald Family Dentistry",
  description:
    "Book online and we'll throw in a free take-home whitening tray at your next cleaning.",
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
      <section className="relative overflow-hidden bg-gradient-to-b from-stone-50 to-white pt-8 pb-14 md:pt-24 md:pb-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-teal-600 md:mb-4 md:text-sm">
            A Little Nudge From Your Dental Team
          </p>
          <h1 className="mb-5 text-3xl font-semibold leading-tight text-slate-900 md:mb-6 md:text-6xl">
            It's been a minute. Let's get you back in.
          </h1>
          <p className="mx-auto mb-7 max-w-2xl text-base text-slate-600 md:mb-8 md:text-xl">
            Life gets busy. We get it. No guilt trip, no lecture. Just an easy
            way to slide back onto the schedule.
          </p>

          {/* Live schedule strip */}
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group mx-auto mb-8 flex max-w-md items-center justify-center gap-3 rounded-full bg-teal-50 px-5 py-3 text-sm font-medium text-teal-800 transition hover:bg-teal-100 md:text-base"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-teal-500"></span>
            </span>
            Check our actual schedule. Takes 20 seconds.
            <span className="transition group-hover:translate-x-1">→</span>
          </a>

          {/* Offer badge */}
          <div className="mx-auto mb-8 inline-flex items-center gap-3 rounded-full border-2 border-amber-400 bg-white px-5 py-3 shadow-sm md:px-6">
            <span className="text-xl md:text-2xl">✨</span>
            <span className="text-sm font-semibold text-slate-900 md:text-lg">
              Book online and get a{" "}
              <span className="text-teal-600">free take-home whitening tray</span>
            </span>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-full bg-teal-600 px-8 py-4 text-base font-semibold text-white shadow-md transition hover:bg-teal-700 hover:shadow-lg sm:w-auto md:text-lg"
            >
              Book Online & Claim My Tray
            </a>
            <a
              href={`tel:${PHONE}`}
              className="w-full rounded-full border-2 border-slate-900 px-8 py-4 text-base font-semibold text-slate-900 transition hover:bg-slate-900 hover:text-white sm:w-auto md:text-lg"
            >
              Call {PHONE_DISPLAY}
            </a>
          </div>

          <p className="mt-6 text-sm text-slate-500">
            One-size-fits-most. Pick it up at your next cleaning.
          </p>
        </div>
      </section>

      {/* Friction killers */}
      <section className="bg-stone-50 py-14 md:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-10 text-center md:mb-12">
            <h2 className="mb-4 text-3xl font-semibold text-slate-900 md:text-4xl">
              Whatever's holding you up, we've got you.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <p className="mb-2 text-sm font-medium uppercase tracking-wider text-teal-600">
                Insurance
              </p>
              <h3 className="mb-3 text-xl font-semibold text-slate-900">
                We handle it for you
              </h3>
              <p className="text-sm text-slate-600">
                Lee verifies your benefits and files everything. You'll know
                your out-of-pocket before you sit down.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <p className="mb-2 text-sm font-medium uppercase tracking-wider text-teal-600">
                No Insurance
              </p>
              <h3 className="mb-3 text-xl font-semibold text-slate-900">
                Membership from $34/mo
              </h3>
              <p className="text-sm text-slate-600">
                Two cleanings, two exams, X-rays, and 20% off anything else.
                That simple.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <p className="mb-2 text-sm font-medium uppercase tracking-wider text-teal-600">
                Need Flexibility
              </p>
              <h3 className="mb-3 text-xl font-semibold text-slate-900">
                0% APR through Cherry
              </h3>
              <p className="text-sm text-slate-600">
                Break any treatment into monthly payments. No credit impact to
                apply.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <div className="mb-6 flex items-center justify-center gap-2">
            <span className="text-2xl">⭐⭐⭐⭐⭐</span>
          </div>
          <p className="mb-4 text-xl font-medium text-slate-900 md:text-2xl">
            4.9 stars. 433+ Google reviews. The same team you remember.
          </p>
          <p className="text-slate-600">
            Dr. Buchwald, Melisa, Cathy, and Lee are all still here. Same
            chairs, same easy energy.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-slate-900 py-14 text-white md:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
            Ready when you are.
          </h2>
          <p className="mb-8 text-lg text-slate-200">
            Pick a time that works. Free whitening tray waiting when you get
            here.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-full bg-teal-500 px-8 py-4 text-base font-semibold text-white shadow-md transition hover:bg-teal-400 hover:shadow-lg sm:w-auto md:text-lg"
            >
              Book Online & Claim My Tray
            </a>
            <a
              href={`sms:${PHONE}`}
              className="w-full rounded-full border-2 border-white px-8 py-4 text-base font-semibold text-white transition hover:bg-white hover:text-slate-900 sm:w-auto md:text-lg"
            >
              Text Us Instead
            </a>
          </div>
          <p className="mt-6 text-sm text-slate-400">
            Free take-home whitening tray for existing patients who book
            online. One per patient. Picked up at your next cleaning visit.
          </p>
        </div>
      </section>
    </main>
  );
}
