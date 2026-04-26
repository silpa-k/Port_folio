import { CheckCircle2, Sparkles } from 'lucide-react';
import useReveal from '../../hooks/useReveal';
import { profile, drivers } from '../../mock';

export default function About() {
  const [r1, v1] = useReveal();
  const [r2, v2] = useReveal();
  const [r3, v3] = useReveal();

  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-start">
        {/* LEFT — Image */}
        <div ref={r1} className={`reveal ${v1 ? 'in-view' : ''} lg:col-span-5 order-2 lg:order-1 lg:sticky lg:top-28`}>
          <div className="relative">
            <div className="absolute -inset-5 rounded-[36px] bg-gradient-to-br from-[#00F5D4]/25 via-transparent to-[#6C5CE7]/30 blur-2xl" />
            <div className="relative glass rounded-[28px] p-2.5">
              <div className="relative rounded-[22px] overflow-hidden aspect-[4/5]">
                <img
                  src={profile.about}
                  alt={`${profile.name}`}
                  loading="lazy"
                  className="w-full h-full object-cover"
                  style={{ filter: 'brightness(1.15) contrast(1.05)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F1A]/40 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div>
                    <div className="font-display text-lg font-semibold">{profile.name}</div>
                    <div className="text-xs text-white/70">{profile.location}</div>
                  </div>
                  <span className="flex items-center gap-2 text-[12px] glass-strong px-2.5 py-1 rounded-full">
                    <span className="pulse-dot" /> Open to work
                  </span>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-3 sm:right-6 glass-strong rounded-2xl px-4 py-3 flex items-center gap-3 shadow-2xl">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#6C5CE7] to-[#00F5D4] grid place-items-center">
                <Sparkles size={16} className="text-[#0F0F1A]" strokeWidth={2.5} />
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-wider text-white/50">Currently</div>
                <div className="text-[13.5px] font-medium">Designing for humans</div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT — Story */}
        <div className="lg:col-span-7 order-1 lg:order-2">
          <div ref={r2} className={`reveal ${v2 ? 'in-view' : ''}`}>
            <span className="kicker"><span className="dot" /> About Me</span>
            <h2 className="font-display text-4xl md:text-[58px] font-semibold mt-4 leading-[1.05] tracking-tight">
              A problem-solver at heart,<br />
              a strategist by instinct,<br />
              and a designer <span className="text-gradient-aqua">by choice</span>.
            </h2>
            <div className="mt-7 space-y-5 text-white/65 text-[15.5px] md:text-[16px] leading-[1.75] max-w-2xl">
              <p>
                I&rsquo;m <span className="text-white font-medium">{profile.name}</span> — a Bangalore-based
                designer who didn&rsquo;t begin her journey in design studios or agencies, but in the
                world of engineering, where logic and structure shaped how I see the world.
                Somewhere between solving equations and understanding how systems work, I
                discovered what truly excited me: the idea of creating things that made people
                feel understood, empowered, or simply delighted.
              </p>
              <p>
                Design entered my life gradually — as curiosity, then exploration, and finally as a
                calling. What started with experimenting on visuals, layouts, colors, and
                interactions slowly grew into a passion for crafting intuitive digital experiences
                and expressive visual stories.
              </p>
              <p>
                Today, I design across <span className="text-white">UI/UX, product, branding, visual
                design, and social media</span> — blending clarity with creativity, structure with
                emotion, and storytelling with strategy. I love taking a raw idea, understanding
                its soul, and shaping it into something functional, beautiful, and meaningful.
              </p>
            </div>

            {/* Belief callout */}
            <div className="mt-8 relative rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#6C5CE7]/12 via-transparent to-[#00F5D4]/12" />
              <div className="relative glass rounded-2xl px-6 py-5 border-l-2 border-l-[#00F5D4]">
                <div className="text-[11.5px] uppercase tracking-[0.18em] text-[#00F5D4]/85 mb-1.5">My Belief</div>
                <p className="font-display text-lg md:text-[22px] leading-snug text-white/95">
                  Design isn&rsquo;t just how something looks — it&rsquo;s how confidently it
                  works for someone who needs it.
                </p>
              </div>
            </div>
          </div>

          {/* What Drives Me */}
          <div ref={r3} className={`reveal reveal-delay-1 ${v3 ? 'in-view' : ''} mt-12`}>
            <div className="flex items-center gap-2 mb-5">
              <span className="kicker"><span className="dot" /> What Drives Me</span>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {drivers.map((d) => {
                const Icon = d.icon;
                return (
                  <div key={d.id} className="glass rounded-2xl p-5 hover:border-[#00F5D4]/25 transition-colors">
                    <div className="flex items-start gap-3.5">
                      <div className="w-10 h-10 shrink-0 rounded-xl grid place-items-center bg-gradient-to-br from-[#6C5CE7]/30 to-[#00F5D4]/20 border border-white/10 text-[#00F5D4]">
                        <Icon size={18} strokeWidth={1.9} />
                      </div>
                      <div>
                        <h4 className="font-display text-[16.5px] font-semibold tracking-tight">
                          {d.title}
                        </h4>
                        <p className="text-[13.5px] text-white/60 mt-1 leading-relaxed">
                          {d.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
