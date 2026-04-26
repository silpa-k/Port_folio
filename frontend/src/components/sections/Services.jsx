import { useRef } from 'react';
import useReveal from '../../hooks/useReveal';
import { services } from '../../mock';

export default function Services() {
  const [headRef, headIn] = useReveal();
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[700px] h-[500px] rounded-full bg-[#6C5CE7]/12 blur-[120px] pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div ref={headRef} className={`reveal ${headIn ? 'in-view' : ''} max-w-3xl`}>
          <span className="kicker"><span className="dot" /> What I Can Do</span>
          <h2 className="font-display text-4xl md:text-6xl font-semibold mt-4 tracking-tight">
            Services that <span className="text-gradient-aqua">ship</span>.
          </h2>
          <p className="text-white/60 mt-5 text-[15.5px] leading-relaxed">
            From the first whiteboard sketch to the final motion polish — here&apos;s how I plug
            into your team.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <ServiceTile key={s.id} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceTile({ service, index }) {
  const [ref, inView] = useReveal();
  const tileRef = useRef(null);
  const Icon = service.icon;

  const onMove = (e) => {
    if (!tileRef.current) return;
    const rect = tileRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    tileRef.current.style.setProperty('--mx', `${x}%`);
    tileRef.current.style.setProperty('--my', `${y}%`);
  };

  return (
    <div ref={ref} className={`reveal reveal-delay-${(index % 4) + 1} ${inView ? 'in-view' : ''}`}>
      <div ref={tileRef} onMouseMove={onMove} className="service-tile h-full">
        <div className="service-icon">
          <Icon size={22} strokeWidth={1.8} />
        </div>
        <h3 className="font-display text-xl md:text-[22px] font-semibold mt-5 tracking-tight">
          {service.title}
        </h3>
        <p className="mt-2 text-[14px] text-white/60 leading-relaxed">
          {service.desc}
        </p>
        <div className="mt-6 inline-flex items-center gap-1.5 text-[12.5px] uppercase tracking-wider text-[#00F5D4]/85">
          0{index + 1} <span className="text-white/30">/ {String(0).concat('4')}</span>
        </div>
      </div>
    </div>
  );
}
