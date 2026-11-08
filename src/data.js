// Site content — edit this file to update copy, pricing and contact details.

export const site = {
  name: "Samuel Kyeremeh",
  initials: "SK",
  role: "Web developer",
  location: "Ghana",
  email: "affum3331@gmail.com",
  headline: "Websites, online stores & web apps built to sell.",
  intro:
    "I design and build fast, modern websites for businesses — live in 2–4 weeks, from GHS 3,500. No templates on repeat, no monthly lock-in. You own the code.",
};

export const socialLinks = {
  github: "https://github.com/kyeremehS",
  linkedin: "https://www.linkedin.com/in/samuelkyeremeh/",
  twitter: "https://twitter.com/samuelkyeremeh",
};

export const nav = [
  { label: "Services", to: "/services" },
  { label: "Pricing", to: "/pricing" },
  { label: "Work", to: "/work" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export const stats = [
  { value: "GHS 3,500", label: "Starting price" },
  { value: "2–4 weeks", label: "Typical launch" },
  { value: "100%", label: "Code ownership" },
  { value: "1 year", label: "Domain, hosting & SSL" },
];

export const stack = [
  "React",
  "TypeScript",
  "Node.js",
  "Tailwind CSS",
  "PostgreSQL",
  "Python",
  "Vite",
  "Stripe / Paystack",
];

export const services = [
  {
    id: "websites",
    index: "01",
    title: "Business Websites",
    short: "Brochure sites, landing pages and portfolios that load fast and rank on Google.",
    body: "A clear, credible home for your business — built around what your customers actually need to do: call you, message you on WhatsApp, request a quote, or book your service.",
    points: [
      "Custom design shaped around your brand and offer",
      "Mobile-first, loads in under two seconds",
      "Contact forms, WhatsApp buttons and click-to-call",
      "On-page SEO, Google Search Console and analytics",
      "Hosting, domain, SSL and business emails set up for you",
      "Content upload and a training session before handover",
    ],
    deliverable: "Typical delivery: 1–2 weeks",
    price: "from GHS 3,500",
  },
  {
    id: "stores",
    index: "02",
    title: "Online Stores",
    short: "Sell online with Mobile Money and cards, managed from one simple dashboard.",
    body: "A real shop, not a catalogue PDF. Products, inventory, checkout and order emails in one place, with the payment methods Ghanaians actually use.",
    points: [
      "Product catalogue with photos, variants and stock",
      "Cart and checkout tuned for phones",
      "Mobile Money and card payments (Moolre + Paystack)",
      "Order confirmation emails and WhatsApp order alerts",
      "Discounts, delivery zones and basic reporting",
      "Store setup, product upload and staff training",
    ],
    deliverable: "Typical delivery: 2–3 weeks",
    price: "from GHS 5,000",
  },
  {
    id: "web-apps",
    index: "03",
    title: "Web Apps & Dashboards",
    short: "Booking systems, portals and internal tools that replace your spreadsheets.",
    body: "When off-the-shelf software doesn't fit the way your business runs, we build the system around your workflow — bookings, approvals, staff roles, reports.",
    points: [
      "User accounts, profiles and booking history",
      "Availability calendars and enquiry-to-booking flows",
      "Role-based access for staff and admins",
      "Dashboards: revenue, occupancy, orders, KPIs",
      "Automated emails, reminders and notifications",
      "APIs and integrations with the tools you already use",
    ],
    deliverable: "Typical delivery: 3–4 weeks",
    price: "from GHS 7,000",
  },
];

export const packages = [
  {
    id: "starter",
    name: "Starter",
    tagline: "Business Website",
    price: "GHS 3,500",
    pitch:
      "The essential foundation — go live with a professional site and start taking enquiries.",
    delivery: "2 weeks",
    popular: false,
    features: [
      "Up to 5 pages, designed for your brand",
      "Mobile-first, fast-loading build",
      "Contact form + WhatsApp enquiry button",
      "On-page SEO setup and sitemap",
      "Google Analytics and Search Console",
      "1-year domain, hosting, SSL, 3 business emails",
      "Content upload and image optimisation",
      "Admin training + 1 month post-launch support",
    ],
    missing: [
      "Online store or payments",
      "Blog / CMS publishing",
      "User accounts or dashboards",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    tagline: "Online Store",
    price: "GHS 5,000",
    pitch:
      "Everything in Starter, plus a working store that takes payments while you sleep.",
    delivery: "2–3 weeks",
    popular: true,
    features: [
      "Everything in Starter",
      "Online store: products, cart, checkout",
      "Mobile Money + card payments (Moolre / Paystack)",
      "Order confirmation emails + WhatsApp alerts",
      "Upload up to 20 products, stock tracking",
      "Blog / news section you can publish to",
      "Discount codes and delivery options",
      "Admin training + 3 months post-launch support",
    ],
    missing: ["Custom app logic and user accounts"],
  },
  {
    id: "premium",
    name: "Premium",
    tagline: "Web App",
    price: "GHS 7,000",
    pitch:
      "Everything in Growth, plus the custom system your business actually runs on.",
    delivery: "3–4 weeks",
    popular: false,
    features: [
      "Everything in Growth",
      "Custom web app: bookings, portal or dashboard",
      "User accounts with booking / order history",
      "Role-based access for staff",
      "Availability calendar and approval workflows",
      "Advanced SEO, analytics and speed tuning",
      "Installable app experience (PWA)",
      "Admin training + 6 months priority support",
    ],
    missing: [],
  },
];

export const includedInAll = [
  "1-year domain, hosting, SSL and 3 branded business emails",
  "Mobile-first responsive design",
  "WhatsApp enquiry integration",
  "Content upload and image optimisation",
  "Notification / email template setup",
  "Admin training before handover",
  "Post-launch support window",
  "You own the website, code and data",
];

export const terms = [
  "Features not listed are treated as scope extensions and quoted separately.",
  "Project timing depends on timely feedback, content delivery and approvals.",
  "You provide content, images, business details and any payment credentials on time.",
  "Third-party fees (payment gateway, SMS gateways, external services) are billed to you at cost.",
  "Commercial terms, including deposit and payment schedule, are confirmed in writing before kickoff.",
];

export const process = [
  {
    step: "01",
    title: "Discovery & scope",
    body: "A short call about your business, customers and goals. You get a fixed quote, a page plan and a launch date — in writing.",
  },
  {
    step: "02",
    title: "Design & content",
    body: "I design the key pages and gather your content — photos, text, prices. You review once, we agree, we build.",
  },
  {
    step: "03",
    title: "Build & integrate",
    body: "Development, payments, forms, SEO and speed work. You get a private link to follow progress and leave feedback.",
  },
  {
    step: "04",
    title: "Launch & support",
    body: "We go live, I train your team, and I stay on call for your support window — 1, 3 or 6 months depending on package.",
  },
];

export const faqs = [
  {
    q: "How much does a website cost in Ghana?",
    a: "Starter sites from GHS 3,500, online stores from GHS 5,000, and custom web apps from GHS 7,000. The final quote is fixed after a short call — no surprise invoices.",
  },
  {
    q: "How long does it take to launch?",
    a: "Most projects go live in 2–4 weeks from kickoff. The biggest variable is how quickly content and feedback come back from your side.",
  },
  {
    q: "Do I actually own the website?",
    a: "Yes. The code, domain and data are yours outright. The domain is registered in your name, there are no monthly lock-in fees, and you can move hosts whenever you want.",
  },
  {
    q: "Can customers pay with Mobile Money?",
    a: "Yes. Stores and booking flows integrate MTN MoMo, Telecel Cash, AirtelTigo Money and cards through Moolre and Paystack.",
  },
  {
    q: "What happens after launch?",
    a: "Each package includes a support window — 1 month on Starter, 3 months on Growth, 6 months of priority support on Premium — covering fixes, small content changes and questions. Optional maintenance retainers are available after that.",
  },
  {
    q: "Do you work with clients outside Accra?",
    a: "Yes. Most projects run remotely across Ghana and beyond — WhatsApp, video calls and shared progress links. On-site sessions can be arranged when needed.",
  },
  {
    q: "Can you redesign a site I already have?",
    a: "Yes. Redesigns, migrations and rebuilds of slow or dated sites are a large part of the work. We keep what's working and fix what isn't.",
  },
  {
    q: "How do we start?",
    a: "Email me a line about your project. We hop on a short call, you get a fixed quote and timeline, and once terms are confirmed we schedule kickoff.",
  },
];

export const workStatus = {
  headline: "First client builds are in progress.",
  body: "This is a new studio, so I'd rather show you honest work than borrow someone else's logos. Case studies go live here the moment each project launches — screenshots, stack, and the result it produced.",
  takingOn: [
    {
      title: "Business websites",
      body: "Clinics, shops, services, schools and NGOs that need a credible presence.",
    },
    {
      title: "Online stores",
      body: "Brands selling physical products who want Mobile Money checkout, not just WhatsApp.",
    },
    {
      title: "Booking & admin systems",
      body: "Studios, rentals, events and teams running bookings from a spreadsheet.",
    },
    {
      title: "Dashboards & internal tools",
      body: "Replacing manual reporting with one screen your staff actually uses.",
    },
  ],
};

export const about = {
  intro:
    "I build software for people with something real to sell. After years in data and machine learning, I'm putting that engineering background to work on the thing small businesses need most: a website that earns its keep.",
  story: [
    "I studied Computer Science at KNUST, then spent my early career close to data — first as a data analyst at Npontu Technologies, then through an apprenticeship at Ghana Tech Lab. Since then I've worked in applied machine learning research, led tech education initiatives across Ghana as campus lead for TechStripped Africa, and shipped real systems.",
    "Today I work with businesses directly: understanding what they sell, who buys it, and building the site, store or tool that connects the two. Fewer clients, more attention, no agency middle layer.",
  ],
  timeline: [
    {
      year: "2025",
      title: "Applied ML research",
      organisation: "Gigsama",
      body: "Building and deploying machine learning systems for real-world problems.",
    },
    {
      year: "2024",
      title: "Campus lead",
      organisation: "TechStripped Africa",
      body: "Leading tech education initiatives and community programmes across Ghana.",
    },
    {
      year: "2023",
      title: "Data science apprenticeship",
      organisation: "Ghana Tech Lab",
      body: "Intensive program covering analysis, modelling and deployment.",
    },
    {
      year: "2022",
      title: "First role & university",
      organisation: "Npontu Technologies / KNUST",
      body: "Data analyst internship while starting a BSc in Computer Science.",
    },
  ],
  skills: [
    {
      category: "Languages",
      items: "TypeScript, Python, SQL, HTML/CSS",
    },
    {
      category: "Frameworks & tools",
      items: "React, Vite, Node.js, Tailwind CSS, Git, Framer Motion",
    },
    {
      category: "Data & payments",
      items: "PostgreSQL, pandas, Power BI, Paystack / Moolre integrations",
    },
    {
      category: "Practice",
      items: "UI design, on-page SEO, performance tuning, accessibility",
    },
  ],
  education: {
    institution: "Kwame Nkrumah University of Science and Technology",
    url: "https://knust.edu.gh",
    degree: "BSc Computer Science",
    period: "Jan 2022 – Sep 2025 · Kumasi",
  },
};

export const resume = {
  url: "/resume.pdf",
  label: "Download CV",
};

export const stints = [
  {
    role: "Research engineer",
    company: "Gigsama",
    url: "https://gigsama.com",
    description: "applied ML research",
  },
  {
    role: "Campus lead",
    company: "TechStripped Africa",
    url: "https://techstripped.com/",
    description: "tech education initiatives across Ghana",
  },
  {
    role: "Data science trainee",
    company: "Ghana Tech Lab",
    url: "https://www.ghanatechlab.com/",
    description: "apprenticeship program",
  },
  {
    role: "Data analyst intern",
    company: "Npontu Technologies",
    url: "https://npontu.com/",
    description: "data analysis and insights",
  },
];
