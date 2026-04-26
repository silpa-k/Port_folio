import { Sparkles, Wrench } from 'lucide-react';
import useReveal from '../../hooks/useReveal';
import { skills, tools } from '../../mock';

export default function Skills() {
  const [r1, v1] = useReveal();
  const [r2, v2] = useReveal();
  const [r3, v3] = useReveal();

  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="absolute left-0 top-1/4 w-[500px] h-[400px] rounded-full bg-[#00F5D4]/8 blur-[120px] pointer-events-none" />
      <div className="absolute right-0 bottom-0 w-[500px] h-[400px] rounded-full bg-[#6C5CE7]/10 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div ref={r1} className={`reveal ${v1 ? 'in-view' : ''} max-w-3xl`}>
          <span className="kicker"><span className="dot" /> Skills & Toolkit</span>
          <h2 className="font-display text-4xl md:text-6xl font-semibold mt-4 tracking-tight">
            What I bring to the <span className="text-gradient-aqua">table</span>.
          </h2>
          <p className="text-white/60 mt-5 text-[15.5px] leading-relaxed">
            A blend of craft, strategy and tools — sharpened over years of shipping real product
            and brand work.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-2 gap-6">
          {/* SKILLS */}
          <div ref={r2} className={`reveal reveal-delay-1 ${v2 ? 'in-view' : ''} glass rounded-[28px] p-7 md:p-9 relative overflow-hidden`}>
            <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-[#00F5D4]/15 blur-3xl" />
            <div className="relative">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl grid place-items-center bg-gradient-to-br from-[#6C5CE7] to-[#00F5D4]">
                  <Sparkles size={20} className="text-[#0F0F1A]" strokeWidth={2.4} />
                </div>
                <div>
                  <div className="text-[11.5px] uppercase tracking-[0.18em] text-white/50">01 — Skills</div>
                  <h3 className="font-display text-xl font-semibold">What I do</h3>
                </div>
              </div>
              <div className="mt-7 flex flex-wrap gap-2.5">
                {skills.map((s, i) => (
                  <span
                    key={s}
                    className="group inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-[13.5px] text-white/85 bg-white/[0.04] border border-white/10 hover:border-[#00F5D4]/45 hover:text-[#00F5D4] hover:bg-[#00F5D4]/8 transition-all"
                    style={{ animationDelay: `${i * 30}ms` }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00F5D4] group-hover:scale-150 transition-transform" />
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* TOOLS */}
          <div ref={r3} className={`reveal reveal-delay-2 ${v3 ? 'in-view' : ''} glass rounded-[28px] p-7 md:p-9 relative overflow-hidden`}>
            <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-[#6C5CE7]/20 blur-3xl" />
            <div className="relative">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl grid place-items-center bg-gradient-to-br from-[#00F5D4] to-[#6C5CE7]">
                  <Wrench size={19} className="text-[#0F0F1A]" strokeWidth={2.4} />
                </div>
                <div>
                  <div className="text-[11.5px] uppercase tracking-[0.18em] text-white/50">02 — Tools</div>
                  <h3 className="font-display text-xl font-semibold">What I use</h3>
                </div>
              </div>
              <div className="mt-7 flex flex-wrap gap-2.5">
                {tools.map((t) => (
                  <span
                    key={t}
                    className="group inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-[13.5px] text-white/85 bg-white/[0.04] border border-white/10 hover:border-[#A78BFA]/50 hover:text-white hover:bg-[#6C5CE7]/12 transition-all"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A78BFA] group-hover:scale-150 transition-transform" />
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
