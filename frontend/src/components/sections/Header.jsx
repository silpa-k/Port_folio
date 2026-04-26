import { useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { navLinks, profile } from '../../mock';

export default function Header({ scrolled }) {
  const [open, setOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-[#0F0F1A]/70 backdrop-blur-xl border-b border-white/5'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl grid place-items-center bg-gradient-to-br from-[#6C5CE7] to-[#00F5D4] shadow-[0_8px_24px_rgba(108,92,231,0.4)] group-hover:rotate-12 transition-transform duration-500">
            <Sparkles size={18} className="text-[#0F0F1A]" strokeWidth={2.5} />
          </div>
          <span className="font-display font-semibold text-[17px] tracking-tight">
            {profile.name.split(' ')[0]}.
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.id}
              href={l.href}
              className="text-[14.5px] text-white/70 hover:text-white link-underline transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <span className="flex items-center gap-2 text-[12.5px] text-white/70 px-3 py-1.5 rounded-full glass">
            <span className="pulse-dot" /> Available for Q3
          </span>
          <a href="#contact" className="btn-primary text-[14px] !py-2.5 !px-5">
            Hire me
          </a>
        </div>

        <button
          className="md:hidden w-10 h-10 grid place-items-center rounded-xl glass"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden mt-3 mx-6 rounded-2xl glass-strong p-4 flex flex-col gap-3">
          {navLinks.map((l) => (
            <a
              key={l.id}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-white/80 hover:text-white py-1.5"
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="btn-primary justify-center mt-1">
            Hire me
          </a>
        </div>
      )}
    </header>
  );
}
