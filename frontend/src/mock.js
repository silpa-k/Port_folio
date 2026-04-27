// Mock data for Silpa Kumari's UI/UX Portfolio
// All assets are stored locally in /public/assets so the project
// remains fully portable when pushed to GitHub.
import {
  Layers,
  Palette,
  PenTool,
  Component,
  Mail,
  Linkedin,
  FileDown,
  ArrowUpRight,
  Brain,
  Search,
  Lightbulb,
  BookOpen,
  Sparkles,
  Wrench,
} from 'lucide-react';

export const RESUME_URL = '/assets/resume.pdf';

export const profile = {
  name: 'Silpa Kumari',
  handle: '@silpa.designs',
  role: 'Multidisciplinary Designer',
  location: 'Bengaluru, India',
  email: 'silpa9211@gmail.com',
  linkedin: 'https://www.linkedin.com/in/silpa-kumari-069016294/',
  avatar: '/assets/silpa.jpg',
  about: '/assets/silpa.jpg',
  yearsExp: 3,
  shipped: 20,
  clients: 12,
};

export const heroStats = [
  { value: '20+', label: 'Projects shipped' },
  { value: '4', label: 'Disciplines' },
  { value: '∞', label: 'Curiosity' },
];

export const projects = [
  {
    id: 'nykaa',
    title: 'Nykaa — Website Redesign',
    tag: 'eCommerce · Mobile App',
    year: '2025',
    description:
      'Improving usability, personalization, and product discovery for users — a fresh take on India’s leading beauty platform.',
    cover: '/assets/nykaa.webp',
    coverFit: 'contain',
    coverBg: 'linear-gradient(135deg, #2a1825 0%, #1a0f1a 100%)',
    accent: '#FF3F8E',
    chips: ['Visual Design', 'UI Polish', 'Mobile'],
    role: 'UX/UI Designer',
    timeline: '1 week',
    tools: 'Figma',
    rich: {
      layout: [
        'overview',
        'goal',
        'research',
        'designGoals',
        'features',
        'impact',
        'future',
        'conclusion',
      ],
      heroImage: '/assets/nykaa/hero.png',
      overview:
        'Nykaa is India’s leading beauty e-commerce platform with 5M+ monthly users. Despite its strong brand presence, the app struggled with cluttered UI, poor navigation, and limited personalization — often resulting in frustrated users and higher cart abandonment rates.',
      goal: {
        text: 'Redesign the app to simplify navigation, improve product discovery, and create a personalized, inclusive shopping experience.',
        image: '/assets/nykaa/goal.png',
      },
      research: {
        summary:
          'I conducted user research with 15 participants across age groups and shopping habits to understand real pain points before opening Figma.',
        stats: [
          { value: '15', label: 'Users interviewed' },
          { value: '60%', label: 'reported difficulty finding products' },
          { value: '45%', label: 'abandoned carts due to complex navigation' },
        ],
        image: '/assets/nykaa/research.png',
      },
      designGoals: [
        {
          title: 'Decluttered UI',
          desc: 'Minimal layout with smooth, predictable navigation that respects the user’s time.',
        },
        {
          title: 'AI-powered discovery',
          desc: 'Voice & image search remove the friction of typing the “right” query.',
        },
        {
          title: 'Smart comparison',
          desc: 'Easy side-by-side evaluation so users can buy with confidence, not regret.',
        },
      ],
      features: [
        {
          n: '01',
          title: 'Clutter-Free Landing Page',
          desc: 'Reduced visual noise and simplified categories improved clarity. Hero, categories, and offers now have a clear, breathable hierarchy.',
          image: '/assets/nykaa/clutter.png',
        },
        {
          n: '02',
          title: 'Voice Assistant',
          desc: 'Search products by speaking — reduced average search time by 20% and made the experience more accessible for hands-busy moments.',
          image: '/assets/nykaa/voice.png',
          imageBg: '#FFFFFF',
        },
        {
          n: '03',
          title: 'Visual Search',
          desc: 'Upload an image to find similar products — improved discovery rate by 25%. Perfect for screenshots and inspiration from social media.',
          image: '/assets/nykaa/visual1.png',
          imageBg: '#FFFFFF',
        },
        {
          n: '04',
          title: 'Comparison Tool',
          desc: 'Side-by-side product evaluation — helped 70% of users make quicker purchase decisions, especially in skincare and foundation categories.',
          image: '/assets/nykaa/comparison.png',
          imageBg: '#FFFFFF',
        },
      ],
      impact: [
        { value: '30%', label: 'faster navigation time (task completion test)' },
        { value: '80%', label: 'preferred the redesigned flow during usability testing' },
        { value: '25%', label: 'increase in successful product discovery' },
      ],
      future: [
        'Personalized recommendations powered by AI.',
        'AR Try-On for cosmetics — virtual swatches in real time.',
        'Accessibility-first features (contrast modes, screen reader support).',
      ],
      conclusion:
        'Redesigning Nykaa was a rewarding challenge that combined user research, visual design, and accessibility thinking. The solution significantly improved usability and engagement, while aligning Nykaa’s digital presence with its premium brand identity.',
    },
  },
  {
    id: 'soapygo',
    title: 'SoapyGo — Smart Laundry App',
    tag: 'Mobile · Service App',
    year: '2025',
    description:
      'Redefining convenience and transparency in daily laundry services. From scheduling to live tracking, designed end-to-end.',
    cover: '/assets/soapygo.png',
    coverFit: 'contain',
    coverBg: 'linear-gradient(135deg, #1d3557 0%, #0a1628 100%)',
    accent: '#00F5D4',
    chips: ['UI/UX', 'Product Strategy', 'Mobile App'],
    role: 'UX/UI Designer',
    timeline: '2 weeks',
    tools: 'Figma',
    rich: {
      layout: [
        'overview',
        'goal',
        'problem',
        'solution',
        'challenges',
        'marketResearch',
        'userFlow',
        'sitemap',
        'wireframes',
        'walkthrough',
        'prototype',
        'future',
        'conclusion',
      ],
      heroImage: '/assets/soapygo.png',
      overview:
        'SoapyGo is a laundry app that helps users book washing, folding, ironing, and dry-cleaning services with doorstep pickup and delivery — designed for busy urban professionals.',
      goal: {
        text: 'To build an intuitive end-to-end laundry service flow with clear pricing, simplified booking, and real-time order visibility for everyday users.',
      },
      problem: {
        summary:
          'Users struggle with local laundry stores due to fragmented experiences, opaque pricing, and zero visibility into their orders.',
        stats: [
          { value: '83%', label: 'couldn’t track pickup or delivery' },
          { value: '68%', label: 'found pricing unclear' },
          { value: '55%', label: 'had communication issues' },
        ],
      },
      solution: {
        summary:
          'I designed SoapyGo, an app that simplifies laundry from one-tap booking to doorstep delivery — with real-time updates and transparent pricing baked in.',
        items: [
          'Booking time reduced by 41%',
          'Direct chat with service providers',
          'Real-time pickup and delivery reminders',
          'Confusion around pricing dropped from 68% → 12%',
        ],
      },
      challenges: [
        {
          title: 'High drop-off during signup',
          desc: '42% of users quit at the phone-number / OTP step.',
          tag: 'Onboarding',
        },
        {
          title: 'Complex service selection',
          desc: 'Too many service categories at once led to cognitive load.',
          tag: 'IA',
        },
        {
          title: 'No live order visibility',
          desc: 'Users were calling store owners directly for status updates.',
          tag: 'Trust',
        },
      ],
      marketResearch: {
        summary:
          'Competitor analysis across UrbanClap, Tumbledry, and PressTo revealed a consistent gap: customers wanted live status, not call-backs.',
        stats: [
          { value: '67%', label: 'prefer apps that show real-time order status' },
        ],
        image: '/assets/soapygo/research.avif',
      },
      userFlow: {
        label: 'User Flow',
        caption:
          'End-to-end happy path — from sign-up through booking, pickup, tracking, and delivery.',
        image: '/assets/soapygo/userflow.avif',
      },
      sitemap: {
        label: 'Sitemap',
        caption:
          'Information architecture — every screen mapped against primary user goals.',
        image: '/assets/soapygo/sitemap.avif',
      },
      wireframes: {
        label: 'Wireframes',
        caption: 'Low-fidelity structure to define hierarchy and flow before pixel polish.',
        images: ['/assets/soapygo/wireframe1.avif', '/assets/soapygo/wireframe2.avif'],
      },
      walkthrough: {
        label: 'Final UI Walkthrough',
        sub: 'Each screen, intentional. Each metric, measured.',
        items: [
          {
            n: '01',
            title: 'Splash → Onboarding',
            desc: 'Created a friendly splash + 3-step onboarding that reduced drop-offs during testing by 22%.',
            metric: { v: '-22%', k: 'onboarding drop-off' },
            image: '/assets/soapygo/splash.png',
          },
          {
            n: '02',
            title: 'Login / Signup / OTP',
            desc: 'Simplified login with single field + auto-OTP detection.',
            metric: { v: '52s → 21s', k: 'login time' },
            image: '/assets/soapygo/login.png',
          },
          {
            n: '03',
            title: 'Homepage',
            desc: 'Personalized dashboard with key categories and a promo carousel. Users found services 33% faster, and the offers card got 71% more attention.',
            metric: { v: '+33%', k: 'service discovery speed' },
            image: '/assets/soapygo/homepage.png',
          },
          {
            n: '04',
            title: 'Browse Services',
            desc: 'Service list redesigned with big photo cards + distance/time labels for clarity. Segmented tab bar to switch between Tops, Bottoms, Dresses easily; visual item add/remove.',
            image: '/assets/soapygo/browse.png',
          },
          {
            n: '05',
            title: 'Schedule Pickup & Chat',
            desc: 'A clean calendar + time-slot picker dramatically improved completion. In-app chat helps users coordinate specific requests — 6 of 8 users in testing said it “reduced anxiety about pickup”.',
            metric: { v: '62% → 91%', k: 'pickup-success rate' },
            image: '/assets/soapygo/schedule.png',
          },
          {
            n: '06',
            title: 'Order Summary + Confirmation',
            desc: 'Crystal-clear pricing breakdown with no last-minute surprises — a single source of truth for the order.',
            image: '/assets/soapygo/ordersummary.png',
          },
          {
            n: '07',
            title: 'My Orders + Tracking',
            desc: 'Added a 5-stage visual tracker, reducing “Where is my laundry?” calls by 62% in usability testing.',
            metric: { v: '-62%', k: 'support calls' },
            image: '/assets/soapygo/tracking.png',
          },
        ],
      },
      prototype: {
        label: 'Prototype',
        caption: 'Interactive Figma prototype walkthrough — booking, scheduling, and live tracking in motion.',
        video: '/assets/soapygo/prototype.mp4',
      },
      future: [
        'Smart auto-scheduling that predicts user laundry cycles.',
        'Real-time delivery map (Swiggy / Zepto-style live tracking).',
        'Subscription plans with monthly packages to improve retention.',
      ],
      conclusion: {
        text: 'Designing SoapyGo helped me understand the importance of clarity, predictability, and micro-interactions in a service-based app. By simplifying the booking flow, improving service-selection visibility, and enabling real-time tracking and communication, the product became significantly more user-friendly and reliable.',
        metrics: [
          { value: '31%', label: 'faster signup' },
          { value: '22%', label: 'increase in service discovery' },
          { value: '28%', label: 'faster decision-making' },
          { value: '40%', label: 'fewer support calls' },
        ],
      },
    },
  },
  {
    id: 'trakle',
    title: 'TRAKLE — HR Management',
    tag: 'B2B · Web Dashboard',
    year: '2024',
    description:
      'Designing a unified HR system that reduces manual effort, improves team visibility, and enhances decision-making efficiency.',
    cover: '/assets/trakle.png',
    coverFit: 'cover',
    accent: '#A78BFA',
    chips: ['Product Design', 'SaaS', 'Data Viz'],
    role: 'Product Designer',
    timeline: '10 days',
    tools: 'Figma',
    rich: {
      layout: [
        'overview',
        'goal',
        'problem',
        'solution',
        'challenges',
        'marketResearch',
        'userFlow',
        'walkthrough',
        'impact',
        'future',
        'conclusion',
      ],
      heroImage: '/assets/trakle.png',
      overview:
        'Trakle is an HR Management SaaS dashboard designed to centralize HR, employee, and project operations for small-to-mid-sized companies. The idea was to create an intelligent workspace where HRs can monitor performance, approve transactions, and assign tasks — all in real time.',
      goal: {
        text: 'To create a single source of truth so HRs and team leads make faster, data-driven decisions.',
      },
      problem: {
        summary:
          'HR teams used multiple tools (spreadsheets, email, standalone apps). This fragmented workflow caused time spent switching tools, manual reconciliation, and missed approvals.',
        stats: [
          { value: '65%', label: 'of HRs reported >2 hours/day on manual tracking' },
          { value: '6+', label: 'clicks needed for approvals across systems' },
        ],
      },
      solution: {
        summary:
          'Trakle centralizes login, HR & employee panels, transactions, projects, and overview reports — automating attendance tracking, clarifying transactions, and surfacing top KPIs.',
        items: [
          'Reduced manual HR tasks by 40%',
          'Cut average approval steps from 6 → 3',
          'Improved visibility by 55% in prototype tests',
        ],
      },
      challenges: [
        {
          title: 'Data fragmentation',
          desc: 'Multiple data sources made it hard to trust reports.',
          tag: 'Data',
        },
        {
          title: 'Overloaded UI',
          desc: 'Large tables made problem diagnosis slow.',
          tag: 'UX',
        },
        {
          title: 'Slow approvals',
          desc: 'Managers performed many clicks to approve payroll or tasks.',
          tag: 'Workflow',
        },
      ],
      marketResearch: {
        summary:
          'I benchmarked Trakle against Zoho People, Keka, and Darwinbox to find gaps in speed, onboarding clarity, and visualization.',
        stats: [
          { value: '68%', label: 'of HRs prefer dashboards with “one-click insights”' },
          { value: '~3.2s', label: 'Trakle prototype target load time (vs typical 7–9s)' },
        ],
      },
      userFlow: {
        label: 'User Flow',
        caption:
          'End-to-end flow across login, HR panel, employee panel, transactions, projects, and the unified overview dashboard.',
        image: '/assets/trakle/userflow.avif',
      },
      walkthrough: {
        label: 'Final UI Walkthrough',
        sub: 'A modular system that scales from 5-person teams to 500-person ops.',
        items: [
          {
            n: '01',
            title: 'Login / Signup',
            desc: 'Smooth micro-interactions with real-time error checks. Users get to work in seconds, not minutes.',
            image: '/assets/trakle/login.png',
          },
          {
            n: '02',
            title: 'HR Panel',
            desc: 'Real-time payroll, attendance graphs, and project tracking — all in one glanceable layout.',
            image: '/assets/trakle/hrpanel.png',
          },
          {
            n: '03',
            title: 'Employee Panel',
            desc: 'Personalized project cards plus a calendar view that surfaces upcoming deadlines.',
            image: '/assets/trakle/employee.png',
          },
          {
            n: '04',
            title: 'Transactions',
            desc: 'Filter by team or payment type; the data tells the story instead of hiding it.',
            image: '/assets/trakle/transactions.png',
          },
          {
            n: '05',
            title: 'Projects Module',
            desc: 'Progress overview, deadlines, and assigned members — accountability without micromanagement.',
            image: '/assets/trakle/projects.png',
          },
          {
            n: '06',
            title: 'Overview Dashboard',
            desc: 'KPI cards, top performers, and task trends. The first screen HRs open every morning.',
            image: '/assets/trakle/overview.png',
          },
        ],
      },
      impact: [
        { value: '40%', label: 'reduction in manual HR reporting time' },
        { value: '3.2s', label: 'load time (60% faster than Zoho)' },
        { value: '60%', label: 'increase in project visibility' },
        { value: '9/10', label: 'HR users reported easier navigation' },
      ],
      future: [
        'Payroll automation with downloadable slips.',
        'AI-driven team performance analytics.',
        'Integrations with Slack and Google Calendar.',
        'Accessibility improvements (contrast + keyboard navigation).',
      ],
      conclusion: {
        text: 'Trakle consolidated HR operations into a single product — reducing manual overhead, improving visibility, and accelerating decisions.',
        metrics: [
          { value: '40%', label: 'reduction in manual HR work' },
          { value: '30%', label: 'faster task visibility' },
          { value: '50%', label: 'fewer transaction tracking errors' },
        ],
      },
    },
  },
  {
    id: 'brand',
    title: 'Brand & Visual Design',
    tag: 'Branding · Campaigns · Social',
    year: '2024',
    description:
      'Branding, visual identity, campaigns, and social-media posts crafted to match each brand’s soul — from neon perfume drops to typographic posters.',
    cover: '/assets/brand.png',
    coverFit: 'cover',
    accent: '#6C5CE7',
    chips: ['Branding', 'Visual Identity', 'Social Media'],
    role: 'Visual / Brand Designer',
    timeline: 'Ongoing',
    tools: 'Figma · Illustrator · Photoshop',
    overview:
      'A collection of brand and campaign work spanning beauty, F&B, sportswear, and audio — each rooted in a clear point of view and translated across formats.',
    problem:
      'Brands often had strong products but weak visual storytelling — assets felt inconsistent across Instagram, OOH, and packaging.',
    process: [
      'Brand discovery workshops to extract tone & values',
      'Mood-boarding + type/colour systems',
      'Designing modular campaign templates',
      'Delivery: master files + social toolkits',
    ],
    solution:
      'Bold, type-forward identities with playful colour systems — from neon perfume bottles to sneaker performance posters and minimalist Dolby Audio campaigns. Templates that scale from a 1080×1080 reel to a billboard.',
    outcome: [
      { k: 'Brands shipped', v: '7' },
      { k: 'Avg engagement lift', v: '+34%' },
      { k: 'Asset templates', v: '40+' },
    ],
  },
];

export const services = [
  {
    id: 's1',
    icon: Layers,
    title: 'UI / UX Design',
    desc: 'End-to-end product design — research, flows, and pixel-perfect interfaces that feel obvious to use.',
  },
  {
    id: 's2',
    icon: Palette,
    title: 'Visual Design',
    desc: 'Type, color, motion, vibe. I build identity systems that show up consistently across every surface.',
  },
  {
    id: 's3',
    icon: PenTool,
    title: 'Wireframing & Prototyping',
    desc: 'From rough sketches to clickable Figma prototypes. Validate fast, ship faster.',
  },
  {
    id: 's4',
    icon: Component,
    title: 'Design Systems',
    desc: 'Scalable component libraries, tokens, and docs your engineers will actually want to use.',
  },
];

export const drivers = [
  {
    id: 'd1',
    icon: Brain,
    title: 'Understanding People',
    desc: 'I love decoding what users think, expect, and feel — often before they say it.',
  },
  {
    id: 'd2',
    icon: Search,
    title: 'Structured Thinking',
    desc: 'My engineering background made me analytical, systematic, and obsessively detail-oriented.',
  },
  {
    id: 'd3',
    icon: Lightbulb,
    title: 'Creative Problem Solving',
    desc: 'I turn raw insights into visuals, flows, and experiences that actually work.',
  },
  {
    id: 'd4',
    icon: BookOpen,
    title: 'Continuous Learning',
    desc: 'Design evolves every single day — and I evolve with it.',
  },
];

export const skills = [
  'UI/UX Design',
  'Product Design',
  'Wireframing',
  'Prototyping',
  'Visual Design',
  'Branding',
  'Social Media Design',
  'Interaction Design',
  'User Flows',
  'Research',
  'Storytelling',
  'Typography',
];

export const tools = [
  'Figma',
  'Framer',
  'FigJam',
  'Adobe Illustrator',
  'Photoshop',
  'Canva',
  'ChatGPT',
  'Midjourney',
  'DALL·E',
  'Runway',
  'Adobe Firefly',
  'HTML',
  'CSS',
];

export const marqueeTools = [
  'Figma',
  'Framer',
  'FigJam',
  'Illustrator',
  'Photoshop',
  'Midjourney',
  'Runway',
  'HTML/CSS',
];

export const testimonials = [
  {
    id: 't1',
    quote:
      'Silpa took our messy product and made it feel inevitable. Best design hire we’ve made.',
    author: 'Anika R.',
    role: 'Co-founder, Pulse',
  },
  {
    id: 't2',
    quote:
      'She thinks like a PM, designs like an artist, and ships like an engineer. Rare combo.',
    author: 'Kunal M.',
    role: 'Head of Product, Lumen',
  },
];

export const socials = [
  { id: 'em', label: 'Email', icon: Mail, href: 'mailto:silpa9211@gmail.com' },
  {
    id: 'li',
    label: 'LinkedIn',
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/silpa-kumari-069016294/',
  },
  { id: 'cv', label: 'Resume', icon: FileDown, href: RESUME_URL, download: true },
];

export const navLinks = [
  { id: 'work', label: 'Work', href: '#work' },
  { id: 'services', label: 'Services', href: '#services' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export const ArrowIcon = ArrowUpRight;
export const SkillIcon = Sparkles;
export const ToolIcon = Wrench;
