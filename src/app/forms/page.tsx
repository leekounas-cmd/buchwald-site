"use client";

import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/offer";
import { fireEvent } from "@/lib/track";

// PASTE WEAVE LINKS HERE — these two constants are the only thing to edit.
// Grab the form links from Weave (Forms > share link) and replace the "#" values.
const WEAVE_NEW_PATIENT_FORMS_URL =
  "https://forms.wv3.io/form?formId=ac2983e3-0a0c-46fe-9dbc-aaae266d9436&companyId=359c4bec-a0f0-4d62-9ea8-35a008305267";
const WEAVE_INSURANCE_UPLOAD_URL =
  "https://forms.wv3.io/form?formId=7fc5a6dc-2ac9-4f7f-bfd3-4aa1477d6c10&companyId=359c4bec-a0f0-4d62-9ea8-35a008305267";

const PAGE = "/forms";

const steps = [
  {
    n: "01",
    title: "New Patient Forms",
    time: "about 8 min",
    body: "Your health history and patient info, all online. Knock it out from the couch, no clipboard involved.",
    cta: "Start My Forms",
    href: WEAVE_NEW_PATIENT_FORMS_URL,
    event: "forms_click",
  },
  {
    n: "02",
    title: "Upload Your Insurance",
    time: "about 2 min",
    body: "Snap a photo of the front and back of your card. Lee verifies your benefits before you come in, so you know exactly what is covered before you sit down.",
    cta: "Upload My Insurance Card",
    href: WEAVE_INSURANCE_UPLOAD_URL,
    event: "insurance_upload_click",
  },
];

const ticker = ["Two forms", "Ten minutes", "Zero clipboards", "Straight to the chair"];

const bringList = [
  "Photo ID",
  "Insurance card",
  "Current medications list",
  "Old dental records, if you have them",
];

function Arrow() {
  return (
    <svg
      className="h-4 w-4 transition-transform group-hover:translate-x-1"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

export default function FormsPage() {
  return (
    <>
      {/* ===== Hero ===== */}
      <section className="bg-[#0C1820] text-white overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-14 pb-16 sm:pt-20 sm:pb-24">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary mb-6">
                You&rsquo;re booked. The hard part is done.
              </p>
              <h1 className="font-archivo text-[clamp(2.4rem,5.4vw,4rem)] leading-[1.06] mb-7">
                Now for the world&rsquo;s{" "}
                <span className="text-primary">easiest paperwork.</span>
              </h1>
              <p className="text-[#B9CBD4] text-lg leading-relaxed max-w-md mb-9">
                Two quick things before your visit. Finish them from your phone
                and you walk straight to the chair instead of the clipboard.
              </p>
              <a
                href="#step-1"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("step-1")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex rounded-full bg-primary px-8 py-4 text-sm font-bold text-white hover:bg-primary-dark transition-colors"
              >
                Get Started
              </a>
            <p className="mt-8 text-sm text-[#8FA9B5]">
              We&rsquo;ll see you soon. The blankets are ready.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Ticker band ===== */}
      <div className="bg-primary">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4 flex flex-wrap justify-center gap-x-3 gap-y-1 text-sm font-bold text-white">
          {ticker.map((t, i) => (
            <span key={t} className="flex items-center gap-3">
              {t}
              {i < ticker.length - 1 && (
                <span aria-hidden className="text-white/50">
                  ·
                </span>
              )}
            </span>
          ))}
        </div>
      </div>

      {/* ===== Steps (editorial numbered rows) ===== */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary-dark mb-4">
              Before your visit
            </p>
            <h2 className="font-archivo text-4xl sm:text-5xl leading-[1.05]">
              Two steps. That&rsquo;s the whole list.
            </h2>
          </div>
          <div>
            {steps.map((s) => (
              <div
                key={s.n}
                id={s.n === "01" ? "step-1" : undefined}
                className="grid sm:grid-cols-[110px_1fr] gap-x-10 gap-y-4 border-t border-gray-200 py-10 scroll-mt-24"
              >
                <span className="font-archivo text-4xl text-primary">{s.n}</span>
                <div>
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-xl sm:text-2xl font-extrabold shrink-0">
                      {s.title}
                    </h3>
                    <span
                      aria-hidden
                      className="flex-1 border-b-2 border-dotted border-[#0C1820]/20 -translate-y-1.5 mx-2 hidden sm:block"
                    />
                    <p className="font-archivo text-lg text-gray-400 shrink-0">
                      {s.time}
                    </p>
                  </div>
                  <p className="text-gray-500 leading-relaxed max-w-lg mt-3 mb-6">
                    {s.body}
                  </p>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => fireEvent(s.event, PAGE)}
                    className="inline-flex w-full sm:w-auto justify-center rounded-full bg-primary px-8 py-3.5 min-h-[44px] items-center text-sm font-bold text-white hover:bg-primary-dark transition-colors"
                  >
                    {s.cta}
                  </a>
                </div>
              </div>
            ))}
            <p className="border-t border-gray-200 pt-6 text-sm text-gray-400">
              No insurance? Skip step 2. We&rsquo;ll go over pricing and
              membership options at your visit.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Day-of checklist ===== */}
      <section className="bg-[#F2F7F8]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-x-16 gap-y-10 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary-dark mb-4">
                Day of your visit
              </p>
              <h2 className="font-archivo text-4xl sm:text-5xl leading-[1.05] mb-5">
                Toss these in the car.
              </h2>
              <p className="text-gray-500 leading-relaxed max-w-sm">
                Bring your insurance card even if you uploaded it, just in case.
                Everything else is on us.
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {bringList.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#0C1820]/15 bg-white px-5 py-2.5 text-sm font-semibold text-gray-800"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== Call CTA ===== */}
      <section className="bg-[#0C1820] text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24 text-center">
          <h2 className="font-archivo text-[clamp(2rem,4.6vw,3.4rem)] leading-[1.05] mb-5">
            Stuck on a form? Just call.
          </h2>
          <p className="text-[#B9CBD4] text-lg max-w-md mx-auto mb-9">
            Cathy will walk you through it, or you can finish the paperwork at
            your visit. Either way works.
          </p>
          <a
            href={PHONE_HREF}
            onClick={() => fireEvent("tel_click", PAGE)}
            className="inline-flex rounded-full bg-primary px-9 py-4 text-sm font-bold text-white hover:bg-primary-dark transition-colors"
          >
            Call {PHONE_DISPLAY}
          </a>
          <p className="mt-9 text-sm text-[#8FA9B5]">
            300 N Coit Rd #245, Richardson, TX
          </p>
        </div>
      </section>
    </>
  );
}
