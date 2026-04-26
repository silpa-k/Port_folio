import { ArrowUpRight } from 'lucide-react';
import useReveal from '../../hooks/useReveal';
import { projects } from '../../mock';

export default function Projects() {
  const [headRef, headIn] = useReveal();

  return (
    <section id="work" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={headRef} className={`reveal ${headIn ? 'in-view' : ''} flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14`}>
          <div>
            <span className="kicker"><span className="dot" /> Selected Work</span>
            <h2 className="font-display text-4xl md:text-6xl font-semibold mt-4 tracking-tight">
              Projects with <span className="text-gradient-aqua">soul</span>.
            </h2>
          </div>
          <p className="text-white/60 max-w-md text-[15px] leading-relaxed">
            A small slice of recent work — from neo-banking to commerce. Each one obsessed over
            until it felt inevitable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((p, idx) => {
            const featured = idx === 0;
            return (
              <ProjectCard key={p.id} project={p} featured={featured} className={featured ? 'md:col-span-2' : ''} />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, featured, className = '' }) {
  const [ref, inView] = useReveal();
  return (
    <article
      ref={ref}
      className={`reveal ${inView ? 'in-view' : ''} project-card group ${className}`}
    >
      <div className={`relative ${featured ? 'aspect-[16/9]' : 'aspect-[4/3]'} overflow-hidden`}>
        <img
          src={project.cover}
          alt={project.title}
          loading="lazy"
          className="project-cover absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F1A] via-[#0F0F1A]/30 to-transparent" />
        <div className="absolute top-5 left-5 flex items-center gap-2">
          <span className="text-[11.5px] uppercase tracking-wider px-2.5 py-1 rounded-full glass-strong text-white/85">
            {project.tag}
          </span>
          <span className="text-[11.5px] uppercase tracking-wider px-2.5 py-1 rounded-full glass-strong text-white/85">
            {project.year}
          </span>
        </div>
        <div className="absolute top-5 right-5">
          <div className="project-arrow w-11 h-11 grid place-items-center rounded-full bg-white/10 text-white border border-white/20">
            <ArrowUpRight size={18} />
          </div>
        </div>
      </div>

      <div className="p-6 md:p-7">
        <div className="flex items-start justify-between gap-6">
          <h3 className="font-display text-2xl md:text-[28px] font-semibold tracking-tight">
            {project.title}
          </h3>
          <div className="flex items-center gap-4 shrink-0">
            {project.metrics.map((m) => (
              <div key={m.k} className="text-right">
                <div className="font-display text-base md:text-lg font-semibold" style={{ color: project.accent }}>
                  {m.v}
                </div>
                <div className="text-[10.5px] uppercase tracking-wider text-white/45">
                  {m.k}
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-3 text-[14.5px] text-white/60 leading-relaxed max-w-xl">
          {project.description}
        </p>
        <button
          type="button"
          onClick={() => alert(`Case study for "${project.title}" coming soon ✨`)}
          className="mt-5 inline-flex items-center gap-1.5 text-[14px] font-medium text-white/85 hover:text-[#00F5D4] transition-colors link-underline"
        >
          View Case Study <ArrowUpRight size={15} />
        </button>
      </div>
    </article>
  );
}
