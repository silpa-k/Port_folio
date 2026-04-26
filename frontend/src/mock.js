// Mock data for Silpa Kumaru's UI/UX Portfolio
// All data here is mocked — easy to swap with backend later.

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
} from 'lucide-react';

export const profile = {
  name: 'Silpa Kumaru',
  handle: '@silpa.designs',
  role: 'UI/UX & Visual Designer',
  location: 'Bengaluru, India',
  email: 'hello@silpakumaru.design',
  linkedin: 'https://linkedin.com/in/silpakumaru',
  dribbble: 'https://dribbble.com/silpakumaru',
  github: 'https://github.com/silpakumaru',
  avatar:
    'https://images.unsplash.com/photo-1654512697681-8434b50096dd?w=900&q=80&auto=format&fit=crop',
  about:
    'https://images.pexels.com/photos/3769004/pexels-photo-3769004.jpeg?w=1200&auto=compress',
  yearsExp: 4,
  shipped: 28,
  clients: 14,
};

export const heroStats = [
  { value: '4+', label: 'Years designing' },
  { value: '28', label: 'Products shipped' },
  { value: '14', label: 'Happy clients' },
];

export const projects = [
  {
    id: 'p1',
    title: 'Lumen — Neo Banking',
    tag: 'FinTech · Mobile App',
    year: '2025',
    description:
      'Reimagined a mobile banking experience for Gen Z — smart spend tracking, social splits and a card OS that feels like a game.',
    cover:
      'https://images.pexels.com/photos/6406691/pexels-photo-6406691.jpeg?w=1200&auto=compress',
    accent: '#6C5CE7',
    metrics: [
      { k: 'Activation', v: '+38%' },
      { k: 'NPS', v: '72' },
    ],
  },
  {
    id: 'p2',
    title: 'Pulse — SaaS Analytics',
    tag: 'B2B · Web Dashboard',
    year: '2024',
    description:
      'A calm analytics workspace for hiring teams. Designed a flexible card system, dark mode, and an insights engine that surfaces signal over noise.',
    cover:
      'https://images.unsplash.com/photo-1763718528755-4bca23f82ac3?w=1400&q=80&auto=format&fit=crop',
    accent: '#00F5D4',
    metrics: [
      { k: 'Time-to-insight', v: '-46%' },
      { k: 'DAU', v: '+22%' },
    ],
  },
  {
    id: 'p3',
    title: 'Maison — Commerce Redesign',
    tag: 'eCommerce · Web + Mobile',
    year: '2024',
    description:
      'Rebuilt the checkout flow for a slow-fashion brand. One page, one mood — conversion up, returns down, vibe immaculate.',
    cover:
      'https://images.unsplash.com/photo-1757301714935-c8127a21abc6?w=1400&q=80&auto=format&fit=crop',
    accent: '#A78BFA',
    metrics: [
      { k: 'Conversion', v: '+31%' },
      { k: 'Cart drop-off', v: '-19%' },
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

export const tools = [
  'Figma',
  'Framer',
  'Webflow',
  'Notion',
  'After Effects',
  'Spline',
  'Lottie',
  'Cursor',
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
  { id: 'em', label: 'Email', icon: Mail, href: 'mailto:hello@silpakumaru.design' },
  { id: 'li', label: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/in/silpakumaru' },
  { id: 'dr', label: 'Dribbble', icon: Dribbble, href: 'https://dribbble.com/silpakumaru' },
  { id: 'gh', label: 'GitHub', icon: Github, href: 'https://github.com/silpakumaru' },
];

export const navLinks = [
  { id: 'work', label: 'Work', href: '#work' },
  { id: 'services', label: 'Services', href: '#services' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export const ArrowIcon = ArrowUpRight;
