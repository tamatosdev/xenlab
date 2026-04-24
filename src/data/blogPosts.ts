export interface BlogPost {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  content: ContentBlock[];
}

type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "quote"; text: string; author?: string }
  | { type: "list"; items: string[] };

export const blogPosts: BlogPost[] = [
  {
    slug: "founders-cloning-themselves-ai-content",
    category: "AI Strategy",
    title: "How Founders Are Cloning Themselves to Scale Content Without Burning Out",
    excerpt:
      "AI avatar technology has quietly crossed the threshold from novelty to necessity. Here's why the top operators are betting on it now.",
    date: "Apr 18, 2026",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&q=80&auto=format&fit=crop",
    content: [
      {
        type: "paragraph",
        text: "Two years ago, AI avatar technology was a party trick. You'd demo it at a conference, people would say 'wow' and then go back to recording themselves on their iPhone at 6am before the kids woke up. That's no longer the case.",
      },
      {
        type: "paragraph",
        text: "The quality threshold has been crossed. Today's AI avatars are indistinguishable from the real thing in most viewing contexts — a LinkedIn feed, a YouTube video, a webinar replay. And the founders who figured this out early are quietly compounding an enormous content advantage.",
      },
      {
        type: "heading",
        text: "The math no one talks about",
      },
      {
        type: "paragraph",
        text: "A typical founder who commits to content will record maybe three to five videos a month. That's if they're disciplined and have a good system. With AI cloning, that same founder can publish thirty to fifty pieces of content per month — across multiple formats, platforms, and even languages — without recording a single additional take.",
      },
      {
        type: "quote",
        text: "The ROI on time alone paid for it in month one. I went from 3 posts a week to 15 — without a single extra hour on camera.",
        author: "Marcus Vale, Founder · Vale Capital",
      },
      {
        type: "heading",
        text: "Why now and not two years ago",
      },
      {
        type: "list",
        items: [
          "Voice cloning accuracy has improved by over 300% since 2024 — listeners can no longer tell the difference",
          "Lip-sync fidelity is now good enough for close-up talking-head content",
          "Training time has collapsed from weeks to hours",
          "Cost per video has dropped from $500+ to under $20 at scale",
        ],
      },
      {
        type: "paragraph",
        text: "The operators who are winning in 2026 aren't working harder — they're working once and distributing forever. Your avatar doesn't need sleep, doesn't get nervous on camera, and can film in three languages simultaneously.",
      },
      {
        type: "heading",
        text: "What this means for you",
      },
      {
        type: "paragraph",
        text: "The window to build a content moat is open right now — but it won't be forever. As AI content becomes table stakes, the advantage will go to whoever got there first and built the audience while others were still debating whether it was 'authentic.' Authenticity comes from your ideas, your positioning, and your point of view. Not from how many hours you spent in front of a camera.",
      },
    ],
  },
  {
    slug: "90-day-content-playbook",
    category: "Content Engine",
    title: "The 90-Day Content Playbook: From Zero Presence to Inbound Pipeline",
    excerpt:
      "Most founders overthink content strategy. We break down the exact framework we use to take clients from silent to visible in three months.",
    date: "Apr 10, 2026",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=1200&q=80&auto=format&fit=crop",
    content: [
      {
        type: "paragraph",
        text: "Every founder we work with asks the same question: 'How long until I see results?' Our honest answer is 90 days — if you follow the framework. Most agencies will tell you six to twelve months. We think that's a symptom of bad strategy, not patient execution.",
      },
      {
        type: "heading",
        text: "Month one: Foundation",
      },
      {
        type: "paragraph",
        text: "The first 30 days are not about going viral. They're about building the infrastructure that will compound. This means locking in your positioning (what you stand for, who you're for, what you're against), identifying your three to five content pillars, and producing a library of 30 to 50 base assets — talking-head clips, written frameworks, and data-backed insights — that we'll distribute across platforms.",
      },
      {
        type: "list",
        items: [
          "Positioning workshop: 3-hour deep-dive into your authority and audience",
          "Avatar training: voice, likeness, and tone calibration",
          "Pillar definition: 3-5 content themes mapped to your ICP's biggest problems",
          "Asset production: 40+ base pieces ready for distribution",
        ],
      },
      {
        type: "heading",
        text: "Month two: Distribution",
      },
      {
        type: "paragraph",
        text: "With the library built, month two is full distribution — LinkedIn, YouTube Shorts, Instagram Reels, X, and newsletter. We test hooks, formats, and angles systematically. Every post is a data point. By week eight, we typically have a clear picture of which two or three formats are driving the most qualified engagement.",
      },
      {
        type: "quote",
        text: "In 90 days we went from invisible to inbound. XENLabs built us a content engine that runs itself.",
        author: "Priya Anand, C-Suite Executive Coach",
      },
      {
        type: "heading",
        text: "Month three: Conversion",
      },
      {
        type: "paragraph",
        text: "Month three is where the engine starts paying for itself. By now you have an audience that knows who you are, trusts your expertise, and is ready to be invited into your world. We add conversion-oriented content — case studies, offers, call-to-action sequences — that turn followers into leads.",
      },
      {
        type: "paragraph",
        text: "The founders who stick with this for 90 days consistently report two to five qualified inbound enquiries per week by the end of month three. The ones who stop at day 60 miss the compounding effect entirely.",
      },
    ],
  },
  {
    slug: "linkedin-posts-not-converting",
    category: "Industry Insight",
    title: "Why Your LinkedIn Posts Aren't Converting — And the Fix Is Simpler Than You Think",
    excerpt:
      "Volume without signal is noise. We audited 200 executive profiles and found the same three mistakes costing them qualified leads every week.",
    date: "Mar 29, 2026",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1432888622747-4eb9a8f5a07d?w=1200&q=80&auto=format&fit=crop",
    content: [
      {
        type: "paragraph",
        text: "We audited 200 founder and executive LinkedIn profiles over the past quarter. Every single one of them had the same problem: they were posting consistently but not converting. Impressions were fine. Likes were fine. But qualified DMs? Almost none.",
      },
      {
        type: "heading",
        text: "Mistake 1: Posting for peers, not prospects",
      },
      {
        type: "paragraph",
        text: "The most common mistake is writing content that your industry colleagues will engage with, not content that your ideal clients are searching for. When a founder posts 'Excited to announce our Series A!' — who reacts? Other founders, investors, and journalists. Not the buyers who could actually become customers.",
      },
      {
        type: "heading",
        text: "Mistake 2: No clear point of view",
      },
      {
        type: "paragraph",
        text: "Generic insights do not build authority. 'Consistency is key in content marketing' is not a point of view — it's a platitude. The executives who convert have opinions that some people will disagree with. That tension is what creates memorable content and self-selects for the right audience.",
      },
      {
        type: "quote",
        text: "Safe content gets ignored. Polarising content gets shared. Pick a side.",
      },
      {
        type: "heading",
        text: "Mistake 3: Missing the call to action",
      },
      {
        type: "paragraph",
        text: "Most LinkedIn posts end with a vague 'what do you think?' This trains your audience to engage without acting. Every fifth to seventh post should have a clear, specific call to action — a link to book a call, a request to DM you for a resource, a direct offer. If you never ask, you never get.",
      },
      {
        type: "list",
        items: [
          "Rewrite your bio to speak to your buyer, not your resume",
          "Add one contrarian post per week to your content calendar",
          "Include a soft CTA in every third post",
          "Audit your last 20 posts — how many were for prospects vs. peers?",
        ],
      },
    ],
  },
  {
    slug: "c-suite-visibility-ai-content",
    category: "AI Strategy",
    title: "The New Playbook for C-Suite Visibility: Why Executives Are Going All-In on AI Content",
    excerpt:
      "Personal brand used to be optional for executives. In 2026 it's table stakes. Here's how the smartest operators are using AI to stay ahead.",
    date: "Mar 20, 2026",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80&auto=format&fit=crop",
    content: [
      {
        type: "paragraph",
        text: "There was a time when executives kept a deliberately low profile. The thinking was: let the product speak, stay out of the press, and focus on operations. That era is over.",
      },
      {
        type: "paragraph",
        text: "Today, enterprise buyers research the leadership team before they ever talk to sales. Investors look at your personal brand before they read your deck. Top talent follows executives on LinkedIn before they apply to your company. Your visibility is your credibility — and AI has made the cost of building it almost negligible.",
      },
      {
        type: "heading",
        text: "The executive visibility gap",
      },
      {
        type: "paragraph",
        text: "Most senior executives have enormous expertise and zero content to show for it. They've spent twenty years building deep knowledge but haven't created a single framework, article, or video that captures it. That's twenty years of compound knowledge that the market cannot see.",
      },
      {
        type: "quote",
        text: "Your expertise is invisible until it's documented. AI lets you document it at scale without it consuming your calendar.",
      },
      {
        type: "heading",
        text: "What the early adopters are doing",
      },
      {
        type: "list",
        items: [
          "Recording one 30-minute 'brain dump' session per month and turning it into 40 pieces of content",
          "Using AI avatars for evergreen educational content while appearing live for high-stakes moments",
          "Building email lists of 10,000+ buyers directly through thought-leadership content",
          "Letting their content pipeline run 24/7 while they focus on deals, not cameras",
        ],
      },
      {
        type: "paragraph",
        text: "The executives who figure this out in 2026 will have a multi-year head start on the ones who wait. Content authority compounds. The longer you wait, the harder it gets to catch up.",
      },
    ],
  },
  {
    slug: "800-to-24000-followers-case-study",
    category: "Case Study",
    title: "From 800 to 24,000 Followers in 90 Days: The Exact Strategy We Used",
    excerpt:
      "A step-by-step breakdown of the content engine we built for one of our clients — every format, every hook, every distribution channel.",
    date: "Mar 12, 2026",
    readTime: "9 min read",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80&auto=format&fit=crop",
    content: [
      {
        type: "paragraph",
        text: "In January 2026 our client Daniel — a CEO in the B2B SaaS space — had 800 LinkedIn followers and zero content presence. Ninety days later he had 24,000 followers, a weekly newsletter with 6,200 subscribers, and 12 qualified inbound enquiries in the pipeline. Here's exactly what we did.",
      },
      {
        type: "heading",
        text: "Week 1-2: Positioning",
      },
      {
        type: "paragraph",
        text: "Before we wrote a single word, we spent two weeks nailing his positioning. Daniel had tried posting before and it never gained traction — because he was posting about generic SaaS topics instead of the specific intersection where he had genuine authority: scaling revenue operations in PE-backed mid-market companies.",
      },
      {
        type: "heading",
        text: "Week 3-4: Avatar training and asset production",
      },
      {
        type: "paragraph",
        text: "We trained his AI avatar over two days of filming — capturing his voice, cadence, expressions, and gestures. From this, we produced a library of 60 base video clips covering his five content pillars. These became the source material for everything else.",
      },
      {
        type: "heading",
        text: "Month 2: The distribution blitz",
      },
      {
        type: "list",
        items: [
          "15 LinkedIn posts per week across text, carousel, and short video",
          "5 YouTube Shorts published on a MWF+weekend cadence",
          "Weekly 600-word newsletter sent every Tuesday at 7am",
          "2 podcast appearances booked using his growing profile as leverage",
        ],
      },
      {
        type: "quote",
        text: "I used to spend 6 hours a week on content. Now it's 30 minutes. My follower count has tripled and my DMs are full of people who already want to work with me.",
        author: "Daniel Reiss, CEO · Northwave",
      },
      {
        type: "heading",
        text: "The result",
      },
      {
        type: "paragraph",
        text: "By day 90, Daniel had grown from 800 to 24,000 followers, with an average post reaching 18,000 impressions. More importantly, 12 qualified pipeline conversations came directly from inbound — three of which closed within 30 days of the engagement starting. The content engine paid for itself in month two.",
      },
    ],
  },
  {
    slug: "short-form-vs-long-form-content",
    category: "Content Engine",
    title: "Short-Form vs. Long-Form: Where Founders Should Actually Be Spending Their Time",
    excerpt:
      "The debate is settled — but not how most people think. Here's the data-backed answer and how to structure a content calendar that compounds.",
    date: "Mar 5, 2026",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&q=80&auto=format&fit=crop",
    content: [
      {
        type: "paragraph",
        text: "Every few months the content marketing world has a new debate: Is short-form dead? Is long-form making a comeback? Should you be on TikTok or LinkedIn? The answer is simpler than the discourse makes it seem — and it depends entirely on where you are in your content journey.",
      },
      {
        type: "heading",
        text: "The hierarchy of content",
      },
      {
        type: "paragraph",
        text: "Here's what the data actually shows: short-form content (under 90 seconds, under 300 words) is your acquisition engine. It gets you in front of new audiences. Long-form content (newsletters, podcasts, long videos, essays) is your conversion engine. It turns cold audiences into warm buyers.",
      },
      {
        type: "heading",
        text: "If you have under 5,000 followers: go short",
      },
      {
        type: "paragraph",
        text: "Before you have an established audience, short-form is almost always the right call. The algorithmic distribution on LinkedIn, YouTube Shorts, and Instagram Reels means a great short-form piece can reach 50x your follower count. A long-form piece, with no audience to seed it, will reach almost nobody.",
      },
      {
        type: "list",
        items: [
          "Aim for 80% short-form, 20% long-form in months 1-3",
          "Every short-form piece should point to a long-form home base (newsletter or YouTube channel)",
          "Repurpose: one long-form piece = 5-10 short-form clips",
          "Test hooks ruthlessly — the first 3 seconds determine 80% of your performance",
        ],
      },
      {
        type: "heading",
        text: "When to flip the ratio",
      },
      {
        type: "paragraph",
        text: "Once you have a consistent audience of 10,000+ and an email list, you can start shifting more investment to long-form. At that point you have an audience to seed your content, and the depth of long-form will do more to convert that audience into clients than another short clip ever will.",
      },
    ],
  },
  {
    slug: "death-of-generic-content",
    category: "Industry Insight",
    title: "The Death of Generic Content: Why Authenticity at Scale Is the Only Moat Left",
    excerpt:
      "AI flooded the internet with generic content. The founders winning today are doing the opposite — and the gap is only widening.",
    date: "Feb 26, 2026",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80&auto=format&fit=crop",
    content: [
      {
        type: "paragraph",
        text: "The internet broke in 2025. Not technically — but in terms of signal-to-noise ratio. The democratisation of AI content generation meant that within 18 months, the volume of published content tripled while the quality of average content halved. The result: generic content became essentially invisible.",
      },
      {
        type: "heading",
        text: "The paradox of AI content",
      },
      {
        type: "paragraph",
        text: "Here's the irony: the same technology that made content creation cheap also made generic content worthless. When anyone can generate a 1,000-word article on 'five tips for better productivity' in 30 seconds, that article has no value. The content that cuts through is the content that only one specific human being could have created — because it comes from their unique experience, their specific perspective, and their hard-won insights.",
      },
      {
        type: "quote",
        text: "AI is a tool for scale, not a replacement for perspective. The founders winning with AI content use it to amplify their authentic voice — not to manufacture a fake one.",
      },
      {
        type: "heading",
        text: "What authenticity at scale actually looks like",
      },
      {
        type: "list",
        items: [
          "Real opinions, not 'on one hand, on the other hand' both-sidesing",
          "Specific examples from your actual experience, not hypotheticals",
          "A distinctive voice that sounds like a person, not a press release",
          "Content that will make some people say 'that's exactly right' and others say 'I disagree'",
        ],
      },
      {
        type: "paragraph",
        text: "The founders who are building the biggest audiences right now are not the ones generating the most content. They're the ones generating the most resonant content — and using AI to distribute that resonance at a scale that was impossible before.",
      },
      {
        type: "paragraph",
        text: "The moat is not volume. The moat is you.",
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
