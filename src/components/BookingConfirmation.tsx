"use client";

export function BookingConfirmation({
  patientName,
  onReset,
}: {
  patientName?: string;
  onReset?: () => void;
}) {
  return (
    <div className="max-w-lg mx-auto text-center py-12 px-6">
      {/* Success icon */}
      <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-primary">
          <path d="M8 17L13 22L24 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-2">
        {patientName ? `Thanks, ${patientName}!` : "Request received!"}
      </h2>

      <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-sm mx-auto">
        We&apos;ll confirm your appointment as soon as possible during business hours. Keep an eye on your phone!
      </p>

      {/* What happens next */}
      <div className="bg-gray-50 rounded-xl p-6 mb-8 text-left">
        <h3 className="text-sm font-medium text-gray-700 mb-4">What happens next</h3>
        <div className="space-y-4">
          {[
            { step: "1", title: "We'll confirm your visit", desc: "Our team will call or text to lock in your date and time." },
            { step: "2", title: "Fill out your paperwork", desc: "We'll send you a link to complete forms before you arrive." },
            { step: "3", title: "Show up and relax", desc: "Arrive a few minutes early. We handle everything from there." },
          ].map((item) => (
            <div key={item.step} className="flex gap-3">
              <div className="w-6 h-6 rounded-full bg-gray-900 text-white text-xs font-medium flex items-center justify-center flex-shrink-0 mt-0.5">
                {item.step}
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700">{item.title}</p>
                <p className="text-xs text-gray-400 mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
        <a
          href="tel:9726443280"
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6.5 1.5H3.5C2.95 1.5 2.5 1.95 2.5 2.5V4.5C2.5 10.02 6.98 14.5 12.5 14.5H14.5C15.05 14.5 15.5 14.05 15.5 13.5V10.5L12 9L10.5 10.5C8.97 9.68 7.32 8.03 6.5 6.5L8 5L6.5 1.5Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          (972) 644-3280
        </a>
        <a
          href="sms:9726443280"
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M2 3H14V11H8.5L5 14V11H2V3Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Text us
        </a>
      </div>

      <p className="text-xs text-gray-400">
        Mon-Thu 7am-3pm &middot; 300 N Coit Rd #245, Richardson, TX 75080
      </p>

      {onReset && (
        <button
          onClick={onReset}
          className="mt-6 text-xs text-gray-400 hover:text-gray-600 underline transition-colors"
        >
          Submit another request
        </button>
      )}
    </div>
  );
}
