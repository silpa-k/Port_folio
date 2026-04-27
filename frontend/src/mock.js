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
    tag: 'eCommerce · Web + Mobile',
    year: '2025',
    description:
      'Improving usability, personalization, and product discovery for users — a fresh take on India’s leading beauty platform.',
    cover: '/assets/nykaa.avif',
    accent: '#FF3F8E',
    chips: ['Visual Design', 'UI Polish', 'Mobile'],
    overview:
      'Nykaa is India’s largest beauty and lifestyle e-retailer with millions of monthly active users. The current experience, while functional, felt cluttered on mobile and made discovery harder than it needed to be.',
    problem:
      'Users were dropping off during product discovery — too many competing CTAs, weak hierarchy, and inconsistent visual language across category and PDP screens.',
    process: [
      'Audited 30+ screens across web & mobile',
      'Mapped 4 primary user journeys (browse, search, cart, checkout)',
      'Ran a competitive teardown of Sephora, Tira, Myntra Beauty',
      'Co-created a refreshed visual language with the brand team',
    ],
    solution:
      'A calmer, content-forward home, modular product cards, and a sharpened type system that keeps Nykaa’s playful brand tone but removes visual noise. Mobile gets a re-thought bottom-nav and a snappier filter sheet.',
    outcome: [
      { k: 'Add-to-cart rate', v: '+24%' },
      { k: 'Time on PDP', v: '+18%' },
      { k: 'Visual clutter score', v: '-42%' },
    ],
    timeline: '6 weeks',
    role: 'Lead Visual Designer',
  },
  {
    id: 'soapygo',
    title: 'SoapyGo — Smart Laundry App',
    tag: 'Mobile · Service App',
    year: '2025',
    description:
      'Redefining convenience and transparency in daily laundry services. From scheduling to live tracking, designed end-to-end.',
    cover: '/assets/soapygo.png',
    accent: '#00F5D4',
    chips: ['UI/UX', 'Product Strategy', 'E-commerce'],
    overview:
      'SoapyGo is a hyperlocal laundry-on-demand service for urban professionals. The MVP needed an end-to-end mobile experience — from booking to delivery — that felt as simple as ordering food.',
    problem:
      'Existing laundry apps lacked transparency: no live status, opaque pricing, and confusing service categories. Users didn’t trust the experience enough to repeat.',
    process: [
      'User interviews with 12 working professionals in Bengaluru',
      'Service blueprinting across 5 stages: book, pickup, wash, fold, deliver',
      'Wireframed 22 screens; rapid Figma prototype in week 2',
      'Two rounds of usability tests with iterative refinement',
    ],
    solution:
      'A bold, friendly visual identity (the yellow “SG” mark) and clear service categories — Quick Wash, Wash & Fold, Dry Clean. Live order tracking with timeline UI, transparent pricing, and one-tap rebook.',
    outcome: [
      { k: 'First-week retention', v: '+38%' },
      { k: 'Avg booking time', v: '47s' },
      { k: 'Customer rating', v: '4.7 / 5' },
    ],
    timeline: '8 weeks',
    role: 'Product Designer (end-to-end)',
  },
  {
    id: 'trakle',
    title: 'TRAKLE — HR Management',
    tag: 'B2B · Web Dashboard',
    year: '2024',
    description:
      'Designing a unified HR system that reduces manual effort and improves team visibility — finance, goals, and people in one place.',
    cover: '/assets/trakle.png',
    accent: '#A78BFA',
    chips: ['Product Design', 'Tech Design', 'Data Viz'],
    overview:
      'TRAKLE is a B2B HR + finance dashboard for small business owners juggling payroll, expenses, and team goals across messy spreadsheets.',
    problem:
      'Owners were stitching data from 4–5 tools daily. There was no single source of truth for cash, goals, or upcoming bills — and existing dashboards felt cold and corporate.',
    process: [
      'Stakeholder interviews with 6 SMB founders',
      'Information architecture for the unified dashboard',
      'Designed a custom data-viz component library',
      'Iterated on dark + light themes for long sessions',
    ],
    solution:
      'A single overview screen surfacing balance, goals, upcoming bills, and recent transactions — all glanceable. A bold purple/pink accent system keeps the dashboard human, not clinical. Modular cards adapt across tenant types.',
    outcome: [
      { k: 'Tools consolidated', v: '5 → 1' },
      { k: 'Daily time saved', v: '~45 min' },
      { k: 'Activation rate', v: '+52%' },
    ],
    timeline: '10 weeks',
    role: 'Product Designer + Data-viz lead',
  },
  {
    id: 'brand',
    title: 'Brand & Visual Design',
    tag: 'Branding · Campaigns · Social',
    year: '2024',
    description:
      'Branding, visual identity, campaigns, and social-media posts crafted to match each brand’s soul — from neon perfume drops to typographic posters.',
    cover: '/assets/brand.png',
    accent: '#6C5CE7',
    chips: ['Branding', 'Visual Identity', 'Social Media'],
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
    timeline: 'Ongoing',
    role: 'Visual / Brand Designer',
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
