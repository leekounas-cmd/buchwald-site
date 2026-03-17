"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { CTABanner } from "@/components/CTABanner";
import { FAQSchema } from "@/components/FAQSchema";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { blogPosts } from "@/lib/blog-data";

/* ─── Blog post content keyed by slug ─── */

function FirstDentalVisit() {
  return (
    <>
      <p>
        Walking into a new dentist&apos;s office for the first time can feel a little
        nerve-wracking — we get it. You don&apos;t know what to expect, you might not
        love the dentist to begin with, and the whole thing just feels like a big
        question mark.
      </p>
      <p>
        We hear this from new patients all the time. And honestly? Most people
        tell us afterward that it was way easier than they expected. Here&apos;s a
        full breakdown of what your first visit at Buchwald Family Dentistry
        actually looks like.
      </p>

      <h2>What to Bring</h2>
      <p>
        Keep it simple. Bring your <strong>photo ID</strong>, your{" "}
        <strong>insurance card</strong> (if you have one — it&apos;s totally fine if
        you don&apos;t), and a <strong>list of any medications</strong> you&apos;re
        currently taking. If you have recent dental records or X-rays from a
        previous dentist, those can be helpful but aren&apos;t required.
      </p>
      <p>
        You can also{" "}
        <Link href="/new-patient" className="text-primary font-semibold underline">
          fill out your new patient forms online
        </Link>{" "}
        before you come in to save time.
      </p>

      <h2>The Exam &amp; X-Rays</h2>
      <p>
        Dr. Buchwald will do a comprehensive exam of your teeth, gums, jaw, and
        bite. We&apos;ll take digital X-rays (way more comfortable than the old-school
        kind) to see what&apos;s happening beneath the surface. This gives us a
        complete picture of your oral health.
      </p>

      <h2>Cleaning</h2>
      <p>
        Unless there&apos;s something that needs to be addressed first, most first
        visits include a professional cleaning. Our hygienists are thorough but
        gentle. If it&apos;s been a while since your last cleaning, no judgment — we&apos;re
        just glad you&apos;re here.
      </p>

      <h2>The Game Plan</h2>
      <p>
        After the exam and cleaning, Dr. Buchwald will sit down with you and talk
        through what he found. If everything looks great, we&apos;ll set you up for
        your next checkup. If there&apos;s work that needs to be done, he&apos;ll explain
        your options clearly — no pressure, no upselling.
      </p>

      <h2>How Long Does It Take?</h2>
      <p>
        Plan for about <strong>60 to 90 minutes</strong> for your first visit.
        That gives us enough time to be thorough without rushing. Follow-up
        visits are usually quicker.
      </p>

      <h2>Tips for Dental Anxiety</h2>
      <p>
        If the dentist makes you nervous, you&apos;re not alone. A lot of our
        patients feel the same way. Here are a few things that help:
      </p>
      <ul>
        <li>Let us know upfront — we&apos;ll adjust our approach</li>
        <li>Bring headphones and listen to music or a podcast</li>
        <li>We explain everything before we do it so there are no surprises</li>
        <li>Our team is genuinely great at putting people at ease</li>
      </ul>

      <h2>Ready to Come In?</h2>
      <p>
        Your first visit sets the tone for everything. We want you to feel
        comfortable, informed, and taken care of.{" "}
        <Link href="/book" className="text-primary font-semibold underline">
          Request your first appointment
        </Link>{" "}
        and we&apos;ll take it from there.
      </p>
    </>
  );
}

function InvisalignVsBraces() {
  return (
    <>
      <p>
        So you&apos;re thinking about straightening your teeth — awesome. But now
        you&apos;re stuck on the big question: Invisalign or braces? Both get the job
        done, but they work differently and fit different lifestyles.
      </p>
      <p>
        Here&apos;s an honest, no-BS comparison to help you figure out which one
        makes sense for you.
      </p>

      <h2>Appearance</h2>
      <p>
        This is the big one for most people. <strong>Invisalign</strong> uses
        clear, removable aligners that are nearly invisible. Most people won&apos;t
        even notice you&apos;re wearing them. <strong>Braces</strong> use metal
        brackets and wires that are visible — though ceramic (tooth-colored)
        options exist.
      </p>
      <p>
        If you&apos;re an adult who doesn&apos;t want to look like a teenager,
        Invisalign tends to win here.
      </p>

      <h2>Comfort</h2>
      <p>
        Invisalign aligners are smooth plastic — no wires poking your cheeks.
        You&apos;ll feel pressure when you switch to new trays (every 1-2 weeks), but
        it&apos;s generally more comfortable than braces. Braces can cause some
        irritation, especially after adjustments.
      </p>

      <h2>Timeline</h2>
      <p>
        <strong>Invisalign:</strong> 6 to 18 months for most cases.
        <br />
        <strong>Braces:</strong> 12 to 24 months on average.
      </p>
      <p>
        Simpler cases finish faster with Invisalign. More complex cases might
        take about the same time either way.
      </p>

      <h2>Maintenance &amp; Lifestyle</h2>
      <p>
        With Invisalign, you remove the aligners to eat and drink (anything
        other than water). That means no food restrictions, but you do need to
        wear them 20-22 hours a day. You also need to brush after meals before
        putting them back in.
      </p>
      <p>
        With braces, they&apos;re always on — no forgetting to wear them. But you do
        need to avoid hard, sticky, and chewy foods. Cleaning around brackets
        takes more effort.
      </p>

      <h2>Cost</h2>
      <p>
        Surprise — they&apos;re actually pretty comparable. Both typically range from
        $3,500 to $6,000 depending on the complexity of your case. Insurance
        often covers a portion of either option.
      </p>

      <h2>Which One Should You Choose?</h2>
      <p>The honest answer: it depends on your teeth and your lifestyle.</p>
      <ul>
        <li>Want something discreet? Invisalign.</li>
        <li>Have a complex case? Braces might be more effective.</li>
        <li>Worried about compliance? Braces work 24/7 without effort.</li>
        <li>Want flexibility with eating? Invisalign.</li>
      </ul>
      <p>
        The best way to know is to come in and let us take a look.{" "}
        <Link href="/invisalign" className="text-primary font-semibold underline">
          Learn more about Invisalign at our office
        </Link>{" "}
        or{" "}
        <Link href="/book" className="text-primary font-semibold underline">
          request a consultation
        </Link>{" "}
        to discuss your options.
      </p>
    </>
  );
}

function DentalImplantsCost() {
  return (
    <>
      <p>
        If you&apos;re missing a tooth (or a few), dental implants are probably on
        your radar. They&apos;re the gold standard for tooth replacement — but
        let&apos;s be real, the first thing most people want to know is: how much
        is this going to cost?
      </p>
      <p>
        Here&apos;s a straightforward breakdown of dental implant costs in Texas so
        you can plan accordingly.
      </p>

      <h2>Average Cost Per Implant in Texas</h2>
      <p>
        A single dental implant in Texas typically costs between{" "}
        <strong>$3,000 and $5,000</strong>. That includes the implant post
        (titanium screw), the abutment (connector piece), and the crown (the
        visible tooth). Some cases may be higher if additional procedures are
        needed.
      </p>

      <h2>What Affects the Price?</h2>
      <p>Not all implant cases are the same. Here&apos;s what can move the needle:</p>
      <ul>
        <li>
          <strong>Bone grafting:</strong> If you&apos;ve had bone loss in your jaw,
          you might need a bone graft before the implant can be placed. This
          adds $500-$2,000 to the total.
        </li>
        <li>
          <strong>Number of implants:</strong> Multiple implants may qualify for
          bundled pricing.
        </li>
        <li>
          <strong>Location in the mouth:</strong> Front teeth vs. molars can
          affect complexity and cost.
        </li>
        <li>
          <strong>Type of crown:</strong> Materials vary — porcelain crowns tend
          to cost more but look the most natural.
        </li>
      </ul>

      <h2>Does Insurance Cover Implants?</h2>
      <p>
        Some dental insurance plans cover a portion of implant treatment —
        usually around 25% to 50% of the cost. Coverage varies a lot between
        plans, though. Our insurance coordinator Denielle will check your
        specific benefits and tell you exactly what&apos;s covered before you commit
        to anything.
      </p>

      <h2>Financing Options</h2>
      <p>
        We don&apos;t want cost to be the thing that keeps you from getting the care
        you need. We offer flexible payment plans so you can break the investment
        into manageable monthly payments. We&apos;ll walk you through all your options
        during the consultation — no surprises.
      </p>

      <h2>Are Implants Worth the Investment?</h2>
      <p>
        Here&apos;s the way we look at it: implants can last{" "}
        <strong>25+ years</strong> — many patients keep them for life. Compare
        that to a bridge (5-15 years) or dentures (5-10 years), and the
        long-term cost actually favors implants. Plus, implants preserve your
        jawbone, look completely natural, and let you eat whatever you want.
      </p>
      <p>
        <Link href="/dental-implants" className="text-primary font-semibold underline">
          Learn more about our dental implant process
        </Link>{" "}
        or{" "}
        <Link href="/book" className="text-primary font-semibold underline">
          request a consultation
        </Link>{" "}
        to get a personalized estimate.
      </p>
    </>
  );
}

function SignsYouNeedDentist() {
  return (
    <>
      <p>
        We all put off the dentist sometimes. Life gets busy, nothing hurts, and
        it&apos;s easy to push it to next month. But there are certain signs your
        body sends that mean you shouldn&apos;t wait.
      </p>
      <p>
        Here are five red flags that mean it&apos;s time to pick up the phone.
      </p>

      <h2>1. A Toothache That Won&apos;t Go Away</h2>
      <p>
        A persistent toothache is your body telling you something is wrong. It
        could be a cavity that&apos;s reached the nerve, an infection, or a cracked
        tooth. Over-the-counter pain meds might dull the pain temporarily, but
        the underlying issue isn&apos;t going anywhere.
      </p>
      <p>
        The sooner you come in, the more treatment options you&apos;ll have — and
        the less it&apos;ll likely cost.
      </p>

      <h2>2. Swollen or Bleeding Gums</h2>
      <p>
        Gums that bleed when you brush or floss aren&apos;t normal — even though a
        lot of people think they are. Persistent swelling, redness, or bleeding
        can be signs of gum disease. Caught early, gum disease is very
        treatable. Left alone, it can lead to tooth loss and other health
        problems.
      </p>

      <h2>3. Sensitivity to Hot or Cold</h2>
      <p>
        If that sip of coffee or bite of ice cream makes you wince, something&apos;s
        going on. Sensitivity can be caused by worn enamel, exposed roots,
        cavities, or a cracked tooth. It&apos;s worth getting checked out before it
        gets worse.
      </p>

      <h2>4. A Chipped, Cracked, or Broken Tooth</h2>
      <p>
        Even if it doesn&apos;t hurt, a damaged tooth needs attention. Cracks can
        deepen over time, bacteria can get inside, and what could have been a
        simple fix can turn into something bigger. If a tooth is knocked out
        completely, that&apos;s a true emergency — call us immediately.
      </p>

      <h2>5. Persistent Bad Breath</h2>
      <p>
        Everyone has morning breath, but if bad breath sticks around despite
        brushing and flossing, it could point to gum disease, an infection, or
        decay. It&apos;s not just a cosmetic issue — it&apos;s often a signal that
        something needs treatment.
      </p>

      <h2>Don&apos;t Wait Until It Gets Worse</h2>
      <p>
        Dental problems almost never fix themselves. The longer you wait, the
        more complex (and expensive) treatment becomes. If any of these sound
        familiar,{" "}
        <Link href="/emergency" className="text-primary font-semibold underline">
          learn about our emergency dental services
        </Link>{" "}
        or{" "}
        <Link href="/book" className="text-primary font-semibold underline">
          request an appointment today
        </Link>
        . We&apos;ll get you taken care of.
      </p>
    </>
  );
}

function TeethWhiteningSafe() {
  return (
    <>
      <p>
        Teeth whitening is one of the most asked-about treatments we get. And
        usually the first question is: &ldquo;Is it actually safe?&rdquo; Short
        answer — yes, when done right. Here&apos;s the longer answer.
      </p>

      <h2>Professional Whitening vs. Over-the-Counter Products</h2>
      <p>
        The biggest difference between professional whitening and drugstore
        strips is control. In our office, we use <strong>controlled
        concentrations</strong> of whitening agents and protect your gums
        throughout the process. We can also customize treatment based on your
        sensitivity level.
      </p>
      <p>
        Over-the-counter products are generally safe too, but they&apos;re
        one-size-fits-all. The trays might not fit well (leading to gum
        irritation), and results are usually less dramatic and less consistent.
      </p>

      <h2>What About Sensitivity?</h2>
      <p>
        Some temporary sensitivity is normal after whitening — especially to hot
        and cold. It usually goes away within a day or two. If you&apos;re prone to
        sensitivity, we can adjust the treatment and recommend a desensitizing
        toothpaste to use before and after.
      </p>

      <h2>Who Shouldn&apos;t Whiten?</h2>
      <p>Whitening isn&apos;t right for everyone. We&apos;d recommend waiting or exploring other options if you:</p>
      <ul>
        <li>Are pregnant or breastfeeding</li>
        <li>Have untreated cavities or gum disease</li>
        <li>Are under 16 years old</li>
        <li>Have very sensitive teeth that haven&apos;t been evaluated</li>
      </ul>
      <p>
        We always do an exam before any whitening treatment to make sure your
        teeth and gums are healthy enough for it.
      </p>

      <h2>How Long Do Results Last?</h2>
      <p>
        Professional whitening results typically last <strong>1 to 3 years</strong>,
        depending on your habits. Things that stain teeth faster include coffee,
        tea, red wine, and tobacco. Touch-up treatments can extend your results.
      </p>

      <h2>The Bottom Line</h2>
      <p>
        Professional teeth whitening is safe, effective, and one of the easiest
        ways to refresh your smile. If you&apos;re curious about what whitening could
        do for you,{" "}
        <Link href="/teeth-whitening" className="text-primary font-semibold underline">
          check out our whitening services
        </Link>{" "}
        or{" "}
        <Link href="/book" className="text-primary font-semibold underline">
          request a consultation
        </Link>
        .
      </p>
    </>
  );
}

function WhyYouNeedNightGuard() {
  return (
    <>
      <p>
        Here&apos;s something most people don&apos;t realize: if you grind or
        clench your teeth at night, you could be putting <strong>over 250
        pounds of force</strong> on your teeth while you sleep. That&apos;s
        enough to crack teeth, wear down enamel, and cause chronic jaw pain —
        all without you even knowing it&apos;s happening.
      </p>
      <p>
        A night guard is one of the simplest and most effective ways to protect
        your teeth. And getting a custom one from your dentist makes a real
        difference. Here&apos;s why.
      </p>

      <h2>What Is Teeth Grinding (Bruxism)?</h2>
      <p>
        Teeth grinding — technically called <strong>bruxism</strong> — is when
        you clench or grind your teeth, usually during sleep. Most people who
        grind have no idea they do it. Stress, anxiety, sleep disorders, and
        even an off bite can trigger it.
      </p>
      <p>Common signs include:</p>
      <ul>
        <li>Waking up with jaw soreness or headaches</li>
        <li>Teeth that look flat, chipped, or worn down</li>
        <li>Tooth sensitivity that wasn&apos;t there before</li>
        <li>Tight or tired jaw muscles</li>
        <li>Your partner hearing you grind at night</li>
      </ul>
      <p>
        If any of that sounds familiar, there&apos;s a good chance you&apos;re
        grinding.
      </p>

      <h2>What Happens If You Don&apos;t Treat It</h2>
      <p>
        Left unchecked, grinding causes real damage over time. We&apos;re
        talking:
      </p>
      <ul>
        <li>
          <strong>Cracked or fractured teeth</strong> — which can mean crowns,
          root canals, or even extractions
        </li>
        <li>
          <strong>Worn enamel</strong> — once it&apos;s gone, it doesn&apos;t
          come back
        </li>
        <li>
          <strong>TMJ problems</strong> — jaw pain, clicking, difficulty
          opening your mouth
        </li>
        <li>
          <strong>Chronic headaches and neck pain</strong> — grinding puts
          tension on muscles throughout your head and neck
        </li>
        <li>
          <strong>Damaged dental work</strong> — fillings, crowns, and veneers
          can crack from the pressure
        </li>
      </ul>
      <p>
        The cost of treating these problems adds up fast. A night guard is a
        fraction of the cost of a single crown.
      </p>

      <h2>How a Night Guard Protects Your Teeth</h2>
      <p>
        A night guard creates a barrier between your upper and lower teeth. It
        absorbs the grinding force so your teeth don&apos;t have to. It also
        helps relax your jaw muscles, which reduces clenching and the headaches
        and soreness that come with it.
      </p>
      <p>Think of it like a seatbelt for your teeth — you hope you
        don&apos;t need it, but you&apos;ll be glad it&apos;s there.</p>

      <h2>Why a Custom Night Guard Beats Store-Bought</h2>
      <p>
        You&apos;ve probably seen night guards at the drugstore for $20-$30.
        They technically exist, but here&apos;s why most dentists (including us)
        don&apos;t recommend them:
      </p>
      <ul>
        <li>
          <strong>Poor fit</strong> — boil-and-bite guards are bulky and
          uncomfortable. Most people stop wearing them within a few weeks.
        </li>
        <li>
          <strong>Can shift your bite</strong> — a badly fitting guard can
          actually move your teeth over time, creating new problems.
        </li>
        <li>
          <strong>Wear out quickly</strong> — store-bought guards break down
          in a few months. Custom guards last 5-10 years.
        </li>
        <li>
          <strong>Less protection</strong> — thinner material and loose fit
          means less force absorption where it counts.
        </li>
      </ul>
      <p>
        A custom night guard is made from exact impressions of <em>your</em>
        {" "}teeth. It fits perfectly, stays comfortable all night, and
        actually does the job it&apos;s supposed to do.
      </p>

      <h2>What Getting a Custom Night Guard Looks Like</h2>
      <p>It&apos;s a simple two-visit process:</p>
      <ul>
        <li>
          <strong>Visit 1:</strong> We take digital impressions of your teeth
          (quick, comfortable, no gooey molds). These get sent to a lab where
          your guard is custom-fabricated.
        </li>
        <li>
          <strong>Visit 2:</strong> You come back to pick it up. We check the
          fit, make any adjustments, and you&apos;re good to go.
        </li>
      </ul>
      <p>
        That&apos;s it. Most patients say they notice a difference in how they
        feel within the first week — less jaw tension, fewer headaches, better
        sleep.
      </p>

      <h2>Who Should Get a Night Guard?</h2>
      <p>If you experience any of the following, a night guard is worth
        discussing:</p>
      <ul>
        <li>You wake up with jaw pain or morning headaches</li>
        <li>Your teeth show signs of wear or flattening</li>
        <li>You&apos;ve cracked or chipped a tooth with no obvious cause</li>
        <li>You feel tension in your jaw throughout the day</li>
        <li>Your partner says you grind at night</li>
        <li>You deal with a lot of stress (who doesn&apos;t?)</li>
      </ul>
      <p>
        Dr. Buchwald can spot the signs of grinding during a routine exam —
        even if you didn&apos;t know you were doing it.
      </p>

      <h2>Protect Your Smile</h2>
      <p>
        A custom night guard is one of the best investments you can make for
        your teeth. It prevents damage before it happens, saves you money on
        bigger treatments down the road, and helps you sleep more comfortably.
      </p>
      <p>
        If you think you might be grinding,{" "}
        <Link href="/book" className="text-primary font-semibold underline">
          request an appointment
        </Link>{" "}
        and we&apos;ll take a look. We&apos;ll tell you honestly whether a
        night guard makes sense for you.
      </p>
    </>
  );
}

/* ─── Content map ─── */

const contentMap: Record<string, () => React.ReactNode> = {
  "what-to-expect-first-dental-visit": FirstDentalVisit,
  "invisalign-vs-braces": InvisalignVsBraces,
  "dental-implants-cost-texas": DentalImplantsCost,
  "signs-you-need-dentist": SignsYouNeedDentist,
  "is-teeth-whitening-safe": TeethWhiteningSafe,
  "why-you-need-a-night-guard": WhyYouNeedNightGuard,
};

/* ─── FAQ Accordion ─── */

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-4 text-left gap-4"
      >
        <span className="font-semibold text-gray-900 text-[15px]">{q}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          className="text-primary text-lg flex-shrink-0 font-bold"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="text-gray-500 text-sm leading-relaxed pb-4">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Page Component ─── */

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;

  const post = blogPosts.find((p) => p.slug === slug);
  const Content = contentMap[slug];

  if (!post || !Content) {
    notFound();
  }

  return (
    <>
      {/* Hero */}
      <section className="py-10 sm:py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/blog"
              className="text-primary text-sm font-semibold hover:underline mb-6 inline-block"
            >
              &larr; Back to Blog
            </Link>
            <div className="flex items-center gap-3 text-xs text-gray-400 mb-4">
              <span>{post.date}</span>
              <span>&middot;</span>
              <span>{post.readTime}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-[1.1] mb-6">
              {post.title}
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed">
              {post.excerpt}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="mx-auto max-w-3xl px-4">
          <motion.article
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-xl p-6 sm:p-10 prose prose-gray max-w-none
              prose-headings:font-extrabold prose-headings:text-gray-900 prose-headings:mt-8 prose-headings:mb-3
              prose-p:text-gray-500 prose-p:text-[15px] prose-p:leading-relaxed prose-p:mb-4
              prose-li:text-gray-500 prose-li:text-[15px]
              prose-ul:mb-4 prose-ul:space-y-1
              prose-strong:text-gray-700"
          >
            <Content />
          </motion.article>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="mx-auto max-w-2xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Common Questions
            </h2>
          </motion.div>
          <div className="bg-gray-50 rounded-xl p-6">
            {post.faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
      <FAQSchema faqs={post.faqs} />
      <BreadcrumbSchema
        items={[
          { name: "Blog", href: "/blog" },
          { name: post.title, href: `/blog/${post.slug}` },
        ]}
      />
    </>
  );
}
