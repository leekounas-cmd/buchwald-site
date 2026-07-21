import Image from "next/image";
import Link from "next/link";
import { StickyBottomBar } from "@/components/StickyBottomBar";

const BOOKING_URL = "https://book2.getweave.com/359c4bec-a0f0-4d62-9ea8-35a008305267/request-appointment?source=WEBSITE";
const PHONE = "(972) 644-3280";
const PHONE_HREF = "tel:972-644-3280";
const REVIEWS_URL = "https://share.google/9gal12WjpTrHj1b4V";

const niceties = [
  "Blankets and pillows",
  "TVs at every chair",
  "Zero lectures",
  "Same-day visits",
  "Stickers for the brave",
  "Headphones on request",
];

const promises = [
  {
    n: "01",
    title: "Zero judgment",
    body: "Two years away or twenty, nobody here will ask why. We start where you are and figure out the rest together.",
  },
  {
    n: "02",
    title: "The price before the chair",
    body: "Your cost in writing before any treatment starts. Lee runs your insurance and walks you through every line.",
  },
  {
    n: "03",
    title: "Comfort first",
    body: "Raise a hand and everything pauses. You set the pace, we keep the blankets warm.",
  },
];

const ledger = [
  {
    title: "Insured? Your first visit",
    price: "usually $0",
    body: "Most PPO plans cover your new patient cleaning, exam, and X-rays at 100%. We verify your exact benefits before you book.",
    href: "/insurance",
    link: "See accepted plans",
  },
  {
    title: "Essential Care Plan",
    price: "$400/yr",
    body: "No insurance needed. Two cleanings, two exams, full X-rays, 20% off everything else. $34 a month with Cherry.",
    href: "/membership",
    link: "See plan details",
  },
  {
    title: "Signature Care Plan",
    price: "$899/yr",
    body: "Everything in Essential, plus imaging, fluoride, laser therapy, and jet whitening at every cleaning. $75 a month.",
    href: "/membership",
    link: "Compare plans",
  },
  {
    title: "Hygiene Upgrade",
    price: "$249",
    body: "Add all four premium services to any cleaning visit. $319 worth of care for anyone, insured or not.",
    href: "/membership",
    link: "What is included",
  },
  {
    title: "Bigger treatment",
    price: "0% APR",
    body: "Cherry splits any treatment into monthly payments. Apply in minutes, no credit score impact.",
    href: "/payment-plans",
    link: "Check payment options",
  },
];

const services = [
  { n: "01", title: "Cleaning & Exam", desc: "Cleanings, X-rays, and exams that run on time.", href: "/services/cleaning" },
  { n: "02", title: "General Dentistry", desc: "Fillings, crowns, root canals, the everyday work.", href: "/services/general" },
  { n: "03", title: "Cosmetic Dentistry", desc: "Veneers and makeovers that still look like you.", href: "/services/cosmetic" },
  { n: "04", title: "Teeth Whitening", desc: "In-office or take-home, results in one visit.", href: "/teeth-whitening" },
  { n: "05", title: "Invisalign", desc: "Clear aligners from $115 a month.", href: "/invisalign" },
  { n: "06", title: "Restorative", desc: "Implants, bridges, and dentures that feel right.", href: "/services/restorative" },
  { n: "07", title: "InnerView Imaging", desc: "See exactly what we see, in plain English.", href: "/innerview" },
  { n: "08", title: "Laser Therapy", desc: "Gentler gums, faster recovery.", href: "/laser-therapy" },
];

const team = [
  { name: "Dr. Max Buchwald Jr.", role: "Dentist", image: "/images/dr-buchwald.jpg" },
  { name: "Melisa Kounas", role: "Hygienist", image: "/images/melisa.jpg" },
  { name: "Cathy Kounas", role: "Operations", image: "/images/cathy.jpg" },
  { name: "Lee Kounas", role: "Marketing & Insurance", image: "/images/lee.jpg" },
];

function Stars({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <span className="inline-flex gap-0.5 text-gold" aria-label="5 stars">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className={className} fill="currentColor" viewBox="0 0 20 20" aria-hidden>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </span>
  );
}

function Arrow() {
  return (
    <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

export default function PreviewV7() {
  return (
    <div className="bg-white text-gray-900" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
      {/* ===== Utility line ===== */}
      <div className="bg-[#0C1820] border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-2 flex items-center justify-between text-xs text-[#8FA9B5]">
          <p className="truncate">300 N Coit Rd #245, Richardson, TX</p>
          <a href={PHONE_HREF} className="font-semibold text-white hover:text-primary transition-colors shrink-0">
            {PHONE}
          </a>
        </div>
      </div>

      {/* ===== Header ===== */}
      <header className="bg-[#0C1820]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-5 flex items-center justify-between gap-6">
          <Link href="/preview-v7" className="shrink-0">
            <Image src="/images/logo-white.png" alt="Buchwald Family Dentistry" width={170} height={40} priority className="h-9 w-auto" />
          </Link>
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#B9CBD4]">
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <Link href="/membership" className="hover:text-white transition-colors">Pricing</Link>
            <Link href="/insurance" className="hover:text-white transition-colors">Insurance</Link>
            <Link href="/meet-us" className="hover:text-white transition-colors">Meet Us</Link>
          </nav>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-primary px-6 py-2.5 text-sm font-bold text-white hover:bg-primary-dark transition-colors shrink-0"
          >
            Book a Visit
          </a>
        </div>
      </header>

      {/* ===== Hero (v5 ink layout, v6 shapes) ===== */}
      <section className="bg-[#0C1820] text-white overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-14 pb-16 sm:pt-20 sm:pb-24">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-x-14 gap-y-14 items-center">
            <div className="animate-[slideUp_0.7s_ease-out_both]">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary mb-6">
                Richardson&apos;s family dentist since forever-ish
              </p>
              <h1 className="font-archivo text-[clamp(2.6rem,5.8vw,4.5rem)] leading-[1.06] mb-7">
                The dentist visit you might actually <span className="text-primary">look forward&nbsp;to.</span>
              </h1>
              <p className="text-[#B9CBD4] text-lg leading-relaxed max-w-md mb-9">
                Warm hellos, honest prices, and a blanket if you want one. Twenty plus years of taking care of Richardson, zero lectures given.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mb-7">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-primary px-8 py-4 text-sm font-bold text-white text-center hover:bg-primary-dark transition-colors"
                >
                  Book Online in 2 Minutes
                </a>
                <a
                  href={PHONE_HREF}
                  className="rounded-full border border-white/25 px-8 py-4 text-sm font-semibold text-white text-center hover:border-white/60 transition-colors"
                >
                  Call {PHONE}
                </a>
              </div>
              <a href={REVIEWS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 hover:opacity-80 transition-opacity">
                <Stars />
                <span className="text-sm text-[#8FA9B5]">4.9 on Google · 433+ reviews</span>
              </a>
            </div>

            <div className="relative animate-[slideUp_0.7s_ease-out_0.15s_both]">
              <div className="rounded-t-full rounded-b-3xl overflow-hidden">
                <Image
                  src="/images/stock/kids-exam.jpg"
                  alt="A gentle checkup with one of our youngest patients"
                  width={760}
                  height={950}
                  priority
                  className="w-full object-cover aspect-[4/5]"
                />
              </div>
              <div className="absolute -bottom-5 -left-4 sm:-left-8 h-28 w-28 rounded-full bg-orange text-white flex items-center justify-center text-center rotate-[-8deg]">
                <p className="text-xs font-bold leading-snug px-3">4.9 stars<br />433 reviews<br />on Google</p>
              </div>
              <p className="mt-12 text-sm text-[#8FA9B5] text-center pl-16 sm:pl-0">
                Same-day appointments · Same team every visit · ADA member
              </p>
            </div>
          </div>

          {/* Insurance banner chip */}
          <Link
            href="/new-patient"
            className="group mt-14 flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-2xl bg-white/[0.06] border border-white/10 px-6 py-5 hover:border-primary/50 transition-colors animate-[slideUp_0.7s_ease-out_0.3s_both]"
          >
            <p className="text-sm sm:text-base text-white">
              <span className="font-bold">New here?</span>{" "}
              <span className="text-[#B9CBD4]">Most PPO insurance covers your first cleaning, exam, and X-rays at 100%.</span>
            </p>
            <span className="inline-flex items-center gap-2 text-sm font-bold text-primary">
              Start here <Arrow />
            </span>
          </Link>
        </div>
      </section>

      {/* ===== Niceties band (v6) ===== */}
      <div className="bg-primary">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4 flex flex-wrap justify-center gap-x-3 gap-y-1 text-sm font-bold text-white">
          {niceties.map((n, i) => (
            <span key={n} className="flex items-center gap-3">
              {n}
              {i < niceties.length - 1 && <span aria-hidden className="text-white/50">·</span>}
            </span>
          ))}
        </div>
      </div>

      {/* ===== Promises (v5 editorial rows, v6 words) ===== */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-28">
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary-dark mb-4">
              For the ones who&apos;ve been putting it off
            </p>
            <h2 className="font-archivo text-4xl sm:text-5xl leading-[1.05]">
              Three promises, every single visit.
            </h2>
          </div>
          <div>
            {promises.map((p) => (
              <div key={p.n} className="grid sm:grid-cols-[110px_1fr] lg:grid-cols-[110px_320px_1fr] gap-x-10 gap-y-2 items-baseline border-t border-gray-200 py-9">
                <span className="font-archivo text-3xl text-primary">{p.n}</span>
                <h3 className="text-xl font-extrabold">{p.title}</h3>
                <p className="text-gray-500 leading-relaxed max-w-xl">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Cost ledger (v5 layout, v6 menu rows) ===== */}
      <section className="bg-[#F2F7F8]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-28">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-x-16 gap-y-12">
            <div className="lg:sticky lg:top-10 self-start">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary-dark mb-4">
                No mystery invoices, ever
              </p>
              <h2 className="font-archivo text-4xl sm:text-5xl leading-[1.05] mb-6">
                The money part, in plain English.
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8 max-w-sm">
                Lee runs your insurance, files the claims, and puts your out-of-pocket cost in writing before anything is scheduled.
              </p>
              <a
                href={PHONE_HREF}
                className="inline-flex rounded-full bg-[#0C1820] px-7 py-3.5 text-sm font-bold text-white hover:bg-[#1A2E3B] transition-colors"
              >
                Call to Verify My Benefits
              </a>
            </div>
            <div>
              {ledger.map((row) => (
                <div key={row.title} className="border-t border-[#0C1820]/10 py-8 first:border-t-0 first:pt-0">
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-lg sm:text-xl font-extrabold shrink-0">{row.title}</h3>
                    <span aria-hidden className="flex-1 border-b-2 border-dotted border-[#0C1820]/20 -translate-y-1.5 mx-2" />
                    <p className="font-archivo text-xl sm:text-2xl text-[#0C1820] shrink-0">{row.price}</p>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-lg mt-2.5 mb-3">{row.body}</p>
                  <Link href={row.href} className="group inline-flex items-center gap-2 text-sm font-bold text-primary-dark hover:text-[#0C1820] transition-colors">
                    {row.link} <Arrow />
                  </Link>
                </div>
              ))}
              <p className="border-t border-[#0C1820]/10 pt-5 text-xs text-gray-400">
                Coverage depends on your specific plan. We check your exact benefits before your visit, free.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Services (v5 numbered index, v6 arch rail) ===== */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-28">
          <div className="grid lg:grid-cols-[1fr_330px] gap-x-16 gap-y-12">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary-dark mb-4">
                Everything under one roof
              </p>
              <h2 className="font-archivo text-4xl sm:text-5xl leading-[1.05] mb-12">
                What we do here.
              </h2>
              <div className="grid sm:grid-cols-2 gap-x-12">
                {services.map((s) => (
                  <Link key={s.n} href={s.href} className="group flex gap-5 border-t border-gray-200 py-6">
                    <span className="font-archivo text-sm text-gray-300 pt-1 group-hover:text-primary transition-colors">{s.n}</span>
                    <span>
                      <span className="flex items-center gap-2 text-base font-extrabold group-hover:text-primary-dark transition-colors">
                        {s.title} <Arrow />
                      </span>
                      <span className="block text-sm text-gray-500 leading-relaxed mt-1">{s.desc}</span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="sticky top-10">
                <div className="rounded-t-full rounded-b-3xl overflow-hidden">
                  <Image
                    src="/images/stock/whitening.jpg"
                    alt="A bright, healthy smile in golden light"
                    width={660}
                    height={880}
                    className="w-full object-cover aspect-[3/4]"
                  />
                </div>
                <p className="mt-4 text-sm text-gray-500">Bring the smile. We handle the rest.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Experience band (v5 ink layout, v6 shapes) ===== */}
      <section className="bg-[#0C1820] text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-28">
          <div className="grid lg:grid-cols-2 gap-x-16 gap-y-12 items-center">
            <div className="rounded-t-full rounded-b-3xl overflow-hidden order-2 lg:order-1 max-w-md mx-auto lg:mx-0 w-full">
              <video
                autoPlay
                loop
                muted
                playsInline
                poster="/images/office-1.jpg"
                className="w-full object-cover aspect-[4/5]"
                aria-label="A look inside the Buchwald Family Dentistry office"
              >
                <source src="/video/hero.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary mb-4">
                The visit itself
              </p>
              <h2 className="font-archivo text-4xl sm:text-5xl leading-[1.05] mb-6">
                A visit you won&apos;t dread.
              </h2>
              <p className="text-[#B9CBD4] leading-relaxed mb-8 max-w-md">
                Calm rooms, friendly faces, and a team that explains everything before anything happens. This isn&apos;t the dentist you grew up dreading.
              </p>
              <div className="flex flex-wrap gap-2.5 mb-10">
                {niceties.map((n) => (
                  <span key={n} className="rounded-full border border-white/20 px-4 py-1.5 text-[13px] font-semibold text-white">
                    {n}
                  </span>
                ))}
              </div>
              <div className="border-t border-white/10 pt-7">
                <p className="text-sm font-bold mb-5">Same four people, every visit.</p>
                <div className="flex flex-wrap gap-x-8 gap-y-4">
                  {team.map((m) => (
                    <Link key={m.name} href="/meet-us" className="group flex items-center gap-3">
                      <span className="h-12 w-12 rounded-full overflow-hidden ring-1 ring-white/20 group-hover:ring-primary transition-all">
                        <Image src={m.image} alt={m.name} width={48} height={48} className="h-full w-full object-cover" />
                      </span>
                      <span>
                        <span className="block text-sm font-bold leading-tight">{m.name}</span>
                        <span className="block text-xs text-[#8FA9B5]">{m.role}</span>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Reviews wall (v5 layout) ===== */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-28">
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary-dark mb-4">In their words</p>
            <h2 className="font-archivo text-4xl sm:text-5xl leading-[1.05]">
              4.9 stars. 433 reviews. Zero coaching.
            </h2>
          </div>
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-x-14 gap-y-10">
            <figure className="border-t-2 border-[#0C1820] pt-8">
              <Stars className="h-4 w-4" />
              <blockquote className="font-archivo text-2xl sm:text-[2rem] leading-snug mt-5 mb-6">
                &ldquo;No pressure, no upselling. Just honest recommendations. That&apos;s rare and I appreciate it.&rdquo;
              </blockquote>
              <figcaption className="text-sm text-gray-500">
                <span className="font-bold text-gray-900">Mark P.</span> · Richardson · Google review
              </figcaption>
            </figure>
            <div className="flex flex-col gap-10">
              <figure className="border-t border-gray-200 pt-7">
                <Stars />
                <blockquote className="text-base leading-relaxed text-gray-700 mt-4 mb-4">
                  &ldquo;My daughter loves going to the dentist because this office makes it such a fun experience.&rdquo;
                </blockquote>
                <figcaption className="text-sm text-gray-500">
                  <span className="font-bold text-gray-900">Amanda L.</span> · Garland
                </figcaption>
              </figure>
              <figure className="border-t border-gray-200 pt-7">
                <Stars />
                <blockquote className="text-base leading-relaxed text-gray-700 mt-4 mb-4">
                  &ldquo;Went in for an emergency toothache and they got me in the same day. Pain was gone immediately.&rdquo;
                </blockquote>
                <figcaption className="text-sm text-gray-500">
                  <span className="font-bold text-gray-900">Carlos G.</span> · Richardson
                </figcaption>
              </figure>
              <a
                href={REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-sm font-bold text-primary-dark hover:text-[#0C1820] transition-colors"
              >
                Read all 433 reviews on Google <Arrow />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Invisalign band (v5) ===== */}
      <Link href="/invisalign" className="group block bg-primary text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <p className="font-archivo text-xl sm:text-2xl">Invisalign from $115/mo, 0% APR.</p>
          <span className="inline-flex items-center gap-2 text-sm font-bold">
            Straighten things out <Arrow />
          </span>
        </div>
      </Link>

      {/* ===== Final CTA (v5 layout, v6 words) ===== */}
      <section className="bg-[#0C1820] text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-28 text-center">
          <h2 className="font-archivo text-[clamp(2.4rem,5.6vw,4.2rem)] leading-[1.04] mb-6">
            Come say hi,<br className="sm:hidden" /> Richardson.
          </h2>
          <p className="text-[#B9CBD4] text-lg max-w-md mx-auto mb-10">
            Book online in two minutes, or call and Cathy will find a time that works.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-primary px-9 py-4 text-sm font-bold text-white hover:bg-primary-dark transition-colors"
            >
              Book My Visit
            </a>
            <a
              href={PHONE_HREF}
              className="rounded-full border border-white/25 px-9 py-4 text-sm font-semibold text-white hover:border-white/60 transition-colors"
            >
              Call {PHONE}
            </a>
          </div>
          <p className="text-sm text-[#8FA9B5]">
            300 N Coit Rd #245, Richardson, TX · Mon to Thu, 8am to 5pm
          </p>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="bg-[#0C1820] border-t border-white/10 text-[#8FA9B5]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-sm">
          <Image src="/images/logo-white.png" alt="Buchwald Family Dentistry" width={150} height={36} className="h-8 w-auto opacity-80" />
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <Link href="/insurance" className="hover:text-white transition-colors">Insurance</Link>
            <Link href="/membership" className="hover:text-white transition-colors">Membership</Link>
            <Link href="/meet-us" className="hover:text-white transition-colors">Meet Us</Link>
            <Link href="/book" className="hover:text-white transition-colors">Book</Link>
          </nav>
          <p className="text-xs text-white/30">Design concept v7</p>
        </div>
      </footer>

      <div className="pb-16 lg:pb-0 bg-[#0C1820]" aria-hidden />
      <StickyBottomBar />
    </div>
  );
}
