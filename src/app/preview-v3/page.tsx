"use client";

const C = {
  blue50: "#EFF6FF",
  blue100: "#DBEAFE",
  blue200: "#BFDBFE",
  blue500: "#3B82F6",
  blue600: "#2563EB",
  blue700: "#1D4ED8",
  blue800: "#1E40AF",
  blue900: "#1E3A5F",
  cream: "#FAFBFD",
  white: "#FFFFFF",
  gray50: "#F9FAFB",
  gray100: "#F3F4F6",
  gray200: "#E5E7EB",
  gray300: "#D1D5DB",
  gray400: "#9CA3AF",
  gray500: "#6B7280",
  gray600: "#4B5563",
  gray700: "#374151",
  gray800: "#1F2937",
  gray900: "#111827",
  green50: "#F0FDF4",
  green100: "#DCFCE7",
  green600: "#16A34A",
  green700: "#15803D",
  gold: "#D97706",
};

function Section({ bg = C.white, children, style = {} }: { bg?: string; children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <section style={{ background: bg, padding: "72px 24px", ...style }}>
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>{children}</div>
    </section>
  );
}
function Eyebrow({ children }: { children: React.ReactNode }) {
  return <div style={{ fontSize: 13, fontWeight: 700, color: C.blue600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>{children}</div>;
}
function Heading({ children, style = {} }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 800, color: C.gray900, lineHeight: 1.2, margin: "0 0 16px", ...style }}>{children}</h2>;
}
function Btn({ children, primary = true, style = {} }: { children: React.ReactNode; primary?: boolean; style?: React.CSSProperties }) {
  return (
    <span style={{
      display: "inline-block", padding: "14px 28px", borderRadius: 10, fontWeight: 600, fontSize: 15, cursor: "pointer",
      background: primary ? C.blue600 : "transparent",
      color: primary ? C.white : C.gray700,
      border: primary ? "none" : `2px solid ${C.gray300}`,
      ...style
    }}>{children}</span>
  );
}
function ReviewCard({ quote, name, loc, time }: { quote: string; name: string; loc: string; time: string }) {
  return (
    <div style={{ background: C.white, borderRadius: 14, padding: 24, border: `1px solid ${C.gray200}`, minWidth: 280, flex: "1 1 280px" }}>
      <div style={{ color: C.gold, fontSize: 18, marginBottom: 8 }}>★★★★★</div>
      <p style={{ color: C.gray700, fontSize: 14, lineHeight: 1.6, margin: "0 0 12px", fontStyle: "italic" }}>&ldquo;{quote}&rdquo;</p>
      <div style={{ fontSize: 13, color: C.gray500 }}>{name} &middot; {loc} &middot; {time}</div>
    </div>
  );
}

function SavingsTable() {
  const rows = [
    { treatment: "Comprehensive Exam", plan: "Included", typical: "$150", save: "$150" },
    { treatment: "Full X-rays", plan: "Included", typical: "$150", save: "$150" },
    { treatment: "Cleaning (each)", plan: "$150", typical: "$220", save: "$70" },
  ];
  return (
    <div style={{ overflowX: "auto" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
        <thead>
          <tr style={{ borderBottom: `2px solid ${C.gray200}` }}>
            {["Treatment", "With Plan", "Typical Cost", "You Save"].map(h => (
              <th key={h} style={{ textAlign: "left", padding: "10px 12px", color: C.gray500, fontWeight: 600, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.05em" }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} style={{ borderBottom: `1px solid ${C.gray100}` }}>
              <td style={{ padding: "12px", fontWeight: 500, color: C.gray800 }}>{r.treatment}</td>
              <td style={{ padding: "12px", color: C.blue600, fontWeight: 600 }}>{r.plan}</td>
              <td style={{ padding: "12px", color: C.gray500, textDecoration: "line-through" }}>{r.typical}</td>
              <td style={{ padding: "12px" }}>
                <span style={{ background: C.green50, color: C.green700, padding: "3px 8px", borderRadius: 6, fontWeight: 600, fontSize: 13 }}>{r.save}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function PreviewV3Page() {
  return (
    <>
      {/* Hide global site chrome on this preview route */}
      <style>{`
        body > div > nav,
        body > div > footer,
        body > div > div[class*="fixed"],
        body > div > div[class*="bg-primary"][class*="text-center"] {
          display: none !important;
        }
        body > div > main {
          padding-top: 0 !important;
          margin-top: 0 !important;
        }
      `}</style>

      {/* Google Fonts */}
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Playfair+Display:wght@700;800;900&display=swap" rel="stylesheet" />

      <div style={{ fontFamily: "'DM Sans', 'Segoe UI', system-ui, sans-serif", color: C.gray800, background: C.cream }}>

        {/* TOP BAR */}
        <div style={{ background: C.blue600, color: C.white, textAlign: "center", fontSize: 13, padding: "10px 16px", fontWeight: 500 }}>
          <span style={{ marginRight: 6 }}>🎉</span>
          New Patient Special: <strong>$99</strong> Exam, X-rays &amp; Consultation.
          <span style={{ marginLeft: 8, textDecoration: "underline", cursor: "pointer", fontWeight: 600 }}>Book your visit &rarr;</span>
        </div>

        {/* NAV */}
        <nav style={{ background: C.white, borderBottom: `1px solid ${C.gray200}`, padding: "14px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: 40 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, background: C.blue600, display: "flex", alignItems: "center", justifyContent: "center", color: C.white, fontWeight: 800, fontSize: 18, fontFamily: "'Playfair Display', serif" }}>B</div>
            <div>
              <div style={{ fontWeight: 700, fontSize: 15, color: C.gray900 }}>Buchwald Family Dentistry</div>
              <div style={{ fontSize: 11, color: C.gray500 }}>Richardson, TX</div>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 28, fontSize: 14, fontWeight: 500, color: C.gray600 }}>
            {["Services", "New Patients", "Pricing", "Meet Us", "Blog"].map(item => (
              <span key={item} style={{ cursor: "pointer" }}>{item}</span>
            ))}
            <Btn style={{ padding: "10px 20px", fontSize: 13 }}>Schedule Visit</Btn>
          </div>
        </nav>

        {/* HERO */}
        <section style={{ background: `linear-gradient(135deg, ${C.cream} 0%, ${C.blue50} 100%)`, padding: "80px 24px 72px" }}>
          <div style={{ maxWidth: 1080, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: C.white, padding: "6px 14px", borderRadius: 100, marginBottom: 20, border: `1px solid ${C.gray200}` }}>
                <span style={{ color: C.gold }}>★</span>
                <span style={{ fontSize: 13, fontWeight: 600, color: C.gray800 }}>4.9 on Google &middot; 433+ reviews</span>
              </div>
              <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 48, fontWeight: 800, color: C.gray900, lineHeight: 1.1, margin: "0 0 20px" }}>
                Dental Care That<br />Feels <span style={{ color: C.blue600 }}>Different</span>.
              </h1>
              <p style={{ fontSize: 18, color: C.gray600, lineHeight: 1.7, margin: "0 0 8px", maxWidth: 500 }}>
                No judgment. No pressure. Just honest, comfortable care from a team that actually takes the time to listen.
              </p>
              <p style={{ fontSize: 15, color: C.gray500, lineHeight: 1.6, margin: "0 0 28px", maxWidth: 500 }}>
                We know nobody wakes up excited to see the dentist. That&apos;s exactly why we built a practice where you&apos;ll feel at ease from the second you walk in.
              </p>
              <div style={{ display: "flex", gap: 12, marginBottom: 20 }}>
                <Btn>Schedule My Visit</Btn>
                <Btn primary={false}>Call (972) 644-3280</Btn>
              </div>
              <div style={{ display: "flex", gap: 16, fontSize: 13, color: C.gray500 }}>
                {["Same-day appointments", "Most insurance accepted", "0% financing available"].map(t => (
                  <span key={t} style={{ display: "flex", alignItems: "center", gap: 4 }}>
                    <span style={{ color: C.green600 }}>✓</span> {t}
                  </span>
                ))}
              </div>
            </div>
            <div style={{ background: C.gray200, borderRadius: 20, height: 420, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", inset: 0, background: `linear-gradient(135deg, ${C.blue50} 0%, ${C.gray100} 100%)`, opacity: 0.6 }} />
              <div style={{ position: "relative", textAlign: "center" }}>
                <div style={{ fontSize: 56, marginBottom: 8 }}>🦷</div>
                <div style={{ color: C.gray600, fontWeight: 600 }}>Hero Image / Video</div>
                <div style={{ fontSize: 12, color: C.gray400, marginTop: 4 }}>Warm, real office photo</div>
              </div>
            </div>
          </div>
        </section>

        {/* TRUST STRIP */}
        <div style={{ background: C.white, borderBottom: `1px solid ${C.gray200}`, padding: "16px 24px" }}>
          <div style={{ maxWidth: 1080, margin: "0 auto", display: "flex", justifyContent: "center", gap: 40, fontSize: 13, color: C.gray500, fontWeight: 500 }}>
            {["ADA Member", "Invisalign Provider", "Lifetime Warranty", "Same-Day Appointments", "Cherry Financing"].map(b => (
              <span key={b} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ color: C.blue600, fontWeight: 700 }}>✓</span> {b}
              </span>
            ))}
          </div>
        </div>

        {/* STATS */}
        <Section bg={C.white} style={{ padding: "48px 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24, textAlign: "center" }}>
            {[
              { val: "433+", label: "Google Reviews", icon: "⭐" },
              { val: "4.9", label: "Average Rating", icon: "🏆" },
              { val: "$99", label: "New Patient Exam", icon: "💰" },
              { val: "7am", label: "Early Hours Available", icon: "🕐" },
            ].map((s, i) => (
              <div key={i} style={{ padding: 24, borderRadius: 14, background: C.gray50, border: `1px solid ${C.gray200}` }}>
                <div style={{ fontSize: 28, marginBottom: 8 }}>{s.icon}</div>
                <div style={{ fontSize: 28, fontWeight: 800, color: C.gray900 }}>{s.val}</div>
                <div style={{ fontSize: 13, color: C.gray500, marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </Section>

        {/* THREE PATHS */}
        <Section bg={C.gray50}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <Eyebrow>Transparent Pricing</Eyebrow>
            <Heading style={{ fontSize: 36 }}>Three Ways to Make It Work for Your Budget</Heading>
            <p style={{ color: C.gray500, fontSize: 16, maxWidth: 600, margin: "0 auto" }}>
              We never want cost to be the reason you skip care. Choose the path that fits your situation.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20 }}>
            {/* Insurance */}
            <div style={{ background: C.white, borderRadius: 16, padding: 28, border: `1px solid ${C.gray200}` }}>
              <div style={{ fontSize: 32, marginBottom: 12 }}>🏥</div>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: C.gray900, margin: "0 0 8px" }}>Have Insurance?</h3>
              <p style={{ fontSize: 14, color: C.gray600, lineHeight: 1.6, margin: "0 0 16px" }}>
                We accept most PPO plans. Our coordinator Lee handles verification, claims, and makes sure you get the most from your benefits. You focus on your smile.
              </p>
              <span style={{ fontSize: 13, color: C.blue600, fontWeight: 600, cursor: "pointer" }}>Verify My Insurance &rarr;</span>
            </div>

            {/* Membership */}
            <div style={{ background: C.white, borderRadius: 16, padding: 28, border: `2px solid ${C.blue600}`, position: "relative" }}>
              <div style={{ position: "absolute", top: -12, right: 20, background: C.blue600, color: C.white, fontSize: 11, fontWeight: 700, padding: "4px 12px", borderRadius: 100, textTransform: "uppercase", letterSpacing: "0.05em" }}>Most Popular</div>
              <div style={{ fontSize: 32, marginBottom: 12 }}>💎</div>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: C.gray900, margin: "0 0 4px" }}>No Insurance? Start Here.</h3>
              <div style={{ display: "flex", alignItems: "baseline", gap: 8, margin: "0 0 4px" }}>
                <span style={{ fontSize: 36, fontWeight: 800, color: C.blue600 }}>$99</span>
                <span style={{ fontSize: 14, color: C.gray500 }}>exam membership</span>
              </div>
              <div style={{ fontSize: 13, color: C.gray500, marginBottom: 12 }}>+ $150 per cleaning as needed</div>
              <div style={{ fontSize: 14, color: C.gray600, lineHeight: 1.8, marginBottom: 16 }}>
                <div>✓ Comprehensive exam</div>
                <div>✓ Full set of X-rays</div>
                <div>✓ 20% off all other treatments</div>
                <div>✓ No waiting period</div>
                <div>✓ No annual maximums</div>
                <div>✓ Cleanings at $150/visit</div>
              </div>
              <Btn style={{ width: "100%", textAlign: "center", display: "block" }}>Get Started</Btn>
            </div>

            {/* Financing */}
            <div style={{ background: C.white, borderRadius: 16, padding: 28, border: `1px solid ${C.gray200}` }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: "#FF5C5C", display: "flex", alignItems: "center", justifyContent: "center", color: C.white, fontWeight: 700, fontSize: 14 }}>C</div>
                <span style={{ fontSize: 14, fontWeight: 600, color: C.gray700 }}>Cherry Financing</span>
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: C.gray900, margin: "0 0 8px" }}>Need Monthly Payments?</h3>
              <p style={{ fontSize: 14, color: C.gray600, lineHeight: 1.6, margin: "0 0 12px" }}>
                Split any treatment into monthly payments through Cherry. 0% APR options available, soft credit check, and approval in 60 seconds.
              </p>
              <div style={{ background: C.gray50, borderRadius: 10, padding: 16, marginBottom: 16 }}>
                <div style={{ fontSize: 13, color: C.gray500, marginBottom: 4 }}>Example: $2,000 treatment</div>
                <div style={{ fontSize: 24, fontWeight: 800, color: C.gray900 }}>$167<span style={{ fontSize: 14, fontWeight: 500, color: C.gray500 }}>/mo for 12 months</span></div>
                <div style={{ fontSize: 12, color: C.green600, fontWeight: 600, marginTop: 2 }}>0% APR for qualified applicants</div>
              </div>
              <span style={{ fontSize: 13, color: C.blue600, fontWeight: 600, cursor: "pointer", display: "block", textAlign: "center", padding: "12px", border: `2px solid ${C.blue600}`, borderRadius: 10 }}>See Payment Options &rarr;</span>
            </div>
          </div>
        </Section>

        {/* MEMBERSHIP BREAKDOWN */}
        <Section bg={C.white}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }}>
            <div>
              <Eyebrow>Essential Care Plan</Eyebrow>
              <Heading>$99 Gets You in the Door</Heading>
              <p style={{ color: C.gray600, fontSize: 15, lineHeight: 1.6, marginBottom: 16 }}>
                No insurance? No problem. Your $99 membership covers a comprehensive exam and full X-rays. Need a cleaning? That&apos;s $150 per visit, still well below the typical $220.
              </p>
              <p style={{ color: C.gray600, fontSize: 15, lineHeight: 1.6, marginBottom: 24 }}>
                Plus you&apos;ll get 20% off every other treatment for as long as you&apos;re a member. No annual maximums. No waiting periods. No headaches.
              </p>
              <div style={{ background: C.blue50, borderRadius: 14, padding: 24, marginBottom: 20 }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: C.gray800, marginBottom: 12 }}>Your first year (with 2 cleanings):</div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6, fontSize: 14 }}>
                  <span style={{ color: C.gray600 }}>Exam Membership</span>
                  <span style={{ fontWeight: 600, color: C.gray800 }}>$99</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6, fontSize: 14 }}>
                  <span style={{ color: C.gray600 }}>2 Cleanings @ $150</span>
                  <span style={{ fontWeight: 600, color: C.gray800 }}>$300</span>
                </div>
                <div style={{ borderTop: `2px solid ${C.blue200}`, paddingTop: 10, marginTop: 10, display: "flex", justifyContent: "space-between", fontSize: 15 }}>
                  <span style={{ fontWeight: 700, color: C.gray900 }}>Your total</span>
                  <span style={{ fontWeight: 800, color: C.blue600, fontSize: 20 }}>$399</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8, fontSize: 13 }}>
                  <span style={{ color: C.gray500 }}>Without the plan, you&apos;d pay</span>
                  <span style={{ color: C.gray500, textDecoration: "line-through" }}>$565+</span>
                </div>
                <div style={{ marginTop: 12, background: C.green100, borderRadius: 8, padding: "8px 12px", textAlign: "center" }}>
                  <span style={{ fontWeight: 700, color: C.green700, fontSize: 15 }}>You save $166+ in year one</span>
                </div>
              </div>
              <Btn>Join the Plan</Btn>
            </div>
            <SavingsTable />
          </div>
        </Section>

        {/* CHERRY FINANCING */}
        <Section bg={C.gray50}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
            <div>
              <Eyebrow>Flexible Financing</Eyebrow>
              <Heading>Big Treatment? Pay on Your Terms.</Heading>
              <p style={{ color: C.gray600, fontSize: 15, lineHeight: 1.6, margin: "0 0 20px" }}>
                Cherry lets you split costs into affordable monthly payments with 0% APR options. Apply in 60 seconds with no impact to your credit score. Get approved and start treatment the same day.
              </p>
              <div style={{ fontSize: 14, color: C.gray600, lineHeight: 2 }}>
                {["Plans from 3 to 24 months", "0% APR options for qualified applicants", "Soft credit check only", "Approval in under 60 seconds", "No deferred or hidden interest"].map(t => (
                  <div key={t} style={{ display: "flex", alignItems: "center", gap: 8 }}><span style={{ color: C.blue600 }}>✓</span> {t}</div>
                ))}
              </div>
            </div>
            <div style={{ background: C.white, borderRadius: 16, padding: 32, border: `1px solid ${C.gray200}` }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 24 }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: "#FF5C5C", display: "flex", alignItems: "center", justifyContent: "center", color: C.white, fontWeight: 700, fontSize: 18 }}>C</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 16, color: C.gray800 }}>Cherry</div>
                  <div style={{ fontSize: 12, color: C.gray500 }}>Buy now. Pay monthly.</div>
                </div>
              </div>
              <div style={{ marginBottom: 24 }}>
                {[
                  { amt: "$500", mo: "$84/mo", term: "6 mo", apr: "0%" },
                  { amt: "$1,000", mo: "$84/mo", term: "12 mo", apr: "0%" },
                  { amt: "$2,500", mo: "$209/mo", term: "12 mo", apr: "0%" },
                  { amt: "$5,000", mo: "$209/mo", term: "24 mo", apr: "9.99%" },
                ].map((ex, i) => (
                  <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0", borderBottom: i < 3 ? `1px solid ${C.gray100}` : "none" }}>
                    <span style={{ fontWeight: 600, color: C.gray800, fontSize: 14 }}>{ex.amt}</span>
                    <span style={{ fontSize: 14, color: C.gray600 }}>{ex.term}</span>
                    <span style={{ fontWeight: 700, color: C.blue600, fontSize: 15 }}>{ex.mo}</span>
                    <span style={{ fontSize: 11, fontWeight: 600, color: ex.apr === "0%" ? C.green600 : C.gray500, background: ex.apr === "0%" ? C.green50 : C.gray50, padding: "2px 8px", borderRadius: 6 }}>{ex.apr} APR</span>
                  </div>
                ))}
              </div>
              <Btn style={{ width: "100%", textAlign: "center", display: "block" }}>Check My Payment Options</Btn>
              <div style={{ fontSize: 11, color: C.gray400, marginTop: 10, textAlign: "center" }}>
                No credit score impact to apply.
              </div>
            </div>
          </div>
        </Section>

        {/* REVIEWS */}
        <Section bg={C.white}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <Eyebrow>Don&apos;t Take Our Word for It</Eyebrow>
            <Heading style={{ fontSize: 36 }}>Richardson Families Love Us</Heading>
          </div>
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
            <ReviewCard quote="They made me feel so comfortable during my visit. The office is modern and clean, and the staff is incredibly friendly." name="Sarah M." loc="Richardson" time="2 months ago" />
            <ReviewCard quote="Dr. Buchwald took the time to explain everything. No rush, no pressure. I've never had a dentist do that before." name="James T." loc="Plano" time="3 months ago" />
            <ReviewCard quote="My kids actually ask to go back. The team is so good with children. We've been coming for years now." name="Maria L." loc="Allen" time="1 month ago" />
          </div>
        </Section>

        {/* EXPERIENCE */}
        <Section bg={C.gray50}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
            <div>
              <Eyebrow>The Experience</Eyebrow>
              <Heading>A Visit You Won&apos;t Dread</Heading>
              <p style={{ color: C.gray600, fontSize: 15, lineHeight: 1.7, margin: "0 0 20px" }}>
                We designed every detail of this practice to make you feel at home. From the calm, modern office to a team that greets you by name, this isn&apos;t the dentist you grew up dreading.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                {[
                  { icon: "🎧", text: "Noise-canceling headphones" },
                  { icon: "📺", text: "TVs at every chair" },
                  { icon: "🧣", text: "Blankets and pillows" },
                  { icon: "☕", text: "Complimentary beverages" },
                  { icon: "🕐", text: "On-time, no-wait visits" },
                  { icon: "💬", text: "We explain before we start" },
                ].map((a, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, background: C.white, padding: "10px 14px", borderRadius: 10, border: `1px solid ${C.gray200}`, fontSize: 13, fontWeight: 500, color: C.gray700 }}>
                    <span style={{ fontSize: 18 }}>{a.icon}</span>{a.text}
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: C.gray200, borderRadius: 20, height: 360, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ textAlign: "center", color: C.gray500 }}>
                <div style={{ fontSize: 48, marginBottom: 8 }}>🏢</div>
                <div style={{ fontWeight: 600 }}>Office Interior Photos</div>
                <div style={{ fontSize: 12, color: C.gray400, marginTop: 4 }}>Real photos of your space</div>
              </div>
            </div>
          </div>
        </Section>

        {/* SERVICES */}
        <Section bg={C.white}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <Eyebrow>Our Services</Eyebrow>
            <Heading style={{ fontSize: 36 }}>Everything Your Smile Needs. One Roof.</Heading>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
            {[
              { icon: "🪥", name: "Cleaning & Exam", desc: "Routine care for healthy smiles" },
              { icon: "🦷", name: "General Dentistry", desc: "Fillings, crowns, bridges, and more" },
              { icon: "✨", name: "Cosmetic Dentistry", desc: "Veneers, bonding, and smile makeovers" },
              { icon: "💎", name: "Teeth Whitening", desc: "Professional brightening that lasts" },
              { icon: "😁", name: "Invisalign", desc: "Clear aligners starting at $115/mo" },
              { icon: "🔧", name: "Restorative", desc: "Implants, dentures, and rebuilding" },
              { icon: "📷", name: "InnerView Imaging", desc: "Advanced 3D scans and diagnostics" },
              { icon: "💡", name: "Laser Therapy", desc: "Gentle, precise gum treatment" },
            ].map((svc, i) => (
              <div key={i} style={{ background: C.gray50, borderRadius: 14, padding: 24, border: `1px solid ${C.gray200}`, cursor: "pointer" }}>
                <div style={{ fontSize: 28, marginBottom: 10 }}>{svc.icon}</div>
                <div style={{ fontWeight: 700, fontSize: 15, color: C.gray900, marginBottom: 4 }}>{svc.name}</div>
                <div style={{ fontSize: 13, color: C.gray500, lineHeight: 1.5 }}>{svc.desc}</div>
              </div>
            ))}
          </div>
        </Section>

        {/* TEAM */}
        <Section bg={C.gray50}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <Eyebrow>Our Team</Eyebrow>
            <Heading style={{ fontSize: 36 }}>Real People Who Actually Care</Heading>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24, textAlign: "center" }}>
            {[
              { name: "Dr. Max Buchwald Jr.", role: "Dentist", init: "MB" },
              { name: "Melisa Kounas", role: "Hygienist", init: "MK" },
              { name: "Cathy Kounas", role: "Operations", init: "CK" },
              { name: "Lee Kounas", role: "Marketing & Insurance", init: "LK" },
            ].map((m, i) => (
              <div key={i}>
                <div style={{ width: 96, height: 96, borderRadius: "50%", background: C.gray200, margin: "0 auto 12px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, fontWeight: 700, color: C.gray500, fontFamily: "'Playfair Display', serif" }}>{m.init}</div>
                <div style={{ fontWeight: 700, fontSize: 15, color: C.gray900 }}>{m.name}</div>
                <div style={{ fontSize: 13, color: C.gray500, marginTop: 2 }}>{m.role}</div>
              </div>
            ))}
          </div>
        </Section>

        {/* INVISALIGN */}
        <Section bg={C.blue600} style={{ padding: "56px 24px" }}>
          <div style={{ textAlign: "center", color: C.white }}>
            <div style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", opacity: 0.7, marginBottom: 8 }}>Invisalign Provider</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 36, fontWeight: 800, margin: "0 0 12px" }}>Invisalign Starting at $115/mo</h2>
            <p style={{ fontSize: 16, opacity: 0.85, maxWidth: 500, margin: "0 auto 24px" }}>Clear aligners. No brackets. No wires. 0% APR financing through Cherry.</p>
            <Btn style={{ background: C.white, color: C.blue600 }}>Learn More</Btn>
          </div>
        </Section>

        {/* FINAL CTA */}
        <Section bg={C.gray900} style={{ padding: "80px 24px" }}>
          <div style={{ textAlign: "center" }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 40, fontWeight: 800, color: C.white, margin: "0 0 12px" }}>Ready to Love Your Smile?</h2>
            <p style={{ color: C.gray400, fontSize: 16, margin: "0 0 28px" }}>New patients welcome. Request an appointment or give us a call.</p>
            <div style={{ display: "flex", justifyContent: "center", gap: 12 }}>
              <Btn>Request Appointment</Btn>
              <Btn primary={false} style={{ borderColor: C.gray600, color: C.gray400 }}>(972) 644-3280</Btn>
            </div>
          </div>
        </Section>

        {/* FOOTER */}
        <footer style={{ background: "#0F172A", padding: "56px 24px 32px" }}>
          <div style={{ maxWidth: 1080, margin: "0 auto", display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1fr", gap: 32, fontSize: 13, color: C.gray400 }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                <div style={{ width: 28, height: 28, borderRadius: 8, background: C.blue600, display: "flex", alignItems: "center", justifyContent: "center", color: C.white, fontWeight: 800, fontSize: 13, fontFamily: "'Playfair Display', serif" }}>B</div>
                <span style={{ fontWeight: 700, color: C.white, fontSize: 14 }}>Buchwald Family Dentistry</span>
              </div>
              <p style={{ lineHeight: 1.6, color: C.gray500 }}>Modern care. Comfortable visits.<br />Richardson, TX.</p>
            </div>
            <div>
              <div style={{ fontWeight: 700, color: C.white, marginBottom: 12 }}>Pages</div>
              {["Home", "Services", "Meet Us", "Areas We Serve", "Insurance", "Blog"].map(p => (
                <div key={p} style={{ marginBottom: 6, cursor: "pointer", color: C.gray500 }}>{p}</div>
              ))}
            </div>
            <div>
              <div style={{ fontWeight: 700, color: C.white, marginBottom: 12 }}>Services</div>
              {["Cleaning & Exam", "General", "Cosmetic", "Restorative", "Invisalign", "Whitening", "Laser Therapy"].map(s => (
                <div key={s} style={{ marginBottom: 6, cursor: "pointer", color: C.gray500 }}>{s}</div>
              ))}
            </div>
            <div>
              <div style={{ fontWeight: 700, color: C.white, marginBottom: 12 }}>Contact</div>
              <p style={{ lineHeight: 1.6, color: C.gray500 }}>300 N Coit Rd #245<br />Richardson, TX 75080</p>
              <p style={{ color: C.white, fontWeight: 600, marginTop: 8 }}>(972) 644-3280</p>
              <p style={{ lineHeight: 1.6, color: C.gray500, marginTop: 8 }}>Mon &ndash; Thu: 7am &ndash; 3pm<br />Fri &ndash; Sun: Closed</p>
            </div>
          </div>
          <div style={{ maxWidth: 1080, margin: "40px auto 0", paddingTop: 20, borderTop: `1px solid #1F2937`, fontSize: 12, color: C.gray500, textAlign: "center" }}>
            &copy; 2026 Buchwald Family Dentistry &amp; Orthodontics. All rights reserved.
          </div>
        </footer>

        {/* STICKY BOTTOM BAR */}
        <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, background: C.white, borderTop: `1px solid ${C.gray200}`, padding: "10px 24px", display: "flex", justifyContent: "center", gap: 12, zIndex: 50 }}>
          <Btn style={{ padding: "10px 24px", fontSize: 13 }}>Schedule Visit</Btn>
          <Btn primary={false} style={{ padding: "10px 24px", fontSize: 13 }}>Call (972) 644-3280</Btn>
        </div>
      </div>
    </>
  );
}
