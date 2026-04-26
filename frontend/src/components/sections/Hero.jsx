import { ArrowRight, Mail, Sparkles, Star } from 'lucide-react';
import useReveal from '../../hooks/useReveal';
import { profile, heroStats, tools } from '../../mock';

export default function Hero() {
  const [r1, v1] = useReveal();
  const [r2, v2] = useReveal();
  const [r3, v3] = useReveal();

  return (
    <section id="top" className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden">
      {/* Animated orbs */}
      <div className="hero-orb orb-purple" />
      <div className="hero-orb orb-aqua" />
      <div className="hero-orb orb-pink" />
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />
      <div className="absolute inset-0 grain pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* LEFT — copy */}
          <div className="lg:col-span-7">
            <div
              ref={r1}
              className={`reveal ${v1 ? 'in-view' : ''} inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass text-[12.5px] text-white/80 mb-6`}
            >
              <Sparkles size={13} className="text-[#00F5D4]" />
              {profile.role} · {profile.location}
            </div>

            <h1
              ref={r2}
              className={`reveal reveal-delay-1 ${v2 ? 'in-view' : ''} font-display font-bold text-[44px] leading-[1.05] sm:text-[56px] md:text-[72px] lg:text-[80px] tracking-tight`}
            >
              Designing <span className="text-gradient-aqua">experiences</span>
              <br className="hidden sm:block" />
              that feel as good as <span className="italic font-medium text-white/85">they look.</span>
            </h1>

            <p
              ref={r3}
              className={`reveal reveal-delay-2 ${v3 ? 'in-view' : ''} mt-6 text-[16px] md:text-[18px] text-white/65 max-w-[560px] leading-relaxed`}
            >
              I&apos;m {profile.name.split(' ')[0]} — a UI/UX & visual designer obsessed with clean,
              impactful, user-first products. I turn fuzzy briefs into interfaces people actually
              want to use.
            </p>

            <div className={`reveal reveal-delay-3 ${v3 ? 'in-view' : ''} mt-9 flex flex-wrap items-center gap-4`}>
              <a href="#work" className="btn-primary">
                View Projects <ArrowRight size={17} />
              </a>
              <a href="#contact" className="btn-ghost">
                <Mail size={16} /> Contact me
              </a>
            </div>

            {/* Stats */}
            <div className={`reveal reveal-delay-4 ${v3 ? 'in-view' : ''} mt-12 grid grid-cols-3 max-w-md gap-6`}>
              {heroStats.map((s) => (
                <div key={s.label}>
                  <div className="font-display text-3xl md:text-4xl font-semibold text-white">
                    {s.value}
                  </div>
                  <div className="text-[12px] uppercase tracking-wider text-white/50 mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — portrait */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-6 rounded-[40px] bg-gradient-to-br from-[#6C5CE7]/30 via-transparent to-[#00F5D4]/20 blur-2xl" />
              <div className="relative glass-strong rounded-[32px] p-3 shadow-2xl">
                <div className="relative rounded-[24px] overflow-hidden w-[300px] h-[380px] sm:w-[340px] sm:h-[440px]">
                  <img
                    src={profile.avatar}
                    alt={profile.name}
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F1A]/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <div>
                      <div className="font-display text-lg font-semibold">{profile.name}</div>
                      <div className="text-xs text-white/70">{profile.handle}</div>
                    </div>
                    <div className="flex items-center gap-1 text-[12px] glass px-2.5 py-1 rounded-full">
                      <Star size={12} className="text-[#00F5D4] fill-[#00F5D4]" /> 5.0
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating chips */}
              <div className="hidden sm:flex absolute -left-10 top-10 glass-strong rounded-2xl px-4 py-3 items-center gap-2 shadow-xl animate-[floatA_5s_ease-in-out_infinite]">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6C5CE7] to-[#00F5D4] grid place-items-center">
                  <Sparkles size={14} className="text-[#0F0F1A]" strokeWidth={2.6} />
                </div>
                <div>
                  <div className="text-[11px] text-white/55">Now playing</div>
                  <div className="text-[13px] font-medium">Figma → Framer</div>
                </div>
              </div>
              <div className="hidden sm:flex absolute -right-6 bottom-10 glass-strong rounded-2xl px-4 py-3 items-center gap-2 shadow-xl">
                <span className="pulse-dot" />
                <span className="text-[13px] font-medium">Open to work</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tool marquee */}
        <div className="mt-20 relative overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0F0F1A] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0F0F1A] to-transparent z-10 pointer-events-none" />
          <div className="marquee">
            {[...tools, ...tools].map((t, i) => (
              <span key={i} className="font-display text-2xl md:text-3xl text-white/30 hover:text-white/80 transition-colors">
                {t} <span className="text-[#00F5D4] mx-2">❖</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
