import { Sparkles } from 'lucide-react';
import { profile, socials, navLinks } from '../../mock';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl grid place-items-center bg-gradient-to-br from-[#6C5CE7] to-[#00F5D4]">
                <Sparkles size={18} className="text-[#0F0F1A]" strokeWidth={2.5} />
              </div>
              <span className="font-display text-lg font-semibold">{profile.name}</span>
            </div>
            <p className="mt-4 text-white/55 text-[14.5px] max-w-sm leading-relaxed">
              UI/UX & visual designer crafting interfaces that feel as good as they look. Open to
              freelance briefs and senior IC roles.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="text-[11.5px] uppercase tracking-[0.18em] text-white/40">Sitemap</div>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.id}>
                  <a href={l.href} className="text-white/75 hover:text-[#00F5D4] transition-colors text-[14.5px]">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-[11.5px] uppercase tracking-[0.18em] text-white/40">Elsewhere</div>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.id}
                    href={s.href}
                    target={s.id === 'em' ? undefined : '_blank'}
                    rel="noreferrer"
                    className="flex items-center gap-2 px-3.5 py-2 rounded-full glass text-[13px] text-white/80 hover:text-[#00F5D4] hover:border-[#00F5D4]/30 transition-all"
                  >
                    <Icon size={14} /> {s.label}
                  </a>
                );
              })}
            </div>
            <p className="mt-6 text-[13px] text-white/55">
              <a href={`mailto:${profile.email}`} className="link-underline">{profile.email}</a>
            </p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p className="text-[12.5px] text-white/40">
            © {new Date().getFullYear()} {profile.name}. Designed & coded with love.
          </p>
          <p className="text-[12.5px] text-white/40">
            Built in Figma → React. Hosted with care.
          </p>
        </div>
      </div>
    </footer>
  );
}
