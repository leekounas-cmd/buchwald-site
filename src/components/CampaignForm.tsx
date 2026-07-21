"use client";

import { useEffect, useState } from "react";
import { PHONE_DISPLAY, PHONE_HREF, WEAVE_ADS_URL } from "@/lib/offer";

const INSURANCE_OPTIONS = ["Yes", "No", "Not sure"];

function fireEvent(name: string, page: string) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", name, { page });
  }
}

export function CampaignForm({ page, formId }: { page: string; formId?: string }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [hasInsurance, setHasInsurance] = useState("");
  const [source, setSource] = useState("google");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState("");

  useEffect(() => {
    const utm = new URLSearchParams(window.location.search).get("utm_source");
    if (utm) setSource(utm);
  }, []);

  function validate() {
    const next: Record<string, string> = {};
    if (!name.trim()) next.name = "Enter your name";
    if (!/^[\d\s()+.-]{10,}$/.test(phone.trim())) next.phone = "Enter a valid phone number";
    if (!/^\S+@\S+\.\S+$/.test(email.trim())) next.email = "Enter a valid email";
    if (!hasInsurance) next.hasInsurance = "Pick one";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setServerError("");

    const res = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name.trim(),
        phone: phone.trim(),
        email: email.trim(),
        has_insurance: hasInsurance,
        source,
        page,
      }),
    }).catch(() => null);

    setLoading(false);

    if (res?.ok) {
      fireEvent("form_submit", page);
      setSubmitted(true);
    } else {
      setServerError(`Something went wrong. Call us at ${PHONE_DISPLAY} and we'll get you scheduled.`);
    }
  }

  if (submitted) {
    return (
      <div
        id={formId}
        className="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-gray-200 text-center"
        role="status"
      >
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-light">
          <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="text-lg font-bold text-gray-900">Got it. We&rsquo;ll call you to get you scheduled.</p>
        <div className="mt-5 flex flex-col gap-3">
          <a
            href={PHONE_HREF}
            onClick={() => fireEvent("tel_click", page)}
            className="rounded-lg bg-primary py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
          >
            Or call us now: {PHONE_DISPLAY}
          </a>
          <a
            href={WEAVE_ADS_URL}
            onClick={() => fireEvent("booking_click", page)}
            className="rounded-lg border border-gray-200 py-3.5 text-sm font-semibold text-gray-700 transition-colors hover:border-primary hover:text-primary"
          >
            Prefer to pick a time? Book online
          </a>
        </div>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-lg border border-gray-200 bg-white px-4 py-3 min-h-[44px] text-base text-gray-900 placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";

  return (
    <form id={formId} onSubmit={handleSubmit} noValidate className="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-gray-200">
      <p className="mb-4 text-lg font-bold text-gray-900">Get your visit scheduled</p>
      <div className="flex flex-col gap-3">
        <div>
          <input
            type="text"
            name="name"
            autoComplete="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClass}
            required
          />
          {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
        </div>
        <div>
          <input
            type="tel"
            name="phone"
            autoComplete="tel"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={inputClass}
            required
          />
          {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
        </div>
        <div>
          <input
            type="email"
            name="email"
            autoComplete="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClass}
            required
          />
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
        </div>
        <div>
          <select
            name="has_insurance"
            value={hasInsurance}
            onChange={(e) => setHasInsurance(e.target.value)}
            className={`${inputClass} ${hasInsurance ? "text-gray-900" : "text-gray-400"}`}
            required
          >
            <option value="" disabled>
              Do you have dental insurance?
            </option>
            {INSURANCE_OPTIONS.map((opt) => (
              <option key={opt} value={opt} className="text-gray-900">
                {opt}
              </option>
            ))}
          </select>
          {errors.hasInsurance && <p className="mt-1 text-sm text-red-600">{errors.hasInsurance}</p>}
        </div>
        <input type="hidden" name="source" value={source} />
        <button
          type="submit"
          disabled={loading}
          className="mt-1 rounded-lg bg-primary py-3.5 min-h-[44px] text-base font-bold text-white transition-colors hover:bg-primary-dark disabled:opacity-60"
        >
          {loading ? "Sending..." : "Get My Visit Scheduled"}
        </button>
        <p className="text-center text-xs text-gray-500">No spam, no pressure. We&rsquo;ll call once to schedule.</p>
        {serverError && <p className="text-center text-sm text-red-600">{serverError}</p>}
      </div>
    </form>
  );
}
