import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Welcome Back | Buchwald Family Dentistry",
  description:
    "Welcome back. Book your next cleaning online in 20 seconds. Same chairs, same easy energy.",
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
          <p
            className="mb-3 text-xs font-medium uppercase tracking-widest md:mb-4 md:text-sm"
            style={{ color: "#0bbad5" }}
          >
            A Little Nudge From Your Dental Team
          </p>
          <h1 className="mb-5 text-3xl font-semibold leading-tight text-slate-900 md:mb-6 md:text-6xl">
            It's been a minute. Let's get you back in.
          </h1>
          <p className="mx-auto mb-6 max-w-2xl text-base text-slate-600 md:mb-8 md:text-xl">
            Life gets busy. We get it. No guilt trip, no lecture. Just an easy
            way to slide back onto the schedule.
          </p>

          {/* Live schedule note */}
          <p className="mb-8 text-sm text-slate-500 md:text-base">
            See our live schedule. Takes 20 seconds.
          </p>

          {/* Single CTA */}
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full px-10 py-4 text-base font-semibold text-white shadow-md transition hover:shadow-lg md:text-lg"
            style={{ backgroundColor: "#0bbad5" }}
          >
            Book Online
          </a>

          <p className="mt-6 text-sm text-slate-500">
            Prefer to call? <a href={`tel:${PHONE}`} className="underline hover:text-slate-700">{PHONE_DISPLAY}</a>
          </p>
        </div>
      </section>

      {/* Why it matters */}
      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-10 text-center md:mb-12">
            <p
              className="mb-3 text-xs font-medium uppercase tracking-widest md:text-sm"
              style={{ color: "#0bbad5" }}
            >
              Why It Matters
            </p>
            <h2 className="mb-4 text-3xl font-semibold text-slate-900 md:text-4xl">
              Skipping cleanings catches up fast.
            </h2>
            <p className="mx-auto max-w-2xl text-slate-600">
              We say this not to scare you, but because it's the truth. The
              longer you wait, the more likely small problems turn into
              bigger, more expensive ones.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
              <div className="mb-4 text-3xl">🦷</div>
              <h3 className="mb-2 text-lg font-semibold text-slate-900">
                Cavities
              </h3>
              <p className="text-sm text-slate-600">
                A cavity caught early is a small filling. Caught late, it's a
                crown, a root canal, or a lost tooth.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
              <div className="mb-4 text-3xl">🩸</div>
              <h3 className="mb-2 text-lg font-semibold text-slate-900">
                Gum Disease
              </h3>
              <p className="text-sm text-slate-600">
                Bleeding or puffy gums are early warning signs. Left alone,
                periodontal disease can cost you bone and teeth.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
              <div className="mb-4 text-3xl">😬</div>
              <h3 className="mb-2 text-lg font-semibold text-slate-900">
                Pain & Sensitivity
              </h3>
              <p className="text-sm text-slate-600">
                If something's already hurting or sensitive to hot and cold,
                that's your body telling you not to wait.
              </p>
            </div>
          </div>

          <div
            className="mx-auto mt-10 max-w-2xl rounded-2xl p-6 text-center md:p-8"
            style={{ backgroundColor: "#e6f8fb" }}
          >
            <p className="text-base font-medium text-slate-900 md:text-lg">
              Feeling any pain, sensitivity, or changes in your gums?
            </p>
            <p className="mt-2 text-sm text-slate-700 md:text-base">
              Don't wait it out. Get seen. We'll make it easy.
            </p>
          </div>
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
              <p
                className="mb-2 text-sm font-medium uppercase tracking-wider"
                style={{ color: "#0bbad5" }}
              >
                Insurance
              </p>
              <h3 className="mb-3 text-xl font-semibold text-slate-900">
                We file it for you
              </h3>
              <p className="text-sm text-slate-600">
                Most major PPO plans accepted. We submit your claims directly
                so you don't have to chase paperwork.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <p
                className="mb-2 text-sm font-medium uppercase tracking-wider"
                style={{ color: "#0bbad5" }}
              >
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
              <p
                className="mb-2 text-sm font-medium uppercase tracking-wider"
                style={{ color: "#0bbad5" }}
              >
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
            4.9 stars. 441 Google reviews. Still the office you remember.
          </p>
          <p className="text-slate-600">
            Dr. Buchwald and the team are still here. Same chairs, same easy
            energy.
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
            Pick a time that works. Same chairs, same easy energy.
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full px-10 py-4 text-base font-semibold text-white shadow-md transition hover:shadow-lg md:text-lg"
            style={{ backgroundColor: "#0bbad5" }}
          >
            Book Online
          </a>
          <p className="mt-6 text-sm text-slate-400">
            Prefer to call?{" "}
            <a href={`tel:${PHONE}`} className="underline hover:text-white">
              {PHONE_DISPLAY}
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
