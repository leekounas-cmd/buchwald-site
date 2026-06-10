import Image from "next/image";
import Link from "next/link";
import { Young_Serif, Hanken_Grotesk } from "next/font/google";

const youngSerif = Young_Serif({ weight: "400", subsets: ["latin"], variable: "--font-ys" });
const hanken = Hanken_Grotesk({ subsets: ["latin"], variable: "--font-hk" });

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
    n: "1",
    title: "Zero judgment",
    body: "Two years away or twenty, nobody asks why. We start where you are and figure out the rest together.",
  },
  {
    n: "2",
    title: "The price before the chair",
    body: "Your cost in writing before any treatment starts. Lee runs your insurance and walks you through every line.",
  },
  {
    n: "3",
    title: "Comfort first",
    body: "Raise a hand and everything pauses. You set the pace, we keep the blankets warm.",
  },
];

const menu = [
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
  { title: "Cleaning & Exam", desc: "Cleanings, X-rays, and exams that run on time.", href: "/services/cleaning" },
  { title: "General Dentistry", desc: "Fillings, crowns, root canals, the everyday work.", href: "/services/general" },
  { title: "Cosmetic Dentistry", desc: "Veneers and makeovers that still look like you.", href: "/services/cosmetic" },
  { title: "Teeth Whitening", desc: "In-office or take-home, results in one visit.", href: "/teeth-whitening" },
  { title: "Invisalign", desc: "Clear aligners from $115 a month.", href: "/invisalign" },
  { title: "Restorative", desc: "Implants, bridges, and dentures that feel right.", href: "/services/restorative" },
  { title: "InnerView Imaging", desc: "See exactly what we see, in plain English.", href: "/innerview" },
  { title: "Laser Therapy", desc: "Gentler gums, faster recovery.", href: "/laser-therapy" },
];

const team = [
  { name: "Dr. Max Buchwald Jr.", role: "Dentist", image: "/images/dr-buchwald.jpg" },
  { name: "Melisa Kounas", role: "Hygienist", image: "/images/melisa.jpg" },
  { name: "Cathy Kounas", role: "Operations", image: "/images/cathy.jpg" },
  { name: "Lee Kounas", role: "Marketing & Insurance", image: "/images/lee.jpg" },
];

function Stars({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <span className="inline-flex gap-0.5 text-[#E3A008]" aria-label="5 stars">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className={className} fill="currentColor" viewBox="0 0 20 20" aria-hidden>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </span>
  );
}

function Wordmark({ light = false }: { light?: boolean }) {
  return (
    <span className="leading-none">
      <span className={`[font-family:var(--font-ys)] text-2xl ${light ? "text-[#FBF6ED]" : "text-[#1E4B3F]"}`}>Buchwald</span>
      <span className={`block text-[10px] font-bold uppercase tracking-[0.28em] mt-1 ${light ? "text-[#FBF6ED]/60" : "text-[#B5532D]"}`}>
        Family Dentistry
      </span>
    </span>
  );
}

export default function PreviewV6() {
  return (
    <div
      className={`${youngSerif.variable} ${hanken.variable} bg-[#FBF6ED] text-[#2A2620]`}
      style={{ fontFamily: "var(--font-hk)" }}
    >
      {/* ===== Ribbon ===== */}
      <div className="bg-[#1E4B3F] text-[#FBF6ED]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-2.5 flex items-center justify-between gap-4 text-xs sm:text-[13px]">
          <p className="truncate">Most PPO plans cover your first visit at 100%</p>
          <a href={PHONE_HREF} className="font-bold hover:text-[#F3A95C] transition-colors shrink-0">{PHONE}</a>
        </div>
      </div>

      {/* ===== Header ===== */}
      <header className="border-b border-[#1E4B3F]/10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-5 flex items-center justify-between gap-6">
          <Link href="/preview-v6" className="shrink-0">
            <Wordmark />
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-[#2A2620]/70">
            <Link href="/services" className="hover:text-[#B5532D] transition-colors">Services</Link>
            <Link href="/membership" className="hover:text-[#B5532D] transition-colors">Pricing</Link>
            <Link href="/insurance" className="hover:text-[#B5532D] transition-colors">Insurance</Link>
            <Link href="/meet-us" className="hover:text-[#B5532D] transition-colors">Meet Us</Link>
          </nav>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#1E4B3F] px-6 py-2.5 text-sm font-bold text-[#FBF6ED] hover:bg-[#2E6B59] transition-colors shrink-0"
          >
            Book a Visit
          </a>
        </div>
      </header>

      {/* ===== Hero ===== */}
      <section className="overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-14 pb-16 sm:pt-20 sm:pb-24">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-x-16 gap-y-14 items-center">
            <div className="animate-[slideUp_0.7s_ease-out_both]">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#B5532D] mb-6">
                Richardson&apos;s family dentist since forever-ish
              </p>
              <h1 className="[font-family:var(--font-ys)] text-[clamp(2.6rem,5.6vw,4.4rem)] leading-[1.06] text-[#1E4B3F] mb-7">
                The dentist visit you might actually look forward to.
              </h1>
              <p className="text-lg leading-relaxed text-[#2A2620]/75 max-w-md mb-9">
                Warm hellos, honest prices, and a blanket if you want one. Twenty plus years of taking care of Richardson, zero lectures given.
              </p>
              <div className="flex flex-wrap items-center gap-5 mb-8">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[#1E4B3F] px-8 py-4 text-sm font-bold text-[#FBF6ED] hover:bg-[#2E6B59] transition-colors"
                >
                  Book a Visit
                </a>
                <a href={PHONE_HREF} className="text-sm font-bold text-[#B5532D] underline underline-offset-4 decoration-2 decoration-[#F3A95C] hover:decoration-[#B5532D] transition-colors">
                  or call {PHONE}
                </a>
              </div>
              <a href={REVIEWS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 hover:opacity-80 transition-opacity">
                <Stars />
                <span className="text-sm text-[#2A2620]/60">4.9 on Google · 433+ reviews</span>
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
              <div className="absolute -bottom-5 -left-4 sm:-left-8 h-28 w-28 rounded-full bg-[#C75B32] text-[#FBF6ED] flex items-center justify-center text-center rotate-[-8deg]">
                <p className="text-xs font-bold leading-snug px-3">4.9 stars<br />433 reviews<br />on Google</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Niceties band ===== */}
      <div className="bg-[#F3A95C]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4 flex flex-wrap justify-center gap-x-3 gap-y-1 text-sm font-bold text-[#1E4B3F]">
          {niceties.map((n, i) => (
            <span key={n} className="flex items-center gap-3">
              {n}
              {i < niceties.length - 1 && <span aria-hidden className="text-[#1E4B3F]/40">·</span>}
            </span>
          ))}
        </div>
      </div>

      {/* ===== Three promises ===== */}
      <section>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-28">
          <h2 className="[font-family:var(--font-ys)] text-3xl sm:text-[2.6rem] leading-tight text-[#1E4B3F] max-w-md mb-14">
            Three promises, every single visit.
          </h2>
          <div className="grid sm:grid-cols-3 gap-x-12 gap-y-10">
            {promises.map((p) => (
              <div key={p.n} className="border-t-2 border-[#1E4B3F]/15 pt-7">
                <span className="[font-family:var(--font-ys)] text-5xl text-[#C75B32]">{p.n}</span>
                <h3 className="text-lg font-extrabold mt-4 mb-3 text-[#1E4B3F]">{p.title}</h3>
                <p className="text-[15px] leading-relaxed text-[#2A2620]/70">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Cost menu (pine band) ===== */}
      <section className="bg-[#1E4B3F] text-[#FBF6ED]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 py-20 sm:py-28">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#F3A95C] mb-4 text-center">No mystery invoices, ever</p>
          <h2 className="[font-family:var(--font-ys)] text-3xl sm:text-[2.6rem] leading-tight text-center mb-4">
            The money part, in plain English.
          </h2>
          <p className="text-center text-[#FBF6ED]/65 max-w-lg mx-auto mb-14">
            Lee verifies your benefits, files the claims, and puts your out-of-pocket cost in writing before anything is scheduled.
          </p>
          <div>
            {menu.map((row) => (
              <div key={row.title} className="py-7 border-t border-[#FBF6ED]/15">
                <div className="flex items-baseline gap-2">
                  <h3 className="text-lg sm:text-xl font-extrabold shrink-0">{row.title}</h3>
                  <span aria-hidden className="flex-1 border-b-2 border-dotted border-[#FBF6ED]/25 -translate-y-1.5 mx-2" />
                  <p className="[font-family:var(--font-ys)] text-xl sm:text-2xl text-[#F3A95C] shrink-0">{row.price}</p>
                </div>
                <p className="text-sm leading-relaxed text-[#FBF6ED]/65 max-w-xl mt-2.5 mb-3">{row.body}</p>
                <Link href={row.href} className="text-sm font-bold text-[#F3A95C] hover:text-[#FBF6ED] transition-colors underline underline-offset-4 decoration-1">
                  {row.link}
                </Link>
              </div>
            ))}
          </div>
          <div className="border-t border-[#FBF6ED]/15 pt-8 mt-1 flex flex-col sm:flex-row items-center justify-between gap-5">
            <p className="text-xs text-[#FBF6ED]/50 max-w-sm">
              Coverage depends on your specific plan. We check your exact benefits before your visit, free.
            </p>
            <a
              href={PHONE_HREF}
              className="rounded-full bg-[#FBF6ED] px-7 py-3.5 text-sm font-bold text-[#1E4B3F] hover:bg-[#F3A95C] transition-colors shrink-0"
            >
              Call to Verify My Benefits
            </a>
          </div>
        </div>
      </section>

      {/* ===== Services ===== */}
      <section>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-28">
          <div className="grid lg:grid-cols-[1fr_320px] gap-x-16 gap-y-12">
            <div>
              <h2 className="[font-family:var(--font-ys)] text-3xl sm:text-[2.6rem] leading-tight text-[#1E4B3F] mb-12">
                What we do here.
              </h2>
              <div className="grid sm:grid-cols-2 gap-x-12">
                {services.map((s) => (
                  <Link key={s.title} href={s.href} className="group border-t border-[#1E4B3F]/15 py-5 block">
                    <span className="flex items-center justify-between gap-3 text-base font-extrabold text-[#1E4B3F] group-hover:text-[#B5532D] transition-colors">
                      {s.title}
                      <svg className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                    <span className="block text-sm text-[#2A2620]/65 leading-relaxed mt-1">{s.desc}</span>
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
                    width={640}
                    height={800}
                    className="w-full object-cover aspect-[3/4]"
                  />
                </div>
                <p className="mt-4 text-sm text-[#2A2620]/60">Bring the smile. We handle the rest.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Team ===== */}
      <section className="bg-[#F3EADA]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-24 text-center">
          <h2 className="[font-family:var(--font-ys)] text-3xl sm:text-[2.6rem] leading-tight text-[#1E4B3F] mb-3">
            Same four faces, every visit.
          </h2>
          <p className="text-[#2A2620]/65 max-w-md mx-auto mb-14">
            No rotating strangers. The people who greet you in January still know your name in December.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-10 max-w-3xl mx-auto">
            {team.map((m) => (
              <Link key={m.name} href="/meet-us" className="group">
                <div className="rounded-t-full rounded-b-2xl overflow-hidden mb-4 ring-2 ring-transparent group-hover:ring-[#C75B32] transition-all">
                  <Image src={m.image} alt={m.name} width={300} height={375} className="w-full object-cover aspect-[4/5]" />
                </div>
                <p className="font-extrabold text-sm text-[#1E4B3F]">{m.name}</p>
                <p className="text-xs text-[#2A2620]/55 mt-0.5">{m.role}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Reviews ===== */}
      <section>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-28">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-x-16 gap-y-12">
            <figure>
              <Stars className="h-4 w-4" />
              <blockquote className="[font-family:var(--font-ys)] text-2xl sm:text-[2.1rem] leading-snug text-[#1E4B3F] mt-6 mb-6">
                &ldquo;No pressure, no upselling. Just honest recommendations. That&apos;s rare and I appreciate it.&rdquo;
              </blockquote>
              <figcaption className="text-sm text-[#2A2620]/60">
                <span className="font-bold text-[#2A2620]">Mark P.</span> · Richardson · Google review
              </figcaption>
            </figure>
            <div className="flex flex-col gap-9">
              <figure className="border-t border-[#1E4B3F]/15 pt-6">
                <Stars />
                <blockquote className="text-[15px] leading-relaxed text-[#2A2620]/80 mt-3 mb-3">
                  &ldquo;My daughter loves going to the dentist because this office makes it such a fun experience.&rdquo;
                </blockquote>
                <figcaption className="text-sm text-[#2A2620]/60"><span className="font-bold text-[#2A2620]">Amanda L.</span> · Garland</figcaption>
              </figure>
              <figure className="border-t border-[#1E4B3F]/15 pt-6">
                <Stars />
                <blockquote className="text-[15px] leading-relaxed text-[#2A2620]/80 mt-3 mb-3">
                  &ldquo;Went in for an emergency toothache and they got me in the same day. Pain was gone immediately.&rdquo;
                </blockquote>
                <figcaption className="text-sm text-[#2A2620]/60"><span className="font-bold text-[#2A2620]">Carlos G.</span> · Richardson</figcaption>
              </figure>
              <a href={REVIEWS_URL} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-[#B5532D] underline underline-offset-4 decoration-2 decoration-[#F3A95C] hover:decoration-[#B5532D] transition-colors">
                Read all 433 reviews on Google
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Come see the place ===== */}
      <section className="bg-[#F3EADA]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-24">
          <div className="grid lg:grid-cols-2 gap-x-16 gap-y-12 items-center">
            <div className="rounded-t-full rounded-b-3xl overflow-hidden max-w-md mx-auto lg:mx-0 w-full">
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
            <div>
              <h2 className="[font-family:var(--font-ys)] text-3xl sm:text-[2.6rem] leading-tight text-[#1E4B3F] mb-5">
                Come see the place.
              </h2>
              <p className="text-[#2A2620]/70 leading-relaxed max-w-md mb-8">
                Calm rooms, friendly faces, and a team that explains everything before anything happens. This isn&apos;t the dentist you grew up dreading.
              </p>
              <div className="flex flex-wrap gap-2.5 mb-10">
                {niceties.map((n) => (
                  <span key={n} className="rounded-full border border-[#1E4B3F]/25 px-4 py-1.5 text-[13px] font-semibold text-[#1E4B3F]">
                    {n}
                  </span>
                ))}
              </div>
              <p className="text-sm text-[#2A2620]/60">
                300 N Coit Rd #245, Richardson, TX · Mon to Thu, 8am to 5pm
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Final CTA ===== */}
      <section className="bg-[#1E4B3F] text-[#FBF6ED]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-28 text-center">
          <h2 className="[font-family:var(--font-ys)] text-[clamp(2.4rem,5.4vw,4rem)] leading-[1.05] mb-6">
            Come say hi, Richardson.
          </h2>
          <p className="text-[#FBF6ED]/65 text-lg max-w-md mx-auto mb-10">
            Book online in two minutes, or call and Cathy will find a time that works.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#F3A95C] px-9 py-4 text-sm font-bold text-[#1E4B3F] hover:bg-[#FBF6ED] transition-colors"
            >
              Book My Visit
            </a>
            <a
              href={PHONE_HREF}
              className="rounded-full border border-[#FBF6ED]/30 px-9 py-4 text-sm font-semibold hover:border-[#FBF6ED]/70 transition-colors"
            >
              Call {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="bg-[#1E4B3F] border-t border-[#FBF6ED]/15 text-[#FBF6ED]/60">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-sm">
          <Wordmark light />
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link href="/services" className="hover:text-[#FBF6ED] transition-colors">Services</Link>
            <Link href="/insurance" className="hover:text-[#FBF6ED] transition-colors">Insurance</Link>
            <Link href="/membership" className="hover:text-[#FBF6ED] transition-colors">Membership</Link>
            <Link href="/meet-us" className="hover:text-[#FBF6ED] transition-colors">Meet Us</Link>
            <Link href="/book" className="hover:text-[#FBF6ED] transition-colors">Book</Link>
          </nav>
          <p className="text-xs text-[#FBF6ED]/30">Design concept v6</p>
        </div>
      </footer>

      {/* ===== Mobile sticky bar ===== */}
      <div className="h-16 lg:hidden bg-[#1E4B3F]" aria-hidden />
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-[#FBF6ED] border-t border-[#1E4B3F]/15 py-3 px-4 flex items-center gap-3">
        <a href={PHONE_HREF} className="flex-1 rounded-full border border-[#1E4B3F]/30 py-3 text-center text-sm font-bold text-[#1E4B3F]">
          Call Now
        </a>
        <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="flex-1 rounded-full bg-[#1E4B3F] py-3 text-center text-sm font-bold text-[#FBF6ED]">
          Book a Visit
        </a>
      </div>
    </div>
  );
}
