export type BlogPost = {
  title: string;
  slug: string;
  date: string;
  readTime: string;
  excerpt: string;
  faqs: { q: string; a: string }[];
};

export const blogPosts: BlogPost[] = [
  {
    title: "How Often Should You Really Go to the Dentist?",
    slug: "how-often-should-you-go-to-dentist",
    date: "April 23, 2026",
    readTime: "2 min read",
    excerpt:
      "You've heard the 6-month rule your whole life — but is it always enough? Here's what actually determines how often you should see your dentist.",
    faqs: [
      { q: "Is every 6 months really enough for dental checkups?", a: "For most healthy adults, yes — twice a year is the standard recommendation. But if you have gum disease, diabetes, or a history of cavities, your dentist may recommend visits every 3 to 4 months." },
      { q: "What happens if I skip dental checkups for a year?", a: "Small issues like early cavities or gum inflammation can progress silently. What could've been a simple filling might become a root canal or crown. Regular visits catch things early when they're cheaper and easier to fix." },
      { q: "Does dental insurance cover two cleanings a year?", a: "Most PPO plans cover two preventive visits per year at 100%. Some plans even cover a third visit if you have gum disease. Our team will verify your benefits so you know exactly what's covered." },
      { q: "How do I know if I need to go more than twice a year?", a: "Dr. Buchwald will let you know based on your gum health, cavity history, and overall risk factors. If you smoke, have diabetes, or are prone to buildup, more frequent visits help keep things under control." },
    ],
  },
  {
    title: "When Should Kids Start Going to the Dentist?",
    slug: "when-should-kids-start-dentist",
    date: "April 16, 2026",
    readTime: "2 min read",
    excerpt:
      "Most parents wait too long for their child's first dental visit. Here's what the ADA recommends and how to make early visits a positive experience.",
    faqs: [
      { q: "What age should a child first see a dentist?", a: "The ADA recommends a first visit by age 1 or within 6 months of the first tooth appearing — whichever comes first. Early visits help catch issues and get kids comfortable with the dentist." },
      { q: "What happens at a toddler's first dental appointment?", a: "It's very gentle — a quick look at teeth and gums, basic cleaning if needed, and a chat with parents about brushing, diet, and development. The goal is to make it a positive experience." },
      { q: "Does Buchwald Family Dentistry see kids?", a: "Absolutely. We're a family practice and see patients of all ages, from toddlers to grandparents. Dr. Buchwald is great with kids and knows how to make them feel comfortable." },
      { q: "How do I prepare my child for their first dental visit?", a: "Keep it simple and positive. Read a book about going to the dentist, avoid using words like 'pain' or 'shot,' and let them know the dentist is a friend who helps keep their smile healthy." },
    ],
  },
  {
    title: "Does Dental Insurance Cover Invisalign?",
    slug: "does-insurance-cover-invisalign",
    date: "April 9, 2026",
    readTime: "2 min read",
    excerpt:
      "Invisalign isn't as out of reach as you think. Here's how insurance, financing, and flexible spending can make clear aligners affordable.",
    faqs: [
      { q: "Does PPO dental insurance cover Invisalign?", a: "Many PPO plans include orthodontic benefits that apply to Invisalign — typically covering $1,000 to $2,000 of the total cost. Our team will check your specific plan before you commit to anything." },
      { q: "How much does Invisalign cost out of pocket?", a: "After insurance, most patients pay between $2,000 and $4,500 out of pocket. We offer monthly financing through Cherry so you can break that into manageable payments." },
      { q: "Can I use my HSA or FSA for Invisalign?", a: "Yes. Invisalign is considered a qualified medical expense, so you can use your HSA or FSA funds to cover part or all of your out-of-pocket cost." },
      { q: "Does Buchwald Family Dentistry offer payment plans for Invisalign?", a: "We do. We offer flexible financing with Cherry, including 0% APR options. Our coordinator Denielle will walk you through everything so there are no surprises." },
    ],
  },
  {
    title: "How to Choose the Right Dentist in Richardson, TX",
    slug: "how-to-choose-dentist-richardson-tx",
    date: "April 2, 2026",
    readTime: "2 min read",
    excerpt:
      "Finding a dentist you actually trust isn't easy. Here's what to look for — and what to avoid — when choosing a dental office in Richardson.",
    faqs: [
      { q: "What should I look for in a dentist in Richardson, TX?", a: "Look for strong Google reviews, modern technology, a welcoming team, and transparent pricing. A good dentist will never pressure you into treatment you don't need." },
      { q: "Does Buchwald Family Dentistry accept new patients?", a: "Yes — we're always welcoming new patients from Richardson, Plano, Allen, Garland, and the surrounding DFW area. You can request your first appointment online." },
      { q: "How do I know if a dentist is good?", a: "Check Google and Yelp reviews, look at their website for before-and-after photos, and pay attention to how the front desk treats you. First impressions matter — if the team is warm and organized, that usually reflects the whole practice." },
      { q: "Does Buchwald Family Dentistry take my insurance?", a: "We accept most major PPO plans and will verify your benefits before any treatment. If you don't have insurance, we offer a $129 new patient special and flexible financing options." },
    ],
  },
  {
    title: "Why You Need a Night Guard (And Why a Custom One Is Worth It)",
    slug: "why-you-need-a-night-guard",
    date: "March 17, 2026",
    readTime: "2 min read",
    excerpt:
      "Grinding your teeth at night can cause serious damage over time. Here's why a custom night guard from your dentist is one of the best investments you can make for your smile.",
    faqs: [
      { q: "How do I know if I grind my teeth at night?", a: "Most people don't realize they grind. Common signs include waking up with jaw pain or headaches, noticing flat or chipped teeth, or your partner hearing you grind. Dr. Buchwald can also spot wear patterns during your exam." },
      { q: "How much does a custom night guard cost?", a: "Custom night guards typically cost between $300 and $500. Many dental insurance plans cover part or all of the cost. Our team will check your benefits before you commit to anything." },
      { q: "How long does a custom night guard last?", a: "With proper care, a custom night guard from our office lasts 5 to 10 years. Compare that to store-bought guards that wear out in a few months — the investment pays for itself." },
      { q: "Can I use a store-bought night guard instead?", a: "You can, but they're bulky, don't fit well, and can actually shift your bite over time. A custom guard is made from exact impressions of your teeth for a precise, comfortable fit that actually protects you." },
    ],
  },
  {
    title: "What to Expect at Your First Dental Visit",
    slug: "what-to-expect-first-dental-visit",
    date: "March 10, 2026",
    readTime: "2 min read",
    excerpt:
      "Nervous about your first appointment? Here's exactly what happens, what to bring, and how we make sure you feel comfortable from the moment you walk in.",
    faqs: [
      { q: "How long does a first dental visit take?", a: "Most first visits take about 60 to 90 minutes. That includes a comprehensive exam, X-rays, a cleaning, and time to talk with Dr. Buchwald about your dental health goals." },
      { q: "What should I bring to my first appointment?", a: "Bring a valid photo ID, your insurance card (if you have one), and a list of any medications you're currently taking. If you have recent dental records or X-rays, those are helpful too." },
      { q: "Do I need insurance to be seen?", a: "Nope. We welcome patients with or without insurance. We also offer flexible payment options and can walk you through everything before any treatment begins." },
      { q: "What if I have dental anxiety?", a: "You're not alone — a lot of our patients feel the same way. We take things at your pace, explain everything before we do it, and our team is genuinely great at making people feel at ease." },
    ],
  },
  {
    title: "Invisalign vs. Braces: Which Is Right for You?",
    slug: "invisalign-vs-braces",
    date: "February 24, 2026",
    readTime: "2 min read",
    excerpt:
      "Thinking about straightening your teeth? Here's an honest comparison of Invisalign and traditional braces — cost, comfort, timeline, and which one might work better for your lifestyle.",
    faqs: [
      { q: "Is Invisalign more expensive than braces?", a: "They're actually pretty comparable in cost these days. Invisalign typically ranges from $3,500 to $6,000, and traditional braces are similar. We'll give you exact pricing during your consultation." },
      { q: "How long does Invisalign take compared to braces?", a: "Most Invisalign cases take 6 to 18 months, while braces typically take 12 to 24 months. It depends on the complexity of your case." },
      { q: "Can Invisalign fix serious alignment issues?", a: "Invisalign has come a long way and can handle most cases — including crowding, gaps, and bite issues. For very complex cases, braces might still be the better option, and we'll be upfront about that." },
      { q: "Does Buchwald Family Dentistry do both Invisalign and braces?", a: "We offer Invisalign at our office. During your consultation, we'll evaluate your teeth and recommend the best option for your specific situation." },
    ],
  },
  {
    title: "How Much Do Dental Implants Cost in Texas?",
    slug: "dental-implants-cost-texas",
    date: "February 10, 2026",
    readTime: "2 min read",
    excerpt:
      "Dental implants are an investment in your smile and your health. Here's a real breakdown of what they cost in Texas, what affects the price, and how to make them affordable.",
    faqs: [
      { q: "How much does a single dental implant cost in Texas?", a: "A single dental implant typically costs between $3,000 and $5,000 in Texas. This includes the implant post, abutment, and crown. Costs can vary based on your specific needs." },
      { q: "Does dental insurance cover implants?", a: "Some plans cover a portion of implant treatment — usually 25% to 50% of the cost. Our insurance coordinator Denielle will check your benefits and let you know exactly what's covered before you commit to anything." },
      { q: "Are there payment plans for dental implants?", a: "Absolutely. We offer flexible financing options so you can break the cost into manageable monthly payments. We'll walk you through everything during your consultation." },
      { q: "Why are implants worth the investment?", a: "Implants can last 25+ years (often a lifetime) with proper care. Compare that to bridges (5-15 years) or dentures (5-10 years) and the long-term cost actually works in your favor — plus they protect your jawbone and look completely natural." },
    ],
  },
  {
    title: "5 Signs You Need to See a Dentist ASAP",
    slug: "signs-you-need-dentist",
    date: "January 28, 2026",
    readTime: "1 min read",
    excerpt:
      "Some dental issues can't wait. Here are five warning signs that mean you should call your dentist today — not next month.",
    faqs: [
      { q: "What counts as a dental emergency?", a: "Severe toothache, a knocked-out tooth, a broken or cracked tooth, swelling in your face or gums, and uncontrolled bleeding are all dental emergencies. If you're in pain or something doesn't feel right, call us." },
      { q: "Does Buchwald Family Dentistry handle emergencies?", a: "Yes. We accommodate emergency patients and do our best to get you in the same day. Call us at (972) 644-3280 and we'll take care of you." },
      { q: "Can I go to the ER for a dental emergency?", a: "You can, but ERs typically can only manage pain and prescribe antibiotics. They usually can't do dental procedures. A dentist is almost always the better call for dental emergencies." },
      { q: "How can I prevent dental emergencies?", a: "Regular checkups and cleanings are the best prevention. Wearing a mouthguard during sports, avoiding chewing on ice or hard objects, and not using your teeth as tools all help too." },
    ],
  },
  {
    title: "Is Teeth Whitening Safe? What Your Dentist Wants You to Know",
    slug: "is-teeth-whitening-safe",
    date: "January 14, 2026",
    readTime: "2 min read",
    excerpt:
      "Teeth whitening is one of the most popular cosmetic treatments — but is it actually safe? Here's what you need to know before you brighten your smile.",
    faqs: [
      { q: "Is professional teeth whitening safe?", a: "Yes. Professional whitening is very safe when done under a dentist's supervision. We use controlled concentrations of whitening agents and protect your gums throughout the process." },
      { q: "Will teeth whitening make my teeth sensitive?", a: "Some temporary sensitivity is normal and usually goes away within a day or two. We can recommend desensitizing toothpaste and adjust the treatment if needed." },
      { q: "How long do whitening results last?", a: "Professional results typically last 1 to 3 years depending on your habits. Avoiding coffee, tea, red wine, and tobacco will help your results last longer." },
      { q: "Can I whiten my teeth if I have fillings or crowns?", a: "Whitening works on natural teeth only — fillings, crowns, and veneers won't change color. We'll evaluate your smile and let you know the best approach so everything looks consistent." },
    ],
  },
];
