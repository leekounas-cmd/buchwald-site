"use client";

import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/offer";
import { fireEvent } from "@/lib/track";

// PASTE WEAVE LINKS HERE — these two constants are the only thing to edit.
// Grab the form links from Weave (Forms > share link) and replace the "#" values.
const WEAVE_NEW_PATIENT_FORMS_URL = "#";
const WEAVE_INSURANCE_UPLOAD_URL = "#";

const PAGE = "/forms";

const bringList = [
  "Photo ID",
  "Insurance card (even if you upload it here, bring it just in case)",
  "List of current medications",
  "Dental records from your previous dentist, if you have them",
];

export default function FormsPage() {
  return (
    <>
      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <p className="text-primary text-xs font-bold uppercase tracking-wider mb-3">
            You&rsquo;re Booked
          </p>
          <h1 className="font-archivo text-4xl text-gray-900 sm:text-5xl">
            Let&rsquo;s Handle the Paperwork
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-gray-600">
            Two quick things before your visit. Takes about ten minutes and gets
            you straight to the chair instead of the clipboard.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-12 sm:py-16">
        <div className="mx-auto flex max-w-3xl flex-col gap-6 px-4">
          <div className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-gray-200 sm:p-8">
            <div className="flex items-start gap-4">
              <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                1
              </span>
              <div className="flex-1">
                <h2 className="text-xl font-extrabold text-gray-900">
                  New Patient Forms
                </h2>
                <p className="mt-2 text-gray-600">
                  Your health history and patient info. Everything is online, so
                  you can knock it out from your phone or computer.
                </p>
                <a
                  href={WEAVE_NEW_PATIENT_FORMS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => fireEvent("forms_click", PAGE)}
                  className="mt-5 block w-full rounded-lg bg-primary px-6 py-3.5 min-h-[44px] text-center text-base font-bold text-white transition-colors hover:bg-primary-dark sm:inline-block sm:w-auto"
                >
                  Start My Forms
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-gray-200 sm:p-8">
            <div className="flex items-start gap-4">
              <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                2
              </span>
              <div className="flex-1">
                <h2 className="text-xl font-extrabold text-gray-900">
                  Upload Your Insurance
                </h2>
                <p className="mt-2 text-gray-600">
                  Snap a photo of the front and back of your insurance card. Lee
                  verifies your benefits before you come in, so you&rsquo;ll know
                  exactly what&rsquo;s covered.
                </p>
                <a
                  href={WEAVE_INSURANCE_UPLOAD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => fireEvent("insurance_upload_click", PAGE)}
                  className="mt-5 block w-full rounded-lg bg-primary px-6 py-3.5 min-h-[44px] text-center text-base font-bold text-white transition-colors hover:bg-primary-dark sm:inline-block sm:w-auto"
                >
                  Upload My Insurance Card
                </a>
              </div>
            </div>
          </div>

          <p className="text-center text-sm text-gray-500">
            No insurance? Skip step 2. We&rsquo;ll go over pricing and membership
            options at your visit.
          </p>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="font-archivo text-center text-2xl text-gray-900">
            What to Bring on the Day
          </h2>
          <ul className="mx-auto mt-6 max-w-md space-y-3">
            {bringList.map((item) => (
              <li key={item} className="flex items-start gap-3 text-gray-700">
                <svg
                  className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-gray-50 py-12 sm:py-14">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-xl font-extrabold text-gray-900">
            Stuck on a form? Just call.
          </h2>
          <p className="mt-2 text-gray-600">
            We&rsquo;ll walk you through it, or you can finish the paperwork at
            your visit. Either way works.
          </p>
          <a
            href={PHONE_HREF}
            onClick={() => fireEvent("tel_click", PAGE)}
            className="mt-5 inline-block rounded-lg bg-gray-900 px-8 py-3.5 min-h-[44px] text-base font-bold text-white transition-colors hover:bg-gray-800"
          >
            Call {PHONE_DISPLAY}
          </a>
        </div>
      </section>
    </>
  );
}
