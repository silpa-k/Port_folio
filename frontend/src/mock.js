// Mock data for Silpa Kumari's UI/UX Portfolio
import {
  Layers,
  Palette,
  PenTool,
  Component,
  Mail,
  Linkedin,
  Dribbble,
  Github,
  ArrowUpRight,
  Brain,
  Search,
  Lightbulb,
  BookOpen,
  Sparkles,
  Wrench,
} from 'lucide-react';

export const profile = {
  name: 'Silpa Kumari',
  handle: '@silpa.designs',
  role: 'Multidisciplinary Designer',
  location: 'Bengaluru, India',
  email: 'hello@silpakumari.design',
  linkedin: 'https://linkedin.com/in/silpakumari',
  dribbble: 'https://dribbble.com/silpakumari',
  github: 'https://github.com/silpakumari',
  avatar:
    'https://customer-assets.emergentagent.com/job_portfolio-lab-40/artifacts/7p3x22bz_WhatsApp%20Image%202026-04-26%20at%2012.13.14.jpeg',
  about:
    'https://customer-assets.emergentagent.com/job_portfolio-lab-40/artifacts/7p3x22bz_WhatsApp%20Image%202026-04-26%20at%2012.13.14.jpeg',
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
    id: 'p1',
    title: 'Nykaa — Website Redesign',
    tag: 'eCommerce · Web + Mobile',
    year: '2025',
    description:
      'Improving usability, personalization, and product discovery for users — a fresh take on India’s leading beauty platform.',
    cover:
      'https://customer-assets.emergentagent.com/job_portfolio-lab-40/artifacts/85lhtci7_Yy9QCswUt9vl513Q2nSS8K87N5A.avif',
    accent: '#FF3F8E',
    chips: ['Visual Design', 'UI Polish', 'Mobile'],
  },
  {
    id: 'p2',
    title: 'SoapyGo — Smart Laundry App',
    tag: 'Mobile · Service App',
    year: '2025',
    description:
      'Redefining convenience and transparency in daily laundry services. From scheduling to live tracking, designed end-to-end.',
    cover:
      'https://customer-assets.emergentagent.com/job_portfolio-lab-40/artifacts/4kqfz60o_Capture.PNG',
    accent: '#00F5D4',
    chips: ['UI/UX', 'Product Strategy', 'E-commerce'],
  },
  {
    id: 'p3',
    title: 'TRAKLE — HR Management',
    tag: 'B2B · Web Dashboard',
    year: '2024',
    description:
      'Designing a unified HR system that reduces manual effort and improves team visibility — finance, goals, and people in one place.',
    cover:
      'https://customer-assets.emergentagent.com/job_portfolio-lab-40/artifacts/39g5vu7j_Captur.PNG',
    accent: '#A78BFA',
    chips: ['Product Design', 'Tech Design', 'Data Viz'],
  },
  {
    id: 'p4',
    title: 'Brand & Visual Design',
    tag: 'Branding · Campaigns · Social',
    year: '2024',
    description:
      'Branding, visual identity, campaigns, and social-media posts crafted to match each brand’s soul — from neon perfume drops to typographic posters.',
    cover:
      'https://customer-assets.emergentagent.com/job_portfolio-lab-40/artifacts/9a99idiz_Cap.PNG',
    accent: '#6C5CE7',
    chips: ['Branding', 'Visual Identity', 'Social Media'],
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

// Used in hero marquee
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
  { id: 'em', label: 'Email', icon: Mail, href: 'mailto:hello@silpakumari.design' },
  { id: 'li', label: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/in/silpakumari' },
  { id: 'dr', label: 'Dribbble', icon: Dribbble, href: 'https://dribbble.com/silpakumari' },
  { id: 'gh', label: 'GitHub', icon: Github, href: 'https://github.com/silpakumari' },
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
