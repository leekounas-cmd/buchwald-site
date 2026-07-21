// Single source of truth for the July 2026 ads campaign offer.
// Used by /visit and /free-whitening only. If the offer changes, change it here.

export const PHONE_DISPLAY = "(972) 644-3280";
export const PHONE_HREF = "tel:+19726443280";

export const WEAVE_ADS_URL =
  "https://book2.getweave.com/359c4bec-a0f0-4d62-9ea8-35a008305267/request-appointment?source=ADS";

export const offer = {
  uninsuredPrice: "$169",
  jetWhiteningValue: "$99",
  expires: "July 31, 2026",

  insuredCard: {
    title: "With insurance",
    body: "Most PPO plans cover your cleaning, exam, and x-rays at 100%. We verify your benefits before you come in. Your whitening is free on top.",
  },
  uninsuredCard: {
    title: "Without insurance",
    body: "$169 for everything, including both whitening services. ($99 Jet Whitening value included free.)",
  },

  // Required disclosure. The first sentence is verbatim from the live site. Do not reword it.
  deepCleaningDisclosure:
    "If it has been a while since your last dental visit, a deep cleaning may be recommended first.",
  deepCleaningFollowup:
    "If that's the case, we'll walk you through the cost before we start anything.",

  included: [
    { title: "Exam", desc: "Dr. Buchwald checks everything and walks you through what he sees. No pressure." },
    { title: "Digital x-rays", desc: "A full set of digital x-rays with far less radiation than traditional film." },
    { title: "Cleaning", desc: "A thorough, gentle cleaning with Melisa, our hygienist." },
    { title: "Jet Whitening", desc: "A ten-minute polish that lifts coffee, tea, and wine staining. Normally $99 as an add-on." },
    { title: "Take-home Opalescence whitening trays", desc: "Custom trays and professional gel to keep whitening at home on your schedule." },
  ],

  trustRow: ["4.9★ on Google", "433+ reviews", "Free lifetime warranty", "Same team every visit"],

  hours: {
    days: "Monday to Thursday",
    time: "7am to 3pm",
    afterHoursLine:
      "Can't call during work hours? Use the form or book online anytime. We'll confirm first thing.",
  },

  finePrint: [
    "New patients only",
    "Whitening provided with a completed exam and cleaning",
    "Offer expires July 31, 2026",
    "Cannot be combined with other offers",
    "Subject to clinical eligibility",
  ],
} as const;
