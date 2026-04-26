import { CheckCircle2, Sparkles } from 'lucide-react';
import useReveal from '../../hooks/useReveal';
import { profile, testimonials } from '../../mock';

const principles = [
  'User-first thinking, always',
  'Pixel-perfect execution',
  'Systems over one-offs',
  'Ship, learn, iterate',
];

export default function About() {
  const [r1, v1] = useReveal();
  const [r2, v2] = useReveal();

  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
        {/* Image */}
        <div ref={r1} className={`reveal ${v1 ? 'in-view' : ''} lg:col-span-5 order-2 lg:order-1`}>
          <div className="relative">
            <div className="absolute -inset-5 rounded-[36px] bg-gradient-to-br from-[#00F5D4]/25 via-transparent to-[#6C5CE7]/30 blur-2xl" />
            <div className="relative glass rounded-[28px] p-2.5">
              <div className="relative rounded-[22px] overflow-hidden aspect-[4/5]">
                <img
                  src={profile.about}
                  alt={`${profile.name} working`}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F1A]/60 via-transparent to-transparent" />
              </div>
            </div>
            {/* Floating tag */}
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

        {/* Copy */}
        <div ref={r2} className={`reveal reveal-delay-1 ${v2 ? 'in-view' : ''} lg:col-span-7 order-1 lg:order-2`}>
          <span className="kicker"><span className="dot" /> About</span>
          <h2 className="font-display text-4xl md:text-[58px] font-semibold mt-4 leading-[1.05] tracking-tight">
            I make complex things <span className="text-gradient-aqua">feel obvious</span>.
          </h2>
          <p className="mt-6 text-white/65 text-[16px] leading-relaxed max-w-2xl">
            Hey, I&apos;m {profile.name} — a UI/UX designer based in {profile.location}. I&apos;ve
            spent the last {profile.yearsExp}+ years pairing design thinking with sharp visual
            craft to ship products people actually love. From early-stage zero-to-one bets to
            scaled design systems, I obsess over the details that make experiences feel effortless.
          </p>
          <p className="mt-4 text-white/55 text-[15.5px] leading-relaxed max-w-2xl">
            My approach: start with the person, sweat the flow, and let visual design do the
            heavy lifting only after the bones are right.
          </p>

          <ul className="mt-8 grid sm:grid-cols-2 gap-3 max-w-lg">
            {principles.map((p) => (
              <li key={p} className="flex items-center gap-2.5 text-[14.5px] text-white/80">
                <CheckCircle2 size={17} className="text-[#00F5D4] shrink-0" />
                {p}
              </li>
            ))}
          </ul>

          {/* Mini testimonials */}
          <div className="mt-10 grid sm:grid-cols-2 gap-4 max-w-2xl">
            {testimonials.map((t) => (
              <figure key={t.id} className="glass rounded-2xl p-5">
                <blockquote className="text-[14px] text-white/80 leading-relaxed">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-3 text-[12.5px] text-white/50">
                  <span className="text-white/80 font-medium">{t.author}</span> · {t.role}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
