const BOOKING_URL = "https://book2.getweave.com/359c4bec-a0f0-4d62-9ea8-35a008305267/request-appointment?source=WEBSITE";

export function CTABanner() {
  return (
    <section className="bg-[#0C1820] text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24 text-center">
        <h2 className="font-archivo text-[clamp(2rem,4.6vw,3.4rem)] leading-[1.05] mb-5">
          Ready to love your smile?
        </h2>
        <p className="text-[#B9CBD4] text-lg max-w-md mx-auto mb-9">
          New patients welcome. Book online in two minutes, or call and we&apos;ll find a time that works.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={BOOKING_URL}
            className="rounded-full bg-primary px-9 py-4 text-sm font-bold text-white hover:bg-primary-dark transition-colors"
          >
            Book My Visit
          </a>
          <a
            href="tel:972-644-3280"
            className="rounded-full border border-white/25 px-9 py-4 text-sm font-semibold text-white hover:border-white/60 transition-colors"
          >
            Call (972) 644-3280
          </a>
        </div>
        <p className="mt-9 text-sm text-[#8FA9B5]">300 N Coit Rd #245, Richardson, TX · Mon to Thu, 7am to 3pm</p>
      </div>
    </section>
  );
}
