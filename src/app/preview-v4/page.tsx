"use client";

const BOOKING_URL =
  "https://book2.getweave.com/359c4bec-a0f0-4d62-9ea8-35a008305267/request-appointment?source=WEBSITE";

const archivo = { fontFamily: "'Archivo Black', sans-serif", letterSpacing: "-0.02em" } as const;
const manrope = { fontFamily: "'Manrope', sans-serif" } as const;

const services = [
  {
    icon: (
      <svg className="h-6 w-6 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Cleaning & Exam",
    desc: "Routine cleanings, X-rays, and comprehensive exams to keep your smile healthy.",
    href: "/services/cleaning",
  },
  {
    icon: (
      <svg className="h-6 w-6 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: "Invisalign",
    desc: "Clear aligners starting at $115/mo. Straighter teeth, no brackets or wires.",
    href: "/invisalign",
  },
  {
    icon: (
      <svg className="h-6 w-6 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
    title: "Dental Implants",
    desc: "Permanent tooth replacement that looks, feels, and functions like the real thing.",
    href: "/dental-implants",
  },
  {
    icon: (
      <svg className="h-6 w-6 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Cosmetic Dentistry",
    desc: "Veneers, bonding, and smile makeovers that transform the way you look and feel.",
    href: "/services/cosmetic",
  },
  {
    icon: (
      <svg className="h-6 w-6 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
    title: "General Dentistry",
    desc: "Fillings, crowns, root canals — the everyday care that keeps your mouth healthy.",
    href: "/services/general",
  },
  {
    icon: (
      <svg className="h-6 w-6 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Laser Therapy",
    desc: "Gentler procedures, less discomfort, and faster recovery with advanced laser tech.",
    href: "/laser-therapy",
  },
];

const features = [
  {
    title: "No Judgment, Ever",
    desc: "Haven't been in years? We hear it all the time. We'll assess where you are and build a plan forward — no lectures.",
  },
  {
    title: "Upfront Pricing",
    desc: "You'll always know your cost before we start. No surprises, no pressure, no bait-and-switch.",
  },
  {
    title: "Same-Day Appointments",
    desc: "We work to get you in fast — especially for pain or urgent concerns. Call us.",
  },
  {
    title: "Lifetime Warranty",
    desc: "We stand behind every restoration done at our office. Quality work, guaranteed.",
  },
];

const reviews = [
  {
    quote: "Best dental experience I've ever had. The whole team made me feel completely at ease — I actually look forward to coming back.",
    name: "Sarah M.",
    location: "Richardson, TX",
  },
  {
    quote: "Dr. Buchwald is incredible. Honest, thorough, and zero pressure. Finally a dentist I actually trust.",
    name: "James T.",
    location: "Plano, TX",
  },
  {
    quote: "I hadn't been to the dentist in 4 years. They were so welcoming and non-judgmental. Wish I'd come sooner.",
    name: "Maria R.",
    location: "Allen, TX",
  },
];

const team = [
  { name: "Dr. Max Buchwald Jr.", role: "Dentist", image: "/images/dr-buchwald.jpg", initial: "B" },
  { name: "Melisa Kounas", role: "Hygienist", image: "/images/melisa.jpg", initial: "M" },
  { name: "Cathy Kounas", role: "Operations", image: "/images/cathy.jpg", initial: "C" },
  { name: "Lee Kounas", role: "Marketing & Insurance", image: "/images/lee.jpg", initial: "L" },
];

function StarRow({ className = "" }: { className?: string }) {
  return (
    <div className={`flex gap-0.5 ${className}`}>
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="h-4 w-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function PreviewV4Page() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Manrope:wght@400;500;600;700;800&display=swap');
        body > *:not(main) { display: none !important; }
        main { padding: 0 !important; margin: 0; }
        .v4-service-card:hover { transform: translateY(-4px); }
        .v4-service-card { transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease; }
      `}</style>

      <div style={manrope} className="bg-white">

        {/* ── Announcement Bar ── */}
        <div className="bg-cyan-500 text-white text-center py-2.5 px-4 text-xs font-bold tracking-widest uppercase">
          New Patient Special —&nbsp;
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:no-underline">
            $149 Cleaning, Exam &amp; X-rays → Book Now
          </a>
        </div>

        {/* ── Nav ── */}
        <nav className="bg-white/95 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-xl bg-cyan-500 flex items-center justify-center shadow-md shadow-cyan-500/30">
                  <span style={archivo} className="text-white text-sm leading-none">B</span>
                </div>
                <div>
                  <p style={archivo} className="text-slate-950 text-sm leading-tight">Buchwald</p>
                  <p className="text-slate-400 text-[10px] font-semibold tracking-wide uppercase leading-tight">Family Dentistry</p>
                </div>
              </div>
              {/* Links */}
              <div className="hidden md:flex items-center gap-7">
                {["Services", "Invisalign", "Insurance", "Meet Us", "Blog"].map((l) => (
                  <a key={l} href="#" className="text-slate-600 text-sm font-semibold hover:text-cyan-500 transition-colors">
                    {l}
                  </a>
                ))}
              </div>
              {/* CTA */}
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cyan-500 hover:bg-cyan-400 text-white text-xs font-bold px-5 py-2.5 rounded-full transition-colors tracking-widest uppercase shadow-lg shadow-cyan-500/25"
              >
                Book Visit
              </a>
            </div>
          </div>
        </nav>

        {/* ── Hero ── */}
        <section className="bg-white pt-16 pb-20 sm:pt-24 sm:pb-28 overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

              {/* Left */}
              <div>
                <div className="inline-flex items-center gap-2 bg-cyan-50 border border-cyan-200 text-cyan-700 text-xs font-bold px-4 py-1.5 rounded-full mb-7 uppercase tracking-widest">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 animate-pulse" />
                  Richardson&apos;s #1 Family Dentist
                </div>
                <h1
                  style={archivo}
                  className="text-5xl sm:text-6xl lg:text-[4.5rem] text-slate-950 leading-[1.0] mb-6"
                >
                  Dental Care<br />
                  That Feels<br />
                  <span className="text-cyan-500">Different.</span>
                </h1>
                <p className="text-slate-500 text-lg leading-relaxed mb-8 max-w-md">
                  Richardson&apos;s most-trusted family and cosmetic dentist. Modern care, no-pressure visits, and a team that genuinely listens.
                </p>
                <div className="flex flex-wrap gap-3 mb-10">
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-cyan-500 hover:bg-cyan-400 text-white font-bold px-7 py-3.5 rounded-full text-sm uppercase tracking-widest transition-colors shadow-xl shadow-cyan-500/25"
                  >
                    Schedule My Visit
                  </a>
                  <a
                    href="tel:972-644-3280"
                    className="border border-slate-300 text-slate-700 hover:border-cyan-400 hover:text-cyan-500 font-bold px-7 py-3.5 rounded-full text-sm uppercase tracking-widest transition-colors"
                  >
                    (972) 644-3280
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <StarRow />
                  <span className="text-slate-500 text-sm font-semibold">4.9 · 433 Google Reviews</span>
                </div>

                {/* Trust badges */}
                <div className="flex flex-wrap gap-3 mt-8">
                  {["ADA Member", "Invisalign Provider", "Cherry Financing", "Same-Day Appts"].map((b) => (
                    <span key={b} className="bg-slate-100 text-slate-600 text-xs font-bold px-3 py-1.5 rounded-full tracking-wide">
                      {b}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right — Image card */}
              <div className="relative">
                {/* Atmospheric glow */}
                <div className="absolute -inset-8 bg-cyan-300/30 blur-3xl rounded-full pointer-events-none" />
                <div className="absolute -inset-4 bg-sky-200/20 blur-2xl rounded-full pointer-events-none" />

                {/* Main image */}
                <div className="relative bg-white rounded-[2rem] shadow-2xl border border-slate-200 overflow-hidden">
                  <img
                    src="/images/office-1.jpg"
                    alt="Buchwald Family Dentistry office"
                    className="w-full aspect-[4/3] object-cover"
                  />
                  {/* Floating badge – top left */}
                  <div className="absolute top-4 left-4 bg-white rounded-2xl px-4 py-3 shadow-xl border border-slate-100">
                    <p style={archivo} className="text-slate-950 text-lg leading-none">$149</p>
                    <p className="text-slate-500 text-xs font-semibold mt-0.5">New Patient Visit</p>
                  </div>
                  {/* Floating badge – top right */}
                  <div className="absolute top-4 right-4 bg-cyan-500 rounded-2xl px-4 py-3 shadow-xl">
                    <p style={archivo} className="text-white text-sm leading-none">Same Day</p>
                    <p className="text-cyan-100 text-xs font-semibold mt-0.5">Appointments</p>
                  </div>
                </div>

                {/* Sub-stat cards */}
                <div className="grid grid-cols-3 gap-3 mt-3">
                  {[
                    { val: "433+", label: "Google Reviews" },
                    { val: "4.9★", label: "Star Rating" },
                    { val: "20+", label: "Years Serving" },
                  ].map((s) => (
                    <div key={s.label} className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-center">
                      <p style={archivo} className="text-slate-950 text-xl">{s.val}</p>
                      <p className="text-slate-500 text-xs font-semibold mt-0.5">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Services ── */}
        <section className="bg-slate-50 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-cyan-500 text-xs font-bold uppercase tracking-widest mb-3">What We Offer</p>
              <h2 style={archivo} className="text-4xl sm:text-5xl text-slate-950 mb-4">
                Everything Your Family Needs
              </h2>
              <p className="text-slate-500 text-base max-w-xl mx-auto">
                From routine cleanings to full smile transformations. One office, one team — no referrals, no runaround.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((s) => (
                <a
                  key={s.title}
                  href={s.href}
                  className="v4-service-card group bg-white border border-slate-200 hover:border-cyan-300 hover:shadow-lg rounded-2xl p-6 block"
                >
                  <div className="h-11 w-11 rounded-xl bg-cyan-50 group-hover:bg-cyan-500 flex items-center justify-center mb-4 transition-colors">
                    <div className="group-hover:[&_svg]:text-white transition-colors">{s.icon}</div>
                  </div>
                  <h3 style={archivo} className="text-slate-950 text-base mb-2">{s.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">{s.desc}</p>
                  <span className="text-cyan-500 text-xs font-bold uppercase tracking-widest">Learn more →</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── Dark "Why Us" ── */}
        <section className="bg-slate-950 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-cyan-500 text-xs font-bold uppercase tracking-widest mb-4">Why Buchwald</p>
                <h2 style={archivo} className="text-4xl sm:text-5xl text-white mb-6">
                  A Practice Built<br />Around You
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed mb-8">
                  We built Buchwald Family Dentistry around one idea: dental visits should never feel like a chore. Modern tech, honest pricing, and a team that genuinely cares.
                </p>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-cyan-500 hover:bg-cyan-400 text-white font-bold px-7 py-3.5 rounded-full text-sm uppercase tracking-widest transition-colors shadow-xl shadow-cyan-500/20"
                >
                  Book Your Visit
                </a>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((f) => (
                  <div key={f.title} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                    <div className="h-10 w-10 rounded-xl bg-cyan-500/15 flex items-center justify-center mb-4">
                      <div className="h-2.5 w-2.5 rounded-full bg-cyan-400" />
                    </div>
                    <h3 style={archivo} className="text-white text-sm mb-2">{f.title}</h3>
                    <p className="text-slate-400 text-xs leading-relaxed">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Team ── */}
        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-cyan-500 text-xs font-bold uppercase tracking-widest mb-3">Our Team</p>
            <h2 style={archivo} className="text-4xl sm:text-5xl text-slate-950 mb-4">Real People. Real Care.</h2>
            <p className="text-slate-500 text-base max-w-xl mx-auto mb-14">
              You see the same familiar faces every visit. That&apos;s intentional.
            </p>
            <div className="flex flex-wrap justify-center gap-8 sm:gap-14">
              {team.map((m) => (
                <div key={m.name} className="text-center">
                  <div className="h-24 w-24 rounded-full overflow-hidden mx-auto mb-3 border-2 border-slate-200 shadow-md">
                    <img src={m.image} alt={m.name} className="h-full w-full object-cover" />
                  </div>
                  <p style={archivo} className="text-slate-950 text-sm">{m.name}</p>
                  <p className="text-slate-400 text-xs font-semibold mt-0.5">{m.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Testimonials ── */}
        <section className="bg-slate-100 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-cyan-500 text-xs font-bold uppercase tracking-widest mb-3">Patient Reviews</p>
              <h2 style={archivo} className="text-4xl sm:text-5xl text-slate-950">
                What Patients Are Saying
              </h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-5">
              {reviews.map((r) => (
                <div key={r.name} className="bg-white rounded-[1.5rem] shadow-md border border-slate-200 p-7 flex flex-col">
                  <StarRow className="mb-5" />
                  <p style={archivo} className="text-slate-950 text-lg leading-snug mb-5 flex-1">
                    &ldquo;{r.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                    <div className="h-9 w-9 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-cyan-600 font-bold text-sm">{r.name[0]}</span>
                    </div>
                    <div>
                      <p className="text-slate-950 text-sm font-bold">{r.name}</p>
                      <p className="text-slate-400 text-xs">{r.location} · Google Review</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Essential Care Plan ── */}
        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-cyan-500 text-xs font-bold uppercase tracking-widest mb-3">No Insurance? No Problem.</p>
                <h2 style={archivo} className="text-4xl sm:text-5xl text-slate-950 mb-4">
                  Essential Care Plan
                </h2>
                <p className="text-slate-500 text-lg leading-relaxed">
                  Our in-house membership for patients without insurance. One flat rate, no waiting periods, no deductibles, no fine print.
                </p>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-[2rem] p-8">
                <div className="flex items-baseline gap-2 mb-6">
                  <span style={archivo} className="text-6xl text-slate-950">$99</span>
                  <span className="text-slate-400 font-semibold">/year</span>
                </div>
                <div className="space-y-3 mb-8">
                  {[
                    "Comprehensive exam (included)",
                    "Full set of X-rays (included)",
                    "20% off all other treatments",
                    "Cleanings at $150 each — add as needed",
                    "No deductibles, no maximums, no waiting",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="h-5 w-5 rounded-full bg-cyan-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-slate-700 text-sm font-medium">{item}</p>
                    </div>
                  ))}
                </div>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-cyan-500 hover:bg-cyan-400 text-white font-bold py-3.5 rounded-full text-sm uppercase tracking-widest transition-colors shadow-lg shadow-cyan-500/20"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA Band ── */}
        <section className="bg-cyan-500 py-20 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <h2 style={archivo} className="text-5xl sm:text-6xl lg:text-7xl text-white mb-5 leading-[1.0]">
              Ready to Love<br />Your Smile?
            </h2>
            <p className="text-cyan-50 text-lg mb-10 max-w-lg mx-auto font-medium">
              New patients welcome. $149 cleaning, exam &amp; X-rays. No insurance required.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-slate-50 text-cyan-600 font-bold px-8 py-4 rounded-full text-sm uppercase tracking-widest transition-colors shadow-2xl"
              >
                Book My $149 Visit
              </a>
              <a
                href="tel:972-644-3280"
                className="border-2 border-white/60 hover:border-white text-white font-bold px-8 py-4 rounded-full text-sm uppercase tracking-widest transition-colors"
              >
                Call (972) 644-3280
              </a>
            </div>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer className="bg-slate-950 py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-xl bg-cyan-500 flex items-center justify-center">
                  <span style={archivo} className="text-white text-sm">B</span>
                </div>
                <div>
                  <p style={archivo} className="text-white text-sm">Buchwald Family Dentistry</p>
                  <p className="text-slate-500 text-xs font-medium">Richardson, TX</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-slate-500 text-xs font-medium">
                <span>300 N Coit Rd #245, Richardson TX 75080</span>
                <span>Mon–Thu 7am–3pm</span>
                <a href="tel:972-644-3280" className="text-cyan-500 font-bold hover:text-cyan-400 transition-colors">
                  (972) 644-3280
                </a>
              </div>
            </div>
          </div>
        </footer>

      </div>
    </>
  );
}
