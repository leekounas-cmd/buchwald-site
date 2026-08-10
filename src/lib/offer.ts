// Single source of truth for the July 2026 ads campaign offer.
// Used by /visit and /free-whitening only. If the offer changes, change it here.

export const PHONE_DISPLAY = "(972) 644-3280";
export const PHONE_HREF = "tel:+19726443280";

export const WEAVE_ADS_URL =
  "https://book2.getweave.com/359c4bec-a0f0-4d62-9ea8-35a008305267/request-appointment?source=ADS";

export const offer = {
  uninsuredPrice: "$169",
  jetWhiteningValue: "$99",
  expires: "August 31, 2026",
  expiresShort: "August 31",

  insuredCard: {
    title: "With insurance",
    body: "Most PPO plans cover your cleaning, exam, and x-rays at 100%. We verify your benefits before you come in. Your Jet Whitening and take-home trays are still free on top.",
  },
  uninsuredCard: {
    title: "Without insurance",
    body: "$169 for everything, including both whitening services. ($99 Jet Whitening value included free.)",
  },

  // Deep cleaning path. Full mouth = 4 quads. D4341 $374/quad, D4342 $287/quad, laser therapy $250 for all 4.
  // Range: (4 x 287) + 250 = $1,398 up to (4 x 374) + 250 = $1,746. Over 12 Cherry payments: ~$117 to ~$146/mo.
  deepCleaning: {
    heading: "Been a while? You're not alone.",
    body: "Most new patients who have been away a few years need a deep cleaning, and it's nothing to be embarrassed about. It clears the buildup a regular cleaning can't reach and stops gum disease before it turns into bad breath and bone loss. Caught now, it's very fixable. Waiting is what makes it expensive. And every deep cleaning includes laser therapy, so your gums heal faster and you feel better sooner.",
    price: "As low as $117 down",
    priceTail: "with easy monthly payments through Cherry.",
    insuredNote: "Have insurance? It often covers part of a deep cleaning. Either way, no lectures and no judgment. We walk you through your exact numbers before anything starts.",
  },

  // Required disclosure. The first sentence is verbatim from the live site. Do not reword it.
  deepCleaningDisclosure:
    "If it has been a while since your last dental visit, a deep cleaning may be recommended first.",
  deepCleaningFollowup:
    "If that's the case, we'll walk you through the cost before we start anything.",

  included: [
    { title: "Exam", desc: "Dr. Buchwald checks everything and walks you through what he sees. No pressure." },
    { title: "Digital x-rays", desc: "A full set of digital x-rays with far less radiation than traditional film." },
    { title: "Cleaning", desc: "A thorough, gentle cleaning from our hygiene team." },
    { title: "Jet Whitening", desc: "A ten-minute polish that lifts coffee, tea, and wine staining. Normally $99 as an add-on." },
    { title: "Take-home Opalescence whitening trays", desc: "Custom trays and professional gel to keep whitening at home on your schedule." },
  ],

  trustRow: ["4.9★ on Google", "433+ reviews", "Same-day appointments", "Gentle, unhurried visits"],

  hours: {
    days: "Monday to Thursday",
    time: "7am to 3pm",
    afterHoursLine:
      "Can't call during work hours? Use the form or book online anytime. We'll confirm first thing.",
  },

  finePrint: [
    "New patients only",
    "Whitening provided with a completed exam and cleaning",
    "Offer expires August 31, 2026",
    "Cannot be combined with other offers",
    "Subject to clinical eligibility",
  ],
} as const;
